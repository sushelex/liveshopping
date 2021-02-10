package steps;

import PageActions.AuthenticationActions;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;

public class AuthenticationSteps 
{
	AuthenticationActions auth = new AuthenticationActions();
	
    @Then("^user navigated to \"([^\"]*)\" screen$")
    public void user_navigated_to_something_screen(String pagetitle) throws Throwable 
    {
    	auth.verifyTitle("authentication", pagetitle);
    }

    @And("^sub-title is \"([^\"]*)\"$")
    public void sub_title_is_something(String subtitle) throws Throwable 
    {
    	auth.verifyTitle("02. Sign in", subtitle);
    }
    
    @And("^click on signIn button$")
    public void click_on_signin_button() throws Throwable {
    	
     auth.signIn();
    }
    
    @And("^enter \"([^\"]*)\" and \"([^\"]*)\" value$")
    public void user_enter_something_and_something_value(String email, String password) throws Throwable {
    	auth.enterCredential(email, password);
    }

}
