import { test, expect } from "../fixtures/test";

test.beforeEach(async ({ homePage, productsPage }) => {
  await test.step('Open the home page', async () => {
    await homePage.goto();
    await expect(homePage.logo).toBeVisible();
  });

  await test.step('Open the products page', async () => {
    await homePage.openNavBarOption('products');
    await expect(productsPage.title).toBeVisible();
  });
});

test.describe('Actions with products', () => {
  test('Verify All Products and product detail page', async ({
    productsPage,
    productDetailsPage
  }) => {
    await test.step('Ensure that the product list is visible', async () => {
      const productCards = await productsPage.productCard.count();

      expect(productCards).toBeGreaterThan(0);
    });

    await test.step('Click on "View Product" of first product', async () => {
      await productsPage.openProductByIndex(0);
      await expect(productsPage.page).toHaveURL('product_details/1');
    });

    await test.step('Verify that product details are visible', async () => {
      await expect(productDetailsPage.productName).toBeVisible();
      await expect(productDetailsPage.category).toBeVisible();
      await expect(productDetailsPage.price).toBeVisible();
      await expect(productDetailsPage.availability).toBeVisible();
      await expect(productDetailsPage.condition).toBeVisible();
      await expect(productDetailsPage.brand).toBeVisible();
    });
  });
});
