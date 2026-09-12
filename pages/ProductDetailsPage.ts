import { Locator, Page } from 'playwright';
import { AddToCartModalComponent } from '../components/AddToCartModalComponent';
import { BasePage } from './BasePage';

export interface ReviewData {
  name: string;
  email: string;
  reviewText: string;
}

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
  readonly reviewTitle: Locator;
  readonly nameInput: Locator;
  readonly emailInput: Locator;
  readonly reviewTextArea: Locator;
  readonly submitReviewBtn: Locator;
  readonly reviewSuccessAlert: Locator;
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
    this.reviewTitle = this.page.getByText('Write Your Review');
    this.nameInput = this.page.locator('#review-form').getByPlaceholder('Your Name');
    this.emailInput = this.page.locator('#review-form').getByPlaceholder('Email Address');
    this.reviewTextArea = this.page.locator('#review-form').getByPlaceholder('Add Review Here!');
    this.submitReviewBtn = this.page.locator('#button-review');
    this.reviewSuccessAlert = this.page.getByText('Thank you for your review.');
    this.addToCartModal = new AddToCartModalComponent(page);
  }

  async changeQuantity(quantity: number) {
    await this.quantityInput.fill(quantity.toString());
  }

  async addProductToCart() {
    await this.page.waitForLoadState('load');
    await this.addToCartBtn.click();
  }

  async fillReviewDataAndSubmit(data: ReviewData) {
    await this.nameInput.fill(data.name);
    await this.emailInput.fill(data.email);
    await this.reviewTextArea.fill(data.reviewText);

    await this.submitReviewBtn.click();
  }
}
