$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("wishlish_login_message.feature");
formatter.feature({
  "line": 2,
  "name": "login message displayed when product is clicked for wishlish",
  "description": "",
  "id": "login-message-displayed-when-product-is-clicked-for-wishlish",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@fav"
    }
  ]
});
formatter.scenarioOutline({
  "line": 4,
  "name": "verify wishlist login message",
  "description": "",
  "id": "login-message-displayed-when-product-is-clicked-for-wishlish;verify-wishlist-login-message",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "on home screen",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "user hover over DRESSES",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "user select options \"\u003cdress\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "user scroll the page",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "user hover over large image",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "user click on \"wishlist\"",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "user click on \"close\"",
  "keyword": "And "
});
formatter.examples({
  "line": 13,
  "name": "",
  "description": "",
  "id": "login-message-displayed-when-product-is-clicked-for-wishlish;verify-wishlist-login-message;",
  "rows": [
    {
      "cells": [
        "dress"
      ],
      "line": 14,
      "id": "login-message-displayed-when-product-is-clicked-for-wishlish;verify-wishlist-login-message;;1"
    },
    {
      "cells": [
        "Casual Dresses"
      ],
      "line": 15,
      "id": "login-message-displayed-when-product-is-clicked-for-wishlish;verify-wishlist-login-message;;2"
    },
    {
      "cells": [
        "Evening Dresses"
      ],
      "line": 16,
      "id": "login-message-displayed-when-product-is-clicked-for-wishlish;verify-wishlist-login-message;;3"
    },
    {
      "cells": [
        "Summer Dresses"
      ],
      "line": 17,
      "id": "login-message-displayed-when-product-is-clicked-for-wishlish;verify-wishlist-login-message;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 18675016466,
  "status": "passed"
});
formatter.scenario({
  "line": 15,
  "name": "verify wishlist login message",
  "description": "",
  "id": "login-message-displayed-when-product-is-clicked-for-wishlish;verify-wishlist-login-message;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@fav"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "on home screen",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "user hover over DRESSES",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "user select options \"Casual Dresses\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "user scroll the page",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "user hover over large image",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "user click on \"wishlist\"",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "user click on \"close\"",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.on_home_screen()"
});
formatter.result({
  "duration": 4430521884,
  "status": "passed"
});
formatter.match({
  "location": "DressesSteps.user_hover_over_DRESSES()"
});
formatter.result({
  "duration": 3195887163,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Casual Dresses",
      "offset": 21
    }
  ],
  "location": "Wishlist.user_select_options_something(String)"
});
formatter.result({
  "duration": 8449257449,
  "status": "passed"
});
formatter.match({
  "location": "TshirtShopping.user_scroll_the_page()"
});
formatter.result({
  "duration": 27548784,
  "status": "passed"
});
formatter.match({
  "location": "Wishlist.user_hover_over_large_image()"
});
formatter.result({
  "duration": 3151311424,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "wishlist",
      "offset": 15
    }
  ],
  "location": "Wishlist.user_click_on(String)"
});
formatter.result({
  "duration": 246855118,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "close",
      "offset": 15
    }
  ],
  "location": "Wishlist.user_click_on(String)"
});
formatter.result({
  "duration": 34727261,
  "status": "passed"
});
formatter.after({
  "duration": 3801486482,
  "status": "passed"
});
formatter.before({
  "duration": 10115805891,
  "status": "passed"
});
formatter.scenario({
  "line": 16,
  "name": "verify wishlist login message",
  "description": "",
  "id": "login-message-displayed-when-product-is-clicked-for-wishlish;verify-wishlist-login-message;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@fav"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "on home screen",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "user hover over DRESSES",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "user select options \"Evening Dresses\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "user scroll the page",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "user hover over large image",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "user click on \"wishlist\"",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "user click on \"close\"",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.on_home_screen()"
});
formatter.result({
  "duration": 1858599054,
  "status": "passed"
});
formatter.match({
  "location": "DressesSteps.user_hover_over_DRESSES()"
});
formatter.result({
  "duration": 3164588780,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Evening Dresses",
      "offset": 21
    }
  ],
  "location": "Wishlist.user_select_options_something(String)"
});
formatter.result({
  "duration": 6075156626,
  "status": "passed"
});
formatter.match({
  "location": "TshirtShopping.user_scroll_the_page()"
});
formatter.result({
  "duration": 14106479,
  "status": "passed"
});
formatter.match({
  "location": "Wishlist.user_hover_over_large_image()"
});
formatter.result({
  "duration": 3145287511,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "wishlist",
      "offset": 15
    }
  ],
  "location": "Wishlist.user_click_on(String)"
});
formatter.result({
  "duration": 13411292,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "close",
      "offset": 15
    }
  ],
  "location": "Wishlist.user_click_on(String)"
});
formatter.result({
  "duration": 9304076,
  "status": "passed"
});
formatter.after({
  "duration": 3867688622,
  "status": "passed"
});
formatter.before({
  "duration": 21964009894,
  "status": "passed"
});
formatter.scenario({
  "line": 17,
  "name": "verify wishlist login message",
  "description": "",
  "id": "login-message-displayed-when-product-is-clicked-for-wishlish;verify-wishlist-login-message;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@fav"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "on home screen",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "user hover over DRESSES",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "user select options \"Summer Dresses\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "user scroll the page",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "user hover over large image",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "user click on \"wishlist\"",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "user click on \"close\"",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.on_home_screen()"
});
formatter.result({
  "duration": 2933773253,
  "status": "passed"
});
formatter.match({
  "location": "DressesSteps.user_hover_over_DRESSES()"
});
formatter.result({
  "duration": 3178458812,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Summer Dresses",
      "offset": 21
    }
  ],
  "location": "Wishlist.user_select_options_something(String)"
});
formatter.result({
  "duration": 10474388411,
  "status": "passed"
});
formatter.match({
  "location": "TshirtShopping.user_scroll_the_page()"
});
formatter.result({
  "duration": 13062002,
  "status": "passed"
});
formatter.match({
  "location": "Wishlist.user_hover_over_large_image()"
});
formatter.result({
  "duration": 3151140866,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "wishlist",
      "offset": 15
    }
  ],
  "location": "Wishlist.user_click_on(String)"
});
formatter.result({
  "duration": 14681443,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "close",
      "offset": 15
    }
  ],
  "location": "Wishlist.user_click_on(String)"
});
formatter.result({
  "duration": 8845856,
  "status": "passed"
});
formatter.after({
  "duration": 3813450694,
  "status": "passed"
});
});