import { test as base } from '@playwright/test';
import { AutomationExerciseApi } from '@api';

interface ApiFixtures {
  automationApi: AutomationExerciseApi;
}

export const test = base.extend<ApiFixtures>({
  automationApi: async ({ request }, use) => {
    await use(new AutomationExerciseApi(request));
  }
});
