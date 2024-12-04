import { test, expect } from '@playwright/test';

test("recordtest", async ({ page }) => {
    await page.goto("https://www.demoblaze.com/")
             //Login
             await page.locator('#login2').click()
             await page.locator('#loginusername').fill('pavanol')
             await page.locator('#loginpassword').fill('test@123')
             await page.locator("//button[normalize-space()='Log in']").click()
             //Addproduct to cart
             await page.locator("//a[contains(text(),'Samsung galaxy s6')]").click()
             await page.locator("//a[contains(text(),'Add to cart')]").click()
   
})