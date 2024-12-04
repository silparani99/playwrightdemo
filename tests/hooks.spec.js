import { test, expect } from '@playwright/test';


test("HomepageTest", async ({ page }) => {
    await page.goto("https://www.demoblaze.com/")
             //Login
             await page.locator('#login2').click()
             await page.locator('#loginusername').fill('pavanol')
             await page.locator('#loginpassword').fill('test@123')
             await page.locator("//button[normalize-space()='Log in']").click()

             //Homepage
const products=await page.$$('.hrefch')
await expect(products).toHaveLength(9)
             //Logout               
   await page.locator('#logout2').click()

    await page.waitForTimeout(5000)
})

test("Add product to cart", async ({ page }) => {
    await page.goto("https://www.demoblaze.com/")
             //Login
             await page.locator('#login2').click()
             await page.locator('#loginusername').fill('pavanol')
             await page.locator('#loginpassword').fill('test@123')
             await page.locator("//button[normalize-space()='Log in']").click()
             //Addproduct to cart
             await page.locator("//a[contains(text(),'Samsung galaxy s6')]").click()
             await page.locator("//a[contains(text(),'Add to cart')]").click()
             page.on('dialog', async dialog =>
             {
                await expect(dialog.message()).toContain('Product added.')
                await dialog.accept()
             }
             )
             //Logout               
             await page.locator('#logout2').click()
    await page.waitForTimeout(5000)
})