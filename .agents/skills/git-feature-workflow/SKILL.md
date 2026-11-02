---
name: git-feature-workflow
description: Guide for feature branch workflows in Git for Appium + TypeScript E2E tests.
---

# Git Feature Workflow Skill (Appium + TypeScript)

## Branch Rules

1. New features: `feat/<feature-name>`
2. Fixes: `fix/<description>`
3. Refactor/QA: `refactor/<module>` or `test/<module>`

## Lifecycle

1. Start from clean `main`.
2. Create feature branch.
3. Develop code and tests.
4. Validate with `npx wdio run wdio.conf.ts`, `npx eslint . --ext .ts`, and `npx prettier --check .`.
5. Conventional commit and push.
