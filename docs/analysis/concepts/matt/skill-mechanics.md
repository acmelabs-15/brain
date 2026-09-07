---
package: matt
name: Skill mechanics
slug: skill-mechanics
kind: reference
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: skills/productivity/writing-for-agents/SKILL-MECHANICS.md, sha256: c768e6307c7c10728c401c213f2c4ba71c542127eeb7ad2956aabd15a0fa0059}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Skill mechanics

## Definition — verbatim
> "what changes when the document is a skill (frontmatter, the invocation choice, and router skills)." — skills/productivity/writing-for-agents/SKILL-MECHANICS.md:3

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| skills/productivity/writing-for-agents/SKILL-MECHANICS.md | 1 | defined here | Document title introducing skill-specific packaging, frontmatter rules, invocation choices, and router skills. |

## Consumes
Draft skill document, proposed YAML frontmatter, and authoring guidelines from `SKILL.md`.

## Produces
Skill-specific frontmatter attributes (`description`, `disable-model-invocation`), invocation architecture, and router organization.

## When applied
When creating or modifying an agent document that is packaged specifically as a skill.

## Sub-concepts
splitting-by-invocation, router-skill

## Part of
writing-for-agents

## Implementation status
clean

## Design notes
Isolates skill packaging mechanics (frontmatter fields, invocation choices, description writing, router skills) from general agent-facing writing principles. By pushing skill-specific concerns into a disclosed reference document, the design keeps the core authoring guidelines universal and uncluttered.
