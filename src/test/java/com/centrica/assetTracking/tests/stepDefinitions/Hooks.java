package com.centrica.assetTracking.tests.stepDefinitions;

import com.centrica.assetTracking.cucumber.TestContext;
import com.centrica.assetTracking.enums.Context;
import com.cucumber.listener.Reporter;

import cucumber.api.Scenario;
import cucumber.api.java.After;
import cucumber.api.java.Before;

import static com.centrica.assetTracking.tests.utilities.BaseClass.setBaseURI;

public class Hooks {

    TestContext testContext;

    public Hooks(TestContext context) {

        testContext = context;
    }

    @Before
    public void beforeScenario(Scenario scenario) {
        if (scenario.getName().equals("Some scenario name")) {
            Reporter.assignAuthor("PulseQA - Ajith Kumar");
        }
        setBaseURI();

    }

    @After(order = 0)
    public void AfterSteps() {

        System.out.println("Ran the after");
    }

}