---
package: rjm
path: .claude/agents/code-simplifier.md
type: agent
bytes: 6182
unit: inv-rjm-65
in_scope_via: .agents/architecture/README.md
aliases: []
memo_inputs:
  - {path: .claude/agents/code-simplifier.md, sha256: 143d7143d73e79244f789421c37577a0d0fd4ef4b2384975a28e8935ec98c87c}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# .claude/agents/code-simplifier.md

## Purpose — required, verbatim
> "Use this agent when code has been written or modified and needs to be simplified for clarity, consistency, and maintainability while preserving all functionality. This agent should be triggered automatically after completing a coding task or writing a logical chunk of code. It simplifies code by following project best practices while retaining all functionality. The agent focuses only on recently modified code unless instructed otherwise." — .claude/agents/code-simplifier.md:3

## Design intent — required
A dedicated post-implementation refinement specialist that simplifies newly written or modified code for clarity, consistency, and maintainability without altering any observable behavior. It enforces strict functionality preservation rules (identical inputs, outputs, error modes, side effects, and public APIs) and outputs concrete code transformations (rewrite diffs or ranked refactor lists) rather than abstract suggestions. Without it, new code would accumulate cognitive complexity, nested conditionals, redundant allocations, and inconsistent idioms.

## Phase — required
rjm:build

## Inputs — required
- Recently modified code, diffs, or named files via `argument-hint` ("Point to the recently modified code to simplify") — .claude/agents/code-simplifier.md:7.
- Complete function definitions and caller call-sites gathered via Read and Grep tools — .claude/agents/code-simplifier.md:30-31.
- Unit and integration tests exercising the target function — .claude/agents/code-simplifier.md:32.
- Project-specific style guides, linter configs, or `.editorconfig` — .claude/agents/code-simplifier.md:75.

## Outputs — required
- Concrete refactoring changes in exactly one of two shapes: Option A (rewrite diff with before/after blocks and one-sentence rationale) or Option B (numbered refactor list naming specific transformations with max 10-line snippets) — .claude/agents/code-simplifier.md:36-61.
- Deferred refactor list ("Out of scope this pass") when more than 10 refactors apply — .claude/agents/code-simplifier.md:64.

## Invokes — required
- agent implementer — .claude/agents/code-simplifier.md:24
- agent qa — .claude/agents/code-simplifier.md:24
- agent security — .claude/agents/code-simplifier.md:116

## Invoked by — required
- agent code-simplifier — docs/agent-catalog.md:20
- agent code-simplifier — .claude/agents/implementer.md:502

## Concepts named — required, verbatim
- `code-simplifier` — .claude/agents/code-simplifier.md:2 — defined here
- `support` — .claude/agents/code-simplifier.md:6 — used here
- `Complementary Role` — .claude/agents/code-simplifier.md:12 — defined here
- `Reasoning Protocol` — .claude/agents/code-simplifier.md:16 — defined here
- `Tool Use Directive` — .claude/agents/code-simplifier.md:26 — defined here
- `Output Shape` — .claude/agents/code-simplifier.md:36 — defined here
- `rewrite diff` — .claude/agents/code-simplifier.md:40 — defined here
- `refactor list` — .claude/agents/code-simplifier.md:51 — defined here
- `Output Bounds` — .claude/agents/code-simplifier.md:62 — defined here
- `Stylistic Positives` — .claude/agents/code-simplifier.md:66 — defined here
- `Functionality Preservation` — .claude/agents/code-simplifier.md:77 — defined here
- `Skip / Ask First` — .claude/agents/code-simplifier.md:88 — defined here
- `Agent Contract` — .claude/agents/code-simplifier.md:100 — defined here

## Structure
- # Code Simplifier Agent — .claude/agents/code-simplifier.md:10
- ## Reasoning Protocol — .claude/agents/code-simplifier.md:16
- ## Tool Use Directive — .claude/agents/code-simplifier.md:26
- ## Output Shape — .claude/agents/code-simplifier.md:36
- ## Output Bounds — .claude/agents/code-simplifier.md:62
- ## Stylistic Positives — .claude/agents/code-simplifier.md:66
- ## Functionality Preservation — .claude/agents/code-simplifier.md:77
- ## Skip / Ask First — .claude/agents/code-simplifier.md:88
- ## Agent Contract (delegation, gates, handoff) — .claude/agents/code-simplifier.md:100

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
- Variant relation: shares 88% of distinct lines with `templates/agents/code-simplifier.shared.md` (ledger V18; divergence card created).
- Model selection: uses Anthropic Sonnet (`model: sonnet`) reflecting code refactoring needs without incurring Opus-level operational expense.
- Hard behavior-preservation boundaries: strictly rejects suggestions without executable code and bars behavior alterations (which must be handled by the implementer agent as feature changes).

## Context cost
6182 bytes (approx. 1546 tokens).
