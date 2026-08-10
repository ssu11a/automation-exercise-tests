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
      const productCards = await productsPage.productCards.count();

      expect(productCards).toBeGreaterThan(0);
    });

    await test.step('Click on "View Product" of first product', async () => {
      await productsPage.productCards.openDetails('Blue Top');
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
      await expect(productsPage.productCards.getByName('Blue Top')).toBeVisible();
    });
  });

  test('Add Products in Cart', async ({ productsPage, cartPage }) => {
    const expectedProducts = [
      { name: 'Blue Top', price: 500, quantity: 1 },
      { name: 'Men Tshirt', price: 400, quantity: 1 }
    ];

    await test.step('Hover over first product and click "Add to cart"', async () => {
      await productsPage.productCards.addToCart(expectedProducts[0].name);
      await productsPage.addToCartModal.continueShopping();
      await productsPage.productCards.addToCart(expectedProducts[1].name);
      await productsPage.addToCartModal.viewCart();
    });

    await test.step('Verify products, prices, quantities and totals in the cart', async () => {
      for (const product of expectedProducts) {
        await cartPage.cartItemsTable.expectProduct(product);
      }
    });
  });

  test('Verify Product quantity in Cart', async ({ productsPage, productDetailsPage, cartPage }) => {
    const expectedProduct = {
      name: 'Blue Top',
      price: 500,
      quantity: 4
    };

    await test.step('Click on "View Product" of first product', async () => {
      await productsPage.productCards.openDetails(expectedProduct.name);
      await expect(productsPage.page).toHaveURL('product_details/1');
    });

    await test.step('Increase quantity to 4 and add product to cart', async () => {
      await productDetailsPage.changeQuantity(expectedProduct.quantity);
      await productDetailsPage.addProductToCart();
      await productDetailsPage.addToCartModal.viewCart();
    });

    await test.step('Verify that product is displayed in cart page with exact quantity', async () => {
      await cartPage.cartItemsTable.expectProduct(expectedProduct);
    });
  });
});
