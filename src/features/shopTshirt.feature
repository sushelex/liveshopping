
@execute_it
Feature: Tshirt shopping

  Scenario Outline: shopping tshirt online
    Given when user is on home screen
    And click on tshirt menu
    Then user able to see the available tshirts
    And user hover over the available tshirt
    And user click on Add to cart button
    Then message "Product successfully added to your shopping cart" should display
		And user click on "proceed to checkout" button
		And user scroll the page
		And user click on "proceed to checkout" button at last page
		Then user navigated to "<page_title>" page
		And sub-title is "<sub_title>" 
		And enter "<email>" and "<password>" value
		And click on signIn button
		Then user navigated to "ADDRESSES" page
		And sub title "03. Address"		
		And user click on "proceed to checkout" on address screen
		Then user navigated to "SHIPPING" page1
		And subtitle is "<sub_title>"
		And check the "terms" checkbox
		And click on checkout button
		Examples:
		|page_title    |sub_title|email             |password       |
		|AUTHENTICATION|Sign in  |sushelex@gmail.com|sush9301664636#| 
				

		
		