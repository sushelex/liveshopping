package PageActions;

import org.openqa.selenium.support.PageFactory;

import locators.LoginPage;
import utils.SeleniumDriver;

public class LoginAction 
{
	LoginPage login = null;
	
	public LoginAction()
	{
		this.login = new LoginPage();
		PageFactory.initElements(SeleniumDriver.getDriver(), this.login);
	}
	
	public void clickOn1(String val)
	{
		if(val.contains("login")|val.contains("signin"))
		{
			login.sign.click();
			SeleniumDriver.log.info("user clicked on signin button");
		}
		
	}
	
	public void enterText(String text)
	{
		login.email.sendKeys(text);
		SeleniumDriver.log.info("text "+text+" is entered");
	}
	
	public void clickSignIn()
	{
		login.sign.click();
	}

}
