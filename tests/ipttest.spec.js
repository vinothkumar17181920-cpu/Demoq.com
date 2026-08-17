// import {test} from '@playwright/test'

// test('minimum price of product', async ({ page }) => {
// await page.goto("https://www.myntra.com/boy-tshirts");


// const products_price = page.locator('//li[@class="product-base"]/descendant::div[@class="product-price"]/descendant::span[@class="product-discountedPrice" or text() and not(@class)]');
// const count = await products_price.count();
// const Products_name = page.locator('//li[@class="product-base"]/descendant::h4[@class="product-product"]')

// let minPrice = Infinity;
// let P_name = " ";

// for (let i = 0; i < count; i++) {

//    const p_price = await products_price.nth(i).textContent();

//    const price = Number(p_price.replace(/[^\d]/g, ''));

//    if (price < minPrice) {

//        minPrice = price;
//   P_name = await Products_name.nth(i).textContent();

//    }

// }
// // print the minimum price
// console.log("Minimum Price:", minPrice);
// console.log("Product name is:", P_name);

// });

// import { test } from '@playwright/test';

// test('Finding the minimum price and name of the product', async ({ page }) => {

//     await page.goto('https://www.myntra.com/boy-tshirts');

//     const products = page.locator(
//         "//li[@class='product-base']//div[@class='product-price']/span[span[@class='product-discountedPrice'] or (text() and not(@class))]"
//     );
//     const productCount = await products.count();

//     console.log("Product count:", productCount);

//     let minPrice = Number.MAX_VALUE;

//     const prices = await products.allTextContents();

//     for (const eachPrice of prices) {

//         const amount = parseInt(
//             eachPrice.replace("Rs. ", "").trim()
//         );

//         if (amount < minPrice) {
//             minPrice = amount;
//         }
//     }
//     console.log("Minimum Price:", minPrice);

//     const productNameOfMinPrice = page.locator(
//         `//li[@class='product-base']//div[@class='product-price']/span[
//             span[@class='product-discountedPrice' and normalize-space()='Rs. ${minPrice}']
//             or
//             (normalize-space()='Rs. ${minPrice}' and not(@class))
//         ]/ancestor::li[@class='product-base']//h3`
//     );
//     console.log(
//         "Product Name Of Min Price:",
//         await productNameOfMinPrice.first().textContent()
//     );
// });

import { test } from '@playwright/test';

test('Finding the minimum price and name of the product', async ({ page }) => {

    await page.goto('https://www.myntra.com/boy-tshirts');
    async function getPrices() {
        const products = page.locator(
            '//li[@class="product-base"]');
        const count = await products.count();
        let prices = [];

        for (let i = 0; i < count; i++) {

        const product = products.nth(i);
        const discountedPrice = product.locator('.product-discountedPrice');

        let priceText;

            if (await discountedPrice.count() > 0) {

                priceText = await discountedPrice.textContent();

            } else {

                priceText = await product.locator('xpath=.//div[@class="product-price"]/span'
                ).textContent();
            }

        const price = Number(
                priceText.replace(/[^0-9]/g, ''));
            prices.push(price);} return prices;}

        function getMinimumPrice(prices) {

        return Math.min(...prices);} async function getProductName(minPrice) {
        const minProductName = page.locator(`//li[@class='product-base']//div[@class='product-price']/span[
            span[@class='product-discountedPrice' and normalize-space()='Rs. ${minPrice}'] or
            (normalize-space()='Rs. ${minPrice}' and not(@class))]/ancestor::li[@class='product-base']//h3`);
        return await minProductName.first().textContent();}

        const prices = await getPrices();

         console.log("All Prices:", prices);

        const minPrice = getMinimumPrice(prices);

        console.log("Minimum Price:", minPrice);

        const productName = await getProductName(minPrice);

        console.log("Minimum Price Product:", productName);

});