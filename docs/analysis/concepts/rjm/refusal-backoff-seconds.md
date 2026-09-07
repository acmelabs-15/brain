---
package: rjm
name: REFUSAL_BACKOFF_SECONDS
slug: refusal-backoff-seconds
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .github/scripts/assign_bot_reviewer.py, sha256: 16383cb10afb0de419d0af21fc4c6eae32b02146e40224606224d23cabe6f1fe}
  - {path: scripts/github_core/api.py, sha256: 32bed621828925af35788806e083f79b208596e77937dec1e9537ffd3ca38e0a}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# REFUSAL_BACKOFF_SECONDS

## Definition — verbatim
(used, not defined)

> "REFUSAL_BACKOFF_SECONDS = (15.0, 30.0)" — scripts/github_core/api.py:745

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .github/scripts/assign_bot_reviewer.py | 52 | used here | Imported constant configuring retry intervals when encountering rate limit refusals. |
| scripts/github_core/api.py | 745 | defined here | Constant defining the two-rung retry backoff intervals (15.0s, 30.0s) for API rate limit refusals. |

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
defects: exit-code-mismatch, doc-drift

## Design notes
REFUSAL_BACKOFF_SECONDS is a numeric tuple configuration constant specifying retry backoff windows for API rate limit refusals rather than a lifecycle concept.
