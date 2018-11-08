Feature: Testing FLOT/IVR REST API's

Scenario: GET the customer information by Customer Id
    Given Build the rest request with content-type and basic auth details
    When  Initiate Rest service to get customer details with Customer Id as "3000083750"
    Then REST Response HTTP status code should be "200"
    And response should includes the following customer details
        | firstName  | contactPartnerNumber | buAgreementId |businessPartnerNumber |nextBillingWindowDate |
        | wewe       | 3000083750    	    | 850040644543 |1027558179             |2018-03-29            |

Scenario: GET the customer information by phoneNo
    Given Build the rest request with content-type and basic auth details
    When  Initiate Rest service to get customer details with phone No as "00447778889994"
    Then REST Response HTTP status code should be "200"
    And response should includes the following customer details
      | firstName  | contactPartnerNumber | buAgreementId |businessPartnerNumber |nextBillingWindowDate |
      | wewe       | 3000083750    	    | 850040644543 |1027558179             |2018-03-29            |

Scenario: GET the customer information by Account No
    Given Build the rest request with content-type and basic auth details
    When  Initiate Rest service to get customer details with Account No as "850040644543"
    Then REST Response HTTP status code should be "200"
    And response should includes the following customer details
      | firstName  | contactPartnerNumber | buAgreementId |businessPartnerNumber |nextBillingWindowDate |
      | wewe       | 3000083750    	    | 850040644543 |1027558179             |2018-03-29            |
