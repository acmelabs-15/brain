---
package: rjm
name: scripts/validation/git_hook_policy.py
slug: scripts-validation-git-hook-policy-py
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/ci/taste_count_ratchet.py, sha256: ff9e2fe47024f635d0df5c00d6ffb265ab99ae4f589b786080b5de4fe58611bd}
  - {path: scripts/ci/type_ignore_count_ratchet.py, sha256: 2bd382be93600e1610f8c48e5eb6371620f8a846d1f6e271df96e0aea04cee6b}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# scripts/validation/git_hook_policy.py

## Definition — verbatim
(used, not defined)

> "``scripts/validation/git_hook_policy.py`` captures the exit code, prints" — scripts/ci/taste_count_ratchet.py:6

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/ci/taste_count_ratchet.py | 6 | used here | Cited as the policy script that previously treated taste lints as advisory. |
| scripts/ci/type_ignore_count_ratchet.py | 6 | used here | Cited as the security gate excluding type-ignore suppressions from its changed-line checks. |

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
scripts/validation/git_hook_policy.py is the file path of the git hook policy validation script rather than an autonomous lifecycle concept.
