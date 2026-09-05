---
package: rjm
path: .agents/security/infrastructure-file-patterns.md
type: agent
bytes: 8358
unit: inv-rjm-59
in_scope_via: .agents/architecture/README.md
aliases: []
memo_inputs:
  - {path: .agents/security/infrastructure-file-patterns.md, sha256: 6542b02e64e5579e3b77547280d44fdc9e01fa2e55f36ef2cfcf793f43b65916}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# .agents/security/infrastructure-file-patterns.md

## Purpose — required, verbatim
> "This document defines file patterns that indicate infrastructure or security-critical code changes. Changes matching these patterns should trigger security agent review." — .agents/security/infrastructure-file-patterns.md:5

## Design intent — required
Categorizes sensitive repository file patterns into risk tiers (Critical, High, Medium, Low) spanning CI/CD workflows, Git hooks, build scripts, containers, authentication modules, configuration files, and IaC, providing a deterministic detection algorithm to automatically trigger security agent review during PRs and pre-commit checks.

## Phase — required
cross-phase

## Inputs — required
- "changed_files" — .agents/security/infrastructure-file-patterns.md:162
- "critical_patterns" — .agents/security/infrastructure-file-patterns.md:167
- "high_patterns" — .agents/security/infrastructure-file-patterns.md:182

## Outputs — required
- "should_trigger_security_review" — .agents/security/infrastructure-file-patterns.md:162
- "(should_trigger, highest_risk, matches)" — .agents/security/infrastructure-file-patterns.md:203

## Invokes — required
- doc static-analysis-checklist.md — .agents/security/infrastructure-file-patterns.md:222
- doc security-best-practices.md — .agents/security/infrastructure-file-patterns.md:223
- doc orchestrator-routing-algorithm.md — .agents/security/infrastructure-file-patterns.md:224

## Invoked by — required
- doc secret-detection-patterns.md — .agents/security/secret-detection-patterns.md:259

## Concepts named — required, verbatim
`Infrastructure File Patterns` — .agents/security/infrastructure-file-patterns.md:1 — defined here
`CI/CD Pipelines` — .agents/security/infrastructure-file-patterns.md:9 — used here
`Git Hooks` — .agents/security/infrastructure-file-patterns.md:23 — used here
`Build Scripts` — .agents/security/infrastructure-file-patterns.md:36 — used here
`Container Configuration` — .agents/security/infrastructure-file-patterns.md:53 — used here
`Authentication/Authorization Code` — .agents/security/infrastructure-file-patterns.md:67 — used here
`API Controllers` — .agents/security/infrastructure-file-patterns.md:81 — used here
`Configuration Files` — .agents/security/infrastructure-file-patterns.md:90 — used here
`Infrastructure as Code` — .agents/security/infrastructure-file-patterns.md:103 — used here
`Package Management` — .agents/security/infrastructure-file-patterns.md:116 — used here
`Secrets and Certificates` — .agents/security/infrastructure-file-patterns.md:137 — used here
`Risk Level Definitions` — .agents/security/infrastructure-file-patterns.md:150 — defined here
`should_trigger_security_review` — .agents/security/infrastructure-file-patterns.md:162 — defined here

## Structure
# Infrastructure File Patterns — .agents/security/infrastructure-file-patterns.md:1
## Purpose — .agents/security/infrastructure-file-patterns.md:3
## Pattern Categories — .agents/security/infrastructure-file-patterns.md:7
### Category 1: CI/CD Pipelines (Critical) — .agents/security/infrastructure-file-patterns.md:9
### Category 2: Git Hooks (Critical) — .agents/security/infrastructure-file-patterns.md:23
### Category 3: Build Scripts (High) — .agents/security/infrastructure-file-patterns.md:36
### Category 4: Container Configuration (High) — .agents/security/infrastructure-file-patterns.md:53
### Category 5: Authentication/Authorization Code (Critical) — .agents/security/infrastructure-file-patterns.md:67
### Category 6: API Controllers (High) — .agents/security/infrastructure-file-patterns.md:81
### Category 7: Configuration Files (High) — .agents/security/infrastructure-file-patterns.md:90
### Category 8: Infrastructure as Code (High) — .agents/security/infrastructure-file-patterns.md:103
### Category 9: Package Management (Medium) — .agents/security/infrastructure-file-patterns.md:116
### Category 10: Secrets and Certificates (Critical) — .agents/security/infrastructure-file-patterns.md:137
## Risk Level Definitions — .agents/security/infrastructure-file-patterns.md:150
## Detection Algorithm — .agents/security/infrastructure-file-patterns.md:159
## Integration Points — .agents/security/infrastructure-file-patterns.md:206
### Pre-commit Hook — .agents/security/infrastructure-file-patterns.md:208
### PR Template — .agents/security/infrastructure-file-patterns.md:212
### Orchestrator Routing — .agents/security/infrastructure-file-patterns.md:216
## Related Documents — .agents/security/infrastructure-file-patterns.md:220

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
Defines 10 distinct categories of file patterns mapped to 4 risk levels (Critical, High, Medium, Low). Critical and High trigger automated security review via Python function `should_trigger_security_review`. Explicitly enumerates lefthook variant configurations (`lefthook.{yml,yaml,json,jsonc,toml}`, `lefthook-local`, `.config/lefthook`). Integrated into pre-commit hooks, PR templates, and orchestrator routing.

## Context cost
8358 bytes, approximately 2090 tokens.
