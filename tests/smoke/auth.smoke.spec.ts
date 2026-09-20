import { test, expect } from '@fixtures';

test('Registered user can log in', {
  tag: ['@smoke', '@auth'],
  annotation: [
    { type: '@allure.label.severity', description: 'critical' },
    { type: 'description', description: 'A registered user can successfully sign in.' }
  ]
}, async ({
  homePage,
  loginPage,
  registeredUser
}) => {
  const { userName, email, password } = registeredUser;

  await homePage.goto();
  await homePage.openNavBarOption('login');
  await expect(loginPage.loginTitle).toBeVisible();

  await loginPage.login({ email, password });
  await expect(homePage.navBar).toContainText(`Logged in as ${userName}`);
});
