---
package: rjm
name: RESTORATION_PR_POLICY
slug: restoration-pr-policy
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

# RESTORATION_PR_POLICY

## Definition — verbatim
(used, not defined)

> "RESTORATION_PR_POLICY = (" — scripts/eval/software_engineering_library_activation_gate.py:36

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/eval/software_engineering_library_activation_gate.py | 36 | defined here | Constant string documenting the remediation policy and merge-blocking rules when an activation failure threshold is breached. |

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
`RESTORATION_PR_POLICY` is a module-level constant string in `software_engineering_library_activation_gate.py` documenting remediation protocol text rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
