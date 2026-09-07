---
package: rjm
name: filter_stale
slug: filter-stale
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# filter_stale

## Definition — verbatim
(used, not defined)

> "def filter_stale(skills: list[SkillMetadata], stale_days: int) -> list[SkillMetadata]:" — scripts/skill_registry.py:374

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/skill_registry.py | 374 | defined here | Filters a list of skills down to those whose last modified date exceeds the staleness threshold. |

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
defects: orphan, doc-drift

## Design notes
filter_stale is a Python helper function identifier filtering skills by modification date rather than an SDLC lifecycle concept, classified as name-only per D-023.
