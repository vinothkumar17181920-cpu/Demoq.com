import { chromium, test } from '@playwright/test';
 
//test('launch browser', async () => {
  //const browser = await chromium.launch();
  //const context1 = await browser.newContext();
  //const page = await context1.newPage();
 
  //await page.goto("https://www.testautomationcentral.com/demo/dropdown.html");
  //await page.locator('[data-target="multi-select-dropdown"]').click();
  //await page.selectOption('xpath=//select[@class="form-multiselect block w-full mt-1"]', ['Option 1', 'Option 3']);
  //await page.waitForTimeout(4000);
 
  //await browser.close();

test('DOM Popup', async({page})=>{
  await page.goto('https://www.makemytrip.com/');
  await page.waitForSelector('[class="commonModal__close"]',{timeout:5000});
  await page.locator('[class="commonModal__close"]').click();
})
