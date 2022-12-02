const {chromium} = require('playwright');

(async()=>{
    const browser = await chromium.launch();
    const context = await browser.newContext();
    const page = await context.newPage();

    await page.goto('https://react-redux.realworld.io/#/login');
    //mostly applies when after the click on link/button new browser tab is open. You can refer to both pages by their names

    const [newPage] = await Promise.all([
        context.waitForEvent('page'),  
        page.click('a[target="_blank"]') 
    ])

    console.log(await page.title())
    console.log(await newPage.title())

    await browser.close();
}) ()
