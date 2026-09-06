---
package: rjm
path: .claude/skills/skillforge/references/evolution-timelessness.md
type: reference
bytes: 1126
unit: inv-rjm-158
in_scope_via: .claude/skills/skillforge/SKILL.md
aliases: []
memo_inputs:
  - {path: .claude/skills/skillforge/references/evolution-timelessness.md, sha256: 8df03e8ec69ae99547b2b687ecbc9bd7e8618f1a74e84f3300b4001da7819da8}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# .claude/skills/skillforge/references/evolution-timelessness.md

## Purpose — required, verbatim
> "Every skill is evaluated through the evolution lens:" — .claude/skills/skillforge/references/evolution-timelessness.md:3
(no explicit purpose statement; quick reference summary of the evolution lens, temporal projection horizons, timelessness scoring tiers, and anti-obsolescence patterns)

## Design intent — required
Serves as an executive quick-reference companion to `evolution-scoring.md`. It condenses temporal projection questions (6 months, 1 year, 2 years, 5 years), the four score tiers (1-3 Reject, 4-6 Revise, 7-8 Approve, 9-10 Exemplary), and five core Do/Don't anti-obsolescence patterns into high-density tables that an agent can load at low context cost during specification or synthesis without parsing the full 363-line scoring framework.

## Phase — required
rjm:Phase 4

## Inputs — required
Skill design under evaluation.

## Outputs — required
none

## Invokes — required
- reference evolution-scoring.md — .claude/skills/skillforge/references/evolution-timelessness.md:35

## Invoked by — required
- skill skillforge — .claude/skills/skillforge/SKILL.md:207

## Concepts named — required, verbatim
- `evolution lens` — .claude/skills/skillforge/references/evolution-timelessness.md:3 — defined here
- `Temporal Projection` — .claude/skills/skillforge/references/evolution-timelessness.md:5 — defined here
- `Timelessness Scoring` — .claude/skills/skillforge/references/evolution-timelessness.md:14 — defined here
- `Anti-Obsolescence Patterns` — .claude/skills/skillforge/references/evolution-timelessness.md:25 — defined here

## Structure
- # Evolution and Timelessness — .claude/skills/skillforge/references/evolution-timelessness.md:1
- ## Temporal Projection — .claude/skills/skillforge/references/evolution-timelessness.md:5
- ## Timelessness Scoring — .claude/skills/skillforge/references/evolution-timelessness.md:14
- ## Anti-Obsolescence Patterns — .claude/skills/skillforge/references/evolution-timelessness.md:25

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
- Groups the scoring scale into 4 bands (1-3 Reject, 4-6 Revise, 7-8 Approve, 9-10 Exemplary at lines 18-21), slightly consolidating the 5 tiers (1-2, 3-4, 5-6, 7-8, 9-10) defined in `evolution-scoring.md:22-114`.
- Recommends consulting `evolution-scoring.md` for the full methodology at line 35.

## Context cost
1126 bytes (approx. 282 tokens).
When following invokes (`evolution-scoring.md` 8675 bytes): 9801 bytes (approx. 2450 tokens).
