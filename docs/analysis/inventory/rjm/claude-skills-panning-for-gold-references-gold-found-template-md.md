---
package: rjm
path: .claude/skills/panning-for-gold/references/gold-found-template.md
type: reference
bytes: 350
unit: inv-rjm-132
in_scope_via: .agents/architecture/README.md
aliases: []
memo_inputs:
  - {path: .claude/skills/panning-for-gold/references/gold-found-template.md, sha256: ac636d51b519870aab16eadf95800c86f06aebbbbfae04d39d4d690deee4c770}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# .claude/skills/panning-for-gold/references/gold-found-template.md

## Purpose — required, verbatim
> "# Gold Found" — .claude/skills/panning-for-gold/references/gold-found-template.md:1 (no explicit purpose statement)

## Design intent — required
Provides a structural markdown template for the synthesized gold-found output file produced during Phase 3 (Synthesize) of the `panning-for-gold` skill. It establishes the top-level metadata header block (Source, Generated date, Thread count) and partitions triaged threads into three descending signal tiers: High-Signal, Medium-Signal, and Low-Signal. It serves as the output blueprint consumed by downstream analysis agents or specification skills.

## Phase — required
cross-phase

## Inputs — required
none

## Outputs — required
none

## Invokes — required
none

## Invoked by — required
- skill panning-for-gold — .claude/skills/panning-for-gold/SKILL.md:91
- skill panning-for-gold — .claude/skills/panning-for-gold/SKILL.md:140

## Concepts named — required, verbatim
- `Gold Found` — .claude/skills/panning-for-gold/references/gold-found-template.md:1 — defined here
- `High-Signal` — .claude/skills/panning-for-gold/references/gold-found-template.md:9 — defined here
- `Medium-Signal` — .claude/skills/panning-for-gold/references/gold-found-template.md:15 — defined here
- `Low-Signal` — .claude/skills/panning-for-gold/references/gold-found-template.md:21 — defined here

## Structure
- `# Gold Found` — .claude/skills/panning-for-gold/references/gold-found-template.md:1
- `## High-Signal` — .claude/skills/panning-for-gold/references/gold-found-template.md:9
- `### Thread 1: \`{thread title}\`` — .claude/skills/panning-for-gold/references/gold-found-template.md:11
- `## Medium-Signal` — .claude/skills/panning-for-gold/references/gold-found-template.md:15
- `### Thread 1: \`{thread title}\` (medium)` — .claude/skills/panning-for-gold/references/gold-found-template.md:17
- `## Low-Signal` — .claude/skills/panning-for-gold/references/gold-found-template.md:21
- `### Thread 1: \`{thread title}\` (low)` — .claude/skills/panning-for-gold/references/gold-found-template.md:23

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
- The template demonstrates appending signal suffixes `(medium)` and `(low)` to thread titles under Medium-Signal (.claude/skills/panning-for-gold/references/gold-found-template.md:17) and Low-Signal (.claude/skills/panning-for-gold/references/gold-found-template.md:23) sections, whereas `scripts/synthesis.py:127` outputs uniform `### Thread {t.number}: {t.title}` headers across all sections.

## Context cost
350 bytes (~88 tokens).
