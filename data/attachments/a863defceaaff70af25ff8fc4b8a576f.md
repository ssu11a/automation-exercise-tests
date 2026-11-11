# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: regression/cart.spec.ts >> Order cases >> Place Order: Login before Checkout
- Location: tests/regression/cart.spec.ts:243:7

# Error details

```
SyntaxError: Unexpected token '<', "<html><hea"... is not valid JSON
```

# Page snapshot

```yaml
- generic [active] [ref=f29e1]:
  - banner [ref=f29e2]:
    - generic [ref=f29e5]:
      - link [ref=f29e8] [cursor=pointer]:
        - /url: /
        - img "Automation Exercise website" [ref=f29e9]
      - list [ref=f29e12]:
        - listitem [ref=f29e13]:
          - link " Home" [ref=f29e14] [cursor=pointer]:
            - /url: /
            - generic [ref=f29e15]: 
            - text: Home
        - listitem [ref=f29e16]:
          - link " Products" [ref=f29e17] [cursor=pointer]:
            - /url: /products
            - generic [ref=f29e18]: 
            - text: Products
        - listitem [ref=f29e19]:
          - link " Cart" [ref=f29e20] [cursor=pointer]:
            - /url: /view_cart
            - generic [ref=f29e21]: 
            - text: Cart
        - listitem [ref=f29e22]:
          - link " Logout" [ref=f29e23] [cursor=pointer]:
            - /url: /logout
            - generic [ref=f29e24]: 
            - text: Logout
        - listitem [ref=f29e25]:
          - link " Delete Account" [ref=f29e26] [cursor=pointer]:
            - /url: /delete_account
            - generic [ref=f29e27]: 
            - text: Delete Account
        - listitem [ref=f29e28]:
          - link " Test Cases" [ref=f29e29] [cursor=pointer]:
            - /url: /test_cases
            - generic [ref=f29e30]: 
            - text: Test Cases
        - listitem [ref=f29e31]:
          - link " API Testing" [ref=f29e32] [cursor=pointer]:
            - /url: /api_list
            - generic [ref=f29e33]: 
            - text: API Testing
        - listitem [ref=f29e34]:
          - link " Video Tutorials" [ref=f29e35] [cursor=pointer]:
            - /url: https://www.youtube.com/c/AutomationExercise
            - generic [ref=f29e36]: 
            - text: Video Tutorials
        - listitem [ref=f29e37]:
          - link " Contact us" [ref=f29e38] [cursor=pointer]:
            - /url: /contact_us
            - generic [ref=f29e39]: 
            - text: Contact us
        - listitem [ref=f29e40]:
          - generic [ref=f29e41]:
            - generic [ref=f29e42]: 
            - text: Logged in as Heaven.Lebsack82-1fe47446
  - generic [ref=f29e46]:
    - heading "Order Placed!" [level=2] [ref=f29e47]
    - paragraph [ref=f29e48]: Congratulations! Your order has been confirmed!
    - link "Download Invoice" [ref=f29e49] [cursor=pointer]:
      - /url: /download_invoice/500
    - link "Continue" [ref=f29e51] [cursor=pointer]:
      - /url: /
  - contentinfo [ref=f29e52]:
    - generic [ref=f29e57]:
      - heading "Subscription" [level=2] [ref=f29e58]
      - generic [ref=f29e59]:
        - textbox "Your email address" [ref=f29e60]
        - button "" [ref=f29e61] [cursor=pointer]
        - paragraph [ref=f29e63]: Get the most recent updates from our site and be updated your self...
    - paragraph [ref=f29e67]: Copyright © 2021 All rights reserved
  - text: 
```

# Test source

```ts
  1  | import type { APIRequestContext, APIResponse } from '@playwright/test';
  2  | import type {
  3  |   AccountRequest,
  4  |   ApiMessageResponse,
  5  |   ApiResult,
  6  |   BrandsResponse,
  7  |   Credentials,
  8  |   ProductsResponse,
  9  |   UserDetailResponse
  10 | } from './types';
  11 | 
  12 | export class AutomationExerciseApi {
  13 |   constructor(private readonly request: APIRequestContext) {}
  14 | 
  15 |   async getProducts(): Promise<ApiResult<ProductsResponse>> {
  16 |     return this.parse(await this.request.get('/api/productsList'));
  17 |   }
  18 | 
  19 |   async postProducts(): Promise<ApiResult<ApiMessageResponse>> {
  20 |     return this.parse(await this.request.post('/api/productsList'));
  21 |   }
  22 | 
  23 |   async getBrands(): Promise<ApiResult<BrandsResponse>> {
  24 |     return this.parse(await this.request.get('/api/brandsList'));
  25 |   }
  26 | 
  27 |   async putBrands(): Promise<ApiResult<ApiMessageResponse>> {
  28 |     return this.parse(await this.request.put('/api/brandsList'));
  29 |   }
  30 | 
  31 |   async searchProducts(searchProduct: string): Promise<ApiResult<ProductsResponse>> {
  32 |     return this.parse(await this.request.post('/api/searchProduct', {
  33 |       form: { search_product: searchProduct }
  34 |     }));
  35 |   }
  36 | 
  37 |   async searchProductsWithoutTerm(): Promise<ApiResult<ApiMessageResponse>> {
  38 |     return this.parse(await this.request.post('/api/searchProduct'));
  39 |   }
  40 | 
  41 |   async verifyLogin(credentials: Credentials): Promise<ApiResult<ApiMessageResponse>> {
  42 |     return this.parse(await this.request.post('/api/verifyLogin', {
  43 |       form: credentials
  44 |     }));
  45 |   }
  46 | 
  47 |   async verifyLoginWithoutEmail(password: string): Promise<ApiResult<ApiMessageResponse>> {
  48 |     return this.parse(await this.request.post('/api/verifyLogin', {
  49 |       form: { password }
  50 |     }));
  51 |   }
  52 | 
  53 |   async deleteVerifyLogin(): Promise<ApiResult<ApiMessageResponse>> {
  54 |     return this.parse(await this.request.delete('/api/verifyLogin'));
  55 |   }
  56 | 
  57 |   async createAccount(account: AccountRequest): Promise<ApiResult<ApiMessageResponse>> {
  58 |     return this.parse(await this.request.post('/api/createAccount', { form: account }));
  59 |   }
  60 | 
  61 |   async deleteAccount(credentials: Credentials): Promise<ApiResult<ApiMessageResponse>> {
  62 |     return this.parse(await this.request.delete('/api/deleteAccount', {
  63 |       form: credentials
  64 |     }));
  65 |   }
  66 | 
  67 |   async updateAccount(account: AccountRequest): Promise<ApiResult<ApiMessageResponse>> {
  68 |     return this.parse(await this.request.put('/api/updateAccount', { form: account }));
  69 |   }
  70 | 
  71 |   async getUserDetailByEmail(email: string): Promise<ApiResult<UserDetailResponse>> {
  72 |     return this.parse(await this.request.get('/api/getUserDetailByEmail', {
  73 |       params: { email }
  74 |     }));
  75 |   }
  76 | 
  77 |   private async parse<T>(response: APIResponse): Promise<ApiResult<T>> {
  78 |     return {
  79 |       status: response.status(),
> 80 |       body: await response.json() as T
     |             ^ SyntaxError: Unexpected token '<', "<html><hea"... is not valid JSON
  81 |     };
  82 |   }
  83 | }
  84 | 
```