package PageActions;

import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.PageFactory;

import locators.HomePage;
import utils.SeleniumDriver;

public class HomepageActions 
{
	HomePage home = null;
	public HomepageActions()
	{
		this.home= new HomePage(); 
		PageFactory.initElements(SeleniumDriver.getDriver(), this.home);
	}
	public void onHome()
	{
		home.logo.click();
		SeleniumDriver.log.info("logo is clicked");
	}
	public void click_checkout()
	{
		home.checkout_lastpage.click();
		SeleniumDriver.log.info("checkout is clicked");
		SeleniumDriver.sleepnow();
	}
	
	public void clickOn(WebElement element)
	{
		try
		{
			SeleniumDriver.sleepnow();
//			element.click();
			home.add_to_cart.click();
		}
		catch(Exception e)
		{
			SeleniumDriver.log.info("exception is: "+e.getMessage());
		}

	}
	
	public void howerOverTshirt()
	{
		SeleniumDriver.scrollScreen(600);
		SeleniumDriver.getActions().moveToElement(home.product_img).build().perform();
		SeleniumDriver.sleepnow();
	}
	public String getProductName()
	{
		return home.product_title.getText();
	}
	public void click_tshirt_menu()
	{
		home.tshirt_menu.click();
	}
	public void launchPage(String url)
	{

		SeleniumDriver.getUrl(url);
	}

	public boolean optionDisplayed()
	{
		boolean val;
		val = SeleniumDriver.isDisplayed(home.tops);
		System.out.println("element displayed: "+val);
		return val;
	}

	public void onHomePage()
	{
		home.logo.click();
		SeleniumDriver.log.info("logo is clicked");
	}

	public void howerOverWomen()
	{
		SeleniumDriver.sleepnow();
		SeleniumDriver.getActions().moveToElement(home.women).build().perform();
		SeleniumDriver.log.info("howered over women");
	}
	
	public void clickOn(String val)
	{
		try
		{
			if(val.contains("sign")|val.contains("login"))
			{
				SeleniumDriver.clickOn(home.signin_link);
			}
			if(val.equalsIgnoreCase("add to cart"))
			{
				home.add_to_cart.click();
				SeleniumDriver.log.info("button "+val+" is clicked");
			}
			if(val.equalsIgnoreCase("proceed to checkout"))
			{
				home.checkout.click();
				SeleniumDriver.log.info("button "+val+" is clicked");
			}
			if(val.equalsIgnoreCase("signin"))
			{
				home.signin_link.click();
				SeleniumDriver.log.info("button "+val+" is clicked");
			}
			else
			{
				throw new RuntimeException(val+" is no matching button");
			}
			
		}
		catch(Exception e)
		{
			SeleniumDriver.log.info(e.getMessage());
		}
	}
}
