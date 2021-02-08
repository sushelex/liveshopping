package steps;

import org.testng.Assert;

import PageActions.HomepageActions;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import locators.HomePage;
import utils.SeleniumDriver;

public class WomenOptions 
{
	HomepageActions home = new HomepageActions();

	@Given("^Click on \"([^\"]*)\" option$")
	public void click_on_option(String text) throws Throwable 
	{
		
	}	

@Given("^when user is on home screen$")
public void when_user_is_on_home_screen() throws Throwable 
{
	home.onHomePage();
	Assert.assertEquals(true, false);
}

@Given("^hower over \"([^\"]*)\" option$")
public void hower_over_option(String arg1) throws Throwable 
{
	System.out.println("hovering over "+arg1+" option");
	home.howerOverWomen();
	Thread.sleep(4000);

}

@Then("^\"([^\"]*)\" and \"([^\"]*)\" options should display$")
public void and_options_should_display(String arg1, String arg2) throws Throwable 
{
	boolean val;
	val = home.optionDisplayed();
	Assert.assertEquals(true, val);
	
}

}
