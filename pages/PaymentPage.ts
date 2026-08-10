import { Locator, Page } from "playwright/test";
import { BasePage } from "./BasePage";
import type { PaymentData } from "../testData/paymentData";

export class PaymentPage extends BasePage {
  readonly nameOnCardInput: Locator;
  readonly cardNumberInput: Locator;
  readonly cvvInput: Locator;
  readonly expiryMonthInput: Locator;
  readonly expiryYearInput: Locator;
  readonly payBtn: Locator;

  constructor(page: Page) {
    super(page);
    this.nameOnCardInput = this.page.getByTestId('name-on-card');
    this.cardNumberInput = this.page.getByTestId('card-number');
    this.cvvInput = this.page.getByTestId('cvv');
    this.expiryMonthInput = this.page.getByTestId('expiry-month');
    this.expiryYearInput = this.page.getByTestId('expiry-year');
    this.payBtn = this.page.getByTestId('pay-button');
  }

  async fillPaymentDetails(data: PaymentData) {
    await this.nameOnCardInput.fill(data.nameOnCard);
    await this.cardNumberInput.fill(data.cardNumber);
    await this.cvvInput.fill(data.cvv);
    await this.expiryMonthInput.fill(data.expiryMonth);
    await this.expiryYearInput.fill(data.expiryYear);
  }

  async submitPayment() {
    await this.payBtn.click();
  }
}
