---
package: rjm
name: _RESERVED_BRANCH_NAMES
slug: reserved-branch-names
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/scope_pr_base.py, sha256: 76a9c6117162cb2952a23e156f446c41da4573183334115690e28da4a824364f}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# _RESERVED_BRANCH_NAMES

## Definition — verbatim
(used, not defined)

> "_RESERVED_BRANCH_NAMES = frozenset(" — scripts/scope_pr_base.py:37

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/scope_pr_base.py | 37 | defined here | Frozenset of git special ref names rejected as plain branch names to prevent silent resolution to origin/HEAD. |

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
`_RESERVED_BRANCH_NAMES` is a constant collection of reserved git ref names in scope gate tooling rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
