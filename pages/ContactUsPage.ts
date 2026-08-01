import { Locator, Page } from "playwright";
import { BasePage } from "./BasePage";

export interface ContactUsData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export class ContactUsPage extends BasePage {
  readonly title: Locator;
  readonly nameInput: Locator;
  readonly emailInput: Locator;
  readonly subjectInput: Locator;
  readonly messageTextArea: Locator;
  readonly uploadFileInput: Locator;
  readonly submitBtn: Locator;
  readonly successSubmit: Locator;
  readonly homeBtn: Locator;

  constructor(page: Page) {
    super(page);
    this.title = this.page.getByRole('heading', { name: 'Get In Touch' });
    this.nameInput = this.page.getByTestId('name');
    this.emailInput = this.page.getByTestId('email');
    this.subjectInput = this.page.getByTestId('subject');
    this.messageTextArea = this.page.getByTestId('message');
    this.uploadFileInput = this.page.locator('input[type="file"]');
    this.submitBtn = this.page.getByTestId('submit-button');
    this.successSubmit = this.page.locator(
      '#contact-page .status.alert-success'
    );
    this.homeBtn = this.page.locator('.btn-success');
  }

  async fillContactUsForm(data: ContactUsData) {
    await this.nameInput.fill(data.name);
    await this.emailInput.fill(data.email);
    await this.subjectInput.fill(data.subject);
    await this.messageTextArea.fill(data.message);
  }

  async uploadAttachment(filePath: string) {
    await this.uploadFileInput.setInputFiles(filePath);
  }

  async submitContactUsForm() {
    this.page.once('dialog', dialog => dialog.accept());
    await this.submitBtn.click();
  }

  async returnToHomePage() {
    await this.homeBtn.click();
  }
}
