import { Locator, Page } from "playwright";
import { CartItemsTableComponent } from '../components/CartItemsTableComponent';
import { BasePage } from "./BasePage";

export class CartPage extends BasePage {
  readonly emptyCartSpan: Locator;
  readonly processCheckoutBtn: Locator;
  readonly registerBtn: Locator;
  readonly continueOnCartBtn: Locator;
  readonly cartItemsTable: CartItemsTableComponent;

  constructor(page: Page) {
    super(page);
    this.emptyCartSpan = this.page.locator('#empty_cart');
    this.processCheckoutBtn = this.page.locator('.check_out');
    this.registerBtn = this.page.getByRole('link', { name: 'Register / Login' });
    this.continueOnCartBtn = this.page.getByRole('button', { name: 'Continue On Cart' });
    this.cartItemsTable = new CartItemsTableComponent(this.page.locator('#cart_info_table'));
  }

  async submitProcessCheckout() {
    await this.page.waitForLoadState('load');
    await this.processCheckoutBtn.click();
  }

  async continueToLoginPage() {
    await this.registerBtn.click();
  }
}
