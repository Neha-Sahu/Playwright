// ecan-simple.spec.ts
import { test, expect } from '@playwright/test';

test('Open ECan → Search for "water quality" → See results', async ({ page }) => {
  // 1. Open the site
  await page.goto('https://www.ecan.govt.nz/');
  
  

  // 3. Use the real search box (top-right magnifying glass → opens a field)
  await page.locator("//span[@id='toggle-search']").click();

  // 4. Wait for entering water quality and search results page
 

  await page.locator('input[name="q"]').fill('water quality');
  await page.locator("//button[@title='Go']").click();

  // 5. Verify we see some results containing the phrase
  await expect(
    page.getByRole('heading', { name: 'Search results for "water quality"' })
  ).toBeVisible({ timeout: 15000 });

  console.log('ECan search test passed!');
});