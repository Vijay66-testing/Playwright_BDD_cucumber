@PlaceOrder
Feature: Complete user journey from signup to placing an order and deleting the account

Scenario: User creates an account, places an order, and deletes the account

Given the browser is launched
When the user navigates to "http://automationexercise.com"
Then the home page should be visible successfully

When the user clicks on the "Signup / Login" button
And fills all details in Signup form to create an account
Then the "Account Created!" message should be visible
And the user clicks the "Continue" button
Then the "Logged in as username" user message should be visible

When the user adds products to the cart
And clicks the "Cart" button
Then the cart page should be displayed

When the user clicks the "Proceed To Checkout" button
Then the Address Details and Review Your Order section should be displayed

When the user enters "Order description" in the comment text area
And clicks the "Place Order" button
And enters payment details:

And clicks the "Pay and Confirm Order" button

Then the success message "Your order has been placed successfully!" should be displayed

When the user clicks the "Delete Account" button
Then the "Account Deleted!" message should be visible
And the user clicks the "Continue" button
