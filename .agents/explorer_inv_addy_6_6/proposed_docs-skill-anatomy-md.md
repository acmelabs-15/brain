---
package: addy
path: docs/skill-anatomy.md
type: doc
bytes: 8849
unit: inv-addy-6
---

# docs/skill-anatomy.md

## Purpose — required, verbatim
> "This document describes the structure and format of agent-skills skill files. Use this as a guide when contributing new skills or understanding existing ones." — docs/skill-anatomy.md:3

## Design intent — required
Establishes the canonical structural specification and architectural design patterns for skills in the `agent-skills` ecosystem. Solves the challenge of agent cognitive overload, workflow deviations, and format drift across multi-author contributions by formalizing a 3-tier progressive disclosure model (system prompt frontmatter → on-demand `SKILL.md` body → optional supporting files / scripts), enforcing explicit positive and negative trigger conditions, prescribing behavior-shaping sections (`Common Rationalizations` tables, `Red Flags`, `Verification` exit criteria), and explicitly defining the architectural trade-offs between shared repository-level checklists (`references/`) and colocated skill-specific resources.

## Phase — required
`cross-phase` (meta-specification governing skill authoring, progressive disclosure, and structural layout across all lifecycle phases)

## Inputs — required
- Agent Skills specification conventions (docs/skill-anatomy.md:3, 115)
- Practical authoring patterns from across the 25 catalog skills (docs/skill-anatomy.md:37-73, 114-117)
- Bash automation and safety scripting standards (shebang, `set -e`, stderr logging, stdout JSON, temp trap) (docs/skill-anatomy.md:131-141)
- LLM context efficiency and token budget constraints (<500 lines for `SKILL.md`, <1024 chars for description, 1-level deep reference linking) (docs/skill-anatomy.md:33, 121-130)

## Outputs — required
- Canonical skill file layout schema: `skills/<skill-name>/SKILL.md` (required), `scripts/` (optional), `references/` (optional), `supporting-file.md` (optional) (docs/skill-anatomy.md:7-19)
- YAML frontmatter schema contract: `name` (lowercase kebab-case, must match directory), `description` (third-person summary + positive "Use when" trigger clause, <=1024 chars) (docs/skill-anatomy.md:23-36)
- Recommended standard section anatomy: `# Skill Title`, `## Overview`, `## When to Use`, `## [Core Process / The Workflow / Steps]`, `## [Specific Techniques / Patterns]`, `## Common Rationalizations`, `## Red Flags`, `## Verification` (docs/skill-anatomy.md:37-73)
- Section purpose definitions and behavioral guidelines (docs/skill-anatomy.md:75-99)
- Supporting files threshold criteria (>100 lines for supporting docs, <50 lines inline) (docs/skill-anatomy.md:100-110)
- Shared references architectural convention (centralized root `references/` for multi-skill checklists vs. colocated skill references) and portability trade-off (docs/skill-anatomy.md:111-120)
- Five context efficiency optimization rules (docs/skill-anatomy.md:121-130)
- Six runnable script authoring requirements (docs/skill-anatomy.md:131-141)
- Six core writing principles: Process over knowledge, Specific over general, Evidence over assumption, Anti-rationalization, Progressive disclosure, Token-conscious (docs/skill-anatomy.md:142-150)
- Naming conventions across skill directories, skill files, supporting files, shared references, and skill-specific references (docs/skill-anatomy.md:151-158)
- Cross-skill reference syntax pattern (`[a-z0-9-]+` skill mention) (docs/skill-anatomy.md:159-169)
- Required vs. recommended specification boundary (docs/skill-anatomy.md:170-183)

## Invokes — required
- doc https://github.com/addyosmani/agent-skills/issues/361 — docs/skill-anatomy.md:117
- reference references/ — docs/skill-anatomy.md:14, 18, 113, 117, 119, 156, 157
- skill test-driven-development — docs/skill-anatomy.md:164
- skill debugging-and-error-recovery — docs/skill-anatomy.md:165

## Invoked by — required
- doc AGENTS.md — AGENTS.md:88, 92
- doc CLAUDE.md — CLAUDE.md:39, 57
- doc CONTRIBUTING.md — CONTRIBUTING.md:5, 15, 23
- doc README.md — README.md:410
- doc docs/developer-onboarding.md — docs/developer-onboarding.md:5, 86, 88, 114
- doc docs/getting-started.md — docs/getting-started.md:90
- script scripts/validate-skills.js — scripts/validate-skills.js:6
- script scripts/lib/skill-lint.js — scripts/lib/skill-lint.js:6, 14, 16, 31, 35, 59, 152, 170

## Concepts named — required, verbatim
- `Skill Anatomy` — docs/skill-anatomy.md:1 — defined here
- `SKILL.md` — docs/skill-anatomy.md:12, 18, 20, 103, 123, 125, 129, 148, 154, 174, 182 — defined here | used here
- `scripts/` — docs/skill-anatomy.md:13, 18, 109, 133, 140 — defined here | used here
- `references/` — docs/skill-anatomy.md:14, 18, 113, 117, 119, 156, 157 — defined here | used here
- `supporting-file.md` — docs/skill-anatomy.md:15 — defined here
- `Frontmatter` — docs/skill-anatomy.md:22 — defined here
- `frontmatter` — docs/skill-anatomy.md:39, 175 — used here
- `YAML frontmatter` — docs/skill-anatomy.md:175 — used here
- `Use when` — docs/skill-anatomy.md:27, 33, 81 — defined here | used here
- `Overview` — docs/skill-anatomy.md:44, 77 — defined here
- `When to Use` — docs/skill-anatomy.md:47, 80 — defined here
- `Core Process` — docs/skill-anatomy.md:51, 83, 181 — defined here
- `Specific Techniques / Patterns` — docs/skill-anatomy.md:56 — defined here
- `Common Rationalizations` — docs/skill-anatomy.md:60, 89 — defined here
- `Red Flags` — docs/skill-anatomy.md:65, 94 — defined here
- `Verification` — docs/skill-anatomy.md:69, 97 — defined here
- `elevator pitch` — docs/skill-anatomy.md:78 — defined here
- `Supporting Files` — docs/skill-anatomy.md:100 — defined here
- `supporting files` — docs/skill-anatomy.md:102, 125, 127, 129 — used here
- `Supporting files` — docs/skill-anatomy.md:148, 155, 157, 182 — used here
- `Shared References` — docs/skill-anatomy.md:111, 156 — defined here
- `definition-of-done` — docs/skill-anatomy.md:113 — used here
- `Agent Skills spec` — docs/skill-anatomy.md:115 — used here
- `Context Efficiency` — docs/skill-anatomy.md:121 — defined here
- `Progressive disclosure` — docs/skill-anatomy.md:148 — defined here
- `progressive disclosure` — docs/skill-anatomy.md:127 — used here
- `Script Requirements` — docs/skill-anatomy.md:131 — defined here
- `Writing Principles` — docs/skill-anatomy.md:142 — defined here
- `Process over knowledge` — docs/skill-anatomy.md:144 — defined here
- `Specific over general` — docs/skill-anatomy.md:145 — defined here
- `Evidence over assumption` — docs/skill-anatomy.md:146 — defined here
- `Anti-rationalization` — docs/skill-anatomy.md:147 — defined here
- `Token-conscious` — docs/skill-anatomy.md:149 — defined here
- `Naming Conventions` — docs/skill-anatomy.md:151 — defined here
- `Cross-Skill References` — docs/skill-anatomy.md:159 — defined here
- `test-driven-development` — docs/skill-anatomy.md:164 — used here
- `debugging-and-error-recovery` — docs/skill-anatomy.md:165 — used here
- `Required vs Recommended` — docs/skill-anatomy.md:170 — defined here
- `How It Works` — docs/skill-anatomy.md:181 — used here
- `Workflow` — docs/skill-anatomy.md:181 — used here

## Structure
- `# Skill Anatomy` — docs/skill-anatomy.md:1
- `## File Location` — docs/skill-anatomy.md:5
- `## SKILL.md Format` — docs/skill-anatomy.md:20
  - `### Frontmatter (Required)` — docs/skill-anatomy.md:22
  - `### Standard Sections (Recommended Pattern)` — docs/skill-anatomy.md:37
- `## Section Purposes` — docs/skill-anatomy.md:75
  - `### Overview` — docs/skill-anatomy.md:77
  - `### When to Use` — docs/skill-anatomy.md:80
  - `### Core Process` — docs/skill-anatomy.md:83
  - `### Common Rationalizations` — docs/skill-anatomy.md:89
  - `### Red Flags` — docs/skill-anatomy.md:94
  - `### Verification` — docs/skill-anatomy.md:97
- `## Supporting Files` — docs/skill-anatomy.md:100
- `## Shared References` — docs/skill-anatomy.md:111
- `## Context Efficiency` — docs/skill-anatomy.md:121
- `## Script Requirements` — docs/skill-anatomy.md:131
- `## Writing Principles` — docs/skill-anatomy.md:142
- `## Naming Conventions` — docs/skill-anatomy.md:151
- `## Cross-Skill References` — docs/skill-anatomy.md:159
- `## Required vs Recommended` — docs/skill-anatomy.md:170

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
- `doc-drift` · `docs/skill-anatomy.md:39, 178-181` · Asserts the standard section layout is a "recommended pattern, not a rigid template: equivalent headings are acceptable when they serve the same purpose clearly", yet `scripts/lib/skill-lint.js:45-51, 190-210` hard-enforces five exact headings (`## Overview`, `## When to Use`, `## Common Rationalizations`, `## Red Flags`, `## Verification`) as mandatory `REQUIRED_SECTIONS`, failing CI on any unexempted skill that deviates.
- `missing-path` · `docs/skill-anatomy.md:116-117` · Acknowledges an unresolved packaging dependency hazard (tracked in GitHub issue #361) where per-skill installation tooling copies only `skills/<name>/`, leaving shared root `references/` behind and causing broken markdown links at runtime.

## Observations
- **Progressive Disclosure 3-Tier Hierarchy**: Formalizes an intentional 3-level context loading model: Level 1 (Startup/Discovery) = System prompt loads only `name` and `description` (strictly capped at 1024 characters); Level 2 (Activation) = On-demand read of `SKILL.md` (capped at 500 lines); Level 3 (Deep execution) = On-demand read of supporting docs (>100 lines) or external script execution.
- **Anti-Rationalization Guardrails**: Pairs common agent excuses for skipping steps (e.g. "I'll add tests later", "This is simple enough to skip the spec") with explicit factual counter-arguments in a tabular format, directly combating LLM bias toward cutting corners.
- **Context Economy via External Scripts**: States that executing an external script consumes zero static context tokens (only stdout enters context), making scripts strictly superior to inline bash/code snippets that must be paid for on every skill invocation.
- **Shallow Reference Linking**: Restricts documentation links to one level deep from `SKILL.md` to prevent multi-hop context navigation loops and token blowups.
- **Shared vs Colocated References Architectural Tension**: Balancing DRY maintenance (shared root `references/`) against single-skill distributability (colocated `skills/<name>/references/`).

## Context cost
- File size: 8,849 bytes (~2,210 tokens).
- Transitive context cost: Pure documentation file; 0 static context cost in agent system prompts.
