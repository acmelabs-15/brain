---
package: rjm
name: Knowledge Persistence
slug: knowledge-persistence
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

# Knowledge Persistence

## Definition — verbatim
> "Memory system preserves learnings across sessions" — .agents/AGENT-SYSTEM.md:22

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/AGENT-SYSTEM.md | 22 | defined here | Listed in the Key Benefits table defining memory preservation across sessions. |

## Consumes
Session experiences, retrospective findings, extracted skills, and architectural decisions.

## Produces
Persistent memory nodes, steering files, and structured session handoffs.

## When applied
Applied at session termination, during retrospectives, and when extracting reusable skills or conventions.

## Sub-concepts
none

## Part of
multi-agent-orchestration-system

## Implementation status
defects: missing-path, internal-contradiction

## Design notes
Knowledge persistence overcomes AI session amnesia by capturing learnings, project conventions, and domain decisions in durable storage. In rjm, this bridges discrete development sessions through structured handoffs, memory nodes, and steering directives, preventing the repetition of prior mistakes.
