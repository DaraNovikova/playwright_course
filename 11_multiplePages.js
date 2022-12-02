const {chromium} = require('playwright');

(async()=>{
    const browser = await chromium.launch();
    const context = await browser.newContext();
    //mostly multiple tabs in the same browser instance
    const pageOne = await context.newPage();;
    const pageTwo = await context.newPage();;

    await browser.close();
}) ()
