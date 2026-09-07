---
package: rjm
name: ADR debate
slug: adr-debate
kind: technique
package_phase: rjm:research
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/ai-agents-research-methodology/SKILL.md, sha256: 7141af7456e2a59337469559ce9bd051294b0413ffac614bab6bae44c49f9b83}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# ADR debate

## Definition — verbatim
> "from contradiction log through probe, eval baseline, ADR debate, calibrated gate, and post-ship monitoring." — .claude/skills/ai-agents-research-methodology/SKILL.md:7-8

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/ai-agents-research-methodology/SKILL.md | 7 | defined here \| used here | Named as the Stage 4 consensus mechanism subjecting architectural proposals to structured multi-agent debate. |

## Consumes
Draft architectural decision records (`ADR-*.md`), problem statements, and baseline evaluation data.

## Produces
Multi-agent consensus logs, surfaced objections, refined decision constraints, and ratified ADRs.

## When applied
During Stage 4 of the idea lifecycle whenever architectural changes, governance policies, or public contracts are modified.

## Sub-concepts
none

## Part of
idea-lifecycle

## Implementation status
defects: missing-path

## Design notes
ADR debate subjects major decisions to rigorous multi-perspective challenge. In rjm, creating or editing an ADR triggers a structured debate among six specialized agent roles (such as architect, critic, and security) operating under consensus rules, preventing architectural drift and ensuring that critical tradeoffs are exhaustively scrutinized before implementation.
