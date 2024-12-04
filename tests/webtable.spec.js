import {test,expect} from '@playwright/test'

test('Innerframes',async({page})=>
{
    await page.goto("https://testautomationpractice.blogspot.com/");
    const table=await page.locator('#productTable')
    const columns = await table.locator('thead tr th');
    console.log("total columns in table", await columns.count())
    const Rows   = await table.locator('tbody tr');
    console.log("total rows in table",  await Rows.count())
    /*const matchedrows= Rows.filter({
        has: page.locator('td'),
        hasText: 'Smartwatch'
    }) 
        await selectproduct(Rows,page,'Smartphone');
        await selectproduct(Rows,page,'Tablet');

        await page.waitForTimeout(5000);
       async function selectproduct(Rows,page,name)
       {
        const matchedrows= Rows.filter({
            has: page.locator('td'),
            hasText: name
        })
        await matchedrows.locator('input').check()
       } 
   
    for (let i=0;i<await Rows.count();i++)
    {
        const row=Rows.nth(i);
        const tds=row.locator('td')
        for(let j=0;j<await tds.count()-1;j++)
        {
             console.log(await tds.nth(j).textContent())
        }
    }*/

    const pages=await page.locator('.pagination li a')
    const pagecounter=await pages.count();
    console.log("pages for this table",pagecounter)

    for (let p=0;p<pagecounter;p++)
    {
        if(p>0)
        {
            pages.nth(p).click()
        }
        for (let i=0;i<await Rows.count();i++)
            {
                const row=Rows.nth(i);
                const tds=row.locator('td')
                for(let j=0;j<await tds.count()-1;j++)
                {
                     console.log(await tds.nth(j).textContent())
                }
            }
            await page.waitForTimeout(5000);
    }

})