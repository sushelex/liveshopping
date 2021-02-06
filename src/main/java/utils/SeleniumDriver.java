package utils;

import java.util.Date;

import org.apache.log4j.Logger;
import org.apache.log4j.PropertyConfigurator;
import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.ui.Wait;
import org.openqa.selenium.support.ui.WebDriverWait;
import org.testng.Assert;

public class SeleniumDriver extends SeleniumDriverHelper 
{
	private static WebDriver driver;
	private static Wait wait;
	private String url = "http://automationpractice.com/index.php";
	private static Actions action = null;
	private static JavascriptExecutor js=null;
	public static Logger log = Logger.getLogger(SeleniumDriver.class.getName());
	
	public static JavascriptExecutor getJs()
	{
		return js;
	}
	public static void scrollScreen(int pixels)
	{
		
		js.executeScript("window.scrollBy(0, "+pixels+")");
	}
	public static void verify(String s1, String s2)
	{
		log.info("extracted text from the web application : "+s1);
		log.info("new text is : "+s1.replace(" ", "").replace("-", "").toLowerCase());
		log.info("text expected : "+s2);
		s1.replace(" ", "").replace("-", "").contains(s2);
		try
		{
			log.info("s1: "+s1);
			log.info("s2: "+s2);
			Assert.assertEquals(s1.replace(" ", "").replace("-", "").toLowerCase().contains(s2), true);			
			log.info("target string conatins the expected string");
		}
		catch(AssertionError e)
		{
			log.error("the error is : "+e.getMessage());
		}

	}
	public static void sleepnow() 
	{
		try {
			Thread.sleep(3000);
		} catch (InterruptedException e) 
		{
			log.error(e.getMessage());
		}
	}
	public static Wait<WebDriverWait> exWait()
	{
		wait = new WebDriverWait(driver, 30);
		return wait;
	}
	
	public static boolean isDisplayed(WebElement element)
	{
		if(element.isDisplayed())
			return true;
		else
			return false;
	}
	public void elementVisible(WebElement element)
	{
//		exWait().until(ExpectedConditions.presenceOfElementLocated(locator))
	}
	public static Actions getActions()
	{
		action = new Actions(driver);
		return action;
	}
	
	public static void moveToElement(WebElement element)
	{
//		getActions().moveToElement(element).build().perform();
		getActions().moveToElement(getDriver().findElement(By.cssSelector("a[title='Add to cart']"))).build().perform();
		sleepnow();
	}
	
	private SeleniumDriver()
	{
		driver = new FirefoxDriver();
		getUrl(url);
		System.setProperty("current.date", new Date().toString().replace(":", "_").replace(" ", "_"));
		PropertyConfigurator.configure("/Users/sushilkumargupta/Documents/selenium_frameworks/liveshopping/src/main/java/utils/log4j.properties");
		js = (JavascriptExecutor)driver;
	}
	
	public static void getUrl(String url)
	{
		driver.get(url);
	}
	
	public static void setupDriver()
	{
		new SeleniumDriver();
	}

	public static WebDriver getDriver() {
		if(driver == null)
		{
			driver = new FirefoxDriver();
		}
		return driver;
	}

	public static void quite() 
	{
		try
		{
			driver.close();
			driver.quit();			
		}
		catch(Exception e)
		{
			log.info(e.getMessage());
		}

		
	}
}
