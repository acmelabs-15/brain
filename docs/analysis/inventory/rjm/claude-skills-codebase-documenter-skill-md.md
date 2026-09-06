---
package: rjm
path: .claude/skills/codebase-documenter/SKILL.md
type: skill
bytes: 4641
unit: inv-rjm-103
in_scope_via: .claude/skills/world-model-diagnostic/SKILL.md
aliases: []
memo_inputs:
  - {path: .claude/skills/codebase-documenter/SKILL.md, sha256: f94be5947e115a61caff598d81516af3606284caa0bb4f4ed4db4fe36973b12a}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# .claude/skills/codebase-documenter/SKILL.md

## Purpose — required, verbatim
> "Generate documentation scaffolding for a project that has none, or has the wrong shape. This skill produces structured starters with bracketed placeholders the team fills in. It does not write prose for you." — .claude/skills/codebase-documenter/SKILL.md:16

## Design intent — required
Provides an automated bootstrapping skill to scaffold standardized technical documentation (README, architecture, API reference, and code comment standards) for greenfield or under-documented codebases. It enforces strict separation of concerns: it writes structural skeletons with bracketed search-and-replace placeholders (`[...]`) and drops reference guidelines for prose voice and visual aids, while refusing to generate speculative prose fiction (delegating narrative generation to the `explainer` agent and ongoing maintenance/verification to `doc-accuracy`). It mandates explicit user confirmation before overwriting any existing documentation and requires path validation against traversal attacks.

## Phase — required
cross-phase

## Inputs — required
- User trigger phrases (`scaffold project documentation`, `bootstrap docs for new codebase`, `add starter README`, `set up documentation standards`, `document this codebase from scratch`).
- User input specifying destination directory and explicit consent before overwriting existing documentation files.
- Project architectural characteristics (e.g. whether the repository exposes an API or requires a dedicated architecture document).
- Shipped templates in `assets/templates/` and guidelines in `references/`.

## Outputs — required
- README.md (or user-requested path).
- ARCHITECTURE.md (system architecture overview and boundaries).
- docs/API.md (REST/HTTP API reference).
- docs/standards/CODE_COMMENTS.md (docstring and commenting standards).

## Invokes — required
- template README.template.md — .claude/skills/codebase-documenter/SKILL.md:50
- template ARCHITECTURE.template.md — .claude/skills/codebase-documenter/SKILL.md:51
- template API.template.md — .claude/skills/codebase-documenter/SKILL.md:53
- template CODE_COMMENTS.template.md — .claude/skills/codebase-documenter/SKILL.md:54
- reference documentation_guidelines.md — .claude/skills/codebase-documenter/SKILL.md:55
- reference visual_aids_guide.md — .claude/skills/codebase-documenter/SKILL.md:55
- skill doc-accuracy — .claude/skills/codebase-documenter/SKILL.md:38
- agent explainer — .claude/skills/codebase-documenter/SKILL.md:39

## Invoked by — required
- skill world-model-diagnostic — .claude/skills/world-model-diagnostic/SKILL.md:292
- doc REQ-007-skill-catalog-prune-m1.md — .agents/specs/requirements/REQ-007-skill-catalog-prune-m1.md:34
- doc skill-triage-2026-05-09.md — .agents/analysis/skill-triage-2026-05-09.md:27

## Concepts named — required, verbatim
- `codebase-documenter` — .claude/skills/codebase-documenter/SKILL.md:2 — defined here
- `Codebase Documenter` — .claude/skills/codebase-documenter/SKILL.md:14 — defined here
- `Triggers` — .claude/skills/codebase-documenter/SKILL.md:18 — defined here
- `When to Use` — .claude/skills/codebase-documenter/SKILL.md:28 — defined here
- `doc-accuracy` — .claude/skills/codebase-documenter/SKILL.md:38 — used here
- `explainer` — .claude/skills/codebase-documenter/SKILL.md:39 — used here
- `Boundaries` — .claude/skills/codebase-documenter/SKILL.md:41 — defined here
- `Process` — .claude/skills/codebase-documenter/SKILL.md:47 — defined here
- `Templates` — .claude/skills/codebase-documenter/SKILL.md:57 — defined here
- `References` — .claude/skills/codebase-documenter/SKILL.md:66 — defined here
- `Verification Checklist` — .claude/skills/codebase-documenter/SKILL.md:73 — defined here
- `Anti-Patterns` — .claude/skills/codebase-documenter/SKILL.md:83 — defined here

## Structure
- # Codebase Documenter — .claude/skills/codebase-documenter/SKILL.md:14
- ## Triggers — .claude/skills/codebase-documenter/SKILL.md:18
- ## When to Use — .claude/skills/codebase-documenter/SKILL.md:28
- ## Boundaries — .claude/skills/codebase-documenter/SKILL.md:41
- ## Process — .claude/skills/codebase-documenter/SKILL.md:47
- ## Templates — .claude/skills/codebase-documenter/SKILL.md:57
- ## References — .claude/skills/codebase-documenter/SKILL.md:66
- ## Verification Checklist — .claude/skills/codebase-documenter/SKILL.md:73
- ## Anti-Patterns — .claude/skills/codebase-documenter/SKILL.md:83

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
- Narrow lifecycle positioning: classified in rjm architectural analysis as a one-shot bootstrap skill used once at project inception rather than on an ongoing lifecycle loop (`.agents/analysis/skill-triage-2026-05-09.md:106`).
- Anti-pattern discipline: warns explicitly against "Filling in placeholders speculatively" (line 87), noting that inventing speculative project documentation produces fiction that teams must later diagnose and replace.

## Context cost
4641 bytes (plus 12866 bytes of templates and 7152 bytes of references = 24659 bytes total; approx. 6165 tokens).
