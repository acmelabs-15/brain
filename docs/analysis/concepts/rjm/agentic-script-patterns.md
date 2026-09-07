---
package: rjm
name: Agentic Script Patterns
slug: agentic-script-patterns
kind: pattern
package_phase: rjm:Phase 3: Generation
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/skillforge/references/script-integration-framework.md, sha256: f533a0f41ac2f818a735eb708e431d07a64afb758f20e2d3e7b8a618cd1ecda5}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Agentic Script Patterns

## Definition — verbatim
> "These patterns make scripts capable of autonomous operation." — .claude/skills/skillforge/references/script-integration-framework.md:150

## Also called — verbatim
> "## Agentic Script Patterns" — .claude/skills/skillforge/references/script-integration-framework.md:148

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/skillforge/references/script-integration-framework.md | 148 | defined here | Section heading establishing design patterns that enable scripts to operate autonomously within agentic skills. |

## Consumes
Script design requirements, tool execution hooks, or autonomous workflow specifications.

## Produces
Self-verifying, fault-tolerant, stateful script architectures.

## When applied
When authoring scripts intended to be invoked autonomously by AI agents without human intervention.

## Sub-concepts
error-recovery, state-persistence

## Part of
script-integration-framework

## Implementation status
clean

## Design notes
A collection of five design patterns (Self-Verification, Error Recovery, State Persistence, Structured Output, Graceful Degradation) that elevate ordinary CLI scripts into autonomous, robust building blocks that AI agents can reliably execute and self-correct.
