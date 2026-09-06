---
package: rjm
path: .claude/skills/skillforge/assets/templates/skill-md-template.md
type: skill
bytes: 1478
unit: inv-rjm-158
in_scope_via: .claude/skills/skillforge/SKILL.md
aliases: []
memo_inputs:
  - {path: .claude/skills/skillforge/assets/templates/skill-md-template.md, sha256: 9763a68d08742fd8f643cd25ffbb78e32260e4376f0a3ce0bc462c01c3afa277}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# .claude/skills/skillforge/assets/templates/skill-md-template.md

## Purpose — required, verbatim
> "{{BRIEF_INTRODUCTION}}" — .claude/skills/skillforge/assets/templates/skill-md-template.md:23
(no explicit purpose statement; markdown template for generating standardized SKILL.md documents)

## Design intent — required
Provides the canonical structural boilerplate for generating clean, compliant `SKILL.md` documents in Phase 3 of SkillForge. It enforces key repository standards including valid YAML frontmatter (with optional tool restriction and forked context blocks), 3-5 backticked trigger phrases, a quick reference input/output table, phased execution steps with phase verification checkpoints, an explicit anti-patterns table (avoid/why/instead), a post-execution verification checklist, extension points, and references links.

## Phase — required
none

## Inputs — required
Template variables: `{{SKILL_NAME}}`, `{{DESCRIPTION}}`, `{{AUTHOR}}`, `{{SKILL_TITLE}}`, `{{BRIEF_INTRODUCTION}}`, `{{TRIGGER_1}}`, `{{INPUT}}`, `{{OUTPUT}}`, `{{PHASE_1_NAME}}`, `{{STEP_1_NAME}}`, `{{ANTI_PATTERN_1}}`, `{{CHECK_1}}`, `{{EXTENSION_1_NAME}}`, `{{REF_1_NAME}}`.

## Outputs — required
`SKILL.md` in newly created skill directories.

## Invokes — required
none

## Invoked by — required
orphan

## Concepts named — required, verbatim
- `Triggers` — .claude/skills/skillforge/assets/templates/skill-md-template.md:25 — defined here
- `Quick Reference` — .claude/skills/skillforge/assets/templates/skill-md-template.md:31 — defined here
- `Process` — .claude/skills/skillforge/assets/templates/skill-md-template.md:37 — defined here
- `Anti-Patterns` — .claude/skills/skillforge/assets/templates/skill-md-template.md:57 — defined here
- `Verification` — .claude/skills/skillforge/assets/templates/skill-md-template.md:64 — defined here
- `Extension Points` — .claude/skills/skillforge/assets/templates/skill-md-template.md:72 — defined here
- `References` — .claude/skills/skillforge/assets/templates/skill-md-template.md:77 — defined here

## Structure
- # {{SKILL_TITLE}} — .claude/skills/skillforge/assets/templates/skill-md-template.md:21
- ## Triggers — .claude/skills/skillforge/assets/templates/skill-md-template.md:25
- ## Quick Reference — .claude/skills/skillforge/assets/templates/skill-md-template.md:31
- ## Process — .claude/skills/skillforge/assets/templates/skill-md-template.md:37
- ### Phase 1: {{PHASE_1_NAME}} — .claude/skills/skillforge/assets/templates/skill-md-template.md:39
- ### Phase 2: {{PHASE_2_NAME}} — .claude/skills/skillforge/assets/templates/skill-md-template.md:48
- ## Anti-Patterns — .claude/skills/skillforge/assets/templates/skill-md-template.md:57
- ## Verification — .claude/skills/skillforge/assets/templates/skill-md-template.md:64
- ## Extension Points — .claude/skills/skillforge/assets/templates/skill-md-template.md:72
- ## References — .claude/skills/skillforge/assets/templates/skill-md-template.md:77

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
- `orphan` · .claude/skills/skillforge/assets/templates/skill-md-template.md:1 · File is present in assets/templates/ but is never directly referenced by in-scope SkillForge scripts or documentation (only referenced by out-of-scope validation test `tests/validation/test_check_plugin_frontmatter_self_containment.py:774`).

## Observations
- Includes commented-out frontmatter options for tool restrictions (`allowed-tools`) and sub-agent execution (`context: fork`, `agent: general-purpose`) at lines 8-15, aligning with the extended frontmatter schema introduced in SkillForge v4.1.0.

## Context cost
1478 bytes (approx. 370 tokens).
