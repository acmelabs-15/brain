---
package: rjm
path: .claude/skills/chaos-experiment/scripts/validate_experiment.py
type: script
bytes: 12417
unit: inv-rjm-98
in_scope_via: .claude/skills/review/references/reliability.md
aliases: []
memo_inputs:
  - {path: .claude/skills/chaos-experiment/scripts/validate_experiment.py, sha256: 1826ee03d52a3393c8c669330d46dd9e26ab6585330991d1da261645a145de53}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# .claude/skills/chaos-experiment/scripts/validate_experiment.py

## Purpose — required, verbatim
> "Validate a chaos experiment document for completeness." — .claude/skills/chaos-experiment/scripts/validate_experiment.py:3

## Design intent — required
Automated quality gate and validation tool for chaos experiment documents. Enforces structural completeness by checking for required sections (Metadata, System Under Test, Steady State Baseline, Hypothesis, Injection Plan, Rollback Procedure) and recommended sections, detects incomplete placeholders and TODO markers, evaluates hypothesis formatting (Given/When/Then/Because), verifies rollback commands, checks baseline metrics definitions, and calculates an objective completeness score (0-100).

## Phase — required
rjm:review

## Inputs — required
Command-line arguments:
- `path` (required): Path to the experiment markdown document
- `--strict`: Treat incomplete markers as errors
- `--json`: Output result as JSON
Document content:
- Markdown file containing experiment specification

## Outputs — required
- Standard output human-readable report or JSON object containing validation pass/fail status, completeness score (0-100), errors, and warnings
- Process exit code (0 on success, 10 on validation failure, 2 on argument failure)

## Invokes — required
- script hook_utilities.path_safety — .claude/skills/chaos-experiment/scripts/validate_experiment.py:40

## Invoked by — required
- script .claude/skills/chaos-experiment/SKILL.md:267

## Concepts named — required, verbatim
- `ValidationResult` — .claude/skills/chaos-experiment/scripts/validate_experiment.py:44 — defined here
- `REQUIRED_SECTIONS` — .claude/skills/chaos-experiment/scripts/validate_experiment.py:55 — defined here
- `RECOMMENDED_SECTIONS` — .claude/skills/chaos-experiment/scripts/validate_experiment.py:65 — defined here
- `INCOMPLETE_PATTERNS` — .claude/skills/chaos-experiment/scripts/validate_experiment.py:73 — defined here
- `load_document` — .claude/skills/chaos-experiment/scripts/validate_experiment.py:81 — defined here
- `check_section_presence` — .claude/skills/chaos-experiment/scripts/validate_experiment.py:93 — defined here
- `check_incomplete_markers` — .claude/skills/chaos-experiment/scripts/validate_experiment.py:110 — defined here
- `check_hypothesis_quality` — .claude/skills/chaos-experiment/scripts/validate_experiment.py:126 — defined here
- `check_rollback_procedure` — .claude/skills/chaos-experiment/scripts/validate_experiment.py:159 — defined here
- `check_metrics_defined` — .claude/skills/chaos-experiment/scripts/validate_experiment.py:187 — defined here
- `calculate_score` — .claude/skills/chaos-experiment/scripts/validate_experiment.py:215 — defined here
- `validate_experiment` — .claude/skills/chaos-experiment/scripts/validate_experiment.py:250 — defined here
- `main` — .claude/skills/chaos-experiment/scripts/validate_experiment.py:339 — defined here
- `validate_path_no_traversal` — .claude/skills/chaos-experiment/scripts/validate_experiment.py:40 — used here

## Structure
- class ValidationResult — .claude/skills/chaos-experiment/scripts/validate_experiment.py:44
- def load_document — .claude/skills/chaos-experiment/scripts/validate_experiment.py:81
- def check_section_presence — .claude/skills/chaos-experiment/scripts/validate_experiment.py:93
- def check_incomplete_markers — .claude/skills/chaos-experiment/scripts/validate_experiment.py:110
- def check_hypothesis_quality — .claude/skills/chaos-experiment/scripts/validate_experiment.py:126
- def check_rollback_procedure — .claude/skills/chaos-experiment/scripts/validate_experiment.py:159
- def check_metrics_defined — .claude/skills/chaos-experiment/scripts/validate_experiment.py:187
- def calculate_score — .claude/skills/chaos-experiment/scripts/validate_experiment.py:215
- def validate_experiment — .claude/skills/chaos-experiment/scripts/validate_experiment.py:250
- def main — .claude/skills/chaos-experiment/scripts/validate_experiment.py:339

## Scripts — required if type is script or the skill ships scripts
- path, language, lines: `.claude/skills/chaos-experiment/scripts/validate_experiment.py`, Python 3, 422 lines
- documented invocation: "python validate_experiment.py path/to/experiment.md" — .claude/skills/chaos-experiment/scripts/validate_experiment.py:6
- **executed:** yes
- actual command run: `python3 sources/rjm/.claude/skills/chaos-experiment/scripts/validate_experiment.py sources/rjm/.claude/skills/chaos-experiment/templates/experiment-template.md`
- abridged stdout: `PASS: Validation passed (score: 80/100)\n\nWarnings:\n  - Template placeholder found: '{{RECOVERY_TIME}}' (1 occurrence(s))\n...\nCompleteness Score: 80/100`
- **actual exit code:** 0 (and exit code 10 when executed with `--strict` on `experiment-template.md`)
- documented exit codes vs. actual exit paths in code:
  - Documented:
    - `0  - Validation passed` — .claude/skills/chaos-experiment/scripts/validate_experiment.py:11
    - `1  - General failure` — .claude/skills/chaos-experiment/scripts/validate_experiment.py:12
    - `2  - Invalid arguments` — .claude/skills/chaos-experiment/scripts/validate_experiment.py:13
    - `10 - Validation failure (missing required sections)` — .claude/skills/chaos-experiment/scripts/validate_experiment.py:14
  - Actual exit paths:
    - `return 0` — .claude/skills/chaos-experiment/scripts/validate_experiment.py:413
    - `return 10` — .claude/skills/chaos-experiment/scripts/validate_experiment.py:415
    - `return 1` — .claude/skills/chaos-experiment/scripts/validate_experiment.py:417 (dead code; unreachable because `result.errors` is populated whenever `result.success` is False, diverting to line 415)
    - Argparse exit 2 on invalid arguments via `parser.parse_args()` — .claude/skills/chaos-experiment/scripts/validate_experiment.py:374
- for validators/gates:
  - can it exit non-zero: yes, exits 10 on missing required sections or when `--strict` encounters incomplete markers; exits 2 on argument errors.
  - does it fail on the source repo's own default branch: on `experiment-template.md` without `--strict` it passes (exit 0, score 80/100); with `--strict` it fails (exit 10, score 80/100).
- does the output match what the documentation claims: yes, outputs pass/fail status, detailed error/warning breakdown, and completeness score.

## Defects — required
- `exit-code-mismatch` · .claude/skills/chaos-experiment/scripts/validate_experiment.py:417 · Documented exit code 1 ("General failure") is unreachable dead code because `elif result.errors: return 10` triggers for all validation and runtime errors.
- `exit-code-mismatch` · .claude/skills/chaos-experiment/scripts/validate_experiment.py:258 · Runtime file access failures (`FileNotFoundError`, `ValueError`, `PermissionError`) populate `errors`, causing the script to exit 10 (validation failure) rather than 1 (general failure).
- `doc-drift` · .claude/skills/chaos-experiment/scripts/validate_experiment.py:6 · Docstring cites `python validate_experiment.py ...` assuming execution from `scripts/`, whereas SKILL.md:267 documents `python scripts/validate_experiment.py path/to/experiment.md`.

## Observations
- Scoring model divides 100 points across: required sections (40 pts), recommended sections (20 pts), absence of incomplete markers (20 pts), and quality checks (20 pts: hypothesis 8 pts, rollback 6 pts, metrics 6 pts).
- Uses `hook_utilities.path_safety.validate_path_no_traversal` to prevent directory traversal vulnerabilities.

## Context cost
12417 bytes. Approximately 3100 tokens.
