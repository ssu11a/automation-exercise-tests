import { Locator, Page } from "playwright/test";
import { BasePage } from "./BasePage";

interface LoginCredentials {
  email: string;
  password: string;
}

interface SignupCredentials {
  userName: string;
  email: string;
}

export class LoginPage extends BasePage {
  readonly loginTitle: Locator;
  readonly loginEmailInput: Locator;
  readonly loginPasswordInput: Locator;
  readonly invalidSpan: Locator;
  readonly loginBtn: Locator;
  readonly signupTitle: Locator;
  readonly signupNameInput: Locator;
  readonly signupEmailInput: Locator;
  readonly emailExistSpan: Locator;
  readonly signupBtn: Locator;

  constructor(page: Page) {
    super(page);
    this.loginTitle = this.page.getByRole('heading', {
      name: 'Login to your account'
    });
    this.loginEmailInput = this.page.getByTestId('login-email');
    this.loginPasswordInput = this.page.getByTestId('login-password');
    this.invalidSpan = this.page.getByText('Your email or password is incorrect!')
    this.loginBtn = this.page.getByTestId('login-button');
    this.signupTitle = this.page.getByRole('heading', {
      name: 'New User Signup!'
    });
    this.signupNameInput = this.page.getByTestId('signup-name');
    this.signupEmailInput = this.page.getByTestId('signup-email');
    this.emailExistSpan = this.page.getByText('Email Address already exist!');
    this.signupBtn = this.page.getByTestId('signup-button');
  }

  async goto() {
    await this.page.goto('/login');
  }

  async login({ email, password }: LoginCredentials) {
    await this.loginEmailInput.fill(email);
    await this.loginPasswordInput.fill(String(password));
    await this.loginBtn.click();
  }

  async signUp({ userName, email }: SignupCredentials) {
    await this.signupNameInput.fill(userName);
    await this.signupEmailInput.fill(email);
    await this.signupBtn.click();
  }

  
}
