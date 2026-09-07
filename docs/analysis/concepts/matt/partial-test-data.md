---
package: matt
name: partial test data
slug: partial-test-data
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: skills/misc/migrate-to-shoehorn/SKILL.md, sha256: de4da4c11d924fac79c924b2ee3d2db4a5cb98386eb490a599119463d036ae72}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# partial test data

## Definition — verbatim
(used, not defined)

> "`shoehorn` lets you pass partial data in tests while keeping TypeScript happy. It replaces `as` assertions with type-safe alternatives." — skills/misc/migrate-to-shoehorn/SKILL.md:10

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| skills/misc/migrate-to-shoehorn/SKILL.md | 3 | used here | Frontmatter trigger condition describing user requirement for mocking subset fields in tests. |

## Consumes
Complex domain types or request/response objects with numerous required properties.

## Produces
Minimal mock objects satisfying test prerequisites without extraneous boilerplate.

## When applied
Used when writing unit tests for functions that only inspect a small subset of fields on a large data structure.

## Sub-concepts
frompartial

## Part of
migrate-to-shoehorn

## Implementation status
clean

## Design notes
A testing pattern where test cases instantiate only the subset of object properties needed for the specific behavior under test, avoiding the maintenance overhead of faking dozens of unrelated fields.
