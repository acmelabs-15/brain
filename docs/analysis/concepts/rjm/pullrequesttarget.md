---
package: rjm
name: PullRequestTarget
slug: pullrequesttarget
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/github_core/workflow_runs.py, sha256: d42164ba37dd5231e8d09b7764ef9068dfb00956ed3e0ed10921ef5e5986eab3}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# PullRequestTarget

## Definition — verbatim
(used, not defined)

> "PullRequestTarget" — scripts/github_core/workflow_runs.py:26

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/github_core/workflow_runs.py | 26 | defined here | Dataclass pairing PR number, head branch name, and head repository identifier. |

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
Dataclass identifier (`PullRequestTarget`) in `workflow_runs.py` identifying pull request targets across forks rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
