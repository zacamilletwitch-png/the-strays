@echo off
chcp 65001 >nul
title Publier THE STRAYS
cd /d "%~dp0"

rem Prend le book.json le plus récent dans Téléchargements (book.json, book (1).json, ...)
set "SRC="
for /f "delims=" %%F in ('dir /b /o-d "%USERPROFILE%\Downloads\book*.json" 2^>nul') do if not defined SRC set "SRC=%USERPROFILE%\Downloads\%%F"

if not defined SRC (
  echo Aucun fichier book.json trouvé dans Téléchargements.
  echo Dans le livre : Projet ^> Publier sur le site, puis relancez ce fichier.
  pause
  exit /b 1
)

echo Publication de : %SRC%
copy /y "%SRC%" "book.json" >nul
git add book.json
git commit -m "Mise à jour du livre" >nul 2>&1
git push
if errorlevel 1 (
  echo.
  echo L'envoi vers GitHub a échoué. Vérifiez votre connexion Internet et réessayez.
  pause
  exit /b 1
)

echo.
echo Terminé ! Le site sera à jour dans une à deux minutes :
echo https://zacamilletwitch-png.github.io/the-strays/
pause
