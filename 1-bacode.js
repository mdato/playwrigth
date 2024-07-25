const {chromium} = require("playwright")
const { test, expect } = require("@playwright/test");

async function captoPage(){
const browser = await chromium.launch()
const context = await browser.newContext()
const page = await context.newPage()
await page.goto("https://bacode.com.ar/")

await page.setViewportSize({width:640, height: 480})
await page.screenshot({path: `foto-${new Date().getTime()}.png`, fullPage:true})

await page.setViewportSize({width:1920, height: 1080})
await page.screenshot({path: `foto-${new Date().getTime()}.png`, fullPage:true})

await browser.close()
}

captoPage()