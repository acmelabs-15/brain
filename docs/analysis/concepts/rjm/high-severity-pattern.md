---
package: rjm
name: HIGH_SEVERITY_PATTERN
slug: high-severity-pattern
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# HIGH_SEVERITY_PATTERN

## Definition — verbatim
(used, not defined)

> "HIGH_SEVERITY_PATTERN = re.compile(" — scripts/update_reviewer_signal_stats.py:84

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/update_reviewer_signal_stats.py | 84 | defined here | Compiled regex detecting security vulnerabilities or critical severity terms in review comments. |

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
A compiled regular expression pattern constant detecting high severity terms rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
