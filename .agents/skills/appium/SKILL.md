---
name: appium
description: Official patterns for mobile E2E automation with Appium + WebDriverIO + TypeScript. Page objects, capabilities, gestures, and synchronization.
---

# Appium Skill (TypeScript Mobile E2E)

This skill ensures robust mobile automation with **Appium 2 + WebDriverIO + TypeScript** on Android APKs.

## Stack

- Appium 2 server (local or grid)
- WebDriverIO 8+ with TypeScript
- Mocha/Jasmine as test runner (configurable)
- Page Object Model (POM) for screens

## Recommended Structure

- `tests/mobile/specs/`: Appium specs (`.spec.ts`)
- `tests/mobile/pages/`: page objects
- `tests/mobile/apks/`: APKs under test
- `shared/utils/mobile/`: helpers (gestures, waits, capabilities)
- `wdio.conf.ts`: WebDriverIO configuration

## Conventions

- Explicit capabilities: `platformName`, `deviceName`, `app`, `automationName: UiAutomator2`.
- Use `browser.waitUntil`/`waitForDisplayed` instead of sleeps.
- Page objects with stable selectors (accessibility id preferred).
- Clean app state between tests (`reset` or reinstall as needed).
- Reports with Allure or spec reporter.

## Commands

- `npx wdio run wdio.conf.ts`
- `npx wdio run wdio.conf.ts --spec tests/mobile/specs/login.spec.ts`
- `appium` (local server)

## Rules

- No hardcoded sleeps; use explicit waits.
- Avoid fragile selectors (deep xpath).
- Run on emulator/real device and capture logs.
- Everything in English (code, comments, specs).
