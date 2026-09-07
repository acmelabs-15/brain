---
package: rjm
name: _diagnose_hooks_dir
slug: diagnose-hooks-dir
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

# _diagnose_hooks_dir

## Definition — verbatim
(used, not defined)

> "def _diagnose_hooks_dir(repo_root: Path, hooks_dir: Path) -> str | None:" — scripts/validation/check_git_hook_health.py:205

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/check_git_hook_health.py | 205 | defined here | Helper function that diagnoses whether the resolved hooks directory contains an executable probe hook without querying git again. |

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
`_diagnose_hooks_dir` is a private Python helper function in `scripts/validation/check_git_hook_health.py` rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
