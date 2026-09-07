---
package: rjm
name: _SKILL_REL_SCRIPT_PAT
slug: skill-rel-script-pat
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# _SKILL_REL_SCRIPT_PAT

## Definition — verbatim
(used, not defined)

> "_SKILL_REL_SCRIPT_PAT = re.compile(" — scripts/validation/check_skill_md_exec_portability.py:61

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/check_skill_md_exec_portability.py | 61 | defined here | Compiled regular expression matching skill-relative script invocations such as `python3 scripts/foo.py`. |

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
A compiled regular expression pattern identifying relative script invocations rather than an agent lifecycle concept.
