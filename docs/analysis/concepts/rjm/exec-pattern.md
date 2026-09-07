---
package: rjm
name: EXEC_PATTERN
slug: exec-pattern
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# EXEC_PATTERN

## Definition — verbatim
(used, not defined)

> "EXEC_PATTERN = re.compile(" — scripts/validation/check_skill_md_exec_portability.py:55

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/check_skill_md_exec_portability.py | 55 | defined here | Regular expression compiled pattern matching executable invocations of internal scripts in SKILL.md files. |

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
defects: other

## Design notes
A compiled regular expression matching script execution commands in validation rather than an agent lifecycle concept.
