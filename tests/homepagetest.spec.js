const {test,expect}=require('@playwright/test');
test('Home page',async({page}) =>{
await page.goto("https://www.demoblaze.com/");
const pageTitle=await page.title();
console.log('page Title is', pageTitle)

await expect(page).toHaveTitle('STORE');
const pageURL= page.url();
console.log("page URL is" ,pageURL)
await expect(page).toHaveURL("https://www.demoblaze.com/");
page.close();
})