$WshShell = New-Object -ComObject WScript.Shell
$DesktopPath = [System.IO.Path]::Combine([System.Environment]::GetFolderPath('Desktop'), "ARK Billing Software.lnk")
$Shortcut = $WshShell.CreateShortcut($DesktopPath)

# Set the target to the batch file
$Shortcut.TargetPath = "C:\ark\ARK_Billing.bat"
$Shortcut.WorkingDirectory = "C:\ark"
$Shortcut.WindowStyle = 1 # Normal window
$Shortcut.Description = "ARK Packers & Movers Billing Software"

# Set the icon to a professional system icon (Globe/Web) since we don't have a custom .ico
$Shortcut.IconLocation = "shell32.dll, 13" # Globe icon

$Shortcut.Save()

Write-Host "Desktop shortcut 'ARK Billing Software' created successfully!" -ForegroundColor Green
Write-Host "You can now double-click it to launch the software." -ForegroundColor Cyan
pause
