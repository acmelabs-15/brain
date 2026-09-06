---
package: rjm
path: .claude/skills/codebase-documenter/assets/templates/CODE_COMMENTS.template.md
type: skill
bytes: 4667
unit: inv-rjm-103
in_scope_via: .claude/skills/codebase-documenter/SKILL.md
aliases: []
memo_inputs:
  - {path: .claude/skills/codebase-documenter/assets/templates/CODE_COMMENTS.template.md, sha256: 25940bcf531f8689e2245518804e86b4e50e3dc33aeda22c146e256483b3a834}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# .claude/skills/codebase-documenter/assets/templates/CODE_COMMENTS.template.md

## Purpose — required, verbatim
> "Comments record the things the code itself cannot say. Names, types, and structure carry the rest. This guide gives the patterns for docstrings, function headers, why-not-what comments, complex-logic annotations, TODOs, and deprecation notices." — .claude/skills/codebase-documenter/assets/templates/CODE_COMMENTS.template.md:3

## Design intent — required
Establishes a rigorous standard and template for codebase comment conventions, articulating foundational principles: comments must explain why rather than what, names and types carry mechanics, and out-of-date comments are worse than none. It provides language-agnostic docstring specifications alongside concrete Python and JavaScript/TypeScript implementations, contrasts bad versus good why-not-what inline comments, defines invariant documentation for complex algorithms, mandates issue/owner linkage for TODOs, provides runtime and type-level deprecation templates, and catalogues anti-patterns (restating code, author attribution in comments, bare hack tags, contradiction). Without it, teams lack shared code commenting standards, resulting in clutter, stale comments, and unmaintained TODOs.

## Phase — required
cross-phase

## Inputs — required
- Target programming languages, docstring tools, issue tracking conventions, and ADR locations of the adopting codebase.

## Outputs — required
- docs/standards/CODE_COMMENTS.md (or user-specified destination path, often linked from the project README).

## Invokes — required
none

## Invoked by — required
- skill codebase-documenter — .claude/skills/codebase-documenter/SKILL.md:54

## Concepts named — required, verbatim
- `Code Comment Standards` — .claude/skills/codebase-documenter/assets/templates/CODE_COMMENTS.template.md:1 — defined here
- `Principles` — .claude/skills/codebase-documenter/assets/templates/CODE_COMMENTS.template.md:5 — defined here
- `Function or Method Docstrings` — .claude/skills/codebase-documenter/assets/templates/CODE_COMMENTS.template.md:12 — defined here
- `Language-agnostic shape` — .claude/skills/codebase-documenter/assets/templates/CODE_COMMENTS.template.md:16 — defined here
- `Why-Not-What Comments` — .claude/skills/codebase-documenter/assets/templates/CODE_COMMENTS.template.md:73 — defined here
- `Complex-Logic Annotations` — .claude/skills/codebase-documenter/assets/templates/CODE_COMMENTS.template.md:93 — defined here
- `TODO Format` — .claude/skills/codebase-documenter/assets/templates/CODE_COMMENTS.template.md:114 — defined here
- `Deprecation Notice` — .claude/skills/codebase-documenter/assets/templates/CODE_COMMENTS.template.md:130 — defined here
- `Anti-Patterns` — .claude/skills/codebase-documenter/assets/templates/CODE_COMMENTS.template.md:160 — defined here

## Structure
- # Code Comment Standards — .claude/skills/codebase-documenter/assets/templates/CODE_COMMENTS.template.md:1
- ## Principles — .claude/skills/codebase-documenter/assets/templates/CODE_COMMENTS.template.md:5
- ## Function or Method Docstrings — .claude/skills/codebase-documenter/assets/templates/CODE_COMMENTS.template.md:12
- ### Language-agnostic shape — .claude/skills/codebase-documenter/assets/templates/CODE_COMMENTS.template.md:16
- ### Python — .claude/skills/codebase-documenter/assets/templates/CODE_COMMENTS.template.md:33
- ### JavaScript or TypeScript — .claude/skills/codebase-documenter/assets/templates/CODE_COMMENTS.template.md:54
- ## Why-Not-What Comments — .claude/skills/codebase-documenter/assets/templates/CODE_COMMENTS.template.md:73
- ### Bad (restates the code) — .claude/skills/codebase-documenter/assets/templates/CODE_COMMENTS.template.md:77
- ### Good (explains why) — .claude/skills/codebase-documenter/assets/templates/CODE_COMMENTS.template.md:84
- ## Complex-Logic Annotations — .claude/skills/codebase-documenter/assets/templates/CODE_COMMENTS.template.md:93
- ### Bad (vague annotation) — .claude/skills/codebase-documenter/assets/templates/CODE_COMMENTS.template.md:97
- ### Good (invariant documented) — .claude/skills/codebase-documenter/assets/templates/CODE_COMMENTS.template.md:105
- ## TODO Format — .claude/skills/codebase-documenter/assets/templates/CODE_COMMENTS.template.md:114
- ### Bad (bare TODO) — .claude/skills/codebase-documenter/assets/templates/CODE_COMMENTS.template.md:118
- ### Good (TODO with issue link) — .claude/skills/codebase-documenter/assets/templates/CODE_COMMENTS.template.md:124
- ## Deprecation Notice — .claude/skills/codebase-documenter/assets/templates/CODE_COMMENTS.template.md:130
- ### Python deprecation — .claude/skills/codebase-documenter/assets/templates/CODE_COMMENTS.template.md:134
- ### TypeScript — .claude/skills/codebase-documenter/assets/templates/CODE_COMMENTS.template.md:149
- ## Anti-Patterns — .claude/skills/codebase-documenter/assets/templates/CODE_COMMENTS.template.md:160

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
- Distinguishes between why-not-what comments (explaining vendor API quirks or business motivation) and complex-logic annotations (documenting formal invariants or ADR references).
- Features concrete deprecation examples demonstrating both runtime warnings (`warnings.warn`) in Python and `@deprecated` JSDoc annotations in TypeScript.

## Context cost
4667 bytes (approx. 1167 tokens).
