---
package: rjm
path: scripts/restructure_memories.py
type: script
bytes: 13887
unit: inv-rjm-258
in_scope_via: docs/workflow-commands.md
aliases: []
memo_inputs:
  - {path: scripts/restructure_memories.py, sha256: 6afb99a67dca2706ea92372b1468fabea9aa75087d238398671098e5e754af11}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# scripts/restructure_memories.py

## Purpose — required, verbatim
> "Restructure .serena/memories/ into topic subdirectories." — scripts/restructure_memories.py:2

## Design intent — required
Automates organizing accumulated atomic Serena memory markdown files from a flat `.serena/memories/` directory into domain-specific topic subdirectories (such as `pr-review`, `ci`, `skills`, `git`, `security`, `knowledge`) while keeping top-level index and mandatory usage files intact, grouping smaller categories (< 3 files) into `general`, and rewriting references in index files to maintain valid relative paths. Without it, organizing Serena memory files across 100+ topics would require high-risk manual moves and regex updates across index references.

## Phase — required
none

## Inputs — required
- Directory `.serena/memories/`: `scripts/restructure_memories.py:16`
- CLI flag `--dry-run`: `scripts/restructure_memories.py:391`
- Memory markdown files (`*.md`) within `.serena/memories/`: `scripts/restructure_memories.py:314-315`
- Index files within `.serena/memories/` ending in `-index.md`: `scripts/restructure_memories.py:288`

## Outputs — required
- Topic subdirectories created under `.serena/memories/<subdir>/`: `scripts/restructure_memories.py:374-376`
- Atomic memory markdown files moved into topic subdirectories: `scripts/restructure_memories.py:385`
- Updated index markdown files with directory-prefixed memory paths: `scripts/restructure_memories.py:357-361`
- Console diagnostic and summary messages to stdout: `scripts/restructure_memories.py:405-423`, `scripts/restructure_memories.py:449-453`
- Error message to stdout on missing directory: `scripts/restructure_memories.py:397`

## Invokes — required
none

## Invoked by — required
orphan

## Concepts named — required, verbatim
- `MEMORIES_DIR` — scripts/restructure_memories.py:16 — defined here
- `TOP_LEVEL_KEEP` — scripts/restructure_memories.py:19 — defined here
- `MIN_GROUP_SIZE` — scripts/restructure_memories.py:26 — defined here
- `PREFIX_TO_DIR` — scripts/restructure_memories.py:30 — defined here
- `is_index_file` — scripts/restructure_memories.py:285 — defined here
- `classify_file` — scripts/restructure_memories.py:291 — defined here
- `plan_moves` — scripts/restructure_memories.py:310 — defined here
- `update_index_references` — scripts/restructure_memories.py:332 — defined here
- `execute_moves` — scripts/restructure_memories.py:367 — defined here
- `main` — scripts/restructure_memories.py:390 — defined here

## Structure
(no headings, flat python script)

## Scripts — required if type is script or the skill ships scripts
- path: `scripts/restructure_memories.py`, language: Python 3, lines: 459
- documented invocation: `"This is a one-time migration script." — scripts/restructure_memories.py:7`
- **executed:** yes
- actual command run: `python3 scripts/restructure_memories.py --dry-run` (run in `sources/rjm`)
  abridged stdout:
```
=== Serena Memory Restructuring ===
Total files: 130
Index files (keep at top): 44
Special files (keep at top): 3
Files to move: 83

Subdirectories to create: 4
Files to move: 84

  copilot/ (5 files)
  decision/ (45 files)
  general/ (30 files)
  root/ (4 files)

[DRY RUN] No files will be moved.
...
```
  **actual exit code:** 0
- actual command run (negative case): `python3 sources/rjm/scripts/restructure_memories.py --dry-run` (run from repository root)
  abridged stdout: `ERROR: /Users/peterkloss/Dev/ACMElabs/brain-v2/.serena/memories not found. Run from repo root.`
  **actual exit code:** 1
- documented exit codes: none documented in docstring; actual exit paths: `scripts/restructure_memories.py:398` (returns 1 on missing directory), `scripts/restructure_memories.py:429` (returns 0 on `--dry-run`), `scripts/restructure_memories.py:454` (returns 0 on completed run); dispatched via `sys.exit(main())` at `scripts/restructure_memories.py:458`
- for validators/gates: not a validation gate (one-time migration utility; exits 1 if `.serena/memories` does not exist from working directory)
- does the output match what the documentation claims? yes, identifies memories in `.serena/memories/`, plans category subdirectories, and simulates file moves without modifying files when `--dry-run` is passed

## Defects — required
- `script-bug` · scripts/restructure_memories.py:409 · Initial files to move count calculation `len(all_files) - len(index_files) - len(top_level_keep)` (prints 83) disagrees with `total_moving` from `plan_moves` (prints 84) when any file overlaps categorization criteria.

## Observations
Contains a static mapping table of over 100 topic prefixes to target directory names across lines 30-282, establishing a classification taxonomy across engineering domains (PR review, CI, skills, git, security, architecture, and governance).

## Context cost
13887 bytes, approximately 3500 tokens.
