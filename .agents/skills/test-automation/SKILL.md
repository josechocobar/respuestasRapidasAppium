---
name: test-automation
description: Automator of mobile E2E tests with Appium + WebDriverIO + TypeScript from the QA matrix.
---

# Test Automation Skill (Appium + TypeScript)

This skill generates and runs automated tests with WebDriverIO from the QA matrix.

## Test Convention

- **Location**: `tests/mobile/specs/`
- **Execution**: `npx wdio run wdio.conf.ts`

## Template (WebDriverIO)

```ts
import { expect } from '@wdio/globals';
import LoginPage from '../pages/login.page';

describe('Login flow', () => {
  it('should login with valid credentials', async () => {
    await LoginPage.open();
    await LoginPage.login('user', 'pass');
    await expect(LoginPage.successMessage).toBeDisplayed();
  });
});
```

## Rules

- Use Page Object Model.
- Run WDIO and ensure 0 failures before closing the SDD pipeline.
- Everything in English.
