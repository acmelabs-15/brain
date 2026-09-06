---
package: rjm
path: .claude/skills/spec-generator/references/spec-schemas.md
type: reference
bytes: 14040
unit: inv-rjm-173
in_scope_via: .claude/skills/spec-generator/SKILL.md
aliases: []
memo_inputs:
  - {path: .claude/skills/spec-generator/references/spec-schemas.md, sha256: 6520d76b9eae7f6d574a1291dc027464ad24dd8d388d55ea04364b25a8a7a431}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# .claude/skills/spec-generator/references/spec-schemas.md

## Purpose — required, verbatim
> "This document defines the YAML front matter schemas for the 3-tier specification layer: Requirements, Design, and Tasks." — .claude/skills/spec-generator/references/spec-schemas.md:16

## Design intent — required
Provides the reference schema contracts and field specifications for the 3-tier specification hierarchy (Requirements `REQ-NNN`, Design `DESIGN-NNN`, Tasks `TASK-NNN`), standardizing allowed frontmatter metadata (types, statuses, priorities, categories, complexity ratings) and required markdown body sections. It establishes structural discipline across feature development, ensuring automated validators can detect invalid metadata and enforcing forward and backward traceability between requirements, designs, and tasks. Without this reference, specification documents would diverge in terminology, field enums, and required sections, breaking downstream traceability and automated verification.

## Phase — required
rjm:spec

## Inputs — required
- Canonical schema definitions from `.agents/governance/spec-schemas.md` (.claude/skills/spec-generator/references/spec-schemas.md:16).
- OntologyFragment entity inputs from Step 1 ontology elicitation (.claude/skills/spec-generator/references/spec-schemas.md:134, 245).
- GitHub issue references (`source: GH-\d+`) (.claude/skills/spec-generator/references/spec-schemas.md:91, 115, 443).

## Outputs — required
- YAML frontmatter schemas and body-section checklists for `REQ-NNN-[kebab-case-name].md` files (.claude/skills/spec-generator/references/spec-schemas.md:77-78).
- YAML frontmatter schemas and body-section checklists for `DESIGN-NNN-[kebab-case-name].md` files (.claude/skills/spec-generator/references/spec-schemas.md:188-189).
- YAML frontmatter schemas and body-section checklists for `TASK-NNN-[kebab-case-name].md` files (.claude/skills/spec-generator/references/spec-schemas.md:286-287).
- Traceability rules linking REQ, DESIGN, and TASK artifacts (.claude/skills/spec-generator/references/spec-schemas.md:404-430).

## Invokes — required
- script validate_spec_frontmatter.py — .claude/skills/spec-generator/references/spec-schemas.md:16
- script check_spec_id_uniqueness.py — .claude/skills/spec-generator/references/spec-schemas.md:454
- script spec_contradiction.py — .claude/skills/spec-generator/references/spec-schemas.md:457
- reference ears-format.md — .claude/skills/spec-generator/references/spec-schemas.md:470
- reference naming-conventions.md — .claude/skills/spec-generator/references/spec-schemas.md:471
- reference consistency-protocol.md — .claude/skills/spec-generator/references/spec-schemas.md:472
- doc README.md — .claude/skills/spec-generator/references/spec-schemas.md:473
- doc enhancement-PROJECT-PLAN.md — .claude/skills/spec-generator/references/spec-schemas.md:474

## Invoked by — required
- skill spec-generator — .claude/skills/spec-generator/SKILL.md:29
- skill spec-generator — .claude/skills/spec-generator/SKILL.md:31
- skill spec-generator — .claude/skills/spec-generator/SKILL.md:193
- script validate_spec_frontmatter.py — .claude/skills/spec-generator/scripts/validate_spec_frontmatter.py:10

## Concepts named — required, verbatim
- `spec-schemas` — .claude/skills/spec-generator/references/spec-schemas.md:3 — defined here
- `3-tier specification layer` — .claude/skills/spec-generator/references/spec-schemas.md:16 — defined here
- `Requirement Schema` — .claude/skills/spec-generator/references/spec-schemas.md:75 — defined here
- `Design Schema` — .claude/skills/spec-generator/references/spec-schemas.md:186 — defined here
- `Task Schema` — .claude/skills/spec-generator/references/spec-schemas.md:284 — defined here
- `EARS Compliance` — .claude/skills/spec-generator/references/spec-schemas.md:133 — used here
- `Ontology Trace` — .claude/skills/spec-generator/references/spec-schemas.md:134 — defined here
- `Complexity Definitions` — .claude/skills/spec-generator/references/spec-schemas.md:336 — defined here
- `Traceability Matrix` — .claude/skills/spec-generator/references/spec-schemas.md:404 — defined here
- `No Orphan Requirements` — .claude/skills/spec-generator/references/spec-schemas.md:425 — defined here
- `No Orphan Designs` — .claude/skills/spec-generator/references/spec-schemas.md:426 — defined here
- `Backward Traceability` — .claude/skills/spec-generator/references/spec-schemas.md:427 — defined here
- `Status Consistency` — .claude/skills/spec-generator/references/spec-schemas.md:428 — defined here

## Structure
- ## Overview — .claude/skills/spec-generator/references/spec-schemas.md:14
- ## Common Fields — .claude/skills/spec-generator/references/spec-schemas.md:18
- ### Status Values — .claude/skills/spec-generator/references/spec-schemas.md:35
- ### Status Transitions — .claude/skills/spec-generator/references/spec-schemas.md:43
- ## Requirement Schema (S-003) — .claude/skills/spec-generator/references/spec-schemas.md:75
- ### YAML Front Matter — .claude/skills/spec-generator/references/spec-schemas.md:80
- ### Field Definitions — .claude/skills/spec-generator/references/spec-schemas.md:104
- ### Category Definitions — .claude/skills/spec-generator/references/spec-schemas.md:122
- ### Validation Rules — .claude/skills/spec-generator/references/spec-schemas.md:130
- ### Required Sections — .claude/skills/spec-generator/references/spec-schemas.md:138
- ### Example — .claude/skills/spec-generator/references/spec-schemas.md:149
- ## Design Schema (S-004) — .claude/skills/spec-generator/references/spec-schemas.md:186
- ### YAML Front Matter — .claude/skills/spec-generator/references/spec-schemas.md:191
- ### Field Definitions — .claude/skills/spec-generator/references/spec-schemas.md:214
- ### Validation Rules — .claude/skills/spec-generator/references/spec-schemas.md:230
- ### Required Sections — .claude/skills/spec-generator/references/spec-schemas.md:237
- ### Example — .claude/skills/spec-generator/references/spec-schemas.md:249
- ## Task Schema (S-005) — .claude/skills/spec-generator/references/spec-schemas.md:284
- ### YAML Front Matter — .claude/skills/spec-generator/references/spec-schemas.md:289
- ### Field Definitions — .claude/skills/spec-generator/references/spec-schemas.md:316
- ### Complexity Definitions — .claude/skills/spec-generator/references/spec-schemas.md:336
- ### Validation Rules — .claude/skills/spec-generator/references/spec-schemas.md:346
- ### Required Sections — .claude/skills/spec-generator/references/spec-schemas.md:355
- ### Example — .claude/skills/spec-generator/references/spec-schemas.md:365
- ## Traceability Matrix — .claude/skills/spec-generator/references/spec-schemas.md:404
- ### Validation Rules — .claude/skills/spec-generator/references/spec-schemas.md:421
- ### Cross-Reference Format — .claude/skills/spec-generator/references/spec-schemas.md:430
- ## Validation Script Interface — .claude/skills/spec-generator/references/spec-schemas.md:448
- ## References — .claude/skills/spec-generator/references/spec-schemas.md:468

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
- missing-path · ./ears-format.md — .claude/skills/spec-generator/references/spec-schemas.md:470 — Relative link to ./ears-format.md is broken because the file was copied from .agents/governance/ without bundling referenced files.
- missing-path · ./naming-conventions.md — .claude/skills/spec-generator/references/spec-schemas.md:471 — Relative link to ./naming-conventions.md is broken because the file was copied from .agents/governance/ without bundling referenced files.
- missing-path · ./consistency-protocol.md — .claude/skills/spec-generator/references/spec-schemas.md:472 — Relative link to ./consistency-protocol.md is broken because the file was copied from .agents/governance/ without bundling referenced files.
- missing-path · ../specs/README.md — .claude/skills/spec-generator/references/spec-schemas.md:473 — Relative link to ../specs/README.md does not resolve relative to the skill references directory.
- missing-path · ../planning/enhancement-PROJECT-PLAN.md — .claude/skills/spec-generator/references/spec-schemas.md:474 — Relative link to ../planning/enhancement-PROJECT-PLAN.md is broken because the target file was archived.

## Observations
Bundled reference extracted from `.agents/governance/spec-schemas.md` to ensure self-contained skill execution in Claude Code without depending on governance workspace structure. While it documents `validate_spec_frontmatter.py` as validating frontmatter only, it leaves body-section checklists (e.g. Ontology, Decision-rule Traceability) to separate completeness checks and CI prompts.

## Context cost
14,040 bytes (~3,500 tokens). Loads no external files directly.
