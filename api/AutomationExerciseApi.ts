import type { APIRequestContext, APIResponse } from '@playwright/test';
import type {
  AccountRequest,
  ApiMessageResponse,
  ApiResult,
  BrandsResponse,
  Credentials,
  ProductsResponse,
  UserDetailResponse
} from './types';

export class AutomationExerciseApi {
  constructor(private readonly request: APIRequestContext) {}

  async getProducts(): Promise<ApiResult<ProductsResponse>> {
    return this.parse(await this.request.get('/api/productsList'));
  }

  async postProducts(): Promise<ApiResult<ApiMessageResponse>> {
    return this.parse(await this.request.post('/api/productsList'));
  }

  async getBrands(): Promise<ApiResult<BrandsResponse>> {
    return this.parse(await this.request.get('/api/brandsList'));
  }

  async putBrands(): Promise<ApiResult<ApiMessageResponse>> {
    return this.parse(await this.request.put('/api/brandsList'));
  }

  async searchProducts(searchProduct: string): Promise<ApiResult<ProductsResponse>> {
    return this.parse(await this.request.post('/api/searchProduct', {
      form: { search_product: searchProduct }
    }));
  }

  async searchProductsWithoutTerm(): Promise<ApiResult<ApiMessageResponse>> {
    return this.parse(await this.request.post('/api/searchProduct'));
  }

  async verifyLogin(credentials: Credentials): Promise<ApiResult<ApiMessageResponse>> {
    return this.parse(await this.request.post('/api/verifyLogin', {
      form: credentials
    }));
  }

  async verifyLoginWithoutEmail(password: string): Promise<ApiResult<ApiMessageResponse>> {
    return this.parse(await this.request.post('/api/verifyLogin', {
      form: { password }
    }));
  }

  async deleteVerifyLogin(): Promise<ApiResult<ApiMessageResponse>> {
    return this.parse(await this.request.delete('/api/verifyLogin'));
  }

  async createAccount(account: AccountRequest): Promise<ApiResult<ApiMessageResponse>> {
    return this.parse(await this.request.post('/api/createAccount', { form: account }));
  }

  async deleteAccount(credentials: Credentials): Promise<ApiResult<ApiMessageResponse>> {
    return this.parse(await this.request.delete('/api/deleteAccount', {
      form: credentials
    }));
  }

  async updateAccount(account: AccountRequest): Promise<ApiResult<ApiMessageResponse>> {
    return this.parse(await this.request.put('/api/updateAccount', { form: account }));
  }

  async getUserDetailByEmail(email: string): Promise<ApiResult<UserDetailResponse>> {
    return this.parse(await this.request.get('/api/getUserDetailByEmail', {
      params: { email }
    }));
  }

  private async parse<T>(response: APIResponse): Promise<ApiResult<T>> {
    return {
      status: response.status(),
      body: await response.json() as T
    };
  }
}
