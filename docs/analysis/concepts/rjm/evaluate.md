---
package: rjm
name: Evaluate
slug: evaluate
kind: phase
package_phase: rjm:cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/buy-vs-build-framework/SKILL.md, sha256: 51ab60206739563c53683a976bc1c1c94fe21229452a6820fc0b126729d2e0a7}
  - {path: .claude/skills/buy-vs-build-framework/references/PHASE1_ANALYSIS.md, sha256: b2e62451bc202e69bce365986c0189d44776bc7ee1d6ee58ebe5b60c85061298}
  - {path: .claude/skills/buy-vs-build-framework/references/SKILL_SPEC.xml, sha256: 2cae1d909bd9d8286a7e5a55fa3f48b5a895c973003303d382483a198ffca2a8}
  - {path: .claude/skills/panning-for-gold/SKILL.md, sha256: 1f40dc18c6cd6fb4bd569c0803ca82dc42d45a86b7277259f9781a32c1afe286}
  - {path: scripts/external_signals/acceptance_criteria.py, sha256: f11417815ba57aa29786c3c9c962fd0a811cb2ac651b9b466992e482bb8883e8}
  - {path: scripts/validation/check_dual_priority_labels.py, sha256: 0a9a6320c38db8908cb300092f87e7e96b51b3672aa115743e270266c54d4504}
  - {path: scripts/validation/check_git_hook_health.py, sha256: 994cbeca1efab1c3e1fa9fac5a2e1f7bf19447ebc27da86cf4925a6ef85ffee2}
  - {path: scripts/validation/check_repo_health.py, sha256: f7f2150b68774a2af74e27eb6a7ee68c4aa28d0e3fef28e6a0a60e59cebf6854}
  - {path: scripts/validation/instruction_budget.py, sha256: c57feaeaba07cea56c524e40fcef7945cc51684df1a4f69733a85e65ae241183}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Evaluate

## Definition — verbatim
> "| 3. Evaluate | 2 hours - 3 days | Decision matrix + Pre-mortem |" — .claude/skills/buy-vs-build-framework/SKILL.md:54

## Also called — verbatim
> "Turn raw, unstructured capture into an evaluated, actionable inventory of threads. Four phases: Front-gate, Extract, Evaluate, Synthesize." — .claude/skills/panning-for-gold/SKILL.md:10

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/buy-vs-build-framework/references/PHASE1_ANALYSIS.md | 11 | defined here | Third phase in the four-phase sourcing decision process focusing on scoring and matrix evaluation. |
| .claude/skills/buy-vs-build-framework/references/SKILL_SPEC.xml | 165 | defined here | Phase specification element defining scoring across strategic, operational, and risk dimensions. |
| .claude/skills/buy-vs-build-framework/SKILL.md | 54 | defined here | Phase 3 table row detailing decision matrix evaluation, pre-mortem analysis, and scoring execution. |
| .claude/skills/panning-for-gold/SKILL.md | 10 | defined here | Third phase in panning-for-gold process evaluating extracted threads for signal quality. |
| scripts/external_signals/acceptance_criteria.py | 159 | defined here | Function evaluating markdown bodies and diffs against acceptance criteria to generate validation reports. |
| scripts/validation/check_dual_priority_labels.py | 72 | defined here | Function evaluating label sets on PRs and issues for conflicting priority designations. |
| scripts/validation/check_git_hook_health.py | 224 | defined here | Internal function evaluating git hook configuration against ADR-035 standards. |
| scripts/validation/check_repo_health.py | 464 | defined here | Internal evaluation routine assessing repository health check status. |
| scripts/validation/instruction_budget.py | 75 | defined here | Exported function symbol evaluating prompt instruction token budgets against configured limits. |

## Consumes
Analyzed data, candidate options, extracted threads, repository states, or candidate PR metadata.

## Produces
Weighted decision scores, confidence intervals, validation reports, or exit code determinations.

## When applied
Applied when preliminary data or candidate options are collected and need formal scoring, validation, or risk assessment.

## Sub-concepts
score-decision, decision-matrix

## Part of
buy-vs-build-framework

## Implementation status
defects: doc-drift, missing-path, orphan, exit-code-mismatch, missing-doc

## Design notes
A primary assessment phase across rjm workflows. In the buy-vs-build framework, Phase 3 (Evaluate) scores competing sourcing alternatives using weighted matrices and pre-mortems; in validation scripts, evaluate routines execute deterministic checks against repository policies.
