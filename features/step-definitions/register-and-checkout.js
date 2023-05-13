
const { Given, When, Then } = require('@wdio/cucumber-framework');
const LoginPage = require('../pageobjects/login.page');
const userData = require('../step-definitions/testdata/test-data');


Given(/^user is on home page$/, function () {
    browser.url('https://automationteststore.com/');
  });

  When(/^user clicks on Login or register links$/, function () {
    const loginOrRegisterLinks = $('ul[id="customer_menu_top"] li a');
    loginOrRegisterLinks.click();
  });

  And(/^user clicks on continue button$/, function () {
    const continueButton = $('button[title="Continue"]');
    continueButton.click();
  });

  And(/^user enter personal details$/, function () {
    const firstName = $('#AccountFrm_firstname');
   // firstName.setValue('John Doe');
   firstName.setValue(userData.firstName);

    const lastName = $('#AccountFrm_lastname');
    lastName.setValue(userData.lastName);
    
    const email = $('#AccountFrm_email');
    email.setValue(userData.email);

    const address1 = $('#AccountFrm_address_1');
    address1.setValue(userData.address);

    const citi = $('#AccountFrm_city');
    citi.setValue(userData.city);

    const regionandStatedropdown = $('#AccountFrm_zone_id');
    const selectregionandStatedropdown = regionandStatedropdown.selectByVisibleText(userData.regionandStated);

    const zipCode = $('#AccountFrm_postcode');
    zipCode.setValue(userData.zipCode);

    const countryDropdown = $('#AccountFrm_postcode');
    const selectcountryDropdown= countryDropdown.selectByVisibleText(userData.country);

    const loginName = $('#AccountFrm_loginname');
    loginName.setValue(userData.loginName);

    
    const password = $('#AccountFrm_confirm');
    password.setValue(userData.password);

    const confirmPasswordInput = $('#AccountFrm_confirm');
    confirmPasswordInput.setValue(userData.confirmPassword);

    const subscribeRadioButton = $('#AccountFrm_newsletter1');

     // Click on the radio button
     subscribeRadioButton.click();

    // Verify that the radio button is selected
    const isSelected = subscribeRadioButton.isSelected();
    expect(isSelected).toBe(true);

    const privacyPolicy = $('#AccountFrm_agree');

    // Click on the radio button
    privacyPolicy.click();

    const continueBtn = $('button[title="Continue"]');

    // Click on the radio button
    continueBtn.click();



  
  });

  Then(/^user account is created$/, function () {
   // Locate the user name element
const userName = $('div[class="menu_text"]');
// Get the text of the user name
const userNameText = userName.getText();
// Verify that the user name contains the expected text
expect(userNameText).toEqual('Welcome back test');
  });

  

  Given(/^user is on login page$/, function () {
    browser.url('https://automationteststore.com/');
  });


  When(/^user enters username and password$/, function () {
    const loginName = $('#loginFrm_loginname');
    usernameInput.setValue(userData.loginName);
    
    const passwordInput = $('#loginFrm_password');
    passwordInput.setValue(userData.password);
  });

  And(/^user clicks on login button$/, function () {
    const loginButton = $('button[title="Login"]');
    loginButton.click();
  });

  Then(/^user is navigated to the home page$/, function () {
    // Verify that the user is on the home page
    const userName = $('div[class="menu_text"]');
    // Get the text of the user name
    const userNameText = userName.getText();
    // Verify that the user name contains the expected text
    expect(userNameText).toEqual(userData.homePageHeader);
  });

  When(/^user adds a product to the cart$/, function () {
    
    const searchKewords = $('#filter_keyword');
    searchKewords.setValue(userData.product);
    const searchButton =$(".fa.fa-search");
    searchButton.click();
    const addToCartButton = $('.cart');
    addToCartButton.click();
    
  });



  Then(/^validate on the payments page if the product details are correct$/, function () {
    const productName = $('td[class="align_left"] a');
    // Get the text of the user name
    const productNameText =productName.getText();
    const productColor = $('div[id="maincontainer"] div[class="container-fluid"]');
    // Get the text of the user name
    const productColorText =productColor.getText();

    const productTotlaPrice = $('span[class="bold totalamout"]');
    // Get the text of the user name
    const productTotlaPriceText =productTotlaPrice .getText();

    const checkout=$("#cart_checkout2");
    checkout.click();


    const productNameOnPaymentpage = $('a[class="checkout_heading"]');
    // Get the text of the user name
    const productNameOnPaymentpageText =productNameOnPaymentpage.getText();
    expect(productNameText).toEqual( productNameOnPaymentpageText);


    const productColorPaymentPage = $('//small[normalize-space()="- Colour black"]');
    // Get the text of the user name
    const productColorPaymentPagerText =productColorPaymentPage.getText();
    expect(productColorText).toEqual(productColorPaymentPagerText);


    const productTotlaPricePlaymentPage = $('span[class="bold totalamout"]');
    // Get the text of the user name
    const productTotlaPricePlaymentPageText =productTotlaPricePlaymentPage .getText();

    expect(productTotlaPriceText).toEqual(productTotlaPricePlaymentPageText);

   const confirmButton=$('#checkout_btn');
   confirmButton.click();


  });