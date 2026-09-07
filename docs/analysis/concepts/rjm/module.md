---
package: rjm
name: Module
slug: module
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/software-engineering-library/references/philosophy-of-software-design.md, sha256: befb74458d7e26f163b688221fa3249bfeffe385a0ff863c0f970e17bc23b500}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Module

## Definition — verbatim
> "**Module**: any unit with an interface and an implementation. A class, a function, a script, a skill, an agent prompt, a plugin." — .claude/skills/software-engineering-library/references/philosophy-of-software-design.md:13

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/software-engineering-library/references/philosophy-of-software-design.md | 13 | defined here | Defined in core vocabulary as any unit with an interface and an implementation, generalizing classes, functions, scripts, skills, agent prompts, and plugins. |

## Consumes
none

## Produces
none

## When applied
Applied whenever designing or decomposing capabilities, tools, skills, prompt schemas, or plugin seams.

## Sub-concepts
interface

## Part of
none

## Implementation status
clean

## Design notes
The generalized unit of software decomposition in rjm's architecture. It treats traditional code components (classes, functions, scripts) and agent capabilities (skills, prompts, plugins) uniformly as entities defined by an external interface and an internal implementation.
