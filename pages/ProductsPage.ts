import { Locator, Page } from "playwright";
import { BasePage } from "./BasePage";

export class ProductsPage extends BasePage {
  readonly title: Locator;
  readonly productCard: Locator;
  readonly viewProductBtn: Locator;

  constructor(page: Page) {
    super(page);
    this.title = this.page.getByRole('heading', { name: 'All Products', exact: true });
    this.productCard = this.page.locator('.product-image-wrapper');
    this.viewProductBtn = this.page.locator('.choose').locator('a');
  }

  async openProductByIndex(index: number) {
    await this.productCard
      .nth(index)
      .getByRole('link', { name: 'View Product' })
      .click();
  }
}
