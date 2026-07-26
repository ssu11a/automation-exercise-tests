import { LoginPage } from "../pages/LoginPage";
import { SignupPage } from "../pages/SignupPage";
import { BasePage } from "../pages/BasePage";
import { test, expect } from "playwright/test";
import { userName, email } from "../consts/consts";

test.describe('Login and Signup', () => {
  test('Register user', async ({ page }) => {
    const basePage = new BasePage(page);
    const loginPage = new LoginPage(page);
    const signupPage = new SignupPage(page);

    await basePage.goto();
    await expect(basePage.logo).toBeVisible();

    await basePage.openNavBarOption('login');
    await expect(loginPage.signupTitle).toBeVisible();

    await loginPage.signUp({ userName, email });
    await expect(signupPage.accountInfoTitleForm).toBeVisible();

    
  });
});
