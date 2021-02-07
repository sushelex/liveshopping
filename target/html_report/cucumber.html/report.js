$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("delete_cart.feature");
formatter.feature({
  "line": 2,
  "name": "delete from the cart",
  "description": "",
  "id": "delete-from-the-cart",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@delete_cart"
    }
  ]
});
formatter.before({
  "duration": 12159642204,
  "status": "passed"
});
formatter.scenario({
  "line": 3,
  "name": "login scenario",
  "description": "",
  "id": "delete-from-the-cart;login-scenario",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "when user is on home screen",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "click on tshirt menu",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "user able to see the available tshirts",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "user hover over the available tshirt",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "user click on Add to cart button",
  "keyword": "And "
});
formatter.match({
  "location": "WomenOptions.when_user_is_on_home_screen()"
});
formatter.result({
  "duration": 3621900888,
  "status": "passed"
});
formatter.match({
  "location": "TshirtShopping.click_on_tshirt_menu()"
});
formatter.result({
  "duration": 2540482702,
  "status": "passed"
});
formatter.match({
  "location": "TshirtShopping.user_able_to_see_the_available_tshirts()"
});
formatter.result({
  "duration": 48994450,
  "status": "passed"
});
formatter.match({
  "location": "TshirtShopping.user_hover_over_the_available_tshirt()"
});
formatter.result({
  "duration": 3199360318,
  "status": "passed"
});
formatter.match({
  "location": "TshirtShopping.user_click_on_Add_to_cart_button()"
});
formatter.result({
  "duration": 3255556820,
  "status": "passed"
});
formatter.after({
  "duration": 780926045,
  "status": "passed"
});
});