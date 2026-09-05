---
package: rjm
path: .claude/commands/build.md
type: command
bytes: 7777
unit: inv-rjm-74
in_scope_via: README.md
aliases: []
memo_inputs:
  - {path: .claude/commands/build.md, sha256: 29d6811b2eb2712273cae310f4addb615187cc2a8746c35bc1bfc99c262234c5}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# .claude/commands/build.md

## Purpose — required, verbatim
> "Build incrementally. Implement changes in thin vertical slices with TDD and atomic commits. Run after /plan." — .claude/commands/build.md:2

## Design intent — required
Primary lifecycle command for incremental implementation, executing code changes in thin vertical slices using strict test-driven development (TDD), atomic commits, and automated quality gating. It sequences cross-harness hook routing, complexity assessment, pre-mortem risk identification, implementation with symbolic/filesystem code discovery, and four mandatory exit gates before declaring the build complete.

## Phase — required
rjm:build

## Inputs — required
- Plan step or task description via argument hint or recent `/plan` output (`argument-hint: plan-step-or-task-description` — .claude/commands/build.md:4; `If $ARGUMENTS is empty, check for recent /plan output in the conversation. If none found, ask the user what to build.` — .claude/commands/build.md:11)
- Context file `@CLAUDE.md` (.claude/commands/build.md:7)
- Spec acceptance criteria from `/spec` output ("Read the spec AC for this slice." — .claude/commands/build.md:44)
- Complexity tiers reference `.claude/skills/analyze/references/engineering-complexity-tiers.md` (.claude/commands/build.md:28)
- Existing codebase patterns and tests discovered via Serena or `Grep`/`Read` (.claude/commands/build.md:45)
- Git configuration and threshold file `.qualityrc.json` (.claude/commands/build.md:67)

## Outputs — required
- Failing and passing test suites (`test_<behavior>`) (.claude/commands/build.md:44, 46)
- Source code implementation satisfying acceptance criteria (.claude/commands/build.md:48)
- Conventional atomic git commits (.claude/commands/build.md:50, 76)
- Quality gate verdicts from code quality, taste linter, documentation accuracy, and orphan reference validation (.claude/commands/build.md:67-70)

## Invokes — required
- doc CLAUDE.md — .claude/commands/build.md:7
- skill agent-harness-reference — .claude/commands/build.md:19
- skill ai-agents-portability-campaign — .claude/commands/build.md:21
- skill ai-agents-generation-and-release — .claude/commands/build.md:22
- reference engineering-complexity-tiers.md — .claude/commands/build.md:28
- agent analyst — .claude/commands/build.md:28
- skill pre-mortem — .claude/commands/build.md:36
- agent implementer — .claude/commands/build.md:40
- skill code-qualities-assessment — .claude/commands/build.md:67
- skill taste-lints — .claude/commands/build.md:68
- skill doc-accuracy — .claude/commands/build.md:69
- skill orphan-ref-validator — .claude/commands/build.md:70
- skill memory-gate — .claude/commands/build.md:79

## Invoked by — required
- script check_build_gates.py — scripts/validation/check_build_gates.py:61

## Concepts named — required, verbatim
- `thin vertical slices` — .claude/commands/build.md:2 — used here
- `TDD` — .claude/commands/build.md:2 — used here
- `atomic commits` — .claude/commands/build.md:2 — used here
- `Cross-Harness Hook Routing` — .claude/commands/build.md:13 — defined here
- `Complexity Assessment` — .claude/commands/build.md:26 — defined here
- `Tier 1-5` — .claude/commands/build.md:28 — used here
- `Pre-Mortem` — .claude/commands/build.md:34 — defined here
- `Self-apply gate` — .claude/commands/build.md:49 — defined here
- `Programming by Intention` — .claude/commands/build.md:57 — used here
- `Mandatory Exit Gates` — .claude/commands/build.md:61 — defined here
- `Guardrails` — .claude/commands/build.md:74 — defined here

## Structure
- ## Cross-Harness Hook Routing — .claude/commands/build.md:13
- ## Complexity Assessment — .claude/commands/build.md:26
- ## Pre-Mortem (Risk Identification) — .claude/commands/build.md:34
- ## Agent — .claude/commands/build.md:38
- ## Quality Signals — .claude/commands/build.md:52
- ## Mandatory Exit Gates — .claude/commands/build.md:61
- ## Guardrails — .claude/commands/build.md:74

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
- Enforces four mandatory exit gates as hard preconditions before declaring completion, refusing to kick findings to PR review.
- Fallback from Serena MCP symbolic navigation to Grep/Read ensures portability across diverse agent environments.

## Context cost
7,777 bytes. Approximately 1,950 tokens.
