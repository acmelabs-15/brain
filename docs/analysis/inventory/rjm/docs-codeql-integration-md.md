---
package: rjm
path: docs/codeql-integration.md
type: doc
bytes: 13321
unit: inv-rjm-190
in_scope_via: .agents/architecture/ADR-041-codeql-integration.md
aliases: []
memo_inputs:
  - {path: docs/codeql-integration.md, sha256: 4db4d2e49e3e741bdb61f24d96a927e180249217611b99e31815ce8838560ac8}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# docs/codeql-integration.md

## Purpose — required, verbatim
> "This guide explains how to install, run, and troubleshoot the current CodeQL integration. The implementation uses Python scripts in `.codeql/scripts/`, shared configs in `.github/codeql/`, and a two-tier strategy from ADR-041 as amended on 2026-07-21." — docs/codeql-integration.md:3

## Design intent — required
Serves as the practical, developer-facing operational manual for installing, executing, configuring, and troubleshooting CodeQL static security analysis in rjm. It guides builders through one-command setup (`install_codeql_integration.py`), CLI installation, full and quick scan operations via `invoke_codeql_scan.py` and the `/codeql-scan` Claude Code skill, configuration customization (`codeql-config.yml` and `codeql-config-quick.yml`), diagnostic health checks, and common troubleshooting scenarios. Without this guide, engineers and agents attempting to use local security scanning or resolve CI security findings would lack step-by-step instructions, command syntax, flag documentation, and diagnostic procedures for the Python-first, two-tier architecture.

## Phase — required
none

## Inputs — required
- "Python 3." — docs/codeql-integration.md:81
- "Internet access for downloading the CodeQL CLI." — docs/codeql-integration.md:82
- "Disk space for the CLI, databases, and SARIF results." — docs/codeql-integration.md:83
- "Standard `tar` with gzip support." — docs/codeql-integration.md:84
- "Repository path: `.` or `CODEQL_REPO_PATH`." — docs/codeql-integration.md:61
- "Config path: `.github/codeql/codeql-config.yml` or `CODEQL_CONFIG_PATH`." — docs/codeql-integration.md:62
- "Database path: `.codeql/db` or `CODEQL_DATABASE_PATH`." — docs/codeql-integration.md:63
- "Results path: `.codeql/results` or `CODEQL_RESULTS_PATH`." — docs/codeql-integration.md:64

## Outputs — required
- "CodeQL databases under `.codeql/db`." — docs/codeql-integration.md:148
- "SARIF files under `.codeql/results`." — docs/codeql-integration.md:149
- "Console summary by default." — docs/codeql-integration.md:150
- "Local `--ci` mode exits 1 when findings are detected." — docs/codeql-integration.md:486

## Invokes — required
- script .codeql/scripts/install_codeql_integration.py — docs/codeql-integration.md:37
- script .codeql/scripts/invoke_codeql_scan.py — docs/codeql-integration.md:56
- config .github/codeql/codeql-config.yml — docs/codeql-integration.md:62
- config .github/codeql/codeql-config-quick.yml — docs/codeql-integration.md:73
- script .codeql/scripts/install_codeql.py — docs/codeql-integration.md:89
- script .codeql/scripts/test_codeql_config.py — docs/codeql-integration.md:125
- script .codeql/scripts/get_codeql_diagnostics.py — docs/codeql-integration.md:187
- script .claude/skills/codeql-scan/scripts/invoke_codeql_scan.py — docs/codeql-integration.md:201
- doc .github/workflows/codeql-analysis.yml — docs/codeql-integration.md:233
- doc ./codeql-architecture.md — docs/codeql-integration.md:501
- doc ./codeql-rollout-checklist.md — docs/codeql-integration.md:502
- doc .agents/architecture/ADR-041-codeql-integration.md — docs/codeql-integration.md:503
- doc .agents/architecture/ADR-042-python-migration-strategy.md — docs/codeql-integration.md:504

## Invoked by — required
- doc .agents/architecture/ADR-041-codeql-integration.md — .agents/architecture/ADR-041-codeql-integration.md:406
- doc docs/codeql-architecture.md — docs/codeql-architecture.md:706
- doc docs/codeql-rollout-checklist.md — docs/codeql-rollout-checklist.md:37
- doc docs/codeql-rollout-checklist.md — docs/codeql-rollout-checklist.md:386

## Concepts named — required, verbatim
- `CodeQL` — docs/codeql-integration.md:11 — defined here
- `Tier 1 (CI/CD)` — docs/codeql-integration.md:13 — defined here
- `Tier 2 (Local, on-demand)` — docs/codeql-integration.md:14 — defined here
- `codeql-scan` — docs/codeql-integration.md:14 — used here
- `invoke_codeql_scan.py` — docs/codeql-integration.md:14 — used here
- `One-Command Setup` — docs/codeql-integration.md:34 — defined here
- `Full Scan` — docs/codeql-integration.md:53 — defined here
- `Quick Scan` — docs/codeql-integration.md:67 — defined here
- `check-paths` — docs/codeql-integration.md:245 — used here
- `Shared Configuration` — docs/codeql-integration.md:285 — defined here
- `Quick Scan Configuration` — docs/codeql-integration.md:300 — defined here
- `database caching` — docs/codeql-integration.md:467 — defined here
- `SARIF` — docs/codeql-integration.md:13 — used here

## Structure
- `# CodeQL Integration Guide` — docs/codeql-integration.md:1
- `## Overview` — docs/codeql-integration.md:9
- `## Quick Start` — docs/codeql-integration.md:32
- `### One-Command Setup` — docs/codeql-integration.md:34
- `### Full Scan` — docs/codeql-integration.md:53
- `### Quick Scan` — docs/codeql-integration.md:67
- `## Installation Guide` — docs/codeql-integration.md:77
- `### Prerequisites` — docs/codeql-integration.md:79
- `### 1. Install CodeQL CLI` — docs/codeql-integration.md:86
- `### 2. Configure Integration` — docs/codeql-integration.md:106
- `### 3. Verify Configuration` — docs/codeql-integration.md:122
- `## Usage Examples` — docs/codeql-integration.md:136
- `### Full Repository Scan` — docs/codeql-integration.md:138
- `### Quick Targeted Scan` — docs/codeql-integration.md:152
- `### Language-Specific Scan` — docs/codeql-integration.md:160
- `### Output Formats` — docs/codeql-integration.md:168
- `### CI Behavior` — docs/codeql-integration.md:176
- `### Diagnostics` — docs/codeql-integration.md:184
- `### Claude Code Skill` — docs/codeql-integration.md:192
- `## Two-Tier Integration` — docs/codeql-integration.md:208
- `### Tier 1: CI/CD Integration` — docs/codeql-integration.md:231
- `### Tier 2: Local On-Demand Scanning` — docs/codeql-integration.md:253
- `### Retired Automatic Edit-Time Scanning` — docs/codeql-integration.md:271
- `## Configuration` — docs/codeql-integration.md:283
- `### Shared Configuration` — docs/codeql-integration.md:285
- `### Quick Scan Configuration` — docs/codeql-integration.md:300
- `### Customization` — docs/codeql-integration.md:314
- `#### Adding New Languages` — docs/codeql-integration.md:316
- `#### Adding Custom Queries` — docs/codeql-integration.md:331
- `#### Excluding Paths` — docs/codeql-integration.md:347
- `## Troubleshooting` — docs/codeql-integration.md:363
- `### CLI Not Found` — docs/codeql-integration.md:365
- `### Configuration Validation Failed` — docs/codeql-integration.md:380
- `### Scan Timeout` — docs/codeql-integration.md:394
- `### Cache Problems` — docs/codeql-integration.md:409
- `### Retired Hook Questions` — docs/codeql-integration.md:425
- `### Database Creation Failed` — docs/codeql-integration.md:433
- `## FAQ` — docs/codeql-integration.md:451
- `### When should I use full scan vs quick scan?` — docs/codeql-integration.md:453
- `### How does database caching work?` — docs/codeql-integration.md:467
- `### What languages are supported?` — docs/codeql-integration.md:475
- `### What happens if scan finds vulnerabilities?` — docs/codeql-integration.md:483
- `### How do I exclude false positives?` — docs/codeql-integration.md:489
- `### Why is automatic edit-time scanning retired?` — docs/codeql-integration.md:493
- `## Related Documentation` — docs/codeql-integration.md:499
- `## Support` — docs/codeql-integration.md:508

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
- missing-path · docs/codeql-integration.md:5 · References GitHub issue `#3219` for deferred portable automatic edit-time scanning rebuild, which is an external issue tracker reference rather than a repository path.
- missing-path · docs/codeql-integration.md:103 · Example runs `.codeql/cli/codeql version`, but `.codeql/cli/` is gitignored and absent in fresh checkouts until `install_codeql.py` is downloaded.

## Observations
- Clear, practical guide focused on developer workflow ergonomics and troubleshooting common failure modes.
- Distinguishes between full CI-equivalent scans and fast local iterations using `--quick-scan --use-cache`.
- Incorporates diagnostic health check routines via `get_codeql_diagnostics.py` for structured triage of local environment problems.

## Context cost
13321 bytes (~3330 tokens) for docs/codeql-integration.md.
Total context cost when loaded with all referenced configs and Python scripts is ~89555 bytes (~22388 tokens).
