import { fakerEN as faker } from "@faker-js/faker";
import type { SignupFormData } from "../pages/SignupPage";

interface RegisterUserData {
  userName: string;
  email: string;
  password: string;
  signupForm: SignupFormData;
}

export const createExpectedAddress = ({ accountInfo, addressInfo }: SignupFormData) => ({
  name: `${accountInfo.title ? `${accountInfo.title}. ` : ''}${addressInfo.firstName} ${addressInfo.lastName}`,
  company: addressInfo.company,
  firstAddress: addressInfo.address,
  secondAddress: addressInfo.secondAddress,
  cityStateZipcode: `${addressInfo.city} ${addressInfo.state} ${addressInfo.zipcode}`,
  country: addressInfo.country,
  phone: addressInfo.mobileNumber
});

export const createRegisterUserData = (): RegisterUserData => {
  const sex = faker.person.sexType();
  const firstName = faker.person.firstName(sex);
  const lastName = faker.person.lastName();
  const title = sex === 'male' ? 'Mr' : 'Mrs';
  const uniqueId = faker.string.uuid().slice(0, 8);
  const userName =
    `${faker.internet.username({ firstName, lastName })}-${uniqueId}`;
  const password = faker.internet.password();
  const email = faker.internet.email({
    firstName: `${firstName}.${uniqueId}`,
    lastName,
    provider: 'example.com'
  });

  return {
    userName,
    email,
    password,
    signupForm: {
      accountInfo: {
        title,
        password,
        birthDate: {
          day: 20,
          month: 'April',
          year: 2000
        },
        newsletter: true,
        specialOffers: true,
      },
      addressInfo: {
        firstName,
        lastName,
        company: faker.company.name(),
        address: faker.location.streetAddress(),
        secondAddress: faker.location.secondaryAddress(),
        country: 'United States',
        state: faker.location.state(),
        city: faker.location.city(),
        zipcode: faker.location.zipCode(),
        mobileNumber: `+1${faker.string.numeric(10)}`
      }
    }
  };
}
