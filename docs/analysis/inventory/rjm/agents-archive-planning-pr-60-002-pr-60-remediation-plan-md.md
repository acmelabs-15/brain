---
package: rjm
path: .agents/archive/planning/PR-60/002-pr-60-remediation-plan.md
type: agent
bytes: 24845
unit: inv-rjm-52
in_scope_via: .agents/architecture/README.md
aliases: []
memo_inputs:
  - {path: .agents/archive/planning/PR-60/002-pr-60-remediation-plan.md, sha256: 5f3f48708d5dcd1bc3c82b12e518ae4e4739403000a0b9d94268cd93089299da}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# .agents/archive/planning/PR-60/002-pr-60-remediation-plan.md

## Purpose — required, verbatim
> "This plan addresses 13 gaps identified in PR #60 review across security, error handling, and test coverage domains. Work is organized into 3 phases with clear acceptance criteria and estimated effort." — .agents/archive/planning/PR-60/002-pr-60-remediation-plan.md:25

## Design intent — required
Defines the tactical remediation roadmap for PR #60 (AI issue triage workflow and GitHub automation tooling), integrating findings and blocking conditions from multi-agent scrutiny (critic, high-level-advisor, security, QA). Organizes work into three sequential phases: Phase 1 (pre-merge blocking security and error handling fixes, including CWE-78 command injection mitigation in AI output parsing, silent failure removal, script-vs-module exception handling in PowerShell, and mandatory Pester test scaffold creation), Phase 2 (post-merge QA gaps and security function test coverage), and Phase 3 (enhanced catch-block logging, paginated API completion status, and unique temporary directory isolation). Incorporates an explicit rollback plan and recovery procedure in response to critic condition C4. Without this plan, the repository would deploy an AI issue triage workflow vulnerable to arbitrary command injection and silent failures, with uncoordinated ad-hoc fixes lacking verifiable test acceptance gates.

## Phase — required
rjm:plan

## Inputs — required
- Gap analysis: `001-pr-60-review-gap-analysis.md` (.agents/archive/planning/PR-60/002-pr-60-remediation-plan.md:7)
- Review summary: `005-consolidated-agent-review-summary.md` (.agents/archive/planning/PR-60/002-pr-60-remediation-plan.md:8)
- Critic review: `.agents/critique/003-pr-60-remediation-plan-critique.md` (.agents/archive/planning/PR-60/002-pr-60-remediation-plan.md:9)
- QA phase 1 report: `.agents/qa/004-pr-60-phase-1-qa-report.md` (.agents/archive/planning/PR-60/002-pr-60-remediation-plan.md:254)
- Technical findings from Analyst, Security, QA, and Architect agent reviews (.agents/archive/planning/PR-60/002-pr-60-remediation-plan.md:32-38, 80-82, 821)

## Outputs — required
- Three-phase remediation plan covering 11 tasks and estimated 26-34 hours across 3-4 sessions (.agents/archive/planning/PR-60/002-pr-60-remediation-plan.md:27-30, 41-686)
- Hardened regex patterns and extraction specifications for `Get-LabelsFromAIOutput` and `Get-MilestoneFromAIOutput` (.agents/archive/planning/PR-60/002-pr-60-remediation-plan.md:63-99)
- Workflow modifications for `.github/workflows/ai-issue-triage.yml` (.agents/archive/planning/PR-60/002-pr-60-remediation-plan.md:103-115, 185-195, 338-350)
- GitHub action error checks and cleanup for `.github/actions/ai-review/action.yml` (.agents/archive/planning/PR-60/002-pr-60-remediation-plan.md:149-164, 670-677)
- Module error handling logic for `Write-ErrorAndExit` and `Invoke-GhApiPaginated` in `GitHubHelpers.psm1` (.agents/archive/planning/PR-60/002-pr-60-remediation-plan.md:216-236, 602-612)
- Pester test specifications for triage tests, context detection tests, and security function tests (.agents/archive/planning/PR-60/002-pr-60-remediation-plan.md:121-129, 267-305, 399-436, 453-477, 494-510, 632-650)
- Rollback plan and recovery steps (.agents/archive/planning/PR-60/002-pr-60-remediation-plan.md:708-792)

## Invokes — required
- doc 001-pr-60-review-gap-analysis.md — .agents/archive/planning/PR-60/002-pr-60-remediation-plan.md:7
- doc 005-consolidated-agent-review-summary.md — .agents/archive/planning/PR-60/002-pr-60-remediation-plan.md:8
- doc 003-pr-60-remediation-plan-critique.md — .agents/archive/planning/PR-60/002-pr-60-remediation-plan.md:9
- doc 004-pr-60-phase-1-qa-report.md — .agents/archive/planning/PR-60/002-pr-60-remediation-plan.md:254
- doc 003-pr-60-plan-critique.md — .agents/archive/planning/PR-60/002-pr-60-remediation-plan.md:829
- agent orchestrator — .agents/archive/planning/PR-60/002-pr-60-remediation-plan.md:5
- agent critic — .agents/archive/planning/PR-60/002-pr-60-remediation-plan.md:819
- agent Analyst — .agents/archive/planning/PR-60/002-pr-60-remediation-plan.md:821
- agent Architect — .agents/archive/planning/PR-60/002-pr-60-remediation-plan.md:821
- agent Security — .agents/archive/planning/PR-60/002-pr-60-remediation-plan.md:821
- agent QA — .agents/archive/planning/PR-60/002-pr-60-remediation-plan.md:821

## Invoked by — required
- doc 002-pr-60-remediation-plan.md — .agents/archive/planning/PR-60/003-pr-60-plan-critique.md:6
- doc 002-pr-60-remediation-plan.md — .agents/archive/planning/PR-60/005-consolidated-agent-review-summary.md:397
- doc 002-pr-60-remediation-plan.md — .agents/archive/HANDOFF-2025-12-22.md:703

## Concepts named — required, verbatim
- `PR #60 Remediation Plan` — .agents/archive/planning/PR-60/002-pr-60-remediation-plan.md:1 — defined here
- `Critic review` — .agents/archive/planning/PR-60/002-pr-60-remediation-plan.md:9 — used here
- `critic conditions` — .agents/archive/planning/PR-60/002-pr-60-remediation-plan.md:15 — used here
- `acceptance criteria` — .agents/archive/planning/PR-60/002-pr-60-remediation-plan.md:25 — used here
- `Phase 1` — .agents/archive/planning/PR-60/002-pr-60-remediation-plan.md:28 — defined here
- `Phase 2` — .agents/archive/planning/PR-60/002-pr-60-remediation-plan.md:29 — defined here
- `Phase 3` — .agents/archive/planning/PR-60/002-pr-60-remediation-plan.md:30 — defined here
- `Command Injection` — .agents/archive/planning/PR-60/002-pr-60-remediation-plan.md:47 — used here
- `AIReviewCommon.psm1` — .agents/archive/planning/PR-60/002-pr-60-remediation-plan.md:52 — used here
- `Get-LabelsFromAIOutput` — .agents/archive/planning/PR-60/002-pr-60-remediation-plan.md:52 — defined here
- `Get-MilestoneFromAIOutput` — .agents/archive/planning/PR-60/002-pr-60-remediation-plan.md:52 — defined here
- `Pester` — .agents/archive/planning/PR-60/002-pr-60-remediation-plan.md:122 — used here
- `Exit Code Checks` — .agents/archive/planning/PR-60/002-pr-60-remediation-plan.md:137 — defined here
- `Silent Failure` — .agents/archive/planning/PR-60/002-pr-60-remediation-plan.md:173 — used here
- `Write-ErrorAndExit` — .agents/archive/planning/PR-60/002-pr-60-remediation-plan.md:214 — used here
- `Context Detection` — .agents/archive/planning/PR-60/002-pr-60-remediation-plan.md:256 — defined here
- `Test-GitHubNameValid` — .agents/archive/planning/PR-60/002-pr-60-remediation-plan.md:389 — used here
- `Test-SafeFilePath` — .agents/archive/planning/PR-60/002-pr-60-remediation-plan.md:446 — used here
- `Assert-ValidBodyFile` — .agents/archive/planning/PR-60/002-pr-60-remediation-plan.md:487 — used here
- `Invoke-GhApiPaginated` — .agents/archive/planning/PR-60/002-pr-60-remediation-plan.md:602 — used here
- `Rollback Plan` — .agents/archive/planning/PR-60/002-pr-60-remediation-plan.md:708 — defined here
- `Testing Gate` — .agents/archive/planning/PR-60/002-pr-60-remediation-plan.md:777 — defined here

## Structure
- PR #60 Remediation Plan
- CRITICAL NOTE: Critic Conditions Integrated
- Executive Summary
- Phase 1: Critical Security & Error Handling (Before Merge)
- Task 1.1: Fix Command Injection Vectors
- Task 1.2: Add Exit Code Checks to Action
- Task 1.3: Fix Silent Failure Patterns
- Task 1.4: Replace `exit` with `throw` in Module
- Phase 2: QA Gaps + Security Test Coverage (High Priority)
- Task 2.0: Write-ErrorAndExit Context Detection Tests (CRITICAL)
- Task 2.1: Convert Workflow Parsing to PowerShell (HIGH PRIORITY)
- Task 2.2: Perform Manual Verification (MEDIUM PRIORITY)
- Original Phase 2 Tasks (Existing Security Test Coverage)
- Task 2.1: Add `Test-GitHubNameValid` Tests
- Task 2.2: Add `Test-SafeFilePath` Tests
- Task 2.3: Add `Assert-ValidBodyFile` Tests
- Task 2.4: Update Skill Scripts to Use Security Helpers
- Phase 3: Error Handling & Test Coverage (Post-Merge)
- Task 3.1: Add Logging to Catch Blocks
- Task 3.2: Add Completion Indicator to Paginated API
- Task 3.3: Add Skill Script Error Path Tests
- Task 3.4: Use Unique Temp Directories
- Phase Summary
- Success Metrics
- Rollback Plan (Critic Condition C4 - REQUIRED)
- Step 1: Pause Workflow (Immediate)
- Step 2: Identify Root Cause (5-10 minutes)
- Step 3: Document Failure (immediate)
- Step 4: Revert Changes (if unrecoverable)
- Step 5: Resolution & Re-plan
- Risk Mitigation
- Dependencies
- Approval
- Related Documents

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
- missing-path · .agents/archive/planning/PR-60/002-pr-60-remediation-plan.md:58 · Cites `.claude/skills/github/modules/AIReviewCommon.psm1`, which does not exist in the repository.
- missing-path · .agents/archive/planning/PR-60/002-pr-60-remediation-plan.md:59 · Cites `.github/workflows/ai-issue-triage.yml`, which does not exist on the working tree branch.
- missing-path · .agents/archive/planning/PR-60/002-pr-60-remediation-plan.md:143 · Cites `.github/actions/ai-review/action.yml`, which does not exist in the repository.
- missing-path · .agents/archive/planning/PR-60/002-pr-60-remediation-plan.md:210 · Cites `.claude/skills/github/modules/GitHubHelpers.psm1`, which does not exist in the repository.
- internal-contradiction · .agents/archive/planning/PR-60/002-pr-60-remediation-plan.md:58 · Inconsistent module paths across tasks: lines 58 and 107 cite `.claude/skills/github/modules/AIReviewCommon.psm1` / `./skills/github/modules/AIReviewCommon.psm1`, while lines 342 and 565 cite `.github/scripts/AIReviewCommon.psm1`.
- internal-contradiction · .agents/archive/planning/PR-60/002-pr-60-remediation-plan.md:389 · Duplicate task numbering in Phase 2: duplicate "Task 2.1" at lines 315 and 389, and duplicate "Task 2.2" at lines 361 and 446.
- cross-file-contradiction · .agents/archive/planning/PR-60/002-pr-60-remediation-plan.md:18 · Labels Condition C3 as "Security regex HARDENED per security agent recommendations", whereas the actual Critic document (`.agents/archive/planning/PR-60/003-pr-60-plan-critique.md:95`) defined Condition 3 as "Document Exit Code Contract".

## Observations
- Demonstrates defensive architecture in agent workflows: recognizing that untrusted LLM generation fed into shell commands creates remote command execution (CWE-78) risks unless sanitized through strict character allowlists.
- Documents the tension between script execution (where non-zero process exit codes communicate failure to CI runners) and module function calls (where `exit` terminates the caller's entire interactive or host session, requiring `throw` instead).
- Introduces an explicit rollback protocol (Critic condition C4) with automated trigger conditions, test gating (`Invoke-Pester`), and step-by-step git recovery commands.

## Context cost
24845 bytes, ~5900 tokens. Standalone remediation roadmap document; references external gap analyses, review summaries, and QA reports.
