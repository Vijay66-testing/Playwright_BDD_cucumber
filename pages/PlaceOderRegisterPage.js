const { expect } = require("playwright/test");

class PlaceOderPage{
    constructor(page){
        this.page=page;
        this.overlay_content_hover_locator="(//div[@class='single-products']/div/p[text()='Blue Top'])[1]"
        this.AddToCart_locator="//div[@class='overlay-content']/p[text()='Blue Top']/following-sibling::a[contains(@class, 'add-to-cart')]"
        this.CountineShopingButton_locator="//button[normalize-space()='Continue Shopping']"
        this.shoppingCartText_locator="//li[text()='Shopping Cart']"
        this.AddressDetailsHeading_locator="//h2[normalize-space()='Address Details']"
        this.ReviewDetailsHeading_locator="//h2[normalize-space()='Review Your Order']"
        this.commentbox_locator="//textarea[@name='message']"

        this.paymentHeading_locator="//h2[@class='heading']"
        this.nameofcardinput_locator="[data-qa='name-on-card']"
        this.cardnumberinput_locator="[data-qa='card-number']"
        this.cvvInput_locator="[data-qa='cvc']"
        this.expairmonth_locator="[data-qa='expiry-month']"
        this.exparyear_locator="[data-qa='expiry-year']"
        this.payandconformoderder_locator="[data-qa='pay-button']"

        this.oderplaced_locator="[//b[normalize-space()='Order Placed!']]"
        this.SuccessMessage_locator="//div[@id='success_message']/div"
        this.continuebutton_locator="//a[@data-qa='continue-button']"

    }

    async AddProductToCart(page){
        await page.locator(this.overlay_content_hover_locator).hover();
        await page.locator(this.AddToCart_locator).click();
        await page.locator(this.CountineShopingButton_locator).click();
    }
    async CartPageShouldDisplay(page){
       
        await page.waitForSelector(this.shoppingCartText_locator, { state: 'visible' });
        const heading = await page.locator(this.shoppingCartText_locator).textContent();
        expect(heading.trim()).toBe('Shopping Cart'); // Adjust text as per actual heading
        console.log('Cart page is displayed successfully.');
        
    }
    async CheckAdressAndReviewDetails(page){
        await page.waitForSelector(this.AddressDetailsHeading_locator,{state:'visible'});
        const AddressHeading=await page.locator(this.AddressDetailsHeading_locator).textContent();
        expect(AddressHeading.trim()).toBe('Address Details');
        await page.waitForSelector(this.ReviewDetailsHeading_locator,{state:'visible'});
        const ReviewHeading=await page.locator(this.ReviewDetailsHeading_locator).textContent();
        expect(ReviewHeading.trim()).toBe('Review Your Order');
    }
    async EnterCommentBox(page,Description){
        await page.fill(this.commentbox_locator,Description);
    }
    async EnterPaymentsDetails(page){
        await page.waitForSelector(this.paymentHeading_locator,{state:'visible'});
        const AddressHeading=await page.locator(this.paymentHeading_locator).textContent();
        expect(AddressHeading.trim()).toBe('Payment');
        await page.fill(this.nameofcardinput_locator,"Bank name");
        await page.fill(this.cardnumberinput_locator,"123478945651");
        await page.fill(this.cvvInput_locator,"235");
        await page.fill(this.expairmonth_locator,"02");
        await page.fill(this.exparyear_locator,"2025");
    }
    async verifySuccussMessage(page){

        // const SuccessElement=await page.locator(this.SuccessMessage_locator).textContent();
        // console.log(SuccessElement.trim());
        
        await page.click(this.continuebutton_locator);
    }


}

module.exports=PlaceOderPage;