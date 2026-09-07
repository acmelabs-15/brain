---
package: rjm
name: resolve_pr_base_branch
slug: resolve-pr-base-branch
kind: name-only
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/detect_scope_explosion.py, sha256: d7bfbd26d4d3d5afd838adcbee0815b32f7730ca41ef2f7ce98c686f5870bfa9}
  - {path: scripts/scope_pr_base.py, sha256: 76a9c6117162cb2952a23e156f446c41da4573183334115690e28da4a824364f}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# resolve_pr_base_branch

## Definition — verbatim
(used, not defined)

> "def resolve_pr_base_branch(branch: str) -> str | None:" — scripts/scope_pr_base.py:74

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/detect_scope_explosion.py | 40 | used here | Imported to resolve the pull request base branch when rescoping stacked PR diffs against GitHub. |
| scripts/scope_pr_base.py | 74 | defined here | Function returning the base branch of the single open PR for a specified head branch via `gh pr list`. |

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
resolve_pr_base_branch is a Python helper function identifier in scope_pr_base.py that queries GitHub to identify PR base branches for stacked diff calculation rather than an SDLC lifecycle concept.
