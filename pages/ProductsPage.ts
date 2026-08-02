import { Locator, Page } from "playwright";
import { BasePage } from "./BasePage";

export class ProductsPage extends BasePage {
  readonly title: Locator;
  readonly searchedProductsTitle: Locator;
  readonly searchInput: Locator;
  readonly searchBtn: Locator;
  readonly productCard: Locator;
  readonly addToCartBtn: Locator;
  readonly viewProductBtn: Locator;
  readonly viewCartModalBtn: Locator;
  readonly continueShoppingModalBtn: Locator;

  constructor(page: Page) {
    super(page);
    this.title = this.page.getByRole('heading', { name: 'All Products', exact: true });
    this.searchedProductsTitle = this.page.getByRole('heading', { name: 'Searched Products', exact: true })
    this.searchInput = this.page.locator('#search_product');
    this.searchBtn = this.page.locator('#submit_search');
    this.productCard = this.page.locator('.single-products');
    this.addToCartBtn = this.productCard.locator('.product-overlay').locator('.add-to-cart');
    this.viewProductBtn = this.page.locator('.choose').locator('a');
    this.viewCartModalBtn = this.page.locator('.modal-content').getByRole('link', { name: 'View Cart' });
    this.continueShoppingModalBtn = this.page.locator('.modal-content').getByRole('button', { name: 'Continue Shopping' });
  }

  async openProductByIndex(index: number) {
    await this.productCard
      .nth(index)
      .getByRole('link', { name: 'View Product' })
      .click();
  }

  async searchProduct(productName: string) {
    await this.searchInput.fill(productName);
    await this.searchBtn.click();
  }

  async addProductToCart(index: number) {
    await this.productCard.nth(index).hover();
    await this.addToCartBtn.nth(index).click();
  }

  async continueShopping() {
    await this.continueShoppingModalBtn.click();
  }

  async viewCart() {
    await this.viewCartModalBtn.click();
  }
}
