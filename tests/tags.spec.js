import { test, expect } from '@playwright/test';

test("test1@sanity", async ({ page }) => {
    console.log("this is test1")
})
test("test2@reg", async ({ page }) => {
    console.log("this is test2")
})
test("test3@sanity", async ({ page }) => {
    console.log("this is test3")
})
test("test4@reg", async ({ page }) => {
    console.log("this is test4")
})
test("test5@reg@sanity", async ({ page }) => {
    console.log("this is test5")
})