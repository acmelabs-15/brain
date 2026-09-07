---
package: rjm
name: Multi-Agent Synthesis Protocol
slug: multi-agent-synthesis-protocol
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

# Multi-Agent Synthesis Protocol

## Definition — verbatim
> "# Multi-Agent Synthesis Protocol" — .claude/skills/skillforge/references/synthesis-protocol.md:1

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/skillforge/references/synthesis-protocol.md | 1 | defined here | Protocol document defining the multi-agent synthesis panel quality gate and consensus evaluation workflow. |

## Consumes
Generated skill files (`SKILL.md`), specifications (`SKILL_SPEC.md`), and reference documents.

## Produces
Unanimous approval verdicts (`APPROVED`) or structured iteration feedback payloads (`CHANGES_REQUIRED`).

## When applied
Applied at Phase 4 (Synthesis Panel) as the final quality gate before finalizing generated skills and updating the registry.

## Sub-concepts
parallel-agent-launch, individual-evaluation, consensus-aggregation, iteration-protocol

## Part of
skillforge

## Implementation status
defects: doc-drift

## Design notes
A multi-agent consensus evaluation gate that submits generated skills to three independent evaluators (Design, Audience, Evolution) to prevent single-perspective blind spots before release.
