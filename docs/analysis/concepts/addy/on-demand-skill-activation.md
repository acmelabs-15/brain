---
package: addy
name: On-Demand Skill Activation
slug: on-demand-skill-activation
kind: technique
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: docs/antigravity-setup.md, sha256: 2fc07de1373ccf06eaa1ea84943cd1b4492f0e1d21dc311eda9538ab0702002d}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# On-Demand Skill Activation

## Definition — verbatim
> "Antigravity CLI automatically discovers the `SKILL.md` files located in the `skills/` directory of the installed plugin. Using the trigger descriptions in each skill's frontmatter, the agent will dynamically activate the appropriate workflow when it detects matching developer intent." — docs/antigravity-setup.md:87

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| docs/antigravity-setup.md | 86 | defines | Mechanism for intent-driven automatic skill discovery and execution in Antigravity CLI |

## Consumes
Skill frontmatter trigger descriptions and developer prompts/intents.

## Produces
Dynamic loading and activation of relevant workflow skills.

## When applied
When an agent detects that a developer's request matches a skill's trigger description without an explicit slash command.

## Sub-concepts
none

## Part of
none

## Implementation status
clean

## Design notes
On-demand skill activation enables natural-language intent routing, allowing coding agents to autonomously load relevant methodology skills when developers describe work rather than requiring explicit slash commands.
