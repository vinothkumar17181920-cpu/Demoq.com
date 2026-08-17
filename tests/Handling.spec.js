import { test } from '@playwright/test';

// test('upload',async ({page})=>{
//     await page.goto('https://www.file.io/');
//     await page.locator("[id='select-files-input']").setInputFiles("C:\\Users\\Dell\\OneDrive\\Documents\\Document.docx");
//     await page.waitForTimeout(5000);
// })

test("Download", async ({page}) => {
    await page.goto('https://demoqa.com/upload-download');

    const [download] = await Promise.all([
        page.waitForEvent("downlaoad"),
        page.getByRole("button", { name: 'Download"}).click()
            ]);
        await download.saveAs("C:\\Users\\Dell\\OneDrive\\Documents\\Documents");
        console.log('File downloaded successfully');
        
})
        