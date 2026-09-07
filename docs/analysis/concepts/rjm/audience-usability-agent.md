---
package: rjm
name: Audience/Usability Agent
slug: audience-usability-agent
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

# Audience/Usability Agent

## Definition — verbatim
> "### Agent 2: Audience/Usability Agent" — .claude/skills/skillforge/references/synthesis-protocol.md:85

## Also called — verbatim
"AUDIENCE AGENT" — .claude/skills/skillforge/references/synthesis-protocol.md:21

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/skillforge/references/synthesis-protocol.md | 85 | defined here | Section heading defining the role, evaluation criteria, and red flags for user experience and accessibility. |

## Consumes
Skill trigger definitions, instructions, and documentation clarity.

## Produces
Usability evaluation reviews measuring trigger naturalness, step clarity, prerequisite explanations, and discoverability.

## When applied
Invoked in Phase 4 during synthesis panel evaluation.

## Sub-concepts
none

## Part of
multi-agent-synthesis-protocol

## Implementation status
defects: doc-drift

## Design notes
A panel evaluator focused on user perspective, verifying natural language trigger alignment, actionability of steps, and absence of unexplained jargon.
