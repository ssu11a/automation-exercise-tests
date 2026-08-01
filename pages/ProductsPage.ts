import { Locator, Page } from "playwright";
import { BasePage } from "./BasePage";

export class ProductsPage extends BasePage {
  readonly title: Locator;

  constructor(page: Page) {
    super(page);
    this.title = this.page.getByRole('heading', { name: 'All Products', exact: true });
  }
}
