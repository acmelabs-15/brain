---
package: rjm
path: .claude/skills/skillforge/.gitignore
type: skill
bytes: 533
unit: inv-rjm-158
in_scope_via: .claude/skills/skillforge/SKILL.md
aliases: []
memo_inputs:
  - {path: .claude/skills/skillforge/.gitignore, sha256: 50a512c8f978ed2a4810ff795d00e0a023abfbcb4ac0e88b98f477279424db5c}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# .claude/skills/skillforge/.gitignore

## Purpose — required, verbatim
> "# Python" — .claude/skills/skillforge/.gitignore:1
(no explicit purpose statement; local git exclusion rules for Python caches, build artifacts, environments, and temporary generation files)

## Design intent — required
Isolates the `skillforge` directory from accidental versioning of Python bytecode artifacts, virtual environment state, editor metadata, OS caches, temporary backup files, test logs, coverage artifacts, and in-progress intermediate specification XML/Markdown templates (`*.spec.xml.tmp`, `SKILL_SPEC.tmp.md`). Ensures that autonomous generation and testing passes executed by SkillForge scripts leave no transient residue in the repository git index.

## Phase — required
none

## Inputs — required
none

## Outputs — required
none

## Invokes — required
none

## Invoked by — required
- file .claude/skills/skillforge/.skillignore — .claude/skills/skillforge/.skillignore:6

## Concepts named — required, verbatim
- `Python` — .claude/skills/skillforge/.gitignore:1 — used here
- `Virtual environments` — .claude/skills/skillforge/.gitignore:23 — used here
- `IDE` — .claude/skills/skillforge/.gitignore:29 — used here
- `OS` — .claude/skills/skillforge/.gitignore:36 — used here
- `Backup files` — .claude/skills/skillforge/.gitignore:45 — used here
- `Logs` — .claude/skills/skillforge/.gitignore:50 — used here
- `Test output` — .claude/skills/skillforge/.gitignore:54 — used here
- `Generated specifications` — .claude/skills/skillforge/.gitignore:60 — used here

## Structure
- # Python — .claude/skills/skillforge/.gitignore:1
- # Virtual environments — .claude/skills/skillforge/.gitignore:23
- # IDE — .claude/skills/skillforge/.gitignore:29
- # OS — .claude/skills/skillforge/.gitignore:36
- # Backup files — .claude/skills/skillforge/.gitignore:45
- # Logs — .claude/skills/skillforge/.gitignore:50
- # Test output — .claude/skills/skillforge/.gitignore:54
- # Generated specifications (temporary) — .claude/skills/skillforge/.gitignore:60

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
- Specifically ignores temporary specification artifacts (`*.spec.xml.tmp`, `SKILL_SPEC.tmp.md` at lines 61-62) that correspond to the temporary output generated during Phase 2 (Specification).
- Listed in `.skillignore:6` so it is excluded when packaging the skill into distribution archives.

## Context cost
533 bytes (approx. 133 tokens).
