const {chromium} = require('playwright');
const {expect} = require('expect');

(async()=>{
    const browser = await chromium.launch({headless:false, sloMo:50});
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto('https://cgi-lib.berkeley.edu/ex/fup.html')
    await page.setInputFiles('[type="file"]', './testFile.docx')
    await page.click('[type="submit"]')

    const html = await page.innerHTML('p');
    expect(html).toMatch("You've uploaded a file.")

    await browser.close();
}) ()
