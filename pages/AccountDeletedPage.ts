import { Locator, Page } from "playwright";
import { BasePage } from "./BasePage";

export class AccountDeletedPage extends BasePage {
  readonly accountDeletedTitle: Locator;
  readonly continueBtn: Locator;

  constructor(page: Page) {
    super(page);
    this.accountDeletedTitle = this.page.getByTestId('account-deleted');
    this.continueBtn = this.page.getByTestId('continue-button');
  }
}
