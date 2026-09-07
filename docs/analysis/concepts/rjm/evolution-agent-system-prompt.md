---
package: rjm
name: Evolution Agent System Prompt
slug: evolution-agent-system-prompt
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

# Evolution Agent System Prompt

## Definition — verbatim
> "### Evolution Agent System Prompt" — .claude/skills/skillforge/references/synthesis-protocol.md:375

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/skillforge/references/synthesis-protocol.md | 375 | defined here | System prompt template configuring the Evolution/Timelessness evaluation agent. |

## Consumes
Agent invocation parameters and future-proofing criteria.

## Produces
Configured evaluator agent assessing timelessness scores (>=7), extension points (>=2), dependency stability, and design rationale.

## When applied
Loaded when spawning the Evolution/Timelessness Agent for synthesis panel evaluations.

## Sub-concepts
none

## Part of
multi-agent-synthesis-protocol

## Implementation status
defects: doc-drift

## Design notes
A system prompt template directing the evolution evaluator to analyze candidate skills two years ahead, verifying timelessness scores and extension points.
