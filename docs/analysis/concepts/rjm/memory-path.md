---
package: rjm
name: MEMORY_PATH
slug: memory-path
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# MEMORY_PATH

## Definition — verbatim
(used, not defined)

> "MEMORY_PATH = \".serena/memories/pr-review/pr-comment-responder-skills.md\"" — scripts/update_reviewer_signal_stats.py:67

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/update_reviewer_signal_stats.py | 67 | defined here | Constant defining the relative file path to the Serena memory document for reviewer stats. |

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
A filesystem path constant identifier pointing to a Serena memory file rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
