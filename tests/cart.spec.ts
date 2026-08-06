import { test, expect } from "../fixtures/test";
import { createRegisterUserData } from '../testData/registerUserData';

test.beforeEach(async ({ homePage }) => {
  await test.step('Open the home page', async () => {
    await homePage.goto();
    await expect(homePage.logo).toBeVisible();
  });
});

test.describe('Order cases', async () => {
  test('Place Order: Register while Checkout', async ({
    homePage,
    cartPage,
    loginPage,
    signupPage,
    accountCreatedPage
  }) => {
    const registerUserData = createRegisterUserData();

    await test.step('Add product to cart', async () => {
      await homePage.productCards.addToCart(0);
    });
    await test.step('Open cart', async () => {
      await homePage.addToCartModal.viewCart();
      await expect(cartPage.cartInfoTable).toBeVisible();
      await expect(cartPage.getProductRow('Blue Top')).toBeVisible();
    });
    await test.step('Process checkout', async () => {
      await cartPage.processCheckoutBtn.click();
      await cartPage.registerBtn.waitFor();
      await cartPage.registerBtn.click();
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
  });
});
