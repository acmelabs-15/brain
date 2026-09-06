---
package: rjm
path: .claude/skills/skillforge/references/modularity-guidelines.md
type: reference
bytes: 3970
unit: inv-rjm-159
in_scope_via: .agents/architecture/README.md
aliases: []
memo_inputs:
  - {path: .claude/skills/skillforge/references/modularity-guidelines.md, sha256: 5c151e7d32f6e7bfc22aa372e53f9a57af5d71069dbbf201e89eb90522632518}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# .claude/skills/skillforge/references/modularity-guidelines.md

## Purpose — required, verbatim
> "SkillsBench (Feb 2026) ran 87 tasks across 18 model and harness configurations. Curated skills moved average task-macro pass rate from 33.9% to 50.5%, a gain of 16.6 percentage points. The gain varied by configuration, from +4.1 to +25.7 points." — .claude/skills/skillforge/references/modularity-guidelines.md:3-5 (no explicit purpose statement)

## Design intent — required
Translates empirical findings from the SkillsBench (Feb 2026) benchmark into concrete modularity guidelines for skill authors. It demonstrates that standard-length, curated skills (2-3 skills per pack, <=300 lines per SKILL.md, <=10 top-level sections) outperform both exhaustive documentation and over-split packages, while exposing how one-shot self-generated skills degrade performance. It also documents the provenance and caveats of the repository's modularity audit thresholds.

## Phase — required
cross-phase

## Inputs — required
- SkillsBench benchmark data across 87 tasks and 18 configurations
- Skill file metrics (line count, top-level section count, progressive disclosure structure)

## Outputs — required
none

## Invokes — required
- script skill_modularity_audit.py — .claude/skills/skillforge/references/modularity-guidelines.md:83

## Invoked by — required
- script skill_modularity_audit.py — .claude/skills/skillforge/scripts/skill_modularity_audit.py:8

## Concepts named — required, verbatim
- `Modularity Guidelines` — .claude/skills/skillforge/references/modularity-guidelines.md:1 — defined here
- `SkillsBench` — .claude/skills/skillforge/references/modularity-guidelines.md:1 — used here
- `skill shape` — .claude/skills/skillforge/references/modularity-guidelines.md:12 — defined here
- `Progressive disclosure` — .claude/skills/skillforge/references/modularity-guidelines.md:47 — used here
- `Modularity score` — .claude/skills/skillforge/references/modularity-guidelines.md:48 — defined here
- `Refactoring Targets` — .claude/skills/skillforge/references/modularity-guidelines.md:68 — defined here

## Structure
- `# Modularity Guidelines (SkillsBench)` — .claude/skills/skillforge/references/modularity-guidelines.md:1
- `## What the study measured about skill shape` — .claude/skills/skillforge/references/modularity-guidelines.md:12
- `## Provenance of the targets below` — .claude/skills/skillforge/references/modularity-guidelines.md:36
- `## Compare against no skill before you claim the skill helps` — .claude/skills/skillforge/references/modularity-guidelines.md:57
- `## Refactoring Targets` — .claude/skills/skillforge/references/modularity-guidelines.md:68
- `## Audit Command` — .claude/skills/skillforge/references/modularity-guidelines.md:79

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
- doc-drift — .claude/skills/skillforge/references/modularity-guidelines.md:50-55 documents an asymmetry in `_score_modularity` where cutting toward the floor is not penalized, tracking issue #4327
- other — .claude/skills/skillforge/references/modularity-guidelines.md:1 omitted from `SKILL.md` References table, though invoked by `scripts/skill_modularity_audit.py:8` and listed in `TRANSFORMATION_NOTES.md:246`

## Observations
- SkillsBench empirical results highlight that exhaustive documentation resulted in a 97% collapse in benchmark gain (+0.7 pp vs +21.5 pp for standard length), while one-shot self-generated skills performed worse than no skill (-8.1 to -11.5 pp).

## Context cost
3,970 bytes (~992 tokens).
