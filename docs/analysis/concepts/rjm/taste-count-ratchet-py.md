---
package: rjm
name: taste_count_ratchet.py
slug: taste-count-ratchet-py
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

# taste_count_ratchet.py

## Definition — verbatim
(used, not defined)

> "``taste_count_ratchet.py`` (issue #3779). Only the counting differs. Everything" — scripts/ci/count_ratchet.py:11

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/ci/count_ratchet.py | 11 | used here | Cited alongside ruff_count_ratchet.py as a consumer of shared count ratchet policy. |

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
A script file implementing the count ratchet gate for taste-lint error violations rather than an abstract lifecycle concept.
