import {test,expect} from '@playwright/test'

test('locators',async({page})=>
{
    await page.goto("https://testautomationpractice.blogspot.com/");
    await page.locator("//input[@id='sunday']").check();
    await expect(await page.locator("//input[@id='sunday']")).toBeChecked();
    await expect(await page.locator("//input[@id='sunday']").isChecked()).toBeTruthy();
    await expect(await page.locator("//input[@id='monday']").isChecked()).toBeFalsy();
    const locatorelements=[
        "//input[@id='saturday']","//input[@id='monday']","//input[@id='tuesday']"
    ];
    for(const locator of locatorelements)
    {
        await page.locator(locator).check();
    }
    await page.waitForTimeout(5000);
    for(const locator of locatorelements)
        {
            if(await page.locator(locator).isChecked())
            await page.locator(locator).uncheck();
        }
    await page.waitForTimeout(5000);

})