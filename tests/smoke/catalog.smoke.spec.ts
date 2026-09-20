import { test, expect } from '@fixtures';

test('Product catalogue and product details are available', {
  tag: ['@smoke', '@catalog'],
  annotation: [
    { type: '@allure.label.severity', description: 'critical' },
    { type: 'description', description: 'The product catalogue and key product details are available to the shopper.' }
  ]
}, async ({
  homePage,
  productsPage,
  productDetailsPage
}) => {
  await homePage.goto();
  await homePage.openNavBarOption('products');
  await expect(productsPage.title).toHaveText('All Products');

  await productsPage.productCards.openDetails('Blue Top');
  await expect(productDetailsPage.productName).toBeVisible();
  await expect(productDetailsPage.price).toBeVisible();
  await expect(productDetailsPage.availability).toBeVisible();
});
