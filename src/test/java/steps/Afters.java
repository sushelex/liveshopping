package steps;

import cucumber.api.java.After;
import utils.SeleniumDriver;



public class Afters {
	
	
	@After
	public void tearDown()
	{
		SeleniumDriver.quite();
	}

}
