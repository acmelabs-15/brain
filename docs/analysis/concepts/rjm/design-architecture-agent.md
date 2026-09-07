---
package: rjm
name: Design/Architecture Agent
slug: design-architecture-agent
kind: role
package_phase: rjm:cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/skillforge/references/synthesis-protocol.md, sha256: f7cf0dada576138f82391627c2b52c7fdeec4f41e60420673020ba664ff1e7d7}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Design/Architecture Agent

## Definition — verbatim
> "### Agent 1: Design/Architecture Agent" — .claude/skills/skillforge/references/synthesis-protocol.md:53

## Also called — verbatim
"DESIGN AGENT" — .claude/skills/skillforge/references/synthesis-protocol.md:21

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/skillforge/references/synthesis-protocol.md | 53 | defined here | Section heading defining the role, evaluation criteria, and red flags for technical correctness. |

## Consumes
Generated skill definitions and architectural specifications.

## Produces
Detailed technical reviews evaluating architecture patterns, phase sequencing, verification concreteness, and code syntax.

## When applied
Invoked in Phase 4 during parallel evaluation of generated skill candidates.

## Sub-concepts
none

## Part of
multi-agent-synthesis-protocol

## Implementation status
defects: doc-drift

## Design notes
A panel evaluator assessing structural correctness, ensuring appropriate pattern selection, circular dependency avoidance, and verifiable outputs.
