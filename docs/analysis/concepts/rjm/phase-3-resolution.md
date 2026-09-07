---
package: rjm
name: Phase 3: Resolution
slug: phase-3-resolution
kind: phase
package_phase: rjm:review
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/adr-review/references/debate-protocol.md, sha256: 7ffb255e17ca77cfed1b1a4cf42531f93706c53636a57fb690fc4f7d96b1c86e}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Phase 3: Resolution

## Definition — verbatim
> "## Phase 3: Resolution" — .claude/skills/adr-review/references/debate-protocol.md:150

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/adr-review/references/debate-protocol.md | 150 | defined here | Defines the third phase of the debate protocol where consolidated feedback is incorporated into updated ADR text and scope splits are evaluated. |

## Consumes
Consolidated change recommendations, prioritized P0/P1/P2 issues, and high-level-advisor rulings from Phase 2.

## Produces
Complete updated ADR draft text, documented dissenting views in Alternatives Considered, rationale for accepted versus rejected feedback, and optional scope split recommendations.

## When applied
Runs after Phase 2 consolidation and conflict arbitration, prior to initiating Phase 4 convergence checks.

## Sub-concepts
scope-split-detection

## Part of
adr-review, debate-protocol

## Implementation status
clean

## Design notes
The revision phase of the multi-agent ADR review lifecycle. Phase 3 incorporates the arbitrated findings from Phase 2 into a concrete update of the decision record, reconciling blocking P0 and P1 feedback while preserving dissenting views in the record and evaluating whether excessive blast radius warrants splitting the ADR.
