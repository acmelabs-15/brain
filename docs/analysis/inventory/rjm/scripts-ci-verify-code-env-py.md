---
package: rjm
path: scripts/ci/verify_code_env.py
type: script
bytes: 4437
unit: inv-rjm-210
in_scope_via: README.md
aliases: []
memo_inputs:
  - {path: scripts/ci/verify_code_env.py, sha256: 17870be01d0b77be3b7a8784741d5c900e9a24f1d4f13984ea71f1dad8d0e963}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# scripts/ci/verify_code_env.py

## Purpose — required, verbatim
> "Verify the development toolchain a CI job just set up." — scripts/ci/verify_code_env.py:2

## Design intent — required
Audits the toolchain configured by the `setup-code-env` GitHub composite action (under ADR-006, issue #3532), ensuring workflow YAML contains no logic. It verifies tool availability and versions for Node.js, markdownlint-cli2, GitHub CLI, Python, ruff, pytest, Pester, and powershell-yaml. It is designed specifically for heterogeneous CI environments that intentionally activate only subsets of the toolchain: missing optional tools print nothing and do not fail the build. The sole failing gate is `lefthook check-install`, and only when the job explicitly requested both git hooks and Python (`ENABLE_GIT_HOOKS=true` and `ENABLE_PYTHON=true`). Without this script, workflow YAML would require complex inline bash/PowerShell scripts with diverging checks across jobs.

## Phase — required
none

## Inputs — required
Environment variables:
- `ENABLE_GIT_HOOKS`: boolean string (`scripts/ci/verify_code_env.py:116`)
- `ENABLE_PYTHON`: boolean string (`scripts/ci/verify_code_env.py:117`)
- `ENABLE_PESTER`: boolean string (`scripts/ci/verify_code_env.py:118`)
- `SKIP_AUTOFIX`: string flag, default "0" (`scripts/ci/verify_code_env.py:128`)
System tools inspected via PATH:
- `npx`, `gh`, `python3`, `ruff`, `pytest`, `pwsh`, `uv`

## Outputs — required
- Standard output report displaying tool availability, version numbers, and setup completion banner
- Exit code: 0 on success or reporting-only; exits with lefthook's non-zero return code if `verify_lefthook` fails
- Files produced: none

## Invokes — required
none

## Invoked by — required
orphan

## Concepts named — required, verbatim
- `development toolchain` — scripts/ci/verify_code_env.py:2 — used here
- `ADR-006` — scripts/ci/verify_code_env.py:4 — used here
- `lefthook check-install` — scripts/ci/verify_code_env.py:7 — used here
- `git hooks` — scripts/ci/verify_code_env.py:8 — used here
- `Node.js, markdownlint-cli2,` — scripts/ci/verify_code_env.py:27 — used here
- `Python (if enabled), GitHub CLI (if available), Pester (if enabled),` — scripts/ci/verify_code_env.py:28 — used here
- `powershell-yaml` — scripts/ci/verify_code_env.py:104 — used here
- `ENABLE_GIT_HOOKS` — scripts/ci/verify_code_env.py:116 — used here
- `ENABLE_PYTHON` — scripts/ci/verify_code_env.py:117 — used here
- `ENABLE_PESTER` — scripts/ci/verify_code_env.py:118 — used here
- `SKIP_AUTOFIX` — scripts/ci/verify_code_env.py:128 — used here

## Structure
- # Verify the development toolchain a CI job just set up.
- # Module constants, allowlist regex, and subprocess runner (_run)
- # Lefthook verification gate (verify_lefthook)
- # PowerShell module version inspector (_module_version)
- # Tool availability reporting (report_tools)
- # Environment variable helper (_enabled)
- # Argument parser and main execution flow (main)

## Scripts — required if type is script or the skill ships scripts
- path: `scripts/ci/verify_code_env.py`, Python 3, 141 lines
- documented invocation:
  "Verify the development toolchain a CI job just set up." — scripts/ci/verify_code_env.py:2
- executed: yes
- actual command run, abridged stdout, actual exit code:
  - Command 1: `python3 scripts/ci/verify_code_env.py`
  - Abridged stdout:
    ```
    === Setup Verification ===
    SKIP_AUTOFIX: 0 (0=enabled, 1=disabled)

    [PASS] npx is available
    [PASS] markdownlint-cli2 is installed
    [PASS] GitHub CLI is available for workflow monitoring

    [PASS] Setup complete. Development tools ready: Node.js, markdownlint-cli2, Python (if enabled), GitHub CLI (if available), Pester (if enabled), git hooks (if configured).
    ```
  - actual exit code: 0
  - Command 2 (lefthook failure path): `ENABLE_GIT_HOOKS=true ENABLE_PYTHON=true python3 scripts/ci/verify_code_env.py`
  - Abridged stdout:
    ```
    === Setup Verification ===
    [FAIL] Lefthook installation verification failed (exit code 1)
    ```
  - actual exit code: 1
- documented exit codes vs actual exit paths:
  - Documented: "Only one check can fail the job: ``lefthook check-install``, and only when the caller asked for both git hooks and Python." — scripts/ci/verify_code_env.py:7-8
  - Actual exit paths:
    - `return completed.returncode` — scripts/ci/verify_code_env.py:54
    - `return 0` — scripts/ci/verify_code_env.py:56
    - `return code` — scripts/ci/verify_code_env.py:126
    - `return 0` — scripts/ci/verify_code_env.py:136
    - `sys.exit(main())` — scripts/ci/verify_code_env.py:140
- for validators/gates: can it exit non-zero? does it fail on the source repo's own default branch?
  Yes, exits non-zero (returns the exit code of `lefthook check-install`, typically 1) when both git hooks and Python are enabled and lefthook installation check fails. On default branch without those environment variables set, it exits 0.
- does output match what documentation claims:
  Yes, displays tool status diagnostics and exits 0 when tools are optional, only blocking when lefthook installation check fails.

## Defects — required
- `orphan` · scripts/ci/verify_code_env.py:1 · Script is invoked only by composite action `.github/actions/setup-code-env/action.yml:173` and unit tests; no caller in the in-scope manifest graph.

## Observations
- Security hardening against command injection: line 24 uses an allowlist regex `_MODULE_NAME = re.compile(r"\A[A-Za-z][A-Za-z0-9-]*\Z")` for names passed into `pwsh -Command` (mitigating CWE-78).
- Preheats the npx cache for `markdownlint-cli2@0.23.1` during the check (line 84).

## Context cost
4437 bytes, 141 lines. Loads no in-scope repository modules. Approximately 1,200 tokens.
