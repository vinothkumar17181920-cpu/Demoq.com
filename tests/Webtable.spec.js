import {test} from'@playwright/test';
//First row and full column  
// test('webtable', async({page})=>{
//     await page.goto('https://demoqa.com/webtables');
//     const rows = await page.locator('table tbody tr');
//     console.log(await rows.count());
//     console.log(await rows.nth(0).locator('td').allTextContents());
// });


//All rows and all columns 
// test('webtable', async({page})=>{
//     await page.goto('https://demoqa.com/webtables');
//     const rows = await page.locator('table tbody tr');
//     console.log(await rows.count());
//     const data = await rows.nth(0).locator('td')
//     console.log(await data.count());
    
//     for(let i=0;i<await rows.count();i++){
//     const colum = await rows.nth(i).locator('td').allTextContents();
//     const row_text = await rows.nth(i).textContent();
//     console.log(await colum);}})

    //Add function in table 
    test('webtable', async({page})=>{
    await page.goto('https://demoqa.com/webtables');
    await page.Locator('button[id ="addNewRecordButton"]').click();
    await page.locator('input[id="firstName-label"]').fill('Vinoth');
    await page.Locator('input'[id="firstName-label"]').fill')
})
