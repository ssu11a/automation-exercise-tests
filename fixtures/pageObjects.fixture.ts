import { test as base } from '@playwright/test';
import { AccountCreatedPage } from '../pages/AccountCreatedPage';
import { AccountDeletedPage } from '../pages/AccountDeletedPage';
import { BasePage } from '../pages/BasePage';
import { LoginPage } from '../pages/LoginPage';
import { SignupPage } from '../pages/SignupPage';

const FUNDING_CHOICES_URL =
  /^https:\/\/fundingchoicesmessages\.google\.com\//;

interface PageObjectFixtures {
  basePage: BasePage;
  loginPage: LoginPage;
  signupPage: SignupPage;
  accountCreatedPage: AccountCreatedPage;
  accountDeletedPage: AccountDeletedPage;
}

export const test = base.extend<PageObjectFixtures>({
  page: async ({ page }, use) => {
    await page.context().route(FUNDING_CHOICES_URL, route => route.abort());
    await use(page);
  },
  basePage: async ({ page }, use) => {
    await use(new BasePage(page));
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
});
