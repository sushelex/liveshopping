package locators;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;

public class HomePage 
{
	@FindBy(how=How.CSS, using="a.login")
	public WebElement signin_link;
	
	@FindBy(how = How.CSS, using="a[title='Women']")
	public WebElement women;
	
	@FindBy(how=How.CSS, using="img.logo.img-responsive")
	public WebElement logo;
	
	@FindBy(how=How.CSS, using = "li a[title='Tops']")
	public WebElement tops;
	
	@FindBy(how=How.XPATH, using="(//*[text()='T-shirts'])[1]")
	public WebElement tshirts;
	
	@FindBy(how=How.CSS, using="ul.sf-menu.clearfix.menu-content.sf-js-enabled.sf-arrows>li:nth-child(3) a")
	public WebElement tshirt_menu;
	
	@FindBy(how=How.CSS, using="div.right-block h5 a.product-name")
	public WebElement product_title;
	
	@FindBy(how=How.CSS, using="a.product_img_link img.replace-2x.img-responsive")
	public WebElement product_img;
	
	@FindBy(how=How.CSS, using="a[title^='Add']")
	public WebElement add_to_cart;
	
	@FindBy(how=How.CSS, using="a[title*='checkout']")
	public WebElement checkout;
	
	@FindBy(how=How.CSS, using="a[title*='checkout']:first-child")
	public WebElement proceed_to_checkout;
	
	@FindBy(how=How.CSS, using="a[title*='checkout']:first-child")
	public WebElement checkout_lastpage;
	
}
