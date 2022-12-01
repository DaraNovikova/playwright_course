const {chromium} = require('playwright');

// (async()=>{
//     const browser = await chromium.launch({headless:false, sloMo:50});
//     const context = await browser.newContext();
//     const page = await context.newPage();
//     await page.goto('https://react-redux.realworld.io/#/login');

//     await page.fill('input[type = "email"]', 'testemail@gmail.com');
//     await page.press('input[type = "email"]', 'Tab');
//     // await page.type('input[type = "password"]', 'test12345', {delay:1000});
//     await page.type('input[type = "password"]', 'test12345');

//     // await page.click('form >> "Sign in"');
//     // await page.dblclick('form >> "Sign in"');
//     // await page.click('form >> "Sign in"', { position: {x:0, y:0}, button: 'left', modifiers: ['Shift'], force:true, timeout: 45000});
//     await page.focus('form >> "Sign in"');

//     // await browser.close();
// }) ()

(async()=>{
    const browser = await chromium.launch({headless:false, sloMo:50});
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto('http://todomvc.com/examples/react/#/');

    await page.fill('.new-todo', 'Test todo 1');
    await page.press('.new-todo', 'Enter');

    await page.fill('.new-todo', 'Test todo 2');
    await page.press('.new-todo', 'Enter');

    await page.check('.toggle');

    const elements = await page.$$('.toggle');
    elements.forEach(el => el.check());

    // await browser.close();
}) ()