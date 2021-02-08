package locators;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;

public class BuySummay 
{

	@FindBy(how=How.CSS, using="a.cart_quantity_delete")
	public WebElement delete_item;
}
