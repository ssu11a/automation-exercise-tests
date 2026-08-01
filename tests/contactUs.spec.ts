import { resolve } from 'node:path';
import { test, expect } from '../fixtures/test';
import { createContactUsData } from '../testData/contactUsData';

const CONTACT_US_ATTACHMENT = resolve(
  __dirname,
  '../testData/attachments/contactUsFile.txt'
);

test('Contact Us Form', async ({
  homePage,
  contactUsPage
}) => {
  const data = createContactUsData();

  await test.step('Open the home page', async () => {
    await homePage.goto();
    await expect(homePage.logo).toBeVisible();
  });

  await test.step('Open the contact us page', async () => {
    await homePage.openNavBarOption('contactUs');
  });

  await test.step('Fill in the contact us form', async () => {
    await contactUsPage.fillContactUsForm(data);
  });

  await test.step('Upload an attachment', async () => {
    await contactUsPage.uploadAttachment(CONTACT_US_ATTACHMENT);
    await expect(contactUsPage.uploadFileInput).toHaveValue(
      /contactUsFile\.txt$/
    );
  });

  await test.step('Submit the contact us form', async () => {
    await contactUsPage.submitContactUsForm();
    await expect(contactUsPage.successSubmit).toBeVisible();
  });

  await test.step('Return to home page', async () => {
    await contactUsPage.returnToHomePage();
    await expect(homePage.sliderCarousel).toBeVisible();
  });
});
