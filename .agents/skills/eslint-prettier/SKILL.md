---
name: eslint-prettier
description: Lint and code quality for TypeScript/JavaScript with ESLint + Prettier for Appium E2E test projects.
---

# TypeScript Quality & Lint Skill

This skill ensures code quality through **ESLint** and **Prettier**.

## Commands

- `npx eslint . --ext .ts`
- `npx prettier --check .`
- `npx eslint . --ext .ts --fix`
- `npx prettier --write .`

## Rules

1. Follow official TypeScript conventions.
2. Avoid `any` when possible; type page objects and helpers.
3. Avoid excessive complexity and long functions.
4. Document public APIs with TSDoc.
5. Fail CI on critical warnings (`--max-warnings 0`).
6. Keep consistent formatting with Prettier.
