@Register
Feature: User Registration and Account Deletion

  Scenario: Register and delete user account
    Given the browser is launched
    When the user navigates to "http://automationexercise.com"
    Then the home page should be visible successfully

    When the user clicks on the "Signup / Login" button
    Then the "New User Signup!" section should be visible

    When the user enters "Vijay" as the name and "Vijay@gmail.com" as the email address
    And clicks the Signup button
    Then the "Enter Account Information" section should be visible

    When the user fills in account details: Title, Name, Email, Password, Date of Birth

    And selects the checkboxes for "Sign up for our newsletter!" and "Receive special offers from our partners!"
    And fills in additional details:
    And clicks the "Create Account" button
    Then the "Account Created!" message should be visible

    When the user clicks the "Continue" button
    Then the "Logged in as username" user message should be visible

    When the user clicks the "Delete Account" button
    Then the "Account Deleted!" message should be visible
    And the user clicks the "Continue" button
  