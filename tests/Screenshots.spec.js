import { test, expect } from '@playwright/test';

test("pageScreenshot", async ({ page }) => {
    await page.goto("https://www.demoblaze.com/")
    await page.waitForTimeout(10000)
    await page.screenshot({path:'tests/Screenshots/'+Date.now()+'pagescreenshot.png'})
   
})
test("FullScreenshot", async ({ page }) => {
    await page.goto("https://www.demoblaze.com/")
    await page.waitForTimeout(10000)
    await page.screenshot({path:'tests/Screenshots/'+Date.now()+'fullscreenshot.png',fullPage:true})
   
})
test.only("Elementscreenshot", async ({ page }) => {
    await page.goto("https://www.demoblaze.com/")
    await page.locator("//body/div[@id='contcont']/div[@class='row']/div[@class='col-lg-9']/div[@id='tbodyid']/div[1]").screenshot({path:'tests/Screenshots/'+Date.now()+'element.png'})
   
})