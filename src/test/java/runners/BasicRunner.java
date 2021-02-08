package runners;

import java.io.File;
import java.text.SimpleDateFormat;
import java.util.Date;

import org.testng.annotations.BeforeClass;

import com.cucumber.listener.ExtentCucumberFormatter;

import cucumber.api.CucumberOptions;
import cucumber.api.testng.AbstractTestNGCucumberTests;

@CucumberOptions
(
features="src/features",
glue="steps",
tags= {"@delete_cart", "@execute_it"},
plugin= {"json:target/json_report/cucumber.json", "pretty", "html:target/html_report/cucumber.html",
		"com.cucumber.listener.ExtentCucumberFormatter"
		}
)
public class BasicRunner extends AbstractTestNGCucumberTests
{
@BeforeClass
public void setup()
{
	SimpleDateFormat sdf = new SimpleDateFormat("ddMMyyyy");
	Date date = new Date();
	String d = sdf.format(date);
	String fileName = System.getProperty("user.dir")+"/target/extent_report/"+d+".html";
	File f = new File(fileName);
	ExtentCucumberFormatter.initiateExtentCucumberFormatter(f, false);
	ExtentCucumberFormatter.loadConfig(new File(System.getProperty("user.dir")+"/resources/extent-config.xml"));
	ExtentCucumberFormatter.addSystemInfo("name", "sushil kumar gupta");
	ExtentCucumberFormatter.addSystemInfo("OS", "MAC OS");
	ExtentCucumberFormatter.addSystemInfo("company", "altimetrik");
}
}
