import { expect, Locator } from 'playwright/test';

export interface ExpectedCartProduct {
  name: string;
  price: number;
  quantity: number;
}

export class CartItemsTableComponent {
  readonly root: Locator;

  constructor(root: Locator) {
    this.root = root;
  }

  getProductRow(productName: string): Locator {
    return this.root
      .getByRole('link', { name: productName, exact: true })
      .locator('xpath=ancestor::tr[1]');
  }

  async expectProduct(product: ExpectedCartProduct): Promise<void> {
    const productRow = this.getProductRow(product.name);

    await expect(productRow).toBeVisible();
    await expect(productRow.locator('.cart_price')).toHaveText(`Rs. ${product.price}`);
    await expect(productRow.locator('.cart_quantity')).toHaveText(String(product.quantity));
    await expect(productRow.locator('.cart_total')).toHaveText(
      `Rs. ${product.price * product.quantity}`
    );
  }
}
