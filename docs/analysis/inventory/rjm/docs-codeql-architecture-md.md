---
package: rjm
path: docs/codeql-architecture.md
type: doc
bytes: 22333
unit: inv-rjm-190
in_scope_via: .agents/architecture/ADR-041-codeql-integration.md
aliases: []
memo_inputs:
  - {path: docs/codeql-architecture.md, sha256: ff63b856aa506fee02c6d7651e4f059622e7a415a714b9e05b49d4fd081c8b93}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# docs/codeql-architecture.md

## Purpose — required, verbatim
> "This document explains the current CodeQL security analysis architecture. The implementation is Python-first per ADR-042, and the operational strategy is two-tier per ADR-041 as amended on 2026-07-21." — docs/codeql-architecture.md:5

## Design intent — required
Explains the end-to-end static security analysis architecture for the repository following the transition from a pre-Python PowerShell setup and the retirement of the automatic edit-time hook on 2026-07-21. It specifies the two-tier operational strategy (Tier 1 blocking CI/CD gate on GitHub Actions and Tier 2 local on-demand scanning), shared query configuration under `.github/codeql/`, performance budgets (300s CI, 60s local), database caching patterns, and testing/extension contracts. Without this document, engineers and automated agents would lack an authoritative architectural blueprint for how CodeQL CLI, configuration files, Python orchestration scripts, CI workflows, and SARIF security reporting integrate, leading to architectural drift and configuration duplication between local developer scans and CI gates.

## Phase — required
none

## Inputs — required
- "Repository root." — docs/codeql-architecture.md:260
- "CodeQL config file." — docs/codeql-architecture.md:261
- "Database cache directory." — docs/codeql-architecture.md:262
- "SARIF and result output directory." — docs/codeql-architecture.md:263
- "Languages to scan." — docs/codeql-architecture.md:264
- "packs:" — docs/codeql-architecture.md:330
- "queries:" — docs/codeql-architecture.md:334
- "query-filters:" — docs/codeql-architecture.md:337

## Outputs — required
- "Uploads SARIF to the GitHub Security tab." — docs/codeql-architecture.md:80
- "Blocks PRs when the blocking issue check fails." — docs/codeql-architecture.md:82
- "Writes local databases to `.codeql/db` by default." — docs/codeql-architecture.md:126
- "Writes local results to `.codeql/results` by default." — docs/codeql-architecture.md:127
- "JSON output" — docs/codeql-architecture.md:302
- "Return exit code" — docs/codeql-architecture.md:290

## Invokes — required
- script .codeql/scripts/invoke_codeql_scan.py — docs/codeql-architecture.md:117
- config .github/codeql/codeql-config.yml — docs/codeql-architecture.md:450
- config .github/codeql/codeql-config-quick.yml — docs/codeql-architecture.md:139
- doc .github/workflows/codeql-analysis.yml — docs/codeql-architecture.md:74
- skill .claude/skills/codeql-scan/ — docs/codeql-architecture.md:116
- script .codeql/scripts/install_codeql.py — docs/codeql-architecture.md:170
- script .codeql/scripts/install_codeql_integration.py — docs/codeql-architecture.md:211
- script .codeql/scripts/test_codeql_config.py — docs/codeql-architecture.md:367
- script .codeql/scripts/get_codeql_diagnostics.py — docs/codeql-architecture.md:389
- script .codeql/scripts/test_codeql_rollout.py — docs/codeql-architecture.md:418
- doc .github/workflows/test-codeql-integration.yml — docs/codeql-architecture.md:613
- doc .agents/architecture/ADR-041-codeql-integration.md — docs/codeql-architecture.md:697
- doc .agents/architecture/ADR-042-python-migration-strategy.md — docs/codeql-architecture.md:698
- doc .agents/architecture/ADR-006-thin-workflows-testable-modules.md — docs/codeql-architecture.md:699
- doc ./codeql-integration.md — docs/codeql-architecture.md:706
- doc ./codeql-rollout-checklist.md — docs/codeql-architecture.md:707

## Invoked by — required
- doc .agents/architecture/ADR-041-codeql-integration.md — .agents/architecture/ADR-041-codeql-integration.md:407
- doc docs/codeql-integration.md — docs/codeql-integration.md:501
- doc docs/codeql-rollout-checklist.md — docs/codeql-rollout-checklist.md:38
- doc docs/codeql-rollout-checklist.md — docs/codeql-rollout-checklist.md:387

## Concepts named — required, verbatim
- `Two-Tier Strategy` — docs/codeql-architecture.md:13 — defined here
- `Tier 1: CI/CD Pipeline` — docs/codeql-architecture.md:19 — defined here
- `Tier 2: Local On-Demand` — docs/codeql-architecture.md:29 — defined here
- `check-paths` — docs/codeql-architecture.md:20, 84 — used here
- `codeql-scan` — docs/codeql-architecture.md:30 — used here
- `CodeQL CLI` — docs/codeql-architecture.md:49 — used here
- `Timeout budget` — docs/codeql-architecture.md:93 — defined here
- `security-extended` — docs/codeql-architecture.md:100 — used here
- `Quick scan` — docs/codeql-architecture.md:131 — defined here
- `Shared Configuration Pattern` — docs/codeql-architecture.md:439 — defined here
- `Database Caching Strategy` — docs/codeql-architecture.md:482 — defined here
- `Targeted Query Selection` — docs/codeql-architecture.md:499 — defined here
- `Graceful Degradation` — docs/codeql-architecture.md:518 — defined here
- `Query Pack Trust Model` — docs/codeql-architecture.md:633 — defined here
- `SARIF` — docs/codeql-architecture.md:651 — used here

## Structure
- `# CodeQL Integration Architecture` — docs/codeql-architecture.md:1
- `## Purpose` — docs/codeql-architecture.md:3
- `## Architecture Overview` — docs/codeql-architecture.md:11
- `### Two-Tier Strategy` — docs/codeql-architecture.md:13
- `### Component Relationships` — docs/codeql-architecture.md:45
- `## Two-Tier Strategy Rationale` — docs/codeql-architecture.md:68
- `### Tier 1: CI/CD Integration` — docs/codeql-architecture.md:70
- `### Tier 2: Local On-Demand Scanning` — docs/codeql-architecture.md:110
- `### Retired Automatic Edit-Time Scanning` — docs/codeql-architecture.md:156
- `## Component Details` — docs/codeql-architecture.md:164
- `### Installation Components` — docs/codeql-architecture.md:166
- `#### install_codeql.py` — docs/codeql-architecture.md:168
- `#### install_codeql_integration.py` — docs/codeql-architecture.md:209
- `### Scanning Component` — docs/codeql-architecture.md:233
- `#### invoke_codeql_scan.py` — docs/codeql-architecture.md:235
- `### Configuration Components` — docs/codeql-architecture.md:309
- `#### Shared Configuration` — docs/codeql-architecture.md:311
- `#### Quick Configuration` — docs/codeql-architecture.md:344
- `### Validation Component` — docs/codeql-architecture.md:363
- `#### test_codeql_config.py` — docs/codeql-architecture.md:365
- `### Diagnostic Component` — docs/codeql-architecture.md:385
- `#### get_codeql_diagnostics.py` — docs/codeql-architecture.md:387
- `### Rollout Validation Component` — docs/codeql-architecture.md:414
- `#### test_codeql_rollout.py` — docs/codeql-architecture.md:416
- `## Configuration Management` — docs/codeql-architecture.md:437
- `### Shared Configuration Pattern` — docs/codeql-architecture.md:439
- `### Validation Workflow` — docs/codeql-architecture.md:461
- `## Performance Optimization` — docs/codeql-architecture.md:480
- `### Database Caching Strategy` — docs/codeql-architecture.md:482
- `### Targeted Query Selection` — docs/codeql-architecture.md:499
- `### Timeout Budgets` — docs/codeql-architecture.md:509
- `### Graceful Degradation` — docs/codeql-architecture.md:518
- `## Extension Points` — docs/codeql-architecture.md:534
- `### Adding New Languages` — docs/codeql-architecture.md:536
- `### Adding Custom Query Packs` — docs/codeql-architecture.md:551
- `### Integrating Other Security Tools` — docs/codeql-architecture.md:563
- `### Automatic Edit-Time Rebuild` — docs/codeql-architecture.md:577
- `## Testing Strategy` — docs/codeql-architecture.md:589
- `### Unit Tests` — docs/codeql-architecture.md:591
- `### Integration Tests` — docs/codeql-architecture.md:611
- `### CI Validation` — docs/codeql-architecture.md:620
- `## Security Considerations` — docs/codeql-architecture.md:631
- `### Query Pack Trust Model` — docs/codeql-architecture.md:633
- `### SARIF Output Handling` — docs/codeql-architecture.md:651
- `### Database Storage Security` — docs/codeql-architecture.md:664
- `### Workflow Permissions` — docs/codeql-architecture.md:680
- `## Related Decisions` — docs/codeql-architecture.md:695
- `## References` — docs/codeql-architecture.md:701

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
- script-bug · .codeql/scripts/test_codeql_config.py:258 · `test_codeql_config.py` computes repo root as `Path(config_path).parent.parent`, resolving `.github/codeql/codeql-config.yml` to `.github` instead of repository root, generating false path existence warnings.
- doc-drift · docs/codeql-architecture.md:5 · Architecture document specifies two-tier operational strategy with edit-time hook retired, but companion test script `.codeql/scripts/test_codeql_rollout.py:221` still asserts that `PostToolUse hook exists`.
- missing-path · docs/codeql-architecture.md:7 · References GitHub issue `#3219` for deferred portable automatic scanning rebuild, which is an external issue tracker reference rather than a repository path.

## Observations
- Comprehensive architecture specification with sequence diagrams and flowcharts for two-tier CodeQL scanning.
- Accurately captures the retirement of Tier 3 (automatic PostToolUse hook) on 2026-07-21 per ADR-041 amendment due to negative ROI and unregistered execution.
- Coordinates shared configuration between CI (`.github/workflows/codeql-analysis.yml`) and local tools (`invoke_codeql_scan.py` and `codeql-scan` skill) via `.github/codeql/codeql-config.yml` and `codeql-config-quick.yml`.
- Outlines clear performance budgets (300 seconds for CI/CD analysis, 60 seconds for local on-demand scans).

## Context cost
22333 bytes (~5583 tokens) for docs/codeql-architecture.md.
Total context cost when loaded with all referenced configs and Python scripts is ~98567 bytes (~24641 tokens).
