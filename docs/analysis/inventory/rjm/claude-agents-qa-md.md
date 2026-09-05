---
package: rjm
path: .claude/agents/qa.md
type: agent
bytes: 30944
unit: inv-rjm-70
in_scope_via: .claude/commands/test.md
aliases: []
memo_inputs:
  - {path: .claude/agents/qa.md, sha256: 970c9a3737813884dd918aea20c2cae57f38705fdf4c47c0557248c95de1b656}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# .claude/agents/qa.md

## Purpose — required, verbatim
> "Quality assurance specialist who verifies implementations work correctly for real users, not just passing tests. Designs test strategies, validates coverage against acceptance criteria, and reports results with evidence. Use when you need confidence through verification, regression testing, edge-case coverage, or user-scenario validation." — .claude/agents/qa.md:3

## Design intent — required
Adversarial quality assurance specialist operating with fresh, isolated context to eliminate the confirmation bias inherent in author-led or same-context reviews. It treats passing test suites as merely a pathway toward user outcomes rather than the goal itself, mandating behavioral execution over hollow structural pattern-matching and requiring a minimum of three critical findings per review. It functions as an authoritative pre-PR quality gate through rigorous scope reconciliation ("Promised vs Delivered"), automated CI and fail-safe pattern validation, and non-interpolated numeric code coverage thresholds (80% line, 70% branch, 80% new code).

## Phase — required
rjm:test

## Inputs — required
- Feature or implementation to verify via argument hint (`argument-hint: Provide the implementation or feature to verify` — .claude/agents/qa.md:9)
- Diff, spec, standards, and canonical sources without the implementer's internal reasoning (.claude/agents/qa.md:19)
- Roadmap documents prior to designing test strategies (.claude/agents/qa.md:112)
- Target codebase and existing tests via read tools (`Read`, `Grep`, `Glob`) (.claude/agents/qa.md:55)
- Original issue, task description, or orchestrator delegation requirements for completeness reconciliation (.claude/agents/qa.md:89)
- Coverage tool execution outputs following `.agents/governance/TESTING-RIGOR.md` directive (.claude/agents/qa.md:81)
- Test suite execution results: `Invoke-Pester`, `dotnet test`, `dotnet test --collect:"XPlat Code Coverage"` (.claude/agents/qa.md:56, 382, 385, 476, 735-744)
- PR title and markdown body file for PR description validation via `validate_pr_description.py` (.claude/agents/qa.md:503-505)
- Cross-session memory and context via Memory Router (`search_memory.py`) (.claude/agents/qa.md:59, 754)

## Outputs — required
- Test strategy documents in `.agents/qa/NNN-[feature]-test-strategy.md` (.claude/agents/qa.md:606-635, 795)
- Test reports in `.agents/qa/NNN-[feature]-test-report.md` featuring explicit Promised/Delivered/Gap reconciliation and verdict (.claude/agents/qa.md:640-729, 796)
- Impact analysis documents in `.agents/planning/impact-analysis-qa-[feature].md` (.claude/agents/qa.md:262-364)
- Pre-PR quality gate validation reports in `.agents/qa/pre-pr-validation-[feature].md` with verdicts (`[APPROVED]` / `[BLOCKED]`) (.claude/agents/qa.md:528-573)
- Test suite files via Write/Edit tools (.claude/agents/qa.md:57)
- Memory entries in `.serena/memories/` via Serena write tools (`mcp__serena__write_memory`, `mcp__serena__edit_memory`) (.claude/agents/qa.md:61-63, 760-762)

## Invokes — required
- script search_memory.py — .claude/agents/qa.md:59
- script validate_pr_description.py — .claude/agents/qa.md:503
- reference AGENTS.md — .claude/agents/qa.md:13
- reference TESTING-RIGOR.md — .claude/agents/qa.md:81
- agent milestone-planner — .claude/agents/qa.md:802
- agent implementer — .claude/agents/qa.md:803

## Invoked by — required
- command qa — .claude/commands/test.md:45
- doc qa — docs/agent-catalog.md:38
- doc qa — .agents/AGENT-SYSTEM.md:378

## Concepts named — required, verbatim
- `Autonomy Guardrail` — .claude/agents/qa.md:13 — used here
- `Reviewer Asymmetry` — .claude/agents/qa.md:15 — defined here
- `Quality Assurance Specialist` — .claude/agents/qa.md:27 — defined here
- `Memory Router` — .claude/agents/qa.md:58 — used here
- `ADR-037` — .claude/agents/qa.md:58 — used here
- `Test Strategy Reasoning Protocol` — .claude/agents/qa.md:71 — defined here
- `Coverage tool directive` — .claude/agents/qa.md:81 — defined here
- `Completeness Verification` — .claude/agents/qa.md:85 — defined here
- `Code Quality Gates` — .claude/agents/qa.md:122 — defined here
- `Quality Gate Checklist` — .claude/agents/qa.md:126 — defined here
- `Test Quality Standards` — .claude/agents/qa.md:138 — defined here
- `Test Quality Criteria` — .claude/agents/qa.md:146 — defined here
- `Insufficient Test Patterns` — .claude/agents/qa.md:150 — defined here
- `Required Test Patterns` — .claude/agents/qa.md:164 — defined here
- `Test Review Checklist` — .claude/agents/qa.md:186 — defined here
- `Quality Metrics` — .claude/agents/qa.md:216 — defined here
- `Risk-Based Testing` — .claude/agents/qa.md:228 — defined here
- `Impact Analysis Mode` — .claude/agents/qa.md:246 — defined here
- `Pre-PR Quality Gate` — .claude/agents/qa.md:366 — defined here
- `Fail-Safe Pattern Verification` — .claude/agents/qa.md:407 — defined here
- `Test-Implementation Alignment` — .claude/agents/qa.md:438 — defined here
- `Coverage Threshold Validation` — .claude/agents/qa.md:470 — defined here
- `PR Description Validation` — .claude/agents/qa.md:498 — defined here
- `Verdict Decision Logic` — .claude/agents/qa.md:575 — defined here
- `QA Report Length Bounds` — .claude/agents/qa.md:588 — defined here
- `Two-Phase Verification` — .claude/agents/qa.md:601 — defined here
- `Memory Protocol` — .claude/agents/qa.md:747 — defined here
- `Degraded Mode Protocol` — .claude/agents/qa.md:765 — defined here
- `Handoff Validation` — .claude/agents/qa.md:806 — defined here
- `Handoff Protocol` — .claude/agents/qa.md:851 — defined here
- `Execution Mindset` — .claude/agents/qa.md:863 — defined here

## Structure
- # QA Agent — .claude/agents/qa.md:11
- ## Reviewer Asymmetry (Read First) — .claude/agents/qa.md:15
- ## Core Identity — .claude/agents/qa.md:25
- ## Activation Profile — .claude/agents/qa.md:29
- ## Style Guide Compliance — .claude/agents/qa.md:35
- ## Claude Code Tools — .claude/agents/qa.md:51
- ## Core Mission — .claude/agents/qa.md:65
- ## Test Strategy Reasoning Protocol — .claude/agents/qa.md:71
- ## Completeness Verification (Mandatory) — .claude/agents/qa.md:85
- ## Key Responsibilities — .claude/agents/qa.md:110
- ## Code Quality Gates — .claude/agents/qa.md:122
- ### Quality Gate Checklist — .claude/agents/qa.md:126
- ## Test Quality Standards — .claude/agents/qa.md:138
- ## Test Quality Criteria — .claude/agents/qa.md:146
- ### Insufficient Test Patterns ([FAIL]) — .claude/agents/qa.md:150
- ### Required Test Patterns ([PASS]) — .claude/agents/qa.md:164
- ### Test Review Checklist — .claude/agents/qa.md:186
- ### Evidence for Verdict — .claude/agents/qa.md:200
- ## Quality Metrics — .claude/agents/qa.md:216
- ## Risk-Based Testing — .claude/agents/qa.md:228
- ## Impact Analysis Mode — .claude/agents/qa.md:246
- ### Analyze Quality & Testing Impact — .claude/agents/qa.md:248
- ### Impact Analysis Deliverable — .claude/agents/qa.md:260
- ## Pre-PR Quality Gate (MANDATORY) — .claude/agents/qa.md:366
- ### Validation Protocol — .claude/agents/qa.md:372
- #### Step 1: CI Environment Test Validation — .claude/agents/qa.md:376
- #### Step 2: Fail-Safe Pattern Verification — .claude/agents/qa.md:407
- #### Step 3: Test-Implementation Alignment — .claude/agents/qa.md:438
- #### Step 4: Coverage Threshold Validation — .claude/agents/qa.md:470
- #### Step 5: PR Description Validation — .claude/agents/qa.md:498
- ### Pre-PR Validation Report — .claude/agents/qa.md:526
- ### Verdict Decision Logic — .claude/agents/qa.md:575
- ## QA Report Length Bounds — .claude/agents/qa.md:588
- ## Two-Phase Verification — .claude/agents/qa.md:601
- ### Phase 1: Test Strategy (Before Implementation) — .claude/agents/qa.md:603
- ### Phase 2: Verification (After Implementation) — .claude/agents/qa.md:637
- ## Test Commands — .claude/agents/qa.md:731
- ## Memory Protocol — .claude/agents/qa.md:747
- ## Degraded Mode Protocol — .claude/agents/qa.md:765
- ## Constraints — .claude/agents/qa.md:784
- ## Output Location — .claude/agents/qa.md:791
- ## Handoff Options — .claude/agents/qa.md:798
- ## Handoff Validation — .claude/agents/qa.md:806
- ### Pass Handoff (to orchestrator) — .claude/agents/qa.md:810
- ### Failure Handoff (to implementer) — .claude/agents/qa.md:822
- ### Infrastructure Handoff (to milestone-planner) — .claude/agents/qa.md:833
- ### Validation Failure — .claude/agents/qa.md:843
- ## Handoff Protocol — .claude/agents/qa.md:851
- ## Execution Mindset — .claude/agents/qa.md:863

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
- `missing-path` · .claude/agents/qa.md:81 · `.agents/governance/TESTING-RIGOR.md` is designated as the single source of truth for canonical coverage tool invocations, but this file does not exist anywhere in the repository.
- `missing-path` · .claude/agents/qa.md:503 · Script `.claude/skills/github/scripts/pr/validate_pr_description.py` does not exist under `.claude/` (it exists only under `src/copilot-cli/skills/github/scripts/pr/validate_pr_description.py`).
- `missing-path` · .claude/agents/qa.md:735 · `Qwiq.sln` is referenced in the .NET test commands, but no solution file exists in the repository.
- `internal-contradiction` · .claude/agents/qa.md:81 · States "Do not inline the commands here, the governance file is the single source of truth", but the file inlines `dotnet test` commands in lines 56, 476, and lines 731–745.
- `internal-contradiction` · .claude/agents/qa.md:211 · Insufficient test template specifies `**Verdict**: CRITICAL_FAIL`, contradicting the permitted status indicator set `[PASS], [FAIL], [SKIP], [FLAKY]` defined in Style Guide Compliance (line 43) and verdict schema (line 559).

## Observations
- Linked to variant `templates/agents/qa.shared.md` under ledger pair V19 (87% shared lines, 8 hunks).
- Configured with `model: opus` and `isolation_required: true`, establishing adversarial asymmetry and fresh context as core tenets to eliminate author confirmation bias.
- Mandates behavioral test execution over structural pattern-matching and enforces a strict "Promised vs Delivered vs Gap" reconciliation block in all verification reports to prevent false completion reporting.

## Context cost
30,944 bytes (~7,500 tokens). Total invocation footprint including referenced scripts (`search_memory.py`, `validate_pr_description.py`) is approximately 47,000 bytes (~11,500 tokens).
