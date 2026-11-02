---
name: senior-developer
description: Senior developer in mobile E2E automation with TypeScript, Appium, WebDriverIO, and Page Object Model. Implements test code that passes all cases.
---

# Senior Developer Skill (Appium + TypeScript)

This skill represents best practices of a senior developer in mobile automation focused on **Appium + WebDriverIO + TypeScript**.

## Code Standards

1. **TypeScript**:
   - Type page objects, helpers, and test data.
   - Prefer immutability (`const`, readonly) and explicit null-safety.

2. **Appium / WebDriverIO**:
   - Page objects per screen with action and assertion methods.
   - Use `waitForDisplayed`, `waitUntil`, and controlled retries.
   - Centralize capabilities in `wdio.conf.ts`.

3. **Selectors**:
   - Prefer accessibility id; avoid fragile xpath.

4. **Gestures and Synchronization**:
   - Use scroll/swipe helpers and explicit waits.

5. **Delivery Rules**:
   - All code must satisfy Gherkin scenarios and pass tests (`npx wdio run wdio.conf.ts`).
   - Everything in English (identifiers, comments, docs).
   - Apply TypeScript naming conventions (`.agents/rules/typescript-naming.md`).
   - Lint with ESLint/Prettier.
