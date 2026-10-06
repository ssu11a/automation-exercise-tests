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
Error: locator.fill: Target page, context or browser has been closed
```

# Page snapshot

```yaml
- generic [ref=f37e1]:
  - banner [ref=f37e2]:
    - generic [ref=f37e5]:
      - link [ref=f37e8] [cursor=pointer]:
        - /url: /
        - img "Website for automation practice" [ref=f37e9]
      - list [ref=f37e12]:
        - listitem [ref=f37e13]:
          - link " Home" [ref=f37e14] [cursor=pointer]:
            - /url: /
            - generic [ref=f37e15]: 
            - text: Home
        - listitem [ref=f37e16]:
          - link " Products" [ref=f37e17] [cursor=pointer]:
            - /url: /products
            - generic [ref=f37e18]: 
            - text: Products
        - listitem [ref=f37e19]:
          - link " Cart" [ref=f37e20] [cursor=pointer]:
            - /url: /view_cart
            - generic [ref=f37e21]: 
            - text: Cart
        - listitem [ref=f37e22]:
          - link " Logout" [ref=f37e23] [cursor=pointer]:
            - /url: /logout
            - generic [ref=f37e24]: 
            - text: Logout
        - listitem [ref=f37e25]:
          - link " Delete Account" [ref=f37e26] [cursor=pointer]:
            - /url: /delete_account
            - generic [ref=f37e27]: 
            - text: Delete Account
        - listitem [ref=f37e28]:
          - link " Test Cases" [ref=f37e29] [cursor=pointer]:
            - /url: /test_cases
            - generic [ref=f37e30]: 
            - text: Test Cases
        - listitem [ref=f37e31]:
          - link " API Testing" [ref=f37e32] [cursor=pointer]:
            - /url: /api_list
            - generic [ref=f37e33]: 
            - text: API Testing
        - listitem [ref=f37e34]:
          - link " Video Tutorials" [ref=f37e35] [cursor=pointer]:
            - /url: https://www.youtube.com/c/AutomationExercise
            - generic [ref=f37e36]: 
            - text: Video Tutorials
        - listitem [ref=f37e37]:
          - link " Contact us" [ref=f37e38] [cursor=pointer]:
            - /url: /contact_us
            - generic [ref=f37e39]: 
            - text: Contact us
        - listitem [ref=f37e40]:
          - generic [ref=f37e41]:
            - generic [ref=f37e42]: 
            - text: Logged in as Jannie.Marvin-ca7dcb68
  - generic [ref=f37e44]:
    - list [ref=f37e46]:
      - listitem [ref=f37e47]:
        - link "Home" [ref=f37e48] [cursor=pointer]:
          - /url: /
      - listitem [ref=f37e49]: Checkout
    - heading "Address Details" [level=2] [ref=f37e51]
    - generic [ref=f37e53]:
      - list [ref=f37e55]:
        - listitem [ref=f37e56]:
          - heading "Your delivery address" [level=3] [ref=f37e57]
        - listitem [ref=f37e58]: Mr. Jannie Marvin
        - listitem [ref=f37e59]: VonRueden Group
        - listitem [ref=f37e60]: 7748 Ivan Fords
        - listitem [ref=f37e61]: Apt. 333
        - listitem [ref=f37e62]: North Yazmin Illinois 03188
        - listitem [ref=f37e63]: United States
        - listitem [ref=f37e64]: "+18973941544"
      - list [ref=f37e66]:
        - listitem [ref=f37e67]:
          - heading "Your billing address" [level=3] [ref=f37e68]
        - listitem [ref=f37e69]: Mr. Jannie Marvin
        - listitem [ref=f37e70]: VonRueden Group
        - listitem [ref=f37e71]: 7748 Ivan Fords
        - listitem [ref=f37e72]: Apt. 333
        - listitem [ref=f37e73]: North Yazmin Illinois 03188
        - listitem [ref=f37e74]: United States
        - listitem [ref=f37e75]: "+18973941544"
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
            - link [ref=f37e91] [cursor=pointer]:
              - /url: ""
              - img "Product Image" [ref=f37e92]
          - cell [ref=f37e93]:
            - heading [level=4] [ref=f37e94]:
              - link "Blue Top" [ref=f37e95] [cursor=pointer]:
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
      - textbox [ref=f37e112]: Invoice Test Order
    - link "Place Order" [active] [ref=f37e114] [cursor=pointer]:
      - /url: /payment
  - contentinfo [ref=f37e115]:
    - generic [ref=f37e120]:
      - heading "Subscription" [level=2] [ref=f37e121]
      - generic [ref=f37e122]:
        - textbox "Your email address" [ref=f37e123]
        - button "" [ref=f37e124] [cursor=pointer]
        - paragraph [ref=f37e126]: Get the most recent updates from our site and be updated your self...
    - paragraph [ref=f37e130]: Copyright © 2021 All rights reserved
  - link "" [ref=f37e131] [cursor=pointer]:
    - /url: "#top"
  - insertion [ref=f37e134]
```

# Test source

```ts
  1  | import { Locator, Page } from "playwright/test";
  2  | import { BasePage } from "@pages";
  3  | import type { PaymentData } from "@testData";
  4  | 
  5  | export class PaymentPage extends BasePage {
  6  |   readonly nameOnCardInput: Locator;
  7  |   readonly cardNumberInput: Locator;
  8  |   readonly cvcInput: Locator;
  9  |   readonly expiryMonthInput: Locator;
  10 |   readonly expiryYearInput: Locator;
  11 |   readonly payBtn: Locator;
  12 |   readonly successAlert: Locator;
  13 | 
  14 |   constructor(page: Page) {
  15 |     super(page);
  16 |     this.nameOnCardInput = this.page.getByTestId('name-on-card');
  17 |     this.cardNumberInput = this.page.getByTestId('card-number');
  18 |     this.cvcInput = this.page.getByTestId('cvc');
  19 |     this.expiryMonthInput = this.page.getByTestId('expiry-month');
  20 |     this.expiryYearInput = this.page.getByTestId('expiry-year');
  21 |     this.payBtn = this.page.getByTestId('pay-button');
  22 |     this.successAlert = this.page.getByText('Your order has been placed successfully!');
  23 |   }
  24 | 
  25 |   async fillPaymentDetails(data: PaymentData) {
> 26 |     await this.nameOnCardInput.fill(data.nameOnCard);
     |                                ^ Error: locator.fill: Target page, context or browser has been closed
  27 |     await this.cardNumberInput.fill(data.cardNumber);
  28 |     await this.cvcInput.fill(data.cvv);
  29 |     await this.expiryMonthInput.fill(data.expiryMonth);
  30 |     await this.expiryYearInput.fill(data.expiryYear);
  31 |   }
  32 | 
  33 |   async submitPayment() {
  34 |     await this.payBtn.click();
  35 |   }
  36 | }
  37 | 
```