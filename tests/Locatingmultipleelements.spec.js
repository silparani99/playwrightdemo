import {test,expect} from '@playwright/test';
test('locatingmultiple', async({page})=>
{
    await page.goto("https://www.demoblaze.com/");
    page.waitForSelector("//div[@id='tbodyid']//h4/a")
    const products =await page.$$("//div[@id='tbodyid']//h4/a")
    for(const product of products)
    {
        const productname= await product.textContent();
        console.log(productname);
    }
})