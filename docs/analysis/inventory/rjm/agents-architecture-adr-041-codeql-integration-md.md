---
package: rjm
path: .agents/architecture/ADR-041-codeql-integration.md
type: agent
bytes: 19271
unit: inv-rjm-16
in_scope_via: .agents/architecture/README.md
aliases: []
memo_inputs:
  - {path: .agents/architecture/ADR-041-codeql-integration.md, sha256: 6ccbe8a2a535418e33f8f759b7511e36df157bb78c387180d7c6edb35839810a}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# .agents/architecture/ADR-041-codeql-integration.md

## Purpose — required, verbatim
> "The repository requires static security analysis to detect vulnerabilities before they reach production." — .agents/architecture/ADR-041-codeql-integration.md:48

## Design intent — required
Defines a comprehensive multi-tier static security analysis strategy using GitHub CodeQL across CI/CD, local development, and originally an edit-time hook. Balances strict enforcement (Tier 1 CI gate) with fast developer feedback (Tier 2 on-demand local scans) and shared query configuration (`codeql-config.yml`) across languages (PowerShell, Python, Actions), while establishing an operational re-evaluation cadence that later retired Tier 3 due to negative ROI.

## Phase — required
none

## Inputs — required
CodeQL query packs (`codeql/powershell-queries`, `codeql/python-queries`, `codeql/actions-queries`), repository source files, shared configuration files (`.github/codeql/codeql-config.yml` and `codeql-config-quick.yml`), and git commit state for database cache invalidation.

## Outputs — required
Multi-tier static analysis architecture decision, SARIF security analysis reports uploaded to GitHub Security tab or generated locally, cached CodeQL databases in `.codeql/db/{language}/`, and console security findings.

## Invokes — required
- config .github/codeql/codeql-config.yml — .agents/architecture/ADR-041-codeql-integration.md:173
- config .github/codeql/codeql-config-quick.yml — .agents/architecture/ADR-041-codeql-integration.md:187
- doc .github/workflows/codeql-analysis.yml — .agents/architecture/ADR-041-codeql-integration.md:220
- config .vscode/tasks.json — .agents/architecture/ADR-041-codeql-integration.md:221
- skill codeql-scan — .agents/architecture/ADR-041-codeql-integration.md:30
- doc ADR-005 — .agents/architecture/ADR-041-codeql-integration.md:380
- doc ADR-006 — .agents/architecture/ADR-041-codeql-integration.md:381
- doc ADR-035 — .agents/architecture/ADR-041-codeql-integration.md:382
- doc docs/codeql-integration.md — .agents/architecture/ADR-041-codeql-integration.md:406
- doc docs/codeql-architecture.md — .agents/architecture/ADR-041-codeql-integration.md:407

## Invoked by — required
- doc .agents/architecture/README.md — .agents/architecture/README.md:118
- doc .agents/architecture/ADR-054-local-security-scanning.md — .agents/architecture/ADR-054-local-security-scanning.md:189
- doc docs/codeql-integration.md — docs/codeql-integration.md:503
- doc docs/codeql-architecture.md — docs/codeql-architecture.md:697
- doc .agents/critique/ADR-041-debate-log.md — .agents/critique/ADR-041-debate-log.md:3

## Concepts named — required, verbatim
- `CodeQL` — .agents/architecture/ADR-041-codeql-integration.md:12 — defined here
- `Multi-Tier Strategy` — .agents/architecture/ADR-041-codeql-integration.md:12 — defined here
- `Tier 1` — .agents/architecture/ADR-041-codeql-integration.md:29 — defined here
- `Tier 2` — .agents/architecture/ADR-041-codeql-integration.md:30 — defined here
- `Tier 3` — .agents/architecture/ADR-041-codeql-integration.md:21 — defined here
- `PostToolUse` — .agents/architecture/ADR-041-codeql-integration.md:21 — used here
- `dead-hook purge` — .agents/architecture/ADR-041-codeql-integration.md:23 — used here
- `vendored-hook ROI review` — .agents/architecture/ADR-041-codeql-integration.md:23 — used here
- `codeql-scan` — .agents/architecture/ADR-041-codeql-integration.md:30 — used here
- `SARIF` — .agents/architecture/ADR-041-codeql-integration.md:84 — used here
- `Database Caching Strategy` — .agents/architecture/ADR-041-codeql-integration.md:287 — defined here
- `Query Pack Selection` — .agents/architecture/ADR-041-codeql-integration.md:302 — defined here
- `Exit Code Standards` — .agents/architecture/ADR-041-codeql-integration.md:314 — used here
- `Performance Budgets` — .agents/architecture/ADR-041-codeql-integration.md:321 — defined here
- `Security Considerations` — .agents/architecture/ADR-041-codeql-integration.md:327 — defined here
- `Operational Status` — .agents/architecture/ADR-041-codeql-integration.md:334 — defined here
- `Post-Deployment Validation` — .agents/architecture/ADR-041-codeql-integration.md:346 — defined here
- `Platform Lock-in` — .agents/architecture/ADR-041-codeql-integration.md:369 — defined here

## Structure
- `# ADR-041: CodeQL Integration Multi-Tier Strategy` — .agents/architecture/ADR-041-codeql-integration.md:12
- `## Amendment 2026-07-21: Retire Tier 3 (automatic PostToolUse scan), simplify to two tiers` — .agents/architecture/ADR-041-codeql-integration.md:21
- `## Context and Problem Statement` — .agents/architecture/ADR-041-codeql-integration.md:46
- `## Decision Drivers` — .agents/architecture/ADR-041-codeql-integration.md:61
- `## Considered Options` — .agents/architecture/ADR-041-codeql-integration.md:74
- `### Option 1: CI-Only Integration` — .agents/architecture/ADR-041-codeql-integration.md:76
- `### Option 2: Local-Only Integration` — .agents/architecture/ADR-041-codeql-integration.md:94
- `### Option 3: IDE Extension Only` — .agents/architecture/ADR-041-codeql-integration.md:112
- `### Option 4: Multi-Tier with Shared Configuration (CHOSEN)` — .agents/architecture/ADR-041-codeql-integration.md:130
- `## Decision Outcome` — .agents/architecture/ADR-041-codeql-integration.md:154
- `### Rationale` — .agents/architecture/ADR-041-codeql-integration.md:158
- `### Architecture` — .agents/architecture/ADR-041-codeql-integration.md:167
- `### Language Support` — .agents/architecture/ADR-041-codeql-integration.md:192
- `### Implementation Components` — .agents/architecture/ADR-041-codeql-integration.md:204
- `### Trade-offs` — .agents/architecture/ADR-041-codeql-integration.md:229
- `## Consequences` — .agents/architecture/ADR-041-codeql-integration.md:248
- `### Positive` — .agents/architecture/ADR-041-codeql-integration.md:250
- `### Negative` — .agents/architecture/ADR-041-codeql-integration.md:261
- `### Neutral` — .agents/architecture/ADR-041-codeql-integration.md:274
- `## Implementation Notes` — .agents/architecture/ADR-041-codeql-integration.md:285
- `### Database Caching Strategy` — .agents/architecture/ADR-041-codeql-integration.md:287
- `### Query Pack Selection` — .agents/architecture/ADR-041-codeql-integration.md:302
- `### Exit Code Standards (ADR-035)` — .agents/architecture/ADR-041-codeql-integration.md:314
- `### Performance Budgets` — .agents/architecture/ADR-041-codeql-integration.md:321
- `### Security Considerations` — .agents/architecture/ADR-041-codeql-integration.md:327
- `### Operational Status` — .agents/architecture/ADR-041-codeql-integration.md:334
- `### Post-Deployment Validation` — .agents/architecture/ADR-041-codeql-integration.md:346
- `### Architectural Trade-offs Accepted` — .agents/architecture/ADR-041-codeql-integration.md:362
- `## Related Decisions` — .agents/architecture/ADR-041-codeql-integration.md:378
- `## References` — .agents/architecture/ADR-041-codeql-integration.md:388
- `### CodeQL Documentation` — .agents/architecture/ADR-041-codeql-integration.md:390
- `### GitHub Actions` — .agents/architecture/ADR-041-codeql-integration.md:395
- `### Standards` — .agents/architecture/ADR-041-codeql-integration.md:400
- `### Repository Documentation` — .agents/architecture/ADR-041-codeql-integration.md:405
- `## Validation` — .agents/architecture/ADR-041-codeql-integration.md:413

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
- `missing-path` · .agents/architecture/ADR-041-codeql-integration.md:207-213 · References PowerShell scripts (`Install-CodeQL.ps1`, `Install-CodeQLIntegration.ps1`, `Invoke-CodeQLScan.ps1`, `Test-CodeQLConfig.ps1`, `Get-CodeQLDiagnostics.ps1`) in `.codeql/scripts/` that were migrated to Python per ADR-042 and no longer exist as `.ps1` files.
- `missing-path` · .agents/architecture/ADR-041-codeql-integration.md:225-227 · References Pester test scripts (`tests/Install-CodeQL.Tests.ps1`, `tests/Invoke-CodeQLScan.Tests.ps1`, `tests/CodeQL-Integration.Tests.ps1`) that no longer exist in `tests/`.
- `doc-drift` · .agents/architecture/ADR-041-codeql-integration.md:38 · Live docs under `docs/` (`codeql-architecture.md`, `codeql-integration.md`, `codeql-rollout-checklist.md`) carry staleness banners noting pre-Python migration PowerShell code and retired Tier 3 hook references, tracked by issue #3296.

## Observations
Exemplary architectural governance pattern: incorporates a scheduled 6-month operational review clause that resulted in the formal retirement of Tier 3 (automatic PostToolUse hook) due to zero ROI and dead registration, reducing complexity to a sustainable two-tier strategy while preserving the full historical decision context.

## Context cost
19271 bytes, ~4800 tokens. Loads no external files directly when read as a decision record.
