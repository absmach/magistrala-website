package main

import (
	"flag"
	"fmt"
	"os"
)

const (
	contentDir  = "content/blogs"
	outputDir   = "blog"
	templateDir = "scripts/templates"
	cacheFile   = ".blogcache"
	configFile  = "scripts/config.yml"
)

func main() {
	force := flag.Bool("force", false, "Force rebuild all posts")

	config, err := LoadConfig(configFile)
	if err != nil {
		fmt.Printf("[Warning] config.yml not found or invalid: %v. Using defaults.\n", err)
		config = GetDefaultConfig()
	}
	builder := NewBuilder(config, contentDir, outputDir, templateDir, cacheFile, *force)
	if err := builder.Build(); err != nil {
		fmt.Printf("[Error] Critical error: %v\n", err)
		os.Exit(1)
	}
}
