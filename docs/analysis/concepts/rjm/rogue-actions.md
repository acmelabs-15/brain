---
package: rjm
name: Rogue Actions
slug: rogue-actions
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/prompt-engineer/references/prompt-engineering-single-turn.md, sha256: 18d14cb05a5fae5714355776fc4016fe1af5af0709f06bc8b4745e30b2771db9}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Rogue Actions

## Definition — verbatim
> "Multiple simultaneous actions under stress" — .claude/skills/prompt-engineer/references/prompt-engineering-single-turn.md:783

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/prompt-engineer/references/prompt-engineering-single-turn.md | 783 | defined here | Identified as an agent overthinking failure mode where an agent executes multiple uncoordinated actions under stress. |

## Consumes
Agent execution context, stressful error conditions, and multi-tool availability.

## Produces
Disorganized parallel tool calls, conflicting modifications, and unintended side effects.

## When applied
> "The research identifies three overthinking failure modes:" — .claude/skills/prompt-engineer/references/prompt-engineering-single-turn.md:780

## Sub-concepts
none

## Part of
analysis-paralysis

## Implementation status
clean

## Design notes
Rogue Actions is an empirical failure mode documented in agent literature (Cuadra et al., 2025) wherein an autonomous agent, encountering unexpected errors or stress, executes multiple uncoordinated actions simultaneously. rjm addresses this by embedding strict scope limitations ("nothing more, nothing less") to enforce disciplined, sequential tool use.
