---
package: rjm
path: .claude/skills/analyze/references/context-budget-management.md
type: reference
bytes: 1705
unit: inv-rjm-88
in_scope_via: .claude/skills/analyze/SKILL.md
aliases: []
verified: 2026-09-06 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/analyze/references/context-budget-management.md, sha256: 17b9b1708b41bd381548add9b99a0f4128a6e82483ead7684967f67bb18884dc}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
---

# .claude/skills/analyze/references/context-budget-management.md

## Purpose — required, verbatim
> "Raw tool output floods context windows. After 30 minutes of agentic work, 40% of context budget gone, triggering compaction and amnesia." — .claude/skills/analyze/references/context-budget-management.md:9

## Design intent — required
Defines defensive context budget management strategies for autonomous agents operating in long-running sessions. It addresses three key failure modes: raw data floods from verbose tool output, compaction amnesia where context summarization erases intermediate state, and quadratic token consumption from using LLMs as serial data processors rather than code generators. It prescribes off-loading raw tool outputs to SQLite/BM25 search, maintaining FTS5 session indexes, adopting the "Think in Code" principle (writing data-processing scripts for O(1) context), and leveraging harness lifecycle hooks (`SessionStart`, `PreToolUse`, `PostToolUse`, `PreCompact`) to preserve continuity.

## Phase — required
cross-phase

## Inputs — required
- Tool execution payloads and file contents during agent sessions (.claude/skills/analyze/references/context-budget-management.md:9, 21)
- Hook triggers from agent runtime (`SessionStart`, `PreToolUse`, `PostToolUse`, `PreCompact`) (.claude/skills/analyze/references/context-budget-management.md:28-34)
- Diagnostic signals (forgetting mid-task state, context exhaustion <30 min, repeated file reads) (.claude/skills/analyze/references/context-budget-management.md:38-42)

## Outputs — required
none

## Invokes — required
none

## Invoked by — required
- skill analyze — .claude/skills/analyze/SKILL.md:72

## Concepts named — required, verbatim
- `Three Problems` — .claude/skills/analyze/references/context-budget-management.md:11 — defined here | used here
- `Raw data flood` — .claude/skills/analyze/references/context-budget-management.md:15 — defined here | used here
- `Compaction amnesia` — .claude/skills/analyze/references/context-budget-management.md:16 — defined here | used here
- `LLM as data processor` — .claude/skills/analyze/references/context-budget-management.md:17 — defined here | used here
- `Think in Code Principle` — .claude/skills/analyze/references/context-budget-management.md:19 — defined here | used here
- `Hook Architecture` — .claude/skills/analyze/references/context-budget-management.md:26 — defined here | used here
- `SessionStart` — .claude/skills/analyze/references/context-budget-management.md:30 — defined here | used here
- `PreToolUse` — .claude/skills/analyze/references/context-budget-management.md:31 — defined here | used here
- `PostToolUse` — .claude/skills/analyze/references/context-budget-management.md:32 — defined here | used here
- `PreCompact` — .claude/skills/analyze/references/context-budget-management.md:33 — defined here | used here
- `Diagnostic Signals` — .claude/skills/analyze/references/context-budget-management.md:35 — defined here | used here

## Structure
- `# Context Budget Management` — .claude/skills/analyze/references/context-budget-management.md:7
- `## Three Problems` — .claude/skills/analyze/references/context-budget-management.md:11
- `## Think in Code Principle` — .claude/skills/analyze/references/context-budget-management.md:19
- `## Hook Architecture` — .claude/skills/analyze/references/context-budget-management.md:26
- `## Diagnostic Signals` — .claude/skills/analyze/references/context-budget-management.md:35

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
- missing-path · .claude/skills/analyze/references/context-budget-management.md:2 · frontmatter `source:` references non-existent path `wiki/concepts/AI Productivity/Context Budget Management for AI Agents.md`.

## Observations
The "Think in Code" principle directly addresses quadratic token consumption by instructing agents to generate code that parses data rather than reading files serially into context. The Hook Architecture maps four lifecycle events to token preservation strategies.

## Context cost
1705 bytes, loads nothing further (0 bytes). Approximately 420 tokens.
