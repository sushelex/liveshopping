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
  "duration": 4929834,
  "error_message": "java.lang.NullPointerException\n\tat utils.SeleniumDriver.\u003cinit\u003e(SeleniumDriver.java:110)\n\tat utils.SeleniumDriver.setupDriver(SeleniumDriver.java:136)\n\tat steps.Befores.setup(Befores.java:12)\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:566)\n\tat cucumber.runtime.Utils$1.call(Utils.java:37)\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:13)\n\tat cucumber.runtime.Utils.invoke(Utils.java:31)\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\n\tat cucumber.runtime.Runtime.runHookIfTagsMatch(Runtime.java:223)\n\tat cucumber.runtime.Runtime.runHooks(Runtime.java:211)\n\tat cucumber.runtime.Runtime.runBeforeHooks(Runtime.java:201)\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:40)\n\tat cucumber.runtime.model.CucumberFeature.run(CucumberFeature.java:165)\n\tat cucumber.api.testng.TestNGCucumberRunner.runCucumber(TestNGCucumberRunner.java:63)\n\tat cucumber.api.testng.AbstractTestNGCucumberTests.feature(AbstractTestNGCucumberTests.java:21)\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:566)\n\tat org.testng.internal.MethodInvocationHelper.invokeMethod(MethodInvocationHelper.java:132)\n\tat org.testng.internal.TestInvoker.invokeMethod(TestInvoker.java:599)\n\tat org.testng.internal.TestInvoker.invokeTestMethod(TestInvoker.java:174)\n\tat org.testng.internal.MethodRunner.runInSequence(MethodRunner.java:46)\n\tat org.testng.internal.TestInvoker$MethodInvocationAgent.invoke(TestInvoker.java:822)\n\tat org.testng.internal.TestInvoker.invokeTestMethods(TestInvoker.java:147)\n\tat org.testng.internal.TestMethodWorker.invokeTestMethods(TestMethodWorker.java:146)\n\tat org.testng.internal.TestMethodWorker.run(TestMethodWorker.java:128)\n\tat java.base/java.util.ArrayList.forEach(ArrayList.java:1540)\n\tat org.testng.TestRunner.privateRun(TestRunner.java:764)\n\tat org.testng.TestRunner.run(TestRunner.java:585)\n\tat org.testng.SuiteRunner.runTest(SuiteRunner.java:384)\n\tat org.testng.SuiteRunner.runSequentially(SuiteRunner.java:378)\n\tat org.testng.SuiteRunner.privateRun(SuiteRunner.java:337)\n\tat org.testng.SuiteRunner.run(SuiteRunner.java:286)\n\tat org.testng.SuiteRunnerWorker.runSuite(SuiteRunnerWorker.java:53)\n\tat org.testng.SuiteRunnerWorker.run(SuiteRunnerWorker.java:96)\n\tat org.testng.TestNG.runSuitesSequentially(TestNG.java:1218)\n\tat org.testng.TestNG.runSuitesLocally(TestNG.java:1140)\n\tat org.testng.TestNG.runSuites(TestNG.java:1069)\n\tat org.testng.TestNG.run(TestNG.java:1037)\n\tat org.testng.remote.AbstractRemoteTestNG.run(AbstractRemoteTestNG.java:115)\n\tat org.testng.remote.RemoteTestNG.initAndRun(RemoteTestNG.java:251)\n\tat org.testng.remote.RemoteTestNG.main(RemoteTestNG.java:77)\n",
  "status": "failed"
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
  "status": "skipped"
});
formatter.match({
  "location": "TshirtShopping.click_on_tshirt_menu()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "TshirtShopping.user_able_to_see_the_available_tshirts()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "TshirtShopping.user_hover_over_the_available_tshirt()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "TshirtShopping.user_click_on_Add_to_cart_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "DeleteCart.click_on_delete_icon()"
});
formatter.result({
  "status": "skipped"
});
formatter.embedding("image/png", "embedded0.png");
formatter.after({
  "duration": 6658815113,
  "status": "passed"
});
});