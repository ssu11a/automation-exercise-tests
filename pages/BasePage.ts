import { Locator, Page } from "playwright";

const NAV_BAR_LABELS = {
    home: 'Home',
    products: 'Products',
    cart: 'Cart',
    login: 'Signup / Login',
    testCases: 'Test Cases',
    logout: 'Logout',
    deleteAccount: 'Delete Account',
    contactUs: 'Contact Us'
} as const;

type NavBarOption = keyof typeof NAV_BAR_LABELS;

export class BasePage {
  readonly page: Page;
  readonly logo: Locator;
  readonly navBar: Locator;
  readonly subscribeTitle: Locator;
  readonly subscribeInput: Locator;
  readonly subscribeBtn: Locator;
  readonly successSubscribeSpan: Locator;

  constructor(page: Page) {
    this.page = page;
    this.logo = this.page.locator('.logo');
    this.navBar = this.page.locator('.navbar-nav');
    this.subscribeTitle = this.page.locator('#footer').getByRole('heading', { name: 'Subscription' });
    this.subscribeInput = this.page.locator('#footer').locator('#susbscribe_email');
    this.subscribeBtn = this.page.locator('#footer').locator('#subscribe');
    this.successSubscribeSpan = this.page.locator('#footer').getByText('You have been successfully subscribed!');
  }

  async openNavBarOption(option: NavBarOption) {
    await this.navBar.getByRole('link', {
      name: NAV_BAR_LABELS[option]
    }).click();
    await this.page.waitForLoadState('domcontentloaded');
  }

  async subscribe(email: string) {
    await this.subscribeInput.fill(email);
    await this.subscribeBtn.click();
  }
}
