$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("dressesOptions.feature");
formatter.feature({
  "line": 2,
  "name": "Dresses options",
  "description": "",
  "id": "dresses-options",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@dress"
    }
  ]
});
formatter.before({
  "duration": 11362398507,
  "status": "passed"
});
formatter.scenario({
  "line": 5,
  "name": "Verify the options displayed when hover over the DRESSES option",
  "description": "",
  "id": "dresses-options;verify-the-options-displayed-when-hover-over-the-dresses-option",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 6,
  "name": "when user is on home screen",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "user hover over DRESSES",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "see options",
  "rows": [
    {
      "cells": [
        "Casual Dresses"
      ],
      "line": 9
    },
    {
      "cells": [
        "Evening Dresses"
      ],
      "line": 10
    },
    {
      "cells": [
        "Summer Dresses"
      ],
      "line": 11
    }
  ],
  "keyword": "And "
});
formatter.match({
  "location": "WomenOptions.when_user_is_on_home_screen()"
});
formatter.result({
  "duration": 4848359035,
  "status": "passed"
});
formatter.match({
  "location": "DressesSteps.user_hover_over_DRESSES()"
});
formatter.result({
  "duration": 180069934,
  "status": "passed"
});
formatter.match({
  "location": "DressesSteps.see_options(String\u003e)"
});
