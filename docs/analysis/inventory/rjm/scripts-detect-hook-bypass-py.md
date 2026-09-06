---
package: rjm
path: scripts/detect_hook_bypass.py
type: script
bytes: 8909
unit: inv-rjm-213
in_scope_via: scripts/ci/run_hook_bypass_audit.py
aliases: []
memo_inputs:
  - {path: scripts/detect_hook_bypass.py, sha256: 75ac8dd432b365b4d7934e216897ccd03b44a366b92d5e8245bb6795e4dd6e0c}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# scripts/detect_hook_bypass.py

## Purpose — required, verbatim
> "Detect commits that bypassed pre-commit hooks via --no-verify." — scripts/detect_hook_bypass.py:2

## Design intent — required
Audit and CI diagnostic script designed to identify pull request commits that bypassed local pre-commit git hooks using `git commit --no-verify`. It inspects authored git commits between the PR head and base ref (filtering out merge commits and squashed merge-resolution commits) and flags two specific policy violations: modifying `.agents/` files without an accompanying `.agents/sessions/*.json` log, and adding bash scripts under `.github/scripts/` (violating ADR-042). Outputs audit findings as structured JSON or human-readable text for observability and compliance tracking. Without it, maintainers would have no automated means of discovering when contributors circumvented local quality and governance gates.

## Phase — required
cross-phase

## Inputs — required
- CLI arguments: `--base-ref` — scripts/detect_hook_bypass.py:260, `--json` — scripts/detect_hook_bypass.py:265, `--output` — scripts/detect_hook_bypass.py:271
- Git repository history: `git` — scripts/detect_hook_bypass.py:66, 90, 119, 139

## Outputs — required
- Audit report JSON file written to path specified by `--output`: `args.output.write_text` — scripts/detect_hook_bypass.py:290
- Console stdout: human-readable report via `format_report` — scripts/detect_hook_bypass.py:227 or JSON string via `json.dumps` — scripts/detect_hook_bypass.py:287

## Invokes — required
none

## Invoked by — required
- script scripts/ci/run_hook_bypass_audit.py — scripts/ci/run_hook_bypass_audit.py:42
- script scripts/ci/parse_hook_bypass_results.py — scripts/ci/parse_hook_bypass_results.py:5

## Concepts named — required, verbatim
- `ADR-035 Exit Code Standardization` — scripts/detect_hook_bypass.py:16 — used here
- `BypassIndicator` — scripts/detect_hook_bypass.py:38 — defined here
- `AuditReport` — scripts/detect_hook_bypass.py:48 — defined here
- `ADR-042` — scripts/detect_hook_bypass.py:188 — used here

## Structure
- class BypassIndicator — scripts/detect_hook_bypass.py:38
- class AuditReport — scripts/detect_hook_bypass.py:48
- def get_current_branch — scripts/detect_hook_bypass.py:63
- def get_pr_commits — scripts/detect_hook_bypass.py:77
- def get_commit_files — scripts/detect_hook_bypass.py:116
- def is_merge_commit — scripts/detect_hook_bypass.py:132
- def check_agents_without_session — scripts/detect_hook_bypass.py:151
- def check_bash_scripts_added — scripts/detect_hook_bypass.py:171
- def analyze_commits — scripts/detect_hook_bypass.py:195
- def format_report — scripts/detect_hook_bypass.py:227
- def parse_args — scripts/detect_hook_bypass.py:253
- def main — scripts/detect_hook_bypass.py:278

## Scripts — required if type is script or the skill ships scripts
- path, language, lines: `scripts/detect_hook_bypass.py`, Python 3, 312 lines
- documented invocation (verbatim, path:line):
  > "runs `scripts/detect_hook_bypass.py --output <json>`, then calls this script to" — scripts/ci/parse_hook_bypass_results.py:5
- **executed:** yes
- actual command run, abridged stdout, **actual exit code**:
  Command: `python3 scripts/detect_hook_bypass.py --help`
  Abridged stdout: `usage: detect_hook_bypass.py [-h] [--base-ref BASE_REF] [--json] [--output OUTPUT]`
  **actual exit code:** 0
- documented exit codes (verbatim) vs. actual exit paths in code:
  Documented in `scripts/detect_hook_bypass.py:12-14`:
  > "0 - Success: No bypass indicators detected" — scripts/detect_hook_bypass.py:12
  > "1 - Warning: Bypass indicators found (non-blocking, logged for audit)" — scripts/detect_hook_bypass.py:13
  > "2 - Error: Configuration or runtime error" — scripts/detect_hook_bypass.py:14
  Actual exit paths in code:
  - Exit 0: `return 0` — scripts/detect_hook_bypass.py:300
  - Exit 1: `return 1` — scripts/detect_hook_bypass.py:298
  - Exit 2: `return 2` — scripts/detect_hook_bypass.py:304, 307
  - Invocation wrapper: `sys.exit(main())` — scripts/detect_hook_bypass.py:311
- for validators/gates: can exit non-zero (exits 1 when bypass indicators are detected, exits 2 on subprocess timeout or exception); runs on default branch with `--base-ref HEAD` and passes with exit code 0.
- does the output match what the documentation claims: yes, formats report as structured JSON or human-readable text summarizing bypass indicators.

## Defects — required
- doc-drift — "markdown lint violations" — scripts/detect_hook_bypass.py:7 — Module docstring claims detection heuristics include "Commits with markdown lint violations that auto-fix would have caught", but code only implements `check_agents_without_session` and `check_bash_scripts_added` (lines 209-212).

## Observations
Differentiates between merge commits (`is_merge_commit` checks for 2+ parents) and authored commits, and skips squashed merge commits matching `_MERGE_SUBJECT_RE` (`Merge branch ... into ...`) so upstream changes do not trigger false positive bypass warnings.

## Context cost
8909 bytes (approximately 2227 tokens). Isolated script with standard library dependencies only.
