import { test, expect, apiTestDetails } from '@fixtures';
import { toCredentials } from '@testData';

test.describe('Login verification API', () => {
  test('Verifies valid credentials', apiTestDetails('@auth'), async ({ automationApi, registeredUser }) => {
    const result = await automationApi.verifyLogin(toCredentials(registeredUser));

    expect(result.status).toBe(200);
    expect(result.body).toEqual({ responseCode: 200, message: 'User exists!' });
  });

  test('Requires both login parameters', apiTestDetails('@auth', '@negative'), async ({ automationApi }) => {
    const result = await automationApi.verifyLoginWithoutEmail('irrelevant-password');

    expect(result.status).toBe(200);
    expect(result.body).toEqual({
      responseCode: 400,
      message: 'Bad request, email or password parameter is missing in POST request.'
    });
  });

  test('Rejects DELETE to login verification', apiTestDetails('@auth', '@negative'), async ({ automationApi }) => {
    const result = await automationApi.deleteVerifyLogin();

    expect(result.status).toBe(200);
    expect(result.body).toEqual({
      responseCode: 405,
      message: 'This request method is not supported.'
    });
  });

  test('Rejects invalid credentials', apiTestDetails('@auth', '@negative'), async ({ automationApi }) => {
    const result = await automationApi.verifyLogin({
      email: 'missing-user@example.com',
      password: 'incorrect-password'
    });

    expect(result.status).toBe(200);
    expect(result.body).toEqual({ responseCode: 404, message: 'User not found!' });
  });
});
