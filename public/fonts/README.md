Self-host Nunito Sans (PowerShell helper)

This folder can contain self-hosted webfont files (WOFF2) for Nunito Sans.

Use the script below to download commonly used weights (300, 400, 600, 700, 800)
from Google Fonts and save them into this directory.

Run in PowerShell (Windows):

1) Open PowerShell in the repository root or in this folder.
2) Run: .\download-nunito.ps1

--- download-nunito.ps1 ---
# Downloads Nunito font CSS from Google Fonts, parses woff2 URLs, and
# downloads WOFF2 files into the current folder.

$cssUrl = "https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@300;400;600;700;800&display=swap"
$css = (Invoke-WebRequest -Uri $cssUrl -UseBasicParsing).Content

# Find woff2 URLs
$matches = [regex]::Matches($css, "https:[^\)\s]+\.woff2") | ForEach-Object { $_.Value } | Select-Object -Unique

if (-not (Test-Path -Path ".")) { New-Item -ItemType Directory -Force -Path "." | Out-Null }

foreach ($url in $matches) {
    $fileName = [System.IO.Path]::GetFileName($url)
    Write-Host "Downloading $fileName..."
    Invoke-WebRequest -Uri $url -OutFile $fileName -UseBasicParsing
}

Write-Host "Done. Rename files to Nunito-<weight>.woff2 if you want predictable names and uncomment @font-face rules in src/styles/global.css."
---

Notes
- The script depends on Google Fonts' CSS format; it's fragile but works for simple cases.
- After downloading, rename files (optional) to match the @font-face placeholders, e.g.:
  Nunito-300.woff2, Nunito-400.woff2, Nunito-600.woff2, Nunito-700.woff2, Nunito-800.woff2
- Uncomment the @font-face block in `src/styles/global.css` to enable local fonts.
