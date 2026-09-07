---
package: rjm
name: Phase 4 convergence check
slug: phase-4-convergence-check
kind: gate
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/architecture/ADR-103-skill-output-python-contract-correction.md, sha256: 7e0f36a70c1989ef807b0df12d36597bb7b75330c1cd42a1cd552b898a106ef0}
  - {path: .claude/skills/adr-review/references/debate-protocol.md, sha256: 7ffb255e17ca77cfed1b1a4cf42531f93706c53636a57fb690fc4f7d96b1c86e}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Phase 4 convergence check

## Definition — verbatim
> "Re-invoke each agent to review proposed updates:" — .claude/skills/adr-review/references/debate-protocol.md:175

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-103-skill-output-python-contract-correction.md | 28 | used here | Explains that status: accepted required a six-seat Phase 4 convergence check against the revised text. |
| .claude/skills/adr-review/references/debate-protocol.md | 173 | defined here | Section heading defining the protocol for re-invoking review seats to evaluate updated ADR text. |

## Consumes
Revised ADR text, summary of changes made in response to earlier debate phases, and each agent's prior concerns.

## Produces
Final positions (Accept, Block, Disagree-and-Commit) from each review panel seat to determine convergence.

## When applied
At the conclusion of the multi-round ADR review cycle to confirm whether all blocking concerns have been resolved.

## Sub-concepts
none

## Part of
phase-0-4-protocol, adr-review

## Implementation status
defects: missing-path

## Design notes
The culminating gate of the five-phase ADR review debate protocol where each seat on the panel re-evaluates the updated text to reach a binding consensus verdict, preventing unresolved concerns from passing into an accepted decision.
