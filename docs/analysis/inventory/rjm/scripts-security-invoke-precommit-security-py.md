---
package: rjm
path: scripts/security/invoke_precommit_security.py
type: script
bytes: 36974
unit: inv-rjm-259
in_scope_via: docs/workflow-commands.md
aliases: []
memo_inputs:
  - {path: scripts/security/invoke_precommit_security.py, sha256: f1c3517cc469cd62c5efe62e50c60be85ed861fbf1631383e2d431aa02ef6a4e}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# scripts/security/invoke_precommit_security.py

## Purpose — required, verbatim
> "Runs security validation on staged PowerShell files before commit." — scripts/security/invoke_precommit_security.py:5

## Design intent — required
Pre-commit hook validator that enforces security standards on staged PowerShell scripts (`.ps1`, `.psm1`, `.psd1`) and scans for critical credential/security patterns across all staged files prior to commit. By inspecting exact blob contents staged in the Git index via `git ls-files --stage` and `git cat-file blob` inside an isolated temporary directory, it prevents dirty working tree bypasses, maps PSScriptAnalyzer rule violations to CWE identifiers (such as CWE-94 and CWE-798), retrieves open CodeQL alerts for the current branch via the GitHub CLI, and produces a timestamped markdown security report (`.agents/security/SR-<branch>-<timestamp>.md`) staged directly into the commit. Without it, developers could commit PowerShell scripts containing critical code injections or hardcoded credentials without automated local static analysis.

## Phase — required
none

## Inputs — required
- CLI options parsed via `argparse.ArgumentParser` in `main` — scripts/security/invoke_precommit_security.py:959:
  - `"--dry-run"` — scripts/security/invoke_precommit_security.py:978: simulate operations without blocking commit
  - `"--whatif"` — scripts/security/invoke_precommit_security.py:979: alias for dry-run
  - `"--skip-agent-review"` — scripts/security/invoke_precommit_security.py:985: skip security agent review
  - `"--skip-codeql"` — scripts/security/invoke_precommit_security.py:991: skip CodeQL alert fetching from GitHub API
  - `"--verbose"` — scripts/security/invoke_precommit_security.py:997: enable verbose logging
  - `"-v"` — scripts/security/invoke_precommit_security.py:998: alias for verbose
- Git repository index and staged blobs inspected via `_get_staged_paths` — scripts/security/invoke_precommit_security.py:456 and `_read_staged_blob` — scripts/security/invoke_precommit_security.py:687
- Git repository branch and origin context retrieved via `_get_github_context` — scripts/security/invoke_precommit_security.py:162
- External CodeQL alerts queried via `_fetch_codeql_alerts` — scripts/security/invoke_precommit_security.py:223
- PowerShell analysis executed via `_run_psscriptanalyzer` — scripts/security/invoke_precommit_security.py:566

## Outputs — required
- Timestamped security report `.agents/security/SR-{branch}-{timestamp}.md` generated via `_generate_security_report` — scripts/security/invoke_precommit_security.py:774
- Git index modification via `_stage_security_report` — scripts/security/invoke_precommit_security.py:932
- Process exit code: 0 on success, 1 on blocking findings or validation errors (`"0: Pass (no blocking issues)" — scripts/security/invoke_precommit_security.py:972`, `"1: Fail (CRITICAL/HIGH findings or missing report)" — scripts/security/invoke_precommit_security.py:973`)
- Structured console logging via `logger` — scripts/security/invoke_precommit_security.py:41

## Invokes — required
- script scripts.github_core.repo — scripts/security/invoke_precommit_security.py:34

## Invoked by — required
orphan

## Concepts named — required, verbatim
`ADR-042` — scripts/security/invoke_precommit_security.py:13 — used here
`PSScriptAnalyzer` — scripts/security/invoke_precommit_security.py:6 — used here
`SecurityFinding` — scripts/security/invoke_precommit_security.py:75 — defined here
`CodeQLAlert` — scripts/security/invoke_precommit_security.py:88 — defined here
`PreCommitResult` — scripts/security/invoke_precommit_security.py:104 — defined here
`PreCommitSecurityCheck` — scripts/security/invoke_precommit_security.py:114 — defined here
`CWE-77` — scripts/security/invoke_precommit_security.py:759 — used here
`CWE-94` — scripts/security/invoke_precommit_security.py:764 — used here
`CWE-798` — scripts/security/invoke_precommit_security.py:765 — used here
`CWE-20` — scripts/security/invoke_precommit_security.py:768 — used here
`CWE-749` — scripts/security/invoke_precommit_security.py:769 — used here
`PSAvoidUsingInvokeExpression` — scripts/security/invoke_precommit_security.py:764 — used here
`PSAvoidUsingPlainTextForPassword` — scripts/security/invoke_precommit_security.py:765 — used here
`PSAvoidUsingConvertToSecureStringWithPlainText` — scripts/security/invoke_precommit_security.py:766 — used here
`PSAvoidUsingUserNameAndPassWordParams` — scripts/security/invoke_precommit_security.py:767 — used here
`PSUseShouldProcessForStateChangingFunctions` — scripts/security/invoke_precommit_security.py:768 — used here
`PSAvoidGlobalVars` — scripts/security/invoke_precommit_security.py:769 — used here
`PSAvoidUsingPositionalParameters` — scripts/security/invoke_precommit_security.py:770 — used here
`Security Report` — scripts/security/invoke_precommit_security.py:808 — defined here
`CodeQL` — scripts/security/invoke_precommit_security.py:834 — used here

## Structure
(no markdown headings; flat python script defining classes and functions)
- `_git_environment`
- `_powershell_extension`
- `_powershell_single_quoted_literal`
- class `SecurityFinding`
- class `CodeQLAlert`
- class `PreCommitResult`
- class `PreCommitSecurityCheck`
- `main`

## Scripts — required if type is script or the skill ships scripts
- path: `scripts/security/invoke_precommit_security.py`, language: Python 3, lines: 1020
- documented invocation: `"python invoke_precommit_security.py --dry-run" — scripts/security/invoke_precommit_security.py:10`
- **executed:** yes
- actual command run: `python3 scripts/security/invoke_precommit_security.py --dry-run`, abridged stdout: `[INFO] Starting pre-commit security check \n [INFO] [DRY RUN] No actual blocking will occur \n [INFO] [PASS] No files staged for commit`, **actual exit code**: 0
- documented exit codes: `"0: Pass (no blocking issues)" — scripts/security/invoke_precommit_security.py:972`, `"1: Fail (CRITICAL/HIGH findings or missing report)" — scripts/security/invoke_precommit_security.py:973`; actual exit paths: `scripts/security/invoke_precommit_security.py:364` (`return 1`), `scripts/security/invoke_precommit_security.py:371` (`return 1`), `scripts/security/invoke_precommit_security.py:375` (`return 0`), `scripts/security/invoke_precommit_security.py:394` (`return 0`), `scripts/security/invoke_precommit_security.py:407` (`return 1`), `scripts/security/invoke_precommit_security.py:426` (`return 1`), `scripts/security/invoke_precommit_security.py:442` (`return 1`), `scripts/security/invoke_precommit_security.py:451` (`return 1`), `scripts/security/invoke_precommit_security.py:454` (`return 0`), `scripts/security/invoke_precommit_security.py:1015` (`return check.run()`), `scripts/security/invoke_precommit_security.py:1019` (`sys.exit(main())`)
- for validators/gates: can exit non-zero (exits 1 on blocking findings, missing PSScriptAnalyzer, unmerged files, or missing report); does not fail on default branch when no files are staged (exits 0)
- does the output match what the documentation claims? yes, evaluates staged files and exits 0 when clean

## Defects — required
- orphan — scripts/security/invoke_precommit_security.py:1: Nothing in scope invokes this pre-commit security script (it is not configured in lefthook.yml or called by other in-scope scripts, only referenced by test suites in tests/).
- doc-drift — scripts/security/invoke_precommit_security.py:11: Top-level module docstring usage examples (lines 8-11) omit `--skip-codeql` and `--verbose`, which are supported by the CLI parser (lines 990-1001) and main epilog (line 969).
- exit-code-mismatch — scripts/security/invoke_precommit_security.py:973: Documented exit codes (lines 971-973) specify `1: Fail (CRITICAL/HIGH findings or missing report)`, but exit code 1 is also returned when git stage determination fails (line 364), when unmerged files exist (line 371), when PSScriptAnalyzer is missing (line 407), and when staging the security report fails (line 442).

## Observations
- Directly queries the Git index via `git ls-files --stage` and `git cat-file blob` into a temporary directory (`tempfile.TemporaryDirectory`) so that uncommitted working tree modifications cannot tamper with or bypass the static analysis.
- Sets `GIT_NO_REPLACE_OBJECTS=1` in `_git_environment()` to ensure Git replacement objects cannot hide malicious staged blobs.
- Enforces a division-of-labor paradigm where automated static analyzers (PSScriptAnalyzer, CodeQL) detect potential vulnerabilities, and an agent review is flagged as pending in the generated markdown security report.

## Context cost
File size: 36,974 bytes (~9,244 tokens). Loads `scripts/github_core/repo.py` (3,658 bytes, ~915 tokens). Total context cost: 40,632 bytes (~10,158 tokens).
