import { test, expect } from '@playwright/test';

test('Render Header', async ({ page }) => {
  await page.goto('http://127.0.0.1:3000/weather');

  const headerRegex = new RegExp(/(\d+\.?\d*\s?[a-zA-Z%°]*\sas\sof\s\d*\s?[a-zA-Z]*)/);
  await expect(page.getByText(headerRegex)).toBeVisible();

  const subheaderRegex = new RegExp(/^([A-Za-z]{4})\sat\s(\d{1,2}\/\d{1,2}\/\d{4},\s\d{1,2}:\d{2}:\d{2}\s[A|P][M]\s[A-Za-z]{3})$/);
  await expect(page.getByText(subheaderRegex)).toBeVisible();
});

test('Render Chart', async ({ page, browserName }) => {
  await page.goto('http://127.0.0.1:3000/weather');

  // this test verifies that the chart is showing *something*
  // we are not testing that it is displaying accurately

  // is the chart div even visible?
  await expect(page.locator('svg')).toBeVisible();

  // does the chart have grid lines?
  const gridLineCount = await page.locator('#gridlines line').count();
  expect(gridLineCount).toBeGreaterThanOrEqual(15);

  // does it have labels?
  const labelCount = await page.locator('#labels foreignObject span').count();
  expect(labelCount).toBeGreaterThanOrEqual(10);

  const dataPoints = await page.locator('#datapoints path').getAttribute('d');
  const dataPointCount = dataPoints?.split('L').length;

  expect(dataPointCount).toBeGreaterThanOrEqual(20);

  await page.screenshot({
    path: `./screenshots/${browserName}.png`,
    fullPage: true
  });
});

test('Render Navigation', async ({ page }) => {
  await page.goto('http://127.0.0.1:3000/weather');
  await expect(page.locator('#navigation li')).toHaveCount(5);
  await expect(page.locator('#navigation li')).toHaveText(['Temp', 'Dew Point', 'Humidity', 'Pressure', 'Wind']);
});

test('Render Scale', async ({ page }) => {
  await page.goto('http://127.0.0.1:3000/weather');
  await expect(page.locator('#scale li')).toHaveCount(3);
  await expect(page.locator('#scale li')).toHaveText(['1 day', '3 day', '5 day']);
});