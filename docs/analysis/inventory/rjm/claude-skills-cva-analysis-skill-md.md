---
package: rjm
path: .claude/skills/cva-analysis/SKILL.md
type: skill
bytes: 19045
unit: inv-rjm-112
in_scope_via: .agents/architecture/README.md
aliases: []
memo_inputs:
  - {path: .claude/skills/cva-analysis/SKILL.md, sha256: 43e45215d0c6aa5ae0d384806b42a6bbe2610a1cb5c2b73b2a840b6c44ea85a9}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# .claude/skills/cva-analysis/SKILL.md

## Purpose — required, verbatim
> "Commonality Variability Analysis (CVA) is a systematic technique for discovering abstractions from requirements. Instead of choosing patterns first, you build a matrix showing what's COMMON (constant across use cases) vs what VARIES (differs between cases). Patterns emerge naturally from the matrix structure." — .claude/skills/cva-analysis/SKILL.md:19

## Design intent — required
Systematic, matrix-driven abstraction discovery framework rooted in James Coplien's Multi-Paradigm Design that prevents premature, incorrect, or missing abstractions. Instead of selecting design patterns upfront based on intuition, engineers and agents evaluate multiple use cases across five structured phases (identifying commonalities, identifying variabilities, building a 2D matrix, mapping emergent structure to GoF patterns, and validating/handing off). It establishes that matrix rows (commonalities) map to Strategy patterns, matrix columns (variabilities) map to Abstract Factory patterns, and multidimensional variations require co-equal first-class abstractions rather than relegated extension points. By pairing formal matrix validation via `validate-cva-matrix.py` with multi-agent review handoffs (ADR stubs for `architect`, inversion thinking via `decision-critic`, and YAGNI boundary challenges via `independent-thinker`), it ensures that abstractions are strictly justified by empirical requirement variation before implementation begins. Without this skill, software systems face rigid or premature abstractions that introduce architectural friction and complicate maintenance.

## Phase — required
rjm:spec

## Inputs — required
- Two or more similar but varying use cases or requirements (line 51).
- Use cases / requirements describing domain capabilities (Phase 1, line 39).
- Commonalities extracted across use cases (Phase 2, line 40).
- Matrix rows (commonalities) and columns (variabilities) (Phase 3, line 41).
- Completed CVA Markdown matrix (Phase 4, line 42).
- Pattern recommendations for validation and routing (Phase 5, line 43).
- CVA matrix file path passed to validation script (`cva-matrix.md`, line 272).
- Conditional invocation trigger: PRD user stories in complexity Tier 3–5 or multi-use-case Tier 1–2 (via `.claude/skills/spec-generator/references/spec-prior-art-schema.md:193`).

## Outputs — required
- List of commonalities present across all use cases (matrix rows, line 39).
- List of variabilities differentiating use cases (matrix columns, line 40).
- CVA matrix rendered as a Markdown table (lines 41, 151–159).
- Pattern recommendations with matrix-backed rationale (lines 42, 206–228).
- ADR decision stub for `architect` agent (`# ADR-XXX: Payment Processing Abstraction`, lines 43, 230–250).
- Validation report indicating pass/fail status and structural issues (lines 43, 306).
- Reassessment triggers documenting when to re-run CVA (lines 294–302, 381–389).
- Subagent / skill handoffs: `/decision-critic` invocation (line 282) and `Task(subagent_type="architect", ...)` invocation (line 289).

## Invokes — required
- script validate-cva-matrix.py — .claude/skills/cva-analysis/SKILL.md:272
- skill decision-critic — .claude/skills/cva-analysis/SKILL.md:282
- agent architect — .claude/skills/cva-analysis/SKILL.md:289
- agent independent-thinker — .claude/skills/cva-analysis/SKILL.md:364
- reference matrix-building-examples.md — .claude/skills/cva-analysis/SKILL.md:404
- reference pattern-mapping-guide.md — .claude/skills/cva-analysis/SKILL.md:412
- reference matrix-building-examples.md — .claude/skills/cva-analysis/SKILL.md:413
- reference multidimensional-cva.md — .claude/skills/cva-analysis/SKILL.md:414
- reference coplien-multi-paradigm-design.md — .claude/skills/cva-analysis/SKILL.md:415
- reference gof-pattern-selection.md — .claude/skills/cva-analysis/SKILL.md:416
- reference SKILL_SPEC.md — .claude/skills/cva-analysis/SKILL.md:438

## Invoked by — required
- reference spec-prior-art-schema.md — .claude/skills/spec-generator/references/spec-prior-art-schema.md:193
- reference architect.md — .claude/skills/review/references/architect.md:49
- skill software-engineering-library — .claude/skills/software-engineering-library/SKILL.md:4

## Concepts named — required, verbatim
- `Commonality Variability Analysis` — .claude/skills/cva-analysis/SKILL.md:4, 19 — defined here
- `CVA` — .claude/skills/cva-analysis/SKILL.md:19 — defined here
- `Multi-Paradigm Design` — .claude/skills/cva-analysis/SKILL.md:14 — used here
- `Strategy pattern` — .claude/skills/cva-analysis/SKILL.md:21 — used here
- `Abstract Factory pattern` — .claude/skills/cva-analysis/SKILL.md:21 — used here
- `Design Philosophy` — .claude/skills/cva-analysis/SKILL.md:23 — used here
- `Phase 1: Identify Commonalities` — .claude/skills/cva-analysis/SKILL.md:66 — defined here
- `Phase 2: Identify Variabilities` — .claude/skills/cva-analysis/SKILL.md:101 — defined here
- `Phase 3: Build CVA Matrix` — .claude/skills/cva-analysis/SKILL.md:140 — defined here
- `Phase 4: Map to Patterns` — .claude/skills/cva-analysis/SKILL.md:176 — defined here
- `Phase 5: Validation and Handoff` — .claude/skills/cva-analysis/SKILL.md:263 — defined here
- `YAGNI` — .claude/skills/cva-analysis/SKILL.md:59 — used here
- `Template Method` — .claude/skills/cva-analysis/SKILL.md:164 — used here
- `multidimensional variability` — .claude/skills/cva-analysis/SKILL.md:190 — defined here
- `Bridge` — .claude/skills/cva-analysis/SKILL.md:194 — used here
- `ADR stub` — .claude/skills/cva-analysis/SKILL.md:230 — defined here
- `validate-cva-matrix.py` — .claude/skills/cva-analysis/SKILL.md:272 — defined here
- `decision-critic` — .claude/skills/cva-analysis/SKILL.md:278 — used here
- `architect` — .claude/skills/cva-analysis/SKILL.md:285 — used here
- `Reassessment Triggers` — .claude/skills/cva-analysis/SKILL.md:295 — defined here
- `Pattern-First Design` — .claude/skills/cva-analysis/SKILL.md:328 — defined here
- `Forcing Abstractions` — .claude/skills/cva-analysis/SKILL.md:329 — defined here
- `Skipping Matrix Visualization` — .claude/skills/cva-analysis/SKILL.md:330 — defined here
- `Analysis Paralysis` — .claude/skills/cva-analysis/SKILL.md:331 — defined here
- `Ignoring Temporal Dimension` — .claude/skills/cva-analysis/SKILL.md:332 — defined here
- `Using CVA for Single Use Case` — .claude/skills/cva-analysis/SKILL.md:333 — defined here
- `inversion thinking` — .claude/skills/cva-analysis/SKILL.md:349 — used here
- `independent-thinker` — .claude/skills/cva-analysis/SKILL.md:357 — used here
- `Verification Checklist` — .claude/skills/cva-analysis/SKILL.md:367 — defined here
- `Tiered Depth Levels` — .claude/skills/cva-analysis/SKILL.md:390 — defined here
- `Builder` — .claude/skills/cva-analysis/SKILL.md:447 — used here
- `Visitor` — .claude/skills/cva-analysis/SKILL.md:447 — used here

## Structure
- `# CVA Analysis - Discover Natural Abstractions` — .claude/skills/cva-analysis/SKILL.md:17
- `## Triggers` — .claude/skills/cva-analysis/SKILL.md:25
- `## Quick Reference` — .claude/skills/cva-analysis/SKILL.md:35
- `## When to Use` — .claude/skills/cva-analysis/SKILL.md:47
- `## Process` — .claude/skills/cva-analysis/SKILL.md:64
- `### Phase 1: Identify Commonalities` — .claude/skills/cva-analysis/SKILL.md:66
- `### Phase 2: Identify Variabilities` — .claude/skills/cva-analysis/SKILL.md:101
- `### Phase 3: Build CVA Matrix` — .claude/skills/cva-analysis/SKILL.md:140
- `### Phase 4: Map to Patterns` — .claude/skills/cva-analysis/SKILL.md:176
- `### Phase 5: Validation and Handoff` — .claude/skills/cva-analysis/SKILL.md:263
- `## Anti-Patterns` — .claude/skills/cva-analysis/SKILL.md:324
- `## Integration with Other Skills` — .claude/skills/cva-analysis/SKILL.md:335
- `### architect Agent` — .claude/skills/cva-analysis/SKILL.md:337
- `### decision-critic Skill` — .claude/skills/cva-analysis/SKILL.md:347
- `### independent-thinker Agent` — .claude/skills/cva-analysis/SKILL.md:357
- `## Verification Checklist` — .claude/skills/cva-analysis/SKILL.md:367
- `## Reassessment Triggers` — .claude/skills/cva-analysis/SKILL.md:380
- `## Tiered Depth Levels` — .claude/skills/cva-analysis/SKILL.md:390
- `## .NET Examples` — .claude/skills/cva-analysis/SKILL.md:402
- `## References` — .claude/skills/cva-analysis/SKILL.md:410
- `## Scripts` — .claude/skills/cva-analysis/SKILL.md:418
- `### validate-cva-matrix.py` — .claude/skills/cva-analysis/SKILL.md:420
- `### Planned scripts (not yet implemented)` — .claude/skills/cva-analysis/SKILL.md:436
- `## Extension Points` — .claude/skills/cva-analysis/SKILL.md:443

## Scripts — required if type is script or the skill ships scripts
The skill ships one validation script under `scripts/validate-cva-matrix.py`:
- path: `.claude/skills/cva-analysis/scripts/validate-cva-matrix.py`, language: Python, lines: 317
- documented invocation: `python3 .claude/skills/cva-analysis/scripts/validate-cva-matrix.py cva-matrix.md` — .claude/skills/cva-analysis/SKILL.md:272
- **executed:** yes
- actual command run: `python3 .claude/skills/cva-analysis/scripts/validate-cva-matrix.py .claude/skills/cva-analysis/SKILL.md` (from `sources/rjm/`)
- abridged stdout:
  ```
  ✓ VALIDATION PASSED

  Matrix: 5 commonalities × 4 variabilities

  📐 PATTERN RECOMMENDATIONS:

  ✓ COMBINATION PATTERNS: Strategy + Abstract Factory
    Rationale: High variability in BOTH dimensions (multidimensional)
    Row variability: 1.00 (high), Column variability: 0.85 (high)
    Treat both axes as co-equal first-class abstractions; do not defer either axis to Extension Points.

  ✓ Next Steps:
    1. Review pattern recommendations with team
    2. Route to decision-critic: /decision-critic "Validate [pattern] per CVA"
    3. Create ADR with architect agent
    4. Document reassessment triggers
  ```
- **actual exit code**: 0
- documented exit codes vs. actual exit paths:
  Documented in SKILL.md:
  `Exit code 0 = pass, 10 = validation failure, 1 = error` — .claude/skills/cva-analysis/SKILL.md:276
  `- 0: Valid matrix, patterns suggested` — .claude/skills/cva-analysis/SKILL.md:432
  `- 10: Validation failure (missing rows/columns, empty cells)` — .claude/skills/cva-analysis/SKILL.md:433
  `- 1: Error (file not found, invalid format)` — .claude/skills/cva-analysis/SKILL.md:434
  Actual exit paths in code (`.claude/skills/cva-analysis/scripts/validate-cva-matrix.py`):
  - `return ValidationResult.ERROR.value` (code 1) on path traversal detected at `.claude/skills/cva-analysis/scripts/validate-cva-matrix.py:257`
  - `return ValidationResult.ERROR.value` (code 1) on FileNotFoundError at `.claude/skills/cva-analysis/scripts/validate-cva-matrix.py:265`
  - `return ValidationResult.ERROR.value` (code 1) on read failure at `.claude/skills/cva-analysis/scripts/validate-cva-matrix.py:268`
  - `return ValidationResult.ERROR.value` (code 1) on table parsing failure at `.claude/skills/cva-analysis/scripts/validate-cva-matrix.py:278`
  - `return ValidationResult.VALIDATION_FAILURE.value` (code 10) on structural validation issues (<2 rows/columns, empty cells, dimension mismatch) at `.claude/skills/cva-analysis/scripts/validate-cva-matrix.py:294`
  - `return ValidationResult.VALID.value` (code 0) on successful matrix validation at `.claude/skills/cva-analysis/scripts/validate-cva-matrix.py:312`
  - `sys.exit(main())` at `.claude/skills/cva-analysis/scripts/validate-cva-matrix.py:316`
- for validators/gates: can it exit non-zero? Yes: exits 10 on invalid matrix structure (tested with a 1x1 matrix which printed validation failure and exited 10) and exits 1 on missing/unparseable files (tested with nonexistent.md which printed file not found error and exited 1). Does it fail on the source repo's own default branch? When run against valid markdown tables in the repository (or dedicated matrix files), it exits 0.
- does the output match what the documentation claims? Yes, validates table dimensions, checks for empty cells, calculates row/column variability metrics, provides pattern suggestions, and exits with documented codes.

## Defects — required
- doc-drift · "python3 scripts/validate-cva-matrix.py [file]" — .claude/skills/cva-analysis/SKILL.md:376 · Checklist cites script without the ".claude/skills/cva-analysis/" prefix used at lines 272 and 427, failing if executed from repository root.

## Observations
- Grounded in Multi-Paradigm Design: Translates James O. Coplien's 1999 methodology (*Multi-Paradigm Design for C++*) into an actionable LLM prompt workflow for domain abstraction discovery.
- 2D matrix duality: Explicitly maps the geometric structure of the matrix to Gang of Four design patterns: matrix rows (commonalities) map to Strategy algorithms, matrix columns (variabilities) map to Abstract Factory product families, and dual-axis variation maps to co-equal first-class abstractions rather than relegated extension points.
- Multi-agent workflow routing: Seamlessly connects to downstream agents in the rjm ecosystem: `decision-critic` for adversarial stress-testing and inversion thinking, `architect` for formal ADR generation from stubs, and `independent-thinker` for questioning borderline abstractions.
- Guardrails against over-engineering: Codifies anti-patterns (Pattern-First Design, Forcing Abstractions, Analysis Paralysis) and enforces YAGNI thresholds (explicitly refusing abstraction when only one use case exists).

## Context cost
- 19045 bytes (~4761 tokens) for `SKILL.md`.
- Total bundled skill context across 6 references and 1 script is 100646 bytes (~25161 tokens).
