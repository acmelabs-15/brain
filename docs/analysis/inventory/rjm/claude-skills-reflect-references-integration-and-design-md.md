---
package: rjm
path: .claude/skills/reflect/references/integration-and-design.md
type: reference
bytes: 4009
unit: inv-rjm-146
in_scope_via: .claude/skills/reflect/SKILL.md
aliases: []
memo_inputs:
  - {path: .claude/skills/reflect/references/integration-and-design.md, sha256: 37a4ebbbef480bfe271c45cbd567a65f527f81114f9f955e9ec7f8de6b401624}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# .claude/skills/reflect/references/integration-and-design.md

## Purpose — required, verbatim
> "SKILL.md points here for integration patterns (session protocol, memory skill," — .claude/skills/reflect/references/integration-and-design.md:3

## Design intent — required
Specifies architectural integration contracts for the `reflect` skill within the broader agent workflow. Details alignment with ADR-007 (agent sidecar naming convention `{skill-name}-observations.md`), Serena MCP vs. Git fallback mechanics, semantic lookup integration with Forgetful, handoff boundaries with `curating-memories`, durable continuity triggers (e.g., Stop hook or session end with ≥3 skills), and a standardized Git commit convention for memory updates.

## Phase — required
cross-phase

## Inputs — required
- Session context and invocation history (e.g., count of distinct skills used, session id).
- Pre-existing sidecar memory files located at `.serena/memories/{skill-name}-observations.md` or `.serena/memories/{skill-name}/{skill-name}-observations.md`.
- Tool availability status (Serena MCP vs. local Git filesystem).

## Outputs — required
none

## Invokes — required
- script search_memory.py — .claude/skills/reflect/references/integration-and-design.md:27
- skill curating-memories — .claude/skills/reflect/references/integration-and-design.md:62
- skill using-forgetful-memory — .claude/skills/reflect/references/integration-and-design.md:86
- skill retrospective — .claude/skills/reflect/references/integration-and-design.md:88

## Invoked by — required
- skill reflect — .claude/skills/reflect/SKILL.md:112

## Concepts named — required, verbatim
- `Session Protocol` — .claude/skills/reflect/references/integration-and-design.md:9 — used here
- `Session End Checklist` — .claude/skills/reflect/references/integration-and-design.md:14 — defined here
- `Memory Skill` — .claude/skills/reflect/references/integration-and-design.md:21 — used here
- `Serena` — .claude/skills/reflect/references/integration-and-design.md:33 — used here
- `Serena MCP` — .claude/skills/reflect/references/integration-and-design.md:35 — used here
- `Sidecar Naming` — .claude/skills/reflect/references/integration-and-design.md:44 — defined here
- `ADR-007` — .claude/skills/reflect/references/integration-and-design.md:46 — used here
- `ADR-017` — .claude/skills/reflect/references/integration-and-design.md:51 — used here
- `Single Canonical Store` — .claude/skills/reflect/references/integration-and-design.md:53 — defined here
- `Forgetful` — .claude/skills/reflect/references/integration-and-design.md:57 — used here
- `curating-memories` — .claude/skills/reflect/references/integration-and-design.md:62 — used here
- `Durable Continuity Integration` — .claude/skills/reflect/references/integration-and-design.md:68 — defined here
- `Commit Convention` — .claude/skills/reflect/references/integration-and-design.md:90 — defined here

## Structure
- `# Integration, Design Decisions, Extension Points (Detailed)` — .claude/skills/reflect/references/integration-and-design.md:1
- `## Integration` — .claude/skills/reflect/references/integration-and-design.md:7
- `### With Session Protocol` — .claude/skills/reflect/references/integration-and-design.md:9
- `### With Memory Skill` — .claude/skills/reflect/references/integration-and-design.md:21
- `### With Serena` — .claude/skills/reflect/references/integration-and-design.md:33
- `## Design Decisions` — .claude/skills/reflect/references/integration-and-design.md:42
- "### Agent Sidecar Naming: `{skill-name}-observations.md`" — .claude/skills/reflect/references/integration-and-design.md:44
- `### Serena vs Forgetful Roles` — .claude/skills/reflect/references/integration-and-design.md:57
- "### Relationship to `curating-memories`" — .claude/skills/reflect/references/integration-and-design.md:62
- `### Durable Continuity Integration` — .claude/skills/reflect/references/integration-and-design.md:68
- `## Extension Points` — .claude/skills/reflect/references/integration-and-design.md:74
- `## Related` — .claude/skills/reflect/references/integration-and-design.md:81
- `## Commit Convention` — .claude/skills/reflect/references/integration-and-design.md:90

## Defects — required
- missing-path · .claude/skills/reflect/references/integration-and-design.md:27 · references `.claude/skills/memory/scripts/search_memory.py` which falls into the memory exclusion boundary and does not exist in standard lifecycle scope.

## Observations
- Explicitly enforces dual-tier storage strategy: Serena MCP is the primary canonical store, while Git commits act as a durable contingency fallback when Serena MCP is unreachable.
- Context cost: 4009 bytes, ~1000 tokens.

## Context cost
4009 bytes, ~1000 tokens.
