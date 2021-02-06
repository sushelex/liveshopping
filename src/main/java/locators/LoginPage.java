package locators;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;

public class LoginPage 
{

	@FindBy(how=How.CSS, using="#email")
	public WebElement email;
	
	@FindBy(how=How.CSS, using="#passwd")
	public WebElement password;
	
	@FindBy(how=How.CSS, using="#SubmitLogin span")
	public WebElement sign;
}
