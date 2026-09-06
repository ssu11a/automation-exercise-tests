import { Locator, Page } from "playwright";
import { BasePage } from "./BasePage";

export class PaymentDonePage extends BasePage {
  readonly orderPlacedHeading: Locator;
  readonly orderPlacedText: Locator;
  readonly downloadInvoiceBtn: Locator;
  readonly continueBtn: Locator;

  constructor(page: Page) {
    super(page);
    this.orderPlacedHeading = this.page.getByText('Order Placed!');
    this.orderPlacedText = this.page.getByText('Congratulations! Your order has been confirmed!');
    this.downloadInvoiceBtn = this.page.getByRole('link', { name: 'Download Invoice' });
    this.continueBtn = this.page.getByRole('link', { name: 'Continue' });
  }
}