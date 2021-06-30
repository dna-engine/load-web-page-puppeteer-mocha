# load-web-page-puppeteer-mocha
<img src=https://dnajs.org/graphics/dnajs-logo.png align=right width=160 alt=logo>

_Minimal example of loading a web page into puppeteer and testing with mocha_

[![Build](https://github.com/dnajs/load-web-page-puppeteer-mocha/workflows/build/badge.svg)](https://github.com/dnajs/load-web-page-puppeteer-mocha/actions?query=workflow%3Abuild)

## Instructions
```shell
$ git clone https://github.com/dnajs/load-web-page-puppeteer-mocha
$ cd load-web-page-puppeteer-mocha
$ npm install
$ npm test  #runs "mocha spec.js"
```
<img src=https://raw.githubusercontent.com/dnajs/load-web-page-puppeteer-mocha/main/screenshot.png
   width=600 alt=screenshot>

## Dev Mode
For development testing, set the `pageUrl` variable in **spec.js** to your local web server, such as:
`http://localhost:8080`

<br>

---
[dnajs.org](https://dnajs.org) | [MIT License](LICENSE.txt)
