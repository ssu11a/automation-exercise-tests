import { test as base } from '@playwright/test';
import { AccountCreatedPage } from '../pages/AccountCreatedPage';
import { AccountDeletedPage } from '../pages/AccountDeletedPage';
import { HomePage } from '../pages/HomePage';
import { LoginPage } from '../pages/LoginPage';
import { SignupPage } from '../pages/SignupPage';
import { ContactUsPage } from '../pages/ContactUsPage';
import { TestCasesPage } from '../pages/TestCasesPage';
import { ProductsPage } from '../pages/ProductsPage';
import { ProductDetailsPage } from '../pages/ProductDetailsPage';
import { CartPage } from '../pages/CartPage';
import { CheckoutPage } from '../pages/CheckoutPage';
import { PaymentPage } from '../pages/PaymentPage';
import { PaymentDonePage } from '../pages/PaymentDonePage';


const FUNDING_CHOICES_URL =
  /^https:\/\/fundingchoicesmessages\.google\.com\//;

interface PageObjectFixtures {
  homePage: HomePage;
  loginPage: LoginPage;
  signupPage: SignupPage;
  accountCreatedPage: AccountCreatedPage;
  accountDeletedPage: AccountDeletedPage;
  contactUsPage: ContactUsPage;
  testCasesPage: TestCasesPage;
  productsPage: ProductsPage;
  paymentPage: PaymentPage;
  productDetailsPage: ProductDetailsPage;
  cartPage: CartPage;
  checkoutPage: CheckoutPage;
  paymentDonePage: PaymentDonePage;
}

export const test = base.extend<PageObjectFixtures>({
  page: async ({ page }, use) => {
    await page.context().route(FUNDING_CHOICES_URL, route => route.abort());
    await use(page);
  },
  homePage: async ({ page }, use) => {
    await use(new HomePage(page));
  },
  loginPage: async ({ page }, use) => {
    await use(new LoginPage(page));
  },
  signupPage: async ({ page }, use) => {
    await use(new SignupPage(page));
  },
  accountCreatedPage: async ({ page }, use) => {
    await use(new AccountCreatedPage(page));
  },
  accountDeletedPage: async ({ page }, use) => {
    await use(new AccountDeletedPage(page));
  },
  contactUsPage: async ({ page }, use) => {
    await use(new ContactUsPage(page));
  },
  testCasesPage: async ({ page }, use) => {
    await use(new TestCasesPage(page));
  },
  productsPage: async ({ page }, use) => {
    await use(new ProductsPage(page));
  },
  productDetailsPage: async ({ page }, use) => {
    await use(new ProductDetailsPage(page));
  },
  cartPage: async ({ page }, use) => {
    await use(new CartPage(page));
  },
  checkoutPage: async ({ page }, use) => {
    await use(new CheckoutPage(page));
  },
  paymentPage: async ({ page }, use) => {
    await use(new PaymentPage(page));
  },
  paymentDonePage: async ({ page }, use) => {
    await use(new PaymentDonePage(page));
  }
});
