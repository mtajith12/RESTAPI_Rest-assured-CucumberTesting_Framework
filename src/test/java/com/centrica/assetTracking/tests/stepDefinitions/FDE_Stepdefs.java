package com.centrica.assetTracking.tests.stepDefinitions;

import com.centrica.assetTracking.config.Endpoint;
import com.centrica.assetTracking.cucumber.TestContext;
import com.centrica.assetTracking.enums.Context;
import com.centrica.assetTracking.tests.utilities.BaseClass;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import io.restassured.path.json.JsonPath;
import io.restassured.response.Response;
import io.restassured.specification.RequestSpecification;

import java.util.ArrayList;

import static com.centrica.assetTracking.enums.Context.ADDRESS_ID;
import static io.restassured.RestAssured.given;
import static org.apache.http.HttpStatus.SC_NOT_FOUND;
import static org.apache.http.HttpStatus.SC_OK;
import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertTrue;

public class FDE_Stepdefs extends BaseClass {
    TestContext testContext;

    public FDE_Stepdefs(TestContext context) {
        testContext = context;
    }

    private static Response response;
    private static String OAUTH_TOKEN = "";
    public static String addressId = "";
    private RequestSpecification requestSpec;
    public static ArrayList<String> container = new ArrayList<String>();

    @Given("^Engineer login to CI app$")
    public void engineerLoginToCIApp() throws Throwable {
       // setBaseURI();
        OAUTH_TOKEN = getOauthToken();
        requestSpec =   given()
                .contentType("Application/JSON")
                .auth()
                .oauth2(OAUTH_TOKEN).log().all();
    }

    @When("^he enters post code of customer \"([^\"]*)\"$")
    public void heEntersPostCodeOfCustomer(String postCode) throws Throwable {
        response = requestSpec.pathParam("postcode", postCode).
                when()
                .get(Endpoint.GET_POSTCODE_LOOKUP).thenReturn();
        response.prettyPrint();
         String bodystring = response.getBody().asString();
        JsonPath jsonPath = JsonPath.from(bodystring);
       // Extracting the Address_id from json response and replacing with [] with 'No value Eg: ""
        addressId = response.getBody().jsonPath().getString("addresses.id").replace("[","").replace("]","");
     //   String addressIdWithoutSpecialChars = addressId.replaceAll("\\[^\\w\\s]","");
        container.add(addressId);
      //  System.out.println("ADDRESS_ID -->: " +container.get(0));
      //  testContext.scenarioContext.setContext(Context.ADDRESS_ID, addressId);
      //  System.out.println("ADDRESS_ID from testContext -->: " +testContext.scenarioContext. getContext(Context.ADDRESS_ID));
    }

    @Then("^response should have status '(\\d+)'$")
    public void responseShouldHaveStatus(int arg0) throws Throwable {
        assertEquals("HTTP Status Check Failed!", SC_OK, response.getStatusCode());
    }

    @And("^CI app should display all the address$")
    public void ciAppShouldDisplayAllTheAddress() throws Throwable {
        assertTrue("street Check Failed!",  response.body().asString().contains("TESTDOWN"));
        assertTrue("Town Check Failed!",  response.body().asString().contains("KINGSTON"));
        assertTrue("Id Check Failed!",  response.body().asString().contains("dummy08b3d548be3cf5b3f2cee319c1f4277934289c58fb709ee466bc9a8c5fcaedab"));
        assertTrue("House No. Check Failed!",  response.body().asString().contains("1 TESTDOWN"));

    }

    @When("^he enters invalid post code of customer \"([^\"]*)\"$")
    public void heEntersInvalidPostCodeOfCustomer(String postcode) throws Throwable {
        response = requestSpec.when().pathParam("id",postcode)
                .get(Endpoint.GET_ADDRESS_BY_POSTCODE).thenReturn();
        response.prettyPrint();
    }

    @Then("^response should have HTTP status (\\d+)$")
    public void responseShouldHaveHTTPStatus(int arg0) throws Throwable {
        assertEquals("HTTP Status Check Failed!", SC_NOT_FOUND, response.getStatusCode());
    }

    @Then("^response should have following error message Invalid UK postcode, postcode must be in the given format TW(\\d+) (\\d+)NJ, including a space$")
    public void response_should_have_following_error_message_Invalid_UK_postcode_postcode_must_be_in_the_given_format_TW_NJ_including_a_space(int arg1, String message) throws Throwable {
        assertTrue("Error message Check Failed!",  response.body().asString().contains(message));
    }

    @Given("^Engineer have address id for the mention postcode$")
    public void engineerHaveAddressIdForTheMentionPostcode() throws Throwable {
        requestSpec = given ().contentType("Application/JSON").auth().oauth2(OAUTH_TOKEN);
        requestSpec.log().all();
    }

    @When("^he enters address id to findAddressById endpoint \"([^\"]*)\"$")
    public void heEntersAddressIdToFindAddressByIdEndpoint(String ID) throws Throwable {
        //Reading the addressId from Scenario context
      //  addressId = (String) testContext.scenarioContext.getContext(Context.ADDRESS_ID);
        String addressId = container.get(0);
        //  System.out.println("ADDRESS_ID from testContext -->: " +(String)testContext.scenarioContext. getContext(Context.ADDRESS_ID));
        response = requestSpec.when().pathParam("id",addressId)
                .get(Endpoint.GET_ADDRESS_BY_POSTCODE).thenReturn();

        response.prettyPrint();
    }


    @And("^response should have following details '<street>','<town>','<id>','<firstLine>'$")
    public void responseShouldHaveFollowingDetailsStreetTownIdFirstLine() throws Throwable {
        assertTrue("street Check Failed!",  response.body().asString().contains("TESTDOWN"));
        assertTrue("Town Check Failed!",  response.body().asString().contains("KINGSTON"));
        assertTrue("Postcode Check Failed!",  response.body().asString().contains("DM00 1PL"));
        assertTrue("House No. Check Failed!",  response.body().asString().contains("1"));
        assertTrue("personId Check Failed!",  response.body().asString().contains("dummy0000eec3cda7d70fe857009eea115693e0002ace59719be1974ea19e8c926f72"));
    }
}
