---
package: rjm
path: .claude/skills/skillforge/references/degrees-of-freedom.md
type: reference
bytes: 4428
unit: inv-rjm-158
in_scope_via: .claude/skills/skillforge/SKILL.md
aliases: []
memo_inputs:
  - {path: .claude/skills/skillforge/references/degrees-of-freedom.md, sha256: 3d5311e2c2241676e4ae91d497de9e930061f02a45127c14560cb12cb2f9b99c}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# .claude/skills/skillforge/references/degrees-of-freedom.md

## Purpose — required, verbatim
> "When writing SKILL.md instructions, choose how much latitude to give Claude. Not every section needs the same level of specificity. The right choice depends on how fragile the operation is and how much valid variation exists." — .claude/skills/skillforge/references/degrees-of-freedom.md:5

## Design intent — required
Provides design guidelines for calibrating the degree of freedom (latitude) given to Claude in skill instructions. It establishes a three-tier model: High Freedom (prose/heuristics for context-dependent thinking and analysis), Medium Freedom (pseudocode/parameterized patterns for generation and templating), and Low Freedom (deterministic scripts/exact commands for fragile, error-prone mutations and validation). It teaches that degrees of freedom should decrease from thinking to acting ("analysis benefits from latitude; execution benefits from precision"), preventing both brittle over-constraint in analysis and hallucination/drift in execution.

## Phase — required
cross-phase

## Inputs — required
Operation fragility, failure cost, context dependency, reproducibility requirements.

## Outputs — required
none

## Invokes — required
- reference script-integration-framework.md — .claude/skills/skillforge/references/degrees-of-freedom.md:121
- reference multi-lens-framework.md — .claude/skills/skillforge/references/degrees-of-freedom.md:122

## Invoked by — required
- reference iteration-guide.md — .claude/skills/skillforge/references/iteration-guide.md:83

## Concepts named — required, verbatim
- `Degrees of Freedom` — .claude/skills/skillforge/references/degrees-of-freedom.md:1 — defined here
- `High Freedom` — .claude/skills/skillforge/references/degrees-of-freedom.md:13 — defined here
- `Medium Freedom` — .claude/skills/skillforge/references/degrees-of-freedom.md:33 — defined here
- `Low Freedom` — .claude/skills/skillforge/references/degrees-of-freedom.md:56 — defined here
- `Decision Matrix` — .claude/skills/skillforge/references/degrees-of-freedom.md:83 — defined here
- `Script Integration Framework` — .claude/skills/skillforge/references/degrees-of-freedom.md:121 — used here
- `Multi-Lens Framework` — .claude/skills/skillforge/references/degrees-of-freedom.md:122 — used here

## Structure
- # Degrees of Freedom in Skill Design — .claude/skills/skillforge/references/degrees-of-freedom.md:1
- ## The Three Levels — .claude/skills/skillforge/references/degrees-of-freedom.md:11
- ### High Freedom (Text-Based Instructions) — .claude/skills/skillforge/references/degrees-of-freedom.md:13
- ### Medium Freedom (Pseudocode or Parameterized Steps) — .claude/skills/skillforge/references/degrees-of-freedom.md:33
- ### Low Freedom (Exact Scripts or Commands) — .claude/skills/skillforge/references/degrees-of-freedom.md:56
- ## Decision Matrix — .claude/skills/skillforge/references/degrees-of-freedom.md:83
- ## Mixing Levels in One Skill — .claude/skills/skillforge/references/degrees-of-freedom.md:95
- ## Common Mistakes — .claude/skills/skillforge/references/degrees-of-freedom.md:108
- ## Related References — .claude/skills/skillforge/references/degrees-of-freedom.md:119

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
- Line 3 carries the marker `<!-- vendor-portability-exec: example invocations only; scripts referenced here are illustrative and do not exist in this repository -->`, noting that code blocks illustrate structural patterns rather than repository scripts.
- Although absent from `SKILL.md`'s primary references table, it is reachable via `references/iteration-guide.md:83` and cataloged in `TRANSFORMATION_NOTES.md:213`.

## Context cost
4428 bytes (approx. 1107 tokens).
When following invokes (`script-integration-framework.md` 17457 bytes, `multi-lens-framework.md` 10549 bytes): 32434 bytes (approx. 8108 tokens).
