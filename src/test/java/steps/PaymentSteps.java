package steps;

import PageActions.PaymentAction;
import cucumber.api.java.en.Then;

public class PaymentSteps 
{
	PaymentAction payment = new PaymentAction();
	
    @Then("^User select the \"([^\"]*)\" and click on \"([^\"]*)\"$")
    public void user_select_the_something_and_click_on_something(String paymentoption, String confirm) throws Throwable 
    {
    	payment.do_payment(paymentoption);
    }

}
