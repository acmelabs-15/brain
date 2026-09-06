---
package: rjm
path: .claude/skills/code-qualities-assessment/scripts/assess.py
type: script
bytes: 61607
unit: inv-rjm-101
in_scope_via: .agents/architecture/README.md
aliases: []
memo_inputs:
  - {path: .claude/skills/code-qualities-assessment/scripts/assess.py, sha256: 9e103c80873a8d3846198c6929818430e317822507f1b47ba0eec238264abaeb}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# .claude/skills/code-qualities-assessment/scripts/assess.py

## Purpose — required, verbatim
> "Assesses code maintainability using 5 foundational qualities:" — .claude/skills/code-qualities-assessment/scripts/assess.py:5

## Design intent — required
`assess.py` provides an automated maintainability gate and scoring orchestrator across five foundational software design qualities (cohesion, coupling, encapsulation, testability, non-redundancy) evaluated on local source files. Without it, architectural quality evaluation would remain subjective, inconsistent, and reliant on human manual review or uncalibrated LLM judgment, making it difficult to enforce maintainability baselines in automated development workflows and CI/CD pipelines. Furthermore, the orchestrator prevents blocking developers on pre-existing legacy debt by introducing a git-aware dual-mode gating system: regression mode computes per-quality score deltas between the head commit and the merge base of the pull request base revision (via `git diff`, `git ls-tree`, and `git show`), failing only when a modified file suffers an active quality regression or loses measurable evidence, while absolute mode gates new files against configurable thresholds defined in `.qualityrc.json`.

## Phase — required
cross-phase (invoked across rjm:build, rjm:test, and rjm:review)

## Inputs — required
- CLI options and arguments:
  - `--target`: "File, directory, or glob pattern to assess" — .claude/skills/code-qualities-assessment/scripts/assess.py:376
  - `--context`: "Code context (affects thresholds)" — .claude/skills/code-qualities-assessment/scripts/assess.py:382
  - `--changed-only`: "Only assess files changed from --base, or uncommitted files without --base" — .claude/skills/code-qualities-assessment/scripts/assess.py:387
  - `--base`: "Base revision for --changed-only, such as origin/main" — .claude/skills/code-qualities-assessment/scripts/assess.py:389
  - `--format`: "Output format" — .claude/skills/code-qualities-assessment/scripts/assess.py:411
  - `--config`: "Path to configuration file" — .claude/skills/code-qualities-assessment/scripts/assess.py:413
  - `--output`: "Output file path (default: stdout)" — .claude/skills/code-qualities-assessment/scripts/assess.py:414
  - `--use-serena`: "Use Serena for symbol extraction" — .claude/skills/code-qualities-assessment/scripts/assess.py:419
- File inputs:
  - Source files matching `--target` in supported languages (.py, .ts, .tsx, .js, .jsx, .mjs, .cjs, .cs, .java, .go) — .claude/skills/code-qualities-assessment/scripts/assess.py:38-48, 1324
  - Configuration file `.qualityrc.json` defining thresholds, context overrides, and ignore patterns — .claude/skills/code-qualities-assessment/scripts/assess.py:445, 451-460
- Git repository state inspected via subprocess calls (`git diff`, `git ls-tree`, `git rev-parse`, `git merge-base`, `git show`) — .claude/skills/code-qualities-assessment/scripts/assess.py:519, 631, 705, 730, 764, 775, 794

## Outputs — required
- Formatted reports rendered to stdout or `--output` file (.claude/skills/code-qualities-assessment/scripts/assess.py:1625, 1630):
  - Markdown report with Summary statistics, per-file assessments, quality score breakdowns, and regression comparison table (.claude/skills/code-qualities-assessment/scripts/assess.py:1364-1410, 1417-1445)
  - JSON report with `files`, `gate_mode`, `comparisons`, and `summary` objects (.claude/skills/code-qualities-assessment/scripts/assess.py:1454-1471)
  - HTML report format placeholder string returning "HTML format not yet implemented" — .claude/skills/code-qualities-assessment/scripts/assess.py:1619
- Diagnostic failure messages emitted to `sys.stderr` for quality regressions, evidence loss, and threshold failures (.claude/skills/code-qualities-assessment/scripts/assess.py:1054-1066, 1502-1565)
- Process exit codes (.claude/skills/code-qualities-assessment/scripts/assess.py:18-22, 1730): 0 (pass), 1 (script error), 10 (regression or evidence loss), 11 (threshold failure or unscored supported source)

## Invokes — required
none

## Invoked by — required
- command build — .claude/commands/build.md:67
- skill code-qualities-assessment — .claude/commands/test.md:43
- skill code-qualities-assessment — .claude/skills/review/SKILL.md:99
- skill code-qualities-assessment — .claude/skills/code-qualities-assessment/SKILL.md:239
- skill code-qualities-assessment — .claude/skills/code-qualities-assessment/README.md:71

## Concepts named — required, verbatim
- `Cohesion` — .claude/skills/code-qualities-assessment/scripts/assess.py:6 — used here
- `Coupling` — .claude/skills/code-qualities-assessment/scripts/assess.py:7 — used here
- `Encapsulation` — .claude/skills/code-qualities-assessment/scripts/assess.py:8 — used here
- `Testability` — .claude/skills/code-qualities-assessment/scripts/assess.py:9 — used here
- `Non-Redundancy` — .claude/skills/code-qualities-assessment/scripts/assess.py:10 — used here
- `Absolute mode` — .claude/skills/code-qualities-assessment/scripts/assess.py:12 — used here
- `Regression mode` — .claude/skills/code-qualities-assessment/scripts/assess.py:13 — used here
- `Gate passed` — .claude/skills/code-qualities-assessment/scripts/assess.py:18 — defined here
- `inherited debt` — .claude/skills/code-qualities-assessment/scripts/assess.py:1043 — used here
- `evidence loss` — .claude/skills/code-qualities-assessment/scripts/assess.py:1063 — defined here
- `authored` — .claude/skills/code-qualities-assessment/scripts/assess.py:107 — defined here
- `test` — .claude/skills/code-qualities-assessment/scripts/assess.py:107 — defined here
- `generated` — .claude/skills/code-qualities-assessment/scripts/assess.py:107 — defined here
- `production` — .claude/skills/code-qualities-assessment/scripts/assess.py:380 — defined here
- `auto` — .claude/skills/code-qualities-assessment/scripts/assess.py:392 — defined here
- `QualityScore` — .claude/skills/code-qualities-assessment/scripts/assess.py:316 — defined here
- `FileAssessment` — .claude/skills/code-qualities-assessment/scripts/assess.py:331 — defined here
- `ChangedFile` — .claude/skills/code-qualities-assessment/scripts/assess.py:464 — defined here
- `QualityDelta` — .claude/skills/code-qualities-assessment/scripts/assess.py:829 — defined here
- `FileComparison` — .claude/skills/code-qualities-assessment/scripts/assess.py:847 — defined here
- `compared` — .claude/skills/code-qualities-assessment/scripts/assess.py:833 — defined here
- `newly_scored` — .claude/skills/code-qualities-assessment/scripts/assess.py:834 — defined here
- `evidence_lost` — .claude/skills/code-qualities-assessment/scripts/assess.py:835 — defined here
- `not_scored` — .claude/skills/code-qualities-assessment/scripts/assess.py:836 — defined here
- `new_file` — .claude/skills/code-qualities-assessment/scripts/assess.py:985 — defined here
- `base_unscored` — .claude/skills/code-qualities-assessment/scripts/assess.py:1008 — defined here
- `LCOM` — .claude/skills/code-qualities-assessment/scripts/assess.py:1085 — used here
- `Serena` — .claude/skills/code-qualities-assessment/scripts/assess.py:419 — used here
- `thresholds` — .claude/skills/code-qualities-assessment/scripts/assess.py:451 — used here
- `.qualityrc.json` — .claude/skills/code-qualities-assessment/scripts/assess.py:413 — used here
- `CWE-88` — .claude/skills/code-qualities-assessment/scripts/assess.py:689 — used here

## Structure
none (python script; top-level functions and definitions: `_LANGUAGE_BY_SUFFIX`, `_DEFAULT_REGRESSION_TOLERANCE`, `_LINE_COMMENT_PREFIXES`, `_GENERATED_PATH_SEGMENTS`, `_GENERATED_MARKERS`, `_GENERATED_MARKER_HEADER_LINES`, `_repo_relative_parts`, `classify_file_category`, `_IMPORT_PATTERNS`, `_GENERIC_IMPORT_PATTERN`, `_DEFINITION_PATTERNS`, `detect_language`, `_count_python_global_state`, `_count_web_global_state`, `_count_go_global_state`, `_immutable_static`, `_count_csharp_static_state`, `_count_java_static_state`, `_GLOBAL_STATE_COUNTERS`, `_count_python_public_fields`, `_count_public_fields_by_modifier`, `_PUBLIC_FIELD_COUNTERS`, `QualityScore`, `FileAssessment`, `_non_negative_finite_float`, `parse_args`, `resolve_gate_mode`, `load_config`, `ChangedFile`, `_parse_changed_files`, `get_changed_files`, `get_files_to_assess`, `_resolve_in_workspace`, `_glob_target_matches`, `_target_contains`, `_target_exists_at_revision`, `_match_path_glob`, `_target_is_known`, `_reject_option_like_revision`, `resolve_revision`, `resolve_comparison_base`, `get_file_at_revision`, `_get_base_assessments`, `_QUALITY_FIELDS`, `QualityDelta`, `FileComparison`, `_delta_for`, `compare_assessments`, `check_regressions`, `_has_scored_quality`, `build_comparisons`, `_assess_base_bytes`, `check_regression`, `_score_cohesion`, `_score_coupling`, `_score_encapsulation`, `_score_testability`, `_score_non_redundancy`, `_unscored_generated_assessment`, `_unreadable_assessment`, `assess_content`, `assess_file_content`, `assess_file`, `_average_scored`, `_format_average`, `_format_quality_score`, `_threshold_min`, `_score_below_threshold`, `generate_markdown_report`, `generate_regression_section`, `generate_json_report`, `check_thresholds`, `_resolve_target_path`, `_assess_files`, `_build_regression_inputs`, `_render_report`, `_write_report`, `_gate_result`, `main`)

## Scripts — required if type is script or the skill ships scripts
- path: `.claude/skills/code-qualities-assessment/scripts/assess.py`, language: Python 3, lines: 1731
- documented invocation:
  - "python3 scripts/assess.py --target src/services/auth.py" — .claude/skills/code-qualities-assessment/SKILL.md:26
  - "python3 scripts/assess.py --target . --changed-only --base origin/main --format json" — .claude/skills/code-qualities-assessment/SKILL.md:29
  - "python3 scripts/assess.py --target src/services/ --format html --output quality-report.html" — .claude/skills/code-qualities-assessment/SKILL.md:32
  - "python3 scripts/assess.py --target <path> --format markdown" — .claude/skills/code-qualities-assessment/SKILL.md:41
  - "python3 scripts/assess.py --target <path> [options]" — .claude/skills/code-qualities-assessment/SKILL.md:113
  - "python3 .claude/skills/code-qualities-assessment/scripts/assess.py --target \"$TARGET_PATH\"" — .claude/skills/code-qualities-assessment/SKILL.md:239
- **executed:** yes
- actual command run: `python3 .claude/skills/code-qualities-assessment/scripts/assess.py --target .claude/skills/code-qualities-assessment/scripts/assess.py` (executed from `sources/rjm`)
  abridged stdout:
  ```
  ❌ /Users/peterkloss/Dev/ACMElabs/brain-v2/sources/rjm/.claude/skills/code-qualities-assessment/scripts/assess.py: Cohesion 1.0 < 7
  # Code Quality Assessment Report

  ## Summary

  **Files Assessed**: 1

  **Average Cohesion**: 1.0/10
  **Average Coupling**: 1.0/10
  **Average Encapsulation**: 10.0/10
  **Average Testability**: 10.0/10
  **Average Non-Redundancy**: 7.3/10
  ```
  **actual exit code**: 11
- documented exit codes vs. actual exit paths:
  Documented in script docstring:
  - "0: Gate passed" — .claude/skills/code-qualities-assessment/scripts/assess.py:18
  - "10: Regression mode: a comparable quality regressed, or scored evidence was lost" — .claude/skills/code-qualities-assessment/scripts/assess.py:19
  - "11: A file is below configured thresholds (absolute mode, or a new file in" — .claude/skills/code-qualities-assessment/scripts/assess.py:20
  - "1: Script error" — .claude/skills/code-qualities-assessment/scripts/assess.py:22
  Actual exit paths in code:
  - `sys.exit(main())` — .claude/skills/code-qualities-assessment/scripts/assess.py:1730
  - `return 0` (.claude/skills/code-qualities-assessment/scripts/assess.py:1567, 1700) when all thresholds met or no files to assess in regression mode with known target.
  - `return 1` (.claude/skills/code-qualities-assessment/scripts/assess.py:1683, 1686, 1697, 1702, 1715) on argument parsing, workspace escaping, git subprocess failure, unknown target, or empty file set.
  - `return 10` (.claude/skills/code-qualities-assessment/scripts/assess.py:942, 1078) in regression mode when a comparable quality drops below tolerance or evidence is lost on an authored file.
  - `return 11` (.claude/skills/code-qualities-assessment/scripts/assess.py:1079, 1506, 1517, 1532, 1543, 1554, 1564) in absolute mode (or for new files in regression mode) when any scored quality falls below configured minimums, or when a supported authored file cannot be scored.
- for validators/gates: can it exit non-zero? yes, exits 1 on errors, 10 on regressions, and 11 on threshold failures. Does it fail on the source repo's own default branch? Yes, running `assess.py` against itself fails with exit code 11 because its Cohesion score (1.0) is below the default threshold of 7.
- does the output match what the documentation claims? Partially; markdown and JSON reports match documented structure, but HTML format is an unimplemented stub returning `"HTML format not yet implemented"`, and Serena integration (`--use-serena`) is accepted by CLI but unused during execution.

## Defects — required
- `doc-drift` · .claude/skills/code-qualities-assessment/scripts/assess.py:1619 · SKILL.md documents `--format html` and an interactive dashboard report, but `assess.py` only returns a static string `"HTML format not yet implemented"`.
- `doc-drift` · .claude/skills/code-qualities-assessment/scripts/assess.py:1312 · SKILL.md documents Serena integration for symbol parsing, but `assess_file` ignores the `use_serena` parameter and uses line-based regex heuristics instead.
- `doc-drift` · .claude/skills/code-qualities-assessment/scripts/assess.py:1308 · `assess_file_content` deletes the `context` parameter (`del context`), leaving the context parameter unused during scoring.
- `missing-path` · .claude/skills/code-qualities-assessment/SKILL.md:476 · SKILL.md documents a modular architecture of "Privates (score_*.py): Focus on one quality each, report back", but no `score_*.py` files exist; all scorers are private functions inlined into `assess.py`.
- `always-failing-gate` · .claude/skills/code-qualities-assessment/scripts/assess.py:1517 · In default absolute mode, running `assess.py` against itself exits 11 because its length (1458 LOC, 71 definitions) results in a Cohesion score of 1.0, failing the default threshold of 7.

## Observations
- Sophisticated git regression detection: uses `git merge-base` to find the fork point between HEAD and `--base` rather than comparing against the tip of `--base`, preventing inherited debt from failing a feature branch.
- Rename tracking: uses `git diff -M -z` to track file renames so renamed files are scored against their original base blobs rather than misclassified as new files.
- Heuristic scoring bounds: scores are computed from LOC, import statements, public fields, and unique lines rather than AST symbol graphs, as acknowledged in code comments ("size+definition approximation, not LCOM").
- Path traversal prevention: enforces workspace containment using `_resolve_in_workspace` to reject candidate targets escaping the repository boundary.

## Context cost
61607 bytes (~15400 tokens). Standalone Python script with standard library dependencies.
