import { test, expect } from '@playwright/test';

test.beforeAll(async()=>
{
    console.log("this is beforeall")
})
test.afterAll(async()=>
    {
        console.log("this is afterAll")
    })
    test.beforeEach(async()=>
        {
            console.log("this is beforeEach")
        })
test.afterEach(async()=>
    {
        console.log("this is afterEach")
     })

test.describe('Group1',async()=>
{
    test("test1", async ({ page }) => {
        console.log("this is test1")
    })
    test("test2", async ({ page }) => {
        console.log("this is test2")
    })
})

test.describe.only('Group2',async()=>
    {
        test("test3", async ({ page }) => {
            console.log("this is test3")
        })
        test("test4", async ({ page }) => {
            console.log("this is test4")
        })
    })
