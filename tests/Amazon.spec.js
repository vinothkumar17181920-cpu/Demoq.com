import { test, expect } from '@playwright/test';

test('amazon', async ({ page }) => {
  await page.goto('https://www.amazon.in/')
  await page.locator("#twotabsearchtextbox").fill("shoes")
  await page.locator("#nav-search-submit-button").click()
  await page.waitForTimeout(4000);
}
)
