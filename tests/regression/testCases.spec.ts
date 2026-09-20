import { test, expect, regressionTestDetails } from "@fixtures";

test('Verify Test Cases Page', regressionTestDetails('@content'), async ({
  homePage,
  testCasesPage
}) => {
  await test.step('Open the test cases page', async () => {
    await homePage.goto();
    await homePage.openNavBarOption('testCases');
    await expect(testCasesPage.title).toBeVisible();
  });
});
