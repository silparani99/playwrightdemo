import { test, expect } from '@playwright/test';
test('assertionstest', async ({ page }) => 
{
await page.goto('https://demo.nopcommerce.com/register')
await expect(page).toHaveURL('https://demo.nopcommerce.com/register')
await expect(page).toHaveTitle('nopCommerce demo store. Register')
const logohead = page.locator('.header-logo');
await expect(logohead).toBeVisible();
}
)