import { Locator } from 'playwright';

export class ProductCardComponent {
  private readonly root: Locator;
  readonly name: Locator;
  readonly addToCartBtn: Locator;
  readonly addToCartRecomendedProductBtn: Locator;
  readonly viewProductLink: Locator;

  constructor(root: Locator) {
    this.root = root;
    this.name = root.locator('.productinfo p');
    this.addToCartBtn = root.locator('.product-overlay .add-to-cart');
    this.addToCartRecomendedProductBtn = root.locator('.add-to-cart');
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

  async addToCart(productName: string, recomendedItem: boolean = false) {
    if (recomendedItem) {
      const productCard = new ProductCardComponent(this.getByName(productName));

      await productCard.name.waitFor();

      await productCard.addToCartRecomendedProductBtn.click();
    } else {
      const productCard = new ProductCardComponent(this.getByName(productName));
  
      await productCard.root.hover();
      await productCard.addToCartBtn.click(); 
    }
  }

  async openDetails(productName: string) {
    const productCard = new ProductCardComponent(this.getByName(productName));

    await productCard.viewProductLink.click();
  }
}
