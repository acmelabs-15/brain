---
package: rjm
name: github_core
slug: github-core
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .github/scripts/test_rate_limit.py, sha256: 51a6e37f475906db141e0afebf83f4c6d67a90e503092fdff6a0e745f60fe9f9}
  - {path: scripts/migrations/req003_inline_plugin_root_bootstrap.py, sha256: 4a43689e9d9d33639adc7633b1d2b64661a05d5f7ff3fa1145306f30718612b3}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# github_core

## Definition — verbatim
(used, not defined)

> "``github_core`` library. Designed for GitHub Actions workflow integration" — .github/scripts/test_rate_limit.py:5

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .github/scripts/test_rate_limit.py | 5 | used here | Cited in docstring as the shared library providing check_workflow_rate_limit. |
| scripts/migrations/req003_inline_plugin_root_bootstrap.py | 11 | used here | Cited as one of the library modules whose imports require inline bootstrap path resolution. |

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
defects: orphan, other

## Design notes
`github_core` is the Python package name for repository GitHub integration utilities under `scripts/github_core/` rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
