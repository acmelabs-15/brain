---
package: rjm
path: .claude/skills/reflect/SKILL.md
type: skill
bytes: 5587
unit: inv-rjm-146
in_scope_via: .claude/skills/context-gather/SKILL.md
aliases: []
memo_inputs:
  - {path: .claude/skills/reflect/SKILL.md, sha256: 645403addd017edc990804ffecd3e577ef8c2b3a15e7e841b599c2e901b33c77}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# .claude/skills/reflect/SKILL.md

## Purpose — required, verbatim
> "**Critical learning capture system** that prevents repeating mistakes and preserves successful patterns across sessions." — .claude/skills/reflect/SKILL.md:13

## Design intent — required
Continuous improvement and memory capture engine for Claude Code skills. Bridges ephemeral conversation interactions and persistent long-term memory by proactively analyzing dialogues for user corrections, praise, and edge cases. Implements a disciplined four-phase lifecycle: (1) target skill identification and sidecar resolution (`.serena/memories/{skill-name}-observations.md`), (2) signal extraction categorized into confidence tiers (HIGH/MED/LOW) evaluated against a strict quantitative threshold, (3) accessible preview proposal with interactive editing (`Y`/`n`/`edit`), and (4) structured append-only persistence to Serena MCP (with local Git fallback) including auto-citation extraction.

## Phase — required
cross-phase

## Inputs — required
- Conversation history from active session.
- User input feedback and approval commands (`Y`, `n`, `edit`).
- Pre-existing sidecar memory files from `.serena/memories/{skill-name}-observations.md`.

## Outputs — required
- User-facing proposal summary with confidence indicators ([HIGH]/[MED]/[LOW]).
- Persisted sidecar markdown memory updates at `.serena/memories/{skill-name}-observations.md`.

## Invokes — required
- reference triggers.md — .claude/skills/reflect/SKILL.md:34
- skill retrospective — .claude/skills/reflect/SKILL.md:50
- reference phase2-signal-detection.md — .claude/skills/reflect/SKILL.md:79
- reference phase3-4-propose-persist.md — .claude/skills/reflect/SKILL.md:95
- reference decision-tree-and-examples.md — .claude/skills/reflect/SKILL.md:103
- reference integration-and-design.md — .claude/skills/reflect/SKILL.md:112
- skill memory — .claude/skills/reflect/SKILL.md:136
- skill using-forgetful-memory — .claude/skills/reflect/SKILL.md:137
- skill curating-memories — .claude/skills/reflect/SKILL.md:138

## Invoked by — required
- skill context-gather — .claude/skills/context-gather/SKILL.md:135
- doc retros.md — .claude/rules/retros.md:34

## Concepts named — required, verbatim
- `reflect` — .claude/skills/reflect/SKILL.md:2 — defined here
- `Reflect Skill` — .claude/skills/reflect/SKILL.md:11 — defined here
- `Triggers` — .claude/skills/reflect/SKILL.md:19 — defined here
- `When to Use` — .claude/skills/reflect/SKILL.md:40 — defined here
- `Phase 1: Identify the Target Skill` — .claude/skills/reflect/SKILL.md:59 — defined here
- `Serena MCP` — .claude/skills/reflect/SKILL.md:69 — used here
- `Phase 2: Analyze the Conversation` — .claude/skills/reflect/SKILL.md:72 — defined here
- `Phase 3: Propose Learnings` — .claude/skills/reflect/SKILL.md:82 — defined here
- `Phase 4: Persist Learnings to Memory` — .claude/skills/reflect/SKILL.md:88 — defined here
- `Verification` — .claude/skills/reflect/SKILL.md:120 — defined here
- `ADR-007` — .claude/skills/reflect/SKILL.md:8 — used here
- `ADR-017` — .claude/skills/reflect/SKILL.md:8 — used here

## Structure
- `# Reflect Skill` — .claude/skills/reflect/SKILL.md:11
- `## Triggers` — .claude/skills/reflect/SKILL.md:19
- `## When to Use` — .claude/skills/reflect/SKILL.md:40
- `## Process` — .claude/skills/reflect/SKILL.md:57
- `### Phase 1: Identify the Target Skill` — .claude/skills/reflect/SKILL.md:59
- `### Phase 2: Analyze the Conversation` — .claude/skills/reflect/SKILL.md:72
- `### Phase 3: Propose Learnings` — .claude/skills/reflect/SKILL.md:82
- `### Phase 4: Persist Learnings to Memory` — .claude/skills/reflect/SKILL.md:88
- `## Decision Tree, Examples, and Anti-Patterns` — .claude/skills/reflect/SKILL.md:101
- `## Integration, Design Decisions, and Commit Convention` — .claude/skills/reflect/SKILL.md:110
- `## Verification` — .claude/skills/reflect/SKILL.md:120
- `## Related` — .claude/skills/reflect/SKILL.md:132

## Defects — required
none

## Observations
- Organizes complex learning logic cleanly across a lean root `SKILL.md` (140 lines) delegating deep reference materials into modular files under `references/`.
- Governed by ADR-007 (sidecar pattern) and ADR-017 (naming pattern).
- Context cost: 5587 bytes (~1396 tokens); with all referenced documents: 28467 bytes (~7115 tokens).

## Context cost
5587 bytes (~1396 tokens); with all referenced documents: 28467 bytes (~7115 tokens).
