import { test, expect } from '@playwright/test';
import { setup, teardown, beforeEachTest, afterEachTest } from '../hooks';

test.beforeAll(setup);
test.afterAll(teardown);
test.beforeEach(beforeEachTest);
test.afterEach(afterEachTest);

test('My test', async ({ page }) => {
  // Your test logic here
  await page.click('button');
  expect(await page.title()).toBe('Expected Title');
});

// test('has title', async ({ page }) => {
//   await page.goto('https://playwright.dev/');

//   // Expect a title "to contain" a substring.
//   await expect(page).toHaveTitle(/Playwright/);
// });

// test('get started link', async ({ page }) => {
//   await page.goto('https://playwright.dev/');

//   // Click the get started link.
//   await page.getByRole('link', { name: 'Get started' }).click();

//   // Expects page to have a heading with the name of Installation.
//   await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
// });