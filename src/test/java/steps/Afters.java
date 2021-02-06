package steps;

import org.testng.annotations.AfterMethod;
import cucumber.api.java.After;
import utils.SeleniumDriver;

public class Afters {
	
	@AfterMethod
	public void tearDown()
	{
		SeleniumDriver.quite();
	}

}
