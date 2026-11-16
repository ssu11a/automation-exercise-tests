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
  - waiting for getByTestId('continue-button')
    - locator resolved to <a href="/" class="btn btn-primary" data-qa="continue-button">Continue</a>
  - attempting click action
    - waiting for element to be visible, enabled and stable

```

# Page snapshot

```yaml
- generic [active] [ref=f49e1]:
  - banner [ref=f49e2]:
    - generic [ref=f49e5]:
      - link [ref=f49e8] [cursor=pointer]:
        - /url: /
        - img "Website for automation practice" [ref=f49e9]
      - list [ref=f49e12]:
        - listitem [ref=f49e13]:
          - link " Home" [ref=f49e14] [cursor=pointer]:
            - /url: /
            - generic [ref=f49e15]: 
            - text: Home
        - listitem [ref=f49e16]:
          - link " Products" [ref=f49e17] [cursor=pointer]:
            - /url: /products
            - generic [ref=f49e18]: 
            - text: Products
        - listitem [ref=f49e19]:
          - link " Cart" [ref=f49e20] [cursor=pointer]:
            - /url: /view_cart
            - generic [ref=f49e21]: 
            - text: Cart
        - listitem [ref=f49e22]:
          - link " Signup / Login" [ref=f49e23] [cursor=pointer]:
            - /url: /login
            - generic [ref=f49e24]: 
            - text: Signup / Login
        - listitem [ref=f49e25]:
          - link " Test Cases" [ref=f49e26] [cursor=pointer]:
            - /url: /test_cases
            - generic [ref=f49e27]: 
            - text: Test Cases
        - listitem [ref=f49e28]:
          - link " API Testing" [ref=f49e29] [cursor=pointer]:
            - /url: /api_list
            - generic [ref=f49e30]: 
            - text: API Testing
        - listitem [ref=f49e31]:
          - link " Video Tutorials" [ref=f49e32] [cursor=pointer]:
            - /url: https://www.youtube.com/c/AutomationExercise
            - generic [ref=f49e33]: 
            - text: Video Tutorials
        - listitem [ref=f49e34]:
          - link " Contact us" [ref=f49e35] [cursor=pointer]:
            - /url: /contact_us
            - generic [ref=f49e36]: 
            - text: Contact us
  - generic [ref=f49e40]:
    - heading "Account Deleted!" [level=2] [ref=f49e41]
    - paragraph [ref=f49e42]: Your account has been permanently deleted!
    - paragraph [ref=f49e43]: You can create new account to take advantage of member privileges to enhance your online shopping experience with us.
    - link "Continue" [ref=f49e45] [cursor=pointer]:
      - /url: /
  - contentinfo [ref=f49e46]:
    - generic [ref=f49e51]:
      - heading "Subscription" [level=2] [ref=f49e52]
      - generic [ref=f49e53]:
        - textbox "Your email address" [ref=f49e54]
        - button "" [ref=f49e55] [cursor=pointer]
        - paragraph [ref=f49e57]: Get the most recent updates from our site and be updated your self...
    - paragraph [ref=f49e61]: Copyright © 2021 All rights reserved
```

# Test source

```ts
  1  | import { Locator, Page } from "playwright";
  2  | import { BasePage } from "@pages";
  3  | 
  4  | export class AccountDeletedPage extends BasePage {
  5  |   readonly accountDeletedTitle: Locator;
  6  |   readonly continueBtn: Locator;
  7  | 
  8  |   constructor(page: Page) {
  9  |     super(page);
  10 |     this.accountDeletedTitle = this.page.getByTestId('account-deleted');
  11 |     this.continueBtn = this.page.getByTestId('continue-button');
  12 |   }
  13 | 
  14 |   async continueToHomePage() {
> 15 |     await this.continueBtn.click();
     |                            ^ Error: locator.click: Test timeout of 30000ms exceeded.
  16 |   }
  17 | }
  18 | 
```