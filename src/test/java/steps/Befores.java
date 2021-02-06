package steps;

import cucumber.api.java.Before;
import utils.SeleniumDriver;

public class Befores {
	
	@Before
	public void setup()
	{
		SeleniumDriver.setupDriver();
	}

}
