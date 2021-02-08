package steps;

import PageActions.BuySummaryAction;
import cucumber.api.java.en.And;

public class DeleteCart 
{
	BuySummaryAction summary = new BuySummaryAction();
    
	@And("^click on delete icon$")
    public void click_on_delete_icon() throws Throwable 
    {
		
    	summary.delete_icon_click();
    }

}
