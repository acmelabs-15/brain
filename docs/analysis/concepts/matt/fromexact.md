---
package: matt
name: fromExact()
slug: fromexact
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

# fromExact()

## Definition — verbatim
> "| `fromExact()` | Force full object (swap with fromPartial later) |" — skills/misc/migrate-to-shoehorn/SKILL.md:103

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| skills/misc/migrate-to-shoehorn/SKILL.md | 103 | defined here | Comparison table row defining use case for enforcing complete object shape. |

## Consumes
Test objects where complete property coverage is desired.

## Produces
Strictly enforced full object mock that can later be transitioned to fromPartial.

## When applied
"Force full object (swap with fromPartial later)" — skills/misc/migrate-to-shoehorn/SKILL.md:103

## Sub-concepts
none

## Part of
migrate-to-shoehorn

## Implementation status
clean

## Design notes
A shoehorn utility function that enforces complete interface conformance without allowing missing fields, providing an explicit transition step before relaxing mock constraints with fromPartial().
