# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: regression/cart.spec.ts >> Order cases >> Download Invoice after purchase order
- Location: tests/regression/cart.spec.ts:73:7

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: locator.click: Test timeout of 30000ms exceeded.
Call log:
  - waiting for locator('.check_out')

```

# Page snapshot

```yaml
- generic [active] [ref=f7e1]:
  - heading "This website is under heavy load (queue full)" [level=2] [ref=f7e2]
  - paragraph [ref=f7e3]: We're sorry, too many people are accessing this website at the same time. We're working on this problem. Please try again later.
```

# Test source

```ts
  1  | import { Locator, Page } from "playwright";
  2  | import { CartItemsTableComponent } from '@components';
  3  | import { BasePage } from '@pages';
  4  | 
  5  | export class CartPage extends BasePage {
  6  |   readonly emptyCartSpan: Locator;
  7  |   readonly processCheckoutBtn: Locator;
  8  |   readonly registerBtn: Locator;
  9  |   readonly continueOnCartBtn: Locator;
  10 |   readonly cartItemsTable: CartItemsTableComponent;
  11 | 
  12 |   constructor(page: Page) {
  13 |     super(page);
  14 |     this.emptyCartSpan = this.page.locator('#empty_cart');
  15 |     this.processCheckoutBtn = this.page.locator('.check_out');
  16 |     this.registerBtn = this.page.getByRole('link', { name: 'Register / Login' });
  17 |     this.continueOnCartBtn = this.page.getByRole('button', { name: 'Continue On Cart' });
  18 |     this.cartItemsTable = new CartItemsTableComponent(this.page.locator('#cart_info_table'));
  19 |   }
  20 | 
  21 |   async submitProcessCheckout() {
  22 |     await this.page.waitForLoadState('load');
> 23 |     await this.processCheckoutBtn.click();
     |                                   ^ Error: locator.click: Test timeout of 30000ms exceeded.
  24 |   }
  25 | 
  26 |   async continueToLoginPage() {
  27 |     await this.registerBtn.click();
  28 |   }
  29 | }
  30 | 
```