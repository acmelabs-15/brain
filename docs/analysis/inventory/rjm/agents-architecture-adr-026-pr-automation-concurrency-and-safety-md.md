---
package: rjm
path: .agents/architecture/ADR-026-pr-automation-concurrency-and-safety.md
type: agent
bytes: 12173
unit: inv-rjm-11
in_scope_via: .agents/architecture/README.md
aliases: []
memo_inputs:
  - {path: .agents/architecture/ADR-026-pr-automation-concurrency-and-safety.md, sha256: 48b83cec30a7d8ce92b0d31dd5a2b30f5a5ac4331c035e9420b431f16933e392}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# .agents/architecture/ADR-026-pr-automation-concurrency-and-safety.md

## Purpose — required, verbatim
> "The PR maintenance automation script (`scripts/Invoke-PRMaintenance.ps1`) requires architectural decisions about:" — .agents/architecture/ADR-026-pr-automation-concurrency-and-safety.md:20

## Design intent — required
Establishes concurrency, rate limiting, untrusted git input validation, and deployment controls for automated pull request maintenance workflows in GitHub Actions. Replaces file-based mutexes with workflow-level concurrency groups and cancellation, introduces multi-resource rate limit inspection against GitHub API quotas, validates branch names against command injection and path traversal patterns, and documents best-effort coalescing trade-offs with an optional composite action debouncing mechanism.

## Phase — required
none

## Inputs — required
Branch names and worktree paths from GitHub API and pull request events, GitHub API rate limit status (`gh api rate_limit`), workflow dispatch inputs (`enable_debouncing`, `pr_number`), and pull request event payloads (`github.event.pull_request.number`).

## Outputs — required
Workflow concurrency group configuration (`concurrency:`), reusable debouncing action configuration (`.github/actions/workflow-debounce/action.yml`), rate-limiting validation function `Test-RateLimitSafe`, branch validation function `Test-SafeBranchName`, and PR maintenance automation controls.

## Invokes — required
- script scripts/Invoke-PRMaintenance.ps1 — .agents/architecture/ADR-026-pr-automation-concurrency-and-safety.md:20
- config .github/actions/workflow-debounce/action.yml — .agents/architecture/ADR-026-pr-automation-concurrency-and-safety.md:235
- script Measure-WorkflowCoalescing.ps1 — .agents/architecture/ADR-026-pr-automation-concurrency-and-safety.md:303
- doc ADR-005 — .agents/architecture/ADR-026-pr-automation-concurrency-and-safety.md:318
- doc ADR-006 — .agents/architecture/ADR-026-pr-automation-concurrency-and-safety.md:319
- doc ADR-009 — .agents/architecture/ADR-026-pr-automation-concurrency-and-safety.md:320
- doc .agents/security/SR-002-pr-automation-security-review.md — .agents/architecture/ADR-026-pr-automation-concurrency-and-safety.md:324
- doc .agents/archive/planning/pr-automation-implementation-plan.md — .agents/architecture/ADR-026-pr-automation-concurrency-and-safety.md:325
- doc .agents/devops/pr-automation-script-review.md — .agents/architecture/ADR-026-pr-automation-concurrency-and-safety.md:326

## Invoked by — required
- doc .agents/architecture/README.md — .agents/architecture/README.md:110
- doc docs/agent-metrics.md — docs/agent-metrics.md:334

## Concepts named — required, verbatim
- `concurrency` — .agents/architecture/ADR-026-pr-automation-concurrency-and-safety.md:43 — used here
- `cancel-in-progress` — .agents/architecture/ADR-026-pr-automation-concurrency-and-safety.md:45 — used here
- `Test-RateLimitSafe` — .agents/architecture/ADR-026-pr-automation-concurrency-and-safety.md:64 — defined here
- `Test-SafeBranchName` — .agents/architecture/ADR-026-pr-automation-concurrency-and-safety.md:100 — defined here
- `DryRun` — .agents/architecture/ADR-026-pr-automation-concurrency-and-safety.md:118 — used here
- `BOT_PAT` — .agents/architecture/ADR-026-pr-automation-concurrency-and-safety.md:136 — used here
- `dorny/paths-filter` — .agents/architecture/ADR-026-pr-automation-concurrency-and-safety.md:188 — used here
- `workflow-debounce` — .agents/architecture/ADR-026-pr-automation-concurrency-and-safety.md:235 — used here
- `Measure-WorkflowCoalescing.ps1` — .agents/architecture/ADR-026-pr-automation-concurrency-and-safety.md:303 — used here

## Structure
- `# ADR-026: PR Automation Concurrency and Safety Controls` — .agents/architecture/ADR-026-pr-automation-concurrency-and-safety.md:12
- `## Status` — .agents/architecture/ADR-026-pr-automation-concurrency-and-safety.md:14
- `## Context` — .agents/architecture/ADR-026-pr-automation-concurrency-and-safety.md:18
- `## Decision` — .agents/architecture/ADR-026-pr-automation-concurrency-and-safety.md:29
- `### Decision 1: Workflow-Level Concurrency Control` — .agents/architecture/ADR-026-pr-automation-concurrency-and-safety.md:31
- `### Decision 2: Multi-Resource Rate Limiting` — .agents/architecture/ADR-026-pr-automation-concurrency-and-safety.md:53
- `### Decision 3: Input Validation for Git Operations` — .agents/architecture/ADR-026-pr-automation-concurrency-and-safety.md:89
- `### Decision 4: DryRun-First Deployment` — .agents/architecture/ADR-026-pr-automation-concurrency-and-safety.md:116
- `### Decision 5: BOT_PAT for Attribution` — .agents/architecture/ADR-026-pr-automation-concurrency-and-safety.md:136
- `## Consequences` — .agents/architecture/ADR-026-pr-automation-concurrency-and-safety.md:150
- `## Coalescing Behavior and Race Conditions` — .agents/architecture/ADR-026-pr-automation-concurrency-and-safety.md:174
- `## Optional Debouncing Mechanism` — .agents/architecture/ADR-026-pr-automation-concurrency-and-safety.md:211
- `## Related ADRs` — .agents/architecture/ADR-026-pr-automation-concurrency-and-safety.md:316
- `## References` — .agents/architecture/ADR-026-pr-automation-concurrency-and-safety.md:322

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
- missing-path — .agents/architecture/ADR-026-pr-automation-concurrency-and-safety.md:20 — Script `scripts/Invoke-PRMaintenance.ps1` does not exist in repository (all PowerShell automation was removed).
- missing-path — .agents/architecture/ADR-026-pr-automation-concurrency-and-safety.md:303 — Referenced measurement script `Measure-WorkflowCoalescing.ps1` does not exist in repository.

## Observations
- Documents the best-effort nature of GitHub Actions concurrency groups: "GitHub Actions `concurrency` groups with `cancel-in-progress: true` provide **best-effort** run coalescing, not guaranteed atomicity." — .agents/architecture/ADR-026-pr-automation-concurrency-and-safety.md:178
- Reusable debounce pattern in GitHub Actions composite action `.github/actions/workflow-debounce/action.yml` trades 10s latency for increased coalescing window.
- Historical record update on 2025-12-24: "Dry run flag removed entirely after successful validation period." — .agents/architecture/ADR-026-pr-automation-concurrency-and-safety.md:130 due to empty-string evaluation bug in workflow input parsing.

## Context cost
12173 bytes, ~3100 tokens.
