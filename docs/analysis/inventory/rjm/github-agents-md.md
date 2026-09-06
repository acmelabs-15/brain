---
package: rjm
path: .github/AGENTS.md
type: doc
bytes: 20145
unit: inv-rjm-182
in_scope_via: README.md
aliases: []
memo_inputs:
  - {path: .github/AGENTS.md, sha256: 0e2bb069b704651214e2129c6d8b44543bcefe17f3878a3237f16602c4e3cd63}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# .github/AGENTS.md

## Purpose — required, verbatim
> "This document describes the automated CI/CD agents in GitHub Actions that enforce quality gates, run AI-powered reviews, and maintain repository health." — .github/AGENTS.md:3

## Design intent — required
Comprehensive operational architecture and governance document for GitHub Actions automated workflows in the repository. It defines event triggers, validation pipelines, AI-powered review workflows, concurrency coalescing rules (`cancel-in-progress: true`), composite review action interfaces (`ai-review/action.yml`), and ratchet baseline reconciliation under concurrent merges. Without it, CI maintainers and autonomous agents lack architectural visibility into how automated quality gates, CodeQL security scans, semantic drift detection, and PR reviews are orchestrated, monitored, and protected against race conditions and false-green bypasses.

## Phase — required
cross-phase

## Inputs — required
- Pull Request events, scheduled cron triggers (e.g. "Weekly (Monday 9 AM UTC)" — .github/AGENTS.md:139), and manual workflow_dispatch events (.github/AGENTS.md:19-21)
- Specification artifacts under `.agents/specs/**` (.github/AGENTS.md:85)
- Planning documents under `.agents/planning/**` (.github/AGENTS.md:198)
- Agent templates and source files under `templates/**` and `src/**` (.github/AGENTS.md:172)
- Markdown documentation files matching `**/*.md` (.github/AGENTS.md:185)
- Scripts under `scripts/**` and `build/**` (.github/AGENTS.md:224)
- Prompt templates under `.github/prompts/` (`spec-check-completeness.md`, `spec-trace-requirements.md` — .github/AGENTS.md:328-334)
- CodeQL configuration `.github/codeql/codeql-config.yml` (.github/AGENTS.md:244)
- Metrics and ratchets from `scripts/ci/ruff_count_ratchet.py` and `scripts/ci/taste_count_ratchet.py` (.github/AGENTS.md:490)

## Outputs — required
- Spec validation reports (.github/AGENTS.md:87)
- Status checks on PRs (.github/AGENTS.md:40, 56-61)
- GitHub Issues for detected semantic drift (.github/AGENTS.md:39, 55, 141)
- SARIF static security analysis files uploaded to GitHub Security tab (.github/AGENTS.md:239)
- Combined AI code review PR comments (.github/AGENTS.md:361)
- Workflow coalescing metrics in `.agents/metrics/workflow-coalescing.md` (.github/AGENTS.md:562)

## Invokes — required
- doc build/AGENTS.md — .github/AGENTS.md:577
- doc templates/AGENTS.md — .github/AGENTS.md:576
- doc scripts/AGENTS.md — .github/AGENTS.md:578
- script build/scripts/detect_agent_drift.py — .github/AGENTS.md:140
- script build/scripts/validate_path_normalization.py — .github/AGENTS.md:186
- script build/scripts/validate_planning_artifacts.py — .github/AGENTS.md:199
- script scripts/validation/run_plugin_version_bump_ci.py — .github/AGENTS.md:212
- script build/scripts/validate_plugin_version_bump.py — .github/AGENTS.md:212
- script scripts/ci/count_ratchet.py — .github/AGENTS.md:500
- script scripts/ci/ruff_count_ratchet.py — .github/AGENTS.md:490
- script scripts/ci/taste_count_ratchet.py — .github/AGENTS.md:490
- script .github/scripts/measure_workflow_coalescing.py — .github/AGENTS.md:73

## Invoked by — required
- doc build/AGENTS.md — build/AGENTS.md:425
- doc scripts/AGENTS.md — scripts/AGENTS.md:320
- script scripts/ci/count_ratchet.py — scripts/ci/count_ratchet.py:35
- skill src/copilot-cli/skills/agent-harness-reference/SKILL.md — src/copilot-cli/skills/agent-harness-reference/SKILL.md:51

## Concepts named — required, verbatim
- `ai-spec-validation.yml` — .github/AGENTS.md:25 — defined here
- `drift-detection.yml` — .github/AGENTS.md:29 — defined here
- `validate-generated-agents.yml` — .github/AGENTS.md:30 — defined here
- `validate-paths.yml` — .github/AGENTS.md:31 — defined here
- `validate-planning-artifacts.yml` — .github/AGENTS.md:32 — defined here
- `validate-plugin-version-bump.yml` — .github/AGENTS.md:33 — defined here
- `pytest.yml` — .github/AGENTS.md:34 — defined here
- `codeql-analysis.yml` — .github/AGENTS.md:35 — defined here
- `EARS format` — .github/AGENTS.md:92 — used here
- `test-codeql-integration.yml` — .github/AGENTS.md:275 — defined here
- `ai-review/action.yml` — .github/AGENTS.md:297 — defined here
- `concurrency` — .github/AGENTS.md:391 — used here
- `cancel-in-progress` — .github/AGENTS.md:391 — used here
- `coalescing effectiveness` — .github/AGENTS.md:77 — defined here
- `Ratchet Baselines and the Concurrent Merge Race` — .github/AGENTS.md:486 — defined here
- `count ratchets` — .github/AGENTS.md:489-490 — used here

## Structure
- # GitHub Actions Agents — .github/AGENTS.md:1
- ## Overview — .github/AGENTS.md:5
- ## Architecture — .github/AGENTS.md:15
- ## AI-Powered Workflow Agents — .github/AGENTS.md:69
- ### ai-spec-validation.yml — .github/AGENTS.md:79
- ### Optional Debouncing — .github/AGENTS.md:97
- ## Validation Workflow Agents — .github/AGENTS.md:131
- ### drift-detection.yml — .github/AGENTS.md:133
- ### validate-generated-agents.yml — .github/AGENTS.md:166
- ### validate-paths.yml — .github/AGENTS.md:179
- ### validate-planning-artifacts.yml — .github/AGENTS.md:192
- ### validate-plugin-version-bump.yml — .github/AGENTS.md:206
- ### pytest.yml — .github/AGENTS.md:218
- ### codeql-analysis.yml — .github/AGENTS.md:231
- ### test-codeql-integration.yml — .github/AGENTS.md:275
- ## Composite Actions — .github/AGENTS.md:295
- ### ai-review/action.yml — .github/AGENTS.md:297
- ## Prompt Templates — .github/AGENTS.md:326
- ## Data Flow — .github/AGENTS.md:337
- ## Error Handling — .github/AGENTS.md:370
- ## Security Considerations — .github/AGENTS.md:378
- ## Workflow Concurrency and Coalescing Behavior — .github/AGENTS.md:389
- ### How Concurrency Control Works — .github/AGENTS.md:393
- ### The "No Guarantee" Limitation — .github/AGENTS.md:404
- #### Race Condition Scenarios — .github/AGENTS.md:408
- ##### Scenario 1: Rapid Commits — .github/AGENTS.md:410
- ##### Scenario 2: Upstream Workflow Triggers — .github/AGENTS.md:428
- ### Mitigation Strategies — .github/AGENTS.md:443
- ### Cost Impact — .github/AGENTS.md:455
- ### When to Worry — .github/AGENTS.md:465
- ### Further Reading — .github/AGENTS.md:480
- ### Ratchet Baselines and the Concurrent Merge Race — .github/AGENTS.md:486
- ### Monitoring Coalescing Effectiveness — .github/AGENTS.md:536
- ## Monitoring — .github/AGENTS.md:566
- ## Related Documentation — .github/AGENTS.md:574

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
- Documents the concurrency mechanics of GitHub Actions workflow runs, emphasizing that `cancel-in-progress: true` does not guarantee sequential coalescing under rapid commit bursts (accepting a 5-10% parallel execution rate).
- Explains the subtle concurrent merge race problem with single-integer ratchet baselines (`count_ratchet.py`), where allowing counts lower than the baseline avoids creating false-positive merge conflicts on concurrent cleanup branches.

## Context cost
20145 bytes (~5036 tokens). Serves as complete operational guide for repository CI workflows.
