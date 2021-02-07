package steps;

import cucumber.api.java.Before;
import utils.SeleniumDriver;

public class Befores {
	
	@Before
	public void setup()
	{
		System.out.println("inside before method");
		SeleniumDriver.setupDriver();
		
	}

}
