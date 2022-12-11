const { test, expect } = require('@playwright/test');

// to run in terminal: npx playwright test
// to run in terminal a specific test: npx playwright test test/first.spec.js
// to run test with a certain title: npx playwright -g "basic test"
// to run test with a certain mark: npx playwright test --grep @smoke
// to not run test with a certain mark: npx playwright test --grep-invert @smoke
// to run in terminal in headed mode: npx playwright test --headed
// to run in terminal in headed mode in specific browser: npx playwright test --headed --browser=webkit

// beforeAll and afterAll do not have access to contex or fixtures(e.g ({page})) 

//you can run one test by using .only, or skip test with .skip

test.beforeAll(async() => {
    console.log("------beforeAll hook-----")
    console.log('worker' + process.env.TEST_WORKER_INDEX);
})

test.beforeEach(async({page}) => {
    console.log("------beforeEach hook-----")
    await page.goto('https://react-redux.realworld.io/#/login?_k=d8glvt');
})

test.afterEach(async({page}) => {
    console.log("------afterEach hook-----")
    await page.goto('https://react-redux.realworld.io/#/login?_k=d8glvt');
})

test.afterAll(async() => {
    console.log("------afterAll hook-----")
})


test.describe('group A', ()=> {
    test('basic test @smoke', async({page})=>{
        console.log("------test1-----")
    
        await expect(page).toHaveTitle('Conduit')
        expect(await page.screenshot()).toMatchSnapshot('SignIn.png', { threshold: 0.2 });
    
        await page.fill('input[type = "email"]', 'qacamp.acad@gmail.com');
        await page.press('input[type = "email"]', 'Tab');
        await page.type('input[type = "password"]', 'test12345');
    
        await page.click('form >> "Sign in"');
        await page.waitForTimeout(5000)
    
        const logoText = page.locator('.navbar-brand');
        await expect(logoText).toContainText('conduit', {timeout: 30000});
    })
    
    test('login test', async({page})=>{
        console.log("------test2-----")
        await expect(page).toHaveTitle('Conduit')
    
        await page.fill('input[type = "email"]', 'qacamp.acad@gmail.com');
        await page.press('input[type = "email"]', 'Tab');
        await page.type('input[type = "password"]', 'test12345');
    
        await page.click('form >> "Sign in"');
        await page.waitForTimeout(5000)
    
        const logoText = page.locator('.navbar-brand');
        await expect(logoText).toContainText('conduit', {timeout: 30000});
    })
})