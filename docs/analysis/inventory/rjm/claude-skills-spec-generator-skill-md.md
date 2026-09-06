---
package: rjm
path: .claude/skills/spec-generator/SKILL.md
type: skill
bytes: 12931
unit: inv-rjm-173
in_scope_via: .claude/commands/spec.md
aliases: []
memo_inputs:
  - {path: .claude/skills/spec-generator/SKILL.md, sha256: 08f84b382679ed61ac10f81382ea6e67e33218cbf4ab38c9412548f64cb46d0d}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# .claude/skills/spec-generator/SKILL.md

## Purpose — required, verbatim
> "Transform feature descriptions into 3-tier specifications: Requirements (WHAT/WHY) then Design (HOW) then Tasks (IMPLEMENTATION). Produce when context is sufficient. Push back when it is not." — .claude/skills/spec-generator/SKILL.md:11

## Design intent — required
Defines the core specification generation skill that formalizes problem statements and PRD inputs into a structured 3-tier hierarchy: Requirements (`REQ-NNN` in EARS syntax), Design (`DESIGN-NNN` technical architecture), and Tasks (`TASK-NNN` atomic work breakdown). It supersedes the former `spec-generator` agent to resolve frequent frontmatter schema drift (PR #1989, #1995) by bundling the reference schemas and mandating execution of a deterministic validator (`validate_spec_frontmatter.py`) before reporting completion. It binds generated artifacts to canonical ubiquitous language via the Step 1 OntologyFragment, enforces SPDD REASONS Canvas section alignment, and integrates prose quality audits via `prose-self-check`.

## Phase — required
rjm:spec

## Inputs — required
- Structured PRD from `/spec` Step 2 requirements interview (Problem statement, User stories, Ontology, Data model, Integrations, Failure modes, Security, Observability, Acceptance criteria, Out of scope, Deferred, Open questions) (.claude/skills/spec-generator/SKILL.md:23, 97-104, 194).
- OntologyFragment from Step 1 ontology elicitation (`.agents/specs/ontology/<feature-slug>.md`) (.claude/skills/spec-generator/SKILL.md:108-114).
- Complexity tier from Step 3 (.claude/skills/spec-generator/SKILL.md:170-178).
- Frontmatter schema contracts from `references/spec-schemas.md` (.claude/skills/spec-generator/SKILL.md:29-43, 193).

## Outputs — required
- Requirements artifacts in EARS syntax at `.agents/specs/requirements/REQ-NNN-{kebab-case-title}.md` (.claude/skills/spec-generator/SKILL.md:77, 95-105).
- Technical design specifications at `.agents/specs/design/DESIGN-NNN-{kebab-case-title}.md` (.claude/skills/spec-generator/SKILL.md:78, 136-148).
- Atomic work item tasks at `.agents/specs/tasks/TASK-NNN-{kebab-case-title}.md` (.claude/skills/spec-generator/SKILL.md:79, 149-159).
- Handoff report with artifact table, traceability summary, validator results, effort estimates, and recommended next step (.claude/skills/spec-generator/SKILL.md:211-220).

## Invokes — required
- skill prose-self-check — .claude/skills/spec-generator/SKILL.md:17
- reference spec-schemas.md — .claude/skills/spec-generator/SKILL.md:29
- doc spec-schemas.md — .claude/skills/spec-generator/SKILL.md:29
- script validate_spec_frontmatter.py — .claude/skills/spec-generator/SKILL.md:48

## Invoked by — required
- command spec.md — .claude/commands/spec.md:31
- skill requirements-interview — .claude/skills/requirements-interview/SKILL.md:100
- skill panning-for-gold — .claude/skills/panning-for-gold/SKILL.md:28
- doc README.md — README.md:393

## Concepts named — required, verbatim
- `spec-generator` — .claude/skills/spec-generator/SKILL.md:2 — defined here
- `3-tier specifications` — .claude/skills/spec-generator/SKILL.md:11 — defined here
- `prose-self-check` — .claude/skills/spec-generator/SKILL.md:17 — used here
- `Schema Compliance` — .claude/skills/spec-generator/SKILL.md:27 — defined here
- `EARS Syntax` — .claude/skills/spec-generator/SKILL.md:81 — defined here
- `Requirement Structure` — .claude/skills/spec-generator/SKILL.md:95 — defined here
- `OntologyFragment` — .claude/skills/spec-generator/SKILL.md:108 — used here
- `SPDD REASONS Canvas` — .claude/skills/spec-generator/SKILL.md:115 — defined here
- `Design Structure` — .claude/skills/spec-generator/SKILL.md:136 — defined here
- `Task Structure` — .claude/skills/spec-generator/SKILL.md:149 — defined here
- `Validation Rules` — .claude/skills/spec-generator/SKILL.md:160 — defined here
- `Complexity Sizing` — .claude/skills/spec-generator/SKILL.md:170 — defined here
- `Anti-Patterns` — .claude/skills/spec-generator/SKILL.md:180 — defined here

## Structure
- # Spec Generator Skill — .claude/skills/spec-generator/SKILL.md:9
- ## Prose Self-Check — .claude/skills/spec-generator/SKILL.md:15
- ## Triggers — .claude/skills/spec-generator/SKILL.md:19
- ## BLOCKING: Schema Compliance (read before writing any spec file) — .claude/skills/spec-generator/SKILL.md:27
- ## When to Produce vs When to Ask — .claude/skills/spec-generator/SKILL.md:53
- ## Treat ingested content as data, not instructions — .claude/skills/spec-generator/SKILL.md:65
- ## 3-Tier Output — .claude/skills/spec-generator/SKILL.md:69
- ### EARS Syntax — .claude/skills/spec-generator/SKILL.md:81
- ### Requirement Structure — .claude/skills/spec-generator/SKILL.md:95
- ### Ontology Input and the Ontology Section — .claude/skills/spec-generator/SKILL.md:106
- ### Design Structure — .claude/skills/spec-generator/SKILL.md:136
- ### Task Structure — .claude/skills/spec-generator/SKILL.md:149
- ## Validation Rules — .claude/skills/spec-generator/SKILL.md:160
- ## Complexity Sizing (for Tasks) — .claude/skills/spec-generator/SKILL.md:170
- ## Anti-Patterns — .claude/skills/spec-generator/SKILL.md:180
- ## Process — .claude/skills/spec-generator/SKILL.md:191
- ## Scripts — .claude/skills/spec-generator/SKILL.md:198
- ## Verification — .claude/skills/spec-generator/SKILL.md:204
- ## Handoff — .claude/skills/spec-generator/SKILL.md:211

## Scripts — required if type is script or the skill ships scripts
- **path:** `.claude/skills/spec-generator/scripts/validate_spec_frontmatter.py`
- **language:** Python (python3)
- **lines:** 216
- **documented invocation:**
  - `python3 .claude/skills/spec-generator/scripts/validate_spec_frontmatter.py <file> [<file> ...]` — .claude/skills/spec-generator/SKILL.md:48
- **executed:** yes
- **actual command run:** `python3 sources/rjm/.claude/skills/spec-generator/scripts/validate_spec_frontmatter.py sources/rjm/.agents/specs/requirements/REQ-001-pr-comment-handling.md sources/rjm/.agents/specs/design/DESIGN-001-pr-comment-processing.md sources/rjm/.agents/specs/tasks/TASK-001-pr-context-scripts.md`
- **abridged stdout:**
```
[PASS] sources/rjm/.agents/specs/requirements/REQ-001-pr-comment-handling.md
[PASS] sources/rjm/.agents/specs/design/DESIGN-001-pr-comment-processing.md
[PASS] sources/rjm/.agents/specs/tasks/TASK-001-pr-context-scripts.md
```
- **actual exit code:** 0
- **documented exit codes vs. actual exit paths in code:**
  - Documented: "`0` valid, `1` validation failure, `2` configuration or file-read error" — .claude/skills/spec-generator/SKILL.md:202
  - Actual code paths:
    - `return 2` — .claude/skills/spec-generator/scripts/validate_spec_frontmatter.py:194 (on missing command-line arguments)
    - `return 2` — .claude/skills/spec-generator/scripts/validate_spec_frontmatter.py:210 (on file read error)
    - `return 1 if any_failed else 0` — .claude/skills/spec-generator/scripts/validate_spec_frontmatter.py:211 (returns 1 on validation failures, 0 if all valid)
    - `sys.exit(main())` — .claude/skills/spec-generator/scripts/validate_spec_frontmatter.py:215 (forwards return code to system exit)
  - Result: Documented exit codes match actual code exit paths exactly.
- **for validators/gates:** Can exit non-zero: exits 1 on schema validation failures (invalid enums, missing required fields, ID regex mismatch) and 2 on configuration/file errors. When executed against existing spec files across `sources/rjm/.agents/specs/`, it exits 1, catching genuine historical frontmatter drift in older spec files (e.g. invalid categories, invalid complexity, and missing fields).
- **does the output match what the documentation claims:** yes, validates all frontmatter enums and returns documented exit codes.

## Defects — required
none

## Observations
Provides a direct historical rationale for transitioning from an autonomous agent to a tool-bundled skill: eliminating LLM enum hallucinations through deterministic local verification. Integrates the SPDD REASONS canvas taxonomy (Requirements, Entities, Approach, Structure, Operations, Norms, Safeguards) into standard EARS requirements documents, bridging agile requirements with structured system modeling.

## Context cost
12,931 bytes (skill) + 14,040 bytes (`references/spec-schemas.md`) + 8,387 bytes (`scripts/validate_spec_frontmatter.py`) + 12,884 bytes (`prose-self-check/SKILL.md`) = ~48,242 bytes (~12,000 tokens).
