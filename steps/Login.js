const { Given, When, Then } = require('@cucumber/cucumber');
const LoginPage = require('../pages/LoginPage');

const loginPage = new LoginPage(this.page); // Use shared page instance from hooks

Given('I launch the browser', async function () {
    console.log('Browser is launched successfully in the Before hook.');
});

When('I navigate to the URL {string}', async function (url) {
    await loginPage.navigateURL(this.page,url);
});

Then('I should see the home page visible successfully', async function () {
    await loginPage.assertHomePageTitle(this.page,'Automation Exercise');
});

When('I click on the Signup and login button', async function () {
    await loginPage.ClickOnHomeLoginButton(this.page);
});

Then('I should see {string} visible', async function (ExpectedPageText) {
    await loginPage.verifyTheLogingText(this.page, ExpectedPageText);
});

When('I enter the correct Email and password', async function () {
    const email="Sathish@gmail.com"
    const password="Sathish"
    await loginPage.LoginWithValidCred(this.page,this.email || email,this.password || password);
});

When('I click the Login button', async function () {
    await loginPage.ClickTheLoginButton(this.page);
});

Then('I should see Logged in as username visible', async function () {
    await loginPage.CheckTheLogedAsText(this.page);
});

When('I enter the incorrect Email and password',async function(){
    const email="Sath@gmail.com"
    const password="Sath"
    await loginPage.LoginWithValidCred(this.page,email,password);
})
