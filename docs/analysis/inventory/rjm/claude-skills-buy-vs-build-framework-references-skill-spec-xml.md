---
package: rjm
path: .claude/skills/buy-vs-build-framework/references/SKILL_SPEC.xml
type: reference
bytes: 25132
unit: inv-rjm-95
in_scope_via: .claude/skills/buy-vs-build-framework/SKILL.md
aliases: []
memo_inputs:
  - {path: .claude/skills/buy-vs-build-framework/references/SKILL_SPEC.xml, sha256: 2cae1d909bd9d8286a7e5a55fa3f48b5a895c973003303d382483a198ffca2a8}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# .claude/skills/buy-vs-build-framework/references/SKILL_SPEC.xml

## Purpose — required, verbatim
> "Strategic framework for evaluating build, buy, partner, or defer decisions with four-phase process, tiered TCO analysis, and integration with decision quality tools." — .claude/skills/buy-vs-build-framework/references/SKILL_SPEC.xml:18

## Design intent — required
Provides the complete formal XML specification for the `buy-vs-build-framework` skill within rjm's multi-agent / skill-forge framework. Formulated for Tier 4 (Principal/VP level) strategic sourcing evaluations targeting Claude Opus 4.5, it specifies metadata, activation triggers, when-to-use / when-not-to-use boundary scenarios, a 5-phase process (Phase 0 Depth Selection, Phase 1 Classify, Phase 2 Analyze, Phase 3 Evaluate, Phase 4 Decide), detailed script input/output schemas and exit codes for 4 Python tools (calculate_tco.py, score_decision.py, check_reassessment_triggers.py, score_vendor.py), 4 template schemas, 5 reference requirements, 5 quality gates, self/user verification checks, anti-patterns, and timelessness / evolution justifications. Without this specification, the skill's operational markdown instruction file and supporting execution scripts would lack a formal machine-readable contract defining parameter types, exit codes, and cross-skill integrations.

## Phase — required
rjm:spec

## Inputs — required
- "Decision budget ($)" — .claude/skills/buy-vs-build-framework/references/SKILL_SPEC.xml:51
- "Strategic impact (low/medium/high)" — .claude/skills/buy-vs-build-framework/references/SKILL_SPEC.xml:52
- "Reversibility (easy/moderate/hard)" — .claude/skills/buy-vs-build-framework/references/SKILL_SPEC.xml:53
- "Initial costs (build: dev time, buy: licenses, partner: integration)" — .claude/skills/buy-vs-build-framework/references/SKILL_SPEC.xml:114
- "Ongoing costs (build: maintenance, buy: subscriptions, partner: rev share)" — .claude/skills/buy-vs-build-framework/references/SKILL_SPEC.xml:115
- "Criteria weights (strategic alignment, time to value, cost, risk, etc.)" — .claude/skills/buy-vs-build-framework/references/SKILL_SPEC.xml:170
- "Option scores for each criterion (1-10 scale)" — .claude/skills/buy-vs-build-framework/references/SKILL_SPEC.xml:171
- "Original assumptions (costs, timelines, strategic priorities)" — .claude/skills/buy-vs-build-framework/references/SKILL_SPEC.xml:251
- "Current state (actual costs, market conditions, team capacity)" — .claude/skills/buy-vs-build-framework/references/SKILL_SPEC.xml:252

## Outputs — required
- "Core vs Context + Simple TCO + Go/No-go" — .claude/skills/buy-vs-build-framework/references/SKILL_SPEC.xml:60
- "Full four phases + Decision matrix + ADR" — .claude/skills/buy-vs-build-framework/references/SKILL_SPEC.xml:66
- "Full four phases + POCs + External research + Consensus panel + Comprehensive ADR" — .claude/skills/buy-vs-build-framework/references/SKILL_SPEC.xml:72
- "Core or Context classification with justification" — .claude/skills/buy-vs-build-framework/references/SKILL_SPEC.xml:98
- "Strategic importance score (1-10)" — .claude/skills/buy-vs-build-framework/references/SKILL_SPEC.xml:99
- "Red line criteria (Never Build / Never Buy)" — .claude/skills/buy-vs-build-framework/references/SKILL_SPEC.xml:100
- "Weighted total scores for each option" — .claude/skills/buy-vs-build-framework/references/SKILL_SPEC.xml:174
- "Drift analysis (which assumptions changed by how much?)" — .claude/skills/buy-vs-build-framework/references/SKILL_SPEC.xml:255
- "Re-evaluation recommendation (Stay course / Minor adjustment / Full re-evaluation)" — .claude/skills/buy-vs-build-framework/references/SKILL_SPEC.xml:256

## Invokes — required
- skill cynefin-classifier — .claude/skills/buy-vs-build-framework/references/SKILL_SPEC.xml:41
- skill decision-critic — .claude/skills/buy-vs-build-framework/references/SKILL_SPEC.xml:42
- skill planner — .claude/skills/buy-vs-build-framework/references/SKILL_SPEC.xml:43
- script calculate_tco.py — .claude/skills/buy-vs-build-framework/references/SKILL_SPEC.xml:111
- script score_decision.py — .claude/skills/buy-vs-build-framework/references/SKILL_SPEC.xml:167
- skill pre-mortem — .claude/skills/buy-vs-build-framework/references/SKILL_SPEC.xml:203
- skill adr-review — .claude/skills/buy-vs-build-framework/references/SKILL_SPEC.xml:237
- script check_reassessment_triggers.py — .claude/skills/buy-vs-build-framework/references/SKILL_SPEC.xml:248
- script score_vendor.py — .claude/skills/buy-vs-build-framework/references/SKILL_SPEC.xml:327
- template core-vs-context-analysis.md — .claude/skills/buy-vs-build-framework/references/SKILL_SPEC.xml:340
- template tco-analysis.md — .claude/skills/buy-vs-build-framework/references/SKILL_SPEC.xml:350
- template decision-matrix.md — .claude/skills/buy-vs-build-framework/references/SKILL_SPEC.xml:360
- template adr-buy-vs-build.md — .claude/skills/buy-vs-build-framework/references/SKILL_SPEC.xml:370
- reference core-vs-context.md — .claude/skills/buy-vs-build-framework/references/SKILL_SPEC.xml:385
- reference tco-methodology.md — .claude/skills/buy-vs-build-framework/references/SKILL_SPEC.xml:389
- reference partnership-models.md — .claude/skills/buy-vs-build-framework/references/SKILL_SPEC.xml:393
- reference vendor-evaluation.md — .claude/skills/buy-vs-build-framework/references/SKILL_SPEC.xml:397
- reference reassessment-playbook.md — .claude/skills/buy-vs-build-framework/references/SKILL_SPEC.xml:401

## Invoked by — required
- skill buy-vs-build-framework — .claude/skills/buy-vs-build-framework/SKILL.md:428

## Concepts named — required, verbatim
- `buy-vs-build-framework` — .claude/skills/buy-vs-build-framework/references/SKILL_SPEC.xml:4 — defined here
- `tier` — .claude/skills/buy-vs-build-framework/references/SKILL_SPEC.xml:6 — used here
- `Wardley Mapping` — .claude/skills/buy-vs-build-framework/references/SKILL_SPEC.xml:10 — used here
- `claude-opus-4-5` — .claude/skills/buy-vs-build-framework/references/SKILL_SPEC.xml:12 — used here
- `cynefin-classifier` — .claude/skills/buy-vs-build-framework/references/SKILL_SPEC.xml:41 — used here
- `decision-critic` — .claude/skills/buy-vs-build-framework/references/SKILL_SPEC.xml:42 — used here
- `planner` — .claude/skills/buy-vs-build-framework/references/SKILL_SPEC.xml:43 — used here
- `Depth Selection` — .claude/skills/buy-vs-build-framework/references/SKILL_SPEC.xml:48 — defined here
- `Quick` — .claude/skills/buy-vs-build-framework/references/SKILL_SPEC.xml:56 — defined here
- `Standard` — .claude/skills/buy-vs-build-framework/references/SKILL_SPEC.xml:62 — defined here
- `Deep` — .claude/skills/buy-vs-build-framework/references/SKILL_SPEC.xml:68 — defined here
- `Classify` — .claude/skills/buy-vs-build-framework/references/SKILL_SPEC.xml:78 — defined here
- `Core vs Context` — .claude/skills/buy-vs-build-framework/references/SKILL_SPEC.xml:82 — defined here
- `Core` — .claude/skills/buy-vs-build-framework/references/SKILL_SPEC.xml:83 — defined here
- `Context` — .claude/skills/buy-vs-build-framework/references/SKILL_SPEC.xml:89 — defined here
- `Red line criteria` — .claude/skills/buy-vs-build-framework/references/SKILL_SPEC.xml:100 — defined here
- `Never Build` — .claude/skills/buy-vs-build-framework/references/SKILL_SPEC.xml:100 — defined here
- `Never Buy` — .claude/skills/buy-vs-build-framework/references/SKILL_SPEC.xml:100 — defined here
- `Analyze` — .claude/skills/buy-vs-build-framework/references/SKILL_SPEC.xml:109 — defined here
- `calculate_tco.py` — .claude/skills/buy-vs-build-framework/references/SKILL_SPEC.xml:111 — defined here
- `NPV` — .claude/skills/buy-vs-build-framework/references/SKILL_SPEC.xml:121 — used here
- `IRR` — .claude/skills/buy-vs-build-framework/references/SKILL_SPEC.xml:122 — used here
- `capacity-assessment` — .claude/skills/buy-vs-build-framework/references/SKILL_SPEC.xml:149 — defined here
- `Evaluate` — .claude/skills/buy-vs-build-framework/references/SKILL_SPEC.xml:165 — defined here
- `score_decision.py` — .claude/skills/buy-vs-build-framework/references/SKILL_SPEC.xml:167 — defined here
- `decision-criteria` — .claude/skills/buy-vs-build-framework/references/SKILL_SPEC.xml:183 — defined here
- `strategic-dimension` — .claude/skills/buy-vs-build-framework/references/SKILL_SPEC.xml:184 — defined here
- `operational-dimension` — .claude/skills/buy-vs-build-framework/references/SKILL_SPEC.xml:190 — defined here
- `risk-dimension` — .claude/skills/buy-vs-build-framework/references/SKILL_SPEC.xml:196 — defined here
- `pre-mortem` — .claude/skills/buy-vs-build-framework/references/SKILL_SPEC.xml:203 — used here
- `Decide` — .claude/skills/buy-vs-build-framework/references/SKILL_SPEC.xml:212 — defined here
- `decision-matrix` — .claude/skills/buy-vs-build-framework/references/SKILL_SPEC.xml:214 — defined here
- `Build` — .claude/skills/buy-vs-build-framework/references/SKILL_SPEC.xml:215 — defined here
- `Buy` — .claude/skills/buy-vs-build-framework/references/SKILL_SPEC.xml:220 — defined here
- `Partner` — .claude/skills/buy-vs-build-framework/references/SKILL_SPEC.xml:225 — defined here
- `Defer` — .claude/skills/buy-vs-build-framework/references/SKILL_SPEC.xml:230 — defined here
- `adr-review` — .claude/skills/buy-vs-build-framework/references/SKILL_SPEC.xml:237 — used here
- `adr-requirements` — .claude/skills/buy-vs-build-framework/references/SKILL_SPEC.xml:238 — defined here
- `reassessment-plan` — .claude/skills/buy-vs-build-framework/references/SKILL_SPEC.xml:247 — defined here
- `check_reassessment_triggers.py` — .claude/skills/buy-vs-build-framework/references/SKILL_SPEC.xml:248 — defined here
- `score_vendor.py` — .claude/skills/buy-vs-build-framework/references/SKILL_SPEC.xml:327 — defined here
- `quality-gates` — .claude/skills/buy-vs-build-framework/references/SKILL_SPEC.xml:407 — defined here

## Structure
- <skill-specification>
- <metadata>
- <description>
- <triggers>
- <when-to-use>
- <when-not-to-use>
- <process>
- <phase number="0" name="Depth Selection">
- <phase number="1" name="Classify">
- <phase number="2" name="Analyze">
- <phase number="3" name="Evaluate">
- <phase number="4" name="Decide">
- <scripts>
- <templates>
- <references>
- <quality-gates>
- <verification>
- <anti-patterns>
- <evolution>

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
- missing-path: The `<templates>` section specifies `core-vs-context-analysis.md` (line 340), `tco-analysis.md` (line 350), `decision-matrix.md` (line 360), and `adr-buy-vs-build.md` (line 370), but `.claude/skills/buy-vs-build-framework/templates/` does not exist on disk.
- missing-path: The `<references>` section specifies `core-vs-context.md` (line 385), `tco-methodology.md` (line 389), `partnership-models.md` (line 393), `vendor-evaluation.md` (line 397), and `reassessment-playbook.md` (line 401), but none exist under `.claude/skills/buy-vs-build-framework/references/` (which contains only `PHASE1_ANALYSIS.md` and `SKILL_SPEC.xml`).
- doc-drift: Lines 384-405 omit `PHASE1_ANALYSIS.md` and `SKILL_SPEC.xml` itself from the `<references>` catalog, despite both files being present on disk and referenced by `SKILL.md:427-428`.

## Observations
- Comprehensive XML specification capturing complete schema definitions for script inputs, structured dictionary outputs, exit codes, and verification assertions.
- Explicitly mandates Claude Opus 4.5 (`claude-opus-4-5`) for nuanced strategic synthesis and balancing multi-stakeholder perspectives.
- Defines 5 explicit quality gates matching phases 1 through 4 (stakeholder consensus on classification, multi-horizon TCO with sensitivity, pre-mortem risk identification, decision-critic validation, ADR with reassessment schedule).

## Context cost
25,132 bytes, ~6,283 tokens.
