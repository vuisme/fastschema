package rclonefs

import (
	"testing"

	"github.com/stretchr/testify/assert"
)

func TestNewDrive(t *testing.T) {
	config := &RcloneDriveConfig{
		Name:         "drive",
		Root:         "/path/to/root",
		ClientID:     "client_id",
		ClientSecret: "client_secret",
		AccessToken:  "access_token",
		BaseURL:      "https://drive.example.com",
	}

	disk, err := NewDrive(config)

	assert.NoError(t, err)
	assert.NotNil(t, disk)

	rdisk, ok := disk.(*RcloneDrive)
	assert.True(t, ok)
	assert.Equal(t, config.Name, rdisk.Disk)
	assert.Equal(t, config.Root, rdisk.Root())
	assert.Equal(t, config.ClientID, rdisk.config.ClientID)
	assert.Equal(t, config.ClientSecret, rdisk.config.ClientSecret)
	assert.Equal(t, config.AccessToken, rdisk.config.AccessToken)
	assert.Equal(t, config.BaseURL, rdisk.config.BaseURL)
}

func TestRcloneDriveURL(t *testing.T) {
	config := &RcloneDriveConfig{
		Name:         "drive",
		Root:         "/path/to/root",
		ClientID:     "client_id",
		ClientSecret: "client_secret",
		AccessToken:  "access_token",
		BaseURL:      "https://drive.example.com",
	}

	disk, err := NewDrive(config)
	assert.NoError(t, err)
	assert.NotNil(t, disk)

	rdisk, ok := disk.(*RcloneDrive)
	assert.True(t, ok)

	filepath := "/folder/file.txt"
	expectedURL := config.BaseURL + filepath
	actualURL := rdisk.URL(filepath)

	assert.Equal(t, expectedURL, actualURL)

	// invalid base URL
	disk, err = NewDrive(&RcloneDriveConfig{
		Name:    "drive",
		BaseURL: ":invalid_base_url",
	})
	assert.NoError(t, err)
	rdisk, ok = disk.(*RcloneDrive)
	assert.True(t, ok)
	actualURL = rdisk.URL(filepath)
	assert.Empty(t, actualURL)
}
