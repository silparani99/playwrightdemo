import { test, expect } from '@playwright/test';

test("datepicker", async ({ page }) => {
    await page.goto("https://testautomationpractice.blogspot.com/");
    //await page.locator('#datepicker').fill('04/29/2025')
const year="2025"
const month="July"
const date="20"
    await page.locator('#datepicker').click();
    while(true)
    {
        const currentmonth=await page.locator('.ui-datepicker-month').textContent()
        const currentyear=await page.locator('.ui-datepicker-year').textContent()
        if(currentmonth==month && currentyear==year)
        {
            break;
        }
        await page.locator('[title="Next"]').click()
    }
    await page.waitForTimeout(5000);
await page.click(`//a[@class="ui-state-default"][text()='${date}']`)

    await page.waitForTimeout(5000);

})