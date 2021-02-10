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
  "duration": 13513083054,
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
formatter.step({
  "line": 9,
  "name": "user click on \"proceed to checkout\" button",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "click on delete icon",
  "keyword": "And "
});
formatter.match({
  "location": "WomenOptions.when_user_is_on_home_screen()"
});
formatter.result({
  "duration": 4539261138,
  "status": "passed"
});
formatter.match({
  "location": "TshirtShopping.click_on_tshirt_menu()"
});
formatter.result({
  "duration": 2819440920,
  "status": "passed"
});
formatter.match({
  "location": "TshirtShopping.user_able_to_see_the_available_tshirts()"
});
formatter.result({
  "duration": 41442676,
  "status": "passed"
});
formatter.match({
  "location": "TshirtShopping.user_hover_over_the_available_tshirt()"
});
formatter.result({
  "duration": 3176825347,
  "status": "passed"
});
formatter.match({
  "location": "TshirtShopping.user_click_on_Add_to_cart_button()"
});
formatter.result({
  "duration": 3251264409,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "proceed to checkout",
      "offset": 15
    }
  ],
  "location": "TshirtShopping.user_click_on_button2(String)"
});
formatter.result({
  "duration": 6327156234,
  "status": "passed"
});
formatter.match({
  "location": "DeleteCart.click_on_delete_icon()"
});
formatter.result({
  "duration": 3251559572,
  "status": "passed"
});
formatter.after({
  "duration": 3745676212,
  "status": "passed"
});
formatter.uri("shopTshirt.feature");
formatter.feature({
  "line": 3,
  "name": "Tshirt shopping",
  "description": "",
  "id": "tshirt-shopping",
  "keyword": "Feature",
  "tags": [
    {
      "line": 2,
      "name": "@execute_it"
    }
  ]
});
formatter.scenarioOutline({
  "line": 5,
  "name": "shopping tshirt online",
  "description": "",
  "id": "tshirt-shopping;shopping-tshirt-online",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 6,
  "name": "when user is on home screen",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "click on tshirt menu",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "user able to see the available tshirts",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "user hover over the available tshirt",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "user click on Add to cart button",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "message \"Product successfully added to your shopping cart\" should display",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "user click on \"proceed to checkout\" button",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "user scroll the page",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "user click on \"proceed to checkout\" button at last page",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "user navigated to \"\u003cpage_title\u003e\" page",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "sub-title is \"\u003csub_title\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "enter \"\u003cemail\u003e\" and \"\u003cpassword\u003e\" value",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "click on signIn button",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 19,
      "value": "#\t\tThen user navigated to \"ADDRESSES\" page"
    }
  ],
  "line": 20,
  "name": "sub title \"03. Address\"",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "user click on \"proceed to checkout\" on address screen",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "user navigated to \"SHIPPING\" page1",
  "keyword": "Then "
});
formatter.step({
  "line": 23,
  "name": "subtitle is \"\u003csub_title\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "check the \"terms\" checkbox",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "click on checkout button",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "User select the \"\u003cpayment option\u003e\" and click on \"confirm\"",
  "keyword": "Then "
});
formatter.examples({
  "comments": [
    {
      "line": 27,
      "value": "#\t\tAnd user click on confirm my order button"
    }
  ],
  "line": 28,
  "name": "",
  "description": "",
  "id": "tshirt-shopping;shopping-tshirt-online;",
  "rows": [
    {
      "cells": [
        "page_title",
        "sub_title",
        "email",
        "password",
        "payment option",
        "confirm"
      ],
      "line": 29,
      "id": "tshirt-shopping;shopping-tshirt-online;;1"
    },
    {
      "cells": [
        "AUTHENTICATION",
        "Sign in",
        "sushelex@gmail.com",
        "sush9301664636#",
        "bank wire",
        "confirm"
      ],
      "line": 30,
      "id": "tshirt-shopping;shopping-tshirt-online;;2"
    },
    {
      "cells": [
        "payment option",
        "confirm",
        "sushelex@gmail.com",
        "sush9301664636#",
        "check",
        "confirm"
      ],
      "line": 31,
      "id": "tshirt-shopping;shopping-tshirt-online;;3"
    }
  ],
  "keyword": "Examples"
});
