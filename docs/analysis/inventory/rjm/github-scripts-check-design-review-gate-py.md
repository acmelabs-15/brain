---
package: rjm
path: .github/scripts/check_design_review_gate.py
type: script
bytes: 5247
unit: inv-rjm-182
in_scope_via: docs/workflow-commands.md
aliases: []
memo_inputs:
  - {path: .github/scripts/check_design_review_gate.py, sha256: f42c9b74de25301caed2e74b38deaacd36b3491b6d7a5e1708f56dc595d08579}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# .github/scripts/check_design_review_gate.py

## Purpose — required, verbatim
> "Check design review files for blocking verdicts that should prevent merge." — .github/scripts/check_design_review_gate.py:2

## Design intent — required
Automated architecture review gate script that enforces human/agent design review consensus before pull request merges. It inspects all `DESIGN-REVIEW-*.md` documents in `.agents/architecture/`, extracting verdict statuses from either YAML frontmatter or markdown header patterns (`**Verdict**: ...`, `**Status**: ...`). It blocks pull requests (exiting 1) if any review contains a blocking verdict (`NEEDS_CHANGES`, `FAIL`, `REJECTED`), while passing (exiting 0) for approvals or non-blocking statuses, and emits structured GitHub Actions step outputs (`gate_result`, `blocking_count`).

## Phase — required
cross-phase

## Inputs — required
- CLI argument `--base-dir`: "Repository root directory" — .github/scripts/check_design_review_gate.py:173
- Design review files in repository directory pattern `.agents/architecture/DESIGN-REVIEW-*.md` (.github/scripts/check_design_review_gate.py:118)

## Outputs — required
- Step outputs written via `write_output` (.github/scripts/check_design_review_gate.py:134-135, 147-148):
  - `gate_result` (`PASS` or `FAIL`)
  - `blocking_count` (count of blocking reviews)
- Console output:
  - "No design review files found. Gate passes." — .github/scripts/check_design_review_gate.py:133
  - "All design reviews pass. Gate approved." — .github/scripts/check_design_review_gate.py:158
  - "Resolve blocking reviews before merging." — .github/scripts/check_design_review_gate.py:155
- Exit codes: 0 (all pass / none found) or 1 (blocking verdicts found) (.github/scripts/check_design_review_gate.py:156, 159)

## Invokes — required
- script scripts.ai_review_common — .github/scripts/check_design_review_gate.py:28

## Invoked by — required
- workflow .github/workflows/synthesis-panel-gate.yml — .github/workflows/synthesis-panel-gate.yml:34
- agent src/claude/architect.md — src/claude/architect.md:488
- test tests/test_check_design_review_gate.py — tests/test_check_design_review_gate.py:23

## Concepts named — required, verbatim
- `design review` — .github/scripts/check_design_review_gate.py:2 — used here
- `ADR-035` — .github/scripts/check_design_review_gate.py:7 — used here
- `BLOCKING_VERDICTS` — .github/scripts/check_design_review_gate.py:31 — defined here
- `PASSING_VERDICTS` — .github/scripts/check_design_review_gate.py:38 — defined here
- `synthesis panel gate` — .github/scripts/check_design_review_gate.py:126 — used here

## Structure
none (python script; functions and classes: BLOCKING_VERDICTS, PASSING_VERDICTS, ReviewResult, parse_yaml_frontmatter, extract_verdict, check_review_file, find_design_reviews, run_gate, build_parser, main)

## Scripts — required if type is script or the skill ships scripts
- path: `.github/scripts/check_design_review_gate.py`, language: Python 3, lines: 186
- documented invocation:
  - "run: python3 .github/scripts/check_design_review_gate.py" — .github/workflows/synthesis-panel-gate.yml:34
- **executed:** yes
- actual command run: `python3 .github/scripts/check_design_review_gate.py`
- abridged stdout:
  ```
  Found 11 design review file(s).
    [OK] .agents/architecture/DESIGN-REVIEW-ADR-042-python-migration.md: "NEEDS_CHANGES"
    [OK] .agents/architecture/DESIGN-REVIEW-PR-1085-session-log-cwe-fixes.md: "APPROVED"
    [OK] .agents/architecture/DESIGN-REVIEW-context-optimizer-refactoring.md: "APPROVED"
    [OK] .agents/architecture/DESIGN-REVIEW-frontmatter-array-conversion.md: "APPROVED"
    [OK] .agents/architecture/DESIGN-REVIEW-install-script-parameter-validation.md: "APPROVED"
    [OK] .agents/architecture/DESIGN-REVIEW-session-validation-module-refactoring.md: "APPROVED"
    [OK] .agents/architecture/DESIGN-REVIEW-skill-pattern-loader.md: "APPROVED"
    [OK] .agents/architecture/DESIGN-REVIEW-skill-reflect.md: "NEEDS_CHANGES"
    [OK] .agents/architecture/DESIGN-REVIEW-template.md: APPROVED              # APPROVED | NEEDS_CHANGES | BLOCKED
    [OK] .agents/architecture/DESIGN-REVIEW-traceability-graph.md: "APPROVED"
    [OK] .agents/architecture/DESIGN-REVIEW-vscode-copilot-parity-plan.md: "NEEDS_CHANGES"

  All design reviews pass. Gate approved.
  ```
- **actual exit code**: 0
- documented exit codes vs. actual exit paths:
  Documented in docstring:
  - "0 - All reviews pass (no blocking verdicts)" — .github/scripts/check_design_review_gate.py:8
  - "1 - Blocking verdicts found" — .github/scripts/check_design_review_gate.py:9
  Actual exit paths in code:
  - `sys.exit(main())` — .github/scripts/check_design_review_gate.py:185
  - `return 0` (.github/scripts/check_design_review_gate.py:136) when no design review files found
  - `return 1` (.github/scripts/check_design_review_gate.py:156) when blocking reviews found
  - `return 0` (.github/scripts/check_design_review_gate.py:159) when all reviews pass
- for validators/gates: can it exit non-zero? Yes, returns 1 when blocking reviews are detected. Does it fail on source repo's default branch? No, returns 0 because quoted frontmatter values (`"NEEDS_CHANGES"`) are not stripped of quotes and fail membership in `BLOCKING_VERDICTS`.
- does output match what documentation claims? Partially; fails to block on quoted frontmatter values due to parsing bug.

## Defects — required
- script-bug · .github/scripts/check_design_review_gate.py:79 · `parse_yaml_frontmatter` does not strip surrounding quotes from YAML values, causing quoted statuses like `status: "NEEDS_CHANGES"` to yield `'"NEEDS_CHANGES"'`, which fails membership testing against `BLOCKING_VERDICTS` (`'NEEDS_CHANGES'`) and allows blocking reviews to pass the gate undetected.
- other · .github/scripts/check_design_review_gate.py:38 · `PASSING_VERDICTS` is defined as a constant set but is never used anywhere in the script logic, which only tests `verdict in BLOCKING_VERDICTS` and treats any unrecognized status as non-blocking.

## Observations
- Implements custom YAML frontmatter parsing to avoid introducing PyYAML as an external runtime dependency in standard-library-only CI steps.
- Uses `scripts.ai_review_common.write_output` to integrate with GitHub Actions step outputs (`$GITHUB_OUTPUT`).

## Context cost
5247 bytes plus `scripts/ai_review_common.py` (~3KB) = ~8KB (~2000 tokens).
