package locators;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;

public class AuthenticationPage 
{
	@FindBy(how=How.CSS, using="h1.page-heading")
	public WebElement pageTitle;
	
	@FindBy(how=How.CSS, using="li.step_current.second span")
	public WebElement subTitle;
	
	@FindBy(how=How.CSS, using="#email")
	public WebElement email;
	
	@FindBy(how=How.CSS, using="#passwd")
	public WebElement password;
	
	@FindBy(how=How.CSS, using="#SubmitLogin span")
	public WebElement signin;
}
