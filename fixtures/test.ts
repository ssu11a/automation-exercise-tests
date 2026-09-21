import { expect, mergeTests } from '@playwright/test';
import { test as apiTest } from './api.fixture';
import { test as disposableAccountsTest } from './disposableAccounts.fixture';
import { test as pageObjectsTest } from './pageObjects.fixture';
import { test as registeredUserTest } from './registeredUser.fixture';

export const test = mergeTests(
  pageObjectsTest,
  registeredUserTest,
  apiTest,
  disposableAccountsTest
);

export { expect };
