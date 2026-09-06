---
package: rjm
path: .claude/skills/reflect/references/phase3-4-propose-persist.md
type: reference
bytes: 7881
unit: inv-rjm-146
in_scope_via: .claude/skills/reflect/SKILL.md
aliases: []
memo_inputs:
  - {path: .claude/skills/reflect/references/phase3-4-propose-persist.md, sha256: c797e32ff834c793ed982059ea1368cf993481ebc2d25bf44165df0fed6a4ccc}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# .claude/skills/reflect/references/phase3-4-propose-persist.md

## Purpose — required, verbatim
> "SKILL.md Process steps 3 and 4 point here for the proposal display format," — .claude/skills/reflect/references/phase3-4-propose-persist.md:3

## Design intent — required
Defines the presentation, approval, persistence, and auto-citation protocols for phases 3 and 4 of reflection. Solves the risk of accidental or unverified memory modification by enforcing WCAG AA accessible visual formatting, mandatory preview before mutation, structured interactive editing (`Y`/`n`/`edit`), sidecar markdown layout, and regex-based code citation extraction with verification tooling (`python -m memory_enhancement verify`).

## Phase — required
cross-phase

## Inputs — required
- Classified learning signals from Phase 2.
- User input selection (`Y`, `n`, `edit`, `keep`, `modify`, `remove`).
- Existing memory content from `.serena/memories/{skill-name}-observations.md` via Serena MCP or filesystem.

## Outputs — required
none

## Invokes — required
- script memory_enhancement — .claude/skills/reflect/references/phase3-4-propose-persist.md:148

## Invoked by — required
- skill reflect — .claude/skills/reflect/SKILL.md:95

## Concepts named — required, verbatim
- `Phase 3: Propose Learnings` — .claude/skills/reflect/references/phase3-4-propose-persist.md:7 — defined here
- `Color Key` — .claude/skills/reflect/references/phase3-4-propose-persist.md:33 — defined here
- `User Response Handling` — .claude/skills/reflect/references/phase3-4-propose-persist.md:39 — defined here
- `Phase 4: Persist Learnings to Memory` — .claude/skills/reflect/references/phase3-4-propose-persist.md:60 — defined here
- `Storage Strategy` — .claude/skills/reflect/references/phase3-4-propose-persist.md:72 — defined here
- `Memory Format` — .claude/skills/reflect/references/phase3-4-propose-persist.md:92 — defined here
- `Auto-Citation Capture` — .claude/skills/reflect/references/phase3-4-propose-persist.md:121 — defined here
- `Citations` — .claude/skills/reflect/references/phase3-4-propose-persist.md:137 — defined here

## Structure
- `# Phases 3 and 4: Propose and Persist Learnings (Detailed)` — .claude/skills/reflect/references/phase3-4-propose-persist.md:1
- `## Phase 3: Propose Learnings` — .claude/skills/reflect/references/phase3-4-propose-persist.md:7
- `## Phase 4: Persist Learnings to Memory` — .claude/skills/reflect/references/phase3-4-propose-persist.md:60
- `### Phase 4 Enhancement: Auto-Citation Capture` — .claude/skills/reflect/references/phase3-4-propose-persist.md:121

## Defects — required
- missing-path · .claude/skills/reflect/references/phase3-4-propose-persist.md:148 · references `python -m memory_enhancement verify` which belongs to `scripts/memory_enhancement/`, an excluded directory under METHOD §1.2.

## Observations
- Highlights critical citation verification semantics: `::function` is a text search looking for `def name` or `async def name`, rendering it fragile for TypeScript, C#, Go, or Python classes.
- Context cost: 7881 bytes, ~1970 tokens.

## Context cost
7881 bytes, ~1970 tokens.
