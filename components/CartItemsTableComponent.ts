import { Locator } from 'playwright';

export class CartItemsTableComponent {
  readonly root: Locator;
  readonly productDescription: Locator;
  readonly productPrice: Locator;
  readonly productQuantity: Locator;
  readonly productTotalPrice: Locator;

  constructor(root: Locator) {
    this.root = root;
    this.productDescription = this.root.locator('.cart_description');
    this.productPrice = this.root.locator('.cart_price');
    this.productQuantity = this.root.locator('.cart_quantity');
    this.productTotalPrice = this.root.locator('.cart_total');
  }

  getProductRow(productName: string): Locator {
    return this.root
      .getByRole('link', { name: productName, exact: true })
      .locator('xpath=ancestor::tr[1]');
  }

  getProductPrice(productName: string): Locator {
    return this.getProductRow(productName).locator('.cart_price');
  }

  getProductQuantity(productName: string): Locator {
    return this.getProductRow(productName).locator('.cart_quantity');
  }

  getProductTotalPrice(productName: string): Locator {
    return this.getProductRow(productName).locator('.cart_total');
  }
}
