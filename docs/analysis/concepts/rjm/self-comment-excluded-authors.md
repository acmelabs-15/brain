---
package: rjm
name: SELF_COMMENT_EXCLUDED_AUTHORS
slug: self-comment-excluded-authors
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# SELF_COMMENT_EXCLUDED_AUTHORS

## Definition — verbatim
(used, not defined)

> "SELF_COMMENT_EXCLUDED_AUTHORS = [" — scripts/update_reviewer_signal_stats.py:54

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/update_reviewer_signal_stats.py | 54 | defined here | Configuration list of bot author logins excluded from self-comment filtering logic. |

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
A configuration constant list identifier for excluded PR comment authors rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
