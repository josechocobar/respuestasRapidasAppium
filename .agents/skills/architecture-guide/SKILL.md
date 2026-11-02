---
name: architecture-guide
description: Architecture strategy definer for Appium + TypeScript E2E tests, decoupling specs, page objects, helpers, and data flow.
---

# Software Architecture Guide Skill (Appium + TypeScript)

This skill ensures any new code keeps a modular, extensible architecture aligned with **Appium + WebDriverIO + TypeScript**.

## Architecture Principles

1. **Separation of Responsibilities**:
   - **Specs** (`tests/mobile/specs/`): high-level scenarios and assertions.
   - **Page Objects** (`tests/mobile/pages/`): screen selectors and actions.
   - **Helpers/Utils** (`shared/utils/mobile/`): gestures, waits, capabilities, data.
   - **Config** (`wdio.conf.ts`): capabilities, reporters, hooks.

2. **State and Concurrency Strategy**:
   - Avoid shared mutable state between specs; use `before`/`after` hooks.
   - Reset app or reinstall APK as needed for isolation.

3. **Data Abstraction Layer**:
   - Encapsulate app interactions in page objects.
   - Centralize selectors (accessibility id preferred).

4. **Constant refactoring pattern**:
   - If a file exceeds ~300 lines, extract sub-page objects or helpers.
   - Keep specs small and readable.

## Rules

- Everything in English (identifiers, comments, docs).
- Apply TypeScript naming conventions (`.agents/rules/typescript-naming.md`).
