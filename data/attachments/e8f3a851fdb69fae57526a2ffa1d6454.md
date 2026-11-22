# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: regression/cart.spec.ts >> Order cases >> Place Order: Register while Checkout
- Location: tests/regression/cart.spec.ts:150:7

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: locator('#cart_info_table')
Expected: visible
Timeout: 5000ms
Error: element(s) not found

Call log:
  - Expect "toBeVisible" with timeout 5000ms
  - waiting for locator('#cart_info_table')

```

```yaml
- heading "This website is under heavy load (queue full)" [level=2]
- paragraph: We're sorry, too many people are accessing this website at the same time. We're working on this problem. Please try again later.
```

# Test source

```ts
  75  |     loginPage,
  76  |     signupPage,
  77  |     accountCreatedPage,
  78  |     cartPage,
  79  |     checkoutPage,
  80  |     paymentPage,
  81  |     paymentDonePage,
  82  |     accountDeletedPage,
  83  |     disposableAccounts
  84  |   }) => {
  85  |     const userData = createRegisterUserData();
  86  |     const expectedAddress = createExpectedAddress(userData.signupForm);
  87  |     const paymentData = createPaymentData(userData.signupForm.addressInfo);
  88  |     disposableAccounts.track({ email: userData.email, password: userData.password });
  89  | 
  90  |     await test.step('Add product to cart', async () => {
  91  |       await homePage.productCards.addToCart(expectedProduct.name);
  92  |       await homePage.addToCartModal.continueShopping();
  93  |     });
  94  | 
  95  |     await test.step('Open cart and proceed to checkout', async () => {
  96  |       await homePage.openNavBarOption('cart');
  97  |       await expect(cartPage.page).toHaveURL(/cart/);
  98  |       await cartPage.submitProcessCheckout();
  99  |     });
  100 | 
  101 |     await test.step('Register new user during checkout', async () => {
  102 |       await cartPage.continueToLoginPage();
  103 |       await loginPage.signUp({ userName: userData.userName, email: userData.email });
  104 |       await signupPage.fillSignupForm(userData.signupForm);
  105 |       await signupPage.submitSignupForm();
  106 |       await expect(accountCreatedPage.accountCreatedTitle).toBeVisible();
  107 |       await accountCreatedPage.continueToHomePage();
  108 |       await expect(homePage.navBar).toContainText(`Logged in as ${userData.userName}`);
  109 |     });
  110 | 
  111 |     await test.step('Return to checkout and verify address', async () => {
  112 |       await homePage.openNavBarOption('cart');
  113 |       await cartPage.submitProcessCheckout();
  114 |       await checkoutPage.checkAddressDetails(checkoutPage.deliveryAddressBlock, expectedAddress);
  115 |       await checkoutPage.checkAddressDetails(checkoutPage.billingAddressBlock, expectedAddress);
  116 |     });
  117 | 
  118 |     await test.step('Place order and enter payment details', async () => {
  119 |       await checkoutPage.fillCommentTextArea('Invoice Test Order');
  120 |       await checkoutPage.placeOrder();
  121 |       await paymentPage.fillPaymentDetails(paymentData);
  122 |       await paymentPage.submitPayment();
  123 |       await expect(paymentDonePage.orderPlacedHeading).toBeVisible();
  124 |     });
  125 | 
  126 |     await test.step('Download and verify invoice', async () => {
  127 |       const downloadPromise = paymentDonePage.page.waitForEvent('download');
  128 |       await paymentDonePage.downloadInvoiceBtn.click();
  129 |       const download = await downloadPromise;
  130 |       
  131 |       expect(download.suggestedFilename()).toBe('invoice.txt');
  132 |       
  133 |       const invoicePath = await download.path();
  134 | 
  135 |       const invoiceText = await readFile(invoicePath, 'utf8');
  136 | 
  137 |       const { firstName, lastName } = userData.signupForm.addressInfo;
  138 |       expect(invoiceText).toContain(`Hi ${firstName} ${lastName}, Your total purchase amount is ${expectedProduct.price}. Thank you`);
  139 |     });
  140 | 
  141 |     await test.step('Continue to home page and delete account', async () => {
  142 |       await paymentDonePage.continueBtn.click();
  143 |       await expect(homePage.sliderCarousel).toBeVisible();
  144 |       await homePage.openNavBarOption('deleteAccount');
  145 |       await expect(accountDeletedPage.accountDeletedTitle).toBeVisible();
  146 |       await accountDeletedPage.continueToHomePage();
  147 |     });
  148 |   });
  149 | 
  150 |   test('Place Order: Register while Checkout', regressionTestDetails('@checkout', '@auth'), async ({
  151 |     homePage,
  152 |     cartPage,
  153 |     loginPage,
  154 |     signupPage,
  155 |     accountCreatedPage,
  156 |     checkoutPage,
  157 |     paymentPage,
  158 |     paymentDonePage,
  159 |     disposableAccounts
  160 |   }) => {
  161 |     const registerUserData = createRegisterUserData();
  162 |     const paymentData = createPaymentData(registerUserData.signupForm.addressInfo);
  163 |     const expectedAddress = createExpectedAddress(registerUserData.signupForm);
  164 |     disposableAccounts.track({
  165 |       email: registerUserData.email,
  166 |       password: registerUserData.password
  167 |     });
  168 | 
  169 |     await test.step('Add product to cart', async () => {
  170 |       await homePage.productCards.addToCart(expectedProduct.name);
  171 |     });
  172 | 
  173 |     await test.step('Open cart', async () => {
  174 |       await homePage.addToCartModal.viewCart();
> 175 |       await expect(cartPage.cartItemsTable.root).toBeVisible();
      |                                                  ^ Error: expect(locator).toBeVisible() failed
  176 |     });
  177 | 
  178 |     await test.step('Process checkout', async () => {
  179 |       await cartPage.submitProcessCheckout();
  180 |       await cartPage.continueToLoginPage();
  181 |     });
  182 | 
  183 |     await test.step('Fill all details in Signup and create account', async () => {
  184 |       await loginPage.signUp({ userName: registerUserData.userName, email: registerUserData.email });
  185 |       await signupPage.fillSignupForm(registerUserData.signupForm);
  186 |       await signupPage.submitSignupForm();
  187 |     });
  188 | 
  189 |     await test.step('Verify account created and continue to home page', async () => {
  190 |       await expect(accountCreatedPage.accountCreatedTitle).toBeVisible();
  191 |       await accountCreatedPage.continueToHomePage();
  192 |     });
  193 | 
  194 |     await test.step('Verify logged in as username at top and go to cart', async () => {
  195 |       await expect(homePage.navBar).toContainText(`Logged in as ${registerUserData.userName}`);
  196 |       await homePage.openNavBarOption('cart');
  197 |     });
  198 | 
  199 |     await test.step('Process checkout', async () => {
  200 |       await cartPage.submitProcessCheckout();
  201 |     });
  202 | 
  203 |     await test.step('Verify address and order details', async () => {
  204 |       await checkoutPage.checkAddressDetails(checkoutPage.deliveryAddressBlock, expectedAddress);
  205 |       await checkoutPage.checkAddressDetails(checkoutPage.billingAddressBlock, expectedAddress);
  206 |       await checkoutPage.cartItemsTable.expectProduct(expectedProduct);
  207 |     });
  208 | 
  209 |     await test.step('Enter description in comment text area and click "Place Order"', async () => {
  210 |       await checkoutPage.fillCommentTextArea('Order Message');
  211 |       await checkoutPage.placeOrder();
  212 |     });
  213 | 
  214 |     await test.step('Enter payment details and submit', async () => {
  215 |       await paymentPage.fillPaymentDetails(paymentData);
  216 |       await paymentPage.submitPayment();
  217 | 
  218 |       await expect(paymentDonePage.orderPlacedHeading).toBeVisible();
  219 |     });
  220 | 
  221 |     await test.step('Download and verify invoice', async () => {
  222 |       const downloadPromise = paymentDonePage.page.waitForEvent('download');
  223 |       await paymentDonePage.downloadInvoiceBtn.click();
  224 |       const download = await downloadPromise;
  225 |       expect(download.suggestedFilename()).toBe('invoice.txt');
  226 |       const invoicePath = await download.path();
  227 | 
  228 |       const invoiceText = await readFile(invoicePath, 'utf8');
  229 | 
  230 |       const { firstName, lastName } = registerUserData.signupForm.addressInfo;
  231 |       expect(invoiceText).toContain(
  232 |         `Hi ${firstName} ${lastName}, Your total purchase amount is ${expectedProduct.price}. Thank you`
  233 |       );
  234 |     });
  235 | 
  236 |     await test.step('Continue to home page', async () => {
  237 |       await paymentDonePage.continueBtn.click();
  238 | 
  239 |       await expect(homePage.sliderCarousel).toBeVisible();
  240 |     });
  241 |   });
  242 | 
  243 |   test('Place Order: Login before Checkout', regressionTestDetails('@checkout', '@auth'), async ({
  244 |     homePage,
  245 |     loginPage,
  246 |     cartPage,
  247 |     checkoutPage,
  248 |     paymentPage,
  249 |     paymentDonePage,
  250 |     registeredUser
  251 |   }) => {
  252 |     const { userName, email, password } = registeredUser;
  253 |     const expectedAddress = createExpectedAddress(registeredUser.signupForm);
  254 |     const paymentData = createPaymentData(registeredUser.signupForm.addressInfo);
  255 | 
  256 |     await test.step('Open login page and log in as registered user', async () => {
  257 |       await homePage.openNavBarOption('login');
  258 |       await loginPage.login({ email, password });
  259 |       await expect(homePage.navBar).toContainText(`Logged in as ${userName}`);
  260 |     });
  261 | 
  262 |     await test.step('Add product to cart', async () => {
  263 |       await homePage.productCards.addToCart(expectedProduct.name);
  264 |     });
  265 | 
  266 |     await test.step('Open cart', async () => {
  267 |       await homePage.addToCartModal.viewCart();
  268 |       await expect(cartPage.cartItemsTable.root).toBeVisible();
  269 |     });
  270 | 
  271 |     await test.step('Process checkout', async () => {
  272 |       await cartPage.submitProcessCheckout();
  273 |     });
  274 | 
  275 |     await test.step('Verify address details and review order', async () => {
```