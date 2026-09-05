---
package: rjm
path: .claude/skills/adr-review/references/artifacts.md
type: reference
bytes: 2705
unit: inv-rjm-77
in_scope_via: .agents/architecture/README.md
aliases: []
memo_inputs:
  - {path: .claude/skills/adr-review/references/artifacts.md, sha256: 82daf59b64761376f05dd9a47a02294f060cf150675f6c926722ee1d7c300c65}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# .claude/skills/adr-review/references/artifacts.md

## Purpose — required, verbatim
> "Save debate artifacts to `.agents/critique/`." — .claude/skills/adr-review/references/artifacts.md:3

## Design intent — required
Defines file storage paths, schemas, and templates for artifacts produced by the `adr-review` skill, including debate logs (`.agents/critique/ADR-NNN-debate-log.md`), updated ADRs (`.agents/architecture/ADR-NNN-[title].md`), and structured recommendations returned to the orchestrator. It also catalogs prior ADR search directories, MADR 4.0 template requirements, and reversibility assessment dimensions. Without it, debate outcomes and audit trails would not be saved in standardized locations, and the orchestrator would lack clear routing instructions (to milestone-planner or task-decomposer) following ADR approval.

## Phase — required
none

## Inputs — required
- Prior ADRs in `.agents/architecture/ADR-*.md`, `docs/adr/ADR-*.md`, `docs/architecture/ADR-*.md`, `docs/decisions/ADR-*.md`, `architecture/decisions/ADR-*.md` — .claude/skills/adr-review/references/artifacts.md:74-78
- User or orchestrator trigger prompts specifying target ADR path (`.agents/architecture/ADR-005-api-versioning.md`) — .claude/skills/adr-review/references/artifacts.md:105, 113

## Outputs — required
- Debate log saved to `.agents/critique/ADR-NNN-debate-log.md` — .claude/skills/adr-review/references/artifacts.md:7
- Updated ADR saved to `.agents/architecture/ADR-NNN-[title].md` — .claude/skills/adr-review/references/artifacts.md:38
- Structured recommendation report returned to orchestrator — .claude/skills/adr-review/references/artifacts.md:42-66

## Invokes — required
- agent milestone-planner — .claude/skills/adr-review/references/artifacts.md:63
- agent task-decomposer — .claude/skills/adr-review/references/artifacts.md:64
- doc architect.md — .claude/skills/adr-review/references/artifacts.md:82
- agent orchestrator — .claude/skills/adr-review/references/artifacts.md:112

## Invoked by — required
- skill adr-review — .claude/skills/adr-review/SKILL.md:269
- script scripts/validation/git_hook_policy.py — scripts/validation/git_hook_policy.py:1936

## Concepts named — required, verbatim
- `Debate Log` — .claude/skills/adr-review/references/artifacts.md:5 — defined here
- `Updated ADR` — .claude/skills/adr-review/references/artifacts.md:36 — defined here
- `Recommendations` — .claude/skills/adr-review/references/artifacts.md:40 — defined here
- `MADR 4.0` — .claude/skills/adr-review/references/artifacts.md:82 — used here
- `Reversibility Assessment` — .claude/skills/adr-review/references/artifacts.md:90 — defined here
- `Vendor lock-in` — .claude/skills/adr-review/references/artifacts.md:95 — used here

## Structure
- # Artifact Storage — .claude/skills/adr-review/references/artifacts.md:1
- ## Debate Log — .claude/skills/adr-review/references/artifacts.md:5
- ## Updated ADR — .claude/skills/adr-review/references/artifacts.md:36
- ## Recommendations — .claude/skills/adr-review/references/artifacts.md:40
- ### Outcome — .claude/skills/adr-review/references/artifacts.md:51
- ### Scope Split (if applicable) — .claude/skills/adr-review/references/artifacts.md:56
- ### Planning Recommendations — .claude/skills/adr-review/references/artifacts.md:59
- ## Integration Points — .claude/skills/adr-review/references/artifacts.md:68
- ### Prior ADR Locations — .claude/skills/adr-review/references/artifacts.md:70
- ### ADR Template Reference — .claude/skills/adr-review/references/artifacts.md:80
- ### Reversibility Assessment — .claude/skills/adr-review/references/artifacts.md:90
- ## Example Invocation — .claude/skills/adr-review/references/artifacts.md:100

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
- `missing-path` · .claude/skills/adr-review/references/artifacts.md:82 · Cites architect.md without path prefix (MADR 4.0 format per architect.md); resolves to src/claude/architect.md or .claude/agents/architect.md.

## Observations
- Carries vendor-portability declaration comment at line 119: `<!-- vendor-portability: declared. This doc directs debate artifacts to .agents/critique/ and accepted ADRs to .agents/architecture/. In a vendored install without those dirs the agent creates them (or writes to the consumer's chosen artifact root); the paths are write targets, not preconditions. Issue #2050. -->`.
- Referenced directly by `scripts/validation/git_hook_policy.py:1936, 2025, 2027` which parses the debate log schema during Lefthook git hook pre-commit/pre-push policy verification.

## Context cost
2705 bytes. Approximately 700 tokens.
