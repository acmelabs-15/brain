---
package: rjm
path: scripts/ci/drift_create_alert_issue.py
type: script
bytes: 3256
unit: inv-rjm-203
in_scope_via: docs/workflow-commands.md
aliases: []
memo_inputs:
  - {path: scripts/ci/drift_create_alert_issue.py, sha256: 4a414caa6386fc870e6bc12e94ea62524e78df5e314c62d9b4a8439183b84f1e}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# scripts/ci/drift_create_alert_issue.py

## Purpose — required, verbatim
> "Create a GitHub issue when agent drift is detected." — scripts/ci/drift_create_alert_issue.py:2

## Design intent — required
Automates filing an alert issue on GitHub when agent drift is detected by the CI pipeline. It replaces brittle inline heredoc shell logic in `drift-detection.yml` (ADR-006) by loading a dedicated issue prompt template (`.github/prompts/drift-alert-issue.md`), substituting workflow runtime variables (detection timestamp, server URL, repository name, workflow run ID, and detailed diff text), and dispatching `gh issue create` with standardized tags.

## Phase — required
none

## Inputs — required
- Environment variable `RUNNER_TEMP` (or `"."`) — scripts/ci/drift_create_alert_issue.py:10,40
- Environment variable `SERVER_URL` — scripts/ci/drift_create_alert_issue.py:11,41
- Environment variable `REPOSITORY` — scripts/ci/drift_create_alert_issue.py:12,42
- Environment variable `RUN_ID` — scripts/ci/drift_create_alert_issue.py:13,43
- Environment variable `GH_TOKEN` — scripts/ci/drift_create_alert_issue.py:14
- Template file `.github/prompts/drift-alert-issue.md` — scripts/ci/drift_create_alert_issue.py:35
- Detailed report file `drift-details.md` — scripts/ci/drift_create_alert_issue.py:51

## Outputs — required
- Intermediate markdown body `issue-body.md` written under `RUNNER_TEMP` — scripts/ci/drift_create_alert_issue.py:69
- GitHub issue created via `gh` CLI with title prefix `Agent Drift Detected` — scripts/ci/drift_create_alert_issue.py:72

## Invokes — required
- command gh — scripts/ci/drift_create_alert_issue.py:77
- reference drift-alert-issue.md — scripts/ci/drift_create_alert_issue.py:35

## Invoked by — required
orphan

## Concepts named — required, verbatim
- `drift-detection.yml` — scripts/ci/drift_create_alert_issue.py:4 — used here
- `ADR-006` — scripts/ci/drift_create_alert_issue.py:4 — used here
- `ADR-035` — scripts/ci/drift_create_alert_issue.py:16 — used here
- `EXIT_OK` — scripts/ci/drift_create_alert_issue.py:31 — defined here
- `EXIT_CONFIG` — scripts/ci/drift_create_alert_issue.py:32 — defined here
- `EXIT_EXTERNAL` — scripts/ci/drift_create_alert_issue.py:33 — defined here
- `_TEMPLATE_PATH` — scripts/ci/drift_create_alert_issue.py:35 — defined here
- `run` — scripts/ci/drift_create_alert_issue.py:38 — defined here
- `main` — scripts/ci/drift_create_alert_issue.py:98 — defined here

## Structure
- Module docstring detailing ADR-006 extraction, environment inputs, and ADR-035 exit code standard (lines 2-20)
- Exit code constants `EXIT_OK`, `EXIT_CONFIG`, and `EXIT_EXTERNAL` (lines 31-33)
- Template constant `_TEMPLATE_PATH` (line 35)
- Execution function `run` performing substitution and subprocess execution (lines 38-95)
- Entrypoint `main` invoking `run` (lines 98-105)

## Scripts — required if type is script or the skill ships scripts
- **path:** `scripts/ci/drift_create_alert_issue.py`
- **language:** Python 3
- **lines:** 105
- **documented invocation:** none explicit (executed by drift detection workflow in GitHub Actions)
- **executed:** yes
- **command:** `python3 sources/rjm/scripts/ci/drift_create_alert_issue.py`
- **stdout:**
  ```text
  ::error::template not found: .github/prompts/drift-alert-issue.md
  ```
- **actual exit code:** 2
- **documented exit codes:**
  - `> "0 - issue created" — scripts/ci/drift_create_alert_issue.py:17`
  - `> "2 - template or drift details missing" — scripts/ci/drift_create_alert_issue.py:18`
  - `> "3 - GitHub issue creation failed" — scripts/ci/drift_create_alert_issue.py:19`
- **actual exit paths:**
  - `return EXIT_CONFIG` — scripts/ci/drift_create_alert_issue.py:47
  - `return EXIT_CONFIG` — scripts/ci/drift_create_alert_issue.py:54
  - `return EXIT_CONFIG` — scripts/ci/drift_create_alert_issue.py:58
  - `return EXIT_EXTERNAL` — scripts/ci/drift_create_alert_issue.py:91
  - `return EXIT_EXTERNAL` — scripts/ci/drift_create_alert_issue.py:94
  - `return EXIT_OK` — scripts/ci/drift_create_alert_issue.py:95
  - `sys.exit(main())` — scripts/ci/drift_create_alert_issue.py:104
- **for validators/gates:** Not a gate; issue creation alert script. Exits 2 on missing template or missing/empty drift details, exits 3 on gh subprocess failure, and exits 0 on successful issue creation.
- **output matches documentation:** yes, creates issue body and submits via `gh issue create` with labels `drift-detected,automated`.

## Defects — required
- orphan — scripts/ci/drift_create_alert_issue.py:4 — not invoked by any in-scope file; replaces inline heredoc in out-of-scope drift-detection.yml CI workflow

## Observations
Labels created issues with `drift-detected,automated` to facilitate automated triage and tracking. Gracefully parses UTC timestamps for reproducible date strings across CI runners.

## Context cost
3,256 bytes source (~810 tokens).
