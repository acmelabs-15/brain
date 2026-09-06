---
package: rjm
path: .claude/skills/skillforge/references/architecture-patterns.md
type: reference
bytes: 1067
unit: inv-rjm-158
in_scope_via: .claude/skills/skillforge/SKILL.md
aliases: []
memo_inputs:
  - {path: .claude/skills/skillforge/references/architecture-patterns.md, sha256: 8d435e1860a20134846db5bd3f3af1ed981de5fb03546d77575bce623b83ad01}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# .claude/skills/skillforge/references/architecture-patterns.md

## Purpose — required, verbatim
> "Select based on task complexity:" — .claude/skills/skillforge/references/architecture-patterns.md:3
(no explicit purpose statement; reference guide defining seven skill architecture patterns and a selection decision tree)

## Design intent — required
Provides a taxonomy and decision tree for selecting the structural architecture of a new skill based on its task complexity and operational characteristics. By mapping requirements to seven distinct patterns (Single-Phase, Checklist, Generator, Multi-Phase, Multi-Agent Parallel, Multi-Agent Sequential, Orchestrator), it prevents over-engineering simple tasks into bloated state machines and prevents under-engineering complex or multi-agent workflows into fragile monolithic scripts.

## Phase — required
rjm:Phase 2

## Inputs — required
Task complexity, artifact generation requirements, audit/verification nature, subtask dependency structure.

## Outputs — required
none

## Invokes — required
none

## Invoked by — required
- skill skillforge — .claude/skills/skillforge/SKILL.md:208

## Concepts named — required, verbatim
- `Single-Phase` — .claude/skills/skillforge/references/architecture-patterns.md:7 — defined here
- `Checklist` — .claude/skills/skillforge/references/architecture-patterns.md:8 — defined here
- `Generator` — .claude/skills/skillforge/references/architecture-patterns.md:9 — defined here
- `Multi-Phase` — .claude/skills/skillforge/references/architecture-patterns.md:10 — defined here
- `Multi-Agent Parallel` — .claude/skills/skillforge/references/architecture-patterns.md:11 — defined here
- `Multi-Agent Sequential` — .claude/skills/skillforge/references/architecture-patterns.md:12 — defined here
- `Orchestrator` — .claude/skills/skillforge/references/architecture-patterns.md:13 — defined here
- `Selection Decision Tree` — .claude/skills/skillforge/references/architecture-patterns.md:15 — defined here

## Structure
- # Architecture Patterns — .claude/skills/skillforge/references/architecture-patterns.md:1
- ## Selection Decision Tree — .claude/skills/skillforge/references/architecture-patterns.md:15

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
- Highly concise (28 lines, 1067 bytes), designed for immediate reference during Phase 2 pattern selection in the skill specification template (`skill-spec-template.xml:109`).

## Context cost
1067 bytes (approx. 267 tokens).
