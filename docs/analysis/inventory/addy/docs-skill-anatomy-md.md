---
package: addy
path: docs/skill-anatomy.md
type: doc
bytes: 8849
unit: inv-addy-6
deprecated: false
aliases: []
memo_inputs:
  - {path: docs/skill-anatomy.md, sha256: 5026d3ade4cec780a6d4c372cc11403ca1014ac369f72791f8c5ebe063519343}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# docs/skill-anatomy.md

## Purpose — required, verbatim
> "This document describes the structure and format of agent-skills skill files. Use this as a guide when contributing new skills or understanding existing ones." — docs/skill-anatomy.md:3

## Design intent — required
Defines the canonical architecture, structural anatomy, and authoring rules for agent skills in the repository. Solves inconsistency in skill authoring by establishing the frontmatter specification (lowercase hyphenated name, third-person trigger description under 1024 characters), standard section flow (Overview, When to Use, Core Process, Common Rationalizations, Red Flags, Verification), context efficiency rules (under 500 lines for SKILL.md, progressive disclosure), and the pack-level separation between skill-local supporting files and repo-root shared references.

## Phase — required
none

## Inputs — required
New skill proposals, author contributions, and existing skill directories under `skills/`.

## Outputs — required
Standardized `SKILL.md` skill definitions, supporting files in `skills/<name>/`, and runnable bash helpers in `skills/<name>/scripts/`.

## Invokes — required
- skill test-driven-development — docs/skill-anatomy.md:164
- skill debugging-and-error-recovery — docs/skill-anatomy.md:165

## Invoked by — required
- doc README.md — README.md:410
- doc CLAUDE.md — CLAUDE.md:39
- doc CONTRIBUTING.md — CONTRIBUTING.md:15
- doc AGENTS.md — AGENTS.md:92

## Concepts named — required, verbatim
- `SKILL.md` — docs/skill-anatomy.md:12 — defined here
- `Frontmatter` — docs/skill-anatomy.md:22 — defined here
- `Overview` — docs/skill-anatomy.md:44 — defined here
- `When to Use` — docs/skill-anatomy.md:47 — defined here
- `Core Process` — docs/skill-anatomy.md:51 — defined here
- `Common Rationalizations` — docs/skill-anatomy.md:60 — defined here
- `Red Flags` — docs/skill-anatomy.md:65 — defined here
- `Verification` — docs/skill-anatomy.md:69 — defined here
- `Supporting Files` — docs/skill-anatomy.md:100 — defined here
- `Shared References` — docs/skill-anatomy.md:111 — defined here
- `Context Efficiency` — docs/skill-anatomy.md:121 — defined here
- `progressive disclosure` — docs/skill-anatomy.md:127 — defined here
- `Script Requirements` — docs/skill-anatomy.md:131 — defined here
- `Writing Principles` — docs/skill-anatomy.md:142 — defined here
- `Naming Conventions` — docs/skill-anatomy.md:151 — defined here
- `Cross-Skill References` — docs/skill-anatomy.md:159 — defined here

## Structure
- # Skill Anatomy
- ## File Location
- ## SKILL.md Format
- ### Frontmatter (Required)
- ### Standard Sections (Recommended Pattern)
- ## Section Purposes
- ### Overview
- ### When to Use
- ### Core Process
- ### Common Rationalizations
- ### Red Flags
- ### Verification
- ## Supporting Files
- ## Shared References
- ## Context Efficiency
- ## Script Requirements
- ## Writing Principles
- ## Naming Conventions
- ## Cross-Skill References
- ## Required vs Recommended

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
- doc-drift — docs/skill-anatomy.md:117 — acknowledges that per-skill installs copy only `skills/<name>/` and leave repo-root `references/` behind causing links to resolve to nothing (tracked in issue #361).
- internal-contradiction — docs/skill-anatomy.md:39 — line 39 states the section flow is a "recommended pattern, not a rigid template", whereas line 170 and CI linting (`scripts/lib/skill-lint.js`) treat standard section names as strict requirements, requiring explicit whitelist exemptions for older skills such as `idea-refine`.

## Observations
Defines the "Common Rationalizations" table as the signature design feature of agent skills: anticipating agent excuses for skipping steps ("I'll add tests later", "This is simple enough to skip the spec") and pairing them with factual counter-arguments. Explicitly mandates keeping `SKILL.md` under 500 lines and moving code into runnable scripts because executing a script consumes no context while inline code blocks are paid for on every load.

## Context cost
8,849 bytes (~2,200 tokens). Loads nothing directly.
