Feature: End to End Ecommerce validation
@smoke
Scenario: Ecommerce product delivery
    Given I am on the login page
    When I login to the application
    And I add items to the cart and checkout
    And validate the total price
    Then select the country, submit and verify the confirmation message

@datadriven
Scenario Outline: Ecommerce product delivery, data driven
    Given I am on the login page
    When I login to the application, datadriven
    |username|password|
    |bob     |bob     |
    And I add items to the cart and checkout
    And validate the total price
    Then select the country, submit and verify the confirmation message