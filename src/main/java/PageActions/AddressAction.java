package PageActions;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.PageFactory;

import locators.AddressPage;
import utils.SeleniumDriver;

public class AddressAction 
{
	public AddressPage address = null;
	
	public AddressAction()
	{
		this.address = new AddressPage();
		PageFactory.initElements(SeleniumDriver.getDriver(), this.address);
	}
	
	public AddressPage getAddress()
	{
		return address; 
	}
	

}
