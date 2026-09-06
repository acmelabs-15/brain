---
package: rjm
path: templates/agents/code-simplifier.shared.md
type: agent
bytes: 6273
unit: inv-rjm-315
in_scope_via: docs/workflow-commands.md
aliases: []
memo_inputs:
  - {path: templates/agents/code-simplifier.shared.md, sha256: 4ec268bd1710b891d2cdbd614849ad34357aa8da48ebceb6e22afa0729731407}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# templates/agents/code-simplifier.shared.md

## Purpose — required, verbatim
> "You simplify recently modified code without changing what it does. You produce either a rewrite diff or a list of refactors, never a vague suggestion." — templates/agents/code-simplifier.shared.md:23

## Design intent — required
A post-implementation code refinement specialist designed to simplify recently modified code for clarity, consistency, and maintainability without altering any observable behavior. It complements implementers by performing post-hoc balance judgements and language-specific polish once complete code is visible, producing concrete rewrite diffs or bounded refactor lists rather than abstract suggestions. Without it, newly written code would retain accidental complexity, deep nesting, and ad-hoc style inconsistencies that accumulate into technical debt.

## Phase — required
rjm:build

## Inputs — required
- Recently modified code, diffs, or named files via `argument-hint` ("Point to the recently modified code to simplify") — templates/agents/code-simplifier.shared.md:5.
- Complete function definitions and caller call-sites gathered via search — templates/agents/code-simplifier.shared.md:29,40.
- Unit and integration tests exercising the target function — templates/agents/code-simplifier.shared.md:41.
- Project-specific style guides, linter configs, or `.editorconfig` — templates/agents/code-simplifier.shared.md:84.

## Outputs — required
- Concrete refactoring changes in exactly one of two shapes: Option A (rewrite diff with before/after blocks and one-sentence rationale) or Option B (numbered refactor list naming specific transformations with max 10-line snippets) — templates/agents/code-simplifier.shared.md:49-67.
- Deferred refactor list ("Out of scope this pass") when more than 10 refactors apply — templates/agents/code-simplifier.shared.md:73.

## Invokes — required
- agent implementer — templates/agents/code-simplifier.shared.md:33
- agent qa — templates/agents/code-simplifier.shared.md:33
- agent security — templates/agents/code-simplifier.shared.md:125

## Invoked by — required
- agent code-simplifier — docs/agent-catalog.md:20
- agent code-simplifier — templates/agents/implementer.shared.md:491

## Concepts named — required, verbatim
- `support` — templates/agents/code-simplifier.shared.md:2 — used here
- `sonnet` — templates/agents/code-simplifier.shared.md:3 — used here
- `Code Simplifier Agent` — templates/agents/code-simplifier.shared.md:19 — defined here
- `Complementary Role` — templates/agents/code-simplifier.shared.md:21 — defined here
- `Reasoning Protocol` — templates/agents/code-simplifier.shared.md:25 — defined here
- `implementer` — templates/agents/code-simplifier.shared.md:33 — used here
- `qa` — templates/agents/code-simplifier.shared.md:33 — used here
- `Tool Use Directive` — templates/agents/code-simplifier.shared.md:35 — defined here
- `Output Shape` — templates/agents/code-simplifier.shared.md:45 — defined here
- `rewrite diff` — templates/agents/code-simplifier.shared.md:49 — defined here
- `refactor list` — templates/agents/code-simplifier.shared.md:60 — defined here
- `Output Bounds` — templates/agents/code-simplifier.shared.md:71 — defined here
- `Stylistic Positives` — templates/agents/code-simplifier.shared.md:75 — defined here
- `Functionality Preservation` — templates/agents/code-simplifier.shared.md:86 — defined here
- `Skip / Ask First` — templates/agents/code-simplifier.shared.md:97 — defined here
- `Agent Contract` — templates/agents/code-simplifier.shared.md:109 — defined here
- `COMPLETE` — templates/agents/code-simplifier.shared.md:122 — used here
- `BLOCKED` — templates/agents/code-simplifier.shared.md:123 — used here
- `NEEDS_DECOMPOSITION` — templates/agents/code-simplifier.shared.md:124 — used here
- `SECURITY_FLAG` — templates/agents/code-simplifier.shared.md:125 — used here
- `security` — templates/agents/code-simplifier.shared.md:125 — used here

## Structure
- # Code Simplifier Agent — templates/agents/code-simplifier.shared.md:19
- ## Reasoning Protocol — templates/agents/code-simplifier.shared.md:25
- ## Tool Use Directive — templates/agents/code-simplifier.shared.md:35
- ## Output Shape — templates/agents/code-simplifier.shared.md:45
- ## Output Bounds — templates/agents/code-simplifier.shared.md:71
- ## Stylistic Positives — templates/agents/code-simplifier.shared.md:75
- ## Functionality Preservation — templates/agents/code-simplifier.shared.md:86
- ## Skip / Ask First — templates/agents/code-simplifier.shared.md:97
- ## Agent Contract (delegation, gates, handoff) — templates/agents/code-simplifier.shared.md:109

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
- Cross-platform shared template: specifies `tools_vscode` (vscode, read, edit, search, execute) and `tools_copilot` (read, edit, search, shell) in YAML frontmatter rather than Claude Code MCP bindings.
- Variant relationship: shares 88% of distinct lines with `.claude/agents/code-simplifier.md` (ledger id V18; divergence card `docs/analysis/inventory/rjm/_divergence/claude-agents-code-simplifier-md--templates-agents-code-simplifier-shared-md.md`).
- Strict behavioral bounds: hard rules on functionality preservation (same inputs/outputs, error modes, side effects, public API names), capping refactors at 10 items per pass.

## Context cost
6273 bytes (approx. 1568 tokens).
