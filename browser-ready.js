// browser-ready

const browserReady = (pageUrl) => async (browser) => {
   const page =       await browser.newPage();
   const response =   await page.goto(pageUrl);
   const url =        await response.url();
   const status =     await response.status();
   const statusText = await response.statusText();
   const html =       await response.text();
   return { browser, page, response, url, status, statusText, html };
   };

module.exports = browserReady;  //node module loading system (CommonJS)
