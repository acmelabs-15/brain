---
package: rjm
path: .claude/skills/skillforge/references/phase4-synthesis-deep-dive.md
type: reference
bytes: 2619
unit: inv-rjm-160
in_scope_via: .claude/skills/skillforge/SKILL.md
aliases: []
memo_inputs:
  - {path: .claude/skills/skillforge/references/phase4-synthesis-deep-dive.md, sha256: c1dd0e02bdb365dfc6c492fd2e5a9726aeaa054a6f0f442d18a0504f72521cb3}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# .claude/skills/skillforge/references/phase4-synthesis-deep-dive.md

## Purpose — required, verbatim
> "**Panel:** 3-4 Opus agents with distinct evaluative lenses" — .claude/skills/skillforge/references/phase4-synthesis-deep-dive.md:3 (no explicit purpose statement)

## Design intent — required
Specifies the synthesis panel evaluation protocol for Phase 4 of SkillForge skill creation and improvement. It establishes an adversarial, multi-agent review board consisting of 3 core agents (Design/Architecture, Audience/Usability, Evolution/Timelessness) and 1 conditional agent (Script/Automation for skills with scripts) running Opus-level models. It enforces a strict consensus protocol requiring unanimous approval across all evaluative lenses before a skill can be finalized, with an automated feedback loop returning issues to Phase 1 deep analysis (capped at 5 iterations before escalating to human review). Without this document, skill evaluation would lack structured consensus criteria, objective scoring rubrics, and automated fallback escalation, allowing skills with structural flaws, poor usability, architectural obsolescence, or fragile scripts to be prematurely deployed.

## Phase — required
rjm:Phase 4: Synthesis Panel

## Inputs — required
Generated skill artifacts produced by Phase 3 (including `SKILL.md`, `references/`, `assets/`, and `scripts/` if present) along with the skill specification from Phase 2.

## Outputs — required
Structured agent review reports containing verdicts (`APPROVED` or `CHANGES_REQUIRED`), criterion scores (1-10), strengths, issues tables (issue, severity, required change), and recommendations. Produces final panel consensus verdict (unanimous approval to finalize or issue collection for Phase 1 re-entry, or human review escalation after 5 iterations).

## Invokes — required
- reference synthesis-protocol.md — .claude/skills/skillforge/references/phase4-synthesis-deep-dive.md:82
- script validate-skill.py — .claude/skills/skillforge/references/phase4-synthesis-deep-dive.md:65

## Invoked by — required
- skill skillforge — .claude/skills/skillforge/SKILL.md:195
- skill skillforge — .claude/skills/skillforge/SKILL.md:309

## Concepts named — required, verbatim
- `Phase 4: Synthesis Deep Dive` — .claude/skills/skillforge/references/phase4-synthesis-deep-dive.md:1 — defined here
- `Panel` — .claude/skills/skillforge/references/phase4-synthesis-deep-dive.md:3 — defined here
- `Panel Composition` — .claude/skills/skillforge/references/phase4-synthesis-deep-dive.md:7 — defined here
- `Design/Architecture` — .claude/skills/skillforge/references/phase4-synthesis-deep-dive.md:11 — defined here
- `Audience/Usability` — .claude/skills/skillforge/references/phase4-synthesis-deep-dive.md:12 — defined here
- `Evolution/Timelessness` — .claude/skills/skillforge/references/phase4-synthesis-deep-dive.md:13 — defined here
- `Script/Automation` — .claude/skills/skillforge/references/phase4-synthesis-deep-dive.md:14 — defined here
- `Script Agent` — .claude/skills/skillforge/references/phase4-synthesis-deep-dive.md:16 — defined here
- `Pattern Compliance` — .claude/skills/skillforge/references/phase4-synthesis-deep-dive.md:22 — defined here
- `Self-Verification` — .claude/skills/skillforge/references/phase4-synthesis-deep-dive.md:23 — defined here
- `Error Handling` — .claude/skills/skillforge/references/phase4-synthesis-deep-dive.md:24 — defined here
- `Documentation` — .claude/skills/skillforge/references/phase4-synthesis-deep-dive.md:25 — used here
- `Agentic Capability` — .claude/skills/skillforge/references/phase4-synthesis-deep-dive.md:26 — defined here
- `Script Agent Scoring` — .claude/skills/skillforge/references/phase4-synthesis-deep-dive.md:28 — defined here
- `Agent Evaluation` — .claude/skills/skillforge/references/phase4-synthesis-deep-dive.md:36 — defined here
- `Consensus Protocol` — .claude/skills/skillforge/references/phase4-synthesis-deep-dive.md:60 — defined here

## Structure
- `# Phase 4: Synthesis Deep Dive` — .claude/skills/skillforge/references/phase4-synthesis-deep-dive.md:1
- `## Panel Composition` — .claude/skills/skillforge/references/phase4-synthesis-deep-dive.md:7
- `## Script Agent (Conditional)` — .claude/skills/skillforge/references/phase4-synthesis-deep-dive.md:16
- `## Agent Evaluation` — .claude/skills/skillforge/references/phase4-synthesis-deep-dive.md:36
- `### Consensus Protocol` — .claude/skills/skillforge/references/phase4-synthesis-deep-dive.md:60

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
- Mandates 3-4 Opus agents evaluating from orthogonal viewpoints (Design/Architecture, Audience/Usability, Evolution/Timelessness, and conditionally Script/Automation).
- Enforces a strict unanimous approval requirement (3/3 or 4/4) with an automated retry loop returning to Phase 1, capped at 5 iterations before escalating to human review.
- The Script Agent has a 3-tier scoring rubric (8-10 production-ready, 6-7 functional with gaps, <6 revision required) focusing on self-verification and unattended execution.

## Context cost
2619 bytes (~655 tokens). When following the reference to `synthesis-protocol.md` (18142 bytes, ~4535 tokens), total context cost is ~20761 bytes (~5190 tokens).
