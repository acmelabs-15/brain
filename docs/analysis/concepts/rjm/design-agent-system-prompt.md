---
package: rjm
name: Design Agent System Prompt
slug: design-agent-system-prompt
kind: template
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

# Design Agent System Prompt

## Definition — verbatim
> "### Design Agent System Prompt" — .claude/skills/skillforge/references/synthesis-protocol.md:327

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/skillforge/references/synthesis-protocol.md | 327 | defined here | System prompt template configuring the Design/Architecture evaluation agent. |

## Consumes
Agent invocation parameters and role definitions.

## Produces
Configured evaluator agent focused on technical correctness, pattern appropriateness, phase ordering, and example validity.

## When applied
Loaded when spawning the Design/Architecture Agent for synthesis panel evaluations.

## Sub-concepts
none

## Part of
multi-agent-synthesis-protocol

## Implementation status
defects: doc-drift

## Design notes
A system prompt template establishing the role instructions, evaluation criteria, and review format for the technical architecture evaluator in the synthesis panel.
