$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Flot_Endpoints.feature");
formatter.feature({
  "line": 1,
  "name": "Testing FLOT/IVR REST API\u0027s",
  "description": "",
  "id": "testing-flot/ivr-rest-api\u0027s",
  "keyword": "Feature"
});
formatter.before({
  "duration": 433048851,
  "status": "passed"
});
formatter.scenario({
  "line": 3,
  "name": "GET the customer information by Customer Id",
  "description": "",
  "id": "testing-flot/ivr-rest-api\u0027s;get-the-customer-information-by-customer-id",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "Build the rest request with content-type and basic auth details",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "Initiate Rest service to get customer details with Customer Id as \"3000083750\"",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "REST Response HTTP status code should be \"200\"",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "response should includes the following customer details",
  "rows": [
    {
      "cells": [
        "firstName",
        "contactPartnerNumber",
        "buAgreementId",
        "businessPartnerNumber",
        "nextBillingWindowDate"
      ],
      "line": 8
    },
    {
      "cells": [
        "wewe",
        "3000083750",
        "850040644543",
        "1027558179",
        "2018-03-29"
      ],
      "line": 9
    }
  ],
  "keyword": "And "
});
formatter.match({
  "location": "FLOT_Stepdefs.buildTheRestRequestWithContentTypeAndBasicAuthDetails()"
});
formatter.result({
  "duration": 373626895,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3000083750",
      "offset": 67
    }
  ],
  "location": "FLOT_Stepdefs.Initiate_Rest_service_to_get_customer_details_with_Customer_Id_as(String)"
});
formatter.result({
  "duration": 2329794760,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 42
    }
  ],
  "location": "FLOT_Stepdefs.restResponseHTTPStatusCodeShouldBe(String)"
});
formatter.result({
  "duration": 4723208,
  "status": "passed"
});
formatter.match({
  "location": "FLOT_Stepdefs.responseShouldIncludesTheFollowingCustomerDetails(DataTable)"
});
formatter.result({
  "duration": 1812876,
  "status": "passed"
});
formatter.after({
  "duration": 308671,
  "status": "passed"
});
formatter.before({
  "duration": 1550201,
  "status": "passed"
});
formatter.scenario({
  "line": 11,
  "name": "GET the customer information by phoneNo",
  "description": "",
  "id": "testing-flot/ivr-rest-api\u0027s;get-the-customer-information-by-phoneno",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 12,
  "name": "Build the rest request with content-type and basic auth details",
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "Initiate Rest service to get customer details with phone No as \"00447778889994\"",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "REST Response HTTP status code should be \"200\"",
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "response should includes the following customer details",
  "rows": [
    {
      "cells": [
        "firstName",
        "contactPartnerNumber",
        "buAgreementId",
        "businessPartnerNumber",
        "nextBillingWindowDate"
      ],
      "line": 16
    },
    {
      "cells": [
        "wewe",
        "3000083750",
        "850040644543",
        "1027558179",
        "2018-03-29"
      ],
      "line": 17
    }
  ],
  "keyword": "And "
});
formatter.match({
  "location": "FLOT_Stepdefs.buildTheRestRequestWithContentTypeAndBasicAuthDetails()"
});
formatter.result({
  "duration": 1574910,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "00447778889994",
      "offset": 64
    }
  ],
  "location": "FLOT_Stepdefs.initiateRestServiceToGetCustomerDetailsWithPhoneNoAs(String)"
});
formatter.result({
  "duration": 933698316,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 42
    }
  ],
  "location": "FLOT_Stepdefs.restResponseHTTPStatusCodeShouldBe(String)"
});
formatter.result({
  "duration": 106439,
  "status": "passed"
});
formatter.match({
  "location": "FLOT_Stepdefs.responseShouldIncludesTheFollowingCustomerDetails(DataTable)"
});
formatter.result({
  "duration": 140271,
  "status": "passed"
});
formatter.after({
  "duration": 91613,
  "status": "passed"
});
formatter.before({
  "duration": 384699,
  "status": "passed"
});
formatter.scenario({
  "line": 19,
  "name": "GET the customer information by Account No",
  "description": "",
  "id": "testing-flot/ivr-rest-api\u0027s;get-the-customer-information-by-account-no",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 20,
  "name": "Build the rest request with content-type and basic auth details",
  "keyword": "Given "
});
formatter.step({
  "line": 21,
  "name": "Initiate Rest service to get customer details with Account No as \"850040644543\"",
  "keyword": "When "
});
formatter.step({
  "line": 22,
  "name": "REST Response HTTP status code should be \"200\"",
  "keyword": "Then "
});
formatter.step({
  "line": 23,
  "name": "response should includes the following customer details",
  "rows": [
    {
      "cells": [
        "firstName",
        "contactPartnerNumber",
        "buAgreementId",
        "businessPartnerNumber",
        "nextBillingWindowDate"
      ],
      "line": 24
    },
    {
      "cells": [
        "wewe",
        "3000083750",
        "850040644543",
        "1027558179",
        "2018-03-29"
      ],
      "line": 25
    }
  ],
  "keyword": "And "
});
formatter.match({
  "location": "FLOT_Stepdefs.buildTheRestRequestWithContentTypeAndBasicAuthDetails()"
});
formatter.result({
  "duration": 640152,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "850040644543",
      "offset": 66
    }
  ],
  "location": "FLOT_Stepdefs.initiateRestServiceToGetCustomerDetailsWithAccountNoAs(String)"
});
formatter.result({
  "duration": 950538028,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 42
    }
  ],
  "location": "FLOT_Stepdefs.restResponseHTTPStatusCodeShouldBe(String)"
});
formatter.result({
  "duration": 60822,
  "status": "passed"
});
formatter.match({
  "location": "FLOT_Stepdefs.responseShouldIncludesTheFollowingCustomerDetails(DataTable)"
});
formatter.result({
  "duration": 124305,
  "status": "passed"
});
formatter.after({
  "duration": 61582,
  "status": "passed"
});
formatter.uri("testFDE_endpoints.feature");
formatter.feature({
  "line": 1,
  "name": "Testing the REST endpoints for FDE",
  "description": "",
  "id": "testing-the-rest-endpoints-for-fde",
  "keyword": "Feature"
});
formatter.before({
  "duration": 852648,
  "status": "passed"
});
formatter.scenario({
  "line": 3,
  "name": "Testing POSTCode lookup endpoint",
  "description": "",
  "id": "testing-the-rest-endpoints-for-fde;testing-postcode-lookup-endpoint",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "Engineer login to CI app",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "he enters post code of customer \"DM001PL\"",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "response should have status \u0027200\u0027",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "CI app should display all the address",
  "keyword": "And "
});
formatter.match({
  "location": "FDE_Stepdefs.engineerLoginToCIApp()"
});
formatter.result({
  "duration": 2404647257,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "DM001PL",
      "offset": 33
    }
  ],
  "location": "FDE_Stepdefs.heEntersPostCodeOfCustomer(String)"
});
formatter.result({
  "duration": 3910151458,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 29
    }
  ],
  "location": "FDE_Stepdefs.responseShouldHaveStatus(int)"
});
formatter.result({
  "duration": 747730,
  "status": "passed"
});
formatter.match({
  "location": "FDE_Stepdefs.ciAppShouldDisplayAllTheAddress()"
});
formatter.result({
  "duration": 107199,
  "status": "passed"
});
formatter.after({
  "duration": 70705,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 9,
  "name": "Test to get addressId by Invalid POSTCode",
  "description": "",
  "id": "testing-the-rest-endpoints-for-fde;test-to-get-addressid-by-invalid-postcode",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 10,
  "name": "Engineer login to CI app",
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "he enters invalid post code of customer \"DM002PL00\"",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "response should have HTTP status 404",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "response should have following error message \u003cerror_message\u003e",
  "keyword": "And "
});
formatter.examples({
  "line": 14,
  "name": "",
  "description": "",
  "id": "testing-the-rest-endpoints-for-fde;test-to-get-addressid-by-invalid-postcode;",
  "rows": [
    {
      "cells": [
        "status code",
        "error_message"
      ],
      "line": 15,
      "id": "testing-the-rest-endpoints-for-fde;test-to-get-addressid-by-invalid-postcode;;1"
    },
    {
      "cells": [
        "404",
        "Invalid UK postcode, postcode must be in the given format TW20 8NJ, including a space"
      ],
      "line": 16,
      "id": "testing-the-rest-endpoints-for-fde;test-to-get-addressid-by-invalid-postcode;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 930196,
  "status": "passed"
});
formatter.scenario({
  "line": 16,
  "name": "Test to get addressId by Invalid POSTCode",
  "description": "",
  "id": "testing-the-rest-endpoints-for-fde;test-to-get-addressid-by-invalid-postcode;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 10,
  "name": "Engineer login to CI app",
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "he enters invalid post code of customer \"DM002PL00\"",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "response should have HTTP status 404",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "response should have following error message Invalid UK postcode, postcode must be in the given format TW20 8NJ, including a space",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.match({
  "location": "FDE_Stepdefs.engineerLoginToCIApp()"
});
formatter.result({
  "duration": 933800573,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "DM002PL00",
      "offset": 41
    }
  ],
  "location": "FDE_Stepdefs.heEntersInvalidPostCodeOfCustomer(String)"
});
formatter.result({
  "duration": 820075214,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "404",
      "offset": 33
    }
  ],
  "location": "FDE_Stepdefs.responseShouldHaveHTTPStatus(int)"
});
formatter.result({
  "duration": 84771,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "20",
      "offset": 105
    },
    {
      "val": "8",
      "offset": 108
    }
  ],
  "location": "FDE_Stepdefs.response_should_have_following_error_message_Invalid_UK_postcode_postcode_must_be_in_the_given_format_TW_NJ_including_a_space(int,String)"
});
formatter.result({
  "duration": 682347,
  "error_message": "java.lang.AssertionError: Error message Check Failed!\r\n\tat org.junit.Assert.fail(Assert.java:88)\r\n\tat org.junit.Assert.assertTrue(Assert.java:41)\r\n\tat com.centrica.assetTracking.tests.stepDefinitions.FDE_Stepdefs.response_should_have_following_error_message_Invalid_UK_postcode_postcode_must_be_in_the_given_format_TW_NJ_including_a_space(FDE_Stepdefs.java:92)\r\n\tat ✽.And response should have following error message Invalid UK postcode, postcode must be in the given format TW20 8NJ, including a space(testFDE_endpoints.feature:13)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 54740,
  "status": "passed"
});
formatter.before({
  "duration": 373295,
  "status": "passed"
});
formatter.scenario({
  "line": 17,
  "name": "Test to get address info by id",
  "description": "",
  "id": "testing-the-rest-endpoints-for-fde;test-to-get-address-info-by-id",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 18,
  "name": "Engineer have address id for the mention postcode",
  "keyword": "Given "
});
formatter.step({
  "line": 19,
  "name": "he enters address id to findAddressById endpoint \"address_id\"",
  "keyword": "When "
});
formatter.step({
  "line": 20,
  "name": "response should have status \u0027200\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "response should have following details \u0027\u003cstreet\u003e\u0027,\u0027\u003ctown\u003e\u0027,\u0027\u003cid\u003e\u0027,\u0027\u003cfirstLine\u003e\u0027",
  "keyword": "And "
});
formatter.match({
  "location": "FDE_Stepdefs.engineerHaveAddressIdForTheMentionPostcode()"
});
formatter.result({
  "duration": 6160128,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "address_id",
      "offset": 50
    }
  ],
  "location": "FDE_Stepdefs.heEntersAddressIdToFindAddressByIdEndpoint(String)"
});
formatter.result({
  "duration": 960230774,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 29
    }
  ],
  "location": "FDE_Stepdefs.responseShouldHaveStatus(int)"
});
formatter.result({
  "duration": 98456,
  "status": "passed"
});
formatter.match({
  "location": "FDE_Stepdefs.responseShouldHaveFollowingDetailsStreetTownIdFirstLine()"
});
formatter.result({
  "duration": 84010,
  "status": "passed"
});
formatter.after({
  "duration": 88952,
  "status": "passed"
});
formatter.before({
  "duration": 578949,
  "status": "passed"
});
formatter.scenario({
  "line": 22,
  "name": "Test to get address info by passing invalid id",
  "description": "",
  "id": "testing-the-rest-endpoints-for-fde;test-to-get-address-info-by-passing-invalid-id",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 23,
  "name": "Engineer passing invalid address id for the mention postcode",
  "keyword": "Given "
});
formatter.step({
  "line": 24,
  "name": "he enters address id to findAddressById endpoint \"address_id\"",
  "keyword": "When "
});
formatter.step({
  "line": 25,
  "name": "response should have HTTP status \u003cnumber\u003e\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "response should have following error message \u003cerror_message\u003e",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({
  "arguments": [
    {
      "val": "address_id",
      "offset": 50
    }
  ],
  "location": "FDE_Stepdefs.heEntersAddressIdToFindAddressByIdEndpoint(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.after({
  "duration": 76787,
  "status": "passed"
});
});