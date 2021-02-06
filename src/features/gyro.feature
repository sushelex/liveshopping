
@gyro
Feature: login
  Scenario Outline: login scenario
    Given on home screen 
    When user click on "signin" link
    And user enter "<email>" and "<password>"
	Examples:
	|email						 |password			 |
	|sushelex@gmail.com|sush9301664636#|	