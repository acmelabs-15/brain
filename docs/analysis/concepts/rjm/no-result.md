---
package: rjm
name: NO_RESULT
slug: no-result
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/eval/README.md, sha256: 0f391cb999a2e1691aac7a3e4e5464b79e3edfa407b876b8496bb3723c965df5}
  - {path: scripts/eval/software_engineering_library_activation_gate.py, sha256: 64294f2ea62da82aec8ee1bab599efc2f2ff8e49c480edf891ff20494518ae79}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# NO_RESULT

## Definition — verbatim
(used, not defined)

> "`FAIL_NO_DELTA`, `NO_POSITIVE_CASES`, and `NO_RESULT` increment the rollback streak." — scripts/eval/README.md:307

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/eval/README.md | 307 | defined here | Documented as an eval outcome verdict that increments the consecutive failure rollback streak. |
| scripts/eval/software_engineering_library_activation_gate.py | 34 | used here | Included in `ROLLBACK_VERDICTS` set triggering failure counter increments during gate evaluation. |

## Consumes
none

## Produces
none

## When applied
none

## Sub-concepts
none

## Part of
none

## Implementation status
defects: doc-drift, missing-path, script-bug

## Design notes
`NO_RESULT` is an evaluation status verdict string indicating an absence of valid scoring results that counts as an activation failure rather than an SDLC lifecycle concept.
