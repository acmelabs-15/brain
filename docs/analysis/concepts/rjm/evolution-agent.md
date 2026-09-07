---
package: rjm
name: EVOLUTION AGENT
slug: evolution-agent
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

# EVOLUTION AGENT

## Definition — verbatim
> "EVOLUTION AGENT" — .claude/skills/skillforge/references/synthesis-protocol.md:21

## Also called — verbatim
"Evolution/Timelessness Agent" — .claude/skills/skillforge/references/synthesis-protocol.md:117

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/skillforge/references/synthesis-protocol.md | 21 | defined here | Synthesis panel evaluator focused on timelessness, extensibility, future-proofing, and ecosystem fit. |

## Consumes
Skill specifications, dependency mappings, and extension point documentation.

## Produces
Evaluation reviews scoring timelessness, extension point documentation, and dependency stability.

## When applied
Executed during Phase 4 multi-agent synthesis panel evaluations.

## Sub-concepts
none

## Part of
multi-agent-synthesis-protocol

## Implementation status
defects: doc-drift

## Design notes
An evaluative role within the synthesis panel responsible for safeguarding longevity by scoring timelessness, verifying extension points, and ensuring dependencies are abstracted.
