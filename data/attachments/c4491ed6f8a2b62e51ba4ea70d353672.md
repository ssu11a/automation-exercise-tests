# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: regression/contactUs.spec.ts >> Contact Us Form
- Location: tests/regression/contactUs.spec.ts:10:5

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: locator.fill: Test timeout of 30000ms exceeded.
Call log:
  - waiting for getByTestId('name')

```

# Page snapshot

```yaml
- generic [active] [ref=f7e1]:
  - heading "This website is under heavy load (queue full)" [level=2] [ref=f7e2]
  - paragraph [ref=f7e3]: We're sorry, too many people are accessing this website at the same time. We're working on this problem. Please try again later.
```

# Test source

```ts
  1  | import { Locator, Page } from "playwright";
  2  | import { BasePage } from "@pages";
  3  | 
  4  | export interface ContactUsData {
  5  |   name: string;
  6  |   email: string;
  7  |   subject: string;
  8  |   message: string;
  9  | }
  10 | 
  11 | export class ContactUsPage extends BasePage {
  12 |   readonly title: Locator;
  13 |   readonly nameInput: Locator;
  14 |   readonly emailInput: Locator;
  15 |   readonly subjectInput: Locator;
  16 |   readonly messageTextArea: Locator;
  17 |   readonly uploadFileInput: Locator;
  18 |   readonly submitBtn: Locator;
  19 |   readonly successSubmit: Locator;
  20 |   readonly homeBtn: Locator;
  21 | 
  22 |   constructor(page: Page) {
  23 |     super(page);
  24 |     this.title = this.page.getByRole('heading', { name: 'Get In Touch' });
  25 |     this.nameInput = this.page.getByTestId('name');
  26 |     this.emailInput = this.page.getByTestId('email');
  27 |     this.subjectInput = this.page.getByTestId('subject');
  28 |     this.messageTextArea = this.page.getByTestId('message');
  29 |     this.uploadFileInput = this.page.locator('input[type="file"]');
  30 |     this.submitBtn = this.page.getByTestId('submit-button');
  31 |     this.successSubmit = this.page.locator(
  32 |       '#contact-page .status.alert-success'
  33 |     );
  34 |     this.homeBtn = this.page.locator('.btn-success');
  35 |   }
  36 | 
  37 |   async fillContactUsForm(data: ContactUsData) {
> 38 |     await this.nameInput.fill(data.name);
     |                          ^ Error: locator.fill: Test timeout of 30000ms exceeded.
  39 |     await this.emailInput.fill(data.email);
  40 |     await this.subjectInput.fill(data.subject);
  41 |     await this.messageTextArea.fill(data.message);
  42 |   }
  43 | 
  44 |   async uploadAttachment(filePath: string) {
  45 |     await this.uploadFileInput.setInputFiles(filePath);
  46 |   }
  47 | 
  48 |   async submitContactUsForm() {
  49 |     this.page.once('dialog', dialog => dialog.accept());
  50 |     await this.submitBtn.click();
  51 |   }
  52 | 
  53 |   async returnToHomePage() {
  54 |     await this.homeBtn.click();
  55 |   }
  56 | }
  57 | 
```