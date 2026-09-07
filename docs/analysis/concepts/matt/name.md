---
package: matt
name: name
slug: name
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: skills/engineering/wayfinder/SKILL.md, sha256: fee6e1d0c50f0e736b4ef8a599060c959afae904c9a97d82c97f049fcc3aa0f1}
  - {path: skills/in-progress/claude-handoff/SKILL.md, sha256: 6738e8b7c7899ea0038fb7a5c859ca1b90c7b1eb40123dcdbe94c51b5b119f12}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# name

## Definition — verbatim
> "Every map and ticket is an issue, so it has a **name**: its title." — skills/engineering/wayfinder/SKILL.md:17

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| skills/engineering/wayfinder/SKILL.md | 17 | defined here | Establishes the rule that maps and tickets must be referred to by their human-readable titles rather than bare numeric IDs. |
| skills/in-progress/claude-handoff/SKILL.md | 10 | used here | Instructs passing a descriptive name to set display names in the background job list and session picker. |

## Consumes
An issue ticket or spawned background agent process.

## Produces
A human-readable label or title identifying the artifact or task.

## When applied
Applied when naming maps, tickets, and background agent sessions across planning and handoff workflows.

## Sub-concepts
none

## Part of
wayfinder, claude-handoff

## Implementation status
defects: other

## Design notes
A design pattern across matt's planning and handoff workflows requiring artifacts (issues, decision tickets, background jobs) to be identified by human-meaningful names (titles, descriptive labels) rather than cryptic numeric identifiers (`#42`) or process IDs, preserving legibility at a glance.
