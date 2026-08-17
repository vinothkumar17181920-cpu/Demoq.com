import { chromium, test } from '@playwright/test';

// test('Finding total number of products in myntra site', async ({ page }) => {

//     await page.goto('https://www.myntra.com/boy-tshirts', {
//         waitUntil: 'domcontentloaded',
//     });
//     const totalProducts = await page
//         .locator("//li[@class='product-base']")
//         .count();
//     console.log("Total number of Products:", totalProducts);
// });

//    test('myntra site', async ({ page }) => {
//     await page.goto('https://www.myntra.com/boy-tshirts', {
//         waitUntil: 'domcontentloaded',
//         timeout: 60000
//     });
//     const prices = await page
//         .locator('//li[@class="product-base"]/descendant::div[@class="product-price"]/span[span[@class="product-discountedPrice"] or text() and not(@class)]')
//         .allTextContents();
//     const priceNumbers = prices.map(price =>
//         Number(price.replace(/[₹,]/g, '').trim())
//     );
//     const minPrice = Math.min(...priceNumbers);
//     console.log("Minimum Price:", minPrice);
// });

// test('myntra site', async ({ page }) => {

//     await page.goto('https://www.myntra.com/boy-tshirts', {
//         waitUntil: 'domcontentloaded',
//         timeout: 60000
//     });
//     const prices = await page
//         .locator('//span[@class="product-discountedPrice"]')
//         .allTextContents();
//     const priceNumbers = prices.map(price =>
//         parseInt(price.replace(/\D/g, ''))
//     );
//     const minPrice = Math.min(...priceNumbers);
    
//     console.log("Minimum Price of all Products:", minPrice);
// });

// test ('myntra',async({page})=>{
//       await page.goto('https://www.myntra.com/boy-tshirts');
//       const text=await page.locator('//div[@class="product-productMetaInfo"]/descendant::h3[text()='YK X Wildwoods']').allTextContents();
//       let tshirt=await page.locator('//li[@class="product-base"]/descendant::div[@class="product-price"]/span[span[@class="product-discountedPrice"] or text() and not (@class)]').allTextContents();
//      let amount= tshirt.map(product=>Number(product.match(/\d+/g)[0]));
//     console.log(amount);
//      let min = Math.min(...amount);
//    console.log(min);
//    let index = amount.indexOf(min);
//      console.log(text);
//      console.log("Minimum Price:", min);
//     console.log("Product Name:", text[index]);
// })
