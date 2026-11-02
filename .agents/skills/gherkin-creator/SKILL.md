---
name: gherkin-creator
description: Generator of BDD specifications in Gherkin syntax (Given / When / Then) for Appium + TypeScript E2E tests.
---

# Gherkin Creator Skill (Appium + TypeScript)

Translates user stories into BDD scenarios in Gherkin format for **mobile automation**.

## Standard Format

```gherkin
Feature: [Mobile feature name]
  As a [Role]
  I want [Functionality]
  So that [Value]

  Scenario: [Successful case]
    Given the app is open
    When the user completes valid login
    Then the main screen is displayed

  Scenario: [Error case]
    Given a required field is missing
    When the user submits the form
    Then an error message is displayed
```

## Directives

- Use mobile domain terms (screens, gestures, elements).
- Scenarios must map to Appium specs.
- Code in English; Gherkin may follow team language but English is preferred.
