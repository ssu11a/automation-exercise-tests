import { test, expect } from '@fixtures';
import { createPaymentData } from '@testData';

test('Registered user can place an order', {
  tag: ['@smoke', '@checkout'],
  annotation: [
    { type: '@allure.label.severity', description: 'blocker' },
    { type: 'description', description: 'A registered user can complete checkout and pay for an order.' }
  ]
}, async ({
  homePage,
  loginPage,
  cartPage,
  checkoutPage,
  paymentPage,
  paymentDonePage,
  registeredUser
}) => {
  const { userName, email, password, signupForm } = registeredUser;
  const product = { name: 'Blue Top', price: 500, quantity: 1 };

  await homePage.goto();
  await homePage.openNavBarOption('login');
  await loginPage.login({ email, password });
  await expect(homePage.navBar).toContainText(`Logged in as ${userName}`);

  await homePage.productCards.addToCart(product.name);
  await homePage.addToCartModal.viewCart();
  await cartPage.cartItemsTable.expectProduct(product);

  await cartPage.submitProcessCheckout();
  await checkoutPage.cartItemsTable.expectProduct(product);
  await checkoutPage.placeOrder();

  await paymentPage.fillPaymentDetails(createPaymentData(signupForm.addressInfo));
  await paymentPage.submitPayment();
  await expect(paymentDonePage.orderPlacedHeading).toBeVisible();
});
