import { test, expect } from '@playwright/test';

test("softassert", async ({ page }) => {
    await page.goto("https://www.demoblaze.com/")
    await expect.soft(page).toHaveTitle("STORE1");
    await expect.soft(page).toHaveURL("https://www.demoblaze.com/")
       await expect.soft(await page.locator(".navbar-brand")).toBeVisible();

})