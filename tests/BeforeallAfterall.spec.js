import { test, expect } from '@playwright/test';

let page;
test.beforeAll(async({browser})=>
{
    page=await browser.newPage()
//Login
await page.goto("https://www.demoblaze.com/")
await page.locator('#login2').click()
await page.locator('#loginusername').fill('pavanol')
await page.locator('#loginpassword').fill('test@123')
await page.locator("//button[normalize-space()='Log in']").click()
})

test.afterAll(async()=>
{
              //Logout               
   await page.locator('#logout2').click()

})

test("HomepageTest", async () => {
            
const products=await page.$$('.hrefch')
await expect(products).toHaveLength(9)
       await page.waitForTimeout(5000)
})

test("Add product to cart", async () => {
    
             //Addproduct to cart
             await page.locator("//a[contains(text(),'Samsung galaxy s6')]").click()
             await page.locator("//a[contains(text(),'Add to cart')]").click()
             page.on('dialog', async dialog =>
             {
                await expect(dialog.message()).toContain('Product added.')
                await dialog.accept()
             }
             )
                await page.waitForTimeout(5000)
})