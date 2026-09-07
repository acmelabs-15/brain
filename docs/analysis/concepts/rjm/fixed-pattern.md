---
package: rjm
name: FIXED_PATTERN
slug: fixed-pattern
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# FIXED_PATTERN

## Definition — verbatim
(used, not defined)

> "FIXED_PATTERN = re.compile(" — scripts/update_reviewer_signal_stats.py:78

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/update_reviewer_signal_stats.py | 78 | defined here | Compiled regex matching review comment text indicating an issue was resolved or addressed. |

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
A compiled regular expression pattern constant detecting resolution keywords rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
