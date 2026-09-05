---
package: rjm
path: .agents/architecture/ADR-040-skill-frontmatter-standardization.md
type: agent
bytes: 24306
unit: inv-rjm-15
in_scope_via: .agents/architecture/README.md
aliases: []
memo_inputs:
  - {path: .agents/architecture/ADR-040-skill-frontmatter-standardization.md, sha256: d88fb7a689fdf3807c1acf3bceb30b2504cf982966d8b28f440ce3b2fe0fcb93}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# .agents/architecture/ADR-040-skill-frontmatter-standardization.md

## Purpose — required, verbatim
> "Adopt the following standardization for all 27 Claude Code skills:" — .agents/architecture/ADR-040-skill-frontmatter-standardization.md:65

## Design intent — required
Architectural decision record establishing uniform YAML frontmatter schema, field placement, naming conventions, description triggering rules, and model identifier policies across all Claude Code skills in the repository. Resolves frontmatter structure variance, 404 validation failures from invalid model identifiers, and missing authoring guidance by defining required top-level fields (name, description, version, license) and restricting model selection. Later amended to mandate block-style arrays for Windows YAML parser compatibility and updated when ADR-080 superseded versioned model pins in favor of harness inheritance or bare cost aliases.

## Phase — required
none

## Inputs — required
Official Anthropic documentation on agent skills, model configuration, and best practices (.agents/architecture/ADR-040-skill-frontmatter-standardization.md:41-55, 408-414), SkillForge validator schema and constants (.claude/skills/SkillForge/scripts/_constants.py; .agents/architecture/ADR-040-skill-frontmatter-standardization.md:144), existing 27 Claude Code skills (.agents/architecture/ADR-040-skill-frontmatter-standardization.md:32), comprehensive analysis document (.agents/analysis/claude-code-skill-frontmatter-2026.md; .agents/architecture/ADR-040-skill-frontmatter-standardization.md:296), multi-agent debate resolution (.agents/critique/ADR-040-debate-log.md; .agents/architecture/ADR-040-skill-frontmatter-standardization.md:440), and Session 826 Windows YAML parsing failure analysis (.agents/architecture/ADR-040-skill-frontmatter-standardization.md:457-474).

## Outputs — required
Standardized skill frontmatter specification (.agents/architecture/ADR-040-skill-frontmatter-standardization.md:113-140), skill quality and structure rules (.agents/architecture/ADR-040-skill-frontmatter-standardization.md:182-220), allowed-tools least-privilege specification (.agents/architecture/ADR-040-skill-frontmatter-standardization.md:221-241), block-style YAML array mandate (.agents/architecture/ADR-040-skill-frontmatter-standardization.md:331-350), frontmatter verification checklist (.agents/architecture/ADR-040-skill-frontmatter-standardization.md:321-330), and bulk standardization of skills across the repository (commit 303c6d2; .agents/architecture/ADR-040-skill-frontmatter-standardization.md:261, 419).

## Invokes — required
- script scripts/validation/check_model_pins.py — .agents/architecture/ADR-040-skill-frontmatter-standardization.md:22
- doc ADR-080 — .agents/architecture/ADR-040-skill-frontmatter-standardization.md:69
- script .claude/skills/SkillForge/scripts/_constants.py — .agents/architecture/ADR-040-skill-frontmatter-standardization.md:144
- script scripts/validation/skill_frontmatter.py — .agents/architecture/ADR-040-skill-frontmatter-standardization.md:268
- doc .agents/analysis/claude-code-skill-frontmatter-2026.md — .agents/architecture/ADR-040-skill-frontmatter-standardization.md:296
- doc docs/SKILL-AUTHORING.md — .agents/architecture/ADR-040-skill-frontmatter-standardization.md:305
- doc ADR-007 — .agents/architecture/ADR-040-skill-frontmatter-standardization.md:313
- doc ADR-033 — .agents/architecture/ADR-040-skill-frontmatter-standardization.md:314
- doc ADR-036 — .agents/architecture/ADR-040-skill-frontmatter-standardization.md:315
- doc ADR-039 — .agents/architecture/ADR-040-skill-frontmatter-standardization.md:316
- script .claude/skills/SkillForge/scripts/validate-skill.py — .agents/architecture/ADR-040-skill-frontmatter-standardization.md:374
- doc .agents/critique/ADR-040-debate-log.md — .agents/architecture/ADR-040-skill-frontmatter-standardization.md:440
- doc .agents/architecture/SKILL-STANDARDS-RECONCILED.md — .agents/architecture/ADR-040-skill-frontmatter-standardization.md:484
- doc .agents/steering/claude-skills.md — .agents/architecture/ADR-040-skill-frontmatter-standardization.md:484

## Invoked by — required
- doc .agents/architecture/README.md — .agents/architecture/README.md:117
- doc .agents/architecture/ADR-064-commands-to-skills-migration.md — .agents/architecture/ADR-064-commands-to-skills-migration.md:286
- doc ADR-040 — .agents/architecture/SKILL-STANDARDS-RECONCILED.md:93
- doc ADR-040 — .agents/governance/PROJECT-CONSTRAINTS.md:188

## Concepts named — required, verbatim
- `ADR-080` — .agents/architecture/ADR-040-skill-frontmatter-standardization.md:18 — used here
- `rolling alias` — .agents/architecture/ADR-040-skill-frontmatter-standardization.md:20 — defined here
- `model-rationale` — .agents/architecture/ADR-040-skill-frontmatter-standardization.md:21 — defined here
- `check_model_pins.py` — .agents/architecture/ADR-040-skill-frontmatter-standardization.md:22 — used here
- `Model Identifier Inconsistency` — .agents/architecture/ADR-040-skill-frontmatter-standardization.md:34 — defined here
- `Frontmatter Structure Variance` — .agents/architecture/ADR-040-skill-frontmatter-standardization.md:35 — defined here
- `Validation Failures` — .agents/architecture/ADR-040-skill-frontmatter-standardization.md:36 — defined here
- `Documentation Gap` — .agents/architecture/ADR-040-skill-frontmatter-standardization.md:37 — defined here
- `Minimal Required Schema` — .agents/architecture/ADR-040-skill-frontmatter-standardization.md:43 — defined here
- `name` — .agents/architecture/ADR-040-skill-frontmatter-standardization.md:44 — defined here
- `description` — .agents/architecture/ADR-040-skill-frontmatter-standardization.md:44 — defined here
- `Aliases` — .agents/architecture/ADR-040-skill-frontmatter-standardization.md:48 — defined here
- `Dated Snapshots` — .agents/architecture/ADR-040-skill-frontmatter-standardization.md:49 — defined here
- `CLI Shortcuts` — .agents/architecture/ADR-040-skill-frontmatter-standardization.md:50 — defined here
- `SkillForge` — .agents/architecture/ADR-040-skill-frontmatter-standardization.md:110 — used here
- `version` — .agents/architecture/ADR-040-skill-frontmatter-standardization.md:115 — defined here
- `license` — .agents/architecture/ADR-040-skill-frontmatter-standardization.md:117 — defined here
- `allowed-tools` — .agents/architecture/ADR-040-skill-frontmatter-standardization.md:119 — defined here
- `metadata` — .agents/architecture/ADR-040-skill-frontmatter-standardization.md:120 — defined here
- `Three-Tier Model Selection Strategy` — .agents/architecture/ADR-040-skill-frontmatter-standardization.md:154 — defined here
- `Tier 1: Opus` — .agents/architecture/ADR-040-skill-frontmatter-standardization.md:167 — defined here
- `Tier 2: Sonnet` — .agents/architecture/ADR-040-skill-frontmatter-standardization.md:168 — defined here
- `Tier 3: Haiku` — .agents/architecture/ADR-040-skill-frontmatter-standardization.md:169 — defined here
- `Skill Quality Standards` — .agents/architecture/ADR-040-skill-frontmatter-standardization.md:182 — defined here
- `Progressive Disclosure` — .agents/architecture/ADR-040-skill-frontmatter-standardization.md:215 — defined here
- `least privilege` — .agents/architecture/ADR-040-skill-frontmatter-standardization.md:223 — defined here
- `skill_frontmatter.py` — .agents/architecture/ADR-040-skill-frontmatter-standardization.md:268 — used here
- `claude-code-skill-frontmatter-2026.md` — .agents/architecture/ADR-040-skill-frontmatter-standardization.md:296 — used here
- `SKILL-AUTHORING.md` — .agents/architecture/ADR-040-skill-frontmatter-standardization.md:305 — used here
- `ADR-007` — .agents/architecture/ADR-040-skill-frontmatter-standardization.md:313 — used here
- `ADR-033` — .agents/architecture/ADR-040-skill-frontmatter-standardization.md:314 — used here
- `ADR-036` — .agents/architecture/ADR-040-skill-frontmatter-standardization.md:315 — used here
- `ADR-039` — .agents/architecture/ADR-040-skill-frontmatter-standardization.md:316 — used here
- `Block-style arrays` — .agents/architecture/ADR-040-skill-frontmatter-standardization.md:333 — defined here
- `Validate-SkillFrontmatter.ps1` — .agents/architecture/ADR-040-skill-frontmatter-standardization.md:362 — used here
- `validate-skill.py` — .agents/architecture/ADR-040-skill-frontmatter-standardization.md:374 — used here
- `ADR-040-debate-log.md` — .agents/architecture/ADR-040-skill-frontmatter-standardization.md:440 — used here
- `DISAGREE AND COMMIT` — .agents/architecture/ADR-040-skill-frontmatter-standardization.md:453 — defined here
- `SKILL-STANDARDS-RECONCILED.md` — .agents/architecture/ADR-040-skill-frontmatter-standardization.md:484 — used here

## Structure
- ADR-040: Skill Frontmatter Standardization and Model Identifier Strategy — .agents/architecture/ADR-040-skill-frontmatter-standardization.md:12
- Status — .agents/architecture/ADR-040-skill-frontmatter-standardization.md:14
- Date — .agents/architecture/ADR-040-skill-frontmatter-standardization.md:26
- Context — .agents/architecture/ADR-040-skill-frontmatter-standardization.md:30
- Research Findings — .agents/architecture/ADR-040-skill-frontmatter-standardization.md:39
- Current State Analysis — .agents/architecture/ADR-040-skill-frontmatter-standardization.md:56
- Decision — .agents/architecture/ADR-040-skill-frontmatter-standardization.md:63
- 1. Model Identifier Format — .agents/architecture/ADR-040-skill-frontmatter-standardization.md:67
- 2. Frontmatter Structure — .agents/architecture/ADR-040-skill-frontmatter-standardization.md:108
- 3. Three-Tier Model Selection Strategy — .agents/architecture/ADR-040-skill-frontmatter-standardization.md:154
- 4. Skill Quality Standards — .agents/architecture/ADR-040-skill-frontmatter-standardization.md:182
- 6. Security: Tool Restrictions (allowed-tools) — .agents/architecture/ADR-040-skill-frontmatter-standardization.md:221
- Consequences — .agents/architecture/ADR-040-skill-frontmatter-standardization.md:242
- Positive — .agents/architecture/ADR-040-skill-frontmatter-standardization.md:244
- Negative — .agents/architecture/ADR-040-skill-frontmatter-standardization.md:253
- Neutral — .agents/architecture/ADR-040-skill-frontmatter-standardization.md:259
- Implementation — .agents/architecture/ADR-040-skill-frontmatter-standardization.md:264
- Phase 1: Standardization (In Progress) — .agents/architecture/ADR-040-skill-frontmatter-standardization.md:266
- Phase 2: Documentation (Completed) — .agents/architecture/ADR-040-skill-frontmatter-standardization.md:293
- Phase 3: Validation (Future) — .agents/architecture/ADR-040-skill-frontmatter-standardization.md:300
- Compliance — .agents/architecture/ADR-040-skill-frontmatter-standardization.md:309
- Related ADRs — .agents/architecture/ADR-040-skill-frontmatter-standardization.md:311
- Verification — .agents/architecture/ADR-040-skill-frontmatter-standardization.md:319
- YAML Array Format — .agents/architecture/ADR-040-skill-frontmatter-standardization.md:331
- Rollback Plan — .agents/architecture/ADR-040-skill-frontmatter-standardization.md:350
- Confirmation — .agents/architecture/ADR-040-skill-frontmatter-standardization.md:358
- Reversibility Assessment — .agents/architecture/ADR-040-skill-frontmatter-standardization.md:380
- Model Behavior Monitoring — .agents/architecture/ADR-040-skill-frontmatter-standardization.md:395
- References — .agents/architecture/ADR-040-skill-frontmatter-standardization.md:404
- Official Documentation — .agents/architecture/ADR-040-skill-frontmatter-standardization.md:406
- Project Artifacts — .agents/architecture/ADR-040-skill-frontmatter-standardization.md:415
- Future Monitoring — .agents/architecture/ADR-040-skill-frontmatter-standardization.md:422
- Decision Makers — .agents/architecture/ADR-040-skill-frontmatter-standardization.md:429
- Amendments — .agents/architecture/ADR-040-skill-frontmatter-standardization.md:436
- 2026-01-03: Multi-Agent Debate Resolution — .agents/architecture/ADR-040-skill-frontmatter-standardization.md:438
- 2026-01-13: YAML Array Format Standardization — .agents/architecture/ADR-040-skill-frontmatter-standardization.md:455
- 2026-04-30: Opus/Sonnet 4-5 to 4-6 Migration — .agents/architecture/ADR-040-skill-frontmatter-standardization.md:475

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
- missing-path · .agents/architecture/ADR-040-skill-frontmatter-standardization.md:314 · references ADR-033: Everything Deterministic Evaluation, but ADR-033 in the repository is .agents/architecture/ADR-033-routing-level-enforcement-gates.md.
- missing-path · .agents/architecture/ADR-040-skill-frontmatter-standardization.md:348 · references build/Generate-Agents.ps1 which does not exist in the repository (PowerShell generator scripts were migrated to Python).
- missing-path · .agents/architecture/ADR-040-skill-frontmatter-standardization.md:362 · references pre-commit script scripts/Validate-SkillFrontmatter.ps1 which does not exist on disk (acknowledged at line 366).
- missing-path · .agents/architecture/ADR-040-skill-frontmatter-standardization.md:418 · references memory .serena/memories/claude-code-skill-frontmatter-standards.md which does not exist on disk.
- missing-path · .agents/architecture/ADR-040-skill-frontmatter-standardization.md:420 · references session log .agents/sessions/2026-01-03-session-356.md marked as (pending) which does not exist on disk.
- missing-path · .agents/architecture/ADR-040-skill-frontmatter-standardization.md:462 · references build/Generate-Agents.Common.psm1 which does not exist on disk.
- internal-contradiction · .agents/architecture/ADR-040-skill-frontmatter-standardization.md:221 · section numbering jumps from Section 4 (Skill Quality Standards) directly to Section 6 (Security: Tool Restrictions), omitting Section 5.
- doc-drift · .agents/architecture/ADR-040-skill-frontmatter-standardization.md:16 · Section 1, the model row of Section 2, and Section 3 are superseded by ADR-080, which bans versioned model identifiers on skills and makes model optional; the retained original text conflicts with active policy enforced by scripts/validation/check_model_pins.py.
- cross-file-contradiction · .agents/architecture/ADR-040-skill-frontmatter-standardization.md:227 · Section 6 uses comma-separated format for tool lists (allowed-tools: Read, Grep), which contradicts .agents/architecture/SKILL-STANDARDS-RECONCILED.md:174-190 and .agents/governance/PROJECT-CONSTRAINTS.md:188-190 mandating block-style hyphen-bulleted arrays.

## Observations
ADR-040 represents a core architectural contract for skill authoring across the entire ai-agents repository, establishing standards that are enforced by SkillForge and pre-commit hooks. The record is notably detailed regarding real-world multi-agent governance: it documents a 5 ACCEPT / 1 DISAGREE AND COMMIT multi-agent debate resolution, records cross-platform Windows YAML parsing regressions that necessitated block-style array amendments, and maintains inline annotations explaining subsequent supersessions by ADR-080 and model migrations from Claude 4.5 to 4.6.

## Context cost
24306 bytes, ~6,100 tokens. Standalone architecture document, not loaded in standard execution paths.
