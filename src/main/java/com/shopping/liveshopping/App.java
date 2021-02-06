package com.shopping.liveshopping;

import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.interactions.Actions;

/**
 * Hello world!
 *
 */
public class App 
{
	static WebDriver driver = null;
	public static void main(String[] args) throws InterruptedException
	{
		driver = new FirefoxDriver();
		driver.get("http://automationpractice.com/index.php");
	       Actions action = new Actions(driver);
	       JavascriptExecutor js = (JavascriptExecutor)driver;
	       driver.findElement(By.cssSelector("a.login")).click();
	       driver.findElement(By.cssSelector("#email")).sendKeys("sushelex@gmail.com");
	       driver.findElement(By.cssSelector("#passwd")).sendKeys("sush9301664636#");
	       driver.findElement(By.cssSelector("#SubmitLogin span")).click();
	       Thread.sleep(4000);
	       
	       
	       
	}
	public static void main2(String[] args) throws InterruptedException
	{
		driver = new FirefoxDriver();
		driver.get("http://automationpractice.com/index.php?id_category=5&controller=category");
	       Actions action = new Actions(driver);
	       JavascriptExecutor js = (JavascriptExecutor)driver;
	       js.executeScript("window.scrollBy(0, 600)");
	       action.moveToElement(driver.findElement(By.cssSelector("a.product_img_link img.replace-2x.img-responsive"))).build().perform();
	       action.moveToElement(driver.findElement(By.cssSelector("a[title='Add to cart']"))).build().perform();
	       driver.findElement(By.cssSelector("a[title='Add to cart']")).click();
	       Thread.sleep(3000);
	       driver.quit();
		
	}
	
	
	
	
	
    public static void main1( String[] args ) throws InterruptedException
    {
       WebDriver driver = new FirefoxDriver();
       driver.get("http://automationpractice.com/index.php");
       driver.findElement(By.cssSelector("ul.sf-menu.clearfix.menu-content.sf-js-enabled.sf-arrows>li:nth-child(3) a")).click();
       Actions action = new Actions(driver);
       JavascriptExecutor js = (JavascriptExecutor)driver;
       js.executeScript("window.scrollBy(0, 600)");
       
       //action.moveToElement()
       Thread.sleep(3000);
       driver.close();
    }
}
