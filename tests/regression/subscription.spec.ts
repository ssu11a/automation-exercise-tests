import { test, expect, regressionTestDetails } from "@fixtures";

test.beforeEach(async ({ homePage }) => {
  await test.step('Open the home page', async () => {
    await homePage.goto();
    await expect(homePage.logo).toBeVisible();
  });
});

test.describe('Subscription cases', () => {
  test('Verify Subscription in home page', regressionTestDetails('@subscription'), async ({ homePage }) => {
    await test.step('Scroll down to footer', async () => {
      await homePage.subscribeInput.scrollIntoViewIfNeeded();
      await expect(homePage.subscribeTitle).toBeVisible();
    });

    await test.step('Enter email address in input and click arrow button', async () => {
      await homePage.subscribe('test@examole.com');
      await expect(homePage.successSubscribeSpan).toBeVisible();
    });
  });

  test('Verify Subscription in Cart page', regressionTestDetails('@subscription', '@cart'), async ({ homePage, cartPage }) => {
    await test.step('Open the cart page', async () => {
      await homePage.openNavBarOption('cart');
      await expect(cartPage.emptyCartSpan).toBeVisible();
    });

    await test.step('Enter email address in input and click arrow button', async () => {
      await cartPage.subscribe('test@example.com');
      await expect(cartPage.successSubscribeSpan).toBeVisible();
    });
  });

  test('Verify Scroll Up using "Arrow" button and Scroll Down functionality', regressionTestDetails('@navigation'), async ({ homePage }) => {
    await test.step('Scroll down to bottom of the page', async () => {
      await homePage.subscribeTitle.scrollIntoViewIfNeeded();
      await expect(homePage.subscribeTitle).toBeInViewport();
    });

    await test.step('Click scroll up button and verify page scrolled up', async () => {
      await homePage.scrollUpBtn.click();
      await expect(homePage.sliderCarousel).toBeInViewport();
      await expect(homePage.sliderCarousel).toContainText('Full-Fledged practice website for Automation Engineers');
    });
  });

  test('Verify Scroll Up without "Arrow" button and Scroll Down functionality', regressionTestDetails('@navigation'), async ({ homePage }) => {
    await test.step('Scroll down to bottom of the page', async () => {
      await homePage.subscribeTitle.scrollIntoViewIfNeeded();
      await expect(homePage.subscribeTitle).toBeInViewport();
    });

    await test.step('Scroll up to top of the page', async () => {
      await homePage.sliderCarousel.scrollIntoViewIfNeeded();
      await expect(homePage.sliderCarousel).toBeInViewport();
      await expect(homePage.sliderCarousel).toContainText('Full-Fledged practice website for Automation Engineers');
    });
  });
});

;
