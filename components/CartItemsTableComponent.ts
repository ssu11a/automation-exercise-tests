import { expect, Locator } from 'playwright/test';

export interface ExpectedCartProduct {
  name: string;
  price: number;
  quantity: number;
}

class CartProductRowComponent {
  readonly root: Locator;
  readonly price: Locator;
  readonly quantity: Locator;
  readonly total: Locator;
  readonly deleteButton: Locator;

  constructor(root: Locator) {
    this.root = root;
    this.price = this.root.locator('.cart_price');
    this.quantity = this.root.locator('.cart_quantity');
    this.total = this.root.locator('.cart_total');
    this.deleteButton = this.root.locator('.cart_quantity_delete');
  }
}

export class CartItemsTableComponent {
  readonly root: Locator;
  readonly productLinks: Locator;

  constructor(root: Locator) {
    this.root = root;
    this.productLinks = this.root.getByRole('link');
  }

  getProductRow(productName: string): CartProductRowComponent {
    const productRow = this.productLinks
      .filter({ hasText: productName })
      .locator('xpath=ancestor::tr[1]');

    return new CartProductRowComponent(productRow);
  }

  async expectProduct(product: ExpectedCartProduct): Promise<void> {
    const productRow = this.getProductRow(product.name);

    await expect(productRow.root).toBeVisible();
    await expect(productRow.price).toHaveText(`Rs. ${product.price}`);
    await expect(productRow.quantity).toHaveText(String(product.quantity));
    await expect(productRow.total).toHaveText(
      `Rs. ${product.price * product.quantity}`
    );
  }

  async removeProduct(productName: string): Promise<void> {
    const productRow = this.getProductRow(productName);
    const productId = await productRow.deleteButton.getAttribute('data-product-id');

    if (productId === null) {
      throw new Error(`Product ID is missing for "${productName}"`);
    }

    const deleteResponse = this.root.page().waitForResponse(
      response => response.url().includes(`/delete_cart/${productId}`) && response.ok()
    );

    await productRow.deleteButton.click();
    await deleteResponse;
  }

  async expectProductNotPresent(productName: string): Promise<void> {
    await expect.poll(
      async () => this.getProductRow(productName).root.count(),
      { timeout: 20_000 }
    ).toBe(0);
  }
}
