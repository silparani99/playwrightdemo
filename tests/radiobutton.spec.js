import {test,expect} from '@playwright/test'

test('locators',async({page})=>
{
    await page.goto("https://testautomationpractice.blogspot.com/");
    await page.locator("//input[@id='male']").check();
    await expect(await page.locator("//input[@id='male']")).toBeChecked();
    await expect(await page.locator("//input[@id='male']").isChecked()).toBeTruthy();
    await expect(page.locator("//input[@id='female']").isChecked()).toBeFalsy();
    
    await page.waitForTimeout(5000);

})