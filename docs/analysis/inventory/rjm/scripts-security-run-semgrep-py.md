---
package: rjm
path: scripts/security/run_semgrep.py
type: script
bytes: 20443
unit: inv-rjm-260
in_scope_via: docs/workflow-commands.md
aliases: []
memo_inputs:
  - {path: scripts/security/run_semgrep.py, sha256: f3882d76e96bcd6d0387cf64a87513e15f6defcb7980d09ecc29080ddc024aa4}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# scripts/security/run_semgrep.py

## Purpose — required, verbatim
> "Runs semgrep security rules on Python, PowerShell, JavaScript, and YAML files." — scripts/security/run_semgrep.py:10

## Design intent — required
Pre-push security scanner designed to provide rapid local security feedback (<1 minute) across Python, PowerShell, JavaScript, TypeScript, and YAML files before pushing code to remote branches. It addresses the latency and friction of waiting for cloud-based CodeQL workflows by executing Semgrep locally against git branch diffs (`git diff --name-only <merge_base>...HEAD`), strictly verifying that the local Semgrep binary matches the version pinned in `pyproject.toml`, excluding noisy Python 3.6/3.7 compatibility rules that conflict with modern Python >=3.14 requirements, and enforcing fail-closed error handling where scanner timeouts or execution faults produce blocking findings rather than silent passes. Without it, security rule violations would escape local development and only be detected asynchronously in remote CI workflows.

## Phase — required
none

## Inputs — required
- CLI options parsed via `argparse.ArgumentParser` (`main()`):
  - `--config` — scripts/security/run_semgrep.py:548: semgrep configuration rule set (default `auto`)
  - `--severity` — scripts/security/run_semgrep.py:554: minimum finding severity threshold (`error`, `warning`, `info`)
  - `--dry-run` — scripts/security/run_semgrep.py:560: report findings without returning a blocking exit code
  - `--verbose`, `-v` — scripts/security/run_semgrep.py:565-567: enable verbose output including low-severity info findings
- Repository configuration and Git state:
  - Repository root via `get_repo_root` — scripts/security/run_semgrep.py:46, 286
  - Pinned semgrep version string in `pyproject.toml` — scripts/security/run_semgrep.py:147
  - Changed files detected via `merge-base` against `origin/main` (or `git ls-files` fallback) — scripts/security/run_semgrep.py:315, 325, 334
  - Target files filtered by `SUPPORTED_EXTENSIONS` (`.py`, `.ps1`, `.psm1`, `.js`, `.ts`, `.yaml`, `.yml`) — scripts/security/run_semgrep.py:250
- External tooling:
  - Pinned `semgrep` binary resolved from virtual environment sibling or system PATH — scripts/security/run_semgrep.py:213-245

## Outputs — required
- Process exit code: 0 on pass or clean dry-run, 1 on blocking findings or scan execution errors, 2 on configuration/version error, 3 on scan timeout — scripts/security/run_semgrep.py:20-23, 477, 488, 496, 500, 535, 537
- Console logging: finding reports formatted with `check_id`, file path, line number, severity, CWE, OWASP, and remediation messages — scripts/security/run_semgrep.py:70, 517
- Fail-closed error findings: synthetic `semgrep-scan-failure` findings for unparseable output or execution crashes — scripts/security/run_semgrep.py:87

## Invokes — required
- script scripts.github_core.repo — scripts/security/run_semgrep.py:46

## Invoked by — required
- script git_hook_policy — scripts/validation/git_hook_policy.py:6274

## Concepts named — required, verbatim
- `ADR-042` — scripts/security/run_semgrep.py:25 — used here
- `CodeQL` — scripts/security/run_semgrep.py:26 — used here
- `SemgrepScanError` — scripts/security/run_semgrep.py:57 — defined here
- `SemgrepFinding` — scripts/security/run_semgrep.py:67 — defined here
- `_SemgrepExecutableError` — scripts/security/run_semgrep.py:124 — defined here
- `SemgrepScanner` — scripts/security/run_semgrep.py:247 — defined here
- `cwe` — scripts/security/run_semgrep.py:75 — defined here
- `owasp` — scripts/security/run_semgrep.py:76 — defined here
- `fail-closed` — scripts/security/run_semgrep.py:60 — used here
- `pre-push hook` — scripts/security/run_semgrep.py:11 — used here
- `uv` — scripts/security/run_semgrep.py:135 — used here
- `TOCTOU` — scripts/security/run_semgrep.py:466 — used here

## Structure
(no markdown headings; flat python script defining classes and functions)
- `SemgrepScanError`
- class `SemgrepFinding`
- `_scan_failure_finding`
- `_semgrep_output_snippet`
- `_semgrep_failure_context`
- `_SemgrepExecutableError`
- `_semgrep_pinned_version`
- `_probe_semgrep_version`
- `_verify_pinned_version`
- `_resolve_semgrep_executable`
- class `SemgrepScanner`
- `main`

## Scripts — required if type is script or the skill ships scripts
- path: `scripts/security/run_semgrep.py`, language: Python 3, lines: 586
- documented invocation: `"python3 scripts/security/run_semgrep.py --dry-run" — scripts/security/run_semgrep.py:17`
- **executed:** yes
- actual command run: `.venv/bin/python3 scripts/security/run_semgrep.py --dry-run`, abridged stdout: `Semgrep security scan starting \n [DRY RUN] No blocking will occur \n PASS: No files to scan`, **actual exit code**: 0
  (Running without the repository virtual environment via system python `python3 scripts/security/run_semgrep.py --dry-run` yields exit code 2 and stdout: `ERROR: semgrep not found on PATH \n\n Install the pinned version with: \n uv sync --frozen --extra dev`)
- documented exit codes: `"0: Pass (no blocking findings)" — scripts/security/run_semgrep.py:20`, `"1: Fail (HIGH/CRITICAL findings or errors)" — scripts/security/run_semgrep.py:21`, `"2: Configuration error" — scripts/security/run_semgrep.py:22`, `"3: External tool failure (semgrep timed out before completing)" — scripts/security/run_semgrep.py:23`; actual exit paths: `scripts/security/run_semgrep.py:477` (`return 2`), `scripts/security/run_semgrep.py:488` (`return 0`), `scripts/security/run_semgrep.py:496` (`return 3`), `scripts/security/run_semgrep.py:500` (`return 0`), `scripts/security/run_semgrep.py:535` (`return 1`), `scripts/security/run_semgrep.py:537` (`return 0`), `scripts/security/run_semgrep.py:581` (`return scanner.run()`), `scripts/security/run_semgrep.py:585` (`sys.exit(main())`)
- for validators/gates: can exit non-zero (exits 1 on ERROR severity findings or execution failure findings, exits 2 on missing/mismatched binary, exits 3 on timeout); does not fail on default branch when run with pinned venv interpreter (exits 0 with `PASS: No files to scan`)
- does the output match what the documentation claims? yes, resolves pinned semgrep binary, checks changed files, and exits 0 when no files or findings are present

## Defects — required
- doc-drift — scripts/security/run_semgrep.py:16: Documented usage example specifies `--severity high`, but `--severity` choice options in the argument parser (line 555) accept only `['error', 'warning', 'info']`; passing `--severity high` causes argparse validation failure and exits 2.
- exit-code-mismatch — scripts/security/run_semgrep.py:23: Documented exit code 3 is described as `"3: External tool failure (semgrep timed out before completing)"`, but non-timeout execution failures from semgrep (such as non-0/1 exit codes or unparseable JSON output) generate `_scan_failure_finding` with severity `ERROR`, causing the script to exit 1 rather than 3.

## Observations
- Enforces reproducible local gate execution by verifying that the Semgrep binary (either inside the interpreter venv or on PATH) exactly matches the version pinned in `pyproject.toml` (`_semgrep_pinned_version`), preventing discrepancies between local checks and CI.
- Implements a fail-closed error handling model (`_scan_failure_finding`): if Semgrep crashes, encounters TOCTOU binary deletion, or returns unparseable JSON, the scanner converts the failure into an `ERROR` finding rather than an empty list to prevent false-green security bypasses.
- Automatically excludes outdated Python 3.6 and 3.7 compatibility rules (`python.lang.compatibility.python36` and `python.lang.compatibility.python37`, lines 380-383) to avoid blocking PRs on false-positive encoding rules when repository minimum Python version is `>=3.14`.

## Context cost
File size: 20,443 bytes (~5,111 tokens). Loads `scripts/github_core/repo.py` (3,658 bytes, ~915 tokens). Total context cost: 24,101 bytes (~6,025 tokens).
