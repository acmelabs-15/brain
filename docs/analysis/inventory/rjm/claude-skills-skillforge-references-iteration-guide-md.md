---
package: rjm
path: .claude/skills/skillforge/references/iteration-guide.md
type: reference
bytes: 3449
unit: inv-rjm-159
in_scope_via: .agents/architecture/README.md
aliases: []
memo_inputs:
  - {path: .claude/skills/skillforge/references/iteration-guide.md, sha256: 5118f4210e260b60388478c9f4035a565622871dcda0747f0765dc510aac2d2e}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# .claude/skills/skillforge/references/iteration-guide.md

## Purpose — required, verbatim
> "Skill creation does not end at generation. The best skills are shaped by real usage. This guide formalizes iteration as a deliberate step in the skill lifecycle." — .claude/skills/skillforge/references/iteration-guide.md:3

## Design intent — required
Establishes a systematic post-generation refinement methodology for skills based on real usage observations. It provides structured diagnostics for identifying execution failures, rules for selecting the appropriate change target (SKILL.md, references, assets, or scripts), decision thresholds for iterating versus redesigning (<30% vs >50% rewrites), and concrete iteration patterns to anchor behavior and reduce freedom where necessary.

## Phase — required
cross-phase

## Inputs — required
- Observations from using the skill on real tasks (struggles, inconsistent output, unnecessary questions, excessive turn counts)
- Existing skill artifacts (`SKILL.md`, `references/`, `assets/templates/`, `scripts/`)

## Outputs — required
- Targeted refinements to `SKILL.md` (workflow, triggers, anti-patterns), `references/` (domain knowledge), `assets/templates/` (structured output templates), or `scripts/` (validation and automation)

## Invokes — required
- reference degrees-of-freedom.md — .claude/skills/skillforge/references/iteration-guide.md:83
- reference evolution-scoring.md — .claude/skills/skillforge/references/iteration-guide.md:84

## Invoked by — required
orphan

## Concepts named — required, verbatim
- `Iteration Guide` — .claude/skills/skillforge/references/iteration-guide.md:1 — defined here
- `Iteration Workflow` — .claude/skills/skillforge/references/iteration-guide.md:7 — defined here
- `Iterate vs Redesign` — .claude/skills/skillforge/references/iteration-guide.md:49 — defined here
- `Common Iteration Patterns` — .claude/skills/skillforge/references/iteration-guide.md:67 — defined here
- `Degrees of Freedom` — .claude/skills/skillforge/references/iteration-guide.md:83 — used here
- `Evolution Scoring` — .claude/skills/skillforge/references/iteration-guide.md:84 — used here

## Structure
- `# Iteration Guide` — .claude/skills/skillforge/references/iteration-guide.md:1
- `## Iteration Workflow` — .claude/skills/skillforge/references/iteration-guide.md:7
- `## What to Look For` — .claude/skills/skillforge/references/iteration-guide.md:22
- `## Where to Make Changes` — .claude/skills/skillforge/references/iteration-guide.md:36
- `## Iterate vs Redesign` — .claude/skills/skillforge/references/iteration-guide.md:49
- `## Common Iteration Patterns` — .claude/skills/skillforge/references/iteration-guide.md:67
- `## Related References` — .claude/skills/skillforge/references/iteration-guide.md:81

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
- orphan — .claude/skills/skillforge/references/iteration-guide.md:1 unreferenced by SKILL.md or any command; noted in .claude/skills/skillforge/TRANSFORMATION_NOTES.md:215 as an upstream reference addition

## Observations
- The guide defines concrete numerical criteria for the "Iterate vs Redesign" decision (.claude/skills/skillforge/references/iteration-guide.md:49-64): iterate when less than 30% of `SKILL.md` needs changes; redesign when more than 50% would need rewriting.

## Context cost
3,449 bytes (~862 tokens) alone; plus degrees-of-freedom.md (4,428 bytes) and evolution-scoring.md (8,675 bytes) = 16,552 bytes (~4,138 tokens).
