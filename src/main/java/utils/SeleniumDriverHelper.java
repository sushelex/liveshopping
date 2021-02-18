package utils;

import org.apache.http.util.Asserts;
import org.openqa.selenium.WebElement;

public class SeleniumDriverHelper 
{
	public static void clickOn(WebElement element)
	{
		element.click();
	}
	
	public static void click(WebElement element)
	{
		element.click();
	}
	
	public static boolean isSame(WebElement element, String data)
	{
		if(element.getText().contains(data))
		{
			return true;
		}
		else
		{
			return false;
		}
	}
	public static void howerOnElement(WebElement element)
	{
		SeleniumDriver.getActions().moveToElement(element).build().perform();
		SeleniumDriver.sleepnow();
	}
	public static boolean verifyTitle(String expected, WebElement actual)
	{
		SeleniumDriver.log.info("expected string: "+expected);
		SeleniumDriver.log.info("actual string: "+actual.getText());
		boolean result = expected.equalsIgnoreCase(actual.getText());
		return result;
	}
	
	 
	
}
