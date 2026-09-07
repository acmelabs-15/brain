---
package: rjm
name: issue #2967
slug: issue-2967
kind: reference
package_phase: cross-phase
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

# issue #2967

## Definition — verbatim
(used, not defined)

> """"AI-review infrastructure gate (ADR-006 extraction, issue #2967)." — scripts/ci/check_ai_review_infra_gate.py:2

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/ci/check_ai_review_infra_gate.py | 2 | used here | Cites tracking issue for extracting inline shell gate logic into a standalone Python script per ADR-006. |

## Consumes
none

## Produces
none

## When applied
Cited as the architectural defect and tracking reference prompting extraction of the AI review infrastructure gate.

## Sub-concepts
none

## Part of
none

## Implementation status
clean

## Design notes
`issue #2967` is an architectural tracking issue in the repository that drove the extraction of brittle inline YAML shell logic in the AI review workflow into a testable standalone Python script per ADR-006.
