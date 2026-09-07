---
package: rjm
name: Audience Agent System Prompt
slug: audience-agent-system-prompt
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

# Audience Agent System Prompt

## Definition — verbatim
> "### Audience Agent System Prompt" — .claude/skills/skillforge/references/synthesis-protocol.md:351

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/skillforge/references/synthesis-protocol.md | 351 | defined here | System prompt template configuring the Audience/Usability evaluation agent. |

## Consumes
Agent invocation parameters and usability focus guidelines.

## Produces
Configured evaluator agent assessing trigger naturalness, instruction actionability, jargon definitions, and discoverability.

## When applied
Loaded when spawning the Audience/Usability Agent for synthesis panel evaluations.

## Sub-concepts
none

## Part of
multi-agent-synthesis-protocol

## Implementation status
defects: doc-drift

## Design notes
A system prompt template instructing the audience evaluator to adopt a first-time user perspective and verify that triggers and instructions are intuitive and clear.
