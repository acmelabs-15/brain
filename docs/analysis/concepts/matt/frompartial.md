---
package: matt
name: fromPartial
slug: frompartial
kind: technique
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

# fromPartial

## Definition — verbatim
> "### `as Type` → `fromPartial()`" — skills/misc/migrate-to-shoehorn/SKILL.md:65

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| skills/misc/migrate-to-shoehorn/SKILL.md | 54 | used here | Import statement importing fromPartial from @total-typescript/shoehorn. |
| skills/misc/migrate-to-shoehorn/SKILL.md | 65 | defined here | Migration pattern heading defining replacement of as Type with fromPartial. |

## Consumes
Partial mock data objects in test files.

## Produces
Type-safe values satisfying target parameters without faking all properties.

## When applied
"Pass partial data that still type-checks" — skills/misc/migrate-to-shoehorn/SKILL.md:101

## Sub-concepts
none

## Part of
migrate-to-shoehorn

## Implementation status
clean

## Design notes
A TypeScript test helper function from shoehorn that permits partial objects while preserving type validation for all supplied fields, eliminating fragile boilerplate in test fixtures.
