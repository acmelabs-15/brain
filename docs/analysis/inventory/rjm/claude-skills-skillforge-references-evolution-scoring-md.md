---
package: rjm
path: .claude/skills/skillforge/references/evolution-scoring.md
type: reference
bytes: 8675
unit: inv-rjm-158
in_scope_via: .claude/skills/skillforge/SKILL.md
aliases: []
memo_inputs:
  - {path: .claude/skills/skillforge/references/evolution-scoring.md, sha256: 7e5b7f9e76ce28a7545f65dc038b5e24a9820dd515183e5dbef0a06e8045c4cb}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# .claude/skills/skillforge/references/evolution-scoring.md

## Purpose — required, verbatim
> "The Evolution/Timelessness lens is the core evaluative perspective for SkillForge v4.0. Every skill must score ≥7 on timelessness to be approved." — .claude/skills/skillforge/references/evolution-scoring.md:3

## Design intent — required
Defines the authoritative quality gate and scoring methodology used by SkillForge (specifically by the Evolution/Timelessness Agent in Phase 4 synthesis panels) to evaluate how resiliently a generated skill will age. It establishes a 10-point timelessness rubric (from Ephemeral 1-2 to Timeless 9-10), a 4-step scoring process (temporal projection across 6-month, 1-year, 2-year, and 5-year horizons; dependency stability assessment; extension point verification; anti-obsolescence pattern checks), a catalog of 5 evolution anti-patterns, and quantifiable score adjustment factors (+0.5 to +1 for principles/extension design, -0.5 to -2 for hardcoded versions/missing projections). It ensures no skill ships that creates immediate maintenance burdens or breaks on model/tool updates.

## Phase — required
rjm:Phase 4

## Inputs — required
Skill design draft, XML skill specification (`skill-spec-template.xml`), temporal projections, extension point declarations, dependency list.

## Outputs — required
none

## Invokes — required
none

## Invoked by — required
- skill skillforge — .claude/skills/skillforge/SKILL.md:206
- reference evolution-timelessness.md — .claude/skills/skillforge/references/evolution-timelessness.md:35
- reference synthesis-protocol.md — .claude/skills/skillforge/references/synthesis-protocol.md:383
- reference iteration-guide.md — .claude/skills/skillforge/references/iteration-guide.md:84
- reference script-integration-framework.md — .claude/skills/skillforge/references/script-integration-framework.md:565

## Concepts named — required, verbatim
- `Evolution Scoring Framework` — .claude/skills/skillforge/references/evolution-scoring.md:1 — defined here
- `Evolution/Timelessness lens` — .claude/skills/skillforge/references/evolution-scoring.md:3 — defined here
- `timelessness` — .claude/skills/skillforge/references/evolution-scoring.md:3 — defined here
- `Timelessness Scoring Rubric` — .claude/skills/skillforge/references/evolution-scoring.md:20 — defined here
- `Temporal Projection Analysis` — .claude/skills/skillforge/references/evolution-scoring.md:141 — defined here
- `Dependency Stability Assessment` — .claude/skills/skillforge/references/evolution-scoring.md:172 — defined here
- `Extension Point Evaluation` — .claude/skills/skillforge/references/evolution-scoring.md:185 — defined here
- `Anti-Obsolescence Pattern Check` — .claude/skills/skillforge/references/evolution-scoring.md:200 — defined here
- `Version Pinning` — .claude/skills/skillforge/references/evolution-scoring.md:217 — defined here
- `Tool-Specific Design` — .claude/skills/skillforge/references/evolution-scoring.md:231 — defined here
- `Score Adjustment Factors` — .claude/skills/skillforge/references/evolution-scoring.md:301 — defined here
- `Evolution Score Template` — .claude/skills/skillforge/references/evolution-scoring.md:323 — defined here
- `Evolution/Timelessness Agent` — .claude/skills/skillforge/references/evolution-scoring.md:355 — defined here

## Structure
- # Evolution Scoring Framework — .claude/skills/skillforge/references/evolution-scoring.md:1
- ## Overview — .claude/skills/skillforge/references/evolution-scoring.md:5
- ## Timelessness Scoring Rubric — .claude/skills/skillforge/references/evolution-scoring.md:20
- ### Score 1-2: Ephemeral — .claude/skills/skillforge/references/evolution-scoring.md:22
- ### Score 3-4: Short-Lived — .claude/skills/skillforge/references/evolution-scoring.md:44
- ### Score 5-6: Moderate Longevity — .claude/skills/skillforge/references/evolution-scoring.md:66
- ### Score 7-8: Solid Design — .claude/skills/skillforge/references/evolution-scoring.md:89
- ### Score 9-10: Timeless — .claude/skills/skillforge/references/evolution-scoring.md:114
- ## Scoring Process — .claude/skills/skillforge/references/evolution-scoring.md:139
- ### Step 1: Temporal Projection Analysis — .claude/skills/skillforge/references/evolution-scoring.md:141
- ### Step 2: Dependency Stability Assessment — .claude/skills/skillforge/references/evolution-scoring.md:172
- ### Step 3: Extension Point Evaluation — .claude/skills/skillforge/references/evolution-scoring.md:185
- ### Step 4: Anti-Obsolescence Pattern Check — .claude/skills/skillforge/references/evolution-scoring.md:200
- ## Common Evolution Anti-Patterns — .claude/skills/skillforge/references/evolution-scoring.md:215
- ### Anti-Pattern 1: Version Pinning — .claude/skills/skillforge/references/evolution-scoring.md:217
- ### Anti-Pattern 2: Tool-Specific Design — .claude/skills/skillforge/references/evolution-scoring.md:231
- ### Anti-Pattern 3: Missing Extension Points — .claude/skills/skillforge/references/evolution-scoring.md:249
- ### Anti-Pattern 4: Implicit Dependencies — .claude/skills/skillforge/references/evolution-scoring.md:269
- ### Anti-Pattern 5: Point-in-Time Assumptions — .claude/skills/skillforge/references/evolution-scoring.md:284
- ## Score Adjustment Factors — .claude/skills/skillforge/references/evolution-scoring.md:301
- ### Positive Adjustments (+0.5 to +1) — .claude/skills/skillforge/references/evolution-scoring.md:303
- ### Negative Adjustments (-0.5 to -2) — .claude/skills/skillforge/references/evolution-scoring.md:312
- ## Evolution Score Template — .claude/skills/skillforge/references/evolution-scoring.md:323
- ## Integration with Synthesis Panel — .claude/skills/skillforge/references/evolution-scoring.md:353

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
- `doc-drift`: Line 362 states `Unanimous approval requires all three agents, including Evolution Agent, to approve`, whereas SkillForge v3.2.0/v4.1.0 introduced a 4th Script Agent for skills that ship scripts (see changelog.md:26 and SKILL.md:191-193).

## Observations
- Anti-Pattern 1 ("Version Pinning", line 217) recommends against `claude-3-5-sonnet-20241022`, yet suggests `default: claude-opus-4-6` (line 228), which is also pinned in `references/configuration.md:26-27`.
- Sets clear mathematical thresholds: base score average plus explicit adjustments, with a hard pass bar of >=7.0.

## Context cost
8675 bytes (approx. 2168 tokens).
