import { test, expect } from '@playwright/test';

test('Page loads started link', async ({ page }) => {
  await page.goto('http://127.0.0.1:3000/weather');

  // Click the get started link.
  await expect(page.getByRole('heading').filter({ hasText: "inHg as of"})).toBeVisible();
});
