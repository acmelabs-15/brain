---
package: rjm
path: .claude/skills/skillforge/references/specification-template.md
type: reference
bytes: 16523
unit: inv-rjm-161
in_scope_via: .claude/skills/skillforge/SKILL.md
aliases: []
memo_inputs:
  - {path: .claude/skills/skillforge/references/specification-template.md, sha256: 463bda085a9759fe1a448be4947b6f2877a8b635abd3c189c1372d14897c44c9}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# .claude/skills/skillforge/references/specification-template.md

## Purpose — required, verbatim
> "The specification is the bridge between analysis and execution. It captures all insights from Phase 1 in a structured format that enables clean Phase 3 execution." — .claude/skills/skillforge/references/specification-template.md:3

## Design intent — required
Defines the canonical XML specification format and guidelines used during Phase 2 (Specification) of the SkillForge skill lifecycle. Based on meta-prompting principles (separation of concerns, explicit WHY rationale, measurable success criteria, and XML semantic tagging), it acts as an intermediate contract bridging exploratory analysis and deterministic artifact generation. The template structures skill specifications into eight explicit facets: metadata (including timelessness scoring and applied thinking lenses), problem and landscape context, explicit/implicit/discovered requirements, architecture (patterns, phases, decision points, data flow), evolution analysis (temporal projections across 6-month, 1-year, and 2-year horizons, extension points, and obsolescence triggers), inversion-derived anti-patterns, prioritized functional/quality/evolutionary success criteria, verification protocols, and generation instructions. It also provides section authoring guidelines and a 4-part validation checklist covering completeness, quality, evolution, and traceability. Without it, agentic skill creation would lack a standardized intermediate representation, leading to loss of analytical depth, untracked implicit requirements, and architectural drift.

## Phase — required
rjm:Phase 2: Specification

## Inputs — required
none

## Outputs — required
none

## Invokes — required
none

## Invoked by — required
- skill skillforge — .claude/skills/skillforge/SKILL.md:172
- skill skillforge — .claude/skills/skillforge/SKILL.md:304
- reference phase2-specification-deep-dive.md — .claude/skills/skillforge/references/phase2-specification-deep-dive.md:54
- doc TRANSFORMATION_NOTES.md — .claude/skills/skillforge/TRANSFORMATION_NOTES.md:220

## Concepts named — required, verbatim
- `Skill Specification Template` — .claude/skills/skillforge/references/specification-template.md:1 — defined here
- `meta-prompting principles` — .claude/skills/skillforge/references/specification-template.md:7 — used here
- `Separation of concerns` — .claude/skills/skillforge/references/specification-template.md:9 — used here
- `Explicit WHY` — .claude/skills/skillforge/references/specification-template.md:10 — used here
- `Measurable criteria` — .claude/skills/skillforge/references/specification-template.md:11 — used here
- `XML structure` — .claude/skills/skillforge/references/specification-template.md:12 — used here
- `Full Specification Template` — .claude/skills/skillforge/references/specification-template.md:16 — defined here
- `skill_specification` — .claude/skills/skillforge/references/specification-template.md:20 — defined here
- `timelessness_score` — .claude/skills/skillforge/references/specification-template.md:31 — used here
- `lenses_applied` — .claude/skills/skillforge/references/specification-template.md:34 — used here
- `first_principles` — .claude/skills/skillforge/references/specification-template.md:35 — used here
- `inversion` — .claude/skills/skillforge/references/specification-template.md:36 — used here
- `systems_thinking` — .claude/skills/skillforge/references/specification-template.md:37 — used here
- `questioning_rounds` — .claude/skills/skillforge/references/specification-template.md:40 — used here
- `problem_statement` — .claude/skills/skillforge/references/specification-template.md:54 — used here
- `existing_landscape` — .claude/skills/skillforge/references/specification-template.md:60 — used here
- `user_profile` — .claude/skills/skillforge/references/specification-template.md:71 — used here
- `requirements` — .claude/skills/skillforge/references/specification-template.md:82 — defined here
- `explicit` — .claude/skills/skillforge/references/specification-template.md:83 — defined here
- `implicit` — .claude/skills/skillforge/references/specification-template.md:91 — defined here
- `discovered` — .claude/skills/skillforge/references/specification-template.md:99 — defined here
- `architecture` — .claude/skills/skillforge/references/specification-template.md:113 — defined here
- `evolution_analysis` — .claude/skills/skillforge/references/specification-template.md:169 — defined here
- `temporal_projection` — .claude/skills/skillforge/references/specification-template.md:175 — defined here
- `extension_points` — .claude/skills/skillforge/references/specification-template.md:193 — defined here
- `obsolescence_triggers` — .claude/skills/skillforge/references/specification-template.md:213 — defined here
- `anti_patterns` — .claude/skills/skillforge/references/specification-template.md:225 — defined here
- `success_criteria` — .claude/skills/skillforge/references/specification-template.md:239 — defined here
- `verification_protocol` — .claude/skills/skillforge/references/specification-template.md:260 — defined here
- `synthesis_requirements` — .claude/skills/skillforge/references/specification-template.md:280 — defined here
- `generation_instructions` — .claude/skills/skillforge/references/specification-template.md:290 — defined here
- `5 Whys` — .claude/skills/skillforge/references/specification-template.md:334 — used here
- `Specification Validation` — .claude/skills/skillforge/references/specification-template.md:380 — defined here
- `Completeness` — .claude/skills/skillforge/references/specification-template.md:382 — defined here
- `Quality` — .claude/skills/skillforge/references/specification-template.md:387 — defined here
- `Evolution` — .claude/skills/skillforge/references/specification-template.md:392 — defined here
- `Traceability` — .claude/skills/skillforge/references/specification-template.md:397 — defined here

## Structure
- `# Skill Specification Template` — .claude/skills/skillforge/references/specification-template.md:1
- `## Overview` — .claude/skills/skillforge/references/specification-template.md:5
- `## Full Specification Template` — .claude/skills/skillforge/references/specification-template.md:16
- `## Section Guidelines` — .claude/skills/skillforge/references/specification-template.md:324
- `### Metadata Section` — .claude/skills/skillforge/references/specification-template.md:326
- `### Context Section` — .claude/skills/skillforge/references/specification-template.md:332
- `### Requirements Section` — .claude/skills/skillforge/references/specification-template.md:338
- `### Architecture Section` — .claude/skills/skillforge/references/specification-template.md:347
- `### Evolution Section` — .claude/skills/skillforge/references/specification-template.md:353
- `### Anti-Patterns Section` — .claude/skills/skillforge/references/specification-template.md:359
- `### Success Criteria Section` — .claude/skills/skillforge/references/specification-template.md:365
- `## Validation Checklist` — .claude/skills/skillforge/references/specification-template.md:375
- `## Specification Validation` — .claude/skills/skillforge/references/specification-template.md:380
- `### Completeness` — .claude/skills/skillforge/references/specification-template.md:382
- `### Quality` — .claude/skills/skillforge/references/specification-template.md:387
- `### Evolution` — .claude/skills/skillforge/references/specification-template.md:392
- `### Traceability` — .claude/skills/skillforge/references/specification-template.md:397

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
- Provides a comprehensive XML schema (`<skill_specification version="1.0">`) for synthesizing analytical findings into executable, machine-readable instructions for subsequent generation phases.
- Mandates requirement prioritization using explicit MoSCoW-style levels (`must`, `should`, `could`, `wont`), paired with bidirectional traceability back to user requests, industry standards, or discovery lenses (e.g. inversion).
- Encapsulates evolutionary evaluation directly within the specification document: requires a timelessness score >=7, temporal projections across 6mo/1yr/2yr horizons, concrete extension points, and explicit obsolescence triggers with defensive design mitigations.
- Serves as the human-readable explanation and companion guide for `assets/templates/skill-spec-template.xml`.

## Context cost
16,523 bytes (402 lines, ~4,130 tokens). Invokes nothing additional.
