---
package: rjm
path: .claude/skills/adr-review/references/deletion-workflow.md
type: reference
bytes: 2758
unit: inv-rjm-77
in_scope_via: .agents/architecture/README.md
aliases: []
memo_inputs:
  - {path: .claude/skills/adr-review/references/deletion-workflow.md, sha256: 554c3cb2d110a6afa1e06a8f7b09e4b8fa88e5d08f9206571bab8436cb576657}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# .claude/skills/adr-review/references/deletion-workflow.md

## Purpose — required, verbatim
> "When an ADR file is deleted, this skill triggers a special workflow." — .claude/skills/adr-review/references/deletion-workflow.md:3

## Design intent — required
Establishes a four-phase governance procedure (Phases D1 through D4) triggered whenever an ADR file is deleted, ensuring architectural history and active dependencies are preserved. It uses `detect_adr_changes.py` for deletion detection (D1), delegates impact assessment to the analyst agent to identify code and doc references (D2), evaluates status-based archival rules requiring accepted/deprecated ADRs to be preserved in `.agents/architecture/archive/` (D3), and performs dependency reference cleanup across the codebase (D4). Without it, deleting an ADR could leave dangling cross-references, break un-migrated architectural dependencies, or permanently destroy institutional decision rationale.

## Phase — required
none

## Inputs — required
- Git deletion status and last known ADR metadata from detect_adr_changes.py — .claude/skills/adr-review/references/deletion-workflow.md:9, 12-14
- Deleted ADR path, title, and status (`{deleted_adr_path}`, `{adr_title}`, `{last_known_status}`) — .claude/skills/adr-review/references/deletion-workflow.md:26-28
- Codebase grep and session log searches for active references and dependent ADRs — .claude/skills/adr-review/references/deletion-workflow.md:31-34

## Outputs — required
- Analyst impact assessment with found references and recommendation (Archive, Delete, or Block) — .claude/skills/adr-review/references/deletion-workflow.md:38-47
- Archived ADR document saved to `.agents/architecture/archive/ADR-NNN-title.md` — .claude/skills/adr-review/references/deletion-workflow.md:68-79
- Deletion completion report returned to orchestrator detailing updated files, archive location, or blocking reasons — .claude/skills/adr-review/references/deletion-workflow.md:89-103

## Invokes — required
- script .claude/skills/adr-review/scripts/detect_adr_changes.py — .claude/skills/adr-review/references/deletion-workflow.md:9
- agent analyst — .claude/skills/adr-review/references/deletion-workflow.md:22

## Invoked by — required
- skill adr-review — .claude/skills/adr-review/SKILL.md:113

## Concepts named — required, verbatim
- `Phase D1: Deletion Detection` — .claude/skills/adr-review/references/deletion-workflow.md:5 — defined here
- `Phase D2: Impact Assessment` — .claude/skills/adr-review/references/deletion-workflow.md:17 — defined here
- `Phase D3: Archival Decision` — .claude/skills/adr-review/references/deletion-workflow.md:50 — defined here
- `Archival Format` — .claude/skills/adr-review/references/deletion-workflow.md:63 — defined here
- `Phase D4: Cleanup` — .claude/skills/adr-review/references/deletion-workflow.md:81 — defined here

## Structure
- # ADR Deletion Workflow — .claude/skills/adr-review/references/deletion-workflow.md:1
- ## Phase D1: Deletion Detection — .claude/skills/adr-review/references/deletion-workflow.md:5
- ## Phase D2: Impact Assessment — .claude/skills/adr-review/references/deletion-workflow.md:17
- ## Phase D3: Archival Decision — .claude/skills/adr-review/references/deletion-workflow.md:50
- ## Archival Format — .claude/skills/adr-review/references/deletion-workflow.md:63
- ## Phase D4: Cleanup — .claude/skills/adr-review/references/deletion-workflow.md:81

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
- Carries vendor-portability declaration comment at line 105: `<!-- vendor-portability: declared. This workflow archives superseded ADRs to .agents/architecture/archive/. In a vendored install without that tree the archive dir is created on first use; the path is a write target, not a read dependency. Issue #2050. -->`.
- Strict gate for accepted ADRs: deletion is blocked if any dependent ADRs or code references exist; if no dependencies exist, the ADR must still be archived before file deletion (.claude/skills/adr-review/references/deletion-workflow.md:58-59).

## Context cost
2758 bytes. Approximately 750 tokens.
