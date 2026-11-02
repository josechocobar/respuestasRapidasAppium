---
name: qa-testcases
description: QA test case designer for Appium + TypeScript E2E tests, based on Gherkin scenarios.
---

# QA Test Cases Skill (Appium + TypeScript)

Generates a test case matrix for mobile automation with Appium.

## Structure

```markdown
### Test Case Matrix: [Flow/Feature]

| ID | Category | Description | Steps | Expected Result | Type |
|---|---|---|---|---|---|
| TC-01 | Functional | Successful login | Open app, enter valid credentials | Main screen visible | E2E |
| TC-02 | Validation | Missing required field | Login without username | Error message visible | E2E |
| TC-03 | Navigation | Deep link | Open deep link | Expected screen | E2E |
```

## Criteria

- Happy path, edge cases, navigation, gestures, and synchronization.
- Include recovery cases (app in background, rotation).
