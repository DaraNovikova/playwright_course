const {chromium} = require('playwright');
const {expect} = require('expect');

// (async()=>{
//     // const browser = await chromium.launch({headless:false, sloMo:100, devtools:true}); // devtools:true  - opens devtools while debugging
//     //or use debugg mode: in js debug terminal run   $env:PWDEBUG=1 node 19_Debugging.js
//     const browser = await chromium.launch({devtools:true});
    
//     const context = await browser.newContext();
//     const page = await context.newPage();

//     await page.goto('https://react-redux.realworld.io/#/login');

//     await page.fill('input[type = "email"]', 'qacamp.acad@gmail.com');
//     await page.press('input[type = "email"]', 'Tab');
//     await page.type('input[type = "password"]', 'test12345');
//     await page.click('form >> "Sign in"');

//     const html = await page.innerHTML('.feed-toggle');
//     debugger 
//     // after putting a debugger create js debug terminal and run your        script: node 19_Debugging.js
//     expect(html).toMatch('Your Feed');

//     await browser.close();
// }) ()

//playwrigth inspector: to move script line by line use arrow, to run whole script without stop run play button, if you want to run script to the sertain line and then verify all line by line use page.pause()

(async()=>{
    const browser = await chromium.launch();
    const context = await browser.newContext();
    const page = await context.newPage();

    await page.goto('https://react-redux.realworld.io/#/login');

    await page.fill('input[type = "email"]', 'qacamp.acad@gmail.com');
    await page.press('input[type = "email"]', 'Tab');
    await page.pause();
    await page.type('input[type = "password"]', 'test12345');
    await page.click('form >> "Sign in"');

    await browser.close();
}) ()
