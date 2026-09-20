import { test, expect, regressionTestDetails } from "@fixtures";
import { readFile } from 'node:fs/promises';
import {
  createExpectedAddress,
  createRegisterUserData
} from '@testData';
import { createPaymentData } from '@testData';

test.beforeEach(async ({ homePage }) => {
  await test.step('Open the home page', async () => {
    await homePage.goto();
    await expect(homePage.logo).toBeVisible();
  });
});

test.describe('Order cases', () => {
  const expectedProduct = {
    name: 'Blue Top',
    price: 500,
    quantity: 1,
  };

  test('Verify address details in checkout page', regressionTestDetails('@checkout', '@auth'), async ({
    homePage,
    loginPage,
    signupPage,
    accountCreatedPage,
    cartPage,
    checkoutPage,
    accountDeletedPage
  }) => {
    const userData = createRegisterUserData();
    const expectedAddress = createExpectedAddress(userData.signupForm);

    await test.step('Register new user', async () => {
      await homePage.openNavBarOption('login');
      await loginPage.signUp({
        userName: userData.userName,
        email: userData.email,
      });
      await signupPage.fillSignupForm(userData.signupForm);
      await signupPage.submitSignupForm();
      await expect(accountCreatedPage.accountCreatedTitle).toBeVisible();
      await accountCreatedPage.continueToHomePage();
      await expect(homePage.navBar).toContainText(`Logged in as ${userData.userName}`);
    });

    await test.step('Add product to cart', async () => {
      await homePage.productCards.addToCart(expectedProduct.name);
      await homePage.addToCartModal.continueShopping();
    });

    await test.step('Process checkout', async () => {
      await homePage.openNavBarOption('cart');
      await expect(cartPage.page).toHaveURL(/cart/);
      await cartPage.submitProcessCheckout();
    });

    await test.step('Verify delivery and billing address details', async () => {
      await checkoutPage.checkAddressDetails(checkoutPage.deliveryAddressBlock, expectedAddress);
      await checkoutPage.checkAddressDetails(checkoutPage.billingAddressBlock, expectedAddress);
    });

    await test.step('Delete account', async () => {
      await homePage.openNavBarOption('deleteAccount');
      await expect(accountDeletedPage.accountDeletedTitle).toBeVisible();
      await accountDeletedPage.continueToHomePage();
    });
  });

  test('Download Invoice after purchase order', regressionTestDetails('@checkout', '@invoice'), async ({
    homePage,
    loginPage,
    signupPage,
    accountCreatedPage,
    cartPage,
    checkoutPage,
    paymentPage,
    paymentDonePage,
    accountDeletedPage
  }) => {
    const userData = createRegisterUserData();
    const expectedAddress = createExpectedAddress(userData.signupForm);
    const paymentData = createPaymentData(userData.signupForm.addressInfo);

    await test.step('Add product to cart', async () => {
      await homePage.productCards.addToCart(expectedProduct.name);
      await homePage.addToCartModal.continueShopping();
    });

    await test.step('Open cart and proceed to checkout', async () => {
      await homePage.openNavBarOption('cart');
      await expect(cartPage.page).toHaveURL(/cart/);
      await cartPage.submitProcessCheckout();
    });

    await test.step('Register new user during checkout', async () => {
      await cartPage.continueToLoginPage();
      await loginPage.signUp({ userName: userData.userName, email: userData.email });
      await signupPage.fillSignupForm(userData.signupForm);
      await signupPage.submitSignupForm();
      await expect(accountCreatedPage.accountCreatedTitle).toBeVisible();
      await accountCreatedPage.continueToHomePage();
      await expect(homePage.navBar).toContainText(`Logged in as ${userData.userName}`);
    });

    await test.step('Return to checkout and verify address', async () => {
      await homePage.openNavBarOption('cart');
      await cartPage.submitProcessCheckout();
      await checkoutPage.checkAddressDetails(checkoutPage.deliveryAddressBlock, expectedAddress);
      await checkoutPage.checkAddressDetails(checkoutPage.billingAddressBlock, expectedAddress);
    });

    await test.step('Place order and enter payment details', async () => {
      await checkoutPage.fillCommentTextArea('Invoice Test Order');
      await checkoutPage.placeOrder();
      await paymentPage.fillPaymentDetails(paymentData);
      await paymentPage.submitPayment();
      await expect(paymentDonePage.orderPlacedHeading).toBeVisible();
    });

    await test.step('Download and verify invoice', async () => {
      const downloadPromise = paymentDonePage.page.waitForEvent('download');
      await paymentDonePage.downloadInvoiceBtn.click();
      const download = await downloadPromise;
      
      expect(download.suggestedFilename()).toBe('invoice.txt');
      
      const invoicePath = await download.path();
      if (!invoicePath) {
        throw new Error('Invoice download path is unavailable');
      }
      const invoiceText = await readFile(invoicePath, 'utf8');

      const { firstName, lastName } = userData.signupForm.addressInfo;
      expect(invoiceText).toContain(`Hi ${firstName} ${lastName}, Your total purchase amount is ${expectedProduct.price}. Thank you`);
    });

    await test.step('Continue to home page and delete account', async () => {
      await paymentDonePage.continueBtn.click();
      await expect(homePage.sliderCarousel).toBeVisible();
      await homePage.openNavBarOption('deleteAccount');
      await expect(accountDeletedPage.accountDeletedTitle).toBeVisible();
      await accountDeletedPage.continueToHomePage();
    });
  });

  test('Place Order: Register while Checkout', regressionTestDetails('@checkout', '@auth'), async ({
    homePage,
    cartPage,
    loginPage,
    signupPage,
    accountCreatedPage,
    checkoutPage,
    paymentPage,
    paymentDonePage
  }) => {
    const registerUserData = createRegisterUserData();
    const paymentData = createPaymentData(registerUserData.signupForm.addressInfo);
    const expectedAddress = createExpectedAddress(registerUserData.signupForm);

    await test.step('Add product to cart', async () => {
      await homePage.productCards.addToCart(expectedProduct.name);
    });

    await test.step('Open cart', async () => {
      await homePage.addToCartModal.viewCart();
      await expect(cartPage.cartItemsTable.root).toBeVisible();
    });

    await test.step('Process checkout', async () => {
      await cartPage.submitProcessCheckout();
      await cartPage.continueToLoginPage();
    });

    await test.step('Fill all details in Signup and create account', async () => {
      await loginPage.signUp({ userName: registerUserData.userName, email: registerUserData.email });
      await signupPage.fillSignupForm(registerUserData.signupForm);
      await signupPage.submitSignupForm();
    });

    await test.step('Verify account created and continue to home page', async () => {
      await expect(accountCreatedPage.accountCreatedTitle).toBeVisible();
      await accountCreatedPage.continueToHomePage();
    });

    await test.step('Verify logged in as username at top and go to cart', async () => {
      await expect(homePage.navBar).toContainText(`Logged in as ${registerUserData.userName}`);
      await homePage.openNavBarOption('cart');
    });

    await test.step('Process checkout', async () => {
      await cartPage.submitProcessCheckout();
    });

    await test.step('Verify address and order details', async () => {
      await checkoutPage.checkAddressDetails(checkoutPage.deliveryAddressBlock, expectedAddress);
      await checkoutPage.checkAddressDetails(checkoutPage.billingAddressBlock, expectedAddress);
      await checkoutPage.cartItemsTable.expectProduct(expectedProduct);
    });

    await test.step('Enter description in comment text area and click "Place Order"', async () => {
      await checkoutPage.fillCommentTextArea('Order Message');
      await checkoutPage.placeOrder();
    });

    await test.step('Enter payment details and submit', async () => {
      await paymentPage.fillPaymentDetails(paymentData);
      await paymentPage.submitPayment();

      await expect(paymentDonePage.orderPlacedHeading).toBeVisible();
    });

    await test.step('Download and verify invoice', async () => {
      const downloadPromise = paymentDonePage.page.waitForEvent('download');
      await paymentDonePage.downloadInvoiceBtn.click();
      const download = await downloadPromise;
      expect(download.suggestedFilename()).toBe('invoice.txt');
      const invoicePath = await download.path();
      if (!invoicePath) {
        throw new Error('Invoice download path is unavailable');
      }
      const invoiceText = await readFile(invoicePath, 'utf8');

      const { firstName, lastName } = registerUserData.signupForm.addressInfo;
      expect(invoiceText).toContain(
        `Hi ${firstName} ${lastName}, Your total purchase amount is ${expectedProduct.price}. Thank you`
      );
    });

    await test.step('Continue to home page', async () => {
      await paymentDonePage.continueBtn.click();

      await expect(homePage.sliderCarousel).toBeVisible();
    });
  });

  test('Place Order: Login before Checkout', regressionTestDetails('@checkout', '@auth'), async ({
    homePage,
    loginPage,
    cartPage,
    checkoutPage,
    paymentPage,
    paymentDonePage,
    registeredUser
  }) => {
    const { userName, email, password } = registeredUser;
    const expectedAddress = createExpectedAddress(registeredUser.signupForm);
    const paymentData = createPaymentData(registeredUser.signupForm.addressInfo);

    await test.step('Open login page and log in as registered user', async () => {
      await homePage.openNavBarOption('login');
      await loginPage.login({ email, password });
      await expect(homePage.navBar).toContainText(`Logged in as ${userName}`);
    });

    await test.step('Add product to cart', async () => {
      await homePage.productCards.addToCart(expectedProduct.name);
    });

    await test.step('Open cart', async () => {
      await homePage.addToCartModal.viewCart();
      await expect(cartPage.cartItemsTable.root).toBeVisible();
    });

    await test.step('Process checkout', async () => {
      await cartPage.submitProcessCheckout();
    });

    await test.step('Verify address details and review order', async () => {
      await checkoutPage.checkAddressDetails(checkoutPage.deliveryAddressBlock, expectedAddress);
      await checkoutPage.checkAddressDetails(checkoutPage.billingAddressBlock, expectedAddress);
      await checkoutPage.cartItemsTable.expectProduct(expectedProduct);
    });

    await test.step('Enter order description and place order', async () => {
      await checkoutPage.fillCommentTextArea('Order Message');
      await checkoutPage.placeOrder();
    });

    await test.step('Enter payment details and confirm order', async () => {
      await paymentPage.fillPaymentDetails(paymentData);
      await paymentPage.submitPayment();

      await expect(paymentDonePage.orderPlacedHeading).toBeVisible();
    });
  });

  test('Remove products from cart', regressionTestDetails('@cart'), async ({
    homePage,
    cartPage
  }) => {
    await test.step('Add product to cart', async () => {
      await homePage.productCards.addToCart(expectedProduct.name);
    });

    await test.step('Open cart', async () => {
      await homePage.addToCartModal.viewCart();
      await expect(cartPage.cartItemsTable.root).toBeVisible();
    });

    await test.step('Remove product from cart', async () => {
      await cartPage.cartItemsTable.removeProduct(expectedProduct.name);
      await cartPage.cartItemsTable.expectProductNotPresent(expectedProduct.name);
    });
  });
});
