---
package: rjm
path: scripts/validation/pre_pr.py
type: script
bytes: 13180
unit: inv-rjm-301
in_scope_via: .claude/skills/ai-agents-change-control/SKILL.md
aliases: []
memo_inputs:
  - {path: scripts/validation/pre_pr.py, sha256: 9b1ca1a51122132e1184bb4a0a890c0f2c1896156f159aeb5436f12c6a89db88}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# scripts/validation/pre_pr.py

## Purpose — required, verbatim
> "Unified shift-left validation runner for pre-PR checks." — scripts/validation/pre_pr.py:2

## Design intent — required
Serves as the canonical shift-left pre-PR test runner and CLI harness for the `rjm` repository. Born from the PR #908 incident (where an unscoped markdown lint pass touched 53 memory files and generated a 95-file, 5,060-line runaway PR), `pre_pr.py` aggregates roughly 50 validation gates into an ordered local test suite executed before pushing branches or opening PRs. By executing checks in an optimized, feedback-cost order (cheap Python syntax checks and count ratchets before slower full-tree sweeps and subprocess gates), it catches syntax errors, broken links, stale mirrors, schema violations, and unanchored hooks locally rather than incurring expensive multi-minute CI cycles or human reviewer roundtrips. It implements the ADR-035 exit code contract (0=pass, 1=logic failure, 2=config error), tracks execution timing and status via `ValidationState` and `ValidationRecord`, provides fast execution options (`--quick`, `--skip-tests`, `--markdown-lint-only`), resets process-level base-ref caching across invocations, and serves as a backward-compatibility facade re-exporting individual validators for tests and external scripts.

## Phase — required
rjm:ship

## Inputs — required
- CLI options parsed via `build_parser()`:
  - `--quick` (flag: skip slow validations like path normalization, planning, drift — scripts/validation/pre_pr.py:259-263)
  - `--skip-tests` (flag: skip Pester unit tests — scripts/validation/pre_pr.py:265-269)
  - `--verbose` (flag: run with verbose output — scripts/validation/pre_pr.py:271-274)
  - `--markdown-lint-only` (flag: run only markdownlint against positional markdown files — scripts/validation/pre_pr.py:276-279)
  - `markdown_files` (positional paths: target markdown files for scoped linting — scripts/validation/pre_pr.py:281-284)
- Environment variables:
  - `QUICK_MODE` — scripts/validation/pre_pr.py:261 (sets default for `--quick`)
  - `SKIP_TESTS` — scripts/validation/pre_pr.py:267 (sets default for `--skip-tests`)
  - `SKIP_AUTOFIX` — scripts/validation/pre_pr.py:369 (detects execution as a lefthook job to suppress misleading standalone success guidance)
- Repository tree state:
  - Validated by individual checkers executed via `run_all_validations` from `pre_pr_sequence.py`.

## Outputs — required
- Standard output reports:
  - Header: `=== Pre-PR Validation Runner ===`, `Repository: {repo_root}`, `Mode: {mode}`, `Started: {now}` (scripts/validation/pre_pr.py:317-321).
  - Validation progress lines: `=== {name} ===`, `[RUNNING] Starting validation...`, `[{status_label}] {name} completed in {duration:.2f}s` (scripts/validation/pre_pr.py:198, 199, 239).
  - Skip notices: `[SKIP] {name} (skipped due to --quick flag)` (scripts/validation/pre_pr.py:192).
  - Run summary: `=== Validation Summary ===`, `Duration: ...`, `Total Validations: ...`, `Passed: ...`, `Failed: ...`, `Skipped: ...` (scripts/validation/pre_pr.py:336-342).
  - Detailed results listing: `=== Detailed Results ===`, `[{record.status}] {record.name}` (scripts/validation/pre_pr.py:344-348).
  - Result status: `RESULT: All validations passed` (scripts/validation/pre_pr.py:362) or `RESULT: {state.failed} validation(s) failed` with fix suggestions (scripts/validation/pre_pr.py:353-360).
  - Guidance message: `Pre-PR checks passed. Verify the push landed before opening a PR:` (scripts/validation/pre_pr.py:372-375) or lefthook notice (scripts/validation/pre_pr.py:370).
- Standard error:
  - `[FAIL] Invalid repository root: {repo_root}` (scripts/validation/pre_pr.py:296).
  - Argument parser error when markdown files passed without `--markdown-lint-only` (scripts/validation/pre_pr.py:310).
- Process exit codes (ADR-035):
  - `0`: success / all validations passed (scripts/validation/pre_pr.py:23, 308, 377).
  - `1`: logic error / one or more validations failed (scripts/validation/pre_pr.py:24, 308, 360).
  - `2`: config error / invalid repository root (scripts/validation/pre_pr.py:25, 297).

## Invokes — required
- script active_plan_closeout — scripts/validation/pre_pr.py:58
- script check_adr_lifecycle — scripts/validation/pre_pr.py:72
- script check_adr_links — scripts/validation/pre_pr.py:73
- script check_citation_freshness — scripts/validation/pre_pr.py:74
- script check_doc_interpreter_portability — scripts/validation/pre_pr.py:75
- script check_nested_tests — scripts/validation/pre_pr.py:78
- script check_subprocess_encoding — scripts/validation/pre_pr.py:79
- script check_test_tree_writes — scripts/validation/pre_pr.py:80
- script check_unreachable_code — scripts/validation/pre_pr.py:81
- script checks_common — scripts/validation/pre_pr.py:82
- script checks_coverage — scripts/validation/pre_pr.py:93
- script checks_dash — scripts/validation/pre_pr.py:96
- script checks_plugin — scripts/validation/pre_pr.py:103
- script checks_spec — scripts/validation/pre_pr.py:114
- script checks_tooling — scripts/validation/pre_pr.py:127
- script pre_pr_sequence — scripts/validation/pre_pr.py:140
- script stale_script_refs — scripts/validation/pre_pr.py:141
- script validate_argument_hint — scripts/validation/pre_pr.py:142
- script validate_design_review — scripts/validation/pre_pr.py:152
- script validate_no_orphaned_build_deferrals — scripts/validation/pre_pr.py:154
- script validate_python_syntax — scripts/validation/pre_pr.py:157
- script yaml_utils — scripts/validation/pre_pr.py:158

## Invoked by — required
- skill ai-agents-change-control — .claude/skills/ai-agents-change-control/SKILL.md:75
- skill ai-agents-validation-and-qa — .claude/skills/ai-agents-validation-and-qa/SKILL.md:147
- doc ci-scripts — .claude/rules/ci-scripts.md:33

## Concepts named — required, verbatim
- `shift-left validation` — scripts/validation/pre_pr.py:2 — defined here
- `Session End` — scripts/validation/pre_pr.py:8 — used here
- `Pester Tests` — scripts/validation/pre_pr.py:9 — used here
- `Markdown Lint` — scripts/validation/pre_pr.py:10 — used here
- `Workflow YAML` — scripts/validation/pre_pr.py:11 — used here
- `Design Review Frontmatter` — scripts/validation/pre_pr.py:12 — used here
- `Build Command Exit Gates` — scripts/validation/pre_pr.py:13 — used here
- `Canonical Citation Check` — scripts/validation/pre_pr.py:14 — used here
- `Spec Contradiction Check` — scripts/validation/pre_pr.py:15 — used here
- `YAML Style` — scripts/validation/pre_pr.py:16 — used here
- `Path Normalization` — scripts/validation/pre_pr.py:17 — used here
- `Traceability` — scripts/validation/pre_pr.py:18 — used here
- `Planning Artifacts` — scripts/validation/pre_pr.py:19 — used here
- `Agent Drift` — scripts/validation/pre_pr.py:20 — used here
- `ADR-035` — scripts/validation/pre_pr.py:22 — used here
- `ValidationRecord` — scripts/validation/pre_pr.py:162 — defined here
- `ValidationState` — scripts/validation/pre_pr.py:172 — defined here
- `run_validation` — scripts/validation/pre_pr.py:182 — defined here
- `build_parser` — scripts/validation/pre_pr.py:253 — defined here
- `main` — scripts/validation/pre_pr.py:288 — defined here

## Structure
- `class ValidationRecord:` — scripts/validation/pre_pr.py:162
- `class ValidationState:` — scripts/validation/pre_pr.py:172
- `def run_validation(` — scripts/validation/pre_pr.py:182
- `def build_parser() -> argparse.ArgumentParser:` — scripts/validation/pre_pr.py:253
- `def main(argv: list[str] | None = None) -> int:` — scripts/validation/pre_pr.py:288
- `if __name__ == "__main__":` — scripts/validation/pre_pr.py:380

## Scripts — required if type is script or the skill ships scripts
- **path:** `scripts/validation/pre_pr.py`
- **language:** Python 3
- **lines:** 382
- **documented invocation:**
  - `uv run python scripts/validation/pre_pr.py` — .claude/skills/ai-agents-change-control/SKILL.md:75
  - `uv run python scripts/validation/pre_pr.py` — .claude/rules/ci-scripts.md:33
  - `#!/usr/bin/env python3` — scripts/validation/pre_pr.py:1
- **executed:** yes
- **actual command run:** `uv run --directory sources/rjm python scripts/validation/pre_pr.py --quick`
- **abridged stdout:** `=== Pre-PR Validation Runner ===\nRepository: .../sources/rjm\nMode: Quick (fast checks only)\n...\n=== Validation Summary ===\nDuration: 113.86s\nTotal Validations: 60\nPassed: 54\nFailed: 2\nSkipped: 4\n...\nRESULT: 2 validation(s) failed`
- **actual exit code:** 1
- **documented exit codes vs. actual exit paths:**
  - documented:
    - "0 - Success (all validations passed)" — scripts/validation/pre_pr.py:23
    - "1 - Logic error (one or more validations failed)" — scripts/validation/pre_pr.py:24
    - "2 - Config error (environment or configuration issue)" — scripts/validation/pre_pr.py:25
  - actual exit paths:
    - exit code 0: `return 0 if validate_markdown_lint(repo_root, args.markdown_files) else 1` at line 308; `return 0` on clean validation sweep at line 377
    - exit code 1: `return 0 if validate_markdown_lint(repo_root, args.markdown_files) else 1` at line 308; `return 1` when `state.failed > 0` at line 360
    - exit code 2: `return 2` on invalid repository root at line 297
    - process exit via `raise SystemExit(main())` at line 381
- **for validators/gates:**
  - Can it exit non-zero: yes — exits 1 when validations fail, 2 on invalid configuration/repository root
  - Verified on repository default branch: `pre_pr.py --help` and `pre_pr.py --markdown-lint-only README.md` exit 0; full validation sweep correctly detects unconfigured hook environment (exits 1 on missing local lefthook hooks)
- **does the output match what the documentation claims:** yes — outputs structured summaries and detailed gate listings adhering to ADR-035 exit codes

## Defects — required
- `doc-drift` · scripts/validation/pre_pr.py:7-20 · The module docstring documents a 12-item validation sequence (`1. Session End ... 12. Agent Drift`), but the actual sequence implemented via `pre_pr_sequence._SEQUENCE` executes over 50 validations starting with `Python Syntax (compile gate)` and `Count Ratchets`.
- `doc-drift` · scripts/validation/pre_pr.py:34-39 · Incomplete re-export facade: The docstring explicitly notes that 15 validators imported by `pre_pr_sequence` have no re-export in `pre_pr.py` (issue #5272), causing `from scripts.validation.pre_pr import X` to fail for them.

## Observations
- Incident-derived origin: Birthed directly by the PR #908 comprehensive retrospective (`2026-01-15-pr-908-comprehensive-retrospective.md`), where unscoped formatting caused a massive 95-file diff explosion.
- Layered gate ladder: Represents Rung 1 of the change-control gate ladder, catching issues at lowest feedback cost before CI (Rung 2), PR review (Rung 3), and documentation.
- Cache scoping: Calls `_reset_gh_base_cache()` at entry point to prevent stale branch and PR base ref answers from persisting across repetitive in-process executions.

## Context cost
13180 bytes source file, 382 lines, plus 23593 bytes (`pre_pr_sequence.py`) when invoked = 36773 bytes, ~9200 tokens.
