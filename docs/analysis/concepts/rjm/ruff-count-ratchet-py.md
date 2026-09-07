---
package: rjm
name: ruff_count_ratchet.py
slug: ruff-count-ratchet-py
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/ci/count_ratchet.py, sha256: 095a6520dd2798e9b67b1384cdf8f9bd9bd9b36c6f01e04cc1186e08a5acd4f0}
  - {path: scripts/ci/taste_count_ratchet.py, sha256: ff9e2fe47024f635d0df5c00d6ffb265ab99ae4f589b786080b5de4fe58611bd}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# ruff_count_ratchet.py

## Definition — verbatim
(used, not defined)

> "Two gates use this: ``ruff_count_ratchet.py`` (issue #2993) and" — scripts/ci/count_ratchet.py:10

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/ci/count_ratchet.py | 10 | used here | Cited as one of two primary gates utilizing the shared count ratchet machinery. |
| scripts/ci/taste_count_ratchet.py | 15 | used here | Referenced as the exemplar lint-debt ratchet design whose shape taste count ratchet follows. |

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
A script implementing the count ratchet gate for Ruff lint debt rather than an abstract lifecycle concept.
