import { test, expect } from "../fixtures/test";

test('Contact Us Form', async ({
  basePage,
  contactUsPage
}) => {
  await test.step('Open the home page', async () => {
    await basePage.goto();
    await expect(basePage.logo).toBeVisible();
  });

  await test.step('Open the contact us page', async () => {
    await basePage.openNavBarOption('contactUs');
  });
});