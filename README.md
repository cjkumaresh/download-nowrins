# download-nowrins
download nowrins from palkar.org (Sourashtra Matrimony)

## How To Dowload
- login into palkar.org, move to nowrins tab and filter
- open browser's developer tools `(press F12)`.
- go to console tab
- copy content from `get-nowrins-id.js`
- paste and execute the script in the console, it will save the ids from the page into browser cache
- you need to repeat the above step if your search has more pages.
- copy content from `download-nowrins.js`
- execute the script in the console to download images (make sure popup is not blocked)
- after the download you need to rename the filename to filename*.jpg
- to rename all the files in a folder use `ren * *.jpg` (Windows cmd prompt)

## Todo
- migrate this code into a chrome plugin
- modify the script to download both nowrins and nowraans.

## Contribution
Feel free to contribute !
