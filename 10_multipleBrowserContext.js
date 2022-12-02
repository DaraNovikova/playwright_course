const {chromium} = require('playwright');

(async()=>{
    const browser = await chromium.launch();
    //mostly used for testing different user roles
    const userContext = await browser.newContext();
    const adminContext = await browser.newContext();

    await browser.close();
}) ()
