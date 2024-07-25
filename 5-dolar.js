const fs = require("fs/promises")
const { expect } = require("@playwright/test");
const {chromium} = require("playwright")

async function scrap(){
const browser = await chromium.launch()
const context = await browser.newContext()
const page = await context.newPage()
await page.goto("https://ardolar.netlify.app/")

const [compra] = await page.locator("#main-container > main > section > article:nth-child(2) > div > div > div:nth-child(1) > p.text-xl.font-sans.text-indigo-200").allInnerTexts()
console.log(compra)

const [venta] = await page.locator("#main-container > main > section > article:nth-child(2) > div > div > div.text-right > p.text-xl.font-sans.text-indigo-200").allInnerTexts()
console.log(venta)

await browser.close()
}

scrap()