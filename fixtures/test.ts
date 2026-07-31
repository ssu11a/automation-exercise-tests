import { expect, mergeTests } from '@playwright/test';
import { test as pageObjectsTest } from './pageObjects.fixture';
import { test as registeredUserTest } from './registeredUser.fixture';

export const test = mergeTests(pageObjectsTest, registeredUserTest);

export { expect };
