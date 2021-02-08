package PageActions;

import org.openqa.selenium.support.PageFactory;

import locators.BuySummay;
import utils.SeleniumDriver;

public class BuySummaryAction 
{
	BuySummay summary = null;
	
	public BuySummaryAction()
	{
		this.summary = new BuySummay();
		PageFactory.initElements(SeleniumDriver.getDriver(), this.summary);
	}
	
	public void delete_icon_click()
	{
		summary.delete_item.click();
		SeleniumDriver.log.info("item delete icon is deleted");
		SeleniumDriver.sleepnow();
	}
	
	
	
}
