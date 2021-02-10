$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("shopTshirt.feature");
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
  "line": 19,
  "name": "user navigated to \"ADDRESSES\" page",
  "keyword": "Then "
});
formatter.step({
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
formatter.examples({
  "line": 26,
  "name": "",
  "description": "",
  "id": "tshirt-shopping;shopping-tshirt-online;",
  "rows": [
    {
      "cells": [
        "page_title",
        "sub_title",
        "email",
        "password"
      ],
      "line": 27,
      "id": "tshirt-shopping;shopping-tshirt-online;;1"
    },
    {
      "cells": [
        "AUTHENTICATION",
        "Sign in",
        "sushelex@gmail.com",
        "sush9301664636#"
      ],
      "line": 28,
      "id": "tshirt-shopping;shopping-tshirt-online;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 14539243354,
  "status": "passed"
});
formatter.scenario({
  "line": 28,
  "name": "shopping tshirt online",
  "description": "",
  "id": "tshirt-shopping;shopping-tshirt-online;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 2,
      "name": "@execute_it"
    }
  ]
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
  "name": "user navigated to \"AUTHENTICATION\" page",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "sub-title is \"Sign in\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "enter \"sushelex@gmail.com\" and \"sush9301664636#\" value",
  "matchedColumns": [
    2,
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "click on signIn button",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "user navigated to \"ADDRESSES\" page",
  "keyword": "Then "
});
formatter.step({
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
  "name": "subtitle is \"Sign in\"",
  "matchedColumns": [
    1
  ],
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
formatter.match({
  "location": "WomenOptions.when_user_is_on_home_screen()"
});
formatter.result({
  "duration": 3393913726,
  "status": "passed"
});
formatter.match({
  "location": "TshirtShopping.click_on_tshirt_menu()"
});
formatter.result({
  "duration": 3840498525,
  "status": "passed"
});
formatter.match({
  "location": "TshirtShopping.user_able_to_see_the_available_tshirts()"
});
formatter.result({
  "duration": 43225683,
  "status": "passed"
});
formatter.match({
  "location": "TshirtShopping.user_hover_over_the_available_tshirt()"
});
formatter.result({
  "duration": 3190905452,
  "status": "passed"
});
formatter.match({
  "location": "TshirtShopping.user_click_on_Add_to_cart_button()"
});
formatter.result({
  "duration": 3256709427,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Product successfully added to your shopping cart",
      "offset": 9
    }
  ],
  "location": "TshirtShopping.message_should_display(String)"
});
formatter.result({
  "duration": 5435456,
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
  "duration": 6662039379,
  "status": "passed"
});
formatter.match({
  "location": "TshirtShopping.user_scroll_the_page()"
});
formatter.result({
  "duration": 13822572,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "proceed to checkout",
      "offset": 15
    }
  ],
  "location": "TshirtShopping.user_click_on_something_button_at_last_page(String)"
});
formatter.result({
  "duration": 8028909110,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "AUTHENTICATION",
      "offset": 19
    }
  ],
  "location": "AddressSteps.user_navigated_to_page(String)"
});
formatter.result({
  "duration": 50852969,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Sign in",
      "offset": 14
    }
  ],
  "location": "AuthenticationSteps.sub_title_is_something(String)"
});
formatter.result({
  "duration": 604444,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "sushelex@gmail.com",
      "offset": 7
    },
    {
      "val": "sush9301664636#",
      "offset": 32
    }
  ],
  "location": "AuthenticationSteps.user_enter_something_and_something_value(String,String)"
});
formatter.result({
  "duration": 121536226,
  "status": "passed"
});
formatter.match({
  "location": "AuthenticationSteps.click_on_signin_button()"
});
formatter.result({
  "duration": 7581245305,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ADDRESSES",
      "offset": 19
    }
  ],
  "location": "AddressSteps.user_navigated_to_page(String)"
});
formatter.result({
  "duration": 33519094,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "03. Address",
      "offset": 11
    }
  ],
  "location": "AddressSteps.sub_title_is(String)"
});
formatter.result({
  "duration": 34122211,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "proceed to checkout",
      "offset": 15
    }
  ],
  "location": "AddressSteps.user_click_on_on_address_screen(String)"
});
formatter.result({
  "duration": 4792277627,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "SHIPPING",
      "offset": 19
    }
  ],
  "location": "ShippingSteps.user_navigated_to_page(String)"
});
formatter.result({
  "duration": 1791735,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Sign in",
      "offset": 13
    }
  ],
  "location": "ShippingSteps.sub_title_is(String)"
});
formatter.result({
  "duration": 378029,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "terms",
      "offset": 11
    }
  ],
  "location": "ShippingSteps.check_the_something_checkbox(String)"
});
formatter.result({
  "duration": 246956608,
  "status": "passed"
});
formatter.match({
  "location": "ShippingSteps.click_on_checkout_button()"
});
formatter.result({
  "duration": 1926047561,
  "status": "passed"
});
formatter.after({
  "duration": 3837820596,
  "status": "passed"
});
});