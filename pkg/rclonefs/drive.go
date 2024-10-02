package rclonefs

import (
	"context"
	"fmt"
	"net/url"
	"path"
	"strings"

	"github.com/fastschema/fastschema/fs"
	"github.com/rclone/rclone/backend/drive"
	rclonefs "github.com/rclone/rclone/fs"
	"github.com/rclone/rclone/fs/config/configmap"
)

type RcloneDriveConfig struct {
	Name            string              `json:"name"`
	Root            string              `json:"root"`
	ClientID        string              `json:"client_id"`
	ClientSecret    string              `json:"client_secret"`
	AccessToken     string              `json:"access_token"`
	ChunkSize       rclonefs.SizeSuffix `json:"chunk_size"`
	CopyCutoff      rclonefs.SizeSuffix `json:"copy_cutoff"`
	BaseURL         string              `json:"base_url"`
}

type RcloneDrive struct {
	*fs.DiskBase
	*BaseRcloneDisk
	config *RcloneDriveConfig
}

func NewDrive(config *RcloneDriveConfig) (fs.Disk, error) {
	if config.ChunkSize < rclonefs.SizeSuffix(1024*1024*5) {
		config.ChunkSize = rclonefs.SizeSuffix(1024 * 1024 * 5)
	}

	if config.CopyCutoff < rclonefs.SizeSuffixBase {
		config.CopyCutoff = rclonefs.SizeSuffixBase
	}

	diskBase := &fs.DiskBase{
		DiskName: config.Name,
		Root:     config.Root,
	}

	rdrive := &RcloneDrive{
		config:   config,
		DiskBase: diskBase,
		BaseRcloneDisk: &BaseRcloneDisk{
			Disk:           config.Name,
			UploadFilePath: diskBase.UploadFilePath,
			IsAllowedMime:  diskBase.IsAllowedMime,
		},
	}

	rdrive.BaseRcloneDisk.GetURL = rdrive.URL
	cfgMap := &configmap.Simple{}
	cfgMap.Set("client_id", config.ClientID)
	cfgMap.Set("client_secret", config.ClientSecret)
	cfgMap.Set("token", config.AccessToken)
	cfgMap.Set("chunk_size", config.ChunkSize.String())
	cfgMap.Set("copy_cutoff", config.CopyCutoff.String())

	fsDriver, err := drive.NewFs(context.Background(), config.Name, config.Root, cfgMap)
	if err != nil {
		return nil, err
	}

	rdrive.Fs = fsDriver

	return rdrive, nil
}

func (r *RcloneDrive) Root() string {
	return r.config.Root
}

func (r *RcloneDrive) LocalPublicPath() string {
	return ""
}

func (r *RcloneDrive) URL(filepath string) string {
	endpointURL, err := url.Parse(r.config.BaseURL)
	if err != nil {
		return ""
	}

	// Ensure the base URL does not end with a slash
	host := endpointURL.Host
	host = strings.TrimSuffix(host, "/")

	// Ensure the file path does not start with a slash
	cleanPath := path.Join(r.config.Root, filepath)
	cleanPath = strings.TrimPrefix(cleanPath, "/")
	cleanedURL := fmt.Sprintf("%s://%s/%s", endpointURL.Scheme, host, cleanPath)

	return cleanedURL
}
