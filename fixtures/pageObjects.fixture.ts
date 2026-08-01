import { test as base } from '@playwright/test';
import { AccountCreatedPage } from '../pages/AccountCreatedPage';
import { AccountDeletedPage } from '../pages/AccountDeletedPage';
import { HomePage } from '../pages/HomePage';
import { LoginPage } from '../pages/LoginPage';
import { SignupPage } from '../pages/SignupPage';
import { ContactUsPage } from '../pages/ContactUsPage';
import { TestCasesPage } from '../pages/TestCasesPage';

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
  }
});
