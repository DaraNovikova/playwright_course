const {chromium} = require('playwright');
const {expect} = require('expect');

(async()=>{
    const browser = await chromium.launch({headless:false, sloMo:50});
    const context = await browser.newContext();
    const page = await context.newPage();

    await page.goto('https://react-redux.realworld.io/#/login');
    const title = await page.title();
    expect(title).toBe('Conduit')

    await page.fill('input[type = "email"]', 'qacamp.acad@gmail.com');
    await page.press('input[type = "email"]', 'Tab');
    await page.type('input[type = "password"]', 'test12345');
    await page.click('form >> "Sign in"');

    //possible timeouts
    context.setDefaultTimeout(45000); // sets a default timeout for pages
    page.setDefaultTimeout(45000); // sets a default timeout for every method on the page
    await page.click('form >> "Sign in"', {timeout:45000}); // for specific method

    // possible waits methods

    await page.waitForTimeout(5000);
    await page.waitForSelector('.ion-compose');

    await Promise.all([
        page.waitForNavigation(),
        await page.click('form >> "Sign in"')
    ])

    const [newPage] = await Promise.all([
        context.waitForEvent('page'),  
        page.click('a[target="_blank"]') 
    ])

    await page.waitForLoadState() // wait for page to load

    await browser.close();
}) ()
