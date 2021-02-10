package PageActions;

import org.openqa.selenium.WebElement;
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
	
	public boolean verifyTitle(String expected, WebElement actual)
	{
		SeleniumDriver.log.info("expected string: "+expected);
		SeleniumDriver.log.info("actual string: "+actual.getText());
		boolean result = expected.equalsIgnoreCase(actual.getText());
		return result;
	}
	
	public void signIn()
	{
		SeleniumDriver.log.info("page title before clicking on signin: "+auth.pageTitle.getText());
		auth.signin.click();
		SeleniumDriver.sleepnow();
		SeleniumDriver.log.info("page title after clicking on signin: "+auth.pageTitle.getText());
	}
	
	public void enterCredential(String uname, String pass)
	{
		auth.email.sendKeys(uname);
		auth.password.sendKeys(pass);
	}
	
}
