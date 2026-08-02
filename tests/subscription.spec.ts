import { test, expect } from "../fixtures/test";

test.beforeEach(async ({ homePage }) => {
  await test.step('Open the home page', async () => {
    await homePage.goto();
    await expect(homePage.logo).toBeVisible();
  });
});

test.describe('Subscription cases', async () => {
  test('Verify Subscription in home page', async ({ homePage }) => {
    await test.step('Scroll down to footer', async () => {
      await homePage.subscribeInput.scrollIntoViewIfNeeded();
      await expect(homePage.subscribeTitle).toBeVisible();
    });

    await test.step('Enter email address in input and click arrow button', async () => {
      await homePage.subscribe('test@examole.com');
      await expect(homePage.successSubscribeSpan).toBeVisible();
    });
  });

  test('Verify Subscription in Cart page', async ({ homePage, cartPage }) => {
    await test.step('Open the cart page', async () => {
      await homePage.openNavBarOption('cart');
      await expect(cartPage.emptyCartSpan).toBeVisible();
    });

    await test.step('Enter email address in input and click arrow button', async () => {
      await cartPage.subscribe('test@example.com');
      await expect(cartPage.successSubscribeSpan).toBeVisible();
    });
  });
})