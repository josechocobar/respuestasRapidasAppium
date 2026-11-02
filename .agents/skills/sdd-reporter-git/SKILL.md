---
name: sdd-reporter-git
description: Generator of test execution reports and conventional commit messages for Appium + TypeScript E2E tests.
---

# SDD Reporter & Git Commit Skill (Appium + TypeScript)

## Report Template

```markdown
# SDD Test Execution Report (Appium)

**Feature**: [Name]
**Overall Result**: PASSED

### Summary
- Total Cases: N
- Passed: N
- Failed: 0
- Time: Xs

### Details (WebDriverIO)
1. TC-01 ... PASSED
```

## Conventional Commit

```text
test(mobile): add appium scenarios for login

- Added page objects and specs
- WDIO tests passing
```
