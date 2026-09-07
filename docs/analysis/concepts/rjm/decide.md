---
package: rjm
name: Decide
slug: decide
kind: phase
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/analyze/references/strategy-ooda-loop.md, sha256: b27a9dfc0c884c93391b7acecade4bd48ec460803cd31b4e1b2ddaff101e21b7}
  - {path: .claude/skills/buy-vs-build-framework/SKILL.md, sha256: 51ab60206739563c53683a976bc1c1c94fe21229452a6820fc0b126729d2e0a7}
  - {path: .claude/skills/buy-vs-build-framework/references/PHASE1_ANALYSIS.md, sha256: b2e62451bc202e69bce365986c0189d44776bc7ee1d6ee58ebe5b60c85061298}
  - {path: .claude/skills/buy-vs-build-framework/references/SKILL_SPEC.xml, sha256: 2cae1d909bd9d8286a7e5a55fa3f48b5a895c973003303d382483a198ffca2a8}
  - {path: .claude/skills/planner/references/strategy-ooda-loop.md, sha256: b626a9d4fb9134de8b14ebf310a74d36130c4fe55cba4d698faceff1d66e2861}
  - {path: .claude/skills/pre-mortem/references/strategy-ooda-loop.md, sha256: 921b885698d4914564b0aae64f9554417e6aa8acbb318cd647f4005a9a0e3c83}
  - {path: scripts/eval/_model_sweep_core.py, sha256: 5c8b7f4c62170505506a771f8b6fd8b750d7d70c2209a9574174528fb0a68735}
  - {path: scripts/eval/eval-model-sweep.py, sha256: e5df6204ae1635ec5785ca4305a65009179b831c45c0f97440fd2ca3ed731506}
  - {path: scripts/maintenance/gc_worktrees.py, sha256: ddb43c967e699097aeafca6faa44390346c97a72d42a8fff4fe1beaa4f6203d9}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Decide

## Definition — verbatim
> "| Decide | Choose a course of action | What should we do? What are trade-offs? |" — .claude/skills/analyze/references/strategy-ooda-loop.md:19

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/analyze/references/strategy-ooda-loop.md | 19 | defined here | Third stage of the OODA loop selecting a course of action and evaluating trade-offs. |
| .claude/skills/buy-vs-build-framework/references/PHASE1_ANALYSIS.md | 11 | defined here | Final phase of the buy-vs-build evaluation lifecycle finalizing architecture direction. |
| .claude/skills/buy-vs-build-framework/references/SKILL_SPEC.xml | 212 | defined here | Phase specification defining final decision rationale, documentation, and reassessment scheduling. |
| .claude/skills/buy-vs-build-framework/SKILL.md | 55 | defined here | Phase 4 of the buy-vs-build framework producing final decision ADR and reassessment plans. |
| .claude/skills/planner/references/strategy-ooda-loop.md | 19 | defined here | Strategic planning stage selecting execution strategy and managing trade-offs. |
| .claude/skills/pre-mortem/references/strategy-ooda-loop.md | 19 | defined here | Risk analysis stage deciding mitigations and contingency protocols. |
| scripts/eval/_model_sweep_core.py | 310 | defined here | Evaluator core function determining model selection recommendations from benchmark sweeps. |
| scripts/eval/eval-model-sweep.py | 53 | used here | CLI driver invoking the sweep decision engine to select optimal models. |
| scripts/maintenance/gc_worktrees.py | 191 | defined here | Maintenance function deciding retention or deletion policies for inactive git worktrees. |

## Consumes
Evaluated options, trade-off analyses, synthesized models, risk assessments, benchmark metrics.

## Produces
Actionable decisions, Architecture Decision Records (ADRs), execution commitments, worktree prune verdicts.

## When applied
Following synthesis/evaluation across strategic planning, buy-vs-build selection, model sweeps, and maintenance pruning.

## Sub-concepts
none

## Part of
none

## Implementation status
defects: missing-path, doc-drift, exit-code-mismatch

## Design notes
Decide represents the commitment phase across rjm's strategic decision loops and algorithmic evaluation workflows. Whether operating as the penultimate phase of the OODA loop, the terminal phase of buy-vs-build analysis, or an automated decision routine selecting models and garbage-collecting worktrees, Decide converts synthesized analysis into definitive, documented, and accountable courses of action.
