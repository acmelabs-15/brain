---
package: rjm
path: .claude/agents/comment-analyzer.md
type: agent
bytes: 6610
unit: inv-rjm-65
in_scope_via: .agents/architecture/README.md
aliases: []
memo_inputs:
  - {path: .claude/agents/comment-analyzer.md, sha256: be14b44b239e3c4e96cea9b3999ddecf9202d3609fd442d96f24e8c9255b34fa}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# .claude/agents/comment-analyzer.md

## Purpose — required, verbatim
> "Use this agent when you need to analyze code comments for accuracy, completeness, and long-term maintainability. Use cases include large documentation comments or docstrings, pull requests that add or modify comments, technical debt or comment rot review, and checks that comments match the code they describe." — .claude/agents/comment-analyzer.md:3

## Design intent — required
A specialized review agent that audits code comments and docstrings against the actual implementation code to eliminate comment rot, misleading parameter documentation, outdated error contracts, and redundant restatements of code. It applies a ranked triage classification (Update > Remove > Preserve) with strict precedence rules so that diverging comments are corrected rather than silently removed, while essential design rationale, invariants, and security context are preserved.

## Phase — required
rjm:review

## Inputs — required
- Code comments, docstrings, or PR diffs via `argument-hint` ("Point to the comments or PR to review for accuracy") — .claude/agents/comment-analyzer.md:7.
- Implementation code at cited line ranges via Read tool — .claude/agents/comment-analyzer.md:28.
- Referenced symbols, functions, types, and constants searched via Grep — .claude/agents/comment-analyzer.md:29.
- Docstring-claimed exceptions and return values searched via Grep — .claude/agents/comment-analyzer.md:30.

## Outputs — required
- Structured audit findings report with Summary (3 sentences max), Findings list (10 items max, formatted with `file:line: [BUCKET]`, `Evidence:`, `Proposed change:`), and Recommendation (`APPROVE`, `CONDITIONAL APPROVE`, or `BLOCK`) — .claude/agents/comment-analyzer.md:50-73.

## Invokes — required
- agent implementer — .claude/agents/comment-analyzer.md:12
- agent pr-comment-responder — .claude/agents/comment-analyzer.md:12
- agent pr-review — .claude/agents/comment-analyzer.md:111

## Invoked by — required
- agent comment-analyzer — docs/agent-catalog.md:21

## Concepts named — required, verbatim
- `comment-analyzer` — .claude/agents/comment-analyzer.md:2 — defined here
- `support` — .claude/agents/comment-analyzer.md:6 — used here
- `Reasoning Protocol` — .claude/agents/comment-analyzer.md:14 — defined here
- `Tool Use Directive` — .claude/agents/comment-analyzer.md:24 — defined here
- `Triage Categories` — .claude/agents/comment-analyzer.md:34 — defined here
- `Preserve` — .claude/agents/comment-analyzer.md:38 — defined here
- `Update` — .claude/agents/comment-analyzer.md:39 — defined here
- `Remove` — .claude/agents/comment-analyzer.md:40 — defined here
- `Precedence` — .claude/agents/comment-analyzer.md:42 — defined here
- `Output Shape` — .claude/agents/comment-analyzer.md:50 — defined here
- `Output Bounds` — .claude/agents/comment-analyzer.md:70 — defined here
- `Stylistic Positives` — .claude/agents/comment-analyzer.md:74 — defined here
- `Skip / Ask First` — .claude/agents/comment-analyzer.md:81 — defined here
- `Agent Contract` — .claude/agents/comment-analyzer.md:94 — defined here

## Structure
- # Comment Analyzer Agent — .claude/agents/comment-analyzer.md:10
- ## Reasoning Protocol — .claude/agents/comment-analyzer.md:14
- ## Tool Use Directive — .claude/agents/comment-analyzer.md:24
- ## Triage Categories — .claude/agents/comment-analyzer.md:34
- ### Precedence (total order) — .claude/agents/comment-analyzer.md:42
- ## Output Shape — .claude/agents/comment-analyzer.md:50
- ## Output Bounds — .claude/agents/comment-analyzer.md:70
- ## Stylistic Positives — .claude/agents/comment-analyzer.md:74
- ## Skip / Ask First — .claude/agents/comment-analyzer.md:81
- ## Agent Contract (delegation, gates, handoff) — .claude/agents/comment-analyzer.md:94

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
- `doc-drift` · `pr-review` — .claude/agents/comment-analyzer.md:111 — Recommends handoff to "pr-review agent", but no agent file named pr-review.md exists under .claude/agents/ (only a Copilot CLI skill exists).

## Observations
- Variant relation: shares 87% of distinct lines with `templates/agents/comment-analyzer.shared.md` (ledger V20; divergence card created).
- Model selection: uses Anthropic Sonnet (`model: sonnet`) reflecting semantic language analysis requirements.
- Read-only enforcement: does not modify code or comments directly; delegates edit application to `implementer` or `pr-comment-responder`.

## Context cost
6610 bytes (approx. 1652 tokens).
