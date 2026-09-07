---
package: rjm
name: Spec / acceptance
slug: spec-acceptance
kind: gate
package_phase: rjm:spec
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: docs/design/external-signal-gating.md, sha256: e2205c9c37e1690af881f70be4867634ecb367f1cbda26948b66209b18e8fa25}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Spec / acceptance

## Definition — verbatim
(used, not defined)

> "| Spec / acceptance        | mechanically-extracted acceptance checkboxes + diff grep   |" — docs/design/external-signal-gating.md:36

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| docs/design/external-signal-gating.md | 36 | used here | Quality gate in external signals table evaluated via mechanically-extracted acceptance checkboxes and diff grep. |

## Consumes
Pull request markdown bodies and unified diffs.

## Produces
Validation verdict on whether all specified acceptance checkboxes are marked and confirmed in the diff.

## When applied
Applied during PR quality gate evaluation to ensure required acceptance criteria have been satisfied.

## Sub-concepts
none

## Part of
external-signal-gating

## Implementation status
defects: missing-path

## Design notes
Spec / acceptance is an automated quality gate in rjm that mechanically extracts acceptance criteria checkboxes from PR descriptions and performs diff grepping to confirm criteria keywords are addressed, grounding specification verification in deterministic code checks rather than LLM assertions.
