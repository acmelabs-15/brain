---
package: rjm
path: .claude/skills/buy-vs-build-framework/references/PHASE1_ANALYSIS.md
type: reference
bytes: 10706
unit: inv-rjm-95
in_scope_via: .claude/skills/buy-vs-build-framework/SKILL.md
aliases: []
memo_inputs:
  - {path: .claude/skills/buy-vs-build-framework/references/PHASE1_ANALYSIS.md, sha256: b2e62451bc202e69bce365986c0189d44776bc7ee1d6ee58ebe5b60c85061298}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# .claude/skills/buy-vs-build-framework/references/PHASE1_ANALYSIS.md

## Purpose — required, verbatim
> "# Phase 1: Deep Analysis - Buy vs Build Framework" — .claude/skills/buy-vs-build-framework/references/PHASE1_ANALYSIS.md:1
(no explicit purpose statement)

## Design intent — required
Establishes the foundational design, requirements analysis, and mental model architecture for the `buy-vs-build-framework` skill within rjm's multi-agent / skill-forge framework. Formulates a rigorous strategic sourcing decision framework for Principal/VP leaders (Tier 4) with a 9/10 timelessness target. By expanding explicit, implicit, and discovered regression requirements, applying 11 mental models (First Principles, Inversion, Second-Order Effects, Systems Thinking, Probabilistic Thinking, Regret Minimization, Compounding Effects, Optionality, Skin in the Game, Asymmetric Upside, Time Horizon), defining 4 autonomous automation scripts, categorizing analysis into 3 depth tiers, integrating 4 external skills, and establishing 10 reassessment triggers, it prevents both gut-driven under-analysis and bureaucratic analysis paralysis. Without this document, the skill's XML specification and execution tooling would lack structural justification, explicit red-line boundaries, and clear risk modeling.

## Phase — required
rjm:spec

## Inputs — required
- "**Date**: 2026-02-07" — .claude/skills/buy-vs-build-framework/references/PHASE1_ANALYSIS.md:3
- "**Tier**: 4 (Principal/VP)" — .claude/skills/buy-vs-build-framework/references/PHASE1_ANALYSIS.md:4
- "**Timelessness Target**: 9/10" — .claude/skills/buy-vs-build-framework/references/PHASE1_ANALYSIS.md:5
- "Four-phase process: Classify → Analyze → Evaluate → Decide" — .claude/skills/buy-vs-build-framework/references/PHASE1_ANALYSIS.md:11
- "Core vs Context classification (differentiator vs table stakes)" — .claude/skills/buy-vs-build-framework/references/PHASE1_ANALYSIS.md:12
- "TCO Framework with three tiers (quick, standard, deep)" — .claude/skills/buy-vs-build-framework/references/PHASE1_ANALYSIS.md:13
- "Decision matrix outputs: Build, Buy, Partner, Defer" — .claude/skills/buy-vs-build-framework/references/PHASE1_ANALYSIS.md:15
- "Core vs context from Wardley Mapping (2005), still relevant 20+ years later" — .claude/skills/buy-vs-build-framework/references/PHASE1_ANALYSIS.md:223

## Outputs — required
- "Detailed decision matrix + ADR" — .claude/skills/buy-vs-build-framework/references/PHASE1_ANALYSIS.md:169
- "Comprehensive ADR + TCO model + risk analysis" — .claude/skills/buy-vs-build-framework/references/PHASE1_ANALYSIS.md:175
- "Framework is READY for Phase 2 specification generation." — .claude/skills/buy-vs-build-framework/references/PHASE1_ANALYSIS.md:238
- "**Next**: Generate XML specification (Phase 2)" — .claude/skills/buy-vs-build-framework/references/PHASE1_ANALYSIS.md:249

## Invokes — required
- script scripts/calculate_tco.py — .claude/skills/buy-vs-build-framework/references/PHASE1_ANALYSIS.md:131
- script scripts/score_decision.py — .claude/skills/buy-vs-build-framework/references/PHASE1_ANALYSIS.md:136
- script scripts/check_reassessment_triggers.py — .claude/skills/buy-vs-build-framework/references/PHASE1_ANALYSIS.md:141
- script scripts/score_vendor.py — .claude/skills/buy-vs-build-framework/references/PHASE1_ANALYSIS.md:146
- skill cynefin-classifier — .claude/skills/buy-vs-build-framework/references/PHASE1_ANALYSIS.md:179
- skill pre-mortem — .claude/skills/buy-vs-build-framework/references/PHASE1_ANALYSIS.md:185
- skill decision-critic — .claude/skills/buy-vs-build-framework/references/PHASE1_ANALYSIS.md:191
- skill adr-review — .claude/skills/adr-review/SKILL.md:2

## Invoked by — required
- skill buy-vs-build-framework — .claude/skills/buy-vs-build-framework/SKILL.md:427

## Concepts named — required, verbatim
- `Buy vs Build Framework` — .claude/skills/buy-vs-build-framework/references/PHASE1_ANALYSIS.md:1 — defined here
- `Phase 1: Deep Analysis` — .claude/skills/buy-vs-build-framework/references/PHASE1_ANALYSIS.md:1 — defined here
- `Four-phase process` — .claude/skills/buy-vs-build-framework/references/PHASE1_ANALYSIS.md:11 — defined here
- `Classify` — .claude/skills/buy-vs-build-framework/references/PHASE1_ANALYSIS.md:11 — defined here
- `Analyze` — .claude/skills/buy-vs-build-framework/references/PHASE1_ANALYSIS.md:11 — defined here
- `Evaluate` — .claude/skills/buy-vs-build-framework/references/PHASE1_ANALYSIS.md:11 — defined here
- `Decide` — .claude/skills/buy-vs-build-framework/references/PHASE1_ANALYSIS.md:11 — defined here
- `Core vs Context classification` — .claude/skills/buy-vs-build-framework/references/PHASE1_ANALYSIS.md:12 — defined here
- `Core` — .claude/skills/buy-vs-build-framework/references/PHASE1_ANALYSIS.md:12 — defined here
- `Context` — .claude/skills/buy-vs-build-framework/references/PHASE1_ANALYSIS.md:12 — defined here
- `TCO Framework` — .claude/skills/buy-vs-build-framework/references/PHASE1_ANALYSIS.md:13 — defined here
- `Decision matrix` — .claude/skills/buy-vs-build-framework/references/PHASE1_ANALYSIS.md:15 — defined here
- `Build` — .claude/skills/buy-vs-build-framework/references/PHASE1_ANALYSIS.md:15 — defined here
- `Buy` — .claude/skills/buy-vs-build-framework/references/PHASE1_ANALYSIS.md:15 — defined here
- `Partner` — .claude/skills/buy-vs-build-framework/references/PHASE1_ANALYSIS.md:15 — defined here
- `Defer` — .claude/skills/buy-vs-build-framework/references/PHASE1_ANALYSIS.md:15 — defined here
- `cynefin-classifier` — .claude/skills/buy-vs-build-framework/references/PHASE1_ANALYSIS.md:16 — used here
- `pre-mortem` — .claude/skills/buy-vs-build-framework/references/PHASE1_ANALYSIS.md:16 — used here
- `decision-critic` — .claude/skills/buy-vs-build-framework/references/PHASE1_ANALYSIS.md:16 — used here
- `ADR review` — .claude/skills/buy-vs-build-framework/references/PHASE1_ANALYSIS.md:16 — used here
- `Reassessment triggers` — .claude/skills/buy-vs-build-framework/references/PHASE1_ANALYSIS.md:17 — defined here
- `Tiered depth` — .claude/skills/buy-vs-build-framework/references/PHASE1_ANALYSIS.md:18 — defined here
- `11 Thinking Models` — .claude/skills/buy-vs-build-framework/references/PHASE1_ANALYSIS.md:50 — defined here
- `First Principles` — .claude/skills/buy-vs-build-framework/references/PHASE1_ANALYSIS.md:52 — defined here
- `Inversion` — .claude/skills/buy-vs-build-framework/references/PHASE1_ANALYSIS.md:59 — defined here
- `red line` — .claude/skills/buy-vs-build-framework/references/PHASE1_ANALYSIS.md:64 — defined here
- `Second-Order Effects` — .claude/skills/buy-vs-build-framework/references/PHASE1_ANALYSIS.md:66 — defined here
- `Systems Thinking` — .claude/skills/buy-vs-build-framework/references/PHASE1_ANALYSIS.md:74 — defined here
- `Probabilistic Thinking` — .claude/skills/buy-vs-build-framework/references/PHASE1_ANALYSIS.md:80 — defined here
- `Regret Minimization` — .claude/skills/buy-vs-build-framework/references/PHASE1_ANALYSIS.md:86 — defined here
- `Compounding Effects` — .claude/skills/buy-vs-build-framework/references/PHASE1_ANALYSIS.md:92 — defined here
- `Optionality` — .claude/skills/buy-vs-build-framework/references/PHASE1_ANALYSIS.md:99 — defined here
- `Skin in the Game` — .claude/skills/buy-vs-build-framework/references/PHASE1_ANALYSIS.md:105 — defined here
- `Asymmetric Upside` — .claude/skills/buy-vs-build-framework/references/PHASE1_ANALYSIS.md:111 — defined here
- `Time Horizon` — .claude/skills/buy-vs-build-framework/references/PHASE1_ANALYSIS.md:119 — defined here
- `TCO Calculator` — .claude/skills/buy-vs-build-framework/references/PHASE1_ANALYSIS.md:131 — defined here
- `Decision Matrix Scorer` — .claude/skills/buy-vs-build-framework/references/PHASE1_ANALYSIS.md:136 — defined here
- `Reassessment Trigger` — .claude/skills/buy-vs-build-framework/references/PHASE1_ANALYSIS.md:141 — defined here
- `Vendor Scorecard` — .claude/skills/buy-vs-build-framework/references/PHASE1_ANALYSIS.md:146 — defined here
- `Tiered Depth Analysis` — .claude/skills/buy-vs-build-framework/references/PHASE1_ANALYSIS.md:157 — defined here
- `Tier 1: Quick` — .claude/skills/buy-vs-build-framework/references/PHASE1_ANALYSIS.md:159 — defined here
- `Tier 2: Standard` — .claude/skills/buy-vs-build-framework/references/PHASE1_ANALYSIS.md:165 — defined here
- `Tier 3: Deep` — .claude/skills/buy-vs-build-framework/references/PHASE1_ANALYSIS.md:171 — defined here
- `ADR` — .claude/skills/buy-vs-build-framework/references/PHASE1_ANALYSIS.md:169 — used here
- `Wardley Mapping` — .claude/skills/buy-vs-build-framework/references/PHASE1_ANALYSIS.md:223 — used here

## Structure
- # Phase 1: Deep Analysis - Buy vs Build Framework
- ## Input Expansion
- ### Explicit Requirements
- ### Implicit Requirements
- ### Unknown Requirements (Discovered via Regression)
- ## 11 Thinking Models Applied
- ### 1. First Principles
- ### 2. Inversion
- ### 3. Second-Order Effects
- ### 4. Systems Thinking
- ### 5. Probabilistic Thinking
- ### 6. Regret Minimization
- ### 7. Compounding Effects
- ### 8. Optionality
- ### 9. Skin in the Game
- ### 10. Asymmetric Upside
- ### 11. Time Horizon
- ## Automation Lens
- ### Opportunities for Scripts
- ### Self-Verification Patterns
- ## Tiered Depth Analysis
- ### Tier 1: Quick (1-2 hours)
- ### Tier 2: Standard (1-2 days)
- ### Tier 3: Deep (1-2 weeks)
- ## Integration Points
- ### 1. cynefin-classifier
- ### 2. pre-mortem
- ### 3. decision-critic
- ### 4. ADR review
- ## Reassessment Triggers
- ## Timelessness Analysis
- ### Why this framework is timeless (9/10)
- ### What could change (-1 point)
- ## Conclusion

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
- doc-drift: Line 144 lists exit codes for `check_reassessment_triggers.py` as "Exit codes: 0=assumptions hold, 11=reassessment required" — .claude/skills/buy-vs-build-framework/references/PHASE1_ANALYSIS.md:144, omitting the intermediate exit code 10 documented in `SKILL.md:253` ("10: Minor drift (<20%), monitor closely") and `SKILL_SPEC.xml:260`.
- doc-drift: `SKILL.md` line 427 characterizes this file as "references/PHASE1_ANALYSIS.md - Core vs Context classification worksheet" — .claude/skills/buy-vs-build-framework/SKILL.md:427, but the file is an architectural design exploration document covering requirements expansion, 11 mental models, automation scripts, and integration points rather than an interactive classification worksheet.

## Observations
- Systematic application of 11 mental models (First Principles, Inversion, Second-Order Effects, Systems Thinking, Probabilistic Thinking, Regret Minimization, Compounding Effects, Optionality, Skin in the Game, Asymmetric Upside, Time Horizon) to architectural framework design.
- Establishes explicit "Never Build" (commodity capabilities, undifferentiated, no strategic value, team lacks skills, time-critical) and "Never Buy" (core IP, competitive secret sauce, requires 100% control, no viable vendors, regulatory restrictions) boundaries to short-circuit unnecessary analysis.
- Connects decision magnitude to time-boxed depth tiers (<$50K = 1-2 hours; $50K-$500K = 1-2 days; >$500K = 1-2 weeks).

## Context cost
10,706 bytes, ~2,676 tokens.
