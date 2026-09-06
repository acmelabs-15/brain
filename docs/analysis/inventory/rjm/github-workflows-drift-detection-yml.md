---
package: rjm
path: .github/workflows/drift-detection.yml
type: config
bytes: 5252
unit: inv-rjm-185
in_scope_via: templates/README.md
aliases: []
memo_inputs:
  - {path: .github/workflows/drift-detection.yml, sha256: 7967e29a891baf74a8bb2f7f9b4390663104cae39ab3baaa44b3fcda04f1cbdc}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# .github/workflows/drift-detection.yml

## Purpose — required, verbatim
> "# Detects drift between Claude agents and shared templates." — .github/workflows/drift-detection.yml:3

## Design intent — required
Automates weekly continuous integration monitoring for drift between canonical agent specifications and generated platform templates. Scheduled to run Mondays at 09:00 UTC (and manually triggerable via `workflow_dispatch`), the workflow executes on cost-optimized ARM runners per ADR-025 (`ubuntu-24.04-arm`). It runs drift detection scripts, emits a `K2` generator-regression kill-criteria event and weekly telemetry rollup per REQ-008-09, uploads drift event logs as artifacts, and automatically creates or updates tracked GitHub issues labeled `drift-detected`. It fails the workflow step if drift is detected, alerting maintainers. Without this workflow, semantic divergences between Claude Code agent definitions and downstream shared templates could accumulate undetected.

## Phase — required
cross-phase

## Inputs — required
- Scheduled cron trigger: `0 9 * * 1` (Mondays 09:00 UTC)
- Manual workflow trigger: `workflow_dispatch`
- Repository secrets and environment tokens: `GITHUB_TOKEN` for issue querying and creation

## Outputs — required
- GitHub issue labeled `drift-detected` created or updated with latest drift details
- Kill-criteria telemetry event emitted to `.agents/metrics/drift-events.jsonl` and uploaded as workflow artifact `drift-events-${{ github.run_id }}`
- Telemetry summary appended to `$GITHUB_STEP_SUMMARY`
- Step failure with error annotation `::error::agent drift detected` if drift occurs

## Invokes — required
- script scripts/ci/drift_run_detection.py — .github/workflows/drift-detection.yml:33
- script scripts/metrics/kill_criteria.py — .github/workflows/drift-detection.yml:44
- script scripts/ci/drift_collect_details.py — .github/workflows/drift-detection.yml:79
- script scripts/ci/drift_create_alert_issue.py — .github/workflows/drift-detection.yml:98
- script scripts/ci/drift_write_summary.py — .github/workflows/drift-detection.yml:134

## Invoked by — required
- doc templates/README.md — templates/README.md:188
- doc src/copilot-cli/skills/ai-agents-change-control/SKILL.md — src/copilot-cli/skills/ai-agents-change-control/SKILL.md:69
- doc src/copilot-cli/skills/ai-agents-debugging-playbook/SKILL.md — src/copilot-cli/skills/ai-agents-debugging-playbook/SKILL.md:86

## Concepts named — required, verbatim
- `Agent Drift Detection` — .github/workflows/drift-detection.yml:10 — defined here
- `ADR-025` — .github/workflows/drift-detection.yml:21 — used here
- `actions/checkout@0c366fd6a839edf440554fa01a7085ccba70ac98` — .github/workflows/drift-detection.yml:29 — used here
- `K2` — .github/workflows/drift-detection.yml:35 — used here
- `REQ-008-09` — .github/workflows/drift-detection.yml:35 — used here
- `ADR-006` — .github/workflows/drift-detection.yml:37 — used here
- `actions/upload-artifact@043fb46d1a93c77aae656e7c1c64a875d1fc6a0a` — .github/workflows/drift-detection.yml:69 — used here

## Structure
none

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
Exemplifies ADR-006 (thin workflows, testable modules) by delegating all detection, issue creation, and summary reporting logic to discrete Python scripts under `scripts/ci/` and `scripts/metrics/`. Pins third-party GitHub Actions to immutable full commit SHAs for supply chain security.

## Context cost
5252 bytes, approximately 1310 tokens.
