---
package: matt
name: migrate-to-shoehorn
slug: migrate-to-shoehorn
kind: technique
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: skills/misc/README.md, sha256: 95f0b467b7f3a2bb27421c6536f35392b6846f5ad26b44ab7df00380ed02edf0}
  - {path: skills/misc/migrate-to-shoehorn/SKILL.md, sha256: de4da4c11d924fac79c924b2ee3d2db4a5cb98386eb490a599119463d036ae72}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# migrate-to-shoehorn

## Definition — verbatim
> "description: Migrate test files from `as` type assertions to @total-typescript/shoehorn. Use when user mentions shoehorn, wants to replace `as` in tests, or needs partial test data." — skills/misc/migrate-to-shoehorn/SKILL.md:3

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| skills/misc/migrate-to-shoehorn/SKILL.md | 2 | defined here | Frontmatter skill name defining the test migration procedure. |
| skills/misc/README.md | 6 | used here | Catalog summary describing test file migration from `as` assertions to shoehorn. |

## Consumes
TypeScript test files containing type assertions (discovered via grep), and installed @total-typescript/shoehorn dependency.

## Produces
Migrated test files using shoehorn helper functions (fromPartial, fromAny, fromExact) and clean type check passes.

## When applied
"Use when user mentions shoehorn, wants to replace `as` in tests, or needs partial test data." — skills/misc/migrate-to-shoehorn/SKILL.md:3

## Sub-concepts
frompartial, fromany, fromexact, type-safe-alternatives, partial-test-data, test-code-only, type-check

## Part of
none

## Implementation status
clean

## Design notes
A refactoring technique and workflow in the misc bucket that replaces unsafe `as` type assertions in test files with type-safe shoehorn utilities, preventing test mocks from masking schema regressions.
