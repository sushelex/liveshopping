@fav
Feature: login message displayed when product is clicked for wishlish

	Scenario Outline: verify wishlist login message
		Given on home screen 
		Then user hover over DRESSES
		And user select options "<dress>"
		And user scroll the page
		Then user hover over large image
		Then user click on "wishlist"
		And user click on "close"
		
		Examples:
		|dress					|
		|Casual Dresses |
		|Evening Dresses|
		|Summer Dresses |
		 

