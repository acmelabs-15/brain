---
package: rjm
path: .claude/skills/panning-for-gold/scripts/inventory.py
type: script
bytes: 6911
unit: inv-rjm-132
in_scope_via: .agents/architecture/README.md
aliases: []
memo_inputs:
  - {path: .claude/skills/panning-for-gold/scripts/inventory.py, sha256: b622e9c01913b410cadc11fa13a34ca0b2a6bc8bfcccfac206b54c2a3f3f4972}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# .claude/skills/panning-for-gold/scripts/inventory.py

## Purpose — required, verbatim
> "Inventory parsing and merging for panning-for-gold." — .claude/skills/panning-for-gold/scripts/inventory.py:2

## Design intent — required
Provides core parsing, schema validation, deduplication, and merging facilities for markdown thread inventory files within the `panning-for-gold` skill. It parses markdown thread blocks into immutable `Thread` dataclass instances, verifies that all four required fields (`Signal`, `Quote`, `Context`, `Initial take`) are present and non-empty, checks that signal values belong to the allowed set (`high`, `medium`, `low`), performs title-based deduplication when merging `pass1` and `final` inventories, renumbers threads sequentially starting from 1, and renders structured threads back into canonical markdown format.

## Phase — required
cross-phase

## Inputs — required
- Thread inventory markdown strings or file paths conforming to `references/inventory-template.md`
- Pass1 and final lists of `Thread` dataclasses for merging

## Outputs — required
- Validated `Thread` dataclass instances
- Merged and renumbered `Thread` sequences
- Serialized markdown text rendered by `render_inventory`

## Invokes — required
none

## Invoked by — required
- script inventory — .claude/skills/panning-for-gold/scripts/pan.py:27
- script inventory — .claude/skills/panning-for-gold/scripts/synthesis.py:24
- skill panning-for-gold — .claude/skills/panning-for-gold/SKILL.md:125

## Concepts named — required, verbatim
- `panning-for-gold` — .claude/skills/panning-for-gold/scripts/inventory.py:2 — used here
- `ADR-035` — .claude/skills/panning-for-gold/scripts/inventory.py:13 — used here
- `Signal` — .claude/skills/panning-for-gold/scripts/inventory.py:27 — used here
- `Quote` — .claude/skills/panning-for-gold/scripts/inventory.py:28 — used here
- `Context` — .claude/skills/panning-for-gold/scripts/inventory.py:29 — used here
- `Initial take` — .claude/skills/panning-for-gold/scripts/inventory.py:30 — used here
- `Thread` — .claude/skills/panning-for-gold/scripts/inventory.py:40 — defined here
- `InventoryError` — .claude/skills/panning-for-gold/scripts/inventory.py:56 — defined here
- `MissingInventoryError` — .claude/skills/panning-for-gold/scripts/inventory.py:60 — defined here

## Structure
none (python module; functions and classes: `REQUIRED_FIELDS`, `VALID_SIGNALS`, `Thread`, `InventoryError`, `MissingInventoryError`, `normalize_lines`, `parse_inventory`, `read_inventory`, `merge`, `render_inventory`)

## Scripts — required if type is script or the skill ships scripts
- path: `.claude/skills/panning-for-gold/scripts/inventory.py`, language: Python 3, lines: 227
- documented invocation:
  - "scripts/inventory.py" — .claude/skills/panning-for-gold/SKILL.md:125
  - "The script delegates to `inventory.py` for parsing and merging, and `synthesis.py` for gold-found generation." — .claude/skills/panning-for-gold/SKILL.md:118
- **executed:** yes
- actual command run: `python3 sources/rjm/.claude/skills/panning-for-gold/scripts/inventory.py`
  abridged stdout: (empty)
  **actual exit code**: 0
- documented exit codes vs. actual exit paths:
  Documented in module docstring:
  - "0 - Success" — .claude/skills/panning-for-gold/scripts/inventory.py:14
  - "1 - Logic error (malformed inventory)" — .claude/skills/panning-for-gold/scripts/inventory.py:15
  - "2 - Config error (missing file)" — .claude/skills/panning-for-gold/scripts/inventory.py:16
  Actual exit paths in code:
  - Module defines no `sys.exit()` calls or CLI entrypoint. It defines exception classes `InventoryError` (.claude/skills/panning-for-gold/scripts/inventory.py:56) and `MissingInventoryError` (.claude/skills/panning-for-gold/scripts/inventory.py:60) which are caught by `pan.py` to produce exit codes 1 and 2.
- for validators/gates: can it exit non-zero? no (as a library module). does it fail on default branch? no.
- does output match documentation? yes, functions correctly as a domain library called by `pan.py`.

## Defects — required
- `doc-drift` · .claude/skills/panning-for-gold/scripts/inventory.py:13 · Docstring documents ADR-035 CLI exit codes (0, 1, 2) as if this script were an independent CLI executable, but `inventory.py` contains no `__main__` entrypoint or `sys.exit()` calls; exit codes are returned by `pan.py`.

## Observations
- In `read_inventory` (.claude/skills/panning-for-gold/scripts/inventory.py:162), uses `not path.is_file()` to reject directories and missing paths before reading, raising `MissingInventoryError` instead of allowing raw OS exceptions to escape.
- In `Thread.key` (.claude/skills/panning-for-gold/scripts/inventory.py:53), the deduplication key normalizes whitespace and lowercases the title, enabling resilient duplicate matching across iterative triage passes.

## Context cost
6911 bytes (~1728 tokens).
