# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: regression/contactUs.spec.ts >> Contact Us Form
- Location: tests/regression/contactUs.spec.ts:10:5

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: locator('#slider-carousel')
Expected: visible
Timeout: 5000ms
Error: element(s) not found

Call log:
  - Expect "toBeVisible" with timeout 5000ms
  - waiting for locator('#slider-carousel')

```

```yaml
- heading "This website is under heavy load (queue full)" [level=2]
- paragraph: We're sorry, too many people are accessing this website at the same time. We're working on this problem. Please try again later.
```

# Test source

```ts
  1  | import { resolve } from 'node:path';
  2  | import { test, expect, regressionTestDetails } from '@fixtures';
  3  | import { createContactUsData } from '@testData';
  4  | 
  5  | const CONTACT_US_ATTACHMENT = resolve(
  6  |   __dirname,
  7  |   '../../testData/attachments/contactUsFile.txt'
  8  | );
  9  | 
  10 | test('Contact Us Form', regressionTestDetails('@support'), async ({
  11 |   homePage,
  12 |   contactUsPage
  13 | }) => {
  14 |   const data = createContactUsData();
  15 | 
  16 |   await test.step('Open the home page', async () => {
  17 |     await homePage.goto();
  18 |     await expect(homePage.logo).toBeVisible();
  19 |   });
  20 | 
  21 |   await test.step('Open the contact us page', async () => {
  22 |     await homePage.openNavBarOption('contactUs');
  23 |   });
  24 | 
  25 |   await test.step('Fill in the contact us form', async () => {
  26 |     await contactUsPage.fillContactUsForm(data);
  27 |   });
  28 | 
  29 |   await test.step('Upload an attachment', async () => {
  30 |     await contactUsPage.uploadAttachment(CONTACT_US_ATTACHMENT);
  31 |     await expect(contactUsPage.uploadFileInput).toHaveValue(
  32 |       /contactUsFile\.txt$/
  33 |     );
  34 |   });
  35 | 
  36 |   await test.step('Submit the contact us form', async () => {
  37 |     await contactUsPage.submitContactUsForm();
  38 |     await expect(contactUsPage.successSubmit).toBeVisible();
  39 |   });
  40 | 
  41 |   await test.step('Return to home page', async () => {
  42 |     await contactUsPage.returnToHomePage();
> 43 |     await expect(homePage.sliderCarousel).toBeVisible();
     |                                           ^ Error: expect(locator).toBeVisible() failed
  44 |   });
  45 | });
  46 | 
```