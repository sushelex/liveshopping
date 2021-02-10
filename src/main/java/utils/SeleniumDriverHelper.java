package utils;

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
	
	public static boolean verifyTitle(String expected, WebElement actual)
	{
		SeleniumDriver.log.info("expected string: "+expected);
		SeleniumDriver.log.info("actual string: "+actual.getText());
		boolean result = expected.equalsIgnoreCase(actual.getText());
		return result;
	}
	
	 
	
}
