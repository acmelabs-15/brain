---
package: rjm
name: _log_structural_missing
slug: log-structural-missing
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/github_core/review_threads.py, sha256: 98d6761bac85cc932d088f42521a191141a5e9cf0675601d681b41c0744b7d5f}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# _log_structural_missing

## Definition — verbatim
(used, not defined)

> "def _log_structural_missing(" — scripts/github_core/review_threads.py:152

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/github_core/review_threads.py | 152 | defined here | Logs structured warnings when expected fields or nodes are missing in a GraphQL response. |

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
An internal structured logging helper function (`_log_structural_missing`) rather than an SDLC lifecycle concept, classified as `name-only` per D-023.
