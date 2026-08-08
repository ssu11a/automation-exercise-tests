import { Locator, Page } from "playwright";
import { AddToCartModalComponent } from '../components/AddToCartModalComponent';
import { ProductCardComponent } from '../components/ProductCardComponent';
import { BasePage } from "./BasePage";

export class HomePage extends BasePage {
  readonly sliderCarousel: Locator;
  readonly productCards: ProductCardComponent;
  readonly addToCartModal: AddToCartModalComponent;

  constructor(page: Page) {
    super(page);
    this.sliderCarousel = this.page.locator('#slider-carousel');
    this.productCards = new ProductCardComponent(
      this.page.locator('.features_items .product-image-wrapper')
    );
    this.addToCartModal = new AddToCartModalComponent(page);
  }

  async goto() {
    await this.page.goto('/');
  }
}
