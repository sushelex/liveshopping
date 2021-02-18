package steps;

import PageActions.HomepageActions;
import PageActions.SubDresseslPageAction;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;
import locators.HomePage;
import utils.SeleniumDriver;
import utils.SeleniumDriverHelper;

public class Wishlist 
{
	HomepageActions homeac = new HomepageActions();
	HomePage home = new HomePage();
	SubDresseslPageAction sub = new SubDresseslPageAction();
	
    @Then("^user hover over large image$")
    public void user_hover_over_large_image() throws Throwable 
    {
    	SeleniumDriverHelper.howerOnElement(sub.getSub().large_img);
    	
    }
    
	@Then("^user click on \"([^\"]*)\"$")
	public void user_click_on(String param) throws Throwable 
	{
		try 
		{
			if(param.toLowerCase().contains("casual"))
			{
				SeleniumDriverHelper.clickOn(home.casual_dresses);
			}
			else if(param.toLowerCase().contains("evening"))
			{
				SeleniumDriverHelper.clickOn(home.evening_dresses);
			}
			else if(param.toLowerCase().contains("summer"))
			{
				SeleniumDriverHelper.clickOn(home.summer_dresses);
			}
			else if(param.toLowerCase().contains("wishlist"))
			{
				SeleniumDriverHelper.clickOn(sub.getSub().wishlist);
			}
			else if(param.toLowerCase().contains("close"))
			{
				SeleniumDriverHelper.clickOn(sub.getSub().close_icon);
			}
		} 
		catch (Exception e) 
		{
			SeleniumDriver.log.error(e.getMessage());
		}
	}

    @And("^user select options \"([^\"]*)\"$")
    public void user_select_options_something(String dresses)
	{
		System.out.println(dresses);
		if(dresses.toLowerCase().contains("casual"))
		{
			try
			{
				SeleniumDriverHelper.howerOnElement(homeac.getHome().casual_dresses);
				SeleniumDriver.log.info("hovered over element: "+dresses);
				SeleniumDriverHelper.click(homeac.getHome().casual_dresses);				
			}
			catch(Exception e)
			{
				SeleniumDriver.log.error(e.getMessage());
			}

		}
		if(dresses.toLowerCase().contains("evening"))
		{
			try
			{
				SeleniumDriverHelper.howerOnElement(homeac.getHome().evening_dresses);
				SeleniumDriver.log.info("hovered over element: "+dresses);
				SeleniumDriverHelper.click(homeac.getHome().evening_dresses);		
				
			}
			catch(Exception e)
			{
				SeleniumDriver.log.error(e.getMessage());
			}
			
		}
		
		if(dresses.toLowerCase().contains("summer"))
		{
			try
			{
				SeleniumDriverHelper.howerOnElement(homeac.getHome().summer_dresses);
				SeleniumDriver.log.info("hovered over element: "+dresses);
				SeleniumDriverHelper.click(homeac.getHome().summer_dresses);		
				
			}
			catch(Exception e)
			{
				SeleniumDriver.log.error(e.getMessage());
			}
			
		}

		
	}


}
