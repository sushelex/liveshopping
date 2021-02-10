package steps;

import org.testng.Assert;

import PageActions.AddressAction;
import PageActions.AuthenticationActions;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;
import utils.SeleniumDriver;
import utils.SeleniumDriverHelper;

public class AddressSteps 
{
	AddressAction address = new AddressAction();
	AuthenticationActions auth = new AuthenticationActions();
	
	
    
    @And("^user click on \"([^\"]*)\" on address screen$")
    public void user_click_on_on_address_screen(String arg1) throws Throwable {
    	//SeleniumDriverHelper.click(new AddressAction().address.checkout);
    	SeleniumDriverHelper.click(address.address.checkout);
    	SeleniumDriver.sleepnow();
    }
    
    @Then("^user navigated to \"([^\"]*)\" page$")
    public void user_navigated_to_page(String title) throws Throwable 
    {
    	try
    	{
            boolean result = auth.verifyTitle(title, address.address.heading);    		
//            Assert.assertEquals(result, true);
    	}
    	catch(Exception e)
    	{
    		SeleniumDriver.log.info(e.getMessage());
    	}        
    }

    @And("^sub title \"([^\"]*)\"$")
    public void sub_title_is(String sub_title) throws Throwable 
    {
    	try
    	{
            boolean result = auth.verifyTitle(sub_title, address.address.subHeading);    		
            Assert.assertEquals(result, true);
    	}
    	catch(Exception e)
    	{
    		SeleniumDriver.log.info(e.getMessage());
    	}


    }
        
}
