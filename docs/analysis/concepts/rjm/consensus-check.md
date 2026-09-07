---
package: rjm
name: CONSENSUS CHECK
slug: consensus-check
kind: gate
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

# CONSENSUS CHECK

## Definition — verbatim
> "CONSENSUS CHECK" — .claude/skills/skillforge/references/synthesis-protocol.md:35

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/skillforge/references/synthesis-protocol.md | 35 | defined here | Quality gate requiring 3/3 unanimous approval across panel evaluators before finalizing skills. |

## Consumes
Individual evaluation reviews and verdicts from all synthesis panel agents.

## Produces
Gate pass verdict (`APPROVED`) advancing to finalization, or fail verdict (`ITERATE`) returning to Phase 1.

## When applied
Evaluated after all panel agents complete individual evaluations in Phase 4.

## Sub-concepts
none

## Part of
multi-agent-synthesis-protocol

## Implementation status
defects: doc-drift

## Design notes
A quality gate requiring unanimous approval (3/3) across all evaluation perspectives before a generated skill can be finalized.
