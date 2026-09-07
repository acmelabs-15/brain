---
package: matt
name: stateful teaching workspace
slug: stateful-teaching-workspace
kind: pattern
package_phase: matt:Productivity
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: skills/productivity/README.md, sha256: bef3901088b409f00cb1ce6e94f4cf3f4e4865969d8b19330f375cd535b10e37}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# stateful teaching workspace

## Definition — verbatim
> "- **[teach](./teach/SKILL.md)**: Teach the user a new skill or concept over multiple sessions, using the current directory as a stateful teaching workspace." — skills/productivity/README.md:11

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| skills/productivity/README.md | 11 | used here | Summarizes the purpose and working model of the teach skill in the productivity catalog. |

## Consumes
A dedicated directory and the user's multi-session learning goal.

## Produces
Persistent pedagogical artifacts including `MISSION.md`, `RESOURCES.md`, `learning-records/`, and `lessons/`.

## When applied
Applied whenever `teach` is invoked to guide a user through acquiring a skill over multiple sessions.

## Sub-concepts
none

## Part of
teach

## Implementation status
clean

## Design notes
An environment pattern where the current working directory is repurposed into a stateful, persistent learning repository that tracks learner progress across multiple sessions.
