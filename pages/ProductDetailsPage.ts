import { Locator, Page } from 'playwright';
import { BasePage } from './BasePage';

export class ProductDetailsPage extends BasePage {
  readonly productInformation: Locator;
  readonly productName: Locator;
  readonly category: Locator;
  readonly price: Locator;
  readonly availability: Locator;
  readonly condition: Locator;
  readonly brand: Locator;

  constructor(page: Page) {
    super(page);
    this.productInformation = this.page.locator('.product-information');
    this.productName = this.productInformation.getByRole('heading', {
      level: 2
    });
    this.category = this.productInformation.getByText(/^Category:/);
    this.price = this.productInformation.locator(':scope > span > span');
    this.availability = this.productInformation.getByText(/^Availability:/);
    this.condition = this.productInformation.getByText(/^Condition:/);
    this.brand = this.productInformation.getByText(/^Brand:/);
  }
}
