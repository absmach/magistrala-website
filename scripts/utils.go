package main

import (
	"crypto/md5"
	"encoding/hex"
	"fmt"
	"io"
	"math"
	"os"
	"strings"
	"time"
)

func GetFileHash(filepath string) (string, error) {
	f, err := os.Open(filepath)
	if err != nil {
		return "", err
	}
	defer f.Close()

	h := md5.New()
	if _, err := io.Copy(h, f); err != nil {
		return "", err
	}

	return hex.EncodeToString(h.Sum(nil)), nil
}

func CalculateReadingTime(htmlContent string, wpm int) string {
	inTag := false
	var textBuilder strings.Builder
	for _, r := range htmlContent {
		if r == '<' {
			inTag = true
			continue
		}
		if r == '>' {
			inTag = false
			continue
		}
		if !inTag {
			textBuilder.WriteRune(r)
		}
	}

	text := textBuilder.String()
	words := len(strings.Fields(text))
	if wpm <= 0 {
		wpm = 200
	}
	minutes := int(math.Max(1, math.Round(float64(words)/float64(wpm))))
	return fmt.Sprintf("%d min", minutes)
}

func FormatDate(dateStr string, formatStr string) string {
	layout := "2006-01-02"
	t, err := time.Parse(layout, dateStr)
	if err != nil {
		return dateStr
	}

	goFormat := "January 02, 2006" // Default mapping for %B %d, %Y

	if strings.Contains(formatStr, "%B") {
		goFormat = strings.ReplaceAll(goFormat, "January", "January")
	}
	if formatStr == "%B %d, %Y" {
		goFormat = "January 02, 2006"
	}

	return t.Format(goFormat)
}
