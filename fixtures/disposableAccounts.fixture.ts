import { test as base } from '@playwright/test';
import { AutomationExerciseApi, type Credentials } from '@api';

interface DisposableAccounts {
  track(credentials: Credentials): void;
}

interface DisposableAccountFixtures {
  disposableAccounts: DisposableAccounts;
}

export const test = base.extend<DisposableAccountFixtures>({
  disposableAccounts: async ({ request }, use) => {
    const automationApi = new AutomationExerciseApi(request);
    const accounts: Credentials[] = [];

    try {
      await use({
        track: credentials => accounts.push(credentials)
      });
    } finally {
      for (const credentials of accounts.reverse()) {
        await automationApi.deleteAccount(credentials);
      }
    }
  }
});
