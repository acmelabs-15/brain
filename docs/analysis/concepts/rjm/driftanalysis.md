---
package: rjm
name: "DriftAnalysis"
slug: driftanalysis
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/buy-vs-build-framework/scripts/check_reassessment_triggers.py, sha256: f8f1d7b0e29c9d8ce64daf97e8f81f34057384309203ba9ef1eecbb73eda1afb}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# DriftAnalysis

## Definition — verbatim
(used, not defined)

> "class DriftAnalysis:" — .claude/skills/buy-vs-build-framework/scripts/check_reassessment_triggers.py:20

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/buy-vs-build-framework/scripts/check_reassessment_triggers.py | 20 | defined here | Python dataclass definition holding drift analysis metrics, recommendation verdict, and triggered rules. |

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
defects: doc-drift, exit-code-mismatch, missing-path

## Design notes
A Python dataclass identifier in `check_reassessment_triggers.py` encapsulating the output structure of assumption drift analysis rather than an operational lifecycle concept, authored with kind name-only per D-023.
