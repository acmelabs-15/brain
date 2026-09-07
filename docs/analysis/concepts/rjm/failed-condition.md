---
package: rjm
name: _failed_condition
slug: failed-condition
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/validation/check_git_hook_health.py, sha256: 994cbeca1efab1c3e1fa9fac5a2e1f7bf19447ebc27da86cf4925a6ef85ffee2}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# _failed_condition

## Definition — verbatim
(used, not defined)

> "def _failed_condition(repo_root: Path, hooks_dir: Path) -> str:" — scripts/validation/check_git_hook_health.py:179

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/check_git_hook_health.py | 179 | defined here | Helper function generating human-readable diagnostic descriptions of why git hooks are inactive or broken. |

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
_failed_condition is an internal Python helper function identifier describing git hook failure causes rather than an SDLC lifecycle concept, classified as kind: name-only per D-023.
