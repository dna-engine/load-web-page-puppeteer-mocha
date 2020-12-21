// browser-ready

// type Web = {
//    browser:    any,
//    page:       any,
//    response:   any,
//    url         string,
//    status:     number,
//    statusText: string,
//    html:       string,
// };

const browserReady = (pageUrl, web) => async (browser) => {
   const page =       await browser.newPage();
   const response =   await page.goto(pageUrl);
   const url =        await response.url();
   const status =     await response.status();
   const statusText = await response.statusText();
   const html =       await response.text();
   return Object.assign(web || {}, { browser, page, response, url, status, statusText, html });
   };

module.exports = browserReady;  //node module loading system (CommonJS)
