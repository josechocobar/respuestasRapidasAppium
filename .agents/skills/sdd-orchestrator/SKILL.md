---
name: sdd-orchestrator
description: SDD orchestrator for Appium + TypeScript E2E tests. Flow: Understanding -> questions/assumptions -> Spec -> Gherkin (approval) -> test plan -> coding.
---

# SDD Orchestrator Skill (Appium + TypeScript)

Coordinates specification-driven development in **mobile E2E tests**.

## Artifacts

All SDD files are stored in `docs/specs/<active-branch>/`.

## Execution Flow (SDD Pipeline)

### Phase 0: Understanding

1. Summarize what to do, why, scope, and out of scope.

### Phase 1: Questions / Assumptions

1. List explicit assumptions.
2. Ask questions with options when ambiguous.
3. Do not proceed until answered.

### Phase 2: Spec

1. `user-story-creator`: user story + criteria.
2. `architecture-guide`: impact on specs/pages/helpers.

### Phase 3: Gherkin (requires approval)

1. `gherkin-creator`: Given/When/Then scenarios.
2. Request explicit user approval.

### Phase 4: Test Plan

1. `qa-testcases` + `test-automation`: test list.
2. Ask for suggestions.

### Phase 5: Coding (coder-agent)

1. Implement tests first and make them pass.
2. Implement page objects/helpers.
3. Lint and final report.

## Agents

- `spec-agent`: Phases 0-4.
- `coder-agent`: Phase 5.
