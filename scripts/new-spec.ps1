param([string]$Branch)
if (-not $Branch) { $Branch = (git branch --show-current) }
if (-not $Branch) { $Branch = "main" }
$src = "docs/specs/_template"
$dst = "docs/specs/$Branch"
if (-not (Test-Path $dst)) { New-Item -ItemType Directory -Force -Path $dst | Out-Null }
Copy-Item -Path "$src/*" -Destination $dst -Force
Write-Host "Specs creados en $dst"
