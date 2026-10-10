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
  - waiting for getByRole('link', { name: 'Place Order' })
    - locator resolved to <a href="/payment" class="btn btn-default check_out">Place Order</a>
  - attempting click action
    - waiting for element to be visible, enabled and stable

```

# Page snapshot

```yaml
- generic [ref=f36e1]:
  - banner [ref=f36e2]:
    - generic [ref=f36e5]:
      - link [ref=f36e8]:
        - /url: /
        - img "Website for automation practice" [ref=f36e9]
      - list [ref=f36e12]:
        - listitem [ref=f36e13]:
          - link " Home" [ref=f36e14]:
            - /url: /
            - generic [ref=f36e15]: 
            - text: Home
        - listitem [ref=f36e16]:
          - link " Products" [ref=f36e17]:
            - /url: /products
            - generic [ref=f36e18]: 
            - text: Products
        - listitem [ref=f36e19]:
          - link " Cart" [ref=f36e20]:
            - /url: /view_cart
            - generic [ref=f36e21]: 
            - text: Cart
        - listitem [ref=f36e22]:
          - link " Logout" [ref=f36e23]:
            - /url: /logout
            - generic [ref=f36e24]: 
            - text: Logout
        - listitem [ref=f36e25]:
          - link " Delete Account" [ref=f36e26]:
            - /url: /delete_account
            - generic [ref=f36e27]: 
            - text: Delete Account
        - listitem [ref=f36e28]:
          - link " Test Cases" [ref=f36e29]:
            - /url: /test_cases
            - generic [ref=f36e30]: 
            - text: Test Cases
        - listitem [ref=f36e31]:
          - link " API Testing" [ref=f36e32]:
            - /url: /api_list
            - generic [ref=f36e33]: 
            - text: API Testing
        - listitem [ref=f36e34]:
          - link " Video Tutorials" [ref=f36e35]:
            - /url: https://www.youtube.com/c/AutomationExercise
            - generic [ref=f36e36]: 
            - text: Video Tutorials
        - listitem [ref=f36e37]:
          - link " Contact us" [ref=f36e38]:
            - /url: /contact_us
            - generic [ref=f36e39]: 
            - text: Contact us
        - listitem [ref=f36e40]:
          - generic [ref=f36e41]:
            - generic [ref=f36e42]: 
            - text: Logged in as Ada.Herzog21-aa33b613
  - generic [ref=f36e44]:
    - list [ref=f36e46]:
      - listitem [ref=f36e47]:
        - link "Home" [ref=f36e48]:
          - /url: /
      - listitem [ref=f36e49]: Checkout
    - heading "Address Details" [level=2] [ref=f36e51]
    - generic [ref=f36e53]:
      - list [ref=f36e55]:
        - listitem [ref=f36e56]:
          - heading "Your delivery address" [level=3] [ref=f36e57]
        - listitem [ref=f36e58]: Mrs. Ada Herzog
        - listitem [ref=f36e59]: Blick and Sons
        - listitem [ref=f36e60]: 797 Durgan Highway
        - listitem [ref=f36e61]: Suite 947
        - listitem [ref=f36e62]: Sandy Springs Massachusetts 73478
        - listitem [ref=f36e63]: United States
        - listitem [ref=f36e64]: "+17350123126"
      - list [ref=f36e66]:
        - listitem [ref=f36e67]:
          - heading "Your billing address" [level=3] [ref=f36e68]
        - listitem [ref=f36e69]: Mrs. Ada Herzog
        - listitem [ref=f36e70]: Blick and Sons
        - listitem [ref=f36e71]: 797 Durgan Highway
        - listitem [ref=f36e72]: Suite 947
        - listitem [ref=f36e73]: Sandy Springs Massachusetts 73478
        - listitem [ref=f36e74]: United States
        - listitem [ref=f36e75]: "+17350123126"
    - heading "Review Your Order" [level=2] [ref=f36e77]
    - table [ref=f36e79]:
      - rowgroup [ref=f36e80]:
        - row [ref=f36e81]:
          - cell "Item" [ref=f36e82]
          - cell "Description" [ref=f36e83]
          - cell "Price" [ref=f36e84]
          - cell "Quantity" [ref=f36e85]
          - cell "Total" [ref=f36e86]
          - cell [ref=f36e87]
      - rowgroup [ref=f36e88]:
        - row [ref=f36e89]:
          - cell [ref=f36e90]:
            - link [ref=f36e91]:
              - /url: ""
              - img "Product Image" [ref=f36e92]
          - cell [ref=f36e93]:
            - heading [level=4] [ref=f36e94]:
              - link "Blue Top" [ref=f36e95]:
                - /url: /product_details/1
            - paragraph [ref=f36e96]: Women > Tops
          - cell [ref=f36e97]:
            - paragraph [ref=f36e98]: Rs. 500
          - cell [ref=f36e99]:
            - button "1" [ref=f36e100] [cursor=pointer]
          - cell [ref=f36e101]:
            - paragraph [ref=f36e102]: Rs. 500
        - row [ref=f36e103]:
          - cell [ref=f36e104]
          - cell [ref=f36e105]
          - cell [ref=f36e106]:
            - heading "Total Amount" [level=4] [ref=f36e107]
          - cell [ref=f36e108]:
            - paragraph [ref=f36e109]: Rs. 500
    - generic [ref=f36e110]:
      - generic [ref=f36e111]: If you would like to add a comment about your order, please write it in the field below.
      - textbox [active] [ref=f36e112]: Invoice Test Order
    - link "Place Order" [ref=f36e114] [cursor=pointer]:
      - /url: /payment
  - insertion [ref=f36e116]
  - contentinfo [ref=f36e118]:
    - generic [ref=f36e123]:
      - heading "Subscription" [level=2] [ref=f36e124]
      - generic [ref=f36e125]:
        - textbox "Your email address" [ref=f36e126]
        - button "" [ref=f36e127] [cursor=pointer]
        - paragraph [ref=f36e129]: Get the most recent updates from our site and be updated your self...
    - paragraph [ref=f36e133]: Copyright © 2021 All rights reserved
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