import { test, expect } from '@playwright/test';

test("mouseover", async ({ page }) => {
    await page.goto("https://gotranscript.com/text-compare")
                   await page.type('[name="text1"]','Silpa')
                   await page.keyboard.press('Control+A')
                   await page.keyboard.press('Control+C')
                   await page.keyboard.down('Tab')
                   await page.keyboard.up('Tab')
                   await page.keyboard.press('Control+V')
           
    await page.waitForTimeout(5000)
   

})