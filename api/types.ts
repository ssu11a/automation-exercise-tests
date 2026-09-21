export interface ApiMessageResponse {
  responseCode: number;
  message: string;
}

export interface Product {
  id: number;
  name: string;
  price: string;
  brand: string;
  category: {
    usertype: {
      usertype: string;
    };
    category: string;
  };
}

export interface Brand {
  id: number;
  brand: string;
}

export interface ProductsResponse {
  responseCode: number;
  products: Product[];
}

export interface BrandsResponse {
  responseCode: number;
  brands: Brand[];
}

export interface UserDetailResponse {
  responseCode: number;
  user: Record<string, unknown>;
}

export interface AccountRequest extends Record<string, string> {
  name: string;
  email: string;
  password: string;
  title: string;
  birth_date: string;
  birth_month: string;
  birth_year: string;
  firstname: string;
  lastname: string;
  company: string;
  address1: string;
  address2: string;
  country: string;
  zipcode: string;
  state: string;
  city: string;
  mobile_number: string;
}

export interface Credentials extends Record<string, string> {
  email: string;
  password: string;
}

export interface ApiResult<T> {
  status: number;
  body: T;
}
