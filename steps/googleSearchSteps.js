const { Before, After, Given, Then } = require('@cucumber/cucumber');
const { expect, chromium } = require('@playwright/test');
const GooglePage = require('../pages/googlePage');

const googlePage = new GooglePage();


Given('I open the Google homepage', async function () {
  await googlePage.navigateToGoogle(this.page);
});

Then('the page title should be "Google"', async function () {
  const title = await googlePage.getTitle(this.page);
  expect(title).toEqual("Google");
});

