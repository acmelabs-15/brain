---
package: rjm
name: FORK_BASELINE_ABSENT
slug: fork-baseline-absent
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/ci/count_ratchet.py, sha256: 095a6520dd2798e9b67b1384cdf8f9bd9bd9b36c6f01e04cc1186e08a5acd4f0}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# FORK_BASELINE_ABSENT

## Definition — verbatim
(used, not defined)

> "FORK_BASELINE_ABSENT = \"fork-baseline-absent\"" — scripts/ci/count_ratchet.py:597

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/ci/count_ratchet.py | 597 | defined here | Constant string representing failure condition where the baseline file did not exist at the fork commit. |

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
`FORK_BASELINE_ABSENT` is an internal string constant identifier in `count_ratchet.py` indicating that the baseline file did not exist at the fork commit rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
