const { Before, After } = require('@cucumber/cucumber');
const { chromium } = require('playwright');
const dotenv = require('dotenv');
const path = require('path');

const environment = process.env.NODE_ENV;
const envPath = path.resolve(__dirname, 'env', `.env.${environment}`);
dotenv.config({ path: envPath });

console.log(`Running in ${environment} environment with URL: ${process.env.BASE_URL}`);
console.log(`Loaded Email: ${process.env.EMAIL}`);
console.log(`Loaded Password: ${process.env.PASSWORD}`);

let browser;
let context;
let page;

Before(async function () {
    browser = await chromium.launch({ headless: false });
    context = await browser.newContext();
    page = await context.newPage();
    this.page = page; // Make `page` accessible across step definitions
    console.log('Browser, context, and page initialized successfully.');

    this.baseUrl = process.env.BASE_URL;  // The base URL loaded from the environment
    this.email = process.env.EMAIL;  // Email loaded from the environment
    this.password = process.env.PASSWORD;  // Password loaded from the environment
    console.log(`Using credentials: ${this.email} / ${this.password}`);

});

After(async function () {
    if (page) {
        await page.close();
        console.log("Page closed.");
    }
    if (context) {
        await context.close();
        console.log("Context closed.");
    }
    if (browser) {
        await browser.close();
        console.log("Browser closed successfully.");
    }
});

module.exports = { page };
