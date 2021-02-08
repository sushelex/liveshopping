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
  "duration": 17347254292,
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
  "name": "click on delete icon",
  "keyword": "And "
});
formatter.match({
  "location": "WomenOptions.when_user_is_on_home_screen()"
});
formatter.result({
  "duration": 3648621700,
  "status": "passed"
});
formatter.match({
  "location": "TshirtShopping.click_on_tshirt_menu()"
});
formatter.result({
  "duration": 3853181442,
  "status": "passed"
});
formatter.match({
  "location": "TshirtShopping.user_able_to_see_the_available_tshirts()"
});
formatter.result({
  "duration": 50642205,
  "status": "passed"
});
formatter.match({
  "location": "TshirtShopping.user_hover_over_the_available_tshirt()"
});
formatter.result({
  "duration": 3165959221,
  "status": "passed"
});
formatter.match({
  "location": "TshirtShopping.user_click_on_Add_to_cart_button()"
});
formatter.result({
  "duration": 3256792975,
  "status": "passed"
});
formatter.match({
  "location": "DeleteCart.click_on_delete_icon()"
});
formatter.result({
  "duration": 41554680,
  "error_message": "org.openqa.selenium.NoSuchElementException: Unable to locate element: a.cart_quantity_delete\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.8.1\u0027, revision: \u00276e95a6684b\u0027, time: \u00272017-12-01T18:33:54.468Z\u0027\nSystem info: host: \u0027sushils-MacBook-Air.local\u0027, ip: \u00272405:201:c009:b032:f011:1759:62b2:8c36%en0\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.15.7\u0027, java.version: \u002711.0.6\u0027\nDriver info: org.openqa.selenium.firefox.FirefoxDriver\nCapabilities {acceptInsecureCerts: true, browserName: firefox, browserVersion: 85.0, javascriptEnabled: true, moz:accessibilityChecks: false, moz:buildID: 20210118153634, moz:geckodriverVersion: 0.28.0, moz:headless: false, moz:processID: 16716, moz:profile: /var/folders/9f/v16xhxxs6gg..., moz:shutdownTimeout: 60000, moz:useNonSpecCompliantPointerOrigin: false, moz:webdriverClick: true, pageLoadStrategy: normal, platform: MAC, platformName: MAC, platformVersion: 19.6.0, rotatable: false, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify}\nSession ID: afef42b2-4871-d74b-83e4-5e806774bd21\n*** Element info: {Using\u003dcss selector, value\u003da.cart_quantity_delete}\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:490)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:164)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:601)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:371)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByCssSelector(RemoteWebDriver.java:465)\n\tat org.openqa.selenium.By$ByCssSelector.findElement(By.java:430)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:363)\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\n\tat com.sun.proxy.$Proxy26.click(Unknown Source)\n\tat PageActions.BuySummaryAction.delete_icon_click(BuySummaryAction.java:20)\n\tat steps.DeleteCart.click_on_delete_icon(DeleteCart.java:14)\n\tat ✽.And click on delete icon(delete_cart.feature:9)\n",
  "status": "failed"
});
formatter.embedding("image/png", "embedded0.png");
formatter.after({
  "duration": 1072881320,
  "status": "passed"
});
});