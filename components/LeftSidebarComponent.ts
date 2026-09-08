import { Locator } from 'playwright';

export type Category = 'Women' | 'Men' | 'Kids';

export type Brand =
  | 'Polo'
  | 'H&M'
  | 'Madame'
  | 'Mast & Harbour'
  | 'Babyhug'
  | 'Allen Solly Junior'
  | 'Kookie Kids'
  | 'Biba';

export class LeftSidebarComponent {
  readonly root: Locator;
  readonly categoryHeading: Locator;
  readonly womenCategoryHeading: Locator;
  readonly menCategoryHeading: Locator;
  readonly kidsCategoryHeading: Locator;
  readonly brandsHeading: Locator;
  readonly brandsProductsList: Locator;

  constructor(root: Locator) {
    this.root = root;
    this.categoryHeading = root.getByRole('heading', { name: 'Category', exact: true });
    this.womenCategoryHeading = root.locator('#accordian a[href="#Women"]');
    this.menCategoryHeading = root.locator('#accordian a[href="#Men"]');
    this.kidsCategoryHeading = root.locator('#accordian a[href="#Kids"]');
    this.brandsHeading = root.getByRole('heading', { name: 'Brands', exact: true });
    this.brandsProductsList = root.locator('.brands-name').getByRole('list');
  }

  getSubcategoryLink(category: Category, subcategory: string): Locator {
    return this.root.locator(`#${category}`).getByRole('link', {
      name: subcategory,
      exact: true
    });
  }

  getBrandLink(brand: Brand): Locator {
    return this.brandsProductsList.locator(`a[href="/brand_products/${brand}"]`);
  }

  async openCategory(category: Category) {
    const categoryLinks: Record<Category, Locator> = {
      Women: this.womenCategoryHeading,
      Men: this.menCategoryHeading,
      Kids: this.kidsCategoryHeading
    };
    const panel = this.root.locator(`#${category}`);

    if (!(await panel.isVisible())) {
      await categoryLinks[category].click();
    }

    await panel.waitFor({ state: 'visible' });
  }

  async openSubcategory(category: Category, subcategory: string) {
    await this.openCategory(category);
    await this.getSubcategoryLink(category, subcategory).click();
    await this.root.page().waitForLoadState('domcontentloaded');
  }

  async openBrand(brand: Brand) {
    await this.getBrandLink(brand).click();
    await this.root.page().waitForLoadState('domcontentloaded');
  }
}
