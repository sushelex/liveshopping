package PageActions;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.PageFactory;

import locators.ShippingPage;
import utils.SeleniumDriver;

public class ShippingAction 
{
	ShippingPage shipping = null;
	
	
	public ShippingAction()
	{
		this.shipping = new ShippingPage();
		PageFactory.initElements(SeleniumDriver.getDriver(), this.shipping);
	}
	
	public void checkboxCheck(String check)
	{
		if(check.equals("terms"))
		{
			shipping.terms_checkbox.click();
			SeleniumDriver.log.info("checkbox is clicked");
		}
	}
	
	public WebElement getCheckout()
	{
		return shipping.checkout;
	}
}
