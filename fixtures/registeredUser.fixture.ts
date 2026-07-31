import { expect, test as base } from '@playwright/test';
import { createRegisterUserData } from '../testData/registerUserData';

interface RegisteredUserFixtures {
  registeredUser: ReturnType<typeof createRegisterUserData>;
}

export const test = base.extend<RegisteredUserFixtures>({
  registeredUser: async ({ request }, use) => {
    const user = createRegisterUserData();
    const { userName, email, password, signupForm } = user;
    const { accountInfo, addressInfo } = signupForm;

    const createResponse = await request.post('/api/createAccount', {
      form: {
        name: userName,
        email,
        password,
        title: accountInfo.title ?? '',
        birth_date: accountInfo.birthDate?.day ?? '',
        birth_month: accountInfo.birthDate?.month ?? '',
        birth_year: accountInfo.birthDate?.year ?? '',
        firstname: addressInfo.firstName,
        lastname: addressInfo.lastName,
        company: addressInfo.company ?? '',
        address1: addressInfo.address,
        address2: addressInfo.secondAddress ?? '',
        country: addressInfo.country,
        zipcode: addressInfo.zipcode,
        state: addressInfo.state,
        city: addressInfo.city,
        mobile_number: addressInfo.mobileNumber
      }
    });
    const createResult = await createResponse.json();

    expect(createResult).toMatchObject({
      responseCode: 201,
      message: 'User created!'
    });

    try {
      await use(user);
    } finally {
      const deleteResponse = await request.delete('/api/deleteAccount', {
        form: { email, password }
      });
      const deleteResult = await deleteResponse.json();

      expect(deleteResult).toMatchObject({
        responseCode: 200,
        message: 'Account deleted!'
      });
    }
  },
});
