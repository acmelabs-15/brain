---
package: rjm
path: docs/codeql-rollout-checklist.md
type: doc
bytes: 13065
unit: inv-rjm-190
in_scope_via: .agents/architecture/ADR-041-codeql-integration.md
aliases: []
memo_inputs:
  - {path: docs/codeql-rollout-checklist.md, sha256: 72ef700c707d07c429d84a9776f758a2f8fc5f450b08fedcefe835e8b7376441}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# docs/codeql-rollout-checklist.md

## Purpose — required, verbatim
> "This checklist validates the current CodeQL integration. The implementation uses Python scripts in `.codeql/scripts/`, shared config files in `.github/codeql/`, and a two-tier strategy from ADR-041 as amended on 2026-07-21." — docs/codeql-rollout-checklist.md:3

## Design intent — required
Provides an operational gate and stage-by-stage verification checklist for rolling out, validating, monitoring, and rolling back CodeQL static security analysis in rjm. It establishes pre-rollout prerequisites (file existence, unit tests, documentation review), a 10-step sequential rollout procedure (running automated validation, verifying CLI, validating configurations, testing full and quick scans, exercising the `/codeql-scan` skill, testing CI/CD and integration workflows, and reviewing SARIF output), post-rollout monitoring, explicit success criteria across functional, performance, adoption, and quality dimensions, and graduated rollback procedures (immediate CI disable, partial local-only rollback, and full rollback). Without this checklist, engineering teams deploying or updating the security analysis pipeline would lack structured gating, risk regressions in PR status checks, and have no standardized operational recovery procedures if scanning disrupted developer velocity.

## Phase — required
none

## Inputs — required
- "Shared config exists: `.github/codeql/codeql-config.yml`" — docs/codeql-rollout-checklist.md:20
- "Quick config exists: `.github/codeql/codeql-config-quick.yml`" — docs/codeql-rollout-checklist.md:21
- "CI workflow exists: `.github/workflows/codeql-analysis.yml`" — docs/codeql-rollout-checklist.md:22
- "Integration test workflow exists: `.github/workflows/test-codeql-integration.yml`" — docs/codeql-rollout-checklist.md:23
- "Claude Code skill exists: `.claude/skills/codeql-scan/`" — docs/codeql-rollout-checklist.md:24
- "Tests passing" — docs/codeql-rollout-checklist.md:26

## Outputs — required
- "python3 .codeql/scripts/test_codeql_rollout.py --format json --ci" — docs/codeql-rollout-checklist.md:62
- "Databases are created under `.codeql/db`." — docs/codeql-rollout-checklist.md:123
- "Results are written under `.codeql/results`." — docs/codeql-rollout-checklist.md:124
- "SARIF is uploaded to `.codeql/results/<language>.sarif` in the workflow workspace." — docs/codeql-rollout-checklist.md:183
- "GitHub Security tab receives uploaded results." — docs/codeql-rollout-checklist.md:185
- "[ ] SUCCESS [ ] PARTIAL [ ] ROLLBACK" — docs/codeql-rollout-checklist.md:406

## Invokes — required
- script .codeql/scripts/install_codeql.py — docs/codeql-rollout-checklist.md:14
- script .codeql/scripts/install_codeql_integration.py — docs/codeql-rollout-checklist.md:15
- script .codeql/scripts/invoke_codeql_scan.py — docs/codeql-rollout-checklist.md:16
- script .codeql/scripts/test_codeql_config.py — docs/codeql-rollout-checklist.md:17
- script .codeql/scripts/get_codeql_diagnostics.py — docs/codeql-rollout-checklist.md:18
- script .codeql/scripts/test_codeql_rollout.py — docs/codeql-rollout-checklist.md:19
- config .github/codeql/codeql-config.yml — docs/codeql-rollout-checklist.md:20
- config .github/codeql/codeql-config-quick.yml — docs/codeql-rollout-checklist.md:21
- doc .github/workflows/codeql-analysis.yml — docs/codeql-rollout-checklist.md:22
- doc .github/workflows/test-codeql-integration.yml — docs/codeql-rollout-checklist.md:23
- skill .claude/skills/codeql-scan/ — docs/codeql-rollout-checklist.md:24
- doc docs/codeql-integration.md — docs/codeql-rollout-checklist.md:37
- doc docs/codeql-architecture.md — docs/codeql-rollout-checklist.md:38
- doc .agents/architecture/ADR-041-codeql-integration.md — docs/codeql-rollout-checklist.md:40
- doc .agents/architecture/ADR-042-python-migration-strategy.md — docs/codeql-rollout-checklist.md:41

## Invoked by — required
- doc docs/codeql-architecture.md — docs/codeql-architecture.md:707
- doc docs/codeql-integration.md — docs/codeql-integration.md:502
- doc docs/codeql-rollout-checklist.md — docs/codeql-rollout-checklist.md:39

## Concepts named — required, verbatim
- `Pre-Rollout` — docs/codeql-rollout-checklist.md:9 — defined here
- `Rollout Steps` — docs/codeql-rollout-checklist.md:51 — defined here
- `Post-Rollout` — docs/codeql-rollout-checklist.md:245 — defined here
- `Success Criteria` — docs/codeql-rollout-checklist.md:298 — defined here
- `Functional Criteria` — docs/codeql-rollout-checklist.md:302 — defined here
- `Performance Criteria` — docs/codeql-rollout-checklist.md:312 — defined here
- `Adoption Criteria` — docs/codeql-rollout-checklist.md:322 — defined here
- `Quality Criteria` — docs/codeql-rollout-checklist.md:329 — defined here
- `Rollback Plan` — docs/codeql-rollout-checklist.md:339 — defined here
- `Immediate Rollback` — docs/codeql-rollout-checklist.md:343 — defined here
- `Partial Rollback` — docs/codeql-rollout-checklist.md:353 — defined here
- `Full Rollback` — docs/codeql-rollout-checklist.md:361 — defined here
- `check-paths` — docs/codeql-rollout-checklist.md:180 — used here
- `codeql-scan` — docs/codeql-rollout-checklist.md:24 — used here
- `SARIF` — docs/codeql-rollout-checklist.md:183 — used here

## Structure
- `# CodeQL Integration Rollout Checklist` — docs/codeql-rollout-checklist.md:1
- `## Pre-Rollout` — docs/codeql-rollout-checklist.md:9
- `## Rollout Steps` — docs/codeql-rollout-checklist.md:51
- `### Step 1: Run Automated Deployment Validation` — docs/codeql-rollout-checklist.md:53
- `### Step 2: Verify CLI Installation` — docs/codeql-rollout-checklist.md:76
- `### Step 3: Validate Full Configuration` — docs/codeql-rollout-checklist.md:89
- `### Step 4: Validate Quick Configuration` — docs/codeql-rollout-checklist.md:102
- `### Step 5: Test Full Local Scan` — docs/codeql-rollout-checklist.md:115
- `### Step 6: Test Quick On-Demand Scan` — docs/codeql-rollout-checklist.md:135
- `### Step 7: Test Claude Code Skill` — docs/codeql-rollout-checklist.md:149
- `### Step 8: Test CI/CD Workflow` — docs/codeql-rollout-checklist.md:173
- `### Step 9: Test Integration Workflow` — docs/codeql-rollout-checklist.md:194
- `### Step 10: Review SARIF Output` — docs/codeql-rollout-checklist.md:221
- `## Post-Rollout` — docs/codeql-rollout-checklist.md:245
- `### Monitor First Production PR` — docs/codeql-rollout-checklist.md:247
- `### Verify SARIF Upload` — docs/codeql-rollout-checklist.md:256
- `### Validate Performance` — docs/codeql-rollout-checklist.md:265
- `### Collect Developer Feedback` — docs/codeql-rollout-checklist.md:286
- `## Success Criteria` — docs/codeql-rollout-checklist.md:298
- `### Functional Criteria` — docs/codeql-rollout-checklist.md:302
- `### Performance Criteria` — docs/codeql-rollout-checklist.md:312
- `### Adoption Criteria` — docs/codeql-rollout-checklist.md:322
- `### Quality Criteria` — docs/codeql-rollout-checklist.md:329
- `## Rollback Plan` — docs/codeql-rollout-checklist.md:339
- `### Immediate Rollback: CI Blocking Incorrectly` — docs/codeql-rollout-checklist.md:343
- `### Partial Rollback: Keep Local Scans Only` — docs/codeql-rollout-checklist.md:353
- `### Full Rollback` — docs/codeql-rollout-checklist.md:361
- `## Related Documentation` — docs/codeql-rollout-checklist.md:384
- `## Notes` — docs/codeql-rollout-checklist.md:394

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
- always-failing-gate · docs/codeql-rollout-checklist.md:55 · Step 1 requires `python3 .codeql/scripts/test_codeql_rollout.py --ci` to exit 0, but `.codeql/scripts/test_codeql_rollout.py:221` checks for the retired `PostToolUse` hook that was deleted, causing the automated rollout gate to always fail with exit code 1.
- missing-path · docs/codeql-rollout-checklist.md:47 · References GitHub issue `#3219` for deferred portable automatic scanning rebuild, which is an external tracker reference not present in the repository tree.
- doc-drift · docs/codeql-rollout-checklist.md:334 · Checklist states quality criteria: "Automatic edit-time scanning is described only as retired", yet the rollout validation script in Step 1 tests for its presence as an active component.

## Observations
- Structured release checklist covering pre-rollout, step-by-step rollout verification, post-rollout monitoring, explicit success criteria, and three-tiered rollback plan.
- Defines concrete quantitative performance targets: CI analysis <= 300s, local full scan <= 60s, local quick scan <= 60s, cache reuse faster than rebuild, false positive rate < 20%.
- Captures the operational friction caused by retiring a component in architecture documentation while failing to update deployment test scripts.

## Context cost
13065 bytes (~3266 tokens) for docs/codeql-rollout-checklist.md.
Total context cost when loaded with all referenced configs and Python scripts is ~89299 bytes (~22325 tokens).
