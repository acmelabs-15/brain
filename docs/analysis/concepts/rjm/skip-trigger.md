---
package: rjm
name: SKIP_TRIGGER
slug: skip-trigger
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/ci/check_ai_review_infra_gate.py, sha256: fcc4034f1ade9de3980298877acd16390171096679d20e7b081657457f8c531f}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# SKIP_TRIGGER

## Definition — verbatim
(used, not defined)

> "SKIP_TRIGGER = \"true\"" — scripts/ci/check_ai_review_infra_gate.py:40

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/ci/check_ai_review_infra_gate.py | 40 | defined here | Constant defining the exact string value (`\"true\"`) that triggers skipping the Copilot review invocation. |

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
`SKIP_TRIGGER` is a configuration string constant matching the context failure flag required to trigger gate skipping rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
