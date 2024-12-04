import { test, expect } from '@playwright/test';

test("mouseover", async ({ page }) => {
    await page.goto("http://www.dhtmlgoodies.com/packages/dhtml-suite-for-applications/demos/demo-drag-drop-3.html")
           const source=await page.locator("//div[@id='dropContent']//div[@id='box6']")
           const destination=await page.locator("#box106")
           await source.dragTo(destination)
       
    
    await page.waitForTimeout(5000)
   

})