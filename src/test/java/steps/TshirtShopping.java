package steps;

import PageActions.HomepageActions;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;
import locators.HomePage;
import locators.LoginPage;
import utils.SeleniumDriver;

public class TshirtShopping 
{
	HomepageActions home = new HomepageActions();
	HomePage page = new HomePage();
	LoginPage login = new LoginPage();
	
	
    @And("^user click on \"([^\"]*)\" button at last page$")
    public void user_click_on_something_button_at_last_page(String strArg1) throws Throwable 
    {
    	home.click_checkout();
    }
    
	@And("^user scroll the page$")
	public void user_scroll_the_page() throws Throwable 
	{
		SeleniumDriver.scrollScreen(600);
	}
	
	@Then("^user click on \"([^\"]*)\" button$")
//	public void user_click_on_button(String arg1) throws Throwable
	public void user_click_on_button2(String arg1) throws Throwable
	{
		if(arg1.contains("sign"))
		{
			login.sign.click();
		}
		home.clickOn(arg1);
		SeleniumDriver.sleepnow();
	}
	
	@Then("^message \"([^\"]*)\" should display$")
	public void message_should_display(String arg1) throws Throwable 
	{
		SeleniumDriver.verify(arg1, "added");
		SeleniumDriver.verify(arg1, "successfully");
	}

	
	@And("^click on tshirt menu$")
	public void click_on_tshirt_menu() throws Throwable 
	{
		home.click_tshirt_menu();
	}

	@Then("^user able to see the available tshirts$")
	public void user_able_to_see_the_available_tshirts() throws Throwable 
	{
		SeleniumDriver.verify(home.getProductName(), "tshirt");
	}

	@And("^user hover over the available tshirt$")
	public void user_hover_over_the_available_tshirt() throws Throwable 
	{
		home.howerOverTshirt();
	}

	@And("^user click on Add to cart button$")
	public void user_click_on_Add_to_cart_button() throws Throwable 
	{
		home.clickOn("add to cart");
		SeleniumDriver.sleepnow(); 
	}

}

