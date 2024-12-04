import {test,expect} from '@playwright/test'

test('locators',async({page})=>
{
    await page.goto("https://testautomationpractice.blogspot.com/");
    await page.locator("//select[@id='country']").selectOption('India');
       
    
    await page.waitForTimeout(5000);

})