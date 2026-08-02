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

  test('Search product', async ({ productsPage }) => {
    await test.step('Enter product name in search input and click search button', async () => {
      await productsPage.searchProduct('Blue Top');
      await expect(productsPage.searchedProductsTitle).toBeVisible();
      await expect(productsPage.productCard).toContainText('Blue Top');
    });
  });

  test('Add Products in Cart', async ({ productsPage, cartPage }) => {
    const expectedProducts = [
      { name: 'Blue Top', price: 500, quantity: 1 },
      { name: 'Men Tshirt', price: 400, quantity: 1 }
    ];

    await test.step('Hover over first product and click "Add to cart"', async () => {
      await productsPage.addProductToCart(0);
      await productsPage.continueShopping();
      await productsPage.addProductToCart(1);
      await productsPage.viewCart();
    });

    await test.step('Verify products, prices, quantities and totals in the cart', async () => {
      for (const product of expectedProducts) {
        const productRow = cartPage.getProductRow(product.name);

        await expect(productRow).toBeVisible();
        await expect(productRow.locator('.cart_price')).toHaveText(`Rs. ${product.price}`);
        await expect(productRow.locator('.cart_quantity')).toHaveText(String(product.quantity));
        await expect(productRow.locator('.cart_total')).toHaveText(
          `Rs. ${product.price * product.quantity}`
        );
      }
    });
  });
});
