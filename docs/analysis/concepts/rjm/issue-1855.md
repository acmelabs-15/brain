---
package: rjm
name: issue #1855
slug: issue-1855
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/external_signals/__init__.py, sha256: 5a166b38cfca8b73e0d5f6c531345bdf1466bc01eaf5d61acd3b2d85adbf1447}
  - {path: scripts/external_signals/acceptance_criteria.py, sha256: f11417815ba57aa29786c3c9c962fd0a811cb2ac651b9b466992e482bb8883e8}
  - {path: scripts/external_signals/gate_aggregator.py, sha256: f9f7a2f2f9ebcc47353b79aad06d7aeeafbb32ccc699027030b5673c83df71e3}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# issue #1855

## Definition — verbatim
(used, not defined)

> "*enrich* the reports these tools emit, but per issue #1855 must never be the" — scripts/external_signals/__init__.py:5

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/external_signals/__init__.py | 5 | used here | Issue reference establishing that quality gates must not rely solely on LLM judgment to pass. |
| scripts/external_signals/acceptance_criteria.py | 5 | used here | Issue reference establishing mechanical acceptance-criteria extraction as the external signal for spec validation. |
| scripts/external_signals/gate_aggregator.py | 4 | used here | Issue reference mandating gate aggregation logic that refuses to pass without at least one external signal. |

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
`issue #1855` is a GitHub issue tracker reference establishing the architectural mandate for externally-grounded quality gate signals rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
