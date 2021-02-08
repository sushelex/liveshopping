package steps;

import PageActions.HomepageActions;
import PageActions.LoginAction;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import utils.SeleniumDriver;

public class LoginSteps 
{
	HomepageActions home = new HomepageActions();
	LoginAction login = new LoginAction();
	
 /*   @Given("^on home screen$")
    public void on_home_screen() throws Throwable 
    {
    	home.onHomePage();
    }
    
    @And("^user click on \"([^\"]*)\" $")
    public void user_click_on_something(String val) throws Throwable 
    {
    	login.clickOn(val);
    }

    @And("^user click on \"([^\"]*)\" button$")
    public void user_click_on_something_button(String val) throws Throwable 
    {
       home.clickOn(val);
    }

    @And("^user enter (.+) and (.+)$")
    public void user_enter_and(String username, String password) throws Throwable 
    {
    	login.enterText(username);
    	login.enterText(password);
       
    }
 */
    @And("^user click on sign button$")
    public void user_click_on_sign_button() throws Throwable 
    {
    	login.clickSignIn();
    }
    @Given("^on home screen$")
    public void on_home_screen() throws Throwable {
    	home.onHomePage();
    }
    
    @When("^user click on \"([^\"]*)\" link$")
    public void user_click_on_link(String val) throws Throwable {

//    	login.clickOn(val);
    	home.clickOn(val);
    	SeleniumDriver.log.info("user click on worked");
    }
    
    
    @And("^user enter (.+) and (.+)$")
    public void user_enter_and(String email, String password) throws Throwable 
    {
    	login.enterText(email);
    	login.enterText(password);
    }

	/*
	 * @And("^user click on \"([^\"]*)\" button$") public void
	 * user_click_on_something_button1(String val) throws Throwable {
	 * home.clickOn(val); }
	 */
}
