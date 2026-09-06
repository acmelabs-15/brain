---
package: addy
name: Subagents
slug: subagents
kind: technique
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: references/orchestration-patterns.md, sha256: 61e543d86f19f86b83074f8c1c769455c7085a2c72dd47b1da21a8c63785be4a}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# Subagents

## Definition — verbatim
> "### Subagents vs. Agent Teams" — references/orchestration-patterns.md:125

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| references/orchestration-patterns.md | 125 | defined here | Primitives comparison section contrasting subagents (fan-out and report back) with collaborative Agent Teams |

## Consumes
Discrete independent task instructions, individual context allocations

## Produces
Specialized reports and findings returned to the primary session without inter-agent discussion

## When applied
When executing independent parallel tasks or isolated research where sub-agents need only report back to the lead agent

## Sub-concepts
explore, general-purpose

## Part of
orchestration-patterns

## Implementation status
clean

## Design notes
Subagents in addy represent Claude Code's stable parallelism primitive for executing independent tasks concurrently. Operating in their own context windows, subagents report findings strictly back to the spawning main agent without peer-to-peer messaging, making them ideal for parallel fan-out inspections (such as /ship) and research isolation.
