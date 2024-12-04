import { test, expect } from '@playwright/test';

test("mouseover", async ({ page }) => {
    await page.goto("https://testautomationpractice.blogspot.com/")
           await page.locator("//button[contains(text(),'Copy Text')]").dblclick();
       const field2 = await page.locator("#field2");
       await expect(field2).toHaveValue("Hello World!")
    
    await page.waitForTimeout(5000)
   

})