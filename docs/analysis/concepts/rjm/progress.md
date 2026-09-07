---
package: rjm
name: progress
slug: progress
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/eval/_pr_churn.py, sha256: 027d16099d7ba9d03cbd30f7d78b433c82c8b84c715a4ae795f1547b21008f84}
  - {path: scripts/progress/reporter.py, sha256: 3a09cf686fe7a267467190029851cc0ed3ce5ab9b9f68b573c48a84acb8b2cdb}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# progress

## Definition — verbatim
(used, not defined)

> "progress" — scripts/eval/_pr_churn.py:106

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/eval/_pr_churn.py | 106 | defined here | Baseline commit churn category classifying productive feature, implementation, and doc progress commits. |
| scripts/progress/reporter.py | 120 | used here | Formatted stderr log message token emitted when reporting execution progress across session phases. |

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
`progress` is an identifier used for feature-advancing commit classification in `_pr_churn.py` and CLI progress log tags in `reporter.py` rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
