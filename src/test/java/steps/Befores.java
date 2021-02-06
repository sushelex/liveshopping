package steps;

import org.testng.annotations.BeforeMethod;
import cucumber.api.java.Before;
import utils.SeleniumDriver;



public class Befores {
	
	@BeforeMethod
	public void setup()
	{
		SeleniumDriver.setupDriver();
	}

}
