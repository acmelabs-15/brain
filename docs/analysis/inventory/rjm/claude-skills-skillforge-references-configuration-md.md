---
package: rjm
path: .claude/skills/skillforge/references/configuration.md
type: reference
bytes: 530
unit: inv-rjm-158
in_scope_via: .claude/skills/skillforge/SKILL.md
aliases: []
memo_inputs:
  - {path: .claude/skills/skillforge/references/configuration.md, sha256: 73fa64c70668a0942abb7d2c48f4d049464cda36ae9224c6e667dc3e36fa8e59}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# .claude/skills/skillforge/references/configuration.md

## Purpose — required, verbatim
> "# SkillForge Configuration" — .claude/skills/skillforge/references/configuration.md:1
(no explicit purpose statement; YAML configuration file specifying operational parameters and thresholds for SkillForge execution)

## Design intent — required
Defines default operational parameters, quality gate thresholds, and agent runtime configurations for SkillForge. Configures autonomous execution depth (`depth: maximum`, `core_lens: evolution_timelessness`), analysis termination criteria (5 min lenses, max 7 questioning rounds, termination on 3 empty rounds), synthesis panel rules (panel size 3, unanimous approval required, max 5 iterations before human escalation), evolution thresholds (minimum timelessness score >=7, minimum 2 extension points, mandatory temporal projection), and model routing pins (`primary: claude-opus-4-6`, `subagents: claude-opus-4-6`).

## Phase — required
cross-phase

## Inputs — required
none

## Outputs — required
none

## Invokes — required
none

## Invoked by — required
- skill skillforge — .claude/skills/skillforge/SKILL.md:314

## Concepts named — required, verbatim
- `SkillForge Configuration` — .claude/skills/skillforge/references/configuration.md:1 — defined here
- `SKILLCREATOR_CONFIG` — .claude/skills/skillforge/references/configuration.md:4 — defined here
- `evolution_timelessness` — .claude/skills/skillforge/references/configuration.md:7 — used here
- `termination_empty_rounds` — .claude/skills/skillforge/references/configuration.md:12 — defined here
- `escalate_to_human` — .claude/skills/skillforge/references/configuration.md:18 — defined here
- `min_timelessness_score` — .claude/skills/skillforge/references/configuration.md:21 — defined here

## Structure
- # SkillForge Configuration — .claude/skills/skillforge/references/configuration.md:1

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
- `doc-drift`: File heading is `# SkillForge Configuration` (.claude/skills/skillforge/references/configuration.md:1), but the YAML configuration key is `SKILLCREATOR_CONFIG:` (.claude/skills/skillforge/references/configuration.md:4), retaining the legacy pre-v4.0.0 name `SkillCreator`.

## Observations
- Hardcodes primary and subagent model pins to `claude-opus-4-6` (lines 26-27), diverging from ADR-080 model pin policies which recommend inheriting ambient harness models.

## Context cost
530 bytes (approx. 132 tokens).
