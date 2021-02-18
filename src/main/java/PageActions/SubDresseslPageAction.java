package PageActions;

import org.openqa.selenium.support.PageFactory;

import locators.SubDresseslPage;
import utils.SeleniumDriver;

public class SubDresseslPageAction 
{
	SubDresseslPage sub = null;
	public SubDresseslPageAction()
	{
		this.sub = new SubDresseslPage();
		PageFactory.initElements(SeleniumDriver.getDriver(), this.sub);
		
	}
	
	public SubDresseslPage getSub()
	{
		return this.sub;
	}
}
