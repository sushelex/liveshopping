package steps;

import java.util.List;

import cucumber.api.java.en.Then;

public class DressesSteps 
{
	@Then("^user hover over DRESSES$")
	public void user_hover_over_DRESSES() throws Throwable 
	{
		
	}

	@Then("^see options$")
	public void see_options(List<String> options) throws Throwable 
	{
		System.out.println(options.size());
		System.out.println(options.get(0));
		System.out.println(options.get(1));
		System.out.println(options.get(2));
	}

}
