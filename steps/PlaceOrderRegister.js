
const { Given, Then,When } = require('@cucumber/cucumber');
const LoginPage =require('../pages/LoginPage')
const RegisterPage = require('../pages/RegisterPage');
const PlaceOderPage =require('../pages/PlaceOderRegisterPage');
const loginPage=new LoginPage();
const registerPage = new RegisterPage();
const placeOderPage =new PlaceOderPage();


When('fills all details in Signup form to create an account',async function () {
    const title="Mr."
    const User_name="Sathish1"
    const User_gmail ="Sathish1@gmail.com"
    const password="Sathish1"
    const dob="1/February/2000"
    await registerPage.EnterUserNameEmail(this.page,User_name,User_gmail);
    await registerPage.ClickOnSignUpBUtton(this.page);
    await registerPage.fillAccountDetails(this.page,title,password,dob);
    await registerPage.SelectTheCheckBoxs(this.page)
    await registerPage.FillAdditionalDetails(this.page);
    await registerPage.ClickOnCreateAccountButton(this.page);

});

When('the user adds products to the cart',async function () {
    await placeOderPage.AddProductToCart(this.page);    
});


Then('the cart page should be displayed',async function () {
    await placeOderPage.CartPageShouldDisplay(this.page);

});


Then('the Address Details and Review Your Order section should be displayed',async function () {
    await placeOderPage.CheckAdressAndReviewDetails(this.page);
});

When('the user enters {string} in the comment text area',async function (Description) {
    await placeOderPage.EnterCommentBox(this.page,Description)
});


When('enters payment details:',async function () {
    await placeOderPage.EnterPaymentsDetails(this.page);
});

Then('the success message {string} should be displayed',async function (string) {
    await placeOderPage.verifySuccussMessage(this.page)
});

