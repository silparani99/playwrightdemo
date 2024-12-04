import {test,expect} from '@playwright/test'

test('locators',async({page})=>
{
    await page.goto("https://ui.vision/demo/webtest/frames/");
    const allframes=await page.frames();
    console.log("total number of frame",allframes.length)
    const frame1= await page.frame({url:'https://ui.vision/demo/webtest/frames/frame_1.html'})
    frame1.fill("//input[@name='mytext1']",'silpa')
    
       
    
    await page.waitForTimeout(5000);

})