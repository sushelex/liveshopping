package locators;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;

public class SubDresseslPage 
{

	@FindBy(how=How.CSS, using="a.product_img_link")
	public WebElement large_img;

	@FindBy(how=How.CSS, using="div.wishlist a")
	public WebElement wishlist;
	
	@FindBy(how=How.CSS, using="a.fancybox-item.fancybox-close")
	public WebElement close_icon;
}
