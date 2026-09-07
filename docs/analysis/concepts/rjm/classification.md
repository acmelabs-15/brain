---
package: rjm
name: Classification
slug: classification
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/ci/classify_semantic_title_result.py, sha256: b9414829dc1a70004dc8c0803990761701d761ee85c9800cc1ff89e6a57b960d}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Classification

## Definition — verbatim
(used, not defined)

> "The pass/fail decision plus the reason to surface in the job log." — scripts/ci/classify_semantic_title_result.py:54

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/ci/classify_semantic_title_result.py | 53 | defined here | Defined as a frozen dataclass holding the exit code, failure flags, and message for job logging. |

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
defects: orphan

## Design notes
`Classification` is an internal Python dataclass in `classify_semantic_title_result.py` representing a PR title validation result rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
