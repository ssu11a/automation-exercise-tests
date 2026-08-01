import { test, expect } from '../fixtures/test';
import { createRegisterUserData } from '../testData/registerUserData';

test.beforeEach(async ({ homePage, loginPage }) => {
  await test.step('Open the home page', async () => {
    await homePage.goto();
    await expect(homePage.logo).toBeVisible();
  });

  await test.step('Open the login page', async () => {
    await homePage.openNavBarOption('login');
    await expect(loginPage.loginTitle).toBeVisible();
    await expect(loginPage.signupTitle).toBeVisible();
  });
});

test.describe('User registration', () => {
  test('Register user', async ({
    homePage,
    loginPage,
    signupPage,
    accountCreatedPage,
    accountDeletedPage
  }) => {
    const { userName, email, signupForm } = createRegisterUserData();

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
      await accountCreatedPage.continueToHomePage();
      await expect(homePage.navBar).toContainText(`Logged in as ${userName}`);
    });

    await test.step('Delete the account', async () => {
      await homePage.openNavBarOption('deleteAccount');
      await expect(accountDeletedPage.accountDeletedTitle).toBeVisible();
    });
  });

  test('Register User with existing email', async ({
    loginPage,
    registeredUser
  }) => {
    const { email } = registeredUser;

    await test.step('Signup with already registered email address', async () => {
      await loginPage.signUp({ userName: 'userName', email });
      await expect(loginPage.emailExistSpan).toBeVisible();
    });
  });
});

test.describe('User authentication', () => {
  test('Login User with correct email and password', async ({
    homePage,
    loginPage,
    registeredUser
  }) => {
    const { userName, email, password } = registeredUser;

    await test.step('Login user', async () => {
      await loginPage.login({ email, password });
      await expect(homePage.navBar).toContainText(`Logged in as ${userName}`);
    });
  });

  test('Login User with incorrect email and password', async ({
    loginPage
  }) => {
    await test.step('Login user', async () => {
      await loginPage.login({
        email: 'incorrect@example.com',
        password: 'incorrect'
      });
      await expect(loginPage.invalidSpan).toBeVisible();
    });
  });

  test('Logout User', async ({
    homePage,
    loginPage,
    registeredUser
  }) => {
    const { userName, email, password } = registeredUser;

    await test.step('Login user', async () => {
      await loginPage.login({ email, password });
      await expect(homePage.navBar).toContainText(`Logged in as ${userName}`);
    });

    await test.step('Logout user', async () => {
      await homePage.openNavBarOption('logout');
      await expect(loginPage.loginTitle).toBeVisible();
    });
  });
});
