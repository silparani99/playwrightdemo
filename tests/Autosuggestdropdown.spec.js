import {test,expect} from '@playwright/test'

test('locators',async({page})=>
{
    await page.goto("https://www.redbus.in/");
  await page.locator('#src').fill('Delhi');
  await page.waitForSelector("//li[contains(@class,'sc-iwsKbI')]")
  const fromcity=await page.$$("//li[contains(@class,'sc-iwsKbI')]")
      for(let option of fromcity)
        {
            let value=await option.textContent();
            //console.log("autosuggested values for Delhi city",value)
            if(value.includes('Mayur Vihar'))
            {
                option.click();
                break;
            }
        } 
    
    await page.waitForTimeout(5000);

})