import { expect, test as base } from '@playwright/test';
import { AutomationExerciseApi } from '@api';
import { createRegisterUserData, toAccountRequest } from '@testData';

interface RegisteredUserFixtures {
  registeredUser: ReturnType<typeof createRegisterUserData>;
}

export const test = base.extend<RegisteredUserFixtures>({
  registeredUser: async ({ request }, use) => {
    const user = createRegisterUserData();
    const { email, password } = user;
    const automationApi = new AutomationExerciseApi(request);

    const createResult = await automationApi.createAccount(toAccountRequest(user));

    expect(createResult.body).toMatchObject({
      responseCode: 201,
      message: 'User created!'
    });

    try {
      await use(user);
    } finally {
      const deleteResult = await automationApi.deleteAccount({ email, password });

      expect(deleteResult.body).toMatchObject({
        responseCode: 200,
        message: 'Account deleted!'
      });
    }
  },
});
