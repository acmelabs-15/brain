---
package: rjm
name: Smart UI / Smart Skill / Smart Hook
slug: smart-ui-smart-skill-smart-hook
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/software-engineering-library/references/clean-architecture.md, sha256: 05a2908c6aa793da85f31319368e04967eb1f225e7c32f9dc628f654bba8183a}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Smart UI / Smart Skill / Smart Hook

## Definition — verbatim
> "business logic embedded in an entry point. Promote it to a use case; keep the entry point to parsing inputs, calling the use case, and formatting output." — .claude/skills/software-engineering-library/references/clean-architecture.md:145

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/software-engineering-library/references/clean-architecture.md | 145 | defined here | Listed as an architectural anti-pattern warning against embedding domain logic inside harness entry points. |

## Consumes
Entry point implementations (skills, hooks, UI components), input arguments, external payloads.

## Produces
Architectural smell diagnosis and refactoring recommendation to extract business logic into dedicated use cases.

## When applied
During code review or design auditing when skills, hooks, or CLI commands perform direct state changes or domain calculations.

## Sub-concepts
none

## Part of
clean-architecture

## Implementation status
clean

## Design notes
Smart UI / Smart Skill / Smart Hook identifies the anti-pattern where application workflows and domain rules are entangled within transport entry points such as Claude hooks or skill markdown scripts. In rjm, entry points are restricted to interface adaptation—parsing input, invoking an orchestrator or use case, and formatting responses—to prevent vendor lock-in and enable isolated testing.
