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

# Page snapshot

```yaml
- generic [ref=f47e1]:
  - banner [ref=f47e2]:
    - generic [ref=f47e5]:
      - link [ref=f47e8]:
        - /url: /
        - img "Website for automation practice" [ref=f47e9]
      - list [ref=f47e12]:
        - listitem [ref=f47e13]:
          - link " Home" [ref=f47e14]:
            - /url: /
            - generic [ref=f47e15]: 
            - text: Home
        - listitem [ref=f47e16]:
          - link " Products" [ref=f47e17]:
            - /url: /products
            - generic [ref=f47e18]: 
            - text: Products
        - listitem [ref=f47e19]:
          - link " Cart" [ref=f47e20]:
            - /url: /view_cart
            - generic [ref=f47e21]: 
            - text: Cart
        - listitem [ref=f47e22]:
          - link " Logout" [ref=f47e23]:
            - /url: /logout
            - generic [ref=f47e24]: 
            - text: Logout
        - listitem [ref=f47e25]:
          - link " Delete Account" [ref=f47e26]:
            - /url: /delete_account
            - generic [ref=f47e27]: 
            - text: Delete Account
        - listitem [ref=f47e28]:
          - link " Test Cases" [ref=f47e29]:
            - /url: /test_cases
            - generic [ref=f47e30]: 
            - text: Test Cases
        - listitem [ref=f47e31]:
          - link " API Testing" [ref=f47e32]:
            - /url: /api_list
            - generic [ref=f47e33]: 
            - text: API Testing
        - listitem [ref=f47e34]:
          - link " Video Tutorials" [ref=f47e35]:
            - /url: https://www.youtube.com/c/AutomationExercise
            - generic [ref=f47e36]: 
            - text: Video Tutorials
        - listitem [ref=f47e37]:
          - link " Contact us" [ref=f47e38]:
            - /url: /contact_us
            - generic [ref=f47e39]: 
            - text: Contact us
        - listitem [ref=f47e40]:
          - generic [ref=f47e41]:
            - generic [ref=f47e42]: 
            - text: Logged in as Isabel_Rosenbaum-3d577ff9
  - generic [ref=f47e44]:
    - list [ref=f47e46]:
      - listitem [ref=f47e47]:
        - link "Home" [ref=f47e48]:
          - /url: /
      - listitem [ref=f47e49]: Payment
    - heading "Payment" [level=2] [ref=f47e51]
    - generic [ref=f47e55]:
      - generic:
        - generic [ref=f47e56]:
          - generic [ref=f47e57]: Name on Card
          - textbox [ref=f47e58]: Isabel Rosenbaum
        - generic [ref=f47e59]:
          - generic [ref=f47e60]: Card Number
          - textbox [ref=f47e61]: "4928387811829"
        - generic:
          - generic [ref=f47e62]:
            - generic [ref=f47e63]: CVC
            - textbox "ex. 311" [ref=f47e64]: "667"
          - generic [ref=f47e65]:
            - generic [ref=f47e66]: Expiration
            - textbox "MM" [ref=f47e67]: "07"
          - textbox "YYYY" [ref=f47e70]: "2031"
        - generic: Your order has been placed successfully!
        - button "Pay and Confirm Order" [active] [ref=f47e74] [cursor=pointer]
  - contentinfo [ref=f47e76]:
    - generic [ref=f47e81]:
      - heading "Subscription" [level=2] [ref=f47e82]
      - generic [ref=f47e83]:
        - textbox "Your email address" [ref=f47e84]
        - button "" [ref=f47e85] [cursor=pointer]
        - paragraph [ref=f47e87]: Get the most recent updates from our site and be updated your self...
    - paragraph [ref=f47e91]: Copyright © 2021 All rights reserved
  - text: 
```