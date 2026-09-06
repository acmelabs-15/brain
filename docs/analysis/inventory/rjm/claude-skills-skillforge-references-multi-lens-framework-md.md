---
package: rjm
path: .claude/skills/skillforge/references/multi-lens-framework.md
type: reference
bytes: 10549
unit: inv-rjm-159
in_scope_via: .agents/architecture/README.md
aliases: []
memo_inputs:
  - {path: .claude/skills/skillforge/references/multi-lens-framework.md, sha256: b716c53f819caa1acd7b80de5bafc085922e78dbe55183d3ddc5a2753afb5e65}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# .claude/skills/skillforge/references/multi-lens-framework.md

## Purpose — required, verbatim
> "Systematic application of 11 thinking models to skill design. Each lens reveals different aspects of the problem space that single-perspective analysis would miss." — .claude/skills/skillforge/references/multi-lens-framework.md:3

## Design intent — required
Provides an operational framework for systematically applying 11 cognitive thinking models to skill design during Phase 1 (Deep Analysis). It forces multidimensional examination of problem spaces, prevents single-perspective blind spots, establishes structured templates for analysis outputs (including XML lens analysis), mandates explicit resolution of conflicting perspectives, and sets minimum coverage criteria (all 11 scanned, at least 5 deep dives, at least 3 actionable insights).

## Phase — required
rjm:Phase 1: Deep Analysis

## Inputs — required
- User goal and expanded requirements from Phase 1A (Input Expansion)
- Design decisions and proposed skill architecture

## Outputs — required
- Structured `<lens_analysis>` XML block containing core insights, implications, and design changes for inclusion in the skill specification

## Invokes — required
none

## Invoked by — required
- skill skillforge — .claude/skills/skillforge/SKILL.md:159
- skill skillforge — .claude/skills/skillforge/SKILL.md:301
- reference phase1-analysis-deep-dive.md — .claude/skills/skillforge/references/phase1-analysis-deep-dive.md:66
- reference degrees-of-freedom.md — .claude/skills/skillforge/references/degrees-of-freedom.md:122
- reference architect.md — .claude/skills/review/references/architect.md:51

## Concepts named — required, verbatim
- `Multi-Lens Analysis Framework` — .claude/skills/skillforge/references/multi-lens-framework.md:1 — defined here
- `First Principles` — .claude/skills/skillforge/references/multi-lens-framework.md:19 — defined here
- `Inversion` — .claude/skills/skillforge/references/multi-lens-framework.md:42 — defined here
- `Second-Order Effects` — .claude/skills/skillforge/references/multi-lens-framework.md:68 — defined here
- `Pre-Mortem` — .claude/skills/skillforge/references/multi-lens-framework.md:95 — defined here
- `Systems Thinking` — .claude/skills/skillforge/references/multi-lens-framework.md:130 — defined here
- `Devil's Advocate` — .claude/skills/skillforge/references/multi-lens-framework.md:160 — defined here
- `Constraint Analysis` — .claude/skills/skillforge/references/multi-lens-framework.md:184 — defined here
- `Pareto Analysis` — .claude/skills/skillforge/references/multi-lens-framework.md:210 — defined here
- `Root Cause Analysis` — .claude/skills/skillforge/references/multi-lens-framework.md:236 — defined here
- `Comparative Analysis` — .claude/skills/skillforge/references/multi-lens-framework.md:268 — defined here
- `Opportunity Cost` — .claude/skills/skillforge/references/multi-lens-framework.md:303 — defined here

## Structure
- `# Multi-Lens Analysis Framework` — .claude/skills/skillforge/references/multi-lens-framework.md:1
- `## Overview` — .claude/skills/skillforge/references/multi-lens-framework.md:5
- `## The 11 Thinking Models` — .claude/skills/skillforge/references/multi-lens-framework.md:17
- `### Lens 1: First Principles` — .claude/skills/skillforge/references/multi-lens-framework.md:19
- `### Lens 2: Inversion` — .claude/skills/skillforge/references/multi-lens-framework.md:42
- `### Lens 3: Second-Order Effects` — .claude/skills/skillforge/references/multi-lens-framework.md:68
- `### Lens 4: Pre-Mortem` — .claude/skills/skillforge/references/multi-lens-framework.md:95
- `### Lens 5: Systems Thinking` — .claude/skills/skillforge/references/multi-lens-framework.md:130
- `### Lens 6: Devil's Advocate` — .claude/skills/skillforge/references/multi-lens-framework.md:160
- `### Lens 7: Constraint Analysis` — .claude/skills/skillforge/references/multi-lens-framework.md:184
- `### Lens 8: Pareto Analysis (80/20 Rule)` — .claude/skills/skillforge/references/multi-lens-framework.md:210
- `### Lens 9: Root Cause Analysis (5 Whys)` — .claude/skills/skillforge/references/multi-lens-framework.md:236
- `### Lens 10: Comparative Analysis` — .claude/skills/skillforge/references/multi-lens-framework.md:268
- `### Lens 11: Opportunity Cost` — .claude/skills/skillforge/references/multi-lens-framework.md:303
- `## Lens Application Protocol` — .claude/skills/skillforge/references/multi-lens-framework.md:343
- `### Phase 1: Rapid Scan (All 11 Lenses)` — .claude/skills/skillforge/references/multi-lens-framework.md:345
- `### Phase 2: Deep Dive (High-Relevance Lenses)` — .claude/skills/skillforge/references/multi-lens-framework.md:367
- `### Phase 3: Conflict Resolution` — .claude/skills/skillforge/references/multi-lens-framework.md:376
- `## Integration with Skill Creation` — .claude/skills/skillforge/references/multi-lens-framework.md:387
- `### Output Format` — .claude/skills/skillforge/references/multi-lens-framework.md:389
- `### Minimum Coverage` — .claude/skills/skillforge/references/multi-lens-framework.md:409

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
- The 11 lenses are partitioned into a structured 3-phase application protocol: Phase 1 Rapid Scan (2-3 minutes across all 11 lenses), Phase 2 Deep Dive (10-15 minutes on high-relevance lenses), and Phase 3 Conflict Resolution.

## Context cost
10,549 bytes (~2,637 tokens).
