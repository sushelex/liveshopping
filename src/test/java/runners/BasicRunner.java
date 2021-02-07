package runners;

import cucumber.api.CucumberOptions;
import cucumber.api.testng.AbstractTestNGCucumberTests;

@CucumberOptions
(
features="src/features",
glue="steps",
tags= {"@delete_cart"}
)
public class BasicRunner extends AbstractTestNGCucumberTests
{

}
