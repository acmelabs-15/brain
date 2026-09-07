---
package: rjm
name: WONTFIX_PATTERN
slug: wontfix-pattern
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# WONTFIX_PATTERN

## Definition — verbatim
(used, not defined)

> "WONTFIX_PATTERN = re.compile(" — scripts/update_reviewer_signal_stats.py:81

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/update_reviewer_signal_stats.py | 81 | defined here | Compiled regex matching review comment text indicating an intentional decision not to fix. |

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
A compiled regular expression pattern constant detecting wont-fix keywords rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
