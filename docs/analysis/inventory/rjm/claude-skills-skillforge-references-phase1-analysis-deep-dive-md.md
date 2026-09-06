---
package: rjm
path: .claude/skills/skillforge/references/phase1-analysis-deep-dive.md
type: reference
bytes: 5859
unit: inv-rjm-159
in_scope_via: .agents/architecture/README.md
aliases: []
memo_inputs:
  - {path: .claude/skills/skillforge/references/phase1-analysis-deep-dive.md, sha256: 242427fcc7271d76c15e9d96a0388cdb21f1dc97ee092f69c1bc77685887235f}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# .claude/skills/skillforge/references/phase1-analysis-deep-dive.md

## Purpose — required, verbatim
> "Transform user's goal into comprehensive requirements:" — .claude/skills/skillforge/references/phase1-analysis-deep-dive.md:5 (no explicit purpose statement)

## Design intent — required
Details the four sub-phases of Phase 1 (Deep Analysis) in SkillForge: 1A Input Expansion (mapping explicit, implicit, unknown-unknowns, and domain context), 1B Multi-Lens Analysis (scanning 11 thinking models), 1C Regression Questioning (iterative self-probing with strict termination criteria), and 1D Automation Analysis (evaluating operations for scripting opportunities). It establishes a rigorous pipeline for discovering non-obvious requirements and determining when deterministic automation should accompany skill instructions.

## Phase — required
rjm:Phase 1: Deep Analysis

## Inputs — required
- User goal and triage decision from Phase 0
- Existing skill catalog and triggers (via `ls ~/.claude/skills/` and grep)

## Outputs — required
- Expanded requirements (explicit, implicit, discovered)
- Lens analysis insights and anti-patterns
- Regression questioning insights across >=3 rounds
- Automation script candidates and architecture choices

## Invokes — required
- reference multi-lens-framework.md — .claude/skills/skillforge/references/phase1-analysis-deep-dive.md:66
- reference regression-questions.md — .claude/skills/skillforge/references/phase1-analysis-deep-dive.md:96
- reference script-integration-framework.md — .claude/skills/skillforge/references/phase1-analysis-deep-dive.md:141

## Invoked by — required
- skill skillforge — .claude/skills/skillforge/SKILL.md:158
- skill skillforge — .claude/skills/skillforge/SKILL.md:300

## Concepts named — required, verbatim
- `Input Expansion` — .claude/skills/skillforge/references/phase1-analysis-deep-dive.md:3 — defined here
- `Multi-Lens Analysis` — .claude/skills/skillforge/references/phase1-analysis-deep-dive.md:46 — defined here
- `Regression Questioning` — .claude/skills/skillforge/references/phase1-analysis-deep-dive.md:68 — defined here
- `Automation Analysis` — .claude/skills/skillforge/references/phase1-analysis-deep-dive.md:98 — defined here
- `Decision: Script vs No Script` — .claude/skills/skillforge/references/phase1-analysis-deep-dive.md:131 — defined here

## Structure
- `# Phase 1: Analysis Deep Dive` — .claude/skills/skillforge/references/phase1-analysis-deep-dive.md:1
- `## 1A: Input Expansion` — .claude/skills/skillforge/references/phase1-analysis-deep-dive.md:3
- `## 1B: Multi-Lens Analysis` — .claude/skills/skillforge/references/phase1-analysis-deep-dive.md:46
- `## 1C: Regression Questioning` — .claude/skills/skillforge/references/phase1-analysis-deep-dive.md:68
- `## 1D: Automation Analysis` — .claude/skills/skillforge/references/phase1-analysis-deep-dive.md:98
- `## Decision: Script vs No Script` — .claude/skills/skillforge/references/phase1-analysis-deep-dive.md:131

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
- Section 1A defines an overlap score table (.claude/skills/skillforge/references/phase1-analysis-deep-dive.md:40-45): >7/10 use existing skill, 5-7/10 clarify distinction, <5/10 proceed with new skill.
- Section 1C termination criteria requires three consecutive rounds with no new insights, all 11 models applied, at least 3 expert perspectives, and explicit evolution evaluation.

## Context cost
5,859 bytes (~1,465 tokens).
