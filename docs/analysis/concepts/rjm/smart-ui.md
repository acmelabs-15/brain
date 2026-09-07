---
package: rjm
name: Smart UI
slug: smart-ui
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

# Smart UI

## Definition — verbatim
> "- **Smart UI / Smart Skill**: business logic embedded in the entry point (HTTP handler, agent skill, CLI command). Promote it to the Service Layer." — .claude/skills/software-engineering-library/references/enterprise-patterns.md:136

## Also called — verbatim
`Smart Skill` — .claude/skills/software-engineering-library/references/enterprise-patterns.md:136

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/software-engineering-library/references/enterprise-patterns.md | 136 | defined here | Anti-pattern catalog entry warning against embedding business rules in entry points like UI, CLI commands, or agent skills. |

## Consumes
Application entry points (HTTP handlers, agent skills, CLI commands) embedding domain logic.

## Produces
Refactoring instructions to promote embedded business rules into the Service Layer.

## When applied
Identified during review when domain rules or transactional operations are implemented directly within agent skills, CLI parsers, or HTTP handlers.

## Sub-concepts
none

## Part of
none

## Implementation status
clean

## Design notes
Smart UI (and its agentic counterpart, Smart Skill) is an anti-pattern where interface entry points execute business logic rather than delegating to an underlying service layer. Keeping entry points thin preserves reusability and testability across diverse invocation channels.
