---
name: deusdata-index
description: Mapper of the Appium + TypeScript E2E test project topology for deep repository understanding.
---

# DeusData Codebase Indexing Skill (Appium + TypeScript)

X-ray of the test repository so any agent can understand the structure.

## Project Topology

- **Entry point**: `wdio.conf.ts`
- **Specs**: `tests/mobile/specs/`
- **Page Objects**: `tests/mobile/pages/`
- **APKs**: `tests/mobile/apks/`
- **Helpers**: `shared/utils/mobile/`

## Rules

- Keep selectors and page objects up to date.
- Use codebase-memory-mcp for structural analysis.
- Everything in English (identifiers, comments, docs).
