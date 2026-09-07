---
package: rjm
name: STATE_PATH
slug: state-path
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/eval/software_engineering_library_activation_ci.py, sha256: 199512179852374e66fdb5c4407c75bfca0a316e0594a85eb2a16ae7a82c2200}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# STATE_PATH

## Definition — verbatim
(used, not defined)

> "STATE_PATH = Path(\".eval-state/software-engineering-library-activation-state.json\")" — scripts/eval/software_engineering_library_activation_ci.py:26

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/eval/software_engineering_library_activation_ci.py | 26 | defined here | Constant defining the persistent state file path for activation failure tracking. |

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
A Python constant identifier specifying the persistent JSON state file path for consecutive activation failure tracking, classified as `kind: name-only` per D-023.
