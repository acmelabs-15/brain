---
package: rjm
path: .agents/security/SR-002-pr-automation-security-review.md
type: agent
bytes: 7287
unit: inv-rjm-59
in_scope_via: .agents/architecture/ADR-026-pr-automation-concurrency-and-safety.md
aliases: []
memo_inputs:
  - {path: .agents/security/SR-002-pr-automation-security-review.md, sha256: ee07fb695289c7d8956277f3c7e6fcf74f6b5ff1b579887811a6b6f0e5fe69e4}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# .agents/security/SR-002-pr-automation-security-review.md

## Purpose — required, verbatim
> "Security review identified 3 HIGH severity findings requiring remediation before production deployment:" — .agents/security/SR-002-pr-automation-security-review.md:9

## Design intent — required
Documents the security review findings, threat analysis, and remediation specifications for the PR maintenance automation script (`scripts/Invoke-PRMaintenance.ps1`), establishing blocking approval gates and defense-in-depth requirements to prevent command injection, path traversal, and integer overflow before deployment.

## Phase — required
cross-phase

## Inputs — required
- "scripts/Invoke-PRMaintenance.ps1" — .agents/security/SR-002-pr-automation-security-review.md:3
- "Branch names from GitHub API" — .agents/security/SR-002-pr-automation-security-review.md:23
- "Worktree paths constructed from PR numbers" — .agents/security/SR-002-pr-automation-security-review.md:61
- "CommentId parameter" — .agents/security/SR-002-pr-automation-security-review.md:99

## Outputs — required
- "Test-SafeBranchName" — .agents/security/SR-002-pr-automation-security-review.md:36
- "Get-SafeWorktreePath" — .agents/security/SR-002-pr-automation-security-review.md:74
- "Add-CommentReaction" — .agents/security/SR-002-pr-automation-security-review.md:106
- "Defense-in-Depth Checklist" — .agents/security/SR-002-pr-automation-security-review.md:135
- "Approval Gates" — .agents/security/SR-002-pr-automation-security-review.md:192

## Invokes — required
- doc ADR-026-pr-automation-concurrency-and-safety.md — .agents/security/SR-002-pr-automation-security-review.md:207
- doc devops/pr-automation-script-review.md — .agents/security/SR-002-pr-automation-security-review.md:209
- doc operations/pr-maintenance-rollback.md — .agents/security/SR-002-pr-automation-security-review.md:211

## Invoked by — required
- doc ADR-026-pr-automation-concurrency-and-safety.md — .agents/architecture/ADR-026-pr-automation-concurrency-and-safety.md:324

## Concepts named — required, verbatim
`Security Review: PR Automation Script` — .agents/security/SR-002-pr-automation-security-review.md:1 — defined here
`Executive Summary` — .agents/security/SR-002-pr-automation-security-review.md:7 — defined here
`HIGH-001: Command Injection via Branch Name` — .agents/security/SR-002-pr-automation-security-review.md:19 — defined here
`CWE-78: OS Command Injection` — .agents/security/SR-002-pr-automation-security-review.md:21 — used here
`Test-SafeBranchName` — .agents/security/SR-002-pr-automation-security-review.md:36 — defined here
`HIGH-002: Path Traversal in Worktree Creation` — .agents/security/SR-002-pr-automation-security-review.md:57 — defined here
`CWE-22: Path Traversal` — .agents/security/SR-002-pr-automation-security-review.md:59 — used here
`Get-SafeWorktreePath` — .agents/security/SR-002-pr-automation-security-review.md:74 — defined here
`MEDIUM-001: Integer Overflow in CommentId` — .agents/security/SR-002-pr-automation-security-review.md:95 — defined here
`CWE-190: Integer Overflow` — .agents/security/SR-002-pr-automation-security-review.md:97 — used here
`Add-CommentReaction` — .agents/security/SR-002-pr-automation-security-review.md:106 — defined here
`GitHub Acceptable Use Policy Compliance` — .agents/security/SR-002-pr-automation-security-review.md:119 — used here
`Defense-in-Depth Checklist` — .agents/security/SR-002-pr-automation-security-review.md:135 — defined here
`Test Requirements` — .agents/security/SR-002-pr-automation-security-review.md:146 — defined here
`Remediation Priority` — .agents/security/SR-002-pr-automation-security-review.md:182 — defined here
`Approval Gates` — .agents/security/SR-002-pr-automation-security-review.md:192 — defined here

## Structure
# Security Review: PR Automation Script — .agents/security/SR-002-pr-automation-security-review.md:1
## Executive Summary — .agents/security/SR-002-pr-automation-security-review.md:7
## Findings — .agents/security/SR-002-pr-automation-security-review.md:17
### HIGH-001: Command Injection via Branch Name — .agents/security/SR-002-pr-automation-security-review.md:19
### HIGH-002: Path Traversal in Worktree Creation — .agents/security/SR-002-pr-automation-security-review.md:57
### MEDIUM-001: Integer Overflow in CommentId — .agents/security/SR-002-pr-automation-security-review.md:95
## GitHub Acceptable Use Policy Compliance — .agents/security/SR-002-pr-automation-security-review.md:119
## Defense-in-Depth Checklist — .agents/security/SR-002-pr-automation-security-review.md:135
## Test Requirements — .agents/security/SR-002-pr-automation-security-review.md:146
## Remediation Priority — .agents/security/SR-002-pr-automation-security-review.md:182
## Approval Gates — .agents/security/SR-002-pr-automation-security-review.md:192
## References — .agents/security/SR-002-pr-automation-security-review.md:205

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
- missing-path · .agents/security/SR-002-pr-automation-security-review.md:3 · Reviewed target script scripts/Invoke-PRMaintenance.ps1 does not exist in repository.
- missing-path · .agents/security/SR-002-pr-automation-security-review.md:208 · Referenced implementation plan .agents/planning/pr-automation-implementation-plan.md does not exist in repository.

## Observations
Security assessment (SR artifact) auditing `scripts/Invoke-PRMaintenance.ps1` (an automated PowerShell maintenance workflow). It identifies three concrete vulnerabilities with complete remediation code (Pester tests, PowerShell functions): command injection via branch names (CWE-78), path traversal in git worktree directory construction (CWE-22), and integer overflow in comment IDs exceeding Int32.MaxValue (CWE-190). Also enforces GitHub Acceptable Use Policy section 4 (rate limiting, BOT_PAT attribution).

## Context cost
7287 bytes, approximately 1822 tokens.
