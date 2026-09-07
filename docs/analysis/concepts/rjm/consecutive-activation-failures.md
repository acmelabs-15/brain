---
package: rjm
name: consecutive_activation_failures
slug: consecutive-activation-failures
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

# consecutive_activation_failures

## Definition — verbatim
(used, not defined)

> "one entry per moved reference with `consecutive_activation_failures`," — scripts/eval/README.md:305

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/eval/README.md | 305 | defined here | Documented persistent JSON state field recording consecutive activation failure streaks for moved references. |
| scripts/eval/software_engineering_library_activation_gate.py | 129 | defined here | State dictionary metric evaluated by gate logic to detect references exceeding the failure threshold. |

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
`consecutive_activation_failures` is a persistent state dictionary key tracking failure streaks for moved references rather than an SDLC lifecycle concept.
