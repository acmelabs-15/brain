---
package: rjm
name: SKILL_RELPATH
slug: skill-relpath
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# SKILL_RELPATH

## Definition — verbatim
(used, not defined)

> "SKILL_RELPATH = Path(\".claude/skills/github/scripts/pr/new_pr.py\")" — scripts/new_validated_pr.py:31

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/new_validated_pr.py | 31 | defined here | Constant defining the relative repository path to the target PR creation script. |

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
A Python module-level constant identifier specifying the path to the PR creation skill script rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
