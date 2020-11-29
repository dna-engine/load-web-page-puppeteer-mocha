# load-web-page-puppeteer-mocha
<img src=https://dnajs.org/graphics/dnajs-logo.png align=right width=160 alt=logo>

_Minimal example of loading a web page into puppeteer and testing with mocha_

[![Build](https://travis-ci.org/dnajs/load-web-page-puppeteer-mocha.svg)](https://travis-ci.org/dnajs/load-web-page-puppeteer-mocha)

### Instructions
```shell
$ git clone https://github.com/dnajs/load-web-page-puppeteer-mocha
$ cd load-web-page-puppeteer-mocha
$ npm install
$ npm test  #runs "mocha spec.js"
```

For development testing, set the `pageUrl` variable in **spec.js** to your local web server, such as:
`http://localhost:8080`

<img src=https://github.com/dnajs/load-web-page-puppeteer-mocha/raw/main/screenshot.png
   width=400 alt=screenshot>

### Comparison
For a jsdom version, check out:<br>
[load-web-page-jsdom-mocha](https://github.com/dnajs/load-web-page-jsdom-mocha)

---
[dnajs.org](https://dnajs.org) | [MIT License](LICENSE.txt)
