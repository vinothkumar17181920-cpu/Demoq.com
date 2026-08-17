import { test, expect } from '@playwright/test';

test('Flipkart', async ({ page }) => {

    await page.goto('https://www.flipkart.com');

    await page.getByPlaceholder(
        'Search for Products, Brands and More'
    ).fill('shoes');

    await page.locator('button[type="submit"]').click();

});






