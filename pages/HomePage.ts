import { Locator, Page } from "playwright";
import { BasePage } from "./BasePage";

export class HomePage extends BasePage {
  readonly sliderCarousel: Locator;

  constructor(page: Page) {
    super(page);
    this.sliderCarousel = this.page.locator('div[id="slider-carousel"]');
  }

  async goto() {
    await this.page.goto('/');
  }
}