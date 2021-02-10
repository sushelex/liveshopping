package locators;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;

public class PaymentPage 
{
	@FindBy(how=How.CSS, using="#step_end span")
	public WebElement sub_title;
	
	
	@FindBy(how=How.CSS, using="a.cheque")
	public WebElement pay_by_check;
	
	@FindBy(how=How.CSS, using="a.bankwire")
	public WebElement pay_by_wire;
	
	@FindBy(how=How.CSS, using="button.button.btn.btn-default.button-medium span")
	public WebElement confirm_order;
	
}
