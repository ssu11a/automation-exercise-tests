import { test, expect } from '@fixtures';

test('Product can be added to cart', {
  tag: ['@smoke', '@cart'],
  annotation: [
    { type: '@allure.label.severity', description: 'critical' },
    { type: 'description', description: 'A shopper can add a product to the cart and see its details.' }
  ]
}, async ({
  homePage,
  cartPage
}) => {
  const product = { name: 'Blue Top', price: 500, quantity: 1 };

  await homePage.goto();
  await homePage.productCards.addToCart(product.name);
  await homePage.addToCartModal.viewCart();

  await expect(cartPage.cartItemsTable.root).toBeVisible();
  await cartPage.cartItemsTable.expectProduct(product);
});
