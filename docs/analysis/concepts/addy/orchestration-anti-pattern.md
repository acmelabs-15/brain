---
package: addy
name: orchestration anti-pattern
slug: orchestration-anti-pattern
kind: pattern
package_phase: addy:Build
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: skills/doubt-driven-development/SKILL.md, sha256: 0a058297aa6bdf90b0ff45c3537af4cb0005f4af6b0d202fc07b7b5984db50ea}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# orchestration anti-pattern

## Definition — verbatim
(used, not defined)
> "the orchestration anti-pattern explicitly forbidden by `../../references/orchestration-patterns.md`" — skills/doubt-driven-development/SKILL.md:46

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| skills/doubt-driven-development/SKILL.md | 46 | used here | Cited under Loading Constraints to prohibit loading doubt-driven development into subagent personas to prevent nested persona spawning. |

## Consumes
Multi-agent architecture definitions, persona configuration, and task delegation designs.

## Produces
Architectural constraint preventing subagents or personas from spawning other subagents.

## When applied
Enforced when defining agent personas, skill frontmatter, and multi-agent delegation topologies.

## Sub-concepts
none

## Part of
doubt-driven-development

## Implementation status
clean

## Design notes
The `orchestration anti-pattern` prevents subagent personas from spawning other personas, avoiding runaway call stacks, uncontrolled context growth, and recursive delegation cycles by restricting reviewer spawning exclusively to the main-session orchestrator.
