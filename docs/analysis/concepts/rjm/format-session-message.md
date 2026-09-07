---
package: rjm
name: format_session_message
slug: format-session-message
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# format_session_message

## Definition — verbatim
(used, not defined)

> "def format_session_message(stale_skills: list[SkillMetadata], stale_days: int) -> str:" — scripts/skill_registry.py:294

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/skill_registry.py | 294 | defined here | Formats a notification string listing stale skills for session start integration. |

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
format_session_message is a Python helper function identifier formatting stale skill notifications rather than an SDLC lifecycle concept, classified as name-only per D-023.
