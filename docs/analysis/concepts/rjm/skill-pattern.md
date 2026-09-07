---
package: rjm
name: SKILL_PATTERN
slug: skill-pattern
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# SKILL_PATTERN

## Definition — verbatim
(used, not defined)

> "SKILL_PATTERN = re.compile(" — scripts/split_bundled_skills.py:61

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/split_bundled_skills.py | 61 | defined here | Regular expression compiling pattern used to identify skill headings within bundled memory files. |

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
defects: exit-code-mismatch, orphan

## Design notes
`SKILL_PATTERN` is a compiled regular expression constant identifier parsing markdown skill headers rather than an operational lifecycle concept, classified as `kind: name-only` per D-023.
