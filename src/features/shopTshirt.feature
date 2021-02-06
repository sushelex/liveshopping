
@execute_it
Feature: Tshirt shopping



  Scenario: shopping tshirt online
    Given when user is on home screen
    And click on tshirt menu
    Then user able to see the available tshirts
    And user hover over the available tshirt
    And user click on Add to cart button
    Then message "Product successfully added to your shopping cart" should display
		And user click on "proceed to checkout" button
		And user scroll the page
		And user click on "proceed to checkout" button at last page