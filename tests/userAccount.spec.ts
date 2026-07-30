import { test, expect } from "../fixtures/test";
import { createRegisterUserData } from "../testData/registerUserData";

test.describe('Login and Signup', () => {
  test('Register user', async ({
    basePage,
    loginPage,
    signupPage,
    accountCreatedPage,
    accountDeletedPage
  }) => {
    const { userName, email, signupForm } = createRegisterUserData();

    await test.step('Open the home page', async () => {
      await basePage.goto();
      await expect(basePage.logo).toBeVisible();
    });

    await test.step('Open the signup page', async () => {
      await basePage.openNavBarOption('login');
      await expect(loginPage.signupTitle).toBeVisible();
    });

    await test.step('Start registration with a new user', async () => {
      await loginPage.signUp({ userName, email });
      await expect(signupPage.accountInfoFormTitle).toBeVisible();
    });

    await test.step('Fill in the registration form', async () => {
      await signupPage.fillSignupForm(signupForm);
    });

    await test.step('Create the account', async () => {
      await signupPage.submitSignupForm();
      await expect(accountCreatedPage.accountCreatedTitle).toBeVisible();
    });

    await test.step('Continue as the registered user', async () => {
      await accountCreatedPage.continueAfterAccountCreation();
      await expect(basePage.navBar).toContainText(`Logged in as ${userName}`);
    });

    await test.step('Delete the account', async () => {
      await basePage.openNavBarOption('deleteAccount');
      await expect(accountDeletedPage.accountDeletedTitle).toBeVisible();
    });
  });
});
