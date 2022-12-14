const { test, expect } = require('@playwright/test');

test.beforeEach(async({page}) => {
    await page.goto('/#/login');
    console.log('worker' + process.env.TEST_WORKER_INDEX);
})

// test.use({viewport:{width:600, height:900}})

test('basic test - 2', async({page})=>{
    await expect(page).toHaveTitle('Conduit')

    await page.fill('input[type = "email"]', 'qacamp.acad@gmail.com');
    await page.press('input[type = "email"]', 'Tab');
    await page.type('input[type = "password"]', 'test12345');

    await page.click('form >> "Sign in"');
    await page.waitForTimeout(5000)

    const logoText = page.locator('.navbar-brand');
    await expect(logoText).toContainText('conduit', {timeout: 30000});
})