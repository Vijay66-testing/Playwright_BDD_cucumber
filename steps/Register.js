const { Before, After, Given, Then,When } = require('@cucumber/cucumber');
const LoginPage =require('../pages/LoginPage')
const RegisterPage = require('../pages/RegisterPage');

const loginPage=new LoginPage();
const registerPage = new RegisterPage();


Given('the browser is launched', function () {
    console.log('Browser is already launched in the Before hook.');
});

When('the user navigates to {string}',async function (url) {
    await loginPage.navigateURL(this.page,url);
});

Then('the home page should be visible successfully',async function () {
    await loginPage.assertHomePageTitle( this.page,'Automation Exercise'); // Use shared instance


});
When('the user clicks on the {string} button',async function (string) {
    await loginPage.ClickOnHomeLoginButton(this.page);

});

Then('the {string} section should be visible',async function (expectedSection) {
    await registerPage.VerifySectionVisibity(this.page,expectedSection)
});

When('the user enters {string} as the name and {string} as the email address',async function (User_name, User_gmail) {
await registerPage.EnterUserNameEmail(this.page,User_name,User_gmail);
});

When('clicks the Signup button',async function () {
await registerPage.ClickOnSignUpBUtton(this.page);
});

// Then('the {string} section should be visible',async function (ExpectedIntpText) {
// await registerPage.VerifySignUpInformationText(page,ExpectedIntpText);
// });

When('the user fills in account details: Title, Name, Email, Password, Date of Birth', async function () {
    const title="Mr."
    const password="Vijay@123"
    const dob="1/February/2000"

    await registerPage.fillAccountDetails(this.page, title, password,dob);

});
When('selects the checkboxes for {string} and {string}',async function (string, string2) {
    await registerPage.SelectTheCheckBoxs(this.page)
});

When('fills in additional details:',async function () {
    await registerPage.FillAdditionalDetails(this.page);
});

When('clicks the {string} button',async function (ExpectedButton) {
    await registerPage.ClickOnTheButton(this.page,ExpectedButton);
});

Then('the {string} message should be visible',async function (expectedSection) {
    await registerPage.VerifySectionVisibity(this.page,expectedSection)
});

When('the user clicks the {string} button',async function (ExpectedButton) {
    await registerPage.ClickOnTheButton(this.page,ExpectedButton);
});

Then('the {string} user message should be visible',async function (string) {
    await registerPage.VerifyMessageVisible(this.page);

});


// When('the user clicks the {string} button',async function (ExpectedButton) {
//     await registerPage.ClickOnTheButton(page,ExpectedButton)



// Then('the {string} message should be visible',async function (Expecteddeletemessage) {
//     await registerPage.CheckAccountDeleted(page,Expecteddeletemessage)
// });

// Then('the user clicks the {string} button',async function (string) {
//     await registerPage.ClickOnDeleteContinueButton(page);
// });
