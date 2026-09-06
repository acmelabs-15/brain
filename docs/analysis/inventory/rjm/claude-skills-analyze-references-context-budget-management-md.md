---
package: rjm
path: .claude/skills/analyze/references/context-budget-management.md
type: reference
bytes: 1705
unit: inv-rjm-88
in_scope_via: .claude/skills/analyze/SKILL.md
aliases: []
memo_inputs:
  - {path: .claude/skills/analyze/references/context-budget-management.md, sha256: 17b9b1708b41bd381548add9b99a0f4128a6e82483ead7684967f67bb18884dc}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# .claude/skills/analyze/references/context-budget-management.md

## Purpose — required, verbatim
> "Raw tool output floods context windows. After 30 minutes of agentic work, 40% of context budget gone, triggering compaction and amnesia." — .claude/skills/analyze/references/context-budget-management.md:9

## Design intent — required
Addresses context window exhaustion, compaction amnesia, and quadratic token usage during agent execution. Formulates mitigation patterns including offloading raw tool outputs to SQLite with BM25 indexing, adopting the "Think in Code" principle where agents write data-processing scripts rather than ingesting raw files into context, and implementing a lifecycle hook architecture (`SessionStart`, `PreToolUse`, `PostToolUse`, `PreCompact`) to preserve state across compactions.

## Phase — required
cross-phase

## Inputs — required
none

## Outputs — required
none

## Invokes — required
none

## Invoked by — required
- reference references/context-budget-management.md — .claude/skills/analyze/SKILL.md:72

## Concepts named — required, verbatim
- `Three Problems` — .claude/skills/analyze/references/context-budget-management.md:11 — defined here
- `Raw data flood` — .claude/skills/analyze/references/context-budget-management.md:15 — defined here
- `Compaction amnesia` — .claude/skills/analyze/references/context-budget-management.md:16 — defined here
- `LLM as data processor` — .claude/skills/analyze/references/context-budget-management.md:17 — defined here
- `Think in Code Principle` — .claude/skills/analyze/references/context-budget-management.md:19 — defined here
- `Hook Architecture` — .claude/skills/analyze/references/context-budget-management.md:26 — defined here
- `SessionStart` — .claude/skills/analyze/references/context-budget-management.md:30 — defined here
- `PreToolUse` — .claude/skills/analyze/references/context-budget-management.md:31 — defined here
- `PostToolUse` — .claude/skills/analyze/references/context-budget-management.md:32 — defined here
- `PreCompact` — .claude/skills/analyze/references/context-budget-management.md:33 — defined here
- `Diagnostic Signals` — .claude/skills/analyze/references/context-budget-management.md:35 — defined here

## Structure
# Context Budget Management — .claude/skills/analyze/references/context-budget-management.md:7
## Three Problems — .claude/skills/analyze/references/context-budget-management.md:11
## Think in Code Principle — .claude/skills/analyze/references/context-budget-management.md:19
## Hook Architecture — .claude/skills/analyze/references/context-budget-management.md:26
## Diagnostic Signals — .claude/skills/analyze/references/context-budget-management.md:35

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
Contrasts serial file reads (O(n) context usage) with writing processing scripts (O(1) context usage). Outlines hook points for sandbox redirection, activity indexing into FTS5, and BM25-driven state retrieval upon compaction resume. Frontmatter cites external source `wiki/concepts/AI Productivity/Context Budget Management for AI Agents.md`.

## Context cost
1705 bytes, approximately 425 tokens.
