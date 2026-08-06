import { Locator, Page } from 'playwright';

export class AddToCartModalComponent {
  private readonly modal: Locator;
  private readonly viewCartButton: Locator;
  private readonly continueShoppingButton: Locator;

  constructor(page: Page) {
    this.modal = page.locator('.modal-content');
    this.viewCartButton = this.modal.getByRole('link', { name: 'View Cart' });
    this.continueShoppingButton = this.modal.getByRole('button', {
      name: 'Continue Shopping'
    });
  }

  async viewCart() {
    await this.viewCartButton.click();
  }

  async continueShopping() {
    await this.continueShoppingButton.click();
  }
}
