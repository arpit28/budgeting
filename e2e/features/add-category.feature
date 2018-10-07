Feature: User should be able to Add Category

  Scenario: User should be able to add new category (happy path)
    Given I am on budgeting app
    When I add category on Landing Page
    Then I verify category is added


  Scenario: Value field should not take characters (negative path)
    Given I am on budgeting app
    When I try to add characters in value field
    Then I verify category is not added
