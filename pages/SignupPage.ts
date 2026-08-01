import { Locator, Page } from "playwright/test";
import { BasePage } from "./BasePage";

export type Title = 'Mr' | 'Mrs';

export interface BirthDate {
  day: number;
  month: string;
  year: number;
}

export interface AccountInfoFormData {
  title?: Title;
  password: string;
  birthDate?: BirthDate;
  newsletter?: boolean;
  specialOffers?: boolean;
}

export interface AddressInfoFormData {
  firstName: string;
  lastName: string;
  company?: string;
  address: string;
  secondAddress?: string;
  country: string;
  state: string;
  city: string;
  zipcode: string;
  mobileNumber: string;
}

export interface SignupFormData {
  accountInfo: AccountInfoFormData;
  addressInfo: AddressInfoFormData;
}

export class SignupPage extends BasePage {
  readonly accountInfoFormTitle: Locator;
  readonly maleRadioBtn: Locator;
  readonly femaleRadioBtn: Locator;
  readonly userNameInput: Locator;
  readonly emailInput: Locator;
  readonly passwordInput: Locator;
  readonly daySelector: Locator;
  readonly monthSelector: Locator;
  readonly yearSelector: Locator;
  readonly newsletterCheckbox: Locator;
  readonly optinCheckbox: Locator;
  readonly firstNameInput: Locator;
  readonly lastNameInput: Locator;
  readonly companyInput: Locator;
  readonly addressInput: Locator;
  readonly secondAddressInput: Locator;
  readonly countrySelector: Locator;
  readonly stateInput: Locator;
  readonly cityInput: Locator;
  readonly zipcodeInput: Locator;
  readonly mobileNumberInput: Locator;
  readonly createAccountBtn: Locator;

  constructor(page: Page) {
    super(page);
    this.accountInfoFormTitle = this.page.getByText('Enter Account Information');
    this.maleRadioBtn = this.page.locator('input[value="Mr"]');
    this.femaleRadioBtn = this.page.locator('input[value="Mrs"]');
    this.userNameInput = this.page.getByTestId('name');
    this.emailInput = this.page.getByTestId('email');
    this.passwordInput = this.page.getByTestId('password');
    this.daySelector = this.page.getByTestId('days');
    this.monthSelector = this.page.getByTestId('months');
    this.yearSelector = this.page.getByTestId('years');
    this.newsletterCheckbox = this.page.locator('#newsletter');
    this.optinCheckbox = this.page.locator('#optin');
    this.firstNameInput = this.page.getByTestId('first_name');
    this.lastNameInput = this.page.getByTestId('last_name');
    this.companyInput = this.page.getByTestId('company');
    this.addressInput = this.page.getByTestId('address');
    this.secondAddressInput = this.page.getByTestId('address2');
    this.countrySelector = this.page.getByTestId('country');
    this.stateInput = this.page.getByTestId('state');
    this.cityInput = this.page.getByTestId('city');
    this.zipcodeInput = this.page.getByTestId('zipcode');
    this.mobileNumberInput = this.page.getByTestId('mobile_number');
    this.createAccountBtn = this.page.getByTestId('create-account');
  }

  private async selectTitle(title: Title) {
    const radioButton =
      title === 'Mr' ? this.maleRadioBtn : this.femaleRadioBtn;

    await radioButton.check();
  }

  private async selectBirthDate({ day, month, year }: BirthDate) {
    await this.daySelector.selectOption(String(day));
    await this.monthSelector.selectOption(String(month));
    await this.yearSelector.selectOption(String(year));
  }

  private async selectCountry(country: string) {
    await this.countrySelector.selectOption(country);
  }

  private async fillAccountInfoForm(data: AccountInfoFormData) {
    if (data.title !== undefined) {
      await this.selectTitle(data.title);
    }

    await this.passwordInput.fill(data.password);

    if (data.birthDate !== undefined) {
      await this.selectBirthDate(data.birthDate);
    }

    await this.newsletterCheckbox.setChecked(data.newsletter ?? false);
    await this.optinCheckbox.setChecked(data.specialOffers ?? false);
  }

  private async fillAddressInfoForm(data: AddressInfoFormData) {
    await this.firstNameInput.fill(data.firstName);
    await this.lastNameInput.fill(data.lastName);

    if (data.company !== undefined) {
      await this.companyInput.fill(data.company);
    }

    await this.addressInput.fill(data.address);

    if (data.secondAddress !== undefined) {
      await this.secondAddressInput.fill(data.secondAddress);
    }

    await this.selectCountry(data.country);
    await this.stateInput.fill(data.state);
    await this.cityInput.fill(data.city);
    await this.zipcodeInput.fill(data.zipcode);
    await this.mobileNumberInput.fill(data.mobileNumber);
  }

  async fillSignupForm({ accountInfo, addressInfo }: SignupFormData) {
    await this.fillAccountInfoForm(accountInfo);
    await this.fillAddressInfoForm(addressInfo);
  }

  async submitSignupForm() {
    await this.createAccountBtn.click();
  }
}
