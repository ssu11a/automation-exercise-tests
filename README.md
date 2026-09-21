# Automation Exercise: Playwright AQA Portfolio

End-to-end UI and API contract tests for the public [Automation Exercise](https://automationexercise.com/) practice site. The repository demonstrates a maintainable TypeScript + Playwright test framework without access to the application's source code, database, or private environments.

## Coverage

| Layer | Scope | Command |
| --- | --- | --- |
| UI smoke | Critical navigation, authentication, catalogue, cart, and checkout journeys in Chromium | `npm run test:smoke` |
| UI regression | 25 extended UI scenarios across supported browsers | `npm run test:regression` |
| API contract | All 14 documented public API scenarios, including validation and unsupported-method cases | `npm run test:api` |

The API suite follows the [published API contract](https://www.automationexercise.com/api_list). Tests that create accounts generate unique data and delete it in teardown.

## Testing strategy

- **Smoke** contains five Chromium checks for critical shopper journeys: opening the home page, navigation, login, catalogue, cart, and checkout. It is the fast pull-request signal.
- **Regression** covers extended UI behaviour, including registration, checkout variants, invoices, search, category and brand navigation, subscriptions, and contact forms. It runs in Chromium after merge and in all supported browsers on schedule.
- **API contract** covers all publicly documented endpoints and validates successful, validation, and unsupported-method responses without a browser. Every API test has the `@api` Allure tag plus a domain tag such as `@catalog`, `@auth`, or `@account`; negative cases also use `@negative`.

UI tests use the public API only for isolated test-data setup and teardown. Product behaviour remains verified through the browser, while HTTP contract assertions belong to the API suite.

## Architecture

```text
tests/ ──► fixtures/ ──► pages/ and components/ ──► public UI
   │           │
   │           └────► api/ ──► public HTTP API
   └────► testData/ (typed generated data)
```

- `pages/` contains page objects; `components/` models reusable page fragments.
- `fixtures/` provides page objects, a typed API client, and disposable registered users.
- `api/` owns request construction, response parsing, and API DTOs. UI and API tests share it for account lifecycle operations.
- `testData/` generates unique, typed data with Faker.

Locators prefer accessible roles/text and the public site's `data-qa` attributes. CSS selectors are used only where that external application provides no stable semantic alternative.

## Setup and commands

```bash
npm ci
npx playwright install --with-deps
npm run check
npm run test:smoke
npm run test:api
npm run test:regression
```

By default tests target `https://automationexercise.com`. Point the suite at another compatible, authorised environment with `BASE_URL`:

```bash
BASE_URL=https://example.test npm run test:api
```

Generate an Allure report with `npm run test:api:report`, `npm run test:smoke:report`, `npm run test:regression:report`, or `npm run test:all:report`.

## CI strategy

GitHub Actions runs linting and strict type checks on every change. Pull requests run Chromium smoke and the API contract suite; pushes to `main` run Chromium regression; the scheduled workflow runs the UI regression suite across Chromium, Firefox, and WebKit. Diagnostics are retained as artifacts and regression Allure reports are published to GitHub Pages with historical trends.

The project intentionally does not claim database, source-code, or private-service coverage because the system under test is a third-party public site.
