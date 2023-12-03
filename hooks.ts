// hooks.ts

import { test, expect } from '@playwright/test';

export const setup = async () => {
  // Perform setup tasks before the test suite runs
  console.log('Setup tasks before test suite');
};

export const teardown = async () => {
  // Perform teardown tasks after the test suite runs
  console.log('Teardown tasks after test suite');
};

export const beforeEachTest = async ({ page }) => {
  // Perform tasks before each test runs
  console.log('Setup tasks before each test');
  // For example, navigate to a common page before each test
  await page.goto('https://example.com');
};

export const afterEachTest = async ({ page }) => {
  // Perform tasks after each test runs
  console.log('Teardown tasks after each test');
  // For example, take a screenshot after each test
  await page.screenshot({ path: `./screenshots/${Date.now()}.png` });
};

// Define your test hooks
test.beforeAll(setup);
test.afterAll(teardown);
test.beforeEach(beforeEachTest);
test.afterEach(afterEachTest);
