---
package: rjm
path: .claude/agents/qa.md
type: agent
bytes: 30944
unit: inv-rjm-70
in_scope_via: docs/workflow-commands.md
aliases: []
memo_inputs:
  - {path: .claude/agents/qa.md, sha256: 970c9a3737813884dd918aea20c2cae57f38705fdf4c47c0557248c95de1b656}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# .claude/agents/qa.md

## Purpose — required, verbatim
> "Quality assurance specialist who verifies implementations work correctly for real users, not just passing tests. Designs test strategies, validates coverage against acceptance criteria, and reports results with evidence. Use when you need confidence through verification, regression testing, edge-case coverage, or user-scenario validation." — .claude/agents/qa.md:3

## Design intent — required
The primary executor-tier quality assurance and verification subagent in the rjm lifecycle. It embodies the "Reviewer Asymmetry" principle (fresh context and adversarial framing) to prevent confirmation bias when evaluating the implementer's deliverables. Operating on the core premise that "Passing tests are path to goal, not goal itself," it mandates that validation must evaluate both correctness and completeness against promised requirements. It enforces strict two-phase verification (Phase 1: Test Strategy before implementation; Phase 2: Verification after implementation), conducts impact analysis during planning, and serves as the mandatory Pre-PR Quality Gate covering 5 gates (CI tests, fail-safe patterns, test-implementation alignment, coverage thresholds, and PR description validation) with explicit numerical thresholds to deliver an unequivocal APPROVED, CONDITIONAL, or BLOCKED verdict.

## Phase — required
rjm:test

## Inputs — required
- Feature or implementation to verify via argument prompt (`argument-hint: Provide the implementation or feature to verify` — .claude/agents/qa.md:9)
- Diff, specification, quality standards, and canonical sources ("You see only the diff, the spec, the standards, and the canonical sources the diff claims to mirror." — .claude/agents/qa.md:19)
- Original issue, task description, or orchestrator delegation for promised scope reconciliation ("Check the original issue, task description, or orchestrator delegation for the deliverable list." — .claude/agents/qa.md:89)
- Roadmaps before designing test strategies ("before designing tests" — .claude/agents/qa.md:112)
- Governance testing rigor specifications ("The canonical invocations per stack live in `.agents/governance/TESTING-RIGOR.md` (section \"Verify Before Commit\")." — .claude/agents/qa.md:81)
- Past context and learnings retrieved via Memory Router (`search_memory.py` — .claude/agents/qa.md:59)
- PR title and body file for Step 5 pre-PR validation ("validate_pr_description.py" — .claude/agents/qa.md:503)

## Outputs — required
- Test Strategy document before implementation at `.agents/qa/NNN-[feature]-test-strategy.md` (`NNN-[feature]-test-strategy.md` — .claude/agents/qa.md:795)
- Test Report document after implementation at `.agents/qa/NNN-[feature]-test-report.md` (`NNN-[feature]-test-report.md` — .claude/agents/qa.md:796)
- Impact Analysis deliverable at `.agents/planning/impact-analysis-qa-[feature].md` (`Save to: \`.agents/planning/impact-analysis-qa-[feature].md\`` — .claude/agents/qa.md:262)
- Pre-PR Quality Gate Validation report at `.agents/qa/pre-pr-validation-[feature].md` ("Generate validation report at `.agents/qa/pre-pr-validation-[feature].md`:" — .claude/agents/qa.md:528)
- Explicit quality gate verdicts: `APPROVED`, `CONDITIONAL`, or `BLOCKED` (`**Status**: [APPROVED] / [BLOCKED]` — .claude/agents/qa.md:559; `Verdict Decision Logic` — .claude/agents/qa.md:575)
- Stored testing patterns and learnings in `.serena/memories/` via `mcp__serena__write_memory` (`mcp__serena__write_memory` — .claude/agents/qa.md:760)
- Handoff status messages to orchestrator (`QA COMPLETE` or `QA FAILED`) ("QA COMPLETE" — .claude/agents/qa.md:860; "QA FAILED" — .claude/agents/qa.md:861)

## Invokes — required
- agent orchestrator — .claude/agents/qa.md:804
- agent orchestrator — .claude/agents/qa.md:810
- agent milestone-planner — .claude/agents/qa.md:802
- agent implementer — .claude/agents/qa.md:803
- script search_memory.py — .claude/agents/qa.md:59
- script validate_pr_description.py — .claude/agents/qa.md:503
- reference TESTING-RIGOR.md — .claude/agents/qa.md:81
- reference AGENTS.md — .claude/agents/qa.md:13

## Invoked by — required
- command qa — .claude/commands/test.md:45
- doc qa — docs/workflow-commands.md:124
- doc qa — docs/workflow-commands.md:131
- doc qa — docs/workflow-commands.md:165
- doc qa — docs/workflow-commands.md:215
- doc qa — docs/agent-catalog.md:38
- doc qa — README.md:271
- doc qa — README.md:403

## Concepts named — required, verbatim
- `qa` — .claude/agents/qa.md:2 — defined here
- `Reviewer Asymmetry` — .claude/agents/qa.md:15 — defined here
- `Autonomy Guardrail` — .claude/agents/qa.md:13 — used here
- `AGENTS.md` — .claude/agents/qa.md:13 — used here
- `Test Strategy Reasoning Protocol` — .claude/agents/qa.md:71 — defined here
- `Coverage tool directive` — .claude/agents/qa.md:81 — defined here
- `A5` — .claude/agents/qa.md:81 — used here
- `TESTING-RIGOR.md` — .claude/agents/qa.md:81 — used here
- `Completeness Verification` — .claude/agents/qa.md:85 — defined here
- `Code Quality Gates` — .claude/agents/qa.md:122 — defined here
- `Quality Gate Checklist` — .claude/agents/qa.md:126 — defined here
- `Test Quality Standards` — .claude/agents/qa.md:138 — defined here
- `Test Quality Criteria` — .claude/agents/qa.md:146 — defined here
- `Insufficient Test Patterns` — .claude/agents/qa.md:150 — defined here
- `Required Test Patterns` — .claude/agents/qa.md:164 — defined here
- `Test Review Checklist` — .claude/agents/qa.md:186 — defined here
- `CRITICAL_FAIL` — .claude/agents/qa.md:211 — defined here
- `Quality Metrics` — .claude/agents/qa.md:216 — defined here
- `Risk-Based Testing` — .claude/agents/qa.md:228 — defined here
- `Impact Analysis Mode` — .claude/agents/qa.md:246 — defined here
- `Pre-PR Quality Gate` — .claude/agents/qa.md:366 — defined here
- `CI Environment Test Validation` — .claude/agents/qa.md:376 — defined here
- `Fail-Safe Pattern Verification` — .claude/agents/qa.md:407 — defined here
- `Test-Implementation Alignment` — .claude/agents/qa.md:438 — defined here
- `Coverage Threshold Validation` — .claude/agents/qa.md:470 — defined here
- `PR Description Validation` — .claude/agents/qa.md:498 — defined here
- `Pre-PR Validation Report` — .claude/agents/qa.md:526 — defined here
- `Verdict Decision Logic` — .claude/agents/qa.md:575 — defined here
- `QA Report Length Bounds` — .claude/agents/qa.md:588 — defined here
- `Two-Phase Verification` — .claude/agents/qa.md:601 — defined here
- `Test Commands` — .claude/agents/qa.md:731 — defined here
- `Memory Protocol` — .claude/agents/qa.md:747 — defined here
- `Memory Router` — .claude/agents/qa.md:58 — used here
- `ADR-037` — .claude/agents/qa.md:58 — used here
- `Degraded Mode Protocol` — .claude/agents/qa.md:765 — defined here
- `Handoff Options` — .claude/agents/qa.md:798 — defined here
- `Handoff Validation` — .claude/agents/qa.md:806 — defined here
- `Pass Handoff` — .claude/agents/qa.md:810 — defined here
- `Failure Handoff` — .claude/agents/qa.md:822 — defined here
- `Infrastructure Handoff` — .claude/agents/qa.md:833 — defined here
- `Handoff Protocol` — .claude/agents/qa.md:851 — defined here
- `Execution Mindset` — .claude/agents/qa.md:863 — defined here

## Structure
- - # QA Agent — .claude/agents/qa.md:11
- - ## Reviewer Asymmetry (Read First) — .claude/agents/qa.md:15
- - ## Core Identity — .claude/agents/qa.md:25
- - ## Activation Profile — .claude/agents/qa.md:29
- - ## Style Guide Compliance — .claude/agents/qa.md:35
- - ## Claude Code Tools — .claude/agents/qa.md:51
- - ## Core Mission — .claude/agents/qa.md:65
- - ## Test Strategy Reasoning Protocol — .claude/agents/qa.md:71
- - ## Completeness Verification (Mandatory) — .claude/agents/qa.md:85
- - ## Key Responsibilities — .claude/agents/qa.md:110
- - ## Code Quality Gates — .claude/agents/qa.md:122
- - ### Quality Gate Checklist — .claude/agents/qa.md:126
- - ## Test Quality Standards — .claude/agents/qa.md:138
- - ## Test Quality Criteria — .claude/agents/qa.md:146
- - ### Insufficient Test Patterns ([FAIL]) — .claude/agents/qa.md:150
- - ### Required Test Patterns ([PASS]) — .claude/agents/qa.md:164
- - ### Test Review Checklist — .claude/agents/qa.md:186
- - ### Evidence for Verdict — .claude/agents/qa.md:200
- - ## Quality Metrics — .claude/agents/qa.md:216
- - ## Risk-Based Testing — .claude/agents/qa.md:228
- - ## Impact Analysis Mode — .claude/agents/qa.md:246
- - ### Analyze Quality & Testing Impact — .claude/agents/qa.md:250
- - ### Impact Analysis Deliverable — .claude/agents/qa.md:260
- - ## Pre-PR Quality Gate (MANDATORY) — .claude/agents/qa.md:366
- - ### Validation Protocol — .claude/agents/qa.md:372
- - #### Step 1: CI Environment Test Validation — .claude/agents/qa.md:376
- - #### Step 2: Fail-Safe Pattern Verification — .claude/agents/qa.md:407
- - #### Step 3: Test-Implementation Alignment — .claude/agents/qa.md:438
- - #### Step 4: Coverage Threshold Validation — .claude/agents/qa.md:470
- - #### Step 5: PR Description Validation — .claude/agents/qa.md:498
- - ### Pre-PR Validation Report — .claude/agents/qa.md:526
- - ### Verdict Decision Logic — .claude/agents/qa.md:575
- - ## QA Report Length Bounds — .claude/agents/qa.md:588
- - ## Two-Phase Verification — .claude/agents/qa.md:601
- - ### Phase 1: Test Strategy (Before Implementation) — .claude/agents/qa.md:603
- - ### Phase 2: Verification (After Implementation) — .claude/agents/qa.md:637
- - ## Test Commands — .claude/agents/qa.md:731
- - ## Memory Protocol — .claude/agents/qa.md:747
- - ## Degraded Mode Protocol — .claude/agents/qa.md:765
- - ## Constraints — .claude/agents/qa.md:784
- - ## Output Location — .claude/agents/qa.md:791
- - ## Handoff Options — .claude/agents/qa.md:798
- - ## Handoff Validation — .claude/agents/qa.md:806
- - ### Pass Handoff (to orchestrator) — .claude/agents/qa.md:810
- - ### Failure Handoff (to implementer) — .claude/agents/qa.md:822
- - ### Infrastructure Handoff (to milestone-planner) — .claude/agents/qa.md:833
- - ### Validation Failure — .claude/agents/qa.md:843
- - ## Handoff Protocol — .claude/agents/qa.md:851
- - ## Execution Mindset — .claude/agents/qa.md:863

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
- `missing-path` · .claude/agents/qa.md:735 · Command references solution file `Qwiq.sln` which does not exist in repository root.
- `missing-path` · .claude/agents/qa.md:738 · Command references runsettings file `coverage.runsettings` which does not exist in repository root.
- `missing-path` · .claude/agents/qa.md:777 · Degraded mode fallback specifies writing temporary markdown to directory `.agents/notes/`, which does not exist in repository.
- `doc-drift` · .claude/agents/qa.md:382 · References PowerShell Pester test suite invocation (`Invoke-Pester -Path "./tests" -CI`) when repository test suite is primarily pytest/python.

## Observations
- Multi-target template divergence V19: `.claude/agents/qa.md` differs from `templates/agents/qa.shared.md` (87% shared ratio, 8 hunks). Canonical includes Opus model tier, isolation requirement, direct file editing scopes, Claude Code tools, Step 5 PR description validation via `validate_pr_description.py`, 5 quality gates vs 4, and Degraded Mode protocol; shared template omits Claude Code tool lists, PR description validation, and Degraded Mode fallbacks, delegating to cloudmcp-manager. Documented in divergence card `docs/analysis/inventory/rjm/_divergence/claude-agents-qa-md--templates-agents-qa-shared-md.md`.
- Emphasizes "Reviewer Asymmetry" (.claude/agents/qa.md:15-24): mandates finding at least three issues and operating with fresh context and adversarial framing to avoid confirmation bias.
- Mandates completeness verification (.claude/agents/qa.md:85-109) with explicit reconciliation block (`Promised:`, `Delivered:`, `Gap:`, `Result:`) citing a past incident where false completion was reported on partial deliverables.

## Context cost
30944 bytes, 872 lines, approx. 7,400 tokens. Loads `TESTING-RIGOR.md` (8,509 bytes), `search_memory.py` (14,860 bytes), `validate_pr_description.py` (12,416 bytes), and `AGENTS.md` (2,947 bytes) on invocation.
