@GoogleTest
Feature: Google Search

  Scenario: Navigate to Google
    Given I open the Google homepage
    Then the page title should be "Google"