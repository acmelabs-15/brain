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
verified: 2026-09-05 quote-check+coverage
---

# skills/misc/migrate-to-shoehorn/SKILL.md

## Purpose — required, verbatim
> "`shoehorn` lets you pass partial data in tests while keeping TypeScript happy. It replaces `as` assertions with type-safe alternatives." — skills/misc/migrate-to-shoehorn/SKILL.md:10

## Design intent — required
Refactoring and code hygiene skill that automates migrating TypeScript test files from unsound type assertions (`as Type`, `as unknown as Type`) to `@total-typescript/shoehorn` utility functions (`fromPartial()`, `fromAny()`, `fromExact()`). Eliminates boilerplate required to mock massive objects in unit tests, maintains editor autocompletion, and strictly fences shoehorn usage to test files rather than production code.

## Phase — required
none

## Inputs — required
TypeScript test files (`*.test.ts`, `*.spec.ts`) identified through user questions and grep search for type assertion patterns.

## Outputs — required
Installed dependency `@total-typescript/shoehorn` and modified test files with shoehorn import statements and type-safe partial mock helpers.

## Invokes — required
none

## Invoked by — required
- doc README.md — skills/misc/README.md:6

## Concepts named — required, verbatim
- `migrate-to-shoehorn` — skills/misc/migrate-to-shoehorn/SKILL.md:2 — defined here
- `@total-typescript/shoehorn` — skills/misc/migrate-to-shoehorn/SKILL.md:3 — used here
- `shoehorn` — skills/misc/migrate-to-shoehorn/SKILL.md:10 — defined here
- `as` — skills/misc/migrate-to-shoehorn/SKILL.md:10 — used here
- `Double-as` — skills/misc/migrate-to-shoehorn/SKILL.md:18 — defined here
- `fromPartial` — skills/misc/migrate-to-shoehorn/SKILL.md:54 — defined here
- `fromAny` — skills/misc/migrate-to-shoehorn/SKILL.md:92 — defined here
- `fromExact` — skills/misc/migrate-to-shoehorn/SKILL.md:103 — defined here

## Structure
- Migrate to Shoehorn — skills/misc/migrate-to-shoehorn/SKILL.md:6
- Why shoehorn? — skills/misc/migrate-to-shoehorn/SKILL.md:8
- Install — skills/misc/migrate-to-shoehorn/SKILL.md:20
- Migration patterns — skills/misc/migrate-to-shoehorn/SKILL.md:26
- Large objects with few needed properties — skills/misc/migrate-to-shoehorn/SKILL.md:28
- `as Type` → `fromPartial()` — skills/misc/migrate-to-shoehorn/SKILL.md:65
- `as unknown as Type` → `fromAny()` — skills/misc/migrate-to-shoehorn/SKILL.md:81
- When to use each — skills/misc/migrate-to-shoehorn/SKILL.md:97
- Workflow — skills/misc/migrate-to-shoehorn/SKILL.md:105

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
Enforces an explicit boundary condition: "Test code only. Never use shoehorn in production code." (line 12). Provides clear mapping between common testing anti-patterns and their shoehorn replacements.

## Context cost
2795 bytes, 119 lines, approximately 600 tokens.
