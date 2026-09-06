import { test, expect } from "../fixtures/test";
import {
  createExpectedAddress,
  createRegisterUserData
} from '../testData/registerUserData';
import { createPaymentData } from '../testData/paymentData';

test.beforeEach(async ({ homePage }) => {
  await test.step('Open the home page', async () => {
    await homePage.goto();
    await expect(homePage.logo).toBeVisible();
  });
});

test.describe('Order cases', async () => {
  const expectedProduct = {
    name: 'Blue Top',
    price: 500,
    quantity: 1,
  };

  test('Place Order: Register while Checkout', async ({
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
      const invoiceStream = await download.createReadStream();

      expect(download.suggestedFilename()).toBe('invoice.txt');
      expect(invoiceStream).not.toBeNull();

      let invoiceText = '';
      for await (const chunk of invoiceStream!) {
        invoiceText += chunk.toString();
      }

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

  test('Place Order: Login before Checkout', async ({
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

  test('Remove products from cart', async ({
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
