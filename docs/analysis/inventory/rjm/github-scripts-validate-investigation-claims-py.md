---
package: rjm
path: .github/scripts/validate_investigation_claims.py
type: script
bytes: 13412
unit: inv-rjm-185
in_scope_via: .agents/architecture/ADR-005-powershell-only-scripting.md
aliases: []
memo_inputs:
  - {path: .github/scripts/validate_investigation_claims.py, sha256: 1f0feb2769dc14326138f021a99ada12834bbe4fa94539850b90fdc0c55b233a}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# .github/scripts/validate_investigation_claims.py

## Purpose — required, verbatim
> "CI backstop for investigation-only QA skip claims per ADR-034." — .github/scripts/validate_investigation_claims.py:2

## Design intent — required
Implements an automated CI validation backstop for ADR-034, which allows exploratory and research sessions to claim an exemption from formal QA gates (`SKIPPED: investigation-only`). This script audits session log files and git commit diffs to ensure that commits claiming investigation-only status modified only allowed investigation artifact paths (e.g. `.agents/sessions/`, `.agents/analysis/`, `.agents/retrospective/`, `.serena/memories/`, `.agents/security/`, `.agents/critique/`). In session-validation mode, it detects violations and fails the gate (exit 1); in diff-validation mode, it operates advisably by recording violation metrics to GitHub Actions outputs while exiting 0. Without this script, agents could bypass QA gates on production code changes by falsely claiming an investigation-only exemption.

## Phase — required
rjm:test

## Inputs — required
Command-line arguments:
- `--session-dir`: Path (default: `.agents/sessions`), directory containing session log JSON files
- `--commits`: str (optional, comma-separated), commit SHAs to validate
- `--output-format`: choices `json` or `text` (default: `text`), report output format
- `--base-ref`: str (default: `HEAD~1`), base git ref for diff comparison
- `--head-ref`: str (default: `HEAD`), head git ref for diff comparison
- `--mode`: choices `session`, `diff`, `both` (default: `diff`), validation mode
Environment variables:
- `GITHUB_OUTPUT`: path to GitHub Actions outputs file
- `GITHUB_WORKSPACE`: workspace root for module resolution

## Outputs — required
- Human-readable text report or structured JSON summary printed to stdout
- GitHub Actions outputs: `verdict`, `violation_count`, `violations` in session mode; `investigation_violations`, `violation_details` in diff mode
- Process exit code per ADR-035: 0=validation passed (or advisory diff pass), 1=violations detected in session mode or invalid ref args, 2=configuration/environment error (missing session directory)

## Invokes — required
none

## Invoked by — required
- doc .agents/architecture/ADR-034-investigation-session-qa-exemption.md — .agents/architecture/ADR-034-investigation-session-qa-exemption.md:96
- doc .claude/skills/ai-agents-config-catalog/SKILL.md — .claude/skills/ai-agents-config-catalog/SKILL.md:100
- doc .claude/skills/ai-agents-change-control/SKILL.md — .claude/skills/ai-agents-change-control/SKILL.md:41
- doc .agents/critique/ADR-034-debate-log.md — .agents/critique/ADR-034-debate-log.md:163

## Concepts named — required, verbatim
- `ADR-034` — .github/scripts/validate_investigation_claims.py:2 — used here
- `ADR-035` — .github/scripts/validate_investigation_claims.py:11 — used here
- `_ALLOWLIST_PATTERNS` — .github/scripts/validate_investigation_claims.py:58 — defined here
- `_INVESTIGATION_CLAIM_PATTERN` — .github/scripts/validate_investigation_claims.py:71 — defined here
- `ClaimViolation` — .github/scripts/validate_investigation_claims.py:75 — defined here
- `ValidationResult` — .github/scripts/validate_investigation_claims.py:84 — defined here
- `file_matches_allowlist` — .github/scripts/validate_investigation_claims.py:93 — defined here
- `validate_investigation_claims` — .github/scripts/validate_investigation_claims.py:156 — defined here
- `validate_claims` — .github/scripts/validate_investigation_claims.py:223 — defined here
- `build_parser` — .github/scripts/validate_investigation_claims.py:233 — defined here

## Structure
- class ClaimViolation — .github/scripts/validate_investigation_claims.py:75
- class ValidationResult — .github/scripts/validate_investigation_claims.py:84
- def file_matches_allowlist — .github/scripts/validate_investigation_claims.py:93
- def get_files_in_commit — .github/scripts/validate_investigation_claims.py:99
- def session_claims_investigation_only — .github/scripts/validate_investigation_claims.py:115
- def get_commit_for_session — .github/scripts/validate_investigation_claims.py:142
- def validate_investigation_claims — .github/scripts/validate_investigation_claims.py:156
- def get_changed_files — .github/scripts/validate_investigation_claims.py:209
- def validate_claims — .github/scripts/validate_investigation_claims.py:223
- def _validate_ref — .github/scripts/validate_investigation_claims.py:228
- def build_parser — .github/scripts/validate_investigation_claims.py:233
- def _run_session_validation — .github/scripts/validate_investigation_claims.py:276
- def _run_diff_validation — .github/scripts/validate_investigation_claims.py:337
- def main — .github/scripts/validate_investigation_claims.py:375

## Scripts — required if type is script or the skill ships scripts
- path: `.github/scripts/validate_investigation_claims.py`, Python 3, 404 lines
- documented invocation: `python3 validate_investigation_claims.py --mode session --session-dir .agents/sessions` (deduced from CLI help and ADR-034 documentation)
- **executed:** yes
- actual command run: `python3 sources/rjm/.github/scripts/validate_investigation_claims.py --mode session --session-dir sources/rjm/.agents/sessions`
  abridged stdout:
  ```text
  Investigation-Only Claim Validation
  Sessions checked: 1467
  Claims found: 28
  Violations: 0
  ```
  **actual exit code:** 0
- documented exit codes (`0 - Validation passed (all claims valid)`, `1 - Validation failed (claim violations found)`, `2 - Configuration/environment error (e.g. missing session directory)` from `.github/scripts/validate_investigation_claims.py:12-14`) vs actual exit paths in code:
  - `return 2` at `.github/scripts/validate_investigation_claims.py:281` (session directory not found)
  - `return 0 if result.valid else 1` at `.github/scripts/validate_investigation_claims.py:334` (session validation result)
  - `return 0` at `.github/scripts/validate_investigation_claims.py:344` and line 372 (diff validation is advisory, always exits 0)
  - `return 1` at `.github/scripts/validate_investigation_claims.py:385` (refs start with dash, preventing CWE-78 argument injection)
  - `sys.exit(main())` at `.github/scripts/validate_investigation_claims.py:403`
- for validators/gates: can exit non-zero (verified with `python3 sources/rjm/.github/scripts/validate_investigation_claims.py --mode session --session-dir /nonexistent/sessions`, exit code 2; verified with `python3 sources/rjm/.github/scripts/validate_investigation_claims.py --base-ref=-invalid`, exit code 1; tested on source repository default session history yielding 0 violations, exit code 0)
- does the output match what the documentation claims: yes, verifies session claim patterns and audit allowlists per ADR-034 contracts

## Defects — required
none

## Observations
Contains defense-in-depth security validation via `_validate_ref` preventing git command flag injection (CWE-78) when user-supplied refs begin with a dash (`-`). Maintains internal copy of `_ALLOWLIST_PATTERNS` while also importing `test_file_matches_allowlist` from `scripts.modules.investigation_allowlist`.

## Context cost
13412 bytes, approximately 3350 tokens.
