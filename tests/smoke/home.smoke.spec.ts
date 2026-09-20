import { test, expect } from '@fixtures';

test('Home page and primary navigation', {
  tag: ['@smoke', '@navigation'],
  annotation: [
    { type: '@allure.label.severity', description: 'critical' },
    { type: 'description', description: 'The home page is available and navigation to the product catalogue works.' }
  ]
}, async ({ homePage, productsPage }) => {
  await homePage.goto();

  await expect(homePage.logo).toBeVisible();
  await expect(homePage.sliderCarousel).toBeVisible();

  await homePage.openNavBarOption('products');
  await expect(productsPage.title).toHaveText('All Products');
});
