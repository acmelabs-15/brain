---
package: rjm
name: CommentData
slug: commentdata
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# CommentData

## Definition — verbatim
(used, not defined)

> "class CommentData:" — scripts/update_reviewer_signal_stats.py:103

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/update_reviewer_signal_stats.py | 103 | defined here | Dataclass representing a single PR review comment with associated thread context and resolution status. |

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
`CommentData` is an internal Python dataclass identifier in `scripts/update_reviewer_signal_stats.py` tracking review comment metadata rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
