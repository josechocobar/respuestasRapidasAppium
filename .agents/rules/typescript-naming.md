# Rule: TypeScript Naming and Case Conventions

Follow standard TypeScript/JavaScript coding conventions:

- Files: kebab-case for non-class files (login.page.ts), PascalCase for class files if one class per file.
- Variables/functions/parameters: camelCase.
- Classes/Interfaces/Types/Enums: PascalCase.
- Constants: UPPER_SNAKE_CASE.
- Private members: prefix with # or _ depending on style; prefer # for true privacy.
- Test files: `*.spec.ts` or `*.test.ts`.
- Page objects: `*.page.ts`.
- Selectors: descriptive camelCase (e.g. loginButton).

Avoid Hungarian notation and abbreviations unless widely accepted. Use English for all identifiers.
