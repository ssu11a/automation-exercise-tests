import { Locator, Page } from "playwright";
import { BasePage } from "./BasePage";

export class AccountCreatedPage extends BasePage {
  readonly accountCreatedTitle: Locator;
  readonly continueBtn: Locator;

  constructor(page: Page) {
    super(page);
    this.accountCreatedTitle = this.page.getByTestId('account-created');
    this.continueBtn = this.page.getByTestId('continue-button');
  }

  async continueAfterAccountCreation() {
    await this.continueBtn.click();
  }
}
