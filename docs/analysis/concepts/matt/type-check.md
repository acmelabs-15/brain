---
package: matt
name: type check
slug: type-check
kind: gate
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

# type check

## Definition — verbatim
(used, not defined)

> "Run type check to verify" — skills/misc/migrate-to-shoehorn/SKILL.md:118

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| skills/misc/migrate-to-shoehorn/SKILL.md | 118 | used here | Final workflow checklist step executed to confirm that test assertions migrated to shoehorn type-check cleanly. |

## Consumes
Test files migrated from `as` type assertions to `@total-typescript/shoehorn` functions (`fromPartial`, `fromAny`, `fromExact`).

## Produces
Compiler diagnostics or clean verification confirming that test mock structures conform to expected TypeScript types.

## When applied
"Run type check to verify" — skills/misc/migrate-to-shoehorn/SKILL.md:118

## Sub-concepts
none

## Part of
migrate-to-shoehorn

## Implementation status
clean

## Design notes
A verification gate concluding the shoehorn migration workflow. It executes the TypeScript compiler against updated test suites to confirm that substituting `as` assertions with shoehorn functions (`fromPartial`, `fromAny`, `fromExact`) maintains type correctness without unresolved compiler errors.
