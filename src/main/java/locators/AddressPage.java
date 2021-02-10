package locators;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;

public class AddressPage 
{
	@FindBy(how = How.CSS, using="h1.page-heading")
	public WebElement heading;
	
	@FindBy(how = How.CSS, using="li.step_current.third span")
	public WebElement subHeading;
	
	@FindBy(how = How.CSS, using="button.button.btn.btn-default.button-medium span")
	public WebElement checkout;
	
}
