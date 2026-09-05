---
package: rjm
path: .claude/agents/silent-failure-hunter.md
type: agent
bytes: 11659
unit: inv-rjm-73
in_scope_via: .claude/agents/orchestrator.md
aliases: []
memo_inputs:
  - {path: .claude/agents/silent-failure-hunter.md, sha256: fb277fb23fbb46edf07ff9f0b1de0108a3e159129be867919042453fc98c53e4}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# .claude/agents/silent-failure-hunter.md

## Purpose — required, verbatim
> "Use this agent when reviewing code changes in a pull request to identify silent failures, inadequate error handling, and inappropriate fallback behavior. This agent should be invoked proactively after completing a logical chunk of work that involves error handling, catch blocks, fallback logic, or any code that could potentially suppress errors." — .claude/agents/silent-failure-hunter.md:3

## Design intent — required
Specialized code review agent focused on eliminating silent failures, swallowed exceptions, inadequate error logging, and inappropriate fallbacks across pull requests. It provides an exhaustive review framework covering all error signaling mechanisms (exceptions, Result types, exit codes, callbacks, and null-coalescing operators) and enforces a 3-tier severity classification (CRITICAL, HIGH, MEDIUM) centered on error suppression. To prevent developer fatigue, it explicitly defines false-positive reduction criteria for cleanup operations, optional telemetry, and service boundary translation. Without it, pull requests would easily introduce swallowed exceptions, silent mock fallbacks, or unobservable failures that create obscure production outages.

## Phase — required
rjm:review

## Inputs — required
- Code changes, pull request diffs, or source files containing error handling, try-catch blocks, fallback logic, or exit codes.
- Argument hint: `Point to the PR, diff, or files whose error handling to audit` — .claude/agents/silent-failure-hunter.md:7

## Outputs — required
- Structured error handling audit report containing Location, Severity (CRITICAL, HIGH, MEDIUM), Issue Description, Hidden Failure list, User Impact, Recommendation, and corrected code Example.

## Invokes — required
none

## Invoked by — required
- agent silent-failure-hunter — .claude/agents/orchestrator.md:101

## Concepts named — required, verbatim
- `silent-failure-hunter` — .claude/agents/silent-failure-hunter.md:2 — defined here
- `Silent Failure Hunter Agent` — .claude/agents/silent-failure-hunter.md:10 — defined here
- `Core Principles` — .claude/agents/silent-failure-hunter.md:14 — defined here
- `Review Process` — .claude/agents/silent-failure-hunter.md:25 — defined here
- `Logging Quality` — .claude/agents/silent-failure-hunter.md:47 — defined here
- `User Feedback` — .claude/agents/silent-failure-hunter.md:55 — defined here
- `Catch Block Specificity` — .claude/agents/silent-failure-hunter.md:62 — defined here
- `Fallback Behavior` — .claude/agents/silent-failure-hunter.md:69 — defined here
- `Error Propagation` — .claude/agents/silent-failure-hunter.md:77 — defined here
- `Hidden Failures` — .claude/agents/silent-failure-hunter.md:94 — defined here
- `Boundary-Aware Failure Policy` — .claude/agents/silent-failure-hunter.md:106 — defined here
- `Output Format` — .claude/agents/silent-failure-hunter.md:119 — defined here
- `CRITICAL` — .claude/agents/silent-failure-hunter.md:125 — defined here
- `HIGH` — .claude/agents/silent-failure-hunter.md:126 — defined here
- `MEDIUM` — .claude/agents/silent-failure-hunter.md:127 — defined here
- `Reducing False Positives` — .claude/agents/silent-failure-hunter.md:145 — defined here
- `Cleanup best-effort paths` — .claude/agents/silent-failure-hunter.md:149 — defined here
- `Explicitly optional operations` — .claude/agents/silent-failure-hunter.md:150 — defined here
- `Boundary translation` — .claude/agents/silent-failure-hunter.md:151 — defined here

## Structure
- # Silent Failure Hunter Agent
- ## Core Principles
- ## Your Review Process
- ### 1. Identify All Error Handling Code
- ### 2. Scrutinize Each Error Handler
- ### 3. Examine Error Messages
- ### 4. Check for Hidden Failures
- ### 5. Validate Against a Boundary-Aware Failure Policy
- ## Your Output Format
- ## Your Tone
- ## Reducing False Positives

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
- other · .claude/agents/silent-failure-hunter.md:1 — One of six freestanding PR review agents noted in .agents/analysis/2003-claude-47-prompt-discipline-audit.md:458 that lacks a standard Handoff Protocol section, completion criteria, failure-mode contract, or explicit tool declaration block.

## Observations
Shares 92% of lines with templates/agents/silent-failure-hunter.shared.md (ledger variant V11). Configured with model opus and role executor. The agent reviews code and reports findings without directly modifying code.

## Context cost
11659 bytes, approximately 2915 tokens. Loads no external references directly.
