---
package: rjm
name: Phase 2: Route
slug: phase-2-route
kind: phase
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/autoplan/SKILL.md, sha256: 96706c2d86a99a812a776ad92981eeeaabd975776e4eeb30b7ba6809cfe18fd9}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Phase 2: Route

## Definition — verbatim
> "### Phase 2: Route" — .claude/skills/autoplan/SKILL.md:112

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/autoplan/SKILL.md | 112 | defined here | Section heading introducing the routing phase that directs classified intents to specific skills, commands, or agents. |

## Consumes
Classified intent family and size tier from Phase 1.

## Produces
Selected execution destination (specific skill, command pipeline, or orchestrator agent).

## When applied
Directly following reconnaissance and classification in the autoplan workflow.

## Sub-concepts
none

## Part of
autoplan

## Implementation status
clean

## Design notes
Phase 2: Route constitutes the routing engine of the autoplan skill. Acting as an outer front door, it evaluates classified user requests against an extensive routing matrix covering capabilities such as code analysis, security review, PR maintenance, and software architecture. By directing requests to targeted single-purpose skills or orchestrator subagents, it prevents model disorientation and minimizes context overhead.
