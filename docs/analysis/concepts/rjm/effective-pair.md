---
package: rjm
name: _effective_pair
slug: effective-pair
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/validation/check_repo_health.py, sha256: f7f2150b68774a2af74e27eb6a7ee68c4aa28d0e3fef28e6a0a60e59cebf6854}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# _effective_pair

## Definition — verbatim
(used, not defined)

> ":func:`_effective_pair` twice, once for here and once for what a sibling" — scripts/validation/check_repo_health.py:28

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/check_repo_health.py | 28 | defined here | Referenced in module docstring explaining resolution of effective Git configuration scopes. |

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
`_effective_pair` is a Python helper function in `check_repo_health.py` determining the effective Git configuration scope and value according to Git precedence, classified as `kind: name-only` per D-023.
