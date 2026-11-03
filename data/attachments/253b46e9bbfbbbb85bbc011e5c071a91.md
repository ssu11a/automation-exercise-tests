# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: regression/cart.spec.ts >> Order cases >> Verify address details in checkout page
- Location: tests/regression/cart.spec.ts:23:7

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: locator('.logo')
Expected: visible
Timeout: 5000ms
Error: element(s) not found

Call log:
  - Expect "toBeVisible" with timeout 5000ms
  - waiting for locator('.logo')

```

```yaml
- heading "This website is under heavy load (queue full)" [level=2]
- paragraph: We're sorry, too many people are accessing this website at the same time. We're working on this problem. Please try again later.
```

# Test source

```ts
  1   | import { test, expect, regressionTestDetails } from "@fixtures";
  2   | import { readFile } from 'node:fs/promises';
  3   | import {
  4   |   createExpectedAddress,
  5   |   createRegisterUserData
  6   | } from '@testData';
  7   | import { createPaymentData } from '@testData';
  8   | 
  9   | test.beforeEach(async ({ homePage }) => {
  10  |   await test.step('Open the home page', async () => {
  11  |     await homePage.goto();
> 12  |     await expect(homePage.logo).toBeVisible();
      |                                 ^ Error: expect(locator).toBeVisible() failed
  13  |   });
  14  | });
  15  | 
  16  | test.describe('Order cases', () => {
  17  |   const expectedProduct = {
  18  |     name: 'Blue Top',
  19  |     price: 500,
  20  |     quantity: 1,
  21  |   };
  22  | 
  23  |   test('Verify address details in checkout page', regressionTestDetails('@checkout', '@auth'), async ({
  24  |     homePage,
  25  |     loginPage,
  26  |     signupPage,
  27  |     accountCreatedPage,
  28  |     cartPage,
  29  |     checkoutPage,
  30  |     accountDeletedPage,
  31  |     disposableAccounts
  32  |   }) => {
  33  |     const userData = createRegisterUserData();
  34  |     const expectedAddress = createExpectedAddress(userData.signupForm);
  35  |     disposableAccounts.track({ email: userData.email, password: userData.password });
  36  | 
  37  |     await test.step('Register new user', async () => {
  38  |       await homePage.openNavBarOption('login');
  39  |       await loginPage.signUp({
  40  |         userName: userData.userName,
  41  |         email: userData.email,
  42  |       });
  43  |       await signupPage.fillSignupForm(userData.signupForm);
  44  |       await signupPage.submitSignupForm();
  45  |       await expect(accountCreatedPage.accountCreatedTitle).toBeVisible();
  46  |       await accountCreatedPage.continueToHomePage();
  47  |       await expect(homePage.navBar).toContainText(`Logged in as ${userData.userName}`);
  48  |     });
  49  | 
  50  |     await test.step('Add product to cart', async () => {
  51  |       await homePage.productCards.addToCart(expectedProduct.name);
  52  |       await homePage.addToCartModal.continueShopping();
  53  |     });
  54  | 
  55  |     await test.step('Process checkout', async () => {
  56  |       await homePage.openNavBarOption('cart');
  57  |       await expect(cartPage.page).toHaveURL(/cart/);
  58  |       await cartPage.submitProcessCheckout();
  59  |     });
  60  | 
  61  |     await test.step('Verify delivery and billing address details', async () => {
  62  |       await checkoutPage.checkAddressDetails(checkoutPage.deliveryAddressBlock, expectedAddress);
  63  |       await checkoutPage.checkAddressDetails(checkoutPage.billingAddressBlock, expectedAddress);
  64  |     });
  65  | 
  66  |     await test.step('Delete account', async () => {
  67  |       await homePage.openNavBarOption('deleteAccount');
  68  |       await expect(accountDeletedPage.accountDeletedTitle).toBeVisible();
  69  |       await accountDeletedPage.continueToHomePage();
  70  |     });
  71  |   });
  72  | 
  73  |   test('Download Invoice after purchase order', regressionTestDetails('@checkout', '@invoice'), async ({
  74  |     homePage,
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
```