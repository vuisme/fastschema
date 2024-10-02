package rclonefs

import (
	"errors"
	"path"
	"path/filepath"

	"github.com/fastschema/fastschema/fs"
)

func NewFromConfig(diskConfigs []*fs.DiskConfig, localRoot string) ([]fs.Disk, error) {
	var disks []fs.Disk

	for _, diskConfig := range diskConfigs {
		switch diskConfig.Driver {
		case "s3":
			s3Disk, err := NewS3(&RcloneS3Config{
				Name:            diskConfig.Name,
				Root:            diskConfig.Root,
				Provider:        diskConfig.Provider,
				Bucket:          diskConfig.Bucket,
				Region:          diskConfig.Region,
				Endpoint:        diskConfig.Endpoint,
				AccessKeyID:     diskConfig.AccessKeyID,
				SecretAccessKey: diskConfig.SecretAccessKey,
				BaseURL:         diskConfig.BaseURL,
				ACL:             diskConfig.ACL,
			})

			if err != nil {
				return nil, err
			}

			disks = append(disks, s3Disk)
		case "local":
			if diskConfig.Root == "" {
				return nil, errors.New("root is required for local disk")
			}

			// if diskConfig.Root is not an absolute path
			// we need to join it with localRoot
			if !filepath.IsAbs(diskConfig.Root) {
				diskConfig.Root = path.Join(localRoot, diskConfig.Root)
			}

			localDisk, err := NewLocal(&RcloneLocalConfig{
				Name:       diskConfig.Name,
				Root:       diskConfig.Root,
				PublicPath: diskConfig.PublicPath,
				BaseURL:    diskConfig.BaseURL,
				GetBaseURL: diskConfig.GetBaseURL,
			})

			if err != nil {
				return nil, err
			}

			disks = append(disks, localDisk)
			
		case "drive":  // Thêm hỗ trợ cho Google Drive
			driveDisk, err := NewDrive(&RcloneDriveConfig{
				Name:         diskConfig.Name,
				Root:         diskConfig.Root,
				ClientID:     diskConfig.ClientID,
				ClientSecret: diskConfig.ClientSecret,
				AccessToken:  diskConfig.AccessToken,
				BaseURL:      diskConfig.BaseURL,
			})

			if err != nil {
				return nil, err
			}

			disks = append(disks, driveDisk)
		}
	}

	return disks, nil
}
