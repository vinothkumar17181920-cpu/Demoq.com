# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: browsertest.spec.js >> DOM Popup
- Location: tests\browsertest.spec.js:15:5

# Error details

```
Error: page.goto: net::ERR_HTTP2_PROTOCOL_ERROR at https://www.makemytrip.com/
Call log:
  - navigating to "https://www.makemytrip.com/", waiting until "load"

```

# Test source

```ts
  1  | import { chromium, test } from '@playwright/test';
  2  |  
  3  | //test('launch browser', async () => {
  4  |   //const browser = await chromium.launch();
  5  |   //const context1 = await browser.newContext();
  6  |   //const page = await context1.newPage();
  7  |  
  8  |   //await page.goto("https://www.testautomationcentral.com/demo/dropdown.html");
  9  |   //await page.locator('[data-target="multi-select-dropdown"]').click();
  10 |   //await page.selectOption('xpath=//select[@class="form-multiselect block w-full mt-1"]', ['Option 1', 'Option 3']);
  11 |   //await page.waitForTimeout(4000);
  12 |  
  13 |   //await browser.close();
  14 | 
  15 | test('DOM Popup', async({page})=>{
> 16 |   await page.goto('https://www.makemytrip.com/');
     |              ^ Error: page.goto: net::ERR_HTTP2_PROTOCOL_ERROR at https://www.makemytrip.com/
  17 |   await page.waitForSelector('[class="commonModal__close"]',{timeout:5000});
  18 |   await page.locator('[class="commonModal__close"]').click();
  19 | })
  20 | 
```