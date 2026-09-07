---
package: matt
name: router skills
slug: router-skills
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: external/writing-for-agents.md, sha256: ccebd127baac18804b7258275bc176b4859aabd8befe8c32a95c5c2056afdd65}
  - {path: skills/productivity/writing-for-agents/SKILL-MECHANICS.md, sha256: c768e6307c7c10728c401c213f2c4ba71c542127eeb7ad2956aabd15a0fa0059}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# router skills

## Definition — verbatim
> "Router skills" — skills/productivity/writing-for-agents/SKILL-MECHANICS.md:20

## Also called — verbatim
`router skill` — skills/productivity/writing-for-agents/SKILL-MECHANICS.md:22

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| external/writing-for-agents.md | 27 | used here | Mentioned as a skill-specific architectural pattern disclosed in SKILL-MECHANICS.md |
| skills/productivity/writing-for-agents/SKILL-MECHANICS.md | 20 | defined here | Section heading defining the router skill pattern for reducing cognitive load |

## Consumes
A collection of user-invoked skills and their usage criteria.

## Produces
A single user-invoked entrypoint skill that guides users to the appropriate specific skill.

## When applied
When user-invoked skills multiply past human recall capacity, creating high cognitive load.

## Sub-concepts
none

## Part of
none

## Implementation status
clean

## Design notes
An architectural pattern where a single user-invoked skill (such as `/ask-matt`) acts as a navigator across many specialized user-invoked skills. Since user-invoked skills lack descriptions in agent context to save context load, a router skill provides a unified index without paying continuous token overhead.
