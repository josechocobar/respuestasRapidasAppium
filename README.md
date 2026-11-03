# 📱 RespuestasRápidas — Mobile E2E Test Framework

> **Production-grade mobile end-to-end automation** built with **Appium 2 + WebDriverIO + TypeScript**.
> A clean, scalable, and maintainable test architecture following the **Page Object Model**, strict typing, and industry best practices.

[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Appium](https://img.shields.io/badge/Appium-2.x-663399?logo=appium&logoColor=white)](https://appium.io/)
[![WebDriverIO](https://img.shields.io/badge/WebDriverIO-8.x-EA5906?logo=webdriverio&logoColor=white)](https://webdriver.io/)
[![Node](https://img.shields.io/badge/Node.js-20+-339933?logo=node.js&logoColor=white)](https://nodejs.org/)
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)
[![Platform: Android](https://img.shields.io/badge/Platform-Android-3DDC84?logo=android&logoColor=white)](https://developer.android.com/)

---

## 👋 Why this project

This repository is a **showcase of professional mobile test automation engineering**. It demonstrates how to design, structure, and maintain an Appium-based E2E suite the way a senior QA Automation Engineer would in a real product team:

- ✅ **Strict TypeScript** with `strict: true` — no `any` leaks.
- ✅ **Page Object Model** with a reusable `BasePage` and typed elements.
- ✅ **WebDriverIO 8** + **Appium 2** + **UiAutomator2** driver.
- ✅ **Mocha BDD** specs with `@wdio/globals` expectations.
- ✅ **ESLint + Prettier** enforced code quality.
- ✅ **SDD (Spec-Driven Development)** workflow: User Story → Gherkin → Test Plan → Code.
- ✅ **Multi-branch strategy**: `dev` / `prod` for controlled releases.

If you are looking for someone who truly understands mobile automation architecture — not just "writing tests" — this is the proof.

---

## 🧱 Tech Stack

| Layer | Technology |
|---|---|
| Language | TypeScript 5 (strict mode) |
| Mobile driver | Appium 2.x |
| Android automation | UiAutomator2 driver |
| Test runner | WebDriverIO 8 (local runner) |
| Test framework | Mocha (BDD) |
| Assertions | `@wdio/globals` `expect` |
| Linting | ESLint 8 + `@typescript-eslint` |
| Formatting | Prettier 3 |
| Runtime | Node.js 20+ |

---

## 🏛️ Architecture

The project follows a **layered, decoupled architecture** that keeps tests readable, reusable, and easy to evolve.

```
┌──────────────────────────────────────────────────────┐
│  Specs (tests/mobile/specs/*.spec.ts)                │
│  BDD scenarios: describe / it / expect               │
└──────────────┬───────────────────────────────────────┘
               │ uses
┌──────────────▼───────────────────────────────────────┐
│  Page Objects (tests/mobile/pages/*.page.ts)         │
│  Encapsulate selectors + screen-level actions        │
│  LoginPage, ... extends BasePage                     │
└──────────────┬───────────────────────────────────────┘
               │ extends / uses
┌──────────────▼───────────────────────────────────────┐
│  BasePage + Helpers (shared/utils/mobile/*.ts)       │
│  waitForElement, tap, setValue, waitForCondition      │
└──────────────┬───────────────────────────────────────┘
               │ drives
┌──────────────▼───────────────────────────────────────┐
│  Appium / WebDriverIO / UiAutomator2                 │
│  Real device or emulator via APK                     │
└──────────────────────────────────────────────────────┘
```

### Key design decisions

- **Page Objects as singletons** — each page is exported as a default instance (`export default new LoginPage()`), so specs stay declarative and free of `new`.
- **`BasePage` abstraction** — centralizes synchronization (`waitForDisplayed`, `click`, `setValue`) so every page inherits consistent, flake-resistant behavior.
- **Accessibility IDs first** — selectors use `~accessibilityId` (e.g. `$('~username')`), the most stable and cross-platform locator strategy.
- **Helpers are framework-agnostic** — `waitForCondition` lives in `shared/utils/mobile/` and can be reused across pages and specs.
- **One spec file per feature** — keeps the suite navigable and reviewable.
- **No hardcoded waits** — explicit waits only, avoiding brittle `browser.pause()` except inside the polling helper.

---

## 📁 Project Structure

```
respuestasrapidastest/
├── tests/
│   └── mobile/
│       ├── apks/                 # APK under test (.gitignored)
│       ├── pages/
│       │   ├── base.page.ts      # BasePage: wait / tap / setValue
│       │   └── login.page.ts     # LoginPage example
│       └── specs/
│           └── login.spec.ts     # Login flow spec
├── shared/
│   └── utils/
│       └── mobile/
│           └── waits.ts          # waitForCondition helper
├── docs/
│   └── specs/                    # SDD artifacts (user stories, gherkin, plans)
├── .agents/                      # AI-assisted dev skills & rules
├── wdio.conf.ts                  # WebDriverIO + Appium configuration
├── tsconfig.json                 # Strict TypeScript config
├── .eslintrc.cjs                 # ESLint rules
├── .prettierrc                   # Prettier formatting
└── package.json
```

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** 20+
- **Java JDK** 11+ (for Appium/Android tooling)
- **Android SDK** + an emulator or physical device
- **Appium 2** (installed via `npm install`)

### Install

```bash
git clone https://github.com/josechocobar/respuestasRapidasAppium.git
cd respuestasRapidasAppium
npm install
```

### Place the APK

Drop the application under test into:

```
tests/mobile/apks/app.apk
```

(APKs are gitignored by design — only `.gitkeep` is tracked.)

### Run the suite

```bash
# All specs
npm test

# A single spec
npm run test:spec -- tests/mobile/specs/login.spec.ts
```

### Quality gates

```bash
npm run lint          # ESLint
npm run format:check  # Prettier
```

---

## 🧪 Example Test

```ts
import { expect } from '@wdio/globals';
import LoginPage from '../pages/login.page';

describe('Login flow', () => {
  it('should show error with invalid credentials', async () => {
    await LoginPage.open();
    await LoginPage.login('invalid', 'invalid');
    await expect(LoginPage.errorMessage).toBeDisplayed();
  });
});
```

Readable, declarative, and entirely free of low-level driver calls.

---

## 🧭 Development Workflow (SDD)

This project is developed following a **Spec-Driven Development** flow:

```
Understanding → Questions/Assumptions → Spec → Gherkin (approval) → Test Plan → Code
```

Artifacts live under `docs/specs/<branch>/`:

- `01-understanding.md`
- `02-spec.md`
- `03-questions.md`
- `04-gherkin.feature`
- `05-test-plan.md`

This keeps requirements, behavior, and automation aligned — and reviewable in PRs.

---

## 🌿 Branching Strategy

| Branch | Purpose |
|---|---|
| `dev` | Integration / active development (default) |
| `prod` | Stable, release-ready code |

Feature work branches off `dev` and merges back via pull requests.

---

## 📐 Code Quality Standards

- **TypeScript strict mode** (`"strict": true`).
- **ESLint** with `@typescript-eslint/recommended` + Prettier integration.
- **Prettier** formatting: single quotes, trailing commas, 100-char print width, semicolons.
- **Naming conventions** documented in `.agents/rules/typescript-naming.md`.
- **English-only** code, comments, specs, and commits (see `.agents/rules/english-only.md`).

---

## 🛠️ What I can bring to your team

If you are hiring a **Mobile QA Automation Engineer / SDET** with Appium expertise, here is what this codebase demonstrates:

1. **Architecture thinking** — POM, base abstractions, reusable helpers, clean layering.
2. **TypeScript fluency** — strict typing, generics-friendly helpers, typed page objects.
3. **Appium 2 mastery** — capabilities, UiAutomator2, accessibility-ID locators, sync strategies.
4. **Flake resistance** — explicit waits, no blind sleeps, condition polling.
5. **Engineering discipline** — linting, formatting, conventions, SDD, branching, Git workflow.
6. **AI-augmented development** — structured skills/agents/rules for consistent, high-quality output.

---

## 📬 Contact

**Jose Chocobar** — QA Automation / SDET

- GitHub: [@josechocobar](https://github.com/josechocobar)

> Open to opportunities in mobile test automation, Appium, and E2E engineering.

---

## 📄 License

MIT — feel free to explore, fork, and learn.