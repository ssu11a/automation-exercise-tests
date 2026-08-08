import { Locator } from 'playwright';

export class ProductCardComponent {
  private readonly root: Locator;

  constructor(root: Locator) {
    this.root = root;
  }

  async count(): Promise<number> {
    return this.root.count();
  }

  getByName(productName: string): Locator {
    return this.root
      .locator('.productinfo')
      .getByText(productName, { exact: true })
      .locator('xpath=ancestor::div[contains(concat(" ", normalize-space(@class), " "), " product-image-wrapper ")][1]');
  }

  async addToCart(productName: string) {
    const productCard = this.getByName(productName);

    await productCard.hover();
    await productCard.locator('.product-overlay .add-to-cart').click();
  }

  async openDetails(productName: string) {
    await this.getByName(productName)
      .locator('.choose')
      .getByRole('link', { name: 'View Product' })
      .click();
  }
}
