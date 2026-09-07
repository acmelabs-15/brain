---
package: rjm
name: DEFAULT_THRESHOLD
slug: default-threshold
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/eval/software_engineering_library_activation_gate.py, sha256: 64294f2ea62da82aec8ee1bab599efc2f2ff8e49c480edf891ff20494518ae79}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# DEFAULT_THRESHOLD

## Definition — verbatim
(used, not defined)

> "DEFAULT_THRESHOLD = 2" — scripts/eval/software_engineering_library_activation_gate.py:33

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/eval/software_engineering_library_activation_gate.py | 33 | defined here | Default integer constant defining the consecutive failure count threshold needed to trigger a rollback. |

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
clean

## Design notes
`DEFAULT_THRESHOLD` is a configuration constant in `software_engineering_library_activation_gate.py` specifying the consecutive failure streak limit rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
