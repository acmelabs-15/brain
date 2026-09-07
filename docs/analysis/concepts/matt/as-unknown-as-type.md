---
package: matt
name: as unknown as Type
slug: as-unknown-as-type
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

# as unknown as Type

## Definition — verbatim
(used, not defined)

> "### `as unknown as Type` → `fromAny()`" — skills/misc/migrate-to-shoehorn/SKILL.md:81

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| skills/misc/migrate-to-shoehorn/SKILL.md | 81 | used here | Migration pattern heading identifying double type assertions to replace with fromAny(). |

## Consumes
Intentionally invalid or incompatible test data.

## Produces
Double assertion coercing values through unknown to bypass TypeScript error checks.

## When applied
Used in negative test cases where invalid inputs must be passed to functions expecting strict types.

## Sub-concepts
none

## Part of
double-as, migrate-to-shoehorn

## Implementation status
clean

## Design notes
A double-assertion TypeScript idiom that completely disables type checking by routing through unknown, replaced in shoehorn workflows by fromAny().
