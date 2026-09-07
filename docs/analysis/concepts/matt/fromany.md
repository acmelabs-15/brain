---
package: matt
name: fromAny()
slug: fromany
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

# fromAny()

## Definition — verbatim
> "### `as unknown as Type` → `fromAny()`" — skills/misc/migrate-to-shoehorn/SKILL.md:81

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| skills/misc/migrate-to-shoehorn/SKILL.md | 81 | defined here | Migration pattern heading defining replacement of double-as assertions with fromAny(). |

## Consumes
Intentionally invalid mock data for error and boundary testing.

## Produces
Test input passing type checks while preserving IDE autocomplete and refactoring support.

## When applied
"Pass intentionally wrong data (keeps autocomplete)" — skills/misc/migrate-to-shoehorn/SKILL.md:102

## Sub-concepts
none

## Part of
migrate-to-shoehorn

## Implementation status
clean

## Design notes
A shoehorn utility function designed for negative testing, allowing intentionally invalid values to be passed to typed functions without triggering compile errors while retaining IDE code completion.
