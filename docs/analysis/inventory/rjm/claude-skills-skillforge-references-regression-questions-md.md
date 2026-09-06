---
package: rjm
path: .claude/skills/skillforge/references/regression-questions.md
type: reference
bytes: 11227
unit: inv-rjm-160
in_scope_via: .claude/skills/skillforge/SKILL.md
aliases: []
memo_inputs:
  - {path: .claude/skills/skillforge/references/regression-questions.md, sha256: 8b258798fe9db38d01862e82c5bfecccb5890bfac02b77679b932a176d2b7719}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# .claude/skills/skillforge/references/regression-questions.md

## Purpose — required, verbatim
> "The core methodology for exhaustive skill analysis. These questions are applied iteratively until no new insights emerge." — .claude/skills/skillforge/references/regression-questions.md:3

## Design intent — required
Provides an exhaustive, iterative inquiry protocol used during Phase 1 (Deep Analysis) to prevent premature convergence on suboptimal skill designs. It structures discovery across 7 comprehensive question categories: Missing Elements, Expert Simulation (6 distinct personas: Domain, UX, Systems Architect, Security, Performance, Maintenance), Failure Analysis, Temporal Projection (horizons from now to 5 years), Completeness Verification, Meta-Questioning, and Script/Automation Analysis. It establishes explicit termination criteria (three consecutive rounds producing zero new insights, all thinking models applied, at least 3 expert perspectives evaluated, and timelessness score >= 7) and provides specialized question banks tailored to 5 skill archetypes (Executor, Analyzer, Generator, Orchestrator, Validator/Checker). Without this protocol, skill design would suffer from surface-level questioning, blind spots from narrow perspectives, unexamined failure modes, and cognitive fatigue, resulting in brittle skills that fail in production or quickly become obsolete.

## Phase — required
rjm:Phase 1: Deep Analysis

## Inputs — required
Initial skill goals, user requirements, domain context, user inputs, and feedback issues from Phase 4 synthesis panel rejections when looping back.

## Outputs — required
Documented insights across questioning rounds, structured inputs for XML skill specification generation (`<requirements><discovered>`, `<anti_patterns>`, `<evolution_analysis>`, architecture/design decisions), identified script needs with category classifications and patterns, and temporal projection risk/mitigation matrices.

## Invokes — required
- reference script-integration-framework.md — .claude/skills/skillforge/references/regression-questions.md:200
- reference script-patterns-catalog.md — .claude/skills/skillforge/references/regression-questions.md:200

## Invoked by — required
- skill skillforge — .claude/skills/skillforge/SKILL.md:160
- skill skillforge — .claude/skills/skillforge/SKILL.md:302
- reference script-integration-framework.md — .claude/skills/skillforge/references/script-integration-framework.md:564

## Concepts named — required, verbatim
- `Regression Questioning Protocol` — .claude/skills/skillforge/references/regression-questions.md:1 — defined here
- `Termination Criteria` — .claude/skills/skillforge/references/regression-questions.md:9 — defined here
- `Question Categories` — .claude/skills/skillforge/references/regression-questions.md:18 — defined here
- `Missing Elements` — .claude/skills/skillforge/references/regression-questions.md:20 — defined here
- `Expert Simulation` — .claude/skills/skillforge/references/regression-questions.md:37 — defined here
- `Failure Analysis` — .claude/skills/skillforge/references/regression-questions.md:57 — defined here
- `Temporal Projection` — .claude/skills/skillforge/references/regression-questions.md:77 — defined here
- `Completeness Verification` — .claude/skills/skillforge/references/regression-questions.md:103 — defined here
- `Meta-Questioning` — .claude/skills/skillforge/references/regression-questions.md:115 — defined here
- `Script and Automation Analysis` — .claude/skills/skillforge/references/regression-questions.md:127 — defined here
- `ValidationResult` — .claude/skills/skillforge/references/regression-questions.md:157 — used here
- `Agentic Capability Checklist` — .claude/skills/skillforge/references/regression-questions.md:191 — defined here
- `Round Structure` — .claude/skills/skillforge/references/regression-questions.md:204 — defined here
- `Executor Skills` — .claude/skills/skillforge/references/regression-questions.md:246 — defined here
- `Analyzer Skills` — .claude/skills/skillforge/references/regression-questions.md:252 — defined here
- `Generator Skills` — .claude/skills/skillforge/references/regression-questions.md:258 — defined here
- `Orchestrator Skills` — .claude/skills/skillforge/references/regression-questions.md:264 — defined here
- `Validator/Checker Skills` — .claude/skills/skillforge/references/regression-questions.md:270 — defined here
- `Anti-Patterns in Questioning` — .claude/skills/skillforge/references/regression-questions.md:278 — defined here

## Structure
- `# Regression Questioning Protocol` — .claude/skills/skillforge/references/regression-questions.md:1
- `## Overview` — .claude/skills/skillforge/references/regression-questions.md:5
- `## Question Categories` — .claude/skills/skillforge/references/regression-questions.md:18
- `### Category 1: Missing Elements` — .claude/skills/skillforge/references/regression-questions.md:20
- `### Category 2: Expert Simulation` — .claude/skills/skillforge/references/regression-questions.md:37
- `### Category 3: Failure Analysis` — .claude/skills/skillforge/references/regression-questions.md:57
- `### Category 4: Temporal Projection` — .claude/skills/skillforge/references/regression-questions.md:77
- `### Category 5: Completeness Verification` — .claude/skills/skillforge/references/regression-questions.md:103
- `### Category 6: Meta-Questioning` — .claude/skills/skillforge/references/regression-questions.md:115
- `### Category 7: Script and Automation Analysis` — .claude/skills/skillforge/references/regression-questions.md:127
- `## Round Structure` — .claude/skills/skillforge/references/regression-questions.md:204
- `### Example Round Execution` — .claude/skills/skillforge/references/regression-questions.md:219
- `## Question Bank by Skill Type` — .claude/skills/skillforge/references/regression-questions.md:244
- `### For Executor Skills` — .claude/skills/skillforge/references/regression-questions.md:246
- `### For Analyzer Skills` — .claude/skills/skillforge/references/regression-questions.md:252
- `### For Generator Skills` — .claude/skills/skillforge/references/regression-questions.md:258
- `### For Orchestrator Skills` — .claude/skills/skillforge/references/regression-questions.md:264
- `### For Validator/Checker Skills` — .claude/skills/skillforge/references/regression-questions.md:270
- `## Anti-Patterns in Questioning` — .claude/skills/skillforge/references/regression-questions.md:278
- `## Integration with Other Phases` — .claude/skills/skillforge/references/regression-questions.md:290
- `### Input to Specification Generation` — .claude/skills/skillforge/references/regression-questions.md:292
- `### Feedback from Synthesis Panel` — .claude/skills/skillforge/references/regression-questions.md:301

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
- Defines explicit stopping criteria to prevent endless questioning: 3 consecutive rounds producing zero new insights, all thinking models applied, 3 expert perspectives simulated, and timelessness score >= 7.
- Links questioning directly to XML specification structure: discovered requirements go to `<requirements><discovered>`, failure modes to `<anti_patterns>`, temporal analysis to `<evolution_analysis>`.
- Couples questioning with script discovery: Category 7 provides concrete criteria for classifying scripts into 7 types (Validation, State Management, Generation, Transformation, Integration, Visualization, Calculation) before coding.

## Context cost
11227 bytes (~2807 tokens). When loading referenced files `script-integration-framework.md` (17457 bytes) and `script-patterns-catalog.md` (21550 bytes), total context cost is ~50234 bytes (~12560 tokens).
