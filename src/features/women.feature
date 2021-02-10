@women
Feature: Validation of women feature



  Scenario: women option scenario validation
    Given when user is on home screen
    And hower over "women" option
    And Click on "T-shirts" option
    Then "TOPS" and "DRESSES" options should display
