package steps;

import java.util.List;

import org.junit.Assert;

import PageActions.HomepageActions;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;
import utils.SeleniumDriver;
import utils.SeleniumDriverHelper;

public class DressesSteps 
{
	HomepageActions home = new HomepageActions();
	
	@Then("^user hover over DRESSES$")
	public void user_hover_over_DRESSES() throws Throwable 
	{
		SeleniumDriverHelper.howerOnElement(home.getHome().dresses);
	}

	@And("^see options$")
	public void see_options(List<String> options) throws Throwable 
	{
		try
		{
//			Assert.assertSame(home.getHome().casual_dresses.getAttribute("Title").trim().toLowerCase(), options.get(0).trim().toLowerCase());	
			Assert.assertTrue(home.getHome().casual_dresses.getAttribute("Title").trim().toLowerCase().contains(options.get(0).trim().toLowerCase()));
			SeleniumDriver.log.info("expected: "+home.getHome().casual_dresses.getAttribute("Title")+" actual: "+options.get(0)+" is matched");
		}
		catch(AssertionError e)
		{
			SeleniumDriver.log.error("expected: "+home.getHome().casual_dresses.getAttribute("Title")+" actual: "+options.get(0));;
			SeleniumDriver.log.error(e.getMessage());
		}
		try
		{

			Assert.assertTrue(home.getHome().evening_dresses.getAttribute("Title").trim().toLowerCase().contains(options.get(1).trim().toLowerCase()));
			SeleniumDriver.log.info("expected: "+home.getHome().evening_dresses.getAttribute("Title")+" actual: "+options.get(1)+" is matched");;
		}
		catch(AssertionError e)
		{
			SeleniumDriver.log.error("expected: "+home.getHome().evening_dresses.getAttribute("Title")+" actual: "+options.get(1));;
			SeleniumDriver.log.error(e.getMessage());
		}
		
		try
		{
			Assert.assertTrue(home.getHome().summer_dresses.getAttribute("Title").trim().toLowerCase().contains(options.get(2).trim().toLowerCase()));	
			SeleniumDriver.log.info("expected: "+home.getHome().summer_dresses.getAttribute("Title")+" actual: "+options.get(2)+" is matched");;
		}
		catch(AssertionError e)
		{
			SeleniumDriver.log.error("expected: "+home.getHome().summer_dresses.getAttribute("Title")+" actual: "+options.get(2));;
			SeleniumDriver.log.error(e.getMessage());
		}
		

	}

}
