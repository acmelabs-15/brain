---
package: matt
name: skills
slug: skills
kind: technique
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude-plugin/plugin.json, sha256: e531ddc6560515397ac32d93334fa3eb586b6b6bcc2e472c3646641fd3d2b951}
  - {path: external/grill-me.md, sha256: 8ef33c20bc9870b89757d0d6238d319381bb0b7afb299d3e4ef1f92d20dba1d3}
  - {path: skills/productivity/teach/SKILL.md, sha256: a32df9dcdfc0c4fdc1c98e1ed3940c5f56b84c1aa90ff60346f32b8b53915b43}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# skills

## Definition — verbatim
> "- **Skills**, acquired through highly-relevant interactive lessons devised by you, based on the knowledge" — skills/productivity/teach/SKILL.md:27

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude-plugin/plugin.json | 14 | used here | Discovery keyword in plugin manifest describing package capabilities. |
| external/grill-me.md | 24 | used here | Links to the mattpocock/skills GitHub source repository. |
| skills/productivity/teach/SKILL.md | 27 | defined here | Defines skills as actionable capabilities learned through interactive lessons. |

## Consumes
Knowledge sources, prompt instructions, and targeted practice scenarios.

## Produces
Practical capability to execute specific engineering or productivity tasks.

## When applied
Applied when training developers through interactive lessons or when configuring agents with modular capabilities.

## Sub-concepts
none

## Part of
teach

## Implementation status
defects: orphan

## Design notes
In `matt`, `skills` has a dual meaning. Within the `teach` skill, it defines the practical, actionable capabilities a learner acquires through interactive practice, complementing factual knowledge and practitioner wisdom. Across the package as a whole, it represents the modular prompt-based behaviors and slash commands that equip coding agents to perform disciplined engineering tasks.
