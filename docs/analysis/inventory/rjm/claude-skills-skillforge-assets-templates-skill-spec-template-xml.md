---
package: rjm
path: .claude/skills/skillforge/assets/templates/skill-spec-template.xml
type: skill
bytes: 17558
unit: inv-rjm-158
in_scope_via: .claude/skills/skillforge/SKILL.md
aliases: []
memo_inputs:
  - {path: .claude/skills/skillforge/assets/templates/skill-spec-template.xml, sha256: 58a4c3f18d2b7e35138bf1058d787f594d46638756ba61e344553b7ee476e3cc}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# .claude/skills/skillforge/assets/templates/skill-spec-template.xml

## Purpose — required, verbatim
> "This template captures all analysis insights in a structured format" — .claude/skills/skillforge/assets/templates/skill-spec-template.xml:5

## Design intent — required
Defines the comprehensive XML schema and template for the skill specification artifact produced during Phase 2 (Specification Generation) of SkillForge. By formally capturing metadata, timelessness scoring, multi-lens analysis summaries, problem context, 3-tier requirements (explicit, implicit, discovered), architecture pattern rationale, phase/decision-point trees, script definitions and agentic capabilities, 3-horizon temporal projections, anti-patterns, measurable success criteria, and generation instructions, it creates a complete, machine-readable intermediate representation that bridges deep thinking (Phases 1-2) with deterministic generation (Phase 3).

## Phase — required
rjm:Phase 2

## Inputs — required
Outputs from Phase 1 deep analysis (11 thinking lenses, regression questions, 5 Whys, landscape analysis, user profiles, architecture decisions, script feasibility analysis).

## Outputs — required
XML skill specification artifact (e.g. `SKILL_SPEC.xml`) governing Phase 3 code and documentation generation.

## Invokes — required
none

## Invoked by — required
- reference changelog.md — .claude/skills/skillforge/references/changelog.md:32

## Concepts named — required, verbatim
- `timelessness_score` — .claude/skills/skillforge/assets/templates/skill-spec-template.xml:21 — defined here
- `thinking models` — .claude/skills/skillforge/assets/templates/skill-spec-template.xml:25 — used here
- `first_principles` — .claude/skills/skillforge/assets/templates/skill-spec-template.xml:26 — used here
- `inversion` — .claude/skills/skillforge/assets/templates/skill-spec-template.xml:27 — used here
- `second_order_effects` — .claude/skills/skillforge/assets/templates/skill-spec-template.xml:28 — used here
- `pre_mortem` — .claude/skills/skillforge/assets/templates/skill-spec-template.xml:29 — used here
- `systems_thinking` — .claude/skills/skillforge/assets/templates/skill-spec-template.xml:30 — used here
- `5 Whys` — .claude/skills/skillforge/assets/templates/skill-spec-template.xml:50 — used here
- `agentic_capabilities` — .claude/skills/skillforge/assets/templates/skill-spec-template.xml:215 — defined here
- `temporal_projection` — .claude/skills/skillforge/assets/templates/skill-spec-template.xml:249 — defined here
- `extension_points` — .claude/skills/skillforge/assets/templates/skill-spec-template.xml:267 — defined here
- `obsolescence_triggers` — .claude/skills/skillforge/assets/templates/skill-spec-template.xml:288 — defined here

## Structure
- METADATA — .claude/skills/skillforge/assets/templates/skill-spec-template.xml:16
- CONTEXT — .claude/skills/skillforge/assets/templates/skill-spec-template.xml:47
- REQUIREMENTS — .claude/skills/skillforge/assets/templates/skill-spec-template.xml:76
- ARCHITECTURE — .claude/skills/skillforge/assets/templates/skill-spec-template.xml:107
- SCRIPTS — .claude/skills/skillforge/assets/templates/skill-spec-template.xml:157
- EVOLUTION ANALYSIS — .claude/skills/skillforge/assets/templates/skill-spec-template.xml:243
- ANTI-PATTERNS — .claude/skills/skillforge/assets/templates/skill-spec-template.xml:300
- SUCCESS CRITERIA — .claude/skills/skillforge/assets/templates/skill-spec-template.xml:314
- GENERATION INSTRUCTIONS — .claude/skills/skillforge/assets/templates/skill-spec-template.xml:335

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
- The `<scripts>` section (lines 157-237) was added in v3.2.0 (see changelog.md:32) to formally support agentic capabilities including autonomous execution, self-verification, error recovery, and state persistence.
- Mandates at least 2 extension points (line 268) and a timelessness score of >=7/10 (lines 21, 244).

## Context cost
17558 bytes (approx. 4390 tokens).
