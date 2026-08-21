import {chromium, test} from '@playwright/test';

test('Drag and drop', async({page})=>{
await page.goto("https://jqueryui.com/droppable/");

const frame = page.frameLocator('.demo-frame');
await frame.locator('#draggable').dragTo(frame.locator('#droppable'));
await page.waitForTimeout(2000);
await page.addListener();
console.log();
})