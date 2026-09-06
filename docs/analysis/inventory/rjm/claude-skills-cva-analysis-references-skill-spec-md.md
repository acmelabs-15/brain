---
package: rjm
path: .claude/skills/cva-analysis/references/SKILL_SPEC.md
type: reference
bytes: 39059
unit: inv-rjm-111
in_scope_via: .claude/skills/cva-analysis/SKILL.md
aliases: []
memo_inputs:
  - {path: .claude/skills/cva-analysis/references/SKILL_SPEC.md, sha256: bbd5bfc3a226248265e589c01e3fd36d3855ad83010b7eeeee3e2f2576bb8b4a}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# .claude/skills/cva-analysis/references/SKILL_SPEC.md

## Purpose — required, verbatim
> "<what>Engineers need a systematic technique for discovering natural abstractions from requirements before selecting design patterns</what>" — .claude/skills/cva-analysis/references/SKILL_SPEC.md:44 (no explicit purpose statement)

## Design intent — required
Comprehensive XML skill specification defining the requirements, architecture, verification protocol, and generation instructions for the `cva-analysis` skill. It formalizes Jim Coplien's Multi-Paradigm Design (1999) Commonality Variability Analysis methodology into an actionable, 5-phase engineering workflow (Identify Commonalities, Identify Variabilities, Build CVA Matrix, Map to Patterns, Validation and Handoff). By synthesizing 11 analytical lenses (first principles, inversion, second-order effects, pre-mortem, systems thinking, devil's advocate, constraint analysis, Pareto, root cause, comparative, opportunity cost) and 4 questioning rounds, it articulates why premature pattern-first design causes harmful architectural debt and provides structured mechanisms—including tiered execution depths (Quick 15 min, Standard 30 min, Deep 60 min), explicit edge case handling, multidimensional variability mapping (Strategy, Abstract Factory, Bridge), validation automation, and seamless handoffs to the `architect` agent for ADR generation and `/decision-critic` for validation. Without it, the `cva-analysis` skill would lack rigorous formal grounding, structured evaluation criteria, and traceable evolutionary design rationale.

## Phase — required
rjm:spec

## Inputs — required
- Consumes requirements and use cases: "One or more use cases/requirements (minimum 1 to start)" — .claude/skills/cva-analysis/references/SKILL_SPEC.md:173
- Consumes codebase context: "Domain knowledge or existing code (if refactoring)" — .claude/skills/cva-analysis/references/SKILL_SPEC.md:174
- Consumes commonality list from Phase 1 to drive variability discovery: "Commonalities from Phase 1" — .claude/skills/cva-analysis/references/SKILL_SPEC.md:197
- Consumes use cases under analysis: "Use cases under analysis" — .claude/skills/cva-analysis/references/SKILL_SPEC.md:198
- Consumes commonalities and variabilities to build 2D matrix: "Commonalities (rows) from Phase 1" — .claude/skills/cva-analysis/references/SKILL_SPEC.md:222; "Variabilities (columns) from Phase 2" — .claude/skills/cva-analysis/references/SKILL_SPEC.md:223
- Consumes populated matrix: "Completed CVA matrix from Phase 3" — .claude/skills/cva-analysis/references/SKILL_SPEC.md:248
- Consumes recommendations and matrix artifact: "Pattern recommendations from Phase 4" — .claude/skills/cva-analysis/references/SKILL_SPEC.md:274; "CVA matrix artifact" — .claude/skills/cva-analysis/references/SKILL_SPEC.md:275

## Outputs — required
none (reference specification defining skill architecture; specifies that the implemented skill produces):
- "List of commonalities (matrix rows)" — .claude/skills/cva-analysis/references/SKILL_SPEC.md:183
- "List of variabilities (matrix columns)" — .claude/skills/cva-analysis/references/SKILL_SPEC.md:207
- "CVA matrix in Markdown table format" — .claude/skills/cva-analysis/references/SKILL_SPEC.md:233
- "Optional: Mermaid diagram export" — .claude/skills/cva-analysis/references/SKILL_SPEC.md:234
- "Pattern recommendations (Strategy, Abstract Factory, or combination)" — .claude/skills/cva-analysis/references/SKILL_SPEC.md:258
- "ADR stub for architectural review" — .claude/skills/cva-analysis/references/SKILL_SPEC.md:260
- "Validation report (passed/failed with specific issues)" — .claude/skills/cva-analysis/references/SKILL_SPEC.md:285
- "Reassessment triggers documented" — .claude/skills/cva-analysis/references/SKILL_SPEC.md:287

## Invokes — required
- agent architect — .claude/skills/cva-analysis/references/SKILL_SPEC.md:51
- skill decision-critic — .claude/skills/cva-analysis/references/SKILL_SPEC.md:55
- agent independent-thinker — .claude/skills/cva-analysis/references/SKILL_SPEC.md:59
- reference references/pattern-mapping-guide.md — .claude/skills/cva-analysis/references/SKILL_SPEC.md:580
- reference references/matrix-building-examples.md — .claude/skills/cva-analysis/references/SKILL_SPEC.md:581
- reference references/multidimensional-cva.md — .claude/skills/cva-analysis/references/SKILL_SPEC.md:582
- reference references/coplien-multi-paradigm-design.md — .claude/skills/cva-analysis/references/SKILL_SPEC.md:583
- script scripts/validate-cva-matrix.py — .claude/skills/cva-analysis/references/SKILL_SPEC.md:587
- script scripts/generate-cva-template.py — .claude/skills/cva-analysis/references/SKILL_SPEC.md:588
- script scripts/export-cva-matrix.py — .claude/skills/cva-analysis/references/SKILL_SPEC.md:589

## Invoked by — required
- skill cva-analysis — .claude/skills/cva-analysis/SKILL.md:438

## Concepts named — required, verbatim
- `cva-analysis` — .claude/skills/cva-analysis/references/SKILL_SPEC.md:9 — defined here
- `first_principles` — .claude/skills/cva-analysis/references/SKILL_SPEC.md:17 — used here
- `inversion` — .claude/skills/cva-analysis/references/SKILL_SPEC.md:18 — used here
- `second_order_effects` — .claude/skills/cva-analysis/references/SKILL_SPEC.md:19 — used here
- `pre_mortem` — .claude/skills/cva-analysis/references/SKILL_SPEC.md:20 — used here
- `systems_thinking` — .claude/skills/cva-analysis/references/SKILL_SPEC.md:21 — used here
- `devils_advocate` — .claude/skills/cva-analysis/references/SKILL_SPEC.md:22 — used here
- `constraint_analysis` — .claude/skills/cva-analysis/references/SKILL_SPEC.md:23 — used here
- `pareto_analysis` — .claude/skills/cva-analysis/references/SKILL_SPEC.md:24 — used here
- `root_cause_analysis` — .claude/skills/cva-analysis/references/SKILL_SPEC.md:25 — used here
- `comparative_analysis` — .claude/skills/cva-analysis/references/SKILL_SPEC.md:26 — used here
- `opportunity_cost` — .claude/skills/cva-analysis/references/SKILL_SPEC.md:27 — used here
- `multi_paradigm_design_expert` — .claude/skills/cva-analysis/references/SKILL_SPEC.md:31 — used here
- `software_architect` — .claude/skills/cva-analysis/references/SKILL_SPEC.md:32 — used here
- `pattern_discovery_specialist` — .claude/skills/cva-analysis/references/SKILL_SPEC.md:33 — used here
- `architect` — .claude/skills/cva-analysis/references/SKILL_SPEC.md:51 — used here
- `ADR` — .claude/skills/cva-analysis/references/SKILL_SPEC.md:52 — used here
- `decision-critic` — .claude/skills/cva-analysis/references/SKILL_SPEC.md:55 — used here
- `independent-thinker` — .claude/skills/cva-analysis/references/SKILL_SPEC.md:59 — used here
- `YAGNI` — .claude/skills/cva-analysis/references/SKILL_SPEC.md:64 — used here
- `SOLID` — .claude/skills/cva-analysis/references/SKILL_SPEC.md:68 — used here
- `Strategy` — .claude/skills/cva-analysis/references/SKILL_SPEC.md:70 — used here
- `Abstract Factory` — .claude/skills/cva-analysis/references/SKILL_SPEC.md:70 — used here
- `Coplien Multi-Paradigm Design` — .claude/skills/cva-analysis/references/SKILL_SPEC.md:86 — used here
- `Identify Commonalities` — .claude/skills/cva-analysis/references/SKILL_SPEC.md:170 — defined here
- `Identify Variabilities` — .claude/skills/cva-analysis/references/SKILL_SPEC.md:194 — defined here
- `Build CVA Matrix` — .claude/skills/cva-analysis/references/SKILL_SPEC.md:219 — defined here
- `Map to Patterns` — .claude/skills/cva-analysis/references/SKILL_SPEC.md:245 — defined here
- `Validation and Handoff` — .claude/skills/cva-analysis/references/SKILL_SPEC.md:271 — defined here
- `Bridge` — .claude/skills/cva-analysis/references/SKILL_SPEC.md:311 — used here
- `Builder` — .claude/skills/cva-analysis/references/SKILL_SPEC.md:368 — used here
- `Visitor` — .claude/skills/cva-analysis/references/SKILL_SPEC.md:368 — used here
- `Pattern-First Design` — .claude/skills/cva-analysis/references/SKILL_SPEC.md:433 — defined here
- `Forcing Abstractions` — .claude/skills/cva-analysis/references/SKILL_SPEC.md:440 — defined here
- `Skipping Matrix Visualization` — .claude/skills/cva-analysis/references/SKILL_SPEC.md:447 — defined here
- `Analysis Paralysis` — .claude/skills/cva-analysis/references/SKILL_SPEC.md:454 — defined here
- `Ignoring Temporal Dimension` — .claude/skills/cva-analysis/references/SKILL_SPEC.md:461 — defined here
- `Using CVA for Single Use Case` — .claude/skills/cva-analysis/references/SKILL_SPEC.md:468 — defined here

## Structure
- METADATA — .claude/skills/cva-analysis/references/SKILL_SPEC.md:5
- CONTEXT — .claude/skills/cva-analysis/references/SKILL_SPEC.md:39
- REQUIREMENTS — .claude/skills/cva-analysis/references/SKILL_SPEC.md:74
- ARCHITECTURE — .claude/skills/cva-analysis/references/SKILL_SPEC.md:151
- EVOLUTION ANALYSIS — .claude/skills/cva-analysis/references/SKILL_SPEC.md:338
- ANTI-PATTERNS — .claude/skills/cva-analysis/references/SKILL_SPEC.md:428
- SUCCESS CRITERIA — .claude/skills/cva-analysis/references/SKILL_SPEC.md:475
- VERIFICATION PROTOCOL — .claude/skills/cva-analysis/references/SKILL_SPEC.md:522
- GENERATION INSTRUCTIONS — .claude/skills/cva-analysis/references/SKILL_SPEC.md:561

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
- `missing-path`: `scripts/export-cva-matrix.py` cited at .claude/skills/cva-analysis/references/SKILL_SPEC.md:374 and .claude/skills/cva-analysis/references/SKILL_SPEC.md:589 is not present in `.claude/skills/cva-analysis/scripts/`.
- `missing-path`: `scripts/generate-cva-template.py` cited at .claude/skills/cva-analysis/references/SKILL_SPEC.md:588 is not present in `.claude/skills/cva-analysis/scripts/`.
- `missing-path`: `references/pattern-mapping-extended.md` cited at .claude/skills/cva-analysis/references/SKILL_SPEC.md:369 and .claude/skills/cva-analysis/references/SKILL_SPEC.md:512 is not present in `.claude/skills/cva-analysis/references/`.
- `doc-drift`: .claude/skills/cva-analysis/references/SKILL_SPEC.md:580-584 lists required reference docs but omits `references/gof-pattern-selection.md`, which exists in the directory and is referenced by `SKILL.md:416`.

## Observations
- The file is a structured XML specification document (`<skill_specification version="1.0">`) containing detailed metadata, multi-lens design analysis, user profiling, requirements matrices (explicit, implicit, discovered), multi-phase architecture, decision points, data flow, evolution analysis with a timelessness score of 9/10, anti-patterns, success criteria, verification protocols, and generation instructions.
- Provides the formal design blueprint from which `SKILL.md` was authored.
- Referenced by `SKILL.md:438-442` under planned scripts, confirming that the two missing scripts (`generate-cva-template.py` and `export-cva-matrix.py`) were intentionally designed in `SKILL_SPEC.md` but deferred from implementation.

## Context cost
39,059 bytes. Approximately 9,800 tokens.
