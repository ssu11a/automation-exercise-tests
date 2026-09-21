export const regressionTestDetails = (...tags: string[]) => ({
  tag: ['@regression', ...tags],
  annotation: {
    type: '@allure.label.severity',
    description: 'normal'
  }
});

export const apiTestDetails = (...tags: string[]) => ({
  tag: ['@api', ...tags],
  annotation: {
    type: '@allure.label.severity',
    description: 'normal'
  }
});
