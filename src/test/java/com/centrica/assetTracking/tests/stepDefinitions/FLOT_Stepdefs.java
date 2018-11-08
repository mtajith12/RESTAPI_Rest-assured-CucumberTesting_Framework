package com.centrica.assetTracking.tests.stepDefinitions;

import  com.centrica.assetTracking.config.Endpoint;
import cucumber.api.DataTable;
import cucumber.api.PendingException;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import io.restassured.response.Response;
import io.restassured.specification.RequestSpecification;

import java.util.List;

import static io.restassured.RestAssured.given;
import static org.apache.http.HttpStatus.SC_OK;
import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertTrue;

public class FLOT_Stepdefs{
    private Response response;
    private RequestSpecification request;

//    static {
//        System.setProperty("http.proxyHost", "http://proxy.fjgslbdmz.uk.centricaplc.com");
//        System.setProperty("http.proxyPort", "8080");
//    }

    @Given("^Build the rest request with content-type and basic auth details$")
    public void buildTheRestRequestWithContentTypeAndBasicAuthDetails() throws Throwable {
        request = given ().contentType("Application/JSON").auth().basic("mt000a","Api@2611").baseUri("https://dt.pulsenow.co.uk");
        request.log().all();
    }

    @When("^Initiate Rest service to get customer details with Customer Id as \"([^\"]*)\"$")
    public void Initiate_Rest_service_to_get_customer_details_with_Customer_Id_as(String CustomerId ) throws Throwable {
        response = request.
                when().get(Endpoint.GET_CUSTOMER_BY_CUSTOMERID).
                thenReturn();
        response.prettyPrint();
    }

    @Then("^REST Response HTTP status code should be \"([^\"]*)\"$")
    public void restResponseHTTPStatusCodeShouldBe(String arg0) throws Throwable {
        assertEquals("HTTP Status Check Failed!", SC_OK, response.getStatusCode());
    }

    @And("^response should includes the following customer details$")
    public void responseShouldIncludesTheFollowingCustomerDetails(DataTable dt) throws Throwable {
        List <List< String >> data = dt.raw();
        assertTrue("street Check Failed!",  response.body().asString().contains(data.get(1).get(0)));
        assertTrue("street Check Failed!",  response.body().asString().contains(data.get(1).get(1)));
        assertTrue("street Check Failed!",  response.body().asString().contains(data.get(1).get(2)));
        assertTrue("street Check Failed!",  response.body().asString().contains(data.get(1).get(3)));

    }

    @When("^Initiate Rest service to get customer details with phone No as \"([^\"]*)\"$")
    public void initiateRestServiceToGetCustomerDetailsWithPhoneNoAs(String arg0) throws Throwable {
        response = request.
                when().get(Endpoint.GET_CUSTOMER_BY_PHONENO).
                thenReturn();
        response.prettyPrint();
    }

    @When("^Initiate Rest service to get customer details with Account No as \"([^\"]*)\"$")
    public void initiateRestServiceToGetCustomerDetailsWithAccountNoAs(String arg0) throws Throwable {
        response = request.
                when().get(Endpoint.GET_CUSTOMER_BY_ACCOUNTNO).
                thenReturn();
        response.prettyPrint();
    }


}
