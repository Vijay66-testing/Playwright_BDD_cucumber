@LoginTest
Feature: User Login Functionality

  Scenario: Successful user login
    Given I launch the browser
    And I navigate to the URL "http://automationexercise.com"
    Then I should see the home page visible successfully
    When I click on the Signup and login button
    Then I should see "Login to your account" visible
    When I enter the correct Email and password
    And I click the Login button
    Then the "Logged in as username" user message should be visible

  Scenario: Failed user login
    Given I launch the browser
    And I navigate to the URL "http://automationexercise.com"
    Then I should see the home page visible successfully
    When I click on the Signup and login button
    Then I should see "Login to your account" visible
    When I enter the incorrect Email and password
    And I click the Login button
    Then I should see "Your email or password is incorrect!" visible
