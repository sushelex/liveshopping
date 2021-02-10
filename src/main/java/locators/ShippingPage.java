package locators;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;

public class ShippingPage 
{

	@FindBy(how=How.CSS, using="h1.page-heading")
	public WebElement title;
	
	@FindBy(how=How.CSS, using="li.step_current.four span")
	public WebElement sub_title;
	
	@FindBy(how=How.CSS, using="#cgv")
	public WebElement terms_checkbox;
	
	@FindBy(how=How.CSS, using="p.cart_navigation.clearfix button")
	public WebElement checkout;
}
