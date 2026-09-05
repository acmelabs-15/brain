---
package: addy
path: docs/skill-anatomy.md
type: doc
bytes: 8849
unit: inv-addy-6
aliases: []
memo_inputs:
  - {path: docs/skill-anatomy.md, sha256: 5026d3ade4cec780a6d4c372cc11403ca1014ac369f72791f8c5ebe063519343}
method_sha: 647767d85acc14e391fbbf69d54d8543f31a0497dc52121aaf5997e1c6065f5f
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-04 quote-check+coverage
---

# docs/skill-anatomy.md

## Purpose — required, verbatim
> "This document describes the structure and format of agent-skills skill files." — docs/skill-anatomy.md:3

## Design intent — required
Defines the canonical structure, required frontmatter, recommended section layout, naming conventions, and authoring principles for skills in the Agent Skills catalog. It establishes architectural rules such as placing shared checklists in repo-root `references/` rather than duplicating them inside skill directories, using progressive disclosure to keep main `SKILL.md` files under 500 lines, and mandating anti-rationalization tables to prevent models from bypassing quality gates. Without this specification, skills would lack consistent triggering metadata, exit criteria, and structured workflows.

## Phase — required
cross-phase

## Inputs — required
none

## Outputs — required
Specification and guidelines for `skills/<skill-name>/SKILL.md`, supporting files, `scripts/`, and root `references/`.

## Invokes — required
none

## Invoked by — required
- doc README.md — README.md:410
- doc CONTRIBUTING.md — CONTRIBUTING.md:15

## Concepts named — required, verbatim
`Frontmatter` — docs/skill-anatomy.md:22 — defined here
`Common Rationalizations` — docs/skill-anatomy.md:60 — defined here
`Red Flags` — docs/skill-anatomy.md:65 — defined here
`Verification` — docs/skill-anatomy.md:69 — defined here
`Shared References` — docs/skill-anatomy.md:111 — defined here
`Context Efficiency` — docs/skill-anatomy.md:121 — defined here
`Script Requirements` — docs/skill-anatomy.md:131 — defined here
`Writing Principles` — docs/skill-anatomy.md:142 — defined here
`Anti-rationalization` — docs/skill-anatomy.md:147 — defined here
`Progressive disclosure` — docs/skill-anatomy.md:148 — defined here

## Structure
- Skill Anatomy
- File Location
- SKILL.md Format
- Frontmatter (Required)
- Standard Sections (Recommended Pattern)
- Section Purposes
- Overview
- When to Use
- Core Process
- Common Rationalizations
- Red Flags
- Verification
- Supporting Files
- Shared References
- Context Efficiency
- Script Requirements
- Writing Principles
- Naming Conventions
- Cross-Skill References
- Required vs Recommended

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
Documents the pack-level design decision to store shared checklists in `references/` at the repository root rather than duplicating them across skill directories, highlighting the portability trade-off during per-skill CLI installations (line 117). Promotes anti-rationalization tables pairing model excuses with factual rebuttals as a key behavioral pattern.

## Context cost
8849 bytes, ~2212 tokens. Loads no external files.
