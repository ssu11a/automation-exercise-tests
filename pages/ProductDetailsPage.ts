import { Locator, Page } from 'playwright';
import { AddToCartModalComponent } from '../components/AddToCartModalComponent';
import { BasePage } from './BasePage';

export class ProductDetailsPage extends BasePage {
  readonly productInformation: Locator;
  readonly productName: Locator;
  readonly category: Locator;
  readonly price: Locator;
  readonly quantityInput: Locator;
  readonly addToCartBtn: Locator;
  readonly availability: Locator;
  readonly condition: Locator;
  readonly brand: Locator;
  readonly addToCartModal: AddToCartModalComponent;

  constructor(page: Page) {
    super(page);
    this.productInformation = this.page.locator('.product-information');
    this.productName = this.productInformation.getByRole('heading', {
      level: 2
    });
    this.category = this.productInformation.getByText(/^Category:/);
    this.price = this.productInformation.locator(':scope > span > span');
    this.quantityInput = this.productInformation.locator('#quantity');
    this.addToCartBtn = this.productInformation.getByRole('button', { name: 'Add to cart' });
    this.availability = this.productInformation.getByText(/^Availability:/);
    this.condition = this.productInformation.getByText(/^Condition:/);
    this.brand = this.productInformation.getByText(/^Brand:/);
    this.addToCartModal = new AddToCartModalComponent(page);
  }

  async changeQuantity(quantity: number) {
    await this.quantityInput.fill(quantity.toString());
  }

  async addProductToCart() {
    await this.page.waitForLoadState('load');
    await this.addToCartBtn.click();
  }
}
