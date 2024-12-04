import { test, expect } from '@playwright/test';

test("mouseover", async ({ page }) => {
    await page.goto("https://demo.opencart.com/")
    await page.waitForTimeout(5000)
    await page.locator("//a[normalize-space()='Desktops']").hover()
    await page.locator("//a[normalize-space()='Mac (1)']").hover()
    await page.waitForTimeout(5000)
   

})