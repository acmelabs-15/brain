---
package: rjm
name: get_comments_by_reviewer
slug: get-comments-by-reviewer
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# get_comments_by_reviewer

## Definition — verbatim
(used, not defined)

> "def get_comments_by_reviewer(" — scripts/update_reviewer_signal_stats.py:177

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/update_reviewer_signal_stats.py | 177 | defined here | Function grouping GraphQL review comment threads by canonical reviewer login while filtering self-comments. |

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
defects: orphan

## Design notes
`get_comments_by_reviewer` is a Python utility function identifier in `scripts/update_reviewer_signal_stats.py` partitioning PR comments by author rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
