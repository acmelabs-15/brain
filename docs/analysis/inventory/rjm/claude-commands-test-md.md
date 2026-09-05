---
package: rjm
path: .claude/commands/test.md
type: command
bytes: 9191
unit: inv-rjm-75
in_scope_via: .agents/architecture/README.md
aliases: []
memo_inputs:
  - {path: .claude/commands/test.md, sha256: 74281fbfcba952ff4e88e177f7059484e828b78e5084a3de8463343dd82ef69d}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# .claude/commands/test.md

## Purpose — required, verbatim
> "Prove it works. Multi-dimensional quality validation across functional, non-functional, security, DevOps, DX, and observability. Run after /build." — .claude/commands/test.md:2

## Design intent — required
Defines the multi-dimensional testing and verification phase of the lifecycle executed after implementation (`/build`) and before review (`/review`). Rather than confining testing to unit test execution, it classifies pull request diffs by file types (CODE, WORKFLOW, CONFIG, DOCS, MIXED) and dispatches specialized agent personas across six distinct quality gates: functional testing (QA), non-functional testing (analyst), security audit (security), DevOps pipeline safety (devops), developer experience (critic), and observability/monitoring (architect). This ensures comprehensive verification across all operational dimensions while skipping gates irrelevant to specific file diffs.

## Phase — required
rjm:test

## Inputs — required
- Component or failure description via argument `$ARGUMENTS` (.claude/commands/test.md:4, 9).
- Git diff of changed files against base branch (`git diff origin/<base-branch> --name-only`) (.claude/commands/test.md:11, 27).
- Base branch reference detected via `gh pr view --json baseRefName` (defaulting to `main`) (.claude/commands/test.md:27).
- Acceptance criteria from `/spec` output (.claude/commands/test.md:49).
- Pinned harness contract from `Skill(skill="agent-harness-reference")` (.claude/commands/test.md:18).
- Verification path from `Skill(skill="ai-agents-portability-campaign")` (.claude/commands/test.md:20).
- Repository context via `@CLAUDE.md` (.claude/commands/test.md:7).

## Outputs — required
- Gate verdict lines and findings arrays (`GATE: [name]`, `VERDICT: PASS|WARN|CRITICAL_FAIL`, `FINDINGS:`) (.claude/commands/test.md:54, 66, 80, 92, 106, 118, 140-145).
- Synthesized overall quality report table across Functional, Non-Functional, Security, DevOps, DX, and Observability gates (.claude/commands/test.md:149-156).
- Overall quality score and verdict (`CRITICAL_FAIL`, `WARN`, or `PASS`) synthesized via `quality-grades` skill (.claude/commands/test.md:134, 158).

## Invokes — required
- doc CLAUDE.md — .claude/commands/test.md:7
- skill agent-harness-reference — .claude/commands/test.md:18
- skill ai-agents-portability-campaign — .claude/commands/test.md:20
- skill code-qualities-assessment — .claude/commands/test.md:43
- agent qa — .claude/commands/test.md:45
- agent analyst — .claude/commands/test.md:58
- skill security-scan — .claude/commands/test.md:70
- agent security — .claude/commands/test.md:72
- agent devops — .claude/commands/test.md:84
- skill orphan-ref-validator — .claude/commands/test.md:96
- agent critic — .claude/commands/test.md:98
- agent architect — .claude/commands/test.md:110
- skill quality-grades — .claude/commands/test.md:134

## Invoked by — required
- command /test — README.md:319
- command /test — docs/workflow-commands.md:117

## Concepts named — required, verbatim
- `Cross-Harness Hook Routing` — .claude/commands/test.md:13 — defined here
- `Classify PR Type` — .claude/commands/test.md:25 — defined here
- `Functional Testing` — .claude/commands/test.md:41 — defined here
- `Unit coverage` — .claude/commands/test.md:47 — defined here
- `Integration coverage` — .claude/commands/test.md:48 — defined here
- `Acceptance coverage` — .claude/commands/test.md:49 — defined here
- `Edge cases` — .claude/commands/test.md:50 — defined here
- `Error paths` — .claude/commands/test.md:51 — defined here
- `Regression risk` — .claude/commands/test.md:52 — defined here
- `Non-Functional Testing` — .claude/commands/test.md:56 — defined here
- `Security Testing` — .claude/commands/test.md:68 — defined here
- `OWASP Top 10` — .claude/commands/test.md:72 — used here
- `DevOps Testing` — .claude/commands/test.md:82 — defined here
- `Developer Experience` — .claude/commands/test.md:94 — defined here
- `Observability and Monitoring` — .claude/commands/test.md:108 — defined here
- `Testability is design feedback` — .claude/commands/test.md:122 — defined here
- `Tests are proof` — .claude/commands/test.md:123 — defined here
- `Hypothesis-driven debugging` — .claude/commands/test.md:124 — defined here
- `Defense in depth` — .claude/commands/test.md:125 — defined here
- `Overall verdict` — .claude/commands/test.md:158 — defined here

## Structure
- ## Cross-Harness Hook Routing — .claude/commands/test.md:13
- ## Step 0: Classify PR Type — .claude/commands/test.md:25
- ## Gate 1: Functional Testing — .claude/commands/test.md:41
- ## Gate 2: Non-Functional Testing — .claude/commands/test.md:56
- ## Gate 3: Security Testing — .claude/commands/test.md:68
- ## Gate 4: DevOps Testing — .claude/commands/test.md:82
- ## Gate 5: Developer Experience (DX) — .claude/commands/test.md:94
- ## Gate 6: Observability and Monitoring — .claude/commands/test.md:108
- ## Principles — .claude/commands/test.md:120
- ## Process — .claude/commands/test.md:127
- ## Output — .claude/commands/test.md:136

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
- doc-drift · .claude/commands/build.md:56 — .claude/commands/test.md:96 — cites .claude/commands/build.md:56 for Mandatory Exit Gate 4, but that gate is actually defined at build.md:70 (line 56 is under Quality Signals).

## Observations
- PR classification dynamically prunes non-applicable quality gates based on file types in the diff (e.g. DOCS changes only run Gate 5 DX, WORKFLOW changes run Gates 1, 3, 4).
- Gate findings are additive: even if a gate returns `CRITICAL_FAIL`, the remaining gates continue to run to produce a complete multi-dimensional audit report.
- Synthesizes findings using `quality-grades` skill and outputs a structured markdown table with pass/warn/critical_fail status.

## Context cost
9191 bytes (approx. 2300 tokens) plus referenced skills and subagents when invoked.
