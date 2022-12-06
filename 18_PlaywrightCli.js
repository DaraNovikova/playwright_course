import { test, expect } from '@playwright/test';
// run in console  npx playwright codegen todomvc.com/examples/react/#/ and you will get this script
test('test', async ({ page }) => {
  await page.goto('https://todomvc.com/examples/react/#/');
  await page.getByPlaceholder('What needs to be done?').click();
  await page.getByPlaceholder('What needs to be done?').fill('task1');
  await page.getByPlaceholder('What needs to be done?').press('Enter');
  await page.getByRole('link', { name: 'Completed' }).click();
});

// to open pages run   npx playwright open  todomvc.com/examples/react/#/
// to make screenshot   npx playwright screenshot --full-page todomvc.com/examples/react/#/ todo.png
// to make pdf   npx playwright pdf todomvc.com/examples/react/#/ todo.pdf