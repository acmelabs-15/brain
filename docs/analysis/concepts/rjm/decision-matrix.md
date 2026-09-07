---
package: rjm
name: Decision Matrix
slug: decision-matrix
kind: technique
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/governance/SKILL-CREATION-CRITERIA.md, sha256: 27241f09bb7441e7cf128ddc9721db0c2ce7d3497721cafee4e0871c57f1586a}
  - {path: .claude/skills/buy-vs-build-framework/SKILL.md, sha256: 51ab60206739563c53683a976bc1c1c94fe21229452a6820fc0b126729d2e0a7}
  - {path: .claude/skills/buy-vs-build-framework/references/PHASE1_ANALYSIS.md, sha256: b2e62451bc202e69bce365986c0189d44776bc7ee1d6ee58ebe5b60c85061298}
  - {path: .claude/skills/buy-vs-build-framework/references/SKILL_SPEC.xml, sha256: 2cae1d909bd9d8286a7e5a55fa3f48b5a895c973003303d382483a198ffca2a8}
  - {path: .claude/skills/skillforge/references/degrees-of-freedom.md, sha256: 3d5311e2c2241676e4ae91d497de9e930061f02a45127c14560cb12cb2f9b99c}
  - {path: .claude/skills/skillforge/references/phase0-triage.md, sha256: 628e380912aa067063d9fedfd0993b8e95080953861c288db7da44f34e8db952}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Decision Matrix

## Definition — verbatim
(used, not defined)

> "## Decision Matrix" — .agents/governance/SKILL-CREATION-CRITERIA.md:39

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/governance/SKILL-CREATION-CRITERIA.md | 39 | defined here | 5-question matrix establishing whether task repeatability and verification warrant skill creation. |
| .claude/skills/buy-vs-build-framework/references/PHASE1_ANALYSIS.md | 15 | defined here | Specifies decision matrix outputs (Build, Buy, Partner, Defer) for strategic sourcing evaluations. |
| .claude/skills/buy-vs-build-framework/references/SKILL_SPEC.xml | 214 | defined here | XML element defining criteria and options in the Phase 4 Decide stage of buy vs build. |
| .claude/skills/buy-vs-build-framework/SKILL.md | 54 | defined here | Quick reference entry indicating Phase 3 evaluation deliverables combining decision matrix and pre-mortem. |
| .claude/skills/skillforge/references/degrees-of-freedom.md | 83 | defined here | Section heading for the matrix mapping freedom levels (high, medium, low) to failure costs and context dependencies. |
| .claude/skills/skillforge/references/phase0-triage.md | 38 | defined here | Flowchart step in triage mapping confidence match percentages to action routes. |

## Consumes
Evaluation criteria, option scores, confidence thresholds, and freedom factors.

## Produces
Categorical decisions, routing determinations, and strategic choices.

## When applied
Applied during architectural triage, sourcing decisions, skill creation evaluation, and prompt freedom calibration.

## Sub-concepts
none

## Part of
cross-phase

## Implementation status
defects: doc-drift, missing-path, exit-code-mismatch, missing-doc

## Design notes
A multi-criteria evaluation technique used across governance, sourcing, triage, and prompt engineering in rjm. Decision matrices map quantitative thresholds and structured questions to discrete outcomes, eliminating ad-hoc ambiguity and standardizing agent routing and architectural determinations.
