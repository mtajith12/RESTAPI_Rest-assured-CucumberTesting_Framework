package com.centrica.assetTracking.tests.runner;
import com.centrica.assetTracking.cucumber.TestContext;
import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import org.junit.AfterClass;
import org.junit.BeforeClass;
import org.junit.runner.RunWith;
import static com.centrica.assetTracking.tests.utilities.BaseClass.setBaseURI;


@RunWith(Cucumber.class)
@CucumberOptions(
        features = "src/test/resources/Features",
        glue= {"com/centrica/assetTracking/tests/stepDefinitions"},
         plugin = { "pretty",
                    "com.cucumber.listener.ExtentCucumberFormatter:target/cucumber-html-extent/report.html",
                    "html:target/cucumber-html-default",
                    "json:target/cucumber-report.json" }
        // "com.cucumber.listener.ExtentCucumberFormatter:target/cucumber-html-extent/report.html",
//        dryRun = true,
//        strict = true,
//        tags = {},
//        monochrome = true

)

public class TestRunner {
    @BeforeClass
    public static void setup() {

        System.out.println("Ran the before");
     //   setBaseURI();
    }

    @AfterClass
    public static void teardown() {


    }
}