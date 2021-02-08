package PageActions;

import org.openqa.selenium.support.PageFactory;

import locators.AuthenticationPage;
import utils.SeleniumDriver;

public class AuthenticationActions 
{
	AuthenticationPage auth = null;
	
	public AuthenticationActions()
	{
		this.auth = new AuthenticationPage();
		PageFactory.initElements(SeleniumDriver.getDriver(), this.auth);
	}
	
	public boolean verifyTitle(String expected, String actual)
	{
		SeleniumDriver.log.info("expected string: "+expected);
		SeleniumDriver.log.info("actual string: "+actual);
		boolean result = expected.replace(" ", "").replace("_", "").toLowerCase().equalsIgnoreCase(actual);
		return result;
	}
	
	public void signIn()
	{
		auth.signin.click();
	}
	
	public void enterCredential(String uname, String pass)
	{
		auth.email.sendKeys(uname);
		auth.password.sendKeys(pass);
	}
	
}
