# SimpleKioskLoader
A tool that loads a Kiosk (a WebApp) in a browser after tne Network connetion has been established.

## Description
If you have a headless Kiosk you might been running in to the following problem: The Kiosk device (e.g. a RaspberryPi) starts up an loads the Website/WebApp but the network connection hasn't been established. It's especialy a problem when unsing WiFi.
This tool solves that.

## How it Works
When the "SimpleKioskLoader.html"-File ist opend it will try an load an immage from a spefied URL. If does so succesfully it will open that website. If it can't reach it it will try again after a secound.
After 10 Secounds of trying it wil display a Message that the website cant be reached. It will however continue to try to reach and open the Website.

## Installation / Quick Start
1. Download the files and extract the "dist"-Folder
2. Place the file "SimpleKioskLoader.html" localy on the Kiosk-Computer `(e.g. /home/pi)`
4. Configure your Browser that it opens that File `(e.g. file:///home/pi/WaitForNetwork.html)`
5. Add your URL as a hash to the URL `(e.g. file:///home/pi/WaitForNetwork.html#https://mykiosk.com/kiosk/)`
6. Place the File "test.ico" on your Kiosk-Webserver `(e.g. https://mykiosk.com/kiosk/test.ico)`
6. Finished!

## Andvaced Configuration
You can open the File "SimpleKioskLoader.html" with a texteditor. There you can configure the following Parameters:
```javascript
lang = "auto",
```
Language Settings:
- "auto": Uses the Browser Prefrences
- "en": for English
- "de": for German

```javascript
URL = 'http://localhost/',
```
Set a URL to Open if avavible.
Note that the URL given in the URL via # is always prioritised.

```javascript
imgTest = 'test.ico',
```
The immage to test if the Kiosk-Website is reachable.
Note that the Final URL is compromised for the URL + imgTest.

```javascript
LoadInterval = 1000,
```
Specify how often the avavibilyty is testet in millisecounds.
Default ist every second. Lowest possible value is 100ms

```javascript
ErrorTimeout = 10000;
```
Specify after whitch time the Error is shown.
Even after the error ist shown the Website will continue trying to reach the Kiosk-Website.

## Translations
Content Follows

## License
I'm using the 
[WTFPL – Do What the Fuck You Want to Public License](http://www.wtfpl.net/)

![WTFPL Badge](/wtfpl-badge.png)
