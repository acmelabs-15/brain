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
verified: 2026-09-05 quote-check+coverage
---

# scripts/ci/drift_create_alert_issue.py

## Purpose — required, verbatim
> "Create a GitHub issue when agent drift is detected." — scripts/ci/drift_create_alert_issue.py:2

## Design intent — required
Populates the issue markdown template from `.github/prompts/drift-alert-issue.md` with runtime detection details and executes `gh issue create` with labels `drift-detected,automated`, replacing inline heredoc bash within `drift-detection.yml` per ADR-006 and ADR-035.

## Phase — required
cross-phase

## Inputs — required
- Template file `".github/prompts/drift-alert-issue.md"` — scripts/ci/drift_create_alert_issue.py:35
- Drift details file `"drift-details.md"` — scripts/ci/drift_create_alert_issue.py:51
- Environment variable `"SERVER_URL"` — scripts/ci/drift_create_alert_issue.py:41
- Environment variable `"REPOSITORY"` — scripts/ci/drift_create_alert_issue.py:42
- Environment variable `"RUN_ID"` — scripts/ci/drift_create_alert_issue.py:43

## Outputs — required
- Issue body file `"issue-body.md"` — scripts/ci/drift_create_alert_issue.py:69
- Title `f"Agent Drift Detected - {now.strftime('%Y-%m-%d')}"` — scripts/ci/drift_create_alert_issue.py:72 passed to GitHub issue creation

## Invokes — required
- template .github/prompts/drift-alert-issue.md — scripts/ci/drift_create_alert_issue.py:35

## Invoked by — required
orphan

## Concepts named — required, verbatim
`drift-detection` — scripts/ci/drift_create_alert_issue.py:4 — used here
`ADR-006` — scripts/ci/drift_create_alert_issue.py:4 — used here
`ADR-035` — scripts/ci/drift_create_alert_issue.py:16 — used here
`RUNNER_TEMP` — scripts/ci/drift_create_alert_issue.py:10 — used here
`SERVER_URL` — scripts/ci/drift_create_alert_issue.py:11 — used here
`REPOSITORY` — scripts/ci/drift_create_alert_issue.py:12 — used here
`RUN_ID` — scripts/ci/drift_create_alert_issue.py:13 — used here
`GH_TOKEN` — scripts/ci/drift_create_alert_issue.py:14 — used here
`EXIT_OK` — scripts/ci/drift_create_alert_issue.py:31 — defined here
`EXIT_CONFIG` — scripts/ci/drift_create_alert_issue.py:32 — defined here
`EXIT_EXTERNAL` — scripts/ci/drift_create_alert_issue.py:33 — defined here

## Structure
(no markdown headings; flat python script)

## Scripts — required if type is script or the skill ships scripts
- path: `scripts/ci/drift_create_alert_issue.py`, language: Python 3, lines: 105
- documented invocation: `"Create a GitHub issue when agent drift is detected." — scripts/ci/drift_create_alert_issue.py:2`
- **executed:** yes
- actual command run: `python3 scripts/ci/drift_create_alert_issue.py`, stderr: `::error::drift details not found: drift-details.md`, **actual exit code**: 2
- documented exit codes: `"0 - issue created" — scripts/ci/drift_create_alert_issue.py:17`, `"2 - template or drift details missing" — scripts/ci/drift_create_alert_issue.py:18`, `"3 - GitHub issue creation failed" — scripts/ci/drift_create_alert_issue.py:19`; actual exit paths: `scripts/ci/drift_create_alert_issue.py:47` (`return EXIT_CONFIG` [2] when template missing), `scripts/ci/drift_create_alert_issue.py:54` (`return EXIT_CONFIG` [2] when details missing), `scripts/ci/drift_create_alert_issue.py:58` (`return EXIT_CONFIG` [2] when details empty), `scripts/ci/drift_create_alert_issue.py:91` (`return EXIT_EXTERNAL` [3] on launch error), `scripts/ci/drift_create_alert_issue.py:94` (`return EXIT_EXTERNAL` [3] on gh failure), `scripts/ci/drift_create_alert_issue.py:95` (`return EXIT_OK` [0]), `scripts/ci/drift_create_alert_issue.py:104` (`sys.exit(main())`)
- for validators/gates: automation action; safely exits 2 if input template or details are missing, and exits 3 if `gh issue create` fails
- does the output match what the documentation claims? yes, creates formatted issue body and calls gh issue create

## Defects — required
none

## Observations
Uses Python's `string.Template` for parameter substitution to prevent syntax collisions with markdown formatting.

## Context cost
3256 bytes, approximately 814 tokens.
