package steps;

import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.WebDriver;

import cucumber.api.Scenario;
import cucumber.api.java.After;
import utils.SeleniumDriver;



public class Afters {
	
	@After
	public void tearDown(Scenario scenario)
	{

		if(scenario.isFailed())
		{
			byte[] screenshot = ((TakesScreenshot)SeleniumDriver.getDriver()).getScreenshotAs(OutputType.BYTES);

			scenario.embed(screenshot, "image/png");
		}
		if(SeleniumDriver.getDriver() != null)
		{
			SeleniumDriver.sleepnow();
			SeleniumDriver.getDriver().quit();			
		}

	}

}
