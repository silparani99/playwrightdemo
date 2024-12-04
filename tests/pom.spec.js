import { test, expect } from '@playwright/test';
import { loginpage } from '../Pages/Loginpage';
import { homepage } from '../Pages/Homepage';
import { cartpage } from '../Pages/Cartpage';
test('logintest', async ({ page }) => {
    const loginobject=new loginpage(page)
    await loginobject.gotologinpage();
    await page.waitForTimeout(3000)
    await loginobject.loginmethod('pavanol','test@123')
    await page.waitForTimeout(3000)

    const homepageobject=new homepage(page)
    await homepageobject.addproducttocart("Samsung galaxy s6")
    await page.waitForTimeout(3000)
    await homepageobject.gotocart()

    const cartpageobject=new cartpage(page)
    await page.waitForTimeout(3000)
    const status=await cartpageobject.checkproductincart('Samsung galaxy s6')
        expect(await status).toBe(true)

})