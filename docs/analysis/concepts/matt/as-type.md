---
package: matt
name: as Type
slug: as-type
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

# as Type

## Definition — verbatim
(used, not defined)

> "### `as Type` → `fromPartial()`" — skills/misc/migrate-to-shoehorn/SKILL.md:65

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| skills/misc/migrate-to-shoehorn/SKILL.md | 65 | used here | Pattern heading naming the unsafe type assertion pattern being replaced. |

## Consumes
Incomplete mock objects in TypeScript tests.

## Produces
Manual type assertion overriding compiler type checking.

## When applied
Commonly used in legacy tests to silence missing-property errors when mocking large interfaces.

## Sub-concepts
none

## Part of
migrate-to-shoehorn

## Implementation status
clean

## Design notes
A TypeScript type assertion syntax used in test files to force partial objects to satisfy comprehensive interfaces, treated as an anti-pattern targeted for migration to fromPartial().
