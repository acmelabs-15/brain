---
package: matt
name: Why
slug: why
kind: artifact
package_phase: matt:productivity
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: skills/productivity/teach/MISSION-FORMAT.md, sha256: 8cacbb3c0644d3ae0ea4965564797099401a6930a23f7cf462918576587f2418}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Why

## Definition — verbatim
> "The concrete real-world goal the user is chasing. What changes in their life or work when they have this skill?" — skills/productivity/teach/MISSION-FORMAT.md:11

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| skills/productivity/teach/MISSION-FORMAT.md | 10 | defines | Section heading and template specification for capturing the concrete real-world motivation in MISSION.md. |

## Consumes
User stated motivations, goals, and desired real-world outcomes.

## Produces
The `## Why` section in `MISSION.md`.

## When applied
Authored during initial workspace creation when establishing `MISSION.md` and revised if user goals change.

## Sub-concepts
none

## Part of
teach

## Implementation status
clean

## Design notes
The foundational section of MISSION.md capturing the user's concrete real-world motivation rather than abstract academic curiosity. It forces the teaching agent to identify what will tangibly change in the learner's life or work, preventing lessons from degenerating into unfocused theory.
