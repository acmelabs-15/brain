---
package: rjm
name: _is_ancestor
slug: is-ancestor
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# _is_ancestor

## Definition — verbatim
(used, not defined)

> "def _is_ancestor(sha: str, base_ref: str, repo: str) -> bool:" — scripts/maintenance/detect_unlanded_commits.py:55

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/maintenance/detect_unlanded_commits.py | 55 | defined here | Helper testing whether a commit SHA is an ancestor of base_ref via git merge-base. |
| scripts/validation/push_ref_staleness.py | 134 | defined here | Helper testing whether an older ref is an ancestor of a newer ref in the local graph. |

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
defects: doc-drift, orphan

## Design notes
_is_ancestor is a private Git merge-base ancestry predicate helper function rather than an SDLC lifecycle concept, classified as name-only per D-023.
