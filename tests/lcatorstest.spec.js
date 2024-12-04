import {test,expect} from '@playwright/test'

test('locators',async({page})=>
{
    await page.goto("https://www.demoblaze.com/");
    await page.click('id=login2')
    await page.fill('#loginusername','pavanol')
    await page.fill('#loginpassword','test@123')
    await page.click("//button[normalize-space()='Log in']")
    const logoutlink = await page.locator("//a[@id='logout2']")
    await expect(logoutlink).toBeVisible();
    await page.close();
})