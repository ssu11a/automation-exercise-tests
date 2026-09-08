import { Locator } from 'playwright';

export class ProductCardComponent {
  private readonly root: Locator;
  readonly names: Locator;
  readonly addToCartButton: Locator;
  readonly viewProductLink: Locator;

  constructor(root: Locator) {
    this.root = root;
    this.names = root.locator('.productinfo p');
    this.addToCartButton = root.locator('.product-overlay .add-to-cart');
    this.viewProductLink = root.getByRole('link', { name: 'View Product' });
  }

  async count(): Promise<number> {
    return this.root.count();
  }

  getByName(productName: string): Locator {
    return this.root.filter({
      has: this.root.page().getByText(productName, { exact: true })
    });
  }

  async addToCart(productName: string) {
    const productCard = new ProductCardComponent(this.getByName(productName));

    await productCard.root.hover();
    await productCard.addToCartButton.click();
  }

  async openDetails(productName: string) {
    const productCard = new ProductCardComponent(this.getByName(productName));

    await productCard.viewProductLink.click();
  }
}
