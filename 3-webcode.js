const fs = require("fs/promises")
const { expect } = require("@playwright/test");
const {chromium} = require("playwright")

async function scrap(){
const browser = await chromium.launch()
const context = await browser.newContext()
const page = await context.newPage()
await page.goto("https://learnwebcode.com/")

await page.getByRole("button",{name:"See Plans"}).nth(1).click()
  await expect(page.getByRole("heading",{name:"Choose Your Plan"})).toBeVisible()

const [mensual] = await page.locator("body > div.pricing-overlay.pricing-overlay--visible > div > div > div:nth-child(1) > h2").allInnerTexts()
console.log(mensual)

const [forever] = await page.locator("body > div.pricing-overlay.pricing-overlay--visible > div > div > div:nth-child(2) > h2").allInnerTexts()
console.log(forever)

// const captoData ={
//     grados, humedad
// }
// await fs.writeFile("elPrecio.json",JSON.stringify(captoData))

await browser.close()
}

scrap()