---
package: rjm
name: Smart Skill
slug: smart-skill
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/software-engineering-library/references/enterprise-patterns.md, sha256: 8219d8bb13944fb6d863027165c2e719d3347dc576cd79ebb8be5b0519b2c593}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Smart Skill

## Definition — verbatim
> "**Smart UI / Smart Skill**: business logic embedded in the entry point (HTTP handler, agent skill, CLI command). Promote it to the Service Layer." — .claude/skills/software-engineering-library/references/enterprise-patterns.md:136

## Also called — verbatim
Smart UI — .claude/skills/software-engineering-library/references/enterprise-patterns.md:136

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/software-engineering-library/references/enterprise-patterns.md | 136 | defined here | Defined as an anti-pattern where business logic is embedded into entry points such as agent skills, HTTP handlers, or CLI commands instead of being promoted to the Service Layer. |

## Consumes
none

## Produces
none

## When applied
Applied during architectural design and code review of agent skills, HTTP handlers, and CLI commands to keep entry points thin.

## Sub-concepts
none

## Part of
none

## Implementation status
clean

## Design notes
An architectural anti-pattern warning against placing business logic directly into agent skills or command entry points. In rjm, skills and hooks must remain thin wrappers that parse input, invoke the Service Layer, and format output.
