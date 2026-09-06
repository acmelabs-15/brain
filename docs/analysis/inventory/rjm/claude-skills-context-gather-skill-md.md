---
package: rjm
path: .claude/skills/context-gather/SKILL.md
type: skill
bytes: 7441
unit: inv-rjm-104
in_scope_via: .agents/architecture/README.md
aliases: []
memo_inputs:
  - {path: .claude/skills/context-gather/SKILL.md, sha256: 73ed9f6423ee4e10ff21aaa759ad92eea62f7f0af0923aef4e19e296bc883904}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# .claude/skills/context-gather/SKILL.md

## Purpose — required, verbatim
> "Collect multi-source context before planning or implementation. Searches Forgetful Memory, Serena, Context7, DeepWiki, and web sources, then returns a focused summary that downstream commands can detect and skip redundant fetches." — .claude/skills/context-gather/SKILL.md:10

## Design intent — required
Standardizes preflight knowledge retrieval across multiple persistent memory and documentation tiers (Forgetful Memory, Serena, Context7, DeepWiki, Web Search) before planning or code implementation. Establishes a protocol using parseable `TIER_QUERIED: <tier>` reconciliation lines and a terminal `CONTEXT_LOADED: <topic>` marker. Downstream commands (`/build`, `/plan`, `/research` per SPEC-005) inspect the conversation context for this marker to short-circuit redundant retrieval, preventing token waste and context bloat.

## Phase — required
rjm:preflight

## Inputs — required
- Task description or technology topic (free text) — .claude/skills/context-gather/SKILL.md:26
- Conversation history scanned for prior `CONTEXT_LOADED:` marker — .claude/skills/context-gather/SKILL.md:52
- Knowledge tiers queried via tools:
  - Forgetful Memory: `mcp__forgetful__execute_forgetful_tool` — .claude/skills/context-gather/SKILL.md:103
  - Serena Memory: `mcp__serena__read_memory`, `mcp__serena__list_memories` — .claude/skills/context-gather/SKILL.md:104
  - Context7 documentation: `mcp__context7__resolve-library-id`, `mcp__context7__get-library-docs` — .claude/skills/context-gather/SKILL.md:105
  - DeepWiki repository documentation: `mcp__deepwiki__read_wiki_structure`, `mcp__deepwiki__read_wiki_contents`, `mcp__deepwiki__ask_question` — .claude/skills/context-gather/SKILL.md:106
  - Web sources: `WebSearch`, `WebFetch` — .claude/skills/context-gather/SKILL.md:107

## Outputs — required
- Focused context summary containing code snippets, architectural insights, and framework guidance — .claude/skills/context-gather/SKILL.md:27
- Source reconciliation marker lines: `TIER_QUERIED: <tier>` — .claude/skills/context-gather/SKILL.md:72
- Terminal skip-detection marker line: `CONTEXT_LOADED: <topic>` — .claude/skills/context-gather/SKILL.md:87

## Invokes — required
- skill exploring-knowledge-graph — .claude/skills/context-gather/SKILL.md:57
- reference context-retrieval.md — .claude/skills/context-gather/SKILL.md:60

## Invoked by — required
- agent implementer — .claude/agents/implementer.md:609
- skill autoplan — .claude/skills/autoplan/SKILL.md:124
- command context-hub-setup — .claude/commands/context-hub-setup.md:14
- command context-hub-setup — .claude/commands/context-hub-setup.md:44
- command context-hub-setup — .claude/commands/context-hub-setup.md:121
- skill context-optimizer — .claude/skills/context-optimizer/SKILL.md:4
- skill research-and-incorporate — .claude/skills/research-and-incorporate/SKILL.md:9

## Concepts named — required, verbatim
- `context-gather` — .claude/skills/context-gather/SKILL.md:2 — defined here
- `exploring-knowledge-graph` — .claude/skills/context-gather/SKILL.md:4 — used here
- `context-optimizer` — .claude/skills/context-optimizer/SKILL.md:4 — used here
- `ADR-002` — .claude/skills/context-gather/SKILL.md:12 — used here
- `SPEC-005` — .claude/skills/context-gather/SKILL.md:19 — used here
- `TIER_QUERIED:` — .claude/skills/context-gather/SKILL.md:72 — defined here
- `CONTEXT_LOADED:` — .claude/skills/context-gather/SKILL.md:87 — defined here
- `reflect` — .claude/skills/context-gather/SKILL.md:135 — used here
- `steering-matcher` — .claude/skills/context-gather/SKILL.md:136 — used here
- `chestertons-fence` — .claude/skills/context-gather/SKILL.md:137 — used here

## Structure
- # Context Gather — .claude/skills/context-gather/SKILL.md:8
- ## Triggers — .claude/skills/context-gather/SKILL.md:14
- ## Quick Reference — .claude/skills/context-gather/SKILL.md:22
- ## When to Use — .claude/skills/context-gather/SKILL.md:30
- ## When to Skip — .claude/skills/context-gather/SKILL.md:39
- ## Process — .claude/skills/context-gather/SKILL.md:48
- ### Phase 1: Check for Prior Invocation — .claude/skills/context-gather/SKILL.md:50
- ### Phase 2: Search Across Knowledge Tiers — .claude/skills/context-gather/SKILL.md:55
- ### Phase 3: Synthesize, Emit Marker, and Return — .claude/skills/context-gather/SKILL.md:77
- ## Extension Points — .claude/skills/context-gather/SKILL.md:94
- ## Tools — .claude/skills/context-gather/SKILL.md:99
- ## Anti-Patterns — .claude/skills/context-gather/SKILL.md:109
- ## Verification — .claude/skills/context-gather/SKILL.md:119
- ## References — .claude/skills/context-gather/SKILL.md:129

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
- Protocol markers: Uses `TIER_QUERIED: <tier>` for reconciliation auditing and terminal `CONTEXT_LOADED: <topic>` for conversational caching across commands.
- Model downgrade rationale: Shifted from `opus` (used by prior slash command) to `claude-sonnet-4-6` per ADR-002 model tiering because context gathering is information retrieval/synthesis rather than complex reasoning.
- References excluded skill `exploring-knowledge-graph` for its 5-tier search methodology and citation rules; per METHOD.md §1.2, this boundary is observed without reading excluded files.

## Context cost
7441 bytes (~1860 tokens).
