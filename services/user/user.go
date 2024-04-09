package userservice

import (
	"time"

	"github.com/fastschema/fastschema/app"
	"github.com/fastschema/fastschema/pkg/errors"
	"github.com/fastschema/fastschema/pkg/utils"
	"github.com/fastschema/fastschema/schema"
	jwt "github.com/golang-jwt/jwt/v4"
)

type LoginData struct {
	Login    string `json:"login"`
	Password string `json:"password"`
}

type LoginResponse struct {
	Token   string    `json:"token"`
	Expires time.Time `json:"expires"`
}

type UserService struct {
	app app.App
}

func NewUserService(app app.App) *UserService {
	return &UserService{app: app}
}

func (u *UserService) GetRolesFromIDs(ids []uint64) []*app.Role {
	result := []*app.Role{}

	for _, role := range u.app.Roles() {
		for _, id := range ids {
			if role.ID == id {
				result = append(result, role)
			}
		}
	}

	return result
}

func (u *UserService) ParseUserToken(clientToken string) (*app.User, error) {
	jwtToken, err := jwt.ParseWithClaims(
		clientToken,
		&app.UserJwtClaims{},
		func(token *jwt.Token) (any, error) {
			return []byte(u.app.Key()), nil
		},
	)

	if err != nil {
		return nil, err
	}

	if claims, ok := jwtToken.Claims.(*app.UserJwtClaims); ok && jwtToken.Valid {
		user := claims.User
		user.Roles = u.GetRolesFromIDs(user.RoleIDs)
		return user, nil
	}

	return nil, errors.New("invalid token")
}

func (u *UserService) Login(c app.Context, loginData *LoginData) (*LoginResponse, error) {
	userModel, err := u.app.DB().Model("user")
	if err != nil {
		return nil, err
	}

	userEntity, err := userModel.Query(app.Or(
		app.EQ("username", loginData.Login),
		app.EQ("email", loginData.Login),
	)).Select(
		"id",
		"username",
		"email",
		"password",
		"provider",
		"provider_id",
		"provider_username",
		"active",
		"roles",
		schema.FieldCreatedAt,
		schema.FieldUpdatedAt,
		schema.FieldDeletedAt,
	).First()
	if err != nil && !app.IsNotFound(err) {
		return nil, err
	}

	if userEntity == nil {
		return nil, errors.Unauthorized("invalid login or password")
	}

	if err := utils.CheckHash(loginData.Password, userEntity.Get("password").(string)); err != nil {
		return nil, errors.Unauthorized("invalid login or password")
	}

	user := app.EntityToUser(userEntity)

	if !user.Active {
		return nil, errors.Unauthorized("user is not active")
	}

	exp := time.Now().Add(time.Hour * 100 * 365 * 24)
	jwtHeader := map[string]any{}
	jwtToken, err := user.JwtClaim(exp, u.app.Key(), jwtHeader)

	if err != nil {
		return nil, err
	}

	return &LoginResponse{
		Token:   jwtToken,
		Expires: exp,
	}, nil
}

func (u *UserService) Logout(c app.Context, _ *any) (*any, error) {
	return nil, nil
}

func (u *UserService) Me(c app.Context, _ *any) (*app.User, error) {
	user := c.User()

	if user == nil {
		return nil, errors.Unauthorized()
	}

	return user, nil
}
