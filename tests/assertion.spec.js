import {test, expect} from '@playwright/test';

test('editable' ,async ({page}) =>{
await page.goto('https://demoqa.com/text-box')
await expect(page.locator('id="userName-label"')).toBeEditable();
await page.waitfortimeout(6000);
})