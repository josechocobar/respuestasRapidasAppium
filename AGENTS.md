# Rules for RespuestasRapidas Tests Project for AI Agents

## Stack
- TypeScript
- Appium 2 + WebDriverIO
- Node.js / npm
- Mobile E2E tests (Android APK)

## Fundamental Rule: SDD Flow
Use skill `sdd-orchestrator` for features (`/generate`).

## Skills
- `appium`: official Appium/WebDriverIO patterns.
- `architecture-guide`, `senior-developer`, `test-automation`, `eslint-prettier` (TypeScript quality).
- SDD skills: `user-story-creator`, `gherkin-creator`, `qa-testcases`, `sdd-reporter-git`.

## Conventions
- Specs in `tests/mobile/specs/`.
- Page objects in `tests/mobile/pages/`.
- Helpers in `shared/utils/mobile/`.
- APKs in `tests/mobile/apks/`.
- Lint: `npx eslint . --ext .ts`, `npx prettier --check .`
- Tests: `npx wdio run wdio.conf.ts`

## Rules
- Everything in English: code, variables, comments, specs, commits, docs.
- Follow TypeScript naming conventions (see `.agents/rules/typescript-naming.md`).
- SDD is mandatory for features (`sdd-orchestrator`).
- Specs in `docs/specs/<branch>/`.
