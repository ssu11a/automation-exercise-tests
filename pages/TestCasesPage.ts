import { Locator, Page } from "playwright";
import { BasePage } from "./BasePage";

export class TestCasesPage extends BasePage {
  readonly title: Locator;

  constructor(page: Page) {
    super(page);
    this.title = this.page.getByRole('heading', { name: 'Test Cases', exact: true });
  }
}