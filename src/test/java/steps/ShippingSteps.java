package steps;

import org.testng.Assert;

import PageActions.ShippingAction;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;
import locators.ShippingPage;
import utils.SeleniumDriver;
import utils.SeleniumDriverHelper;

public class ShippingSteps 
{
	ShippingPage shipping = new ShippingPage();
	ShippingAction action = new ShippingAction();
	
    @And("^click on checkout button$")
    public void click_on_checkout_button() throws Throwable 
    {
    	SeleniumDriverHelper.click(action.getCheckout());
    	SeleniumDriver.log.info("checkout button is clicked");
    }

	
    @And("^check the \"([^\"]*)\" checkbox$")
    public void check_the_something_checkbox(String checkbox) throws Throwable 
    {
    	action.checkboxCheck(checkbox);
    }
	
	
    @Then("^user navigated to \"([^\"]*)\" page1$")
    public void user_navigated_to_page(String title) throws Throwable 
    {
    	try
    	{
            boolean result = SeleniumDriverHelper.verifyTitle(title, shipping.title);    		
            Assert.assertEquals(result, true);
    	}
    	catch(Exception e)
    	{
    		SeleniumDriver.log.info(e.getMessage());
    	}        
    }
    
    @And("^subtitle is \"([^\"]*)\"$")
    public void sub_title_is(String sub_title) throws Throwable 
    {
    	try
    	{
            boolean result = SeleniumDriverHelper.verifyTitle(sub_title, shipping.title);    		
            Assert.assertEquals(result, true);
    	}
    	catch(Exception e)
    	{
    		SeleniumDriver.log.info(e.getMessage());
    	}        

    }
}
