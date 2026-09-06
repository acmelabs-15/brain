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
verified: 2026-09-05 quote-check+coverage
---

# scripts/ci/diagnose_copilot_cli.py

## Purpose — required, verbatim
> "Copilot CLI diagnostics for the ai-review composite action." — scripts/ci/diagnose_copilot_cli.py:1

## Design intent — required
Executes comprehensive diagnostics for Copilot CLI within the `ai-review` GitHub composite action, verifying CLI binary presence, version output, help flag responsiveness, GitHub API authentication via `gh api user`, token scopes, Copilot prompt execution, and environment variables, writing structured health and auth status summaries to GitHub step outputs.

## Phase — required
cross-phase

## Inputs — required
- Environment variable `"GITHUB_OUTPUT"` — scripts/ci/diagnose_copilot_cli.py:243
- Environment variable `"COPILOT_AGENT"` — scripts/ci/diagnose_copilot_cli.py:169
- Environment variable `"COPILOT_MODEL"` — scripts/ci/diagnose_copilot_cli.py:170
- Environment variable `'GH_TOKEN'` — scripts/ci/diagnose_copilot_cli.py:217
- Environment variable `'GITHUB_TOKEN'` — scripts/ci/diagnose_copilot_cli.py:218
- Environment variable `'HOME'` — scripts/ci/diagnose_copilot_cli.py:219
- Environment variable `'PATH'` — scripts/ci/diagnose_copilot_cli.py:220

## Outputs — required
- Output parameter `f"health_status={health_status}"` — scripts/ci/diagnose_copilot_cli.py:230 to `GITHUB_OUTPUT`
- Output parameter `f"auth_status={auth_status}"` — scripts/ci/diagnose_copilot_cli.py:231 to `GITHUB_OUTPUT`
- Multiline output `"diagnostic"` — scripts/ci/diagnose_copilot_cli.py:232 to `GITHUB_OUTPUT`
- Diagnostic log lines `"=== COPILOT CLI DIAGNOSTICS ==="` — scripts/ci/diagnose_copilot_cli.py:107 to stdout
- Error message `"error: GITHUB_OUTPUT is required"` — scripts/ci/diagnose_copilot_cli.py:245 to stderr when output env missing

## Invokes — required
none

## Invoked by — required
orphan

## Concepts named — required, verbatim
`Copilot CLI` — scripts/ci/diagnose_copilot_cli.py:1 — used here
`ai-review` — scripts/ci/diagnose_copilot_cli.py:1 — used here
`CommandResult` — scripts/ci/diagnose_copilot_cli.py:19 — defined here
`COPILOT_TEST_TIMEOUT_SECONDS` — scripts/ci/diagnose_copilot_cli.py:15 — defined here
`health_status` — scripts/ci/diagnose_copilot_cli.py:110 — defined here
`auth_status` — scripts/ci/diagnose_copilot_cli.py:112 — defined here
`COPILOT_AGENT` — scripts/ci/diagnose_copilot_cli.py:169 — used here
`COPILOT_MODEL` — scripts/ci/diagnose_copilot_cli.py:170 — used here
`GH_TOKEN` — scripts/ci/diagnose_copilot_cli.py:217 — used here
`GITHUB_TOKEN` — scripts/ci/diagnose_copilot_cli.py:218 — used here
`GITHUB_OUTPUT` — scripts/ci/diagnose_copilot_cli.py:243 — used here

## Structure
(no markdown headings; flat python script)

## Scripts — required if type is script or the skill ships scripts
- path: `scripts/ci/diagnose_copilot_cli.py`, language: Python 3, lines: 252
- documented invocation: `"Copilot CLI diagnostics for the ai-review composite action." — scripts/ci/diagnose_copilot_cli.py:1`
- **executed:** yes
- actual command run: `GITHUB_OUTPUT=/tmp/test_gh_out.txt python3 scripts/ci/diagnose_copilot_cli.py`, abridged stdout: `=== COPILOT CLI DIAGNOSTICS === ... Health Status: failed`, **actual exit code**: 0; when run without env: `python3 scripts/ci/diagnose_copilot_cli.py`, stderr: `error: GITHUB_OUTPUT is required`, **actual exit code**: 2
- documented exit codes: none in docstring; actual exit paths: `scripts/ci/diagnose_copilot_cli.py:236` (`return EXIT_OK` [0] after running diagnostics), `scripts/ci/diagnose_copilot_cli.py:242` (`return 2` if argv given), `scripts/ci/diagnose_copilot_cli.py:246` (`return 2` if `GITHUB_OUTPUT` missing), `scripts/ci/diagnose_copilot_cli.py:251` (`raise SystemExit(main())`)
- for validators/gates: diagnostic tool; returns 0 even if underlying tool health is degraded or failed (writing warning and health status to outputs), returning 2 on configuration error (missing `GITHUB_OUTPUT`)
- does the output match what the documentation claims? yes, sets health_status, auth_status, and diagnostic multiline string

## Defects — required
none

## Observations
Designed for execution inside `.github/actions/ai-review/action.yml` step to safely diagnose environment issues without crashing the runner step prematurely.

## Context cost
8788 bytes, approximately 2197 tokens.
