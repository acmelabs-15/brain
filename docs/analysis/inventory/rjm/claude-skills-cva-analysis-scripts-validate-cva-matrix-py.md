---
package: rjm
path: .claude/skills/cva-analysis/scripts/validate-cva-matrix.py
type: script
bytes: 10841
unit: inv-rjm-111
in_scope_via: .claude/skills/cva-analysis/SKILL.md
aliases: []
memo_inputs:
  - {path: .claude/skills/cva-analysis/scripts/validate-cva-matrix.py, sha256: 023cdf1b41f86382b2dc144e531ab2b509ac05c8d795cc25dfcc95e6753588dc}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# .claude/skills/cva-analysis/scripts/validate-cva-matrix.py

## Purpose — required, verbatim
> "Checks CVA matrix completeness and suggests patterns based on structure." — .claude/skills/cva-analysis/scripts/validate-cva-matrix.py:5

## Design intent — required
Standalone Python 3 CLI validation utility for Commonality Variability Analysis matrices. Parses Markdown tables to verify structural completeness (enforcing a minimum 2×2 grid of ≥2 commonalities as rows and ≥2 variabilities as columns, confirming that no cells are empty or filled with placeholder tokens like '-', 'TBD', or 'TODO', and ensuring dimension uniformity across rows). Calculates quantitative row and column variability metrics using unique value ratios across cells and applies threshold heuristics (high ≥0.6, medium ≥0.3) to recommend GoF design patterns (Strategy, Abstract Factory, combination Strategy + Abstract Factory for multidimensional variability, or YAGNI / no abstraction when variability is low). Includes path traversal prevention (CWE-22) and outputs structured reports with clear next-step routing to `/decision-critic` and the `architect` agent. Without it, abstraction discovery would rely on manual, error-prone matrix inspection, risking incomplete analysis, unvalidated pattern selection, or missed multidimensional complexity.

## Phase — required
rjm:spec

## Inputs — required
- matrix_file: "Path to CVA matrix markdown file" — .claude/skills/cva-analysis/scripts/validate-cva-matrix.py:241
- --verbose: "Verbose output" — .claude/skills/cva-analysis/scripts/validate-cva-matrix.py:242
- Markdown table content formatted with commonalities as rows and variabilities as columns:
  - "| Commonality | Var1 | Var2 | Var3 |" — .claude/skills/cva-analysis/scripts/validate-cva-matrix.py:88
  - "|-------------|------|------|------|" — .claude/skills/cva-analysis/scripts/validate-cva-matrix.py:89
  - "| Common1 | A1 | B1 | C1 |" — .claude/skills/cva-analysis/scripts/validate-cva-matrix.py:90
  - "| Common2 | A2 | B2 | C2 |" — .claude/skills/cva-analysis/scripts/validate-cva-matrix.py:91

## Outputs — required
- Formatted stdout report displaying:
  - "✓ VALIDATION PASSED" — .claude/skills/cva-analysis/scripts/validate-cva-matrix.py:297
  - Matrix dimensions and pattern recommendations (Strategy, Abstract Factory, Combination, or YAGNI warnings) (.claude/skills/cva-analysis/scripts/validate-cva-matrix.py:298-304)
  - Next steps routing:
    - "  1. Review pattern recommendations with team" — .claude/skills/cva-analysis/scripts/validate-cva-matrix.py:307
    - "  2. Route to decision-critic:" — .claude/skills/cva-analysis/scripts/validate-cva-matrix.py:308
    - "  3. Create ADR with architect agent" — .claude/skills/cva-analysis/scripts/validate-cva-matrix.py:309
    - "  4. Document reassessment triggers" — .claude/skills/cva-analysis/scripts/validate-cva-matrix.py:310
- Formatted stderr error messages when validation fails:
  - "❌ VALIDATION FAILED" — .claude/skills/cva-analysis/scripts/validate-cva-matrix.py:290
- Process exit code: 0 (valid), 10 (validation failure), or 1 (error) (.claude/skills/cva-analysis/scripts/validate-cva-matrix.py:24-26, 257, 265, 268, 278, 294, 312)

## Invokes — required
none

## Invoked by — required
- skill cva-analysis — .claude/skills/cva-analysis/SKILL.md:272
- skill cva-analysis — .claude/skills/cva-analysis/SKILL.md:427
- reference references/SKILL_SPEC.md — .claude/skills/cva-analysis/references/SKILL_SPEC.md:482
- reference references/SKILL_SPEC.md — .claude/skills/cva-analysis/references/SKILL_SPEC.md:587

## Concepts named — required, verbatim
- `CVA Matrix Validation Script` — .claude/skills/cva-analysis/scripts/validate-cva-matrix.py:3 — defined here
- `ValidationResult` — .claude/skills/cva-analysis/scripts/validate-cva-matrix.py:23 — defined here
- `CVAMatrix` — .claude/skills/cva-analysis/scripts/validate-cva-matrix.py:30 — defined here
- `Commonality` — .claude/skills/cva-analysis/scripts/validate-cva-matrix.py:88 — used here
- `Strategy pattern` — .claude/skills/cva-analysis/scripts/validate-cva-matrix.py:174 — used here
- `Abstract Factory pattern` — .claude/skills/cva-analysis/scripts/validate-cva-matrix.py:175 — used here
- `YAGNI` — .claude/skills/cva-analysis/scripts/validate-cva-matrix.py:177 — used here
- `Strategy Pattern` — .claude/skills/cva-analysis/scripts/validate-cva-matrix.py:194 — used here
- `Abstract Factory Pattern` — .claude/skills/cva-analysis/scripts/validate-cva-matrix.py:205 — used here
- `COMBINATION PATTERNS` — .claude/skills/cva-analysis/scripts/validate-cva-matrix.py:211 — used here
- `Extension Points` — .claude/skills/cva-analysis/scripts/validate-cva-matrix.py:221 — used here
- `path traversal` — .claude/skills/cva-analysis/scripts/validate-cva-matrix.py:245 — used here
- `decision-critic` — .claude/skills/cva-analysis/scripts/validate-cva-matrix.py:308 — used here
- `architect` — .claude/skills/cva-analysis/scripts/validate-cva-matrix.py:309 — used here
- `ADR` — .claude/skills/cva-analysis/scripts/validate-cva-matrix.py:309 — used here
- `reassessment triggers` — .claude/skills/cva-analysis/scripts/validate-cva-matrix.py:310 — used here

## Structure
- class ValidationResult(Enum) — .claude/skills/cva-analysis/scripts/validate-cva-matrix.py:23
- class CVAMatrix — .claude/skills/cva-analysis/scripts/validate-cva-matrix.py:30
- def parse_markdown_table(content: str) -> CVAMatrix | None — .claude/skills/cva-analysis/scripts/validate-cva-matrix.py:83
- def validate_matrix(matrix: CVAMatrix) -> tuple[bool, list[str]] — .claude/skills/cva-analysis/scripts/validate-cva-matrix.py:132
- def suggest_patterns(matrix: CVAMatrix) -> list[str] — .claude/skills/cva-analysis/scripts/validate-cva-matrix.py:169
- def main() — .claude/skills/cva-analysis/scripts/validate-cva-matrix.py:237
- if __name__ == '__main__': — .claude/skills/cva-analysis/scripts/validate-cva-matrix.py:315

## Scripts — required if type is script or the skill ships scripts
- path: `.claude/skills/cva-analysis/scripts/validate-cva-matrix.py`, Python 3, 317 lines
- documented invocation:
  - "python3 validate-cva-matrix.py cva-matrix.md" — .claude/skills/cva-analysis/scripts/validate-cva-matrix.py:13
  - "python3 validate-cva-matrix.py cva-matrix.md --verbose" — .claude/skills/cva-analysis/scripts/validate-cva-matrix.py:14
- executed: yes
- actual commands run, stdout, actual exit codes:
  - `python3 sources/rjm/.claude/skills/cva-analysis/scripts/validate-cva-matrix.py sources/rjm/.claude/skills/cva-analysis/SKILL.md`
    - stdout:
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
    - exit code: 0
  - `python3 sources/rjm/.claude/skills/cva-analysis/scripts/validate-cva-matrix.py sources/rjm/.claude/skills/cva-analysis/references/matrix-building-examples.md`
    - stderr:
      ```
      ❌ VALIDATION FAILED

      Issues found:
        • Matrix has only 1 row(s). Need ≥2 commonalities for pattern discovery.
      ```
    - exit code: 10
  - `python3 sources/rjm/.claude/skills/cva-analysis/scripts/validate-cva-matrix.py nonexistent.md`
    - stderr:
      ```
      ❌ ERROR: File not found: /Users/peterkloss/Dev/ACMElabs/brain-v2/nonexistent.md
      ```
    - exit code: 1
- documented exit codes vs. actual exit paths:
  - Documented exit codes:
    - "0: Valid matrix, patterns suggested" — .claude/skills/cva-analysis/scripts/validate-cva-matrix.py:8
    - "10: Validation failure (missing rows/columns, empty cells)" — .claude/skills/cva-analysis/scripts/validate-cva-matrix.py:9
    - "1: Error (file not found, invalid format)" — .claude/skills/cva-analysis/scripts/validate-cva-matrix.py:10
  - Actual exit paths in code:
    - `return ValidationResult.ERROR.value` (1) at lines 257, 265, 268, 278
    - `return ValidationResult.VALIDATION_FAILURE.value` (10) at line 294
    - `return ValidationResult.VALID.value` (0) at line 312
    - Code exits via `sys.exit(main())` at line 316. Documented exit codes match actual exit paths exactly.
- for validators/gates: can it exit non-zero? does it fail on the source repo's own default branch?
  Yes, exits 10 on validation failure and 1 on missing file or parsing error. Running it on `references/matrix-building-examples.md` exits 10 because the first table in that file is a 1-row preliminary illustration, demonstrating that the script naively parses only the first table in the file.
- does the output match what the documentation claims?
  Yes, prints validation status, matrix dimensions, pattern recommendations, and next steps matching the documentation in `SKILL.md` and docstrings.

## Defects — required
- `script-bug`: .claude/skills/cva-analysis/scripts/validate-cva-matrix.py:96-105 `parse_markdown_table` parses only the first Markdown table encountered in the file and stops scanning at the first non-table line. If an input file has overview tables (e.g. `SKILL.md`'s Quick Reference table or `matrix-building-examples.md`'s 1-row step illustration), the validator checks the wrong table or fails validation.
- `doc-drift`: .claude/skills/cva-analysis/scripts/validate-cva-matrix.py:13 documents execution as `python3 validate-cva-matrix.py cva-matrix.md` assuming execution from the script's local directory, whereas `SKILL.md:272` documents `python3 .claude/skills/cva-analysis/scripts/validate-cva-matrix.py cva-matrix.md` from the repo root; due to the CWE-22 check at line 248 (`allowed_base = os.path.abspath(". ")`), executing from a different directory requires the matrix file path to start with the current working directory.

## Observations
- Implements explicit defense against CWE-22 path traversal at lines 245-254 by comparing `os.path.abspath(args.matrix_file)` to `os.path.abspath(".")`.
- Uses Python 3.10+ type annotations (`CVAMatrix | None`, `list[str]`) and `@dataclass`.
- Heuristics in `suggest_patterns` calculate quantitative row and column variability using the ratio of unique cell values to total cells, providing deterministic, testable pattern suggestions rather than relying on LLM intuition alone.

## Context cost
10,841 bytes. Approximately 2,700 tokens.
