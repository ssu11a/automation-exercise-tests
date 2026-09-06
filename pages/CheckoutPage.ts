import { Locator, Page, expect } from "playwright/test";
import { BasePage } from "./BasePage";
import { CartItemsTableComponent } from "../components/CartItemsTableComponent";

interface AddressData {
  name: string;
  company?: string;
  firstAddress: string;
  secondAddress?: string;
  cityStateZipcode: string;
  country: string;
  phone: string;
}

export class CheckoutPage extends BasePage {
  readonly deliveryAddressBlock: Locator;
  readonly billingAddressBlock: Locator;
  readonly cartItemsTable: CartItemsTableComponent;
  readonly orderMessageTextArea: Locator;
  readonly placeOrderBtn: Locator;

  constructor(page: Page) {
    super(page);
    this.deliveryAddressBlock = this.page.locator('#address_delivery');
    this.billingAddressBlock = this.page.locator('#address_invoice');
    this.cartItemsTable = new CartItemsTableComponent(this.page.locator('#cart_info'));
    this.orderMessageTextArea = this.page.locator('.form-control');
    this.placeOrderBtn = this.page.getByRole('link', { name: 'Place Order' });
  }

  async checkAddressDetails(addressBlock: Locator, data: AddressData) {
    await expect.soft(addressBlock).toContainText(data.name);

    if (data.company !== undefined) {
      await expect.soft(addressBlock).toContainText(data.company);
    }

    await expect.soft(addressBlock).toContainText(data.firstAddress);

    if (data.secondAddress !== undefined) {
      await expect.soft(addressBlock).toContainText(data.secondAddress);
    }

    await expect.soft(addressBlock).toContainText(data.cityStateZipcode);
    await expect.soft(addressBlock).toContainText(data.country);
    await expect.soft(addressBlock).toContainText(data.phone);
  }

  async fillCommentTextArea(text: string) {
    await this.orderMessageTextArea.fill(text);
  }

  async placeOrder() {
    await this.placeOrderBtn.click();
  }
}
