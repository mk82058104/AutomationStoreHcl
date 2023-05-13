

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
    firstName.setValue('John Doe');

    const lastName = $('#AccountFrm_lastname');
    lastName.setValue('John Doe Last');
    
    const email = $('#AccountFrm_email');
    email.setValue('test@example.com');

    const address1 = $('#AccountFrm_address_1');
    address1.setValue('address1');

    const citi = $('#AccountFrm_city');
    citi.setValue('cititest');

    const regionandStatedropdown = $('#AccountFrm_zone_id');

// Create a Select object from the dropdown element
const selectregionandStatedropdown = regionandStatedropdown.selectByVisibleText('Vale of Glamorgan');

const zipCode = $('#AccountFrm_postcode');
zipCode.setValue('500038');






    
    const passwordInput = $('input[name="password"]');
    passwordInput.setValue('p@ssw0rd');
    
    const confirmPasswordInput = $('input[name="confirm-password"]');
    confirmPasswordInput.setValue('p@ssw0rd');
  });

  Then(/^user account is created$/, function () {
    const createAccountButton = $('button[data-testid="create-account-button"]');
    createAccountButton.click();
    
    // Verify that the account is created
    expect(browser).toHaveUrlContaining('https://www.example.com/dashboard');
  });

  

  Given(/^user is on login page$/, function () {
    browser.url('https://www.example.com/login');
  });


  When(/^user enters username and password$/, function () {
    const usernameInput = $('input[name="username"]');
    usernameInput.setValue('johndoe@example.com');
    
    const passwordInput = $('input[name="password"]');
    passwordInput.setValue('p@ssw0rd');
  });

  And(/^user clicks on login button$/, function () {
    const loginButton = $('button[data-testid="login-button"]');
    loginButton.click();
  });

  Then(/^user is navigated to the home page$/, function () {
    // Verify that the user is on the home page
    expect(browser).toHaveUrlContaining('https://www.example.com/');
  });

  When(/^user adds a product to the cart$/, function () {
    // Navigate to the product page
    browser.url('https://www.example.com/products/1234');
    
    // Add the product to the cart
    const addToCartButton = $('button[data-testid="add-to-cart-button"]');
    addToCartButton.click();
    
    // Verify that the product is added to the cart
    expect(browser).toHaveText('span[data-testid="cart-count"]', '1');
  });


  And(/^user proceeds to the checkout page and continues till payments$/, function () {
    // Navigate to the checkout page
    const checkoutButton = $('button[data-testid="checkout-button"]');
    checkoutButton.click();
    
    // Fill in the shipping details
    const firstNameInput = $('input[name="first-name"]');
    firstNameInput.setValue('John');
    
    const lastNameInput = $('input[name="last-name"]');
    lastNameInput.setValue('Doe');
    
    const addressInput = $('input[name="address"]');
    addressInput.setValue('123 Main St');
    
    const cityInput = $('input[name="city"]');
    cityInput.setValue('Anytown');
    
    const stateInput = $('input[name="state"]');
    stateInput.setValue('CA');
    
    const zipCodeInput = $('input[name="zip-code"]');
    zipCodeInput.setValue('12345');
    
    // Continue to the payments page
    const continueToPaymentsButton = $('button[data-testid="continue-to-payments-button"]');
    continueToPaymentsButton.click();
    
    // Verify that the user is on the payments page
    expect(browser).toHaveUrlContaining('https://www.example.com/checkout/payments');
  });

  Then(/^validate on the payments page if the product details are correct$/, function () {
    // Verify that the product details are correct
    const productTitle = $('h2[data-testid="product-title"]').getText();
    expect(productTitle).toEqual('Product A');
    
    const productPrice = $('span[data-testid="product-price"]').getText();
    expect(productPrice).toEqual('$9.99');
    
    const productQuantity = $('input[name="quantity"]').getValue();
    expect(productQuantity).toEqual('1');
  });