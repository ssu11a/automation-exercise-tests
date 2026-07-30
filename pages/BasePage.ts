import { Locator, Page } from "playwright";

const NAV_BAR_LABELS = {
    home: 'Home',
    products: 'Products',
    cart: 'Cart',
    login: 'Signup / Login',
    logout: 'Logout',
    deleteAccount: 'Delete Account'
} as const;

type NavBarOption = keyof typeof NAV_BAR_LABELS;

export class BasePage {
  readonly page: Page;
  readonly logo: Locator;
  readonly navBar: Locator;

  constructor(page: Page) {
    this.page = page;
    this.logo = this.page.locator('.logo');
    this.navBar = this.page.locator('.navbar-nav');
  }

  async goto() {
    await this.page.goto('/');
  }

  async openNavBarOption(option: NavBarOption) {
    await this.navBar.getByRole('link', {
      name: NAV_BAR_LABELS[option]
    }).click();
  }
}
