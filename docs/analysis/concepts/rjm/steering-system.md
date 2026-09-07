---
package: rjm
name: Steering System
slug: steering-system
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/AGENT-SYSTEM.md, sha256: c11a55e17a0f0d0eca7936fc3ba2f3a071fcedf37fcf1a462a65a77831259641}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Steering System

## Definition — verbatim
> "The steering system provides context-aware guidance injection based on file patterns, implementing the Kiro pattern of glob-based inclusion." — .agents/AGENT-SYSTEM.md:1574

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/AGENT-SYSTEM.md | 1570 | defines | Core architectural specification of context-aware guidance injection using glob pattern matching against touched files. |

## Consumes
File paths affected by a task, registered steering files under `.agents/steering/`, and priority rankings.

## Produces
Targeted, prioritized domain guidance injected into the agent prompt context.

## When applied
During task analysis and context preparation prior to agent prompt dispatch.

## Sub-concepts
kiro-pattern, glob-based-inclusion, injection-protocol

## Part of
none

## Implementation status
defects: missing-path

## Design notes
A token-conserving guidance system that maps task file paths against glob patterns (such as `**/*.cs` or `**/Auth/**`) to selectively inject only the relevant steering documents into an agent's context. By eliminating monolithic global rule injection, it achieves a 30%+ token reduction while keeping domain guidance precise.
