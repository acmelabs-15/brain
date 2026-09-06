---
package: rjm
path: templates/agents/qa.shared.md
type: agent
bytes: 27850
unit: inv-rjm-320
in_scope_via: docs/agent-catalog.md
aliases: []
memo_inputs:
  - {path: templates/agents/qa.shared.md, sha256: 7dbd4253b250290b87341f59885ccb93c7f5813272a96b955db391c9b035c941}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# templates/agents/qa.shared.md

## Purpose — required, verbatim
> "Quality assurance specialist who verifies implementations work correctly for real users, not just passing tests. Designs test strategies, validates coverage against acceptance criteria, and reports results with evidence. Use when you need confidence through verification, regression testing, edge-case coverage, or user-scenario validation." — templates/agents/qa.shared.md:4

## Design intent — required
Adversarial quality assurance specialist operating with fresh, isolated context to eliminate the confirmation bias inherent in author-led or same-context reviews. It treats passing test suites as merely a pathway toward user outcomes rather than the goal itself, mandating behavioral execution over hollow structural pattern-matching and requiring a minimum of three critical findings per review. It functions as an authoritative pre-PR quality gate through rigorous scope reconciliation ("Promised vs Delivered"), automated CI and fail-safe pattern validation, and non-interpolated numeric code coverage thresholds (80% line, 70% branch, 80% new code).

## Phase — required
rjm:test

## Inputs — required
- Feature or implementation to verify via argument hint (`argument-hint: Provide the implementation or feature to verify` — templates/agents/qa.shared.md:5)
- Diff, spec, standards, and canonical sources without the implementer's internal reasoning (templates/agents/qa.shared.md:22)
- Roadmap documents prior to designing test strategies (templates/agents/qa.shared.md:102)
- Original issue, task description, or orchestrator delegation requirements for completeness reconciliation (templates/agents/qa.shared.md:79)
- Coverage tool execution outputs following `.agents/governance/TESTING-RIGOR.md` directive (templates/agents/qa.shared.md:71)
- Test suite execution results: `Invoke-Pester`, `dotnet test`, `dotnet test --collect:"XPlat Code Coverage"` (templates/agents/qa.shared.md:372, 375, 466)
- Cross-session memory and context via cloudmcp-manager memory tools (`mcp__cloudmcp-manager__memory-search_nodes`) (templates/agents/qa.shared.md:698)

## Outputs — required
- Test strategy documents saved to `.agents/qa/NNN-[feature]-test-strategy.md` (templates/agents/qa.shared.md:567, 725)
- Test reports saved to `.agents/qa/NNN-[feature]-test-report.md` (templates/agents/qa.shared.md:601, 726)
- Pre-PR quality gate validation reports saved to `.agents/qa/pre-pr-validation-[feature].md` (templates/agents/qa.shared.md:490)
- Impact analysis documents saved to `.agents/planning/impact-analysis-qa-[feature].md` (templates/agents/qa.shared.md:252)
- Quality verdicts: `[APPROVED]`, `[BLOCKED]`, `[CONDITIONAL]` (templates/agents/qa.shared.md:520, 542-545) and status indicators `[PASS]`, `[FAIL]`, `[SKIP]`, `[FLAKY]`, `[WARNING]`, `[COMPLETE]`, `[BLOCKED]` (templates/agents/qa.shared.md:46, 52)
- Scope completeness reconciliation verdict: `PASS | FAIL` (templates/agents/qa.shared.md:91, 683)
- Memory observations written via `mcp__cloudmcp-manager__memory-add_observations` (templates/agents/qa.shared.md:705)
- Handoff status reports to orchestrator, implementer, or milestone-planner: `QA COMPLETE`, `QA FAILED` (templates/agents/qa.shared.md:747, 758, 790, 791)

## Invokes — required
- reference AGENTS.md — templates/agents/qa.shared.md:16
- reference .agents/governance/TESTING-RIGOR.md — templates/agents/qa.shared.md:71
- agent milestone-planner — templates/agents/qa.shared.md:110
- agent implementer — templates/agents/qa.shared.md:733
- agent orchestrator — templates/agents/qa.shared.md:734
- tool Invoke-Pester — templates/agents/qa.shared.md:372
- tool dotnet test — templates/agents/qa.shared.md:375
- tool mcp__cloudmcp-manager__memory-search_nodes — templates/agents/qa.shared.md:698
- tool mcp__cloudmcp-manager__memory-add_observations — templates/agents/qa.shared.md:705
- tool work_finish — templates/agents/qa.shared.md:94

## Invoked by — required
- `docs/agent-catalog.md:38`
- `src/copilot-cli/skills/ai-agents-generation-and-release/SKILL.md:62`
- `scripts/eval/eval-reviewer-asymmetry.py:59`

## Concepts named — required, verbatim
- `Autonomy Guardrail` — templates/agents/qa.shared.md:16 — used here
- `AGENTS.md` — templates/agents/qa.shared.md:16 — used here
- `Reviewer Asymmetry` — templates/agents/qa.shared.md:18 — defined here
- `Quality Assurance Specialist` — templates/agents/qa.shared.md:30 — defined here
- `Test Strategy Reasoning Protocol` — templates/agents/qa.shared.md:61 — defined here
- `Coverage tool directive (A5)` — templates/agents/qa.shared.md:71 — defined here
- `TESTING-RIGOR.md` — templates/agents/qa.shared.md:71 — used here
- `Completeness Verification` — templates/agents/qa.shared.md:75 — defined here
- `Code Quality Gates` — templates/agents/qa.shared.md:112 — defined here
- `Quality Gate Checklist` — templates/agents/qa.shared.md:116 — defined here
- `Test Quality Standards` — templates/agents/qa.shared.md:128 — defined here
- `Test Quality Criteria` — templates/agents/qa.shared.md:136 — defined here
- `Insufficient Test Patterns` — templates/agents/qa.shared.md:140 — defined here
- `Required Test Patterns` — templates/agents/qa.shared.md:154 — defined here
- `Test Review Checklist` — templates/agents/qa.shared.md:176 — defined here
- `Evidence for Verdict` — templates/agents/qa.shared.md:190 — defined here
- `Quality Metrics` — templates/agents/qa.shared.md:206 — defined here
- `Risk-Based Testing` — templates/agents/qa.shared.md:218 — defined here
- `Impact Analysis Mode` — templates/agents/qa.shared.md:236 — defined here
- `Analyze Quality & Testing Impact` — templates/agents/qa.shared.md:240 — defined here
- `Impact Analysis Deliverable` — templates/agents/qa.shared.md:250 — defined here
- `Pre-PR Quality Gate` — templates/agents/qa.shared.md:356 — defined here
- `Validation Protocol` — templates/agents/qa.shared.md:362 — defined here
- `CI Environment Test Validation` — templates/agents/qa.shared.md:366 — defined here
- `Fail-Safe Pattern Verification` — templates/agents/qa.shared.md:397 — defined here
- `Test-Implementation Alignment` — templates/agents/qa.shared.md:428 — defined here
- `Coverage Threshold Validation` — templates/agents/qa.shared.md:460 — defined here
- `Pre-PR Validation Report` — templates/agents/qa.shared.md:488 — defined here
- `Verdict Decision Logic` — templates/agents/qa.shared.md:536 — defined here
- `QA Report Length Bounds` — templates/agents/qa.shared.md:549 — defined here
- `Two-Phase Verification` — templates/agents/qa.shared.md:562 — defined here
- `Phase 1: Test Strategy` — templates/agents/qa.shared.md:564 — defined here
- `Phase 2: Verification` — templates/agents/qa.shared.md:598 — defined here
- `Memory Protocol` — templates/agents/qa.shared.md:691 — defined here
- `Constraints` — templates/agents/qa.shared.md:714 — defined here
- `Output Location` — templates/agents/qa.shared.md:721 — defined here
- `Handoff Options` — templates/agents/qa.shared.md:728 — defined here
- `Handoff Validation` — templates/agents/qa.shared.md:736 — defined here
- `Pass Handoff` — templates/agents/qa.shared.md:740 — defined here
- `Failure Handoff` — templates/agents/qa.shared.md:752 — defined here
- `Infrastructure Handoff` — templates/agents/qa.shared.md:763 — defined here
- `Validation Failure` — templates/agents/qa.shared.md:773 — defined here
- `Handoff Protocol` — templates/agents/qa.shared.md:781 — defined here
- `Execution Mindset` — templates/agents/qa.shared.md:793 — defined here
- `milestone-planner` — templates/agents/qa.shared.md:110 — used here
- `implementer` — templates/agents/qa.shared.md:733 — used here
- `orchestrator` — templates/agents/qa.shared.md:734 — used here

## Structure
- # QA Agent — templates/agents/qa.shared.md:14
- ## Reviewer Asymmetry (Read First) — templates/agents/qa.shared.md:18
- ## Core Identity — templates/agents/qa.shared.md:28
- ## Activation Profile — templates/agents/qa.shared.md:32
- ## Style Guide Compliance — templates/agents/qa.shared.md:38
- ## Core Mission — templates/agents/qa.shared.md:55
- ## Test Strategy Reasoning Protocol — templates/agents/qa.shared.md:61
- ## Completeness Verification (Mandatory) — templates/agents/qa.shared.md:75
- ## Key Responsibilities — templates/agents/qa.shared.md:100
- ## Code Quality Gates — templates/agents/qa.shared.md:112
- ### Quality Gate Checklist — templates/agents/qa.shared.md:116
- ## Test Quality Standards — templates/agents/qa.shared.md:128
- ## Test Quality Criteria — templates/agents/qa.shared.md:136
- ### Insufficient Test Patterns ([FAIL]) — templates/agents/qa.shared.md:140
- ### Required Test Patterns ([PASS]) — templates/agents/qa.shared.md:154
- ### Test Review Checklist — templates/agents/qa.shared.md:176
- ### Evidence for Verdict — templates/agents/qa.shared.md:190
- ## Quality Metrics — templates/agents/qa.shared.md:206
- ## Risk-Based Testing — templates/agents/qa.shared.md:218
- ## Impact Analysis Mode — templates/agents/qa.shared.md:236
- ### Analyze Quality & Testing Impact — templates/agents/qa.shared.md:240
- ### Impact Analysis Deliverable — templates/agents/qa.shared.md:250
- ## Pre-PR Quality Gate (MANDATORY) — templates/agents/qa.shared.md:356
- ### Validation Protocol — templates/agents/qa.shared.md:362
- #### Step 1: CI Environment Test Validation — templates/agents/qa.shared.md:366
- #### Step 2: Fail-Safe Pattern Verification — templates/agents/qa.shared.md:397
- #### Step 3: Test-Implementation Alignment — templates/agents/qa.shared.md:428
- #### Step 4: Coverage Threshold Validation — templates/agents/qa.shared.md:460
- ### Pre-PR Validation Report — templates/agents/qa.shared.md:488
- ### Verdict Decision Logic — templates/agents/qa.shared.md:536
- ## QA Report Length Bounds — templates/agents/qa.shared.md:549
- ## Two-Phase Verification — templates/agents/qa.shared.md:562
- ### Phase 1: Test Strategy (Before Implementation) — templates/agents/qa.shared.md:564
- ### Phase 2: Verification (After Implementation) — templates/agents/qa.shared.md:598
- ## Memory Protocol — templates/agents/qa.shared.md:691
- ## Constraints — templates/agents/qa.shared.md:714
- ## Output Location — templates/agents/qa.shared.md:721
- ## Handoff Options — templates/agents/qa.shared.md:728
- ## Handoff Validation — templates/agents/qa.shared.md:736
- ### Pass Handoff (to orchestrator) — templates/agents/qa.shared.md:740
- ### Failure Handoff (to implementer) — templates/agents/qa.shared.md:752
- ### Infrastructure Handoff (to milestone-planner) — templates/agents/qa.shared.md:763
- ### Validation Failure — templates/agents/qa.shared.md:773
- ## Handoff Protocol — templates/agents/qa.shared.md:781
- ## Execution Mindset — templates/agents/qa.shared.md:793

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
- `missing-path` · templates/agents/qa.shared.md:71 · `.agents/governance/TESTING-RIGOR.md` is designated as the single source of truth for canonical coverage tool invocations, but this file does not exist anywhere in the repository.

## Observations
- Shared multi-platform agent template: Defines the generic template for the QA agent, using `model_tier: opus` and multi-harness tool declarations (`tools_vscode`, `tools_copilot`), which diverges from the Claude Code-specific `.claude/agents/qa.md` (detailed in VARIANT V19 divergence card `claude-agents-qa-md--templates-agents-qa-shared-md.md`).
- Reviewer Asymmetry pattern: Mandates that QA operates as an adversarial reviewer with fresh context who has not seen the implementer's reasoning, requiring at least three critical findings per review to counter confirmation bias.
- Rigorous completeness verification: Enforces the "Promised vs Delivered" reconciliation protocol (prompted by past incidents of false completion reporting where agents claimed validation passed while only a fraction of files were produced).
- Pre-PR quality gates: Implements 4 mandatory gates (CI Environment Tests, Fail-Safe Patterns, Test-Implementation Alignment, Coverage Thresholds) with strict numeric thresholds (80% line, 70% branch, 80% new code) and explicit `[APPROVED]`, `[BLOCKED]`, `[CONDITIONAL]` verdict logic. Note that unlike `.claude/agents/qa.md`, this shared template omits the 5th PR Description validation gate.

## Context cost
File size is 27,850 bytes (~7,000 tokens). Loaded execution context includes test strategy/report templates and referenced governance guidelines, totaling ~35 KB (~8,750 tokens).
