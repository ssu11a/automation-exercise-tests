import { Locator, Page } from "playwright";
import { BasePage } from "./BasePage";

export class CartPage extends BasePage {
  readonly emptyCartSpan: Locator;
  readonly cartInfoTable: Locator;
  readonly productDescription: Locator;
  readonly productPrice: Locator;
  readonly productQuantity: Locator;
  readonly totalProductPrice: Locator;

  constructor(page: Page) {
    super(page);
    this.emptyCartSpan = this.page.locator('#empty_cart');
    this.cartInfoTable = this.page.locator('#cart_info_table');
    this.productDescription = this.cartInfoTable.locator('.cart_description');
    this.productPrice = this.cartInfoTable.locator('.cart_price');
    this.productQuantity = this.cartInfoTable.locator('.cart_quantity');
    this.totalProductPrice = this.cartInfoTable.locator('.cart_total');
  }

  getProductRow(productName: string): Locator {
    return this.cartInfoTable.locator('tbody tr').filter({
      has: this.page.getByRole('link', { name: productName, exact: true })
    });
  }
}
