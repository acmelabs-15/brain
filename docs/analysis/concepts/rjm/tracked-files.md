---
package: rjm
name: tracked_files
slug: tracked-files
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/ci/cli_exit_contract_ratchet.py, sha256: 70922e7da82e56e1d9e67083a1a4aed6ed4a29d53e56346cfad7214a517c78f7}
  - {path: scripts/ci/count_ratchet.py, sha256: 095a6520dd2798e9b67b1384cdf8f9bd9bd9b36c6f01e04cc1186e08a5acd4f0}
  - {path: scripts/validation/check_doc_interpreter_portability.py, sha256: 62a3182550bff6eb7dfc04ce073fb53feb78bd52cde315062b3a2fe1543f8ac1}
  - {path: scripts/validation/check_worktree_recipes.py, sha256: 044f9938bfec5b84200b19419b7b1c067033d89a48c49202c59b6d549e32ac67}
  - {path: scripts/validation/validate_skill_shells.py, sha256: 4cba79bf9cb3ec27fd8125379a925e1fa07b4225658f7c7efc102b3dbc88b0d9}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# tracked_files

## Definition — verbatim
(used, not defined)

> "Git-tracked paths matching ``globs``, or None when git could not run." — scripts/ci/count_ratchet.py:255

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/ci/cli_exit_contract_ratchet.py | 60 | used here | Imported from `count_ratchet` to enumerate git-tracked script and test files. |
| scripts/ci/count_ratchet.py | 252 | defined here | Defined to query git ls-files and deduplicate index entries across merge stages. |
| scripts/validation/check_doc_interpreter_portability.py | 227 | defined here | Defined to retrieve POSIX-normalized tracked files matching path patterns. |
| scripts/validation/check_worktree_recipes.py | 241 | defined here | Defined to retrieve tracked paths from the git index for recipe validation. |
| scripts/validation/validate_skill_shells.py | 74 | defined here | Implemented as `_tracked_files` querying git ls-files under skill directories. |

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
defects: exit-code-mismatch

## Design notes
`tracked_files` is a common Python utility function identifier querying git index files rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
