---
package: matt
path: skills/misc/migrate-to-shoehorn/SKILL.md
type: skill
bytes: 2795
unit: inv-matt-44
deprecated: false
aliases: []
memo_inputs:
  - {path: skills/misc/migrate-to-shoehorn/SKILL.md, sha256: de4da4c11d924fac79c924b2ee3d2db4a5cb98386eb490a599119463d036ae72}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# skills/misc/migrate-to-shoehorn/SKILL.md

## Purpose — required, verbatim
> "description: Migrate test files from `as` type assertions to @total-typescript/shoehorn. Use when user mentions shoehorn, wants to replace `as` in tests, or needs partial test data." — skills/misc/migrate-to-shoehorn/SKILL.md:3

## Design intent — required
Migration guide and workflow for replacing unsafe TypeScript `as` assertions in test suites with `@total-typescript/shoehorn` utility functions (`fromPartial`, `fromAny`, `fromExact`). Emphasizes that shoehorn is for test code only, never production code. Solves test data boilerplate when testing large interfaces where only a few properties are relevant to the test case.

## Phase — required
cross-phase

## Inputs — required
Test files containing TypeScript `as` assertions (discovered via grep), and user requirements on test files and mock data needs.

## Outputs — required
Updated test files with shoehorn helper imports and function calls replacing type assertions, and installed `@total-typescript/shoehorn` dependency.

## Invokes — required
none

## Invoked by — required
- skill misc — skills/misc/README.md:6

## Concepts named — required, verbatim
- `migrate-to-shoehorn` — skills/misc/migrate-to-shoehorn/SKILL.md:2 — defined here
- `partial test data` — skills/misc/migrate-to-shoehorn/SKILL.md:3 — used here
- `@total-typescript/shoehorn` — skills/misc/migrate-to-shoehorn/SKILL.md:3 — used here
- `shoehorn` — skills/misc/migrate-to-shoehorn/SKILL.md:10 — used here
- `type-safe alternatives` — skills/misc/migrate-to-shoehorn/SKILL.md:10 — used here
- `Test code only` — skills/misc/migrate-to-shoehorn/SKILL.md:12 — defined here
- `production code` — skills/misc/migrate-to-shoehorn/SKILL.md:12 — used here
- `Double-as` — skills/misc/migrate-to-shoehorn/SKILL.md:18 — defined here
- `npm i @total-typescript/shoehorn` — skills/misc/migrate-to-shoehorn/SKILL.md:23 — used here
- `fromPartial` — skills/misc/migrate-to-shoehorn/SKILL.md:54 — used here
- `as Type` — skills/misc/migrate-to-shoehorn/SKILL.md:65 — used here
- `fromPartial()` — skills/misc/migrate-to-shoehorn/SKILL.md:65 — defined here
- `as unknown as Type` — skills/misc/migrate-to-shoehorn/SKILL.md:81 — used here
- `fromAny()` — skills/misc/migrate-to-shoehorn/SKILL.md:81 — defined here
- `fromExact()` — skills/misc/migrate-to-shoehorn/SKILL.md:103 — defined here
- `type check` — skills/misc/migrate-to-shoehorn/SKILL.md:118 — used here

## Structure
- `# Migrate to Shoehorn` — skills/misc/migrate-to-shoehorn/SKILL.md:6
- `## Why shoehorn?` — skills/misc/migrate-to-shoehorn/SKILL.md:8
- `## Install` — skills/misc/migrate-to-shoehorn/SKILL.md:20
- `## Migration patterns` — skills/misc/migrate-to-shoehorn/SKILL.md:26
- `### Large objects with few needed properties` — skills/misc/migrate-to-shoehorn/SKILL.md:28
- "### `as Type` → `fromPartial()`" — skills/misc/migrate-to-shoehorn/SKILL.md:65
- "### `as unknown as Type` → `fromAny()`" — skills/misc/migrate-to-shoehorn/SKILL.md:81
- `## When to use each` — skills/misc/migrate-to-shoehorn/SKILL.md:97
- `## Workflow` — skills/misc/migrate-to-shoehorn/SKILL.md:105

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
Provides clear comparison tables and before/after code examples showing how `fromPartial()` eliminates extensive boilerplate when testing objects with deep or wide shapes.

## Context cost
2795 bytes, 119 lines, approximately 600 tokens.
