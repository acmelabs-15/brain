---
package: rjm
name: Routing everything to the orchestrator
slug: routing-everything-to-the-orchestrator
kind: pattern
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

# Routing everything to the orchestrator

## Definition — verbatim
> "- **Routing everything to the orchestrator.** The fallback row is for the long" — .claude/skills/autoplan/SKILL.md:200

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/autoplan/SKILL.md | 200 | defined here | Anti-pattern warning against using the orchestrator fallback as a lazy substitute for proper request classification. |

## Consumes
Unclassified requests in autoplan triage.

## Produces
Premature orchestration overhead, unnecessary multi-agent handoffs, and dilated turnaround times.

## When applied
Identified during autoplan routing analysis to ensure specific skills are prioritized over generic orchestrator delegation.

## Sub-concepts
none

## Part of
autoplan

## Implementation status
clean

## Design notes
Routing everything to the orchestrator is an anti-pattern wherein the autoplan router lazily dumps classifiable user requests into the orchestrator agent. Because orchestrator is designed for multi-agent coordination and complex synthesis, routing routine tasks to it incurs heavy coordination overhead. The framework mandates that recurring fallbacks prompt adding specific rows to the routing table rather than expanding fallback usage.
