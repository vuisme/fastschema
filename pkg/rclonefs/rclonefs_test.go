package rclonefs

import (
	"path"
	"testing"

	"github.com/fastschema/fastschema/fs"
	"github.com/stretchr/testify/assert"
)

func TestNewFromConfig(t *testing.T) {
	rootDir := t.TempDir()
	diskConfigs := []*fs.DiskConfig{
		{
			Driver:          "s3",
			Name:            "s3-disk",
			Root:            "/root",
			Provider:        "DigitalOcean",
			Bucket:          "my-bucket",
			Region:          "us-west-2",
			Endpoint:        "https://s3.us-west-2.amazonaws.com",
			AccessKeyID:     "access-key",
			SecretAccessKey: "secret-key",
			BaseURL:         "https://example.com/s3",
			ACL:             "private",
		},
		{
			Driver:  "local",
			Name:    "local-disk",
			Root:    "",
			BaseURL: "https://example.com/local",
		},
		{
			Driver:       "drive",
			Name:         "drive-disk",
			Root:         "/drive-root",
			ClientID:     "drive-client-id",
			ClientSecret: "drive-client-secret",
			AccessToken:  "drive-access-token",
			BaseURL:      "https://example.com/drive",
		},
	}

	// Test case for missing local disk root
	disks, err := NewFromConfig(diskConfigs, rootDir)
	assert.Error(t, err)
	assert.Contains(t, err.Error(), "root is required for local disk")
	assert.Nil(t, disks)

	// Correcting local disk root
	diskConfigs[1].Root = "local-root"
	disks, err = NewFromConfig(diskConfigs, rootDir)
	assert.NoError(t, err)
	assert.Equal(t, 3, len(disks))

	// Check if the first disk is an S3 disk
	s3Disk, ok := disks[0].(*RcloneS3)
	assert.True(t, ok)
	assert.Equal(t, "s3-disk", s3Disk.Name())
	assert.Equal(t, "/root", s3Disk.Root())
	assert.Equal(t, "DigitalOcean", s3Disk.config.Provider)
	assert.Equal(t, "us-west-2", s3Disk.config.Region)
	assert.Equal(t, "https://s3.us-west-2.amazonaws.com", s3Disk.config.Endpoint)
	assert.Equal(t, "access-key", s3Disk.config.AccessKeyID)
	assert.Equal(t, "secret-key", s3Disk.config.SecretAccessKey)
	assert.Equal(t, "https://example.com/s3", s3Disk.config.BaseURL)
	assert.Equal(t, "private", s3Disk.config.ACL)

	// Check if the second disk is a local disk
	localDisk, ok := disks[1].(*RcloneLocal)
	assert.True(t, ok)
	assert.Equal(t, "local-disk", localDisk.Name())
	assert.Equal(t, path.Join(rootDir, "local-root"), localDisk.Root())
	assert.Equal(t, "https://example.com/local", localDisk.config.BaseURL)

	// Check if the third disk is a Google Drive disk
	driveDisk, ok := disks[2].(*RcloneDrive)
	assert.True(t, ok)
	assert.Equal(t, "drive-disk", driveDisk.Name())
	assert.Equal(t, "/drive-root", driveDisk.Root())
	assert.Equal(t, "drive-client-id", driveDisk.config.ClientID)
	assert.Equal(t, "drive-client-secret", driveDisk.config.ClientSecret)
	assert.Equal(t, "drive-access-token", driveDisk.config.AccessToken)
	assert.Equal(t, "https://example.com/drive", driveDisk.config.BaseURL)
}
