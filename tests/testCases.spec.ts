import { test, expect } from "../fixtures/test";

test('Verify Test Cases Page', async ({
  homePage,
  testCasesPage
}) => {
  await test.step('Open the test cases page', async () => {
    await homePage.goto();
    await homePage.openNavBarOption('testCases');
    await expect(testCasesPage.title).toBeVisible();
  });
});
