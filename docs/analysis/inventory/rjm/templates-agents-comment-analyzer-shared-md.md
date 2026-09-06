---
package: rjm
path: templates/agents/comment-analyzer.shared.md
type: agent
bytes: 6808
unit: inv-rjm-315
in_scope_via: docs/workflow-commands.md
aliases: []
memo_inputs:
  - {path: templates/agents/comment-analyzer.shared.md, sha256: edcee882ed36961652791afd7a6fa09620e7d6753248bbe30f9d0bd35ce86296}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# templates/agents/comment-analyzer.shared.md

## Purpose — required, verbatim
> "You verify comments against the code they describe. You flag mismatches with file:line evidence and propose a specific change. You never modify code or comments directly; the implementer or pr-comment-responder agent applies the change." — templates/agents/comment-analyzer.shared.md:23

## Design intent — required
A specialized read-only comment audit agent that verifies code comments and docstrings against the actual implementation to prevent comment rot and misleading documentation. It classifies comments into strict triage buckets (Preserve, Update, Remove) using a total-order precedence rule (Update wins over Remove, which wins over Preserve). It delivers structured, evidence-backed findings with file:line citations and concrete edits without directly editing code or comments, delegating modifications to implementers or PR comment responders. Without it, comments diverge silently from evolving implementations, misleading future engineers and agent workflows.

## Phase — required
rjm:review

## Inputs — required
- Code comments, docstrings, or PR diffs via `argument-hint` ("Point to the comments or PR to review for accuracy") — templates/agents/comment-analyzer.shared.md:5.
- Targeted file content and line ranges read via Read tool — templates/agents/comment-analyzer.shared.md:39.
- Codebase symbols (functions, types, constants, exceptions) verified via Grep tool — templates/agents/comment-analyzer.shared.md:40-41.

## Outputs — required
- Structured comment review report with Summary (max 3 sentences), Findings (max 10 items with file:line, bucket, evidence, and proposed change), and a 1-sentence Recommendation (APPROVE, CONDITIONAL APPROVE, or BLOCK) — templates/agents/comment-analyzer.shared.md:65-80.

## Invokes — required
- agent implementer — templates/agents/comment-analyzer.shared.md:23
- agent pr-comment-responder — templates/agents/comment-analyzer.shared.md:23
- agent pr-review — templates/agents/comment-analyzer.shared.md:122

## Invoked by — required
- agent comment-analyzer — docs/agent-catalog.md:21

## Concepts named — required, verbatim
- `support` — templates/agents/comment-analyzer.shared.md:2 — used here
- `sonnet` — templates/agents/comment-analyzer.shared.md:3 — used here
- `Comment Analyzer Agent` — templates/agents/comment-analyzer.shared.md:21 — defined here
- `implementer` — templates/agents/comment-analyzer.shared.md:23 — used here
- `pr-comment-responder` — templates/agents/comment-analyzer.shared.md:23 — used here
- `Reasoning Protocol` — templates/agents/comment-analyzer.shared.md:25 — defined here
- `Tool Use Directive` — templates/agents/comment-analyzer.shared.md:35 — defined here
- `Triage Categories` — templates/agents/comment-analyzer.shared.md:45 — defined here
- `Preserve` — templates/agents/comment-analyzer.shared.md:49 — defined here
- `Update` — templates/agents/comment-analyzer.shared.md:50 — defined here
- `Remove` — templates/agents/comment-analyzer.shared.md:51 — defined here
- `Precedence` — templates/agents/comment-analyzer.shared.md:53 — defined here
- `Output Shape` — templates/agents/comment-analyzer.shared.md:61 — defined here
- `Output Bounds` — templates/agents/comment-analyzer.shared.md:81 — defined here
- `Stylistic Positives` — templates/agents/comment-analyzer.shared.md:85 — defined here
- `Skip / Ask First` — templates/agents/comment-analyzer.shared.md:92 — defined here
- `Agent Contract` — templates/agents/comment-analyzer.shared.md:105 — defined here
- `COMPLETE` — templates/agents/comment-analyzer.shared.md:118 — used here
- `BLOCKED` — templates/agents/comment-analyzer.shared.md:119 — used here
- `NEEDS_DECOMPOSITION` — templates/agents/comment-analyzer.shared.md:120 — used here
- `pr-review` — templates/agents/comment-analyzer.shared.md:122 — used here

## Structure
- # Comment Analyzer Agent — templates/agents/comment-analyzer.shared.md:21
- ## Reasoning Protocol — templates/agents/comment-analyzer.shared.md:25
- ## Tool Use Directive — templates/agents/comment-analyzer.shared.md:35
- ## Triage Categories — templates/agents/comment-analyzer.shared.md:45
- ### Precedence (total order) — templates/agents/comment-analyzer.shared.md:53
- ## Output Shape — templates/agents/comment-analyzer.shared.md:61
- ## Output Bounds — templates/agents/comment-analyzer.shared.md:81
- ## Stylistic Positives — templates/agents/comment-analyzer.shared.md:85
- ## Skip / Ask First — templates/agents/comment-analyzer.shared.md:92
- ## Agent Contract (delegation, gates, handoff) — templates/agents/comment-analyzer.shared.md:105

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
- Cross-platform configuration: uses generic toolsets (`$toolset:github-research`, `$toolset:research`, `$toolset:knowledge`) for VS Code and Copilot rather than Claude Code MCP server declarations.
- Variant relationship: shares 87% of distinct lines with `.claude/agents/comment-analyzer.md` (ledger id V20; divergence card `docs/analysis/inventory/rjm/_divergence/claude-agents-comment-analyzer-md--templates-agents-comment-analyzer-shared-md.md`).
- Explicit triage order: strictly resolves ambiguity across categories by enforcing `Update` over `Remove` over `Preserve` to prevent silent suppression of inaccurate comments.

## Context cost
6808 bytes (approx. 1702 tokens).
