# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: regression/cart.spec.ts >> Order cases >> Place Order: Register while Checkout
- Location: tests/regression/cart.spec.ts:150:7

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: locator.click: Test timeout of 30000ms exceeded.
Call log:
  - waiting for getByRole('link', { name: 'Place Order' })
    - locator resolved to <a href="/payment" class="btn btn-default check_out">Place Order</a>
  - attempting click action
    - waiting for element to be visible, enabled and stable
    - element is visible, enabled and stable
    - scrolling into view if needed
    - done scrolling

```

# Page snapshot

```yaml
- generic [ref=f37e1]:
  - banner [ref=f37e2]:
    - generic [ref=f37e5]:
      - link [ref=f37e8]:
        - /url: /
        - img "Website for automation practice" [ref=f37e9]
      - list [ref=f37e12]:
        - listitem [ref=f37e13]:
          - link " Home" [ref=f37e14]:
            - /url: /
            - generic [ref=f37e15]: 
            - text: Home
        - listitem [ref=f37e16]:
          - link " Products" [ref=f37e17]:
            - /url: /products
            - generic [ref=f37e18]: 
            - text: Products
        - listitem [ref=f37e19]:
          - link " Cart" [ref=f37e20]:
            - /url: /view_cart
            - generic [ref=f37e21]: 
            - text: Cart
        - listitem [ref=f37e22]:
          - link " Logout" [ref=f37e23]:
            - /url: /logout
            - generic [ref=f37e24]: 
            - text: Logout
        - listitem [ref=f37e25]:
          - link " Delete Account" [ref=f37e26]:
            - /url: /delete_account
            - generic [ref=f37e27]: 
            - text: Delete Account
        - listitem [ref=f37e28]:
          - link " Test Cases" [ref=f37e29]:
            - /url: /test_cases
            - generic [ref=f37e30]: 
            - text: Test Cases
        - listitem [ref=f37e31]:
          - link " API Testing" [ref=f37e32]:
            - /url: /api_list
            - generic [ref=f37e33]: 
            - text: API Testing
        - listitem [ref=f37e34]:
          - link " Video Tutorials" [ref=f37e35]:
            - /url: https://www.youtube.com/c/AutomationExercise
            - generic [ref=f37e36]: 
            - text: Video Tutorials
        - listitem [ref=f37e37]:
          - link " Contact us" [ref=f37e38]:
            - /url: /contact_us
            - generic [ref=f37e39]: 
            - text: Contact us
        - listitem [ref=f37e40]:
          - generic [ref=f37e41]:
            - generic [ref=f37e42]: 
            - text: Logged in as Clarence.Klocko-f2f8866d
  - generic [ref=f37e44]:
    - list [ref=f37e46]:
      - listitem [ref=f37e47]:
        - link "Home" [ref=f37e48]:
          - /url: /
      - listitem [ref=f37e49]: Checkout
    - heading "Address Details" [level=2] [ref=f37e51]
    - generic [ref=f37e53]:
      - list [ref=f37e55]:
        - listitem [ref=f37e56]:
          - heading "Your delivery address" [level=3] [ref=f37e57]
        - listitem [ref=f37e58]: Mr. Clarence Klocko
        - listitem [ref=f37e59]: Fay and Sons
        - listitem [ref=f37e60]: 71326 N State Street
        - listitem [ref=f37e61]: Suite 205
        - listitem [ref=f37e62]: McLaughlinfield Georgia 55029
        - listitem [ref=f37e63]: United States
        - listitem [ref=f37e64]: "+16519132703"
      - list [ref=f37e66]:
        - listitem [ref=f37e67]:
          - heading "Your billing address" [level=3] [ref=f37e68]
        - listitem [ref=f37e69]: Mr. Clarence Klocko
        - listitem [ref=f37e70]: Fay and Sons
        - listitem [ref=f37e71]: 71326 N State Street
        - listitem [ref=f37e72]: Suite 205
        - listitem [ref=f37e73]: McLaughlinfield Georgia 55029
        - listitem [ref=f37e74]: United States
        - listitem [ref=f37e75]: "+16519132703"
    - heading "Review Your Order" [level=2] [ref=f37e77]
    - table [ref=f37e79]:
      - rowgroup [ref=f37e80]:
        - row [ref=f37e81]:
          - cell "Item" [ref=f37e82]
          - cell "Description" [ref=f37e83]
          - cell "Price" [ref=f37e84]
          - cell "Quantity" [ref=f37e85]
          - cell "Total" [ref=f37e86]
          - cell [ref=f37e87]
      - rowgroup [ref=f37e88]:
        - row [ref=f37e89]:
          - cell [ref=f37e90]:
            - link [ref=f37e91]:
              - /url: ""
              - img "Product Image" [ref=f37e92]
          - cell [ref=f37e93]:
            - heading [level=4] [ref=f37e94]:
              - link "Blue Top" [ref=f37e95]:
                - /url: /product_details/1
            - paragraph [ref=f37e96]: Women > Tops
          - cell [ref=f37e97]:
            - paragraph [ref=f37e98]: Rs. 500
          - cell [ref=f37e99]:
            - button "1" [ref=f37e100] [cursor=pointer]
          - cell [ref=f37e101]:
            - paragraph [ref=f37e102]: Rs. 500
        - row [ref=f37e103]:
          - cell [ref=f37e104]
          - cell [ref=f37e105]
          - cell [ref=f37e106]:
            - heading "Total Amount" [level=4] [ref=f37e107]
          - cell [ref=f37e108]:
            - paragraph [ref=f37e109]: Rs. 500
    - generic [ref=f37e110]:
      - generic [ref=f37e111]: If you would like to add a comment about your order, please write it in the field below.
      - textbox [active] [ref=f37e112]: Order Message
    - link "Place Order" [ref=f37e114] [cursor=pointer]:
      - /url: /payment
  - insertion [ref=f37e116]
  - contentinfo [ref=f37e118]:
    - generic [ref=f37e123]:
      - heading "Subscription" [level=2] [ref=f37e124]
      - generic [ref=f37e125]:
        - textbox "Your email address" [ref=f37e126]
        - button "" [ref=f37e127] [cursor=pointer]
        - paragraph [ref=f37e129]: Get the most recent updates from our site and be updated your self...
    - paragraph [ref=f37e133]: Copyright © 2021 All rights reserved
  - text: 
```

# Test source

```ts
  1  | import { Locator, Page, expect } from "playwright/test";
  2  | import { BasePage } from "@pages";
  3  | import { CartItemsTableComponent } from "@components";
  4  | 
  5  | interface AddressData {
  6  |   name: string;
  7  |   company?: string;
  8  |   firstAddress: string;
  9  |   secondAddress?: string;
  10 |   cityStateZipcode: string;
  11 |   country: string;
  12 |   phone: string;
  13 | }
  14 | 
  15 | export class CheckoutPage extends BasePage {
  16 |   readonly deliveryAddressBlock: Locator;
  17 |   readonly billingAddressBlock: Locator;
  18 |   readonly cartItemsTable: CartItemsTableComponent;
  19 |   readonly orderMessageTextArea: Locator;
  20 |   readonly placeOrderBtn: Locator;
  21 | 
  22 |   constructor(page: Page) {
  23 |     super(page);
  24 |     this.deliveryAddressBlock = this.page.locator('#address_delivery');
  25 |     this.billingAddressBlock = this.page.locator('#address_invoice');
  26 |     this.cartItemsTable = new CartItemsTableComponent(this.page.locator('#cart_info'));
  27 |     this.orderMessageTextArea = this.page.locator('.form-control');
  28 |     this.placeOrderBtn = this.page.getByRole('link', { name: 'Place Order' });
  29 |   }
  30 | 
  31 |   async checkAddressDetails(addressBlock: Locator, data: AddressData) {
  32 |     await expect.soft(addressBlock).toContainText(data.name);
  33 | 
  34 |     if (data.company !== undefined) {
  35 |       await expect.soft(addressBlock).toContainText(data.company);
  36 |     }
  37 | 
  38 |     await expect.soft(addressBlock).toContainText(data.firstAddress);
  39 | 
  40 |     if (data.secondAddress !== undefined) {
  41 |       await expect.soft(addressBlock).toContainText(data.secondAddress);
  42 |     }
  43 | 
  44 |     await expect.soft(addressBlock).toContainText(data.cityStateZipcode);
  45 |     await expect.soft(addressBlock).toContainText(data.country);
  46 |     await expect.soft(addressBlock).toContainText(data.phone);
  47 |   }
  48 | 
  49 |   async fillCommentTextArea(text: string) {
  50 |     await this.orderMessageTextArea.fill(text);
  51 |   }
  52 | 
  53 |   async placeOrder() {
> 54 |     await this.placeOrderBtn.click();
     |                              ^ Error: locator.click: Test timeout of 30000ms exceeded.
  55 |   }
  56 | }
  57 | 
```