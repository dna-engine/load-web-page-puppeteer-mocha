# load-web-page-puppeteer-mocha
<img src=https://dna-engine.org/graphics/dna-logo.png align=right width=160 alt=logo>

_Minimal example of loading a web page into puppeteer and testing with mocha_

[![Build](https://github.com/dna-engine/load-web-page-puppeteer-mocha/actions/workflows/run-spec-on-push.yaml/badge.svg)](https://github.com/dna-engine/load-web-page-puppeteer-mocha/actions/workflows/run-spec-on-push.yaml)

## Instructions
```shell
$ git clone https://github.com/dna-engine/load-web-page-puppeteer-mocha
$ cd load-web-page-puppeteer-mocha
$ npm install
$ npm test  #runs "mocha spec"
```
<img src=https://raw.githubusercontent.com/dna-engine/load-web-page-puppeteer-mocha/main/screenshot.png
   width=600 alt=screenshot>

## Dev Mode
For development testing, set the `pageUrl` variable in **spec.js** to your local web server, such as:
`http://localhost:8080`

<br>

---
[dna-engine.org](https://dna-engine.org) | [MIT License](LICENSE.txt)
