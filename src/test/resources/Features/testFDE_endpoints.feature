Feature: Testing the REST endpoints for FDE

Scenario: Testing POSTCode lookup endpoint
    Given Engineer login to CI app
    When he enters post code of customer "DM001PL"
    Then response should have status '200'
    And CI app should display all the address

    Scenario Outline: Test to get addressId by Invalid POSTCode
        Given Engineer login to CI app
        When he enters invalid post code of customer "DM002PL00"
        Then response should have HTTP status 404
        And response should have following error message <error_message>
        Examples:
            | status code   |  error_message  |
            | 404           | Invalid UK postcode, postcode must be in the given format TW20 8NJ, including a space|
Scenario:  Test to get address info by id
        Given Engineer have address id for the mention postcode
        When he enters address id to findAddressById endpoint "address_id"
        And response should have status '200'
        And response should have following details '<street>','<town>','<id>','<firstLine>'
  Scenario:  Test to get address info by passing invalid id
    Given Engineer passing invalid address id for the mention postcode
    When he enters address id to findAddressById endpoint "address_id"
    And response should have HTTP status <number>'
    And response should have following error message <error_message>

