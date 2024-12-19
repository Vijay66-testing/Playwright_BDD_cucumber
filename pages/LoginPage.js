const { expect } = require('@playwright/test');

class LoginPage {
    constructor(page) {
        this.page = page;
        this.HomeloginButtonLocator = "//a[@href='/login']";
        this.LoginPageText = "//div[@class='login-form']/h2";
        this.usernamelocator = "//input[@data-qa='login-email']";
        this.passwordlocator = "//input[@data-qa='login-password']";
        this.LoginButtonLocator = "//button[@data-qa='login-button']";
        this.LogedAsText = "li:nth-child(10) a:nth-child(1)";
    }

    async navigateURL(page, url) {
       
    try {
        // Increase the timeout to 30 seconds to accommodate slow internet
        await page.goto(url,{ waitUntil: 'domcontentloaded' }, { timeout: 30000 });  // Timeout set to 30 seconds
    } catch (error) {
        console.error('Error navigating to the URL:', error);
        throw error;
    }
    console.log('Navigation successful.');
    }

    async assertHomePageTitle(page,expectedTitle) {
        const actualTitle = await page.title();
        expect(actualTitle).toBe(expectedTitle); // Validate the title
        console.log(`Verified: Page title is "${actualTitle}" as expected.`);
    }

    async ClickOnHomeLoginButton(page) {
        await page.click(this.HomeloginButtonLocator);
    }

    async verifyTheLogingText( page,ExpectedPageText) {
        const sectionLocator = `//*[contains(text(), '${ExpectedPageText}')]`; // Adjust based on actual DOM structure
        const isVisible = await page.locator(sectionLocator).isVisible();
        expect(isVisible).toBeTruthy();
    }

    async LoginWithValidCred(page, email, password) {
        try{
        await page.fill(this.usernamelocator, email);
        await page.fill(this.passwordlocator, password);
        }catch (error) {
            console.error("Error filling in credentials:", error);
            throw error;
        }
    }

    async ClickTheLoginButton(page) {
        await page.click(this.LoginButtonLocator);
    }

    async CheckTheLogedAsText(page) {
        await page.waitForSelector(this.LogedAsText, { state: 'visible' });
        const loggedText = await page.locator(this.LogedAsText).textContent();
        expect(await page.locator(this.LogedAsText).isVisible()).toBe(true);
        console.log(`Logged in as text: ${loggedText}`);
    }
}

module.exports = LoginPage;
