---
package: rjm
name: REPO_ROOT_NOT_A_REPO
slug: repo-root-not-a-repo
kind: name-only
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/github_core/repo.py, sha256: 189b9f3cfa59b9d185a0524db79b323a9c0368a0d5fe3236762b409c66eed47e}
  - {path: scripts/github_core/validation.py, sha256: a07f30b4bc09a656e2c5f3d7109928f245a20055d0f60dd3f6165535b412afae}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# REPO_ROOT_NOT_A_REPO

## Definition — verbatim
(used, not defined)

> "REPO_ROOT_NOT_A_REPO = \"not-a-repo\"" — scripts/github_core/repo.py:14

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/github_core/repo.py | 14 | defined here | Status constant indicating git executed successfully and confirmed the directory is not inside a git repository. |
| scripts/github_core/validation.py | 72 | used here | Imported to allow safe fallback to current working directory when git confirms repository absence. |

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
A status constant in `repo.py` indicating that git executed successfully and confirmed the directory is not inside a git repository rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
