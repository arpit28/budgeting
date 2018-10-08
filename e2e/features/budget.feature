Feature: Budget App Loads Correctly

  Scenario: Landing Page
    Given I am on budgeting app
    Then I verify the page loads correctly

  Scenario: Reports Tab
    Given I am on budgeting app
    When I navigate to reports
    Then I verify the inflow and outflow colors


