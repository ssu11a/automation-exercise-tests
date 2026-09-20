export const regressionTestDetails = (...tags: string[]) => ({
  tag: ['@regression', ...tags],
  annotation: {
    type: '@allure.label.severity',
    description: 'normal'
  }
});
