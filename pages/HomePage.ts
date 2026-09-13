import { Locator, Page } from "playwright";
import { AddToCartModalComponent } from '../components/AddToCartModalComponent';
import { ProductCardComponent } from '../components/ProductCardComponent';
import { LeftSidebarComponent } from '../components/LeftSidebarComponent';
import { BasePage } from "./BasePage";

export class HomePage extends BasePage {
  readonly sliderCarousel: Locator;
  readonly productCards: ProductCardComponent;
  readonly addToCartModal: AddToCartModalComponent;
  readonly leftSidebar: LeftSidebarComponent;
  readonly recomendedItems: Locator;
  readonly recomendedItemsCards: ProductCardComponent;
  readonly scrollUpBtn: Locator;
  readonly headerTitle: Locator;

  constructor(page: Page) {
    super(page);
    this.leftSidebar = new LeftSidebarComponent(page.locator('.left-sidebar'));
    this.sliderCarousel = this.page.locator('#slider-carousel');
    this.productCards = new ProductCardComponent(
      this.page.locator('.features_items .product-image-wrapper')
    );
    this.addToCartModal = new AddToCartModalComponent(page);
    this.recomendedItems = this.page.locator('.recommended_items');
    this.recomendedItemsCards = new ProductCardComponent(this.page.locator('.recommended_items .product-image-wrapper'));
    this.scrollUpBtn = this.page.locator('#scrollUp');
  }

  async goto() {
    await this.page.goto('/');
  }
}
