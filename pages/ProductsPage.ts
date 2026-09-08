import { Locator, Page } from "playwright";
import { AddToCartModalComponent } from '../components/AddToCartModalComponent';
import { ProductCardComponent } from '../components/ProductCardComponent';
import { LeftSidebarComponent } from '../components/LeftSidebarComponent';
import { BasePage } from "./BasePage";

export class ProductsPage extends BasePage {
  readonly title: Locator;
  readonly searchedProductsTitle: Locator;
  readonly searchInput: Locator;
  readonly searchBtn: Locator;
  readonly productCards: ProductCardComponent;
  readonly addToCartModal: AddToCartModalComponent;
  readonly leftSidebar: LeftSidebarComponent;

  constructor(page: Page) {
    super(page);
    this.leftSidebar = new LeftSidebarComponent(page.locator('.left-sidebar'));
    this.title = this.page.locator('.title');
    this.searchedProductsTitle = this.page.getByRole('heading', { name: 'Searched Products', exact: true })
    this.searchInput = this.page.locator('#search_product');
    this.searchBtn = this.page.locator('#submit_search');
    this.productCards = new ProductCardComponent(
      this.page.locator('.features_items .product-image-wrapper')
    );
    this.addToCartModal = new AddToCartModalComponent(page);
  }

  async searchProduct(productName: string) {
    await this.searchInput.fill(productName);
    await this.searchBtn.click();
  }
}
