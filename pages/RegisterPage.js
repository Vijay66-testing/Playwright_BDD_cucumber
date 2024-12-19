const { expect } = require("playwright/test");
class RegisterPage{
    constructor(page){
        this.page=page;
        this.SignUpText="//div[@class='signup-form']/h2"
        this.User_name_locator="//input[@data-qa='signup-name']"
        this.User_gmail_locator="//input[@data-qa='signup-email']"
        this.signupButtonLocator="//button[@data-qa='signup-button']"
        this.Signup_Information_locator="//div[@class='login-form']/h2/b"

        this.mr_checkbox_locator="//input[@id='id_gender1']"
        this.Password_locator="#password"
        this.selectday_locator="#days"
        this.selectmonth_locator="#months"
        this.selectyear_locator="#years"

        this.newslatterCheckBox_locator="//input[@id='newsletter']"
        this.specialoffersCheckBox_locator="//input[@id='optin']"

        this.firstNameLocator = "//input[@id='first_name']";
        this.lastNameLocator = "//input[@id='last_name']";
        this.companyLocator = "//input[@id='company']";
        this.address1Locator = "//input[@id='address1']";
        this.address2Locator = "//input[@id='address2']";
        this.countryLocator = "//select[@id='country']";
        this.stateLocator = "//input[@id='state']";
        this.cityLocator = "//input[@id='city']";
        this.zipcodeLocator = "//input[@id='zipcode']";
        this.mobileNumberLocator = "//input[@id='mobile_number']";

        this.CreateaccountButton_locator="//button[@data-qa='create-account']"

        this.accountCreatedText_locator="//h2[@data-qa='account-created']/b"

        this.continueButton_locator="//a[@data-qa='continue-button']"

        this.LogedAsText="//li[10]//a[1]"

        this.AccountDeletedMessage_locator="//b[normalize-space()='Account Deleted!']"

        this.DeleteContinueButton_locator=".btn.btn-primary"

    }

    async VerifySectionVisibity(page,expectedSection){
        const sectionLocator = `//*[contains(text(), '${expectedSection}')]`; // Adjust based on actual DOM structure
        const isVisible = await page.locator(sectionLocator).isVisible();
        expect(isVisible).toBeTruthy();
    }
    async EnterUserNameEmail(page,User_name,User_gmail){
        await page.fill(this.User_name_locator,User_name);
        await page.fill(this.User_gmail_locator,User_gmail);
    }
    async ClickOnSignUpBUtton(page){
        await page.click(this.signupButtonLocator);

    }
    async ClickOnTheButton(page,ExpectedButton){
        const Button = `//*[contains(text(), '${ExpectedButton}')]`;
        await page.click(Button);
    }
    // async VerifySignUpInformationText(page,ExpectedIntpText){
    //     const ActualInfoText=await page.locator(this.Signup_Information_locator).textContent();
    //     expect(ActualInfoText).toBe(ExpectedIntpText);
    // }

   
    async fillAccountDetails(page, title, password,dob) {
        if (title === 'Mr.') {
            await page.check(this.mr_checkbox_locator); // Assuming this is for "Mr."
        }
        // await page.fill(this.User_name_locator, name);
        // await page.fill(this.User_gmail_locator, email);
        await page.click(this.Password_locator);
        await page.fill(this.Password_locator, password);
    
        const [day, month, year] = dob.split('/'); // Assuming '1-Jan-1990' format

        await page.locator(this.selectday_locator).selectOption(day);

        // await page.locator(this.selectday_locator).selectOption(day);
        await page.locator(this.selectmonth_locator).selectOption(month);
        await page.locator(this.selectyear_locator).selectOption(year);

        // await page.locator('#years').selectOption('2020');
    }
    
    async SelectTheCheckBoxs(page){
        await page.check(this.newslatterCheckBox_locator);
        await page.check(this.specialoffersCheckBox_locator);

    }
    // async FillAdditionalDetails(page, details) {
    //     await page.fill(this.firstNameLocator, details['First Name']);
    //     await page.fill(this.lastNameLocator, details['Last Name']);
    //     await page.fill(this.companyLocator, details['Company']);
    //     await page.fill(this.address1Locator, details['Address']);
    //     if (details['Address2']) {
    //         await page.fill(this.address2Locator, details['Address2']);
    //     }
    //     // await page.selectOption(this.countryLocator, { label: details['Country'] });
    //     await page.fill(this.stateLocator, details['State']);
    //     await page.fill(this.cityLocator, details['City']);
    //     await page.fill(this.zipcodeLocator, details['Zipcode']);
    //     await page.fill(this.mobileNumberLocator, details['Mobile Number']);
    // }
    async FillAdditionalDetails(page) {
        await page.fill(this.firstNameLocator,"Vijay");
        await page.fill(this.lastNameLocator,"kumar");
        await page.fill(this.companyLocator,"ExampleCorp");
        await page.fill(this.address1Locator,"123 Main Street");
        await page.fill(this.address2Locator,"Apt 101");
        // await page.selectOption(this.countryLocator, { label: details['Country'] });
        await page.fill(this.stateLocator,"TS");
        await page.fill(this.cityLocator,"Hyderabad");
        await page.fill(this.zipcodeLocator,"12345");
        await page.fill(this.mobileNumberLocator,"1234567990");
    }
    async ClickOnCreateAccountButton(page){
        await page.click(this.CreateaccountButton_locator);
    }
    async checkAccountCreatedText(page,ExpectedAccCreatedText){
        const ActualAccCreatedText=await page.locator(this.accountCreatedText_locator);
        expect(ActualAccCreatedText).toBe(ExpectedAccCreatedText);

    }
    async clickOnContinueButton(page){
        await page.click(this.continueButton_locator);
    }


    async VerifyMessageVisible(page) {
        const isVisible = await page.locator(this.LogedAsText).isVisible();
        expect(isVisible).toBeTruthy();
    
    }
    async ClickOnDeleteAccount(page,DeleteAccount){
        const DeleteAccount_locator=`//a[normalize-space()='${DeleteAccount}']`;
        await page.click(DeleteAccount_locator);
    }

    async CheckAccountDeleted(page,Expecteddeletemessage){
        const Actualdeletedmessage=await page.locator(this.AccountDeletedMessage_locator);
        expect(Actualdeletedmessage).toBe(Expecteddeletemessage);

    }
    async ClickOnDeleteContinueButton(page){
        await page.click(this.DeleteContinueButton_locator);
    }

}


module.exports=RegisterPage;