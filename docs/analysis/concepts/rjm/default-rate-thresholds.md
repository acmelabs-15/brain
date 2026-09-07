---
package: rjm
name: DEFAULT_RATE_THRESHOLDS
slug: default-rate-thresholds
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/github_core/__init__.py, sha256: 8eff83b2be69b5158b6f035088b9e9a74d814704ddfc2364caf814b86c248031}
  - {path: scripts/github_core/api.py, sha256: 32bed621828925af35788806e083f79b208596e77937dec1e9537ffd3ca38e0a}
  - {path: scripts/github_core/rate_limit.py, sha256: 5d4b36bbf056d64c5d45e9f783b33042a8cc0d6475888bb4b9c0f8218a39ef00}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# DEFAULT_RATE_THRESHOLDS

## Definition — verbatim
(used, not defined)

> "DEFAULT_RATE_THRESHOLDS: dict[str, int] = {" — scripts/github_core/rate_limit.py:17

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/github_core/__init__.py | 10 | used here | Re-exported in package root for external callers performing API rate limit preflights. |
| scripts/github_core/api.py | 37 | used here | Imported from rate_limit module to support legacy workflow rate limit verification. |
| scripts/github_core/rate_limit.py | 17 | defines | Defines default minimum remaining quota thresholds across GitHub API resource categories. |

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
`DEFAULT_RATE_THRESHOLDS` is a Python dictionary constant mapping GitHub API resource categories to minimum safe threshold limits rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
