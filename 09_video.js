const {chromium} = require('playwright');
const {expect} = require('expect');
const {saveVideo} = require('playwright-video'); //installed from https://github.com/qawolf/playwright-video 

(async()=>{
    const browser = await chromium.launch();
    const context = await browser.newContext();
    const page = await context.newPage();

    // await saveVideo(page, 'SignIn.mp4') // to start recording from here and until page is closed
    const capture = await saveVideo(page, 'SignIn.mp4') // if it assigned to variable you can stop recording where you`d like with stop()

    await page.goto('https://react-redux.realworld.io/#/login');
    const title = await page.title();
    expect(title).toBe('Conduit')

    await page.fill('input[type = "email"]', 'qacamp.acad@gmail.com');
    await page.press('input[type = "email"]', 'Tab');
    await page.type('input[type = "password"]', 'test12345');
    await page.click('form >> "Sign in"');

    capture.stop();
   
    const html = await page.innerHTML('.feed-toggle');
    expect(html).toMatch('Your Feed');

    await browser.close();
}) ()
