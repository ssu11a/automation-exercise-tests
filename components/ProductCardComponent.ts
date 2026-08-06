import { Locator, Page } from 'playwright';

export class ProductCardComponent {
  private readonly page: Page;
  private readonly cards: Locator;

  constructor(page: Page) {
    this.page = page;
    this.cards = this.page.locator('.product-image-wrapper');
  }

  async count(): Promise<number> {
    return this.cards.count();
  }

  getByName(productName: string): Locator {
    return this.cards.filter({
      has: this.page.getByText(productName, { exact: true })
    });
  }

  async addToCart(index: number) {
    const productCard = this.cards.nth(index);

    await productCard.hover();
    await productCard.locator('.product-overlay .add-to-cart').click();
  }

  async openDetails(index: number) {
    await this.cards
      .nth(index)
      .locator('.choose')
      .getByRole('link', { name: 'View Product' })
      .click();
  }
}
