---
package: rjm
path: templates/agents/silent-failure-hunter.shared.md
type: agent
bytes: 11835
unit: inv-rjm-323
in_scope_via: docs/agent-catalog.md
aliases: []
memo_inputs:
  - {path: templates/agents/silent-failure-hunter.shared.md, sha256: 7edfe3cecb075fed987074b8a012b420750ea9ac1053089aa94d6f1dfb85598e}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# templates/agents/silent-failure-hunter.shared.md

## Purpose — required, verbatim
> "Use this agent when reviewing code changes in a pull request to identify silent failures, inadequate error handling, and inappropriate fallback behavior. This agent should be invoked proactively after completing a logical chunk of work that involves error handling, catch blocks, fallback logic, or any code that could potentially suppress errors." — templates/agents/silent-failure-hunter.shared.md:3

## Design intent — required
Cross-platform shared template defining the prompt and behavioral contract for the `silent-failure-hunter` agent, specialized in auditing pull request diffs and error handling implementations for suppressed failures, swallowed exceptions, inadequate logging, and unobservable fallback behavior. It establishes a 5-step review process and a 3-tier severity rubric (CRITICAL, HIGH, MEDIUM) centered on whether errors are surfaced or silenced. To minimize developer fatigue, it explicitly defines false-positive reduction criteria for best-effort cleanup paths, explicitly optional telemetry, and service boundary translation. Without this agent template, automated pull request workflows across Copilot CLI and VS Code would risk shipping silent catch blocks, mock/stub production fallbacks, and unobservable error suppression that generate obscure, hard-to-diagnose production outages.

## Phase — required
rjm:review

## Inputs — required
- PR, diff, or source files whose error handling is to be audited via argument hint (`argument-hint: Point to the PR, diff, or files whose error handling to audit` — templates/agents/silent-failure-hunter.shared.md:4)
- Codebase files via read and search tools (`read`, `search` — templates/agents/silent-failure-hunter.shared.md:7-8, 13-14)
- GitHub research and repository context via toolsets (`$toolset:github-research`, `$toolset:research`, `$toolset:knowledge` — templates/agents/silent-failure-hunter.shared.md:9-11, 15-17)
- Language-specific error signaling mechanisms: try-catch, Result/Either/Try types, error callbacks, conditional branches with status/sentinel values, fallbacks, null-safe operators, process exit codes, and rejected promises (templates/agents/silent-failure-hunter.shared.md:43-51)

## Outputs — required
- Structured error handling audit report per issue found, detailing: Location (file and line numbers), Severity (CRITICAL, HIGH, MEDIUM), Issue Description, Hidden Failure list, User Impact, Recommendation, and corrected code Example (templates/agents/silent-failure-hunter.shared.md:131-143)

## Invokes — required
none

## Invoked by — required
- doc silent-failure-hunter — docs/agent-catalog.md:43
- agent silent-failure-hunter — templates/agents/orchestrator.shared.md:112

## Concepts named — required, verbatim
- `Silent Failure Hunter Agent` — templates/agents/silent-failure-hunter.shared.md:20 — defined here
- `Core Principles` — templates/agents/silent-failure-hunter.shared.md:24 — defined here
- `Review Process` — templates/agents/silent-failure-hunter.shared.md:35 — defined here
- `Logging Quality` — templates/agents/silent-failure-hunter.shared.md:57 — defined here
- `User Feedback` — templates/agents/silent-failure-hunter.shared.md:65 — defined here
- `Catch Block Specificity` — templates/agents/silent-failure-hunter.shared.md:72 — defined here
- `Fallback Behavior` — templates/agents/silent-failure-hunter.shared.md:79 — defined here
- `Error Propagation` — templates/agents/silent-failure-hunter.shared.md:87 — defined here
- `Hidden Failures` — templates/agents/silent-failure-hunter.shared.md:104 — defined here
- `Boundary-Aware Failure Policy` — templates/agents/silent-failure-hunter.shared.md:116 — defined here
- `Output Format` — templates/agents/silent-failure-hunter.shared.md:129 — defined here
- `CRITICAL` — templates/agents/silent-failure-hunter.shared.md:135 — defined here
- `HIGH` — templates/agents/silent-failure-hunter.shared.md:136 — defined here
- `MEDIUM` — templates/agents/silent-failure-hunter.shared.md:137 — defined here
- `Reducing False Positives` — templates/agents/silent-failure-hunter.shared.md:155 — defined here
- `Cleanup best-effort paths` — templates/agents/silent-failure-hunter.shared.md:159 — defined here
- `Explicitly optional operations` — templates/agents/silent-failure-hunter.shared.md:160 — defined here
- `Boundary translation` — templates/agents/silent-failure-hunter.shared.md:161 — defined here

## Structure
- # Silent Failure Hunter Agent — templates/agents/silent-failure-hunter.shared.md:20
- ## Core Principles — templates/agents/silent-failure-hunter.shared.md:24
- ## Your Review Process — templates/agents/silent-failure-hunter.shared.md:35
- ### 1. Identify All Error Handling Code — templates/agents/silent-failure-hunter.shared.md:39
- ### 2. Scrutinize Each Error Handler — templates/agents/silent-failure-hunter.shared.md:53
- ### 3. Examine Error Messages — templates/agents/silent-failure-hunter.shared.md:93
- ### 4. Check for Hidden Failures — templates/agents/silent-failure-hunter.shared.md:104
- ### 5. Validate Against a Boundary-Aware Failure Policy — templates/agents/silent-failure-hunter.shared.md:116
- ## Your Output Format — templates/agents/silent-failure-hunter.shared.md:129
- ## Your Tone — templates/agents/silent-failure-hunter.shared.md:144
- ## Reducing False Positives — templates/agents/silent-failure-hunter.shared.md:155

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
Cross-platform shared template forming VARIANT V11 with `.claude/agents/silent-failure-hunter.md` (92% shared lines, 1 diff hunk), where frontmatter replaces Claude Code metadata (`name: silent-failure-hunter`, `model: opus`, `metadata.role: executor`) with `role: executor` and multi-platform tool definitions (`tools_vscode`, `tools_copilot`). The agent prompt strictly confines the role to reviewing and reporting without modifying code.

## Context cost
11835 bytes, approximately 2960 tokens. Loads no external references directly.
