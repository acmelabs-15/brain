---
package: rjm
name: UNUSED_PATTERN
slug: unused-pattern
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# UNUSED_PATTERN

## Definition — verbatim
(used, not defined)

> "UNUSED_PATTERN = re.compile(" — scripts/update_reviewer_signal_stats.py:93

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/update_reviewer_signal_stats.py | 93 | defined here | Compiled regex detecting unused code, dead code, or removal suggestions in review comments. |

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
A compiled regular expression pattern constant detecting unused code patterns rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
