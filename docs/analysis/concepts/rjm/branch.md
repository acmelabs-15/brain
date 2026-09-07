---
package: rjm
name: BRANCH
slug: branch
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/ci/ruleset_required_contexts.py, sha256: e20d3bab6c5e8d2312db178d5a46b54f27f0a1fc6401ccd229996a4f7f57234b}
  - {path: scripts/validation/git_hook_policy.py, sha256: 43137253ce418f1bb7e76d0eeddf685cbc9041c84c49e2b38395d0605bdf5ada}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# BRANCH

## Definition — verbatim
(used, not defined)

> "BRANCH = \"main\"" — scripts/ci/ruleset_required_contexts.py:6

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/ci/ruleset_required_contexts.py | 6 | defined here | Constant naming the default repository branch against which required ruleset contexts are validated. |
| scripts/validation/git_hook_policy.py | 8413 | defined here | Command dispatch mapping linking the "branch" CLI subcommand to its validation policy handler. |

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
`BRANCH` is a module constant in `ruleset_required_contexts.py` and a command mapping token in `git_hook_policy.py` rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
