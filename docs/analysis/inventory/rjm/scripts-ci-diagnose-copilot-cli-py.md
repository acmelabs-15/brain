---
package: rjm
path: scripts/ci/diagnose_copilot_cli.py
type: script
bytes: 8788
unit: inv-rjm-203
in_scope_via: docs/workflow-commands.md
aliases: []
memo_inputs:
  - {path: scripts/ci/diagnose_copilot_cli.py, sha256: d05040c1d6bdaab669157a383c9f470e3cbc1261e0cb4974c89666ee59ec0b39}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# scripts/ci/diagnose_copilot_cli.py

## Purpose — required, verbatim
> "Copilot CLI diagnostics for the ai-review composite action." — scripts/ci/diagnose_copilot_cli.py:1

## Design intent — required
Performs comprehensive end-to-end diagnostics on the GitHub Copilot CLI and GitHub authentication environment before review actions run. It verifies CLI binary availability, checks executable version and help output, validates GitHub API user and OAuth token scopes via `gh api`, executes a timed 10-second test prompt, and audits environment variables. Writing structured status results (`healthy`, `degraded`, or `failed`) and multiline diagnostics directly to `GITHUB_OUTPUT` allows workflow jobs to detect configuration issues and credential failures early without crashing prematurely.

## Phase — required
none

## Inputs — required
- Environment variable `GITHUB_OUTPUT` — scripts/ci/diagnose_copilot_cli.py:243
- Environment variable `COPILOT_AGENT` — scripts/ci/diagnose_copilot_cli.py:169
- Environment variable `COPILOT_MODEL` — scripts/ci/diagnose_copilot_cli.py:170
- Environment variable `GH_TOKEN` — scripts/ci/diagnose_copilot_cli.py:217
- Environment variable `GITHUB_TOKEN` — scripts/ci/diagnose_copilot_cli.py:218
- Environment variable `HOME` — scripts/ci/diagnose_copilot_cli.py:219
- Environment variable `PATH` — scripts/ci/diagnose_copilot_cli.py:220
- GitHub CLI and Copilot CLI binaries in system PATH — scripts/ci/diagnose_copilot_cli.py:115,145

## Outputs — required
- Appends `health_status` (`"healthy"`, `"degraded"`, or `"failed"`) to GITHUB_OUTPUT — scripts/ci/diagnose_copilot_cli.py:230
- Appends `auth_status` to GITHUB_OUTPUT — scripts/ci/diagnose_copilot_cli.py:231
- Appends multiline `diagnostic` block delimited by `EOF_DIAG` to GITHUB_OUTPUT — scripts/ci/diagnose_copilot_cli.py:232

## Invokes — required
- command copilot — scripts/ci/diagnose_copilot_cli.py:126
- command gh — scripts/ci/diagnose_copilot_cli.py:145

## Invoked by — required
orphan

## Concepts named — required, verbatim
- `ai-review` — scripts/ci/diagnose_copilot_cli.py:1 — used here
- `EXIT_OK` — scripts/ci/diagnose_copilot_cli.py:14 — defined here
- `COPILOT_TEST_TIMEOUT_SECONDS` — scripts/ci/diagnose_copilot_cli.py:15 — defined here
- `CommandResult` — scripts/ci/diagnose_copilot_cli.py:19 — defined here
- `run_command` — scripts/ci/diagnose_copilot_cli.py:25 — defined here
- `append_line` — scripts/ci/diagnose_copilot_cli.py:64 — defined here
- `append_multiline_output` — scripts/ci/diagnose_copilot_cli.py:69 — defined here
- `_parse_login` — scripts/ci/diagnose_copilot_cli.py:78 — defined here
- `_parse_scopes` — scripts/ci/diagnose_copilot_cli.py:87 — defined here
- `_mask_env_value` — scripts/ci/diagnose_copilot_cli.py:95 — defined here
- `run_diagnostics` — scripts/ci/diagnose_copilot_cli.py:100 — defined here
- `main` — scripts/ci/diagnose_copilot_cli.py:239 — defined here

## Structure
- Module docstring defining role in `ai-review` composite action (line 1)
- Data model `CommandResult` and subprocess wrapper `run_command` (lines 18-61)
- Output formatting helpers `append_line` and `append_multiline_output` (lines 64-76)
- API and environment parsing helpers `_parse_login`, `_parse_scopes`, and `_mask_env_value` (lines 78-98)
- Diagnostic runner `run_diagnostics` executing six verification steps (lines 100-237)
- Entrypoint `main` validating arguments and environment before launching diagnostics (lines 239-251)

## Scripts — required if type is script or the skill ships scripts
- **path:** `scripts/ci/diagnose_copilot_cli.py`
- **language:** Python 3
- **lines:** 252
- **documented invocation:** none explicit (invoked via Python within GitHub Actions composite action)
- **executed:** yes
- **command:** `python3 sources/rjm/scripts/ci/diagnose_copilot_cli.py`
- **stdout:**
  ```text
  error: GITHUB_OUTPUT is required
  ```
- **actual exit code:** 2
- **documented exit codes:**
  - `> "return 2" — scripts/ci/diagnose_copilot_cli.py:242`
  - `> "return 2" — scripts/ci/diagnose_copilot_cli.py:246`
  - `> "return EXIT_OK" — scripts/ci/diagnose_copilot_cli.py:236`
- **actual exit paths:**
  - `return 2` — scripts/ci/diagnose_copilot_cli.py:242
  - `return 2` — scripts/ci/diagnose_copilot_cli.py:246
  - `return EXIT_OK` — scripts/ci/diagnose_copilot_cli.py:236
  - `raise SystemExit(main())` — scripts/ci/diagnose_copilot_cli.py:251
- **for validators/gates:** Diagnostics script. Returns exit code 0 when diagnostic checks run, even when individual tools fail, writing `health_status=failed` to `GITHUB_OUTPUT` to allow upstream workflow logic to handle degradation gracefully. Exits 2 if command arguments are supplied or if `GITHUB_OUTPUT` is not set.
- **output matches documentation:** yes, emits diagnostic sections to stdout and sets `health_status`, `auth_status`, and `diagnostic` variables in `GITHUB_OUTPUT`.

## Defects — required
- orphan — scripts/ci/diagnose_copilot_cli.py:1 — not invoked by any in-scope file; designed for ai-review composite action in CI workflows

## Observations
Employs dependency injection for `runner` and `which` in `run_diagnostics`, enabling comprehensive unit testing with mocked subprocess commands. Gracefully isolates timeouts (exit code 124) and missing commands (exit code 127).

## Context cost
8,788 bytes source (~2,200 tokens).
