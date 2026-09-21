import { test, expect, regressionTestDetails } from "@fixtures";
import { createReviewData } from "@testData";

test.beforeEach(async ({ homePage }) => {
  await test.step('Open the home page', async () => {
    await homePage.goto();
    await expect(homePage.logo).toBeVisible();
  });
});

test.describe('Actions with products', () => {
  test.beforeEach(async ({ homePage, productsPage }) => {
    await test.step('Open the products page', async () => {
      await homePage.openNavBarOption('products');
      await expect(productsPage.title).toHaveText('All Products');
    });
  });

  test('Verify All Products and product detail page', regressionTestDetails('@catalog'), async ({
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

  test('Search product', regressionTestDetails('@catalog'), async ({ productsPage }) => {
    await test.step('Enter product name in search input and click search button', async () => {
      await productsPage.searchProduct('Blue Top');
      await expect(productsPage.searchedProductsTitle).toBeVisible();
      await expect(productsPage.productCards.getByName('Blue Top')).toBeVisible();
    });
  });

  // eslint-disable-next-line playwright/expect-expect
  test('Add Products in Cart', regressionTestDetails('@catalog', '@cart'), async ({ productsPage, cartPage }) => {
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

  test('Verify Product quantity in Cart', regressionTestDetails('@catalog', '@cart'), async ({ productsPage, productDetailsPage, cartPage }) => {
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

  test('Search Products and Verify Cart After Login', regressionTestDetails('@catalog', '@cart', '@auth'), async ({
    productsPage,
    cartPage,
    loginPage,
    homePage,
    registeredUser
  }) => {
    test.slow();

    const { userName, email, password } = registeredUser;
    let productNames: string[];

    await test.step('Search product', async () => {
      await productsPage.searchProduct('T-shirt');
      await expect(productsPage.searchedProductsTitle).toBeVisible();
      await productsPage.page.waitForLoadState('load');
    });

    await test.step('Verify all product names contain "T-shirt"', async () => {
      const productNames = productsPage.productCards.name;

      for (const productName of await productNames.all()) {
        await expect(productName).toContainText('T-shirt', { ignoreCase: true });
      }
    });

    await test.step('Add all searched products to cart', async () => {
      productNames = (await productsPage.productCards.name.allTextContents())
        .map(name => name.trim());
      expect(productNames.length).toBeGreaterThan(0);

      for (const productName of productNames) {
        await productsPage.productCards.addToCart(productName);
        await productsPage.addToCartModal.continueShopping();
      }
    });

    await test.step('Open cart and verify all searched products are visible', async () => {
      await productsPage.openNavBarOption('cart');

      for (const productName of productNames) {
        await expect(cartPage.cartItemsTable.getProductRow(productName).root).toBeVisible();
      }
    });

    await test.step('Open Signup / Login and log in as registered user', async () => {
      await cartPage.openNavBarOption('login');
      await expect(loginPage.loginTitle).toBeVisible();
      await loginPage.login({ email, password });
      await expect(homePage.navBar).toContainText(`Logged in as ${userName}`);
    });

    await test.step('Open cart again and verify products are still visible after login', async () => {
      await homePage.openNavBarOption('cart');

      for (const productName of productNames) {
        await expect(cartPage.cartItemsTable.getProductRow(productName).root).toBeVisible();
      }
    });
  });

  test('Add review on product', regressionTestDetails('@catalog'), async ({productsPage, productDetailsPage}) => {
    await test.step('Open card details page', async () => {
      await productsPage.productCards.openDetails('Blue Top');

      await expect(productDetailsPage.reviewTitle).toBeVisible();
    });

    await test.step('Fill review and submit', async () => {
      const reviewData = createReviewData();

      await productDetailsPage.fillReviewDataAndSubmit(reviewData);

      await expect(productDetailsPage.reviewSuccessAlert).toBeVisible();
    });
  })
});

test.describe('Products categories and brands', () => {
  test('View categories products', regressionTestDetails('@catalog'), async ({ productsPage }) => {
    await test.step('Open subcategory - dress', async () => {
      await productsPage.leftSidebar.openSubcategory('Women', 'Dress');
      const productsCards = await productsPage.productCards.count();

      await expect(productsPage.title).toHaveText('Women -  Dress Products');
      expect(productsCards).toBeGreaterThan(0);
    });

    await test.step('Open subcategory - jeans', async () => {
      await productsPage.leftSidebar.openSubcategory('Men', 'Jeans');
      const productsCards = await productsPage.productCards.count();

      await expect(productsPage.title).toHaveText('Men -  Jeans Products');
      expect(productsCards).toBeGreaterThan(0);
    });
  });

  test('View brands products', regressionTestDetails('@catalog'), async ({ productsPage }) => {
    await test.step('Open brand - Polo', async () => {
      await productsPage.leftSidebar.openBrand('Polo');
      const productsCards = productsPage.productCards;

      await expect(productsPage.title).toHaveText('Brand -  Polo Products');
      await expect(productsCards.root).toHaveCount(6);
    });

    await test.step('Open brand - H&M', async () => {
      await productsPage.leftSidebar.openBrand('H&M');
      const productsCards = productsPage.productCards;

      await expect(productsPage.title).toHaveText('Brand -  H&M Products');
      await expect(productsCards.root).toHaveCount(5);
    });
  });
});

test('Add to cart from recommended items', regressionTestDetails('@catalog', '@cart'), async ({ homePage, cartPage }) => {
  const expectedProduct = {
    name: 'Blue Top',
    price: 500,
    quantity: 1
  };

  await test.step('Scroll to recommended items', async () => {
    await homePage.recomendedItems.scrollIntoViewIfNeeded();

    await expect(homePage.recomendedItems).toContainText('recommended items');
  });

  await test.step('Add recommended item to cart', async () => {
    await homePage.recomendedItemsCards.addToCart('Blue Top', true);

    await homePage.addToCartModal.viewCart();
  });

  await test.step('Verify that product is displayed in cart page', async () => {
    await cartPage.cartItemsTable.expectProduct(expectedProduct);
  });
});
