---
package: rjm
path: .claude/skills/panning-for-gold/references/inventory-template.md
type: reference
bytes: 569
unit: inv-rjm-132
in_scope_via: .agents/architecture/README.md
aliases: []
memo_inputs:
  - {path: .claude/skills/panning-for-gold/references/inventory-template.md, sha256: 68b211dc4ce7a2b2965102dc8c33cd07efe876b13396a717af4b636bf2e149cd}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# .claude/skills/panning-for-gold/references/inventory-template.md

## Purpose — required, verbatim
> "# Thread Inventory" — .claude/skills/panning-for-gold/references/inventory-template.md:1 (no explicit purpose statement)

## Design intent — required
Defines the canonical markdown structure and field schema for raw and refined thread inventories generated during Phase 1 (Extract) of the `panning-for-gold` skill. It standardizes the metadata header (Source, Pass, Generated date) and mandates four structured bullet fields for each enumerated thread block: `Signal` (high, medium, low), `Quote` (verbatim source quotation), `Context` (one sentence on origin), and `Initial take` (one sentence on potential significance). This schema is parsed and validated directly by `scripts/inventory.py` and `scripts/pan.py`.

## Phase — required
cross-phase

## Inputs — required
none

## Outputs — required
none

## Invokes — required
none

## Invoked by — required
- skill panning-for-gold — .claude/skills/panning-for-gold/SKILL.md:139

## Concepts named — required, verbatim
- `Thread Inventory` — .claude/skills/panning-for-gold/references/inventory-template.md:1 — defined here
- `Signal` — .claude/skills/panning-for-gold/references/inventory-template.md:11 — defined here
- `Quote` — .claude/skills/panning-for-gold/references/inventory-template.md:12 — defined here
- `Context` — .claude/skills/panning-for-gold/references/inventory-template.md:13 — defined here
- `Initial take` — .claude/skills/panning-for-gold/references/inventory-template.md:14 — defined here

## Structure
- `# Thread Inventory` — .claude/skills/panning-for-gold/references/inventory-template.md:1
- `## Thread 1: \`{short title}\`` — .claude/skills/panning-for-gold/references/inventory-template.md:9
- `## Thread 2: \`{short title}\`` — .claude/skills/panning-for-gold/references/inventory-template.md:16

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
- The template content is self-validating: executing `pan.py validate` against `references/inventory-template.md` passes with 2 valid threads detected.
- Both sample thread blocks in the template use the identical title placeholder `{short title}` (.claude/skills/panning-for-gold/references/inventory-template.md:9, 16). When processed through `scripts/inventory.py:merge`, title deduplication consolidates them into a single merged entry.

## Context cost
569 bytes (~142 tokens).
