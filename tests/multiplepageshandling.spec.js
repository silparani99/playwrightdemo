import { test, expect, chromium } from '@playwright/test';

test('multiplepages', async () => {
    const browser=await chromium.launch();
    const context=browser.newContext();
    const page1= (await context).newPage
    const page2= (await context).newPage
    const allpages= (await context).pages
    console.log("total pages created", allpages.length)
    await page1.goto("https://www.demoblaze.com/index.html")
    await expect(page1).toHaveTitle("STORE")
    await page2.goto("https://www.orangehrm.com/")
    await expect(page2).toHaveTitle("Human Resources Management Software | OrangeHRM")

})