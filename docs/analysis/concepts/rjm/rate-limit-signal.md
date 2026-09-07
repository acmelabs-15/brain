---
package: rjm
name: RATE_LIMIT_SIGNAL
slug: rate-limit-signal
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/ci/failure_classification.py, sha256: ac3e3891e6118e9b0a356e05751826f7733646b305b8c3a01fd7e2ae28d83337}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# RATE_LIMIT_SIGNAL

## Definition — verbatim
(used, not defined)

> "RATE_LIMIT_SIGNAL = re.compile(" — scripts/ci/failure_classification.py:26

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/ci/failure_classification.py | 26 | defined here | Compiled regular expression disambiguating HTTP 403 rate limits from permission denials. |

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
A regex pattern constant identifying API rate limits to prevent misclassifying them as token permission errors rather than an operational lifecycle concept.
