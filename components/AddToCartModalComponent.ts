import { Locator, Page } from 'playwright';

export class AddToCartModalComponent {
  private readonly modal: Locator;
  private readonly viewCartBtn: Locator;
  private readonly continueShoppingBtn: Locator;

  constructor(page: Page) {
    this.modal = page.locator('.modal-content');
    this.viewCartBtn = this.modal.getByRole('link', { name: 'View Cart' });
    this.continueShoppingBtn = this.modal.getByRole('button', {
      name: 'Continue Shopping'
    });
  }

  async viewCart() {
    await this.viewCartBtn.click();
    await this.modal.page().waitForLoadState('load');
  }

  async continueShopping() {
    await this.continueShoppingBtn.click();
  }
}
