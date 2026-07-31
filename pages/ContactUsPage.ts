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

  constructor(page: Page) {
    super(page);
    this.title = this.page.getByRole('heading', { name: 'Get In Touch' });
    this.nameInput = this.page.getByTestId('name');
    this.emailInput = this.page.getByTestId('email');
    this.subjectInput = this.page.getByTestId('subject');
    this.messageTextArea = this.page.getByTestId('message');
    this.uploadFileInput = this.page.locator('input[type="file"]');
    this.submitBtn = this.page.getByTestId('submit-button');
  }

  private async uploadFile(path: string) {
    await this.uploadFileInput.setInputFiles(path);
  }
  
  private async fillPageFields(data: ContactUsData) {
    await this.nameInput.fill(data.name);
    await this.emailInput.fill(data.email);
    await this.subjectInput.fill(data.subject);
    await this.messageTextArea.fill(data.message);
  }

  async submitContactUs(data: ContactUsData, path: string) {
    await this.fillPageFields(data);
    await this.uploadFile(path);
    await this.submitBtn.click();
  }
}