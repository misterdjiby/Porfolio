# Script pour copier les images dans public
Copy-Item "src\components\Capture.PNG" -Destination "public\Capture.PNG" -Force
Copy-Item "src\components\Capture1.PNG" -Destination "public\Capture1.PNG" -Force
Write-Host "Images copiées dans public/" -ForegroundColor Green

