import {test,expect} from '@playwright/test'

test('Innerframes',async({page})=>
{
    await page.goto("https://ui.vision/demo/webtest/frames/");
    const frame3= await page.frame({url:'https://ui.vision/demo/webtest/frames/frame_3.html'})
    frame3.fill("//input[@name='mytext3']",'silpa')
    const childframe=await frame3.childFrames();
    await childframe[0].locator('//*[@id="i6"]/div[3]/div').check();
    
       
    
    await page.waitForTimeout(5000);

})