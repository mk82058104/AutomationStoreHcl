Feature: Register and checkout
  As a customer
  I want to register on the website
  And buy a product

    Scenario:Register new user
    Given user is  on home page
    When user clicks on Login or register links
    And user clicks on continue button
    And user enter personal details 
    Then user account is created 


    Scenario:check login with valid credentials and checkout
    Given user is  on login page
    When user enters username and password
    And user clicks on login button 
    Then user is navigated to the home page 
    When user add a product to the cart
    Then Validate on the payments page if the product details are correct.
