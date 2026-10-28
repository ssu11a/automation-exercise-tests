# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: regression/products.spec.ts >> Actions with products >> Search Products and Verify Cart After Login
- Location: tests/regression/products.spec.ts:96:7

# Error details

```
SyntaxError: Unexpected token '<', "<html><hea"... is not valid JSON
```

# Page snapshot

```yaml
- generic [active] [ref=f30e1]:
  - banner [ref=f30e2]:
    - generic [ref=f30e5]:
      - link [ref=f30e8]:
        - /url: /
        - img "Website for automation practice" [ref=f30e9]
      - list [ref=f30e12]:
        - listitem [ref=f30e13]:
          - link " Home" [ref=f30e14]:
            - /url: /
            - generic [ref=f30e15]: 
            - text: Home
        - listitem [ref=f30e16]:
          - link " Products" [ref=f30e17]:
            - /url: /products
            - generic [ref=f30e18]: 
            - text: Products
        - listitem [ref=f30e19]:
          - link " Cart" [ref=f30e20]:
            - /url: /view_cart
            - generic [ref=f30e21]: 
            - text: Cart
        - listitem [ref=f30e22]:
          - link " Logout" [ref=f30e23]:
            - /url: /logout
            - generic [ref=f30e24]: 
            - text: Logout
        - listitem [ref=f30e25]:
          - link " Delete Account" [ref=f30e26]:
            - /url: /delete_account
            - generic [ref=f30e27]: 
            - text: Delete Account
        - listitem [ref=f30e28]:
          - link " Test Cases" [ref=f30e29]:
            - /url: /test_cases
            - generic [ref=f30e30]: 
            - text: Test Cases
        - listitem [ref=f30e31]:
          - link " API Testing" [ref=f30e32]:
            - /url: /api_list
            - generic [ref=f30e33]: 
            - text: API Testing
        - listitem [ref=f30e34]:
          - link " Video Tutorials" [ref=f30e35]:
            - /url: https://www.youtube.com/c/AutomationExercise
            - generic [ref=f30e36]: 
            - text: Video Tutorials
        - listitem [ref=f30e37]:
          - link " Contact us" [ref=f30e38]:
            - /url: /contact_us
            - generic [ref=f30e39]: 
            - text: Contact us
        - listitem [ref=f30e40]:
          - generic [ref=f30e41]:
            - generic [ref=f30e42]: 
            - text: Logged in as Grace.Nader-24d9757a
  - generic [ref=f30e44]:
    - list [ref=f30e46]:
      - listitem [ref=f30e47]:
        - link "Home" [ref=f30e48]:
          - /url: /
      - listitem [ref=f30e49]: Shopping Cart
    - generic [ref=f30e50]: Proceed To Checkout
    - table [ref=f30e56]:
      - rowgroup [ref=f30e57]:
        - row [ref=f30e58]:
          - cell "Item" [ref=f30e59]
          - cell "Description" [ref=f30e60]
          - cell "Price" [ref=f30e61]
          - cell "Quantity" [ref=f30e62]
          - cell "Total" [ref=f30e63]
          - cell [ref=f30e64]
      - rowgroup [ref=f30e65]:
        - row [ref=f30e66]:
          - cell [ref=f30e67]:
            - link [ref=f30e68]:
              - /url: ""
              - img "Product Image" [ref=f30e69]
          - cell [ref=f30e70]:
            - heading [level=4] [ref=f30e71]:
              - link "Pure Cotton V-Neck T-Shirt" [ref=f30e72]:
                - /url: /product_details/28
            - paragraph [ref=f30e73]: Men > Tshirts
          - cell [ref=f30e74]:
            - paragraph [ref=f30e75]: Rs. 1299
          - cell [ref=f30e76]:
            - button "1" [ref=f30e77] [cursor=pointer]
          - cell [ref=f30e78]:
            - paragraph [ref=f30e79]: Rs. 1299
          - cell "" [ref=f30e80]
        - row [ref=f30e83]:
          - cell [ref=f30e84]:
            - link [ref=f30e85]:
              - /url: ""
              - img "Product Image" [ref=f30e86]
          - cell [ref=f30e87]:
            - heading [level=4] [ref=f30e88]:
              - link "Green Side Placket Detail T-Shirt" [ref=f30e89]:
                - /url: /product_details/29
            - paragraph [ref=f30e90]: Men > Tshirts
          - cell [ref=f30e91]:
            - paragraph [ref=f30e92]: Rs. 1000
          - cell [ref=f30e93]:
            - button "1" [ref=f30e94] [cursor=pointer]
          - cell [ref=f30e95]:
            - paragraph [ref=f30e96]: Rs. 1000
          - cell "" [ref=f30e97]
        - row [ref=f30e100]:
          - cell [ref=f30e101]:
            - link [ref=f30e102]:
              - /url: ""
              - img "Product Image" [ref=f30e103]
          - cell [ref=f30e104]:
            - heading [level=4] [ref=f30e105]:
              - link "Premium Polo T-Shirts" [ref=f30e106]:
                - /url: /product_details/30
            - paragraph [ref=f30e107]: Men > Tshirts
          - cell [ref=f30e108]:
            - paragraph [ref=f30e109]: Rs. 1500
          - cell [ref=f30e110]:
            - button "1" [ref=f30e111] [cursor=pointer]
          - cell [ref=f30e112]:
            - paragraph [ref=f30e113]: Rs. 1500
          - cell "" [ref=f30e114]
  - contentinfo [ref=f30e117]:
    - insertion [ref=f30e119]
    - generic [ref=f30e125]:
      - heading "Subscription" [level=2] [ref=f30e126]
      - generic [ref=f30e127]:
        - textbox "Your email address" [ref=f30e128]
        - button "" [ref=f30e129] [cursor=pointer]
        - paragraph [ref=f30e131]: Get the most recent updates from our site and be updated your self...
    - generic [ref=f30e132]:
      - insertion [ref=f30e134]
      - paragraph [ref=f30e138]: Copyright © 2021 All rights reserved
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