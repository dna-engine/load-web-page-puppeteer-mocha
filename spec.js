// Mocha Specification Suite

// Imports
import puppeteer from 'puppeteer';
import { assertDeepStrictEqual } from 'assert-deep-strict-equal';
import { browserReady } from 'puppeteer-browser-ready';

// Setup
const url = 'https://pretty-print-json.js.org/';
let web;  //fields: browser, page, response, status, location, title, html, $
const loadWebPage =  async () => web = await puppeteer.launch().then(browserReady.goto(url));
const closeWebPage = async () => await browserReady.close(web);
before(loadWebPage);
after(closeWebPage);

////////////////////////////////////////////////////////////////////////////////
describe('The web page', () => {

   it('has the correct URL -> ' + url, () => {
      const actual =   { status: web.status, url: web.location.href };
      const expected = { status: 200,        url: url };
      assertDeepStrictEqual(actual, expected);
      });

   it('has exactly one header, main, and footer', () => {
      const actual =   {
         header: web.$('body >header').length,
         main:   web.$('body >main').length,
         footer: web.$('body >footer').length,
         };
      const expected = { header: 1, main: 1, footer: 1 };
      assertDeepStrictEqual(actual, expected);
      });

   });

////////////////////////////////////////////////////////////////////////////////
describe('The document content', () => {

   it('has a 🚀 traveling to 🪐!', () => {
      const actual =   { '🚀': !!web.html.match(/🚀/g), '🪐': !!web.html.match(/🪐/g) };
      const expected = { '🚀': true,                    '🪐': true };
      assertDeepStrictEqual(actual, expected);
      });

   });
