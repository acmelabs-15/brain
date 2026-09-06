---
package: rjm
path: .claude/skills/skillforge/references/phase2-specification-deep-dive.md
type: reference
bytes: 2011
unit: inv-rjm-159
in_scope_via: .agents/architecture/README.md
aliases: []
memo_inputs:
  - {path: .claude/skills/skillforge/references/phase2-specification-deep-dive.md, sha256: c290149e8372d86a6cdc5ec7c1b56975781fb6a1b175ce635f6e82282209a307}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# .claude/skills/skillforge/references/phase2-specification-deep-dive.md

## Purpose — required, verbatim
> "The specification captures all analysis insights in XML format:" — .claude/skills/skillforge/references/phase2-specification-deep-dive.md:5 (no explicit purpose statement)

## Design intent — required
Defines the XML schema and validation checklist for the intermediate skill specification artifact produced during Phase 2. It requires that all analysis insights from Phase 1 be captured in structured XML (`<metadata>`, `<context>`, `<requirements>`, `<architecture>`, `<scripts>`, `<evolution_analysis>`, `<anti_patterns>`, `<success_criteria>`) before generating files in Phase 3, ensuring every decision documents a rationale (WHY) and achieves a timelessness score of at least 7/10.

## Phase — required
rjm:Phase 2: Specification

## Inputs — required
- Analysis insights from Phase 1 (requirements, lenses, regression questioning, automation analysis)

## Outputs — required
- Structured `<skill_specification>` XML document

## Invokes — required
- reference specification-template.md — .claude/skills/skillforge/references/phase2-specification-deep-dive.md:54

## Invoked by — required
- skill skillforge — .claude/skills/skillforge/SKILL.md:171
- skill skillforge — .claude/skills/skillforge/SKILL.md:303

## Concepts named — required, verbatim
- `Specification Structure` — .claude/skills/skillforge/references/phase2-specification-deep-dive.md:3 — defined here
- `Specification Validation` — .claude/skills/skillforge/references/phase2-specification-deep-dive.md:56 — defined here
- `timelessness_score` — .claude/skills/skillforge/references/phase2-specification-deep-dive.md:12 — used here

## Structure
- `# Phase 2: Specification Deep Dive` — .claude/skills/skillforge/references/phase2-specification-deep-dive.md:1
- `## Specification Structure` — .claude/skills/skillforge/references/phase2-specification-deep-dive.md:3
- `## Specification Validation` — .claude/skills/skillforge/references/phase2-specification-deep-dive.md:56

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
- Phase 2 acts as a hard quality gate between analysis and generation: all sections must be present without placeholders, requirements must be traceable to source, and at least 2 extension points must be documented.

## Context cost
2,011 bytes (~503 tokens).
