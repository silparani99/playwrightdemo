import { test, expect } from '@playwright/test';

test("Uploadfile", async ({ page }) => {
    await page.goto("https://practice.expandtesting.com/upload")
                            
   await page.waitForSelector("#fileInput")
    await page.locator("#fileInput").click();   
    await page.locator("#fileInput").setInputFiles('C:/Users/simandal/Desktop/PlayWright/tests/Uploadfiles/GenAI Notes.txt') 
    await page.waitForTimeout(5000)
})

test.only("multiple files",async({page})=>
{
    await page.goto("https://davidwalsh.name/demo/multiple-file-upload.php")
    await page.locator("#filesToUpload").setInputFiles(['tests/Uploadfiles/GenAI Notes.txt','tests/Uploadfiles/LabReportNew_Goutham- 2024-09-20T093817.512.pdf'])
    expect(await page.locator("#fileList li:nth-child(1)")).toHaveText('GenAI Notes.txt')
expect(await page.locator("#fileList li:nth-child(2)")).toHaveText('LabReportNew_Goutham- 2024-09-20T093817.512.pdf')
await page.waitForTimeout(5000)
await page.locator("#filesToUpload").setInputFiles([])
await page.waitForTimeout(5000)
expect(await page.locator("#fileList li:nth-child(1)")).toHaveText('No Files Selected')
await page.waitForTimeout(3000)
})