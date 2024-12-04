import {test,expect} from '@playwright/test'

test('locators',async({page})=>
{
    await page.goto("https://testautomationpractice.blogspot.com/");
    //await page.selectOption('#colors',['Blue','Red'])
    //const colorsoption=await page.locator('#colors option')
    //await expect(colorsoption).toHaveCount(7);
   // const colorsoption=await page.$$('#colors option')
//console.log("number of option", colorsoption.length)
//await expect(colorsoption.length).toBe(7)
const optionvalue=await page.locator('#colors').textContent();
await expect(optionvalue.includes('Blue')).toBeTruthy();
await expect(optionvalue.includes('Black')).toBeFalsy();
    await page.waitForTimeout(5000);

})