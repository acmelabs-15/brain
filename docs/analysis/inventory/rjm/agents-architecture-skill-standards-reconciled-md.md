---
package: rjm
path: .agents/architecture/SKILL-STANDARDS-RECONCILED.md
type: agent
bytes: 32531
unit: inv-rjm-51
in_scope_via: .agents/architecture/README.md
aliases: []
memo_inputs:
  - {path: .agents/architecture/SKILL-STANDARDS-RECONCILED.md, sha256: 519c3146eb8bc63670a8219a2b2beb598d871658825c757990b0715cc12de505}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# .agents/architecture/SKILL-STANDARDS-RECONCILED.md

## Purpose — required, verbatim
> "This document reconciles all skill knowledge from official standards (agentskills.io, claude.com), project ADRs, memory systems (Serena and Forgetful), and actual implementations. It resolves conflicts, documents authoritative schema, and provides clear guidance for skill authors." — .agents/architecture/SKILL-STANDARDS-RECONCILED.md:17

## Design intent — required
Discrepancies and fragmentation across multiple specifications (official agentskills.io spec, Claude Code docs, internal ADR-040 and ADR-080, and historical memory systems) created confusion regarding skill schema requirements, field placement, model pin rules, tool list delimiters, and directory structures. This document establishes the single canonical reconciliation and specification reference for skill authors across the ai-agents project. It defines a two-tier requirement system distinguishing portable cross-platform skills (2 fields: name, description) from project-internal skills (4 fields: name, version, description, license), formalizes allowable model aliases under ADR-080, resolves syntactic inconsistencies (such as space-delimited allowed-tools), and specifies the progressive disclosure model and directory extensions (modules/, templates/, tests/). Without it, skill authors and automated validators (like SkillForge) would operate on conflicting standards, risking breakage across Claude Code and external platforms.

## Phase — required
none

## Inputs — required
- Official specification standards: agentskills.io specification and Claude Code documentation (.agents/architecture/SKILL-STANDARDS-RECONCILED.md:17, 25-44, 668-676)
- Project ADRs: ADR-040 (.agents/architecture/SKILL-STANDARDS-RECONCILED.md:93, 113, 141, 174, 683) and ADR-080 (.agents/architecture/SKILL-STANDARDS-RECONCILED.md:7, 61, 124, 151, 209, 218-228, 569-573)
- Memory systems: Serena memories (claude-code-skill-frontmatter-standards, agentskills-io-standard-integration) and Forgetful atomic memories (IDs 99-110, 128-135, 167-174) (.agents/architecture/SKILL-STANDARDS-RECONCILED.md:17, 686-688, 726-727)
- Actual skill implementations across the repository: 27 skills in `.claude/skills/` (.agents/architecture/SKILL-STANDARDS-RECONCILED.md:17, 728)
- Validation tools and constants: SkillForge validator scripts (.claude/skills/SkillForge/scripts/validate-skill.py, quick_validate.py, _constants.py) (.agents/architecture/SKILL-STANDARDS-RECONCILED.md:60, 93, 153, 526-531), scripts/validation/check_model_pins.py (.agents/architecture/SKILL-STANDARDS-RECONCILED.md:11, 132, 219), templates/platforms/copilot-cli.yaml (.agents/architecture/SKILL-STANDARDS-RECONCILED.md:358)
- Analysis documents: `.agents/analysis/claude-code-skill-frontmatter-2026.md`, `.agents/analysis/agentskills-io-standard-2026-01.md` (.agents/architecture/SKILL-STANDARDS-RECONCILED.md:684-685)
- GitHub issue #4936 / PR #5098 regarding MODEL_BEARING_KEYS and nested subagent_model pins (.agents/architecture/SKILL-STANDARDS-RECONCILED.md:218-232)

## Outputs — required
- Authoritative skill schema definition for portable and project-specific skills (.agents/architecture/SKILL-STANDARDS-RECONCILED.md:23-84, 257-306, 890-905)
- Five conflict resolutions: version placement, model field existence, required field count, allowed-tools formatting, subagent_model vs model (.agents/architecture/SKILL-STANDARDS-RECONCILED.md:86-255, 714-721)
- Progressive disclosure model for skills (.agents/architecture/SKILL-STANDARDS-RECONCILED.md:467-485)
- Validation rules and checklists for skill authoring (.agents/architecture/SKILL-STANDARDS-RECONCILED.md:487-534)
- Migration guidance for version placement, model pins, and tool formatting (.agents/architecture/SKILL-STANDARDS-RECONCILED.md:537-623)
- Platform compatibility matrix (.agents/architecture/SKILL-STANDARDS-RECONCILED.md:626-664)
- Conflict resolution decision matrix prioritizing specifications (.agents/architecture/SKILL-STANDARDS-RECONCILED.md:692-706)
- Reference exemplar skills: portable skill, ai-agents optimized skill, orchestrator skill (.agents/architecture/SKILL-STANDARDS-RECONCILED.md:762-887)

## Invokes — required
- doc ADR-080 — .agents/architecture/SKILL-STANDARDS-RECONCILED.md:7
- script scripts/validation/check_model_pins.py — .agents/architecture/SKILL-STANDARDS-RECONCILED.md:11
- doc ADR-040 — .agents/architecture/SKILL-STANDARDS-RECONCILED.md:93
- script .claude/skills/SkillForge/scripts/_constants.py — .agents/architecture/SKILL-STANDARDS-RECONCILED.md:153
- skill adr-review — .agents/architecture/SKILL-STANDARDS-RECONCILED.md:230
- skill skillforge — .agents/architecture/SKILL-STANDARDS-RECONCILED.md:231
- skill retrospective — .agents/architecture/SKILL-STANDARDS-RECONCILED.md:245
- config templates/platforms/copilot-cli.yaml — .agents/architecture/SKILL-STANDARDS-RECONCILED.md:358
- doc .agents/governance/model-pin-evidence.json — .agents/architecture/SKILL-STANDARDS-RECONCILED.md:364
- script .claude/skills/SkillForge/scripts/validate-skill.py — .agents/architecture/SKILL-STANDARDS-RECONCILED.md:527
- script .claude/skills/SkillForge/scripts/quick_validate.py — .agents/architecture/SKILL-STANDARDS-RECONCILED.md:530
- skill security-detection — .agents/architecture/SKILL-STANDARDS-RECONCILED.md:602
- skill reflect — .agents/architecture/SKILL-STANDARDS-RECONCILED.md:603
- doc .agents/analysis/claude-code-skill-frontmatter-2026.md — .agents/architecture/SKILL-STANDARDS-RECONCILED.md:684
- doc .agents/analysis/agentskills-io-standard-2026-01.md — .agents/architecture/SKILL-STANDARDS-RECONCILED.md:685

## Invoked by — required
- doc ADR-040 — .agents/architecture/ADR-040-skill-frontmatter-standardization.md:484

## Concepts named — required, verbatim
- `CANONICAL REFERENCE` — .agents/architecture/SKILL-STANDARDS-RECONCILED.md:4 — defined here
- `Official Standard` — .agents/architecture/SKILL-STANDARDS-RECONCILED.md:25 — defined here
- `ai-agents Project Extensions` — .agents/architecture/SKILL-STANDARDS-RECONCILED.md:54 — defined here
- `TWO-TIER REQUIREMENT SYSTEM` — .agents/architecture/SKILL-STANDARDS-RECONCILED.md:144 — defined here
- `Portable skills` — .agents/architecture/SKILL-STANDARDS-RECONCILED.md:148 — defined here
- `Project-internal skills` — .agents/architecture/SKILL-STANDARDS-RECONCILED.md:149 — defined here
- `Progressive Disclosure Model` — .agents/architecture/SKILL-STANDARDS-RECONCILED.md:467 — defined here
- `Frontmatter Validation` — .agents/architecture/SKILL-STANDARDS-RECONCILED.md:489 — defined here
- `Conflict Resolution Decision Matrix` — .agents/architecture/SKILL-STANDARDS-RECONCILED.md:692 — defined here
- `SkillForge validator` — .agents/architecture/SKILL-STANDARDS-RECONCILED.md:60 — used here
- `modules/` — .agents/architecture/SKILL-STANDARDS-RECONCILED.md:80 — defined here
- `templates/` — .agents/architecture/SKILL-STANDARDS-RECONCILED.md:81 — defined here
- `tests/` — .agents/architecture/SKILL-STANDARDS-RECONCILED.md:82 — defined here
- `MODEL_BEARING_KEYS` — .agents/architecture/SKILL-STANDARDS-RECONCILED.md:219 — used here
- `KEEP_PIN` — .agents/architecture/SKILL-STANDARDS-RECONCILED.md:364 — used here
- `Portable Skill` — .agents/architecture/SKILL-STANDARDS-RECONCILED.md:764 — defined here
- `Orchestrator Skill` — .agents/architecture/SKILL-STANDARDS-RECONCILED.md:835 — defined here
- `Agent Roles` — .agents/architecture/SKILL-STANDARDS-RECONCILED.md:872 — defined here

## Structure
- # Skill Standards: Authoritative Reconciliation — .agents/architecture/SKILL-STANDARDS-RECONCILED.md:1
- ## Executive Summary — .agents/architecture/SKILL-STANDARDS-RECONCILED.md:15
- ## 1. Authoritative Schema — .agents/architecture/SKILL-STANDARDS-RECONCILED.md:23
- ### 1.1 Official Standard (agentskills.io + claude.com) — .agents/architecture/SKILL-STANDARDS-RECONCILED.md:25
- ### 1.2 ai-agents Project Extensions — .agents/architecture/SKILL-STANDARDS-RECONCILED.md:54
- ## 2. Conflict Resolution — .agents/architecture/SKILL-STANDARDS-RECONCILED.md:86
- ### Conflict 1: version Field Placement — .agents/architecture/SKILL-STANDARDS-RECONCILED.md:88
- ### Conflict 2: model Field Existence — .agents/architecture/SKILL-STANDARDS-RECONCILED.md:107
- ### Conflict 3: Required Fields Count — .agents/architecture/SKILL-STANDARDS-RECONCILED.md:136
- ### Conflict 4: allowed-tools Format — .agents/architecture/SKILL-STANDARDS-RECONCILED.md:168
- ### Conflict 5: metadata.subagent_model vs Top-Level model — .agents/architecture/SKILL-STANDARDS-RECONCILED.md:197
- ## 3. Authoritative Field Reference — .agents/architecture/SKILL-STANDARDS-RECONCILED.md:257
- ### 3.1 Complete Schema — .agents/architecture/SKILL-STANDARDS-RECONCILED.md:259
- ### 3.2 Field Definitions — .agents/architecture/SKILL-STANDARDS-RECONCILED.md:308
- #### name (REQUIRED) — .agents/architecture/SKILL-STANDARDS-RECONCILED.md:310
- #### description (REQUIRED) — .agents/architecture/SKILL-STANDARDS-RECONCILED.md:322
- #### version (REQUIRED for ai-agents) — .agents/architecture/SKILL-STANDARDS-RECONCILED.md:334
- #### license (REQUIRED for ai-agents) — .agents/architecture/SKILL-STANDARDS-RECONCILED.md:341
- #### model (OPTIONAL; omit to inherit, per ADR-080) — .agents/architecture/SKILL-STANDARDS-RECONCILED.md:348
- #### compatibility (OPTIONAL) — .agents/architecture/SKILL-STANDARDS-RECONCILED.md:376
- #### allowed-tools (OPTIONAL, EXPERIMENTAL) — .agents/architecture/SKILL-STANDARDS-RECONCILED.md:384
- #### disable-model-invocation (OPTIONAL) — .agents/architecture/SKILL-STANDARDS-RECONCILED.md:403
- #### mode (OPTIONAL) — .agents/architecture/SKILL-STANDARDS-RECONCILED.md:411
- #### metadata (OPTIONAL) — .agents/architecture/SKILL-STANDARDS-RECONCILED.md:418
- ## 4. Directory Structure — .agents/architecture/SKILL-STANDARDS-RECONCILED.md:435
- ### 4.1 Official Standard (agentskills.io) — .agents/architecture/SKILL-STANDARDS-RECONCILED.md:437
- ### 4.2 ai-agents Extensions — .agents/architecture/SKILL-STANDARDS-RECONCILED.md:447
- ## 5. Progressive Disclosure Model — .agents/architecture/SKILL-STANDARDS-RECONCILED.md:467
- ## 6. Validation Rules — .agents/architecture/SKILL-STANDARDS-RECONCILED.md:487
- ### 6.1 Frontmatter Validation — .agents/architecture/SKILL-STANDARDS-RECONCILED.md:489
- ### 6.2 Validation Tools — .agents/architecture/SKILL-STANDARDS-RECONCILED.md:506
- #### Official Validation (agentskills.io) — .agents/architecture/SKILL-STANDARDS-RECONCILED.md:508
- #### ai-agents Validation (project-specific) — .agents/architecture/SKILL-STANDARDS-RECONCILED.md:523
- ## 7. Migration Guidance — .agents/architecture/SKILL-STANDARDS-RECONCILED.md:537
- ### 7.1 From Metadata to Top-Level (version field) — .agents/architecture/SKILL-STANDARDS-RECONCILED.md:539
- ### 7.2 From a Versioned Pin to Inherit or a Cost Alias — .agents/architecture/SKILL-STANDARDS-RECONCILED.md:565
- ### 7.3 Comma-Separated to Space-Delimited (allowed-tools) — .agents/architecture/SKILL-STANDARDS-RECONCILED.md:606
- ## 8. Platform Compatibility — .agents/architecture/SKILL-STANDARDS-RECONCILED.md:626
- ### 8.1 Official Standard Compliance — .agents/architecture/SKILL-STANDARDS-RECONCILED.md:628
- ### 8.2 ai-agents Project Extensions — .agents/architecture/SKILL-STANDARDS-RECONCILED.md:652
- ## 9. Official Sources and References — .agents/architecture/SKILL-STANDARDS-RECONCILED.md:666
- ### 9.1 Official Standards — .agents/architecture/SKILL-STANDARDS-RECONCILED.md:668
- ### 9.2 Validation Tools — .agents/architecture/SKILL-STANDARDS-RECONCILED.md:677
- ### 9.3 ai-agents Project Documentation — .agents/architecture/SKILL-STANDARDS-RECONCILED.md:681
- ## 10. Conflict Resolution Decision Matrix — .agents/architecture/SKILL-STANDARDS-RECONCILED.md:692
- ## 11. Version History — .agents/architecture/SKILL-STANDARDS-RECONCILED.md:708
- ### Version 1.0.0 (2026-01-09) — .agents/architecture/SKILL-STANDARDS-RECONCILED.md:710
- ## 12. Future Maintenance — .agents/architecture/SKILL-STANDARDS-RECONCILED.md:733
- ### 12.1 Monitoring — .agents/architecture/SKILL-STANDARDS-RECONCILED.md:735
- ### 12.2 Update Triggers — .agents/architecture/SKILL-STANDARDS-RECONCILED.md:744
- ### 12.3 Ownership — .agents/architecture/SKILL-STANDARDS-RECONCILED.md:754
- ## Appendix A: Complete Example Skills — .agents/architecture/SKILL-STANDARDS-RECONCILED.md:762
- ### A.1 Portable Skill (Official Standard Only) — .agents/architecture/SKILL-STANDARDS-RECONCILED.md:764
- ### A.2 ai-agents Optimized Skill (With Extensions) — .agents/architecture/SKILL-STANDARDS-RECONCILED.md:796
- ### A.3 Orchestrator Skill (Delegated Agents Inherit The Harness Model) — .agents/architecture/SKILL-STANDARDS-RECONCILED.md:835
- ## Appendix B: Field Quick Reference Table — .agents/architecture/SKILL-STANDARDS-RECONCILED.md:890

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
- cross-file-contradiction · .agents/architecture/SKILL-STANDARDS-RECONCILED.md:180-195 · Reconciled standard identifies that ADR-040 Section 6 used comma-separated allowed-tools format (allowed-tools: Read, Grep, Glob) which was an error in example code contradicting the official space-delimited standard (allowed-tools: Read Grep Glob).
- doc-drift · .agents/architecture/SKILL-STANDARDS-RECONCILED.md:141-156 · Documents internal drift where ADR-040 originally required 5 fields including model, but ADR-080 superseded model to optional/bare-alias only, reducing the project required field set to 4.

## Observations
- Canonical architectural reference establishing clear boundaries between upstream platform-agnostic specifications (agentskills.io, Claude Code) and repository-internal extensions (SkillForge validation, PowerShell modules, Pester tests).
- Progressive disclosure model (§5) defines strict token budget tiers: Metadata (~100 tokens), Instructions (<5000 tokens), and Resources (on-demand), providing a structured model for context-cost minimization.
- Comprehensive field reference covers all frontmatter keys with validation regexes and concrete good/bad authoring examples.

## Context cost
32531 bytes (~8130 tokens). Runtime execution loads no additional files directly; referenced standards documents and ADRs total ~63KB (~15750 tokens) if pulled into agent context.
