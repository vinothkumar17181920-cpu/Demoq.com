// @ts-check
import { test, expect } from '@playwright/test';

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
test('demoqa_site',async({page})=>{
  await page.goto('https://demoqa.com/')
  await page.click('text=Elements');
  await page.click('text=Text Box');
  await page.waitForSelector('#userName');
  await page.fill('#userName', 'Vinoth Kumar');
  await page.fill('#userEmail', 'vinothkumar1728@gmail.com');
  const address = 'No4/10, kambar street, karambakkam, porur, chennai';
  await page.fill('#currentAddress', address);
  await page.fill('#permanentAddress', address);
  await page.screenshot({ path: 'before_submit.png', fullPage: true });
  await page.locator('#submit').scrollIntoViewIfNeeded();
  await page.click('#submit', { force: true });
  await page.screenshot({path:'./screenshot/amazon.png'})
}
)

