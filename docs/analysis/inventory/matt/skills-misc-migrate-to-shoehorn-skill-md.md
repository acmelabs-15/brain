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
verified: 2026-09-04 quote-check+coverage
---

# skills/misc/migrate-to-shoehorn/SKILL.md

## Purpose — required, verbatim
> "`shoehorn` lets you pass partial data in tests while keeping TypeScript happy. It replaces `as` assertions with type-safe alternatives." — skills/misc/migrate-to-shoehorn/SKILL.md:10

## Design intent — required
Guides migrating TypeScript test files from unsafe `as` type assertions (`as Type`, `as unknown as Type`) to Matt Pocock's `@total-typescript/shoehorn` utility library (`fromPartial`, `fromAny`, `fromExact`). Strictly emphasizes usage in test code only, never in production. Outlines migration patterns, mapping table, and step-by-step migration workflow.

## Phase — required
cross-phase

## Inputs — required
User specifications of test files with `as` assertions, details on large objects with partial properties or intentionally wrong test data.

## Outputs — required
Modified TypeScript test files with `as` assertions replaced by `fromPartial()` or `fromAny()` and library imports added; `@total-typescript/shoehorn` installed.

## Invokes — required
none

## Invoked by — required
- doc skills/misc/README.md — skills/misc/README.md:6

## Concepts named — required, verbatim
- `shoehorn` — skills/misc/migrate-to-shoehorn/SKILL.md:10 — defined here
- `fromPartial` — skills/misc/migrate-to-shoehorn/SKILL.md:54 — defined here
- `fromAny` — skills/misc/migrate-to-shoehorn/SKILL.md:92 — defined here
- `fromExact` — skills/misc/migrate-to-shoehorn/SKILL.md:103 — defined here

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
Workflow step 2 installs `@total-typescript/shoehorn` with `npm i @total-typescript/shoehorn` without the `-D` flag for devDependencies, despite the strong rule stated on line 12: "Test code only. Never use shoehorn in production code."

## Context cost
2795 bytes (~700 tokens).
