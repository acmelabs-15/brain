---
package: matt
name: teaching workspace
slug: teaching-workspace
kind: pattern
package_phase: matt:Productivity
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: skills/productivity/teach/GLOSSARY-FORMAT.md, sha256: 9b99859ec28437668130d8f2ce5a342938970f8a1ed4fd38c3eab4f4b5fff210}
  - {path: skills/productivity/teach/SKILL.md, sha256: a32df9dcdfc0c4fdc1c98e1ed3940c5f56b84c1aa90ff60346f32b8b53915b43}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# teaching workspace

## Definition — verbatim
> "Treat the current directory as a teaching workspace. The state of their learning is captured in this directory in several files:" — skills/productivity/teach/SKILL.md:12

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| skills/productivity/teach/GLOSSARY-FORMAT.md | 3 | used here | Mentions the teaching workspace as the domain for which GLOSSARY.md establishes canonical terminology. |
| skills/productivity/teach/SKILL.md | 10 | defined here | Section heading introducing the directory structure and persistent files that comprise the learning environment. |
| skills/productivity/teach/SKILL.md | 12 | defined here | Directs the agent to treat the current working directory as a teaching workspace holding persistent learning state. |

## Consumes
The current working directory and user learning goals.

## Produces
Structured workspace files: `MISSION.md`, `./reference/*.html`, `RESOURCES.md`, `./learning-records/*.md`, `./lessons/*.html`, `./assets/*`, and `NOTES.md`.

## When applied
Active throughout the execution of the teach skill across all teaching sessions.

## Sub-concepts
none

## Part of
teach

## Implementation status
defects: doc-drift, other (skills/productivity/teach/SKILL.md:14-17 omits link to GLOSSARY-FORMAT.md; skills/productivity/teach/SKILL.md:85-90 lacks initial knowledge assessment step causing assumptions before learning records exist)

## Design notes
The fundamental environment pattern of Matt's teach skill, organizing a filesystem directory into a persistent, multi-session learning hub that grounds teaching in goals, trusted resources, incremental HTML lessons, and architectural-style learning records.
