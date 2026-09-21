import { test, expect, apiTestDetails } from '@fixtures';
import { createRegisterUserData, toAccountRequest, toCredentials } from '@testData';

test.describe('User account API', () => {
  test('Creates a user account', apiTestDetails('@account'), async ({ automationApi }) => {
    const user = createRegisterUserData();

    try {
      const result = await automationApi.createAccount(toAccountRequest(user));

      expect(result.status).toBe(200);
      expect(result.body).toEqual({ responseCode: 201, message: 'User created!' });
    } finally {
      await automationApi.deleteAccount(toCredentials(user));
    }
  });

  test('Deletes a user account', apiTestDetails('@account'), async ({ automationApi }) => {
    const user = createRegisterUserData();
    const createResult = await automationApi.createAccount(toAccountRequest(user));

    expect(createResult.body).toEqual({ responseCode: 201, message: 'User created!' });

    const result = await automationApi.deleteAccount(toCredentials(user));

    expect(result.status).toBe(200);
    expect(result.body).toEqual({ responseCode: 200, message: 'Account deleted!' });
  });

  test('Updates a user account', apiTestDetails('@account'), async ({ automationApi, registeredUser }) => {
    const updatedName = `${registeredUser.userName}-updated`;
    const result = await automationApi.updateAccount({
      ...toAccountRequest(registeredUser),
      name: updatedName,
      city: 'Updated City'
    });

    expect(result.status).toBe(200);
    expect(result.body).toEqual({ responseCode: 200, message: 'User updated!' });
  });

  test('Returns a user account by email', apiTestDetails('@account'), async ({ automationApi, registeredUser }) => {
    const result = await automationApi.getUserDetailByEmail(registeredUser.email);

    expect(result.status).toBe(200);
    expect(result.body.responseCode).toBe(200);
    expect(result.body.user).toEqual(expect.objectContaining({
      email: registeredUser.email,
      name: registeredUser.userName,
      first_name: registeredUser.signupForm.addressInfo.firstName,
      last_name: registeredUser.signupForm.addressInfo.lastName
    }));
  });
});
