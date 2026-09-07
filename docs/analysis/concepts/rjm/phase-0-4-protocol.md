---
package: rjm
name: Phase 0-4 protocol
slug: phase-0-4-protocol
kind: technique
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/architecture/ADR-099-remove-commit-limit-bypass-gate.md, sha256: b88c9ceff7c5d7e9daf9efaf4a8348565d993020bd7c38ecdcdb4e16e97ba18f}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Phase 0-4 protocol

## Definition — verbatim
(used, not defined)

> "Phase 0-4 protocol" — .agents/architecture/ADR-099-remove-commit-limit-bypass-gate.md:305

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-099-remove-commit-limit-bypass-gate.md | 305 | used here | References the five-stage debate protocol executed by the six-role panel in adr-review. |

## Consumes
ADR proposals, initial seat reviews, cross-seat rebuttals, and revision summaries.

## Produces
Iterative debate transcripts, challenge resolutions, and convergence verdicts.

## When applied
During multi-round ADR review debates in the `adr-review` skill.

## Sub-concepts
phase-4-convergence-check

## Part of
adr-review

## Implementation status
clean

## Design notes
Structured multi-stage debate technique (Phase 0: Triage, Phase 1: Opening Arguments, Phase 2: Rebuttal, Phase 3: Cross-Examination, Phase 4: Convergence Check) used by the six-role panel to thoroughly vet architectural decisions before acceptance.
