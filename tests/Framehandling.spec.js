import { chromium, test} from '@playwright/test'

test('Nest Frame2', async ({ page }) => {

    await page.goto('https://www.hyrtutorials.com/p/frames-practice.html');
    const frame2 = page.frameLocator('#frm2');
    await frame2.locator('#firstName').fill('Vinoth');
    await frame2.locator('#lastName').fill('Kumar');
    await frame2.locator('#englishchbx').check();
    await frame2.locator('#email').fill('dualdevise@gmail.com');

});

test('Nest Frame3', async({page})=>{
    
    await page.goto('https://www.hyrtutorials.com/p/frames-practice.html');
    const frame3 = await page.frameLocator('#frm3');
    const inner_frame2 = await frame3.frameLocator('#frm2');
    await inner_frame2.locator('#firstName').fill('Vinoth');
    await inner_frame2.locator('#lastName').fill('Kumar');
    await inner_frame2.locator('#englishchbx').check();
    await inner_frame2.locator('#email').fill('dualdeviser@gmail.com');
});
