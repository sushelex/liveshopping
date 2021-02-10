package PageActions;

import org.openqa.selenium.support.PageFactory;

import locators.PaymentPage;
import utils.SeleniumDriver;

public class PaymentAction 
{
	PaymentPage payment = null;
	
	public PaymentAction()
	{
		this.payment = new PaymentPage();
		PageFactory.initElements(SeleniumDriver.getDriver(), this.payment);
	}
	
	public void do_payment(String paymentType)
	{
		payment.pay_by_wire.click();
		payment.confirm_order.click();
	}

}
