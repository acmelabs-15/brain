---
package: rjm
name: Iteration Protocol
slug: iteration-protocol
kind: pattern
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

# Iteration Protocol

## Definition — verbatim
> "## Iteration Protocol" — .claude/skills/skillforge/references/synthesis-protocol.md:238

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/skillforge/references/synthesis-protocol.md | 238 | defined here | Defines the feedback collection, prioritization, regression questioning, and iteration limits when consensus fails. |

## Consumes
Combined panel feedback and issue tables from rejected evaluation rounds.

## Produces
Structured iteration inputs (`ITERATION_INPUT`) feeding prioritized issues back into Phase 1 analysis.

## When applied
Triggered when unanimous 3/3 consensus is not reached during synthesis panel evaluation.

## Sub-concepts
human-review-required

## Part of
multi-agent-synthesis-protocol

## Implementation status
defects: doc-drift

## Design notes
A structured refinement loop that feeds prioritized panel issues back into analysis and generation, governing up to 5 rounds before escalating to human decision.
