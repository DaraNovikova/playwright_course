const {chromium} = require('playwright');

(async()=>{
    const browser = await chromium.launch();
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto('https://react-redux.realworld.io/#/login');

    // const signIn = await page.$('.btn');
    // const signIn = await page.$('//button[@type = "submit"]');
    // const signIn = await page.$('text=Sign in');
    // const signIn = await page.$('"Sign in"');

    // const form = await page.$('form');
    // const signIn = await form.$('"Sign in"');

    const signIn = await page.$('form >> "Sign in"');

    await signIn.click();

    const input = await page.$$('.form-control');
    await input[0].click();
    await input[1].click();

    await browser.close();
}) ()