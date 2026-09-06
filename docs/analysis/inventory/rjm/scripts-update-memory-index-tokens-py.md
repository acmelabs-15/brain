---
package: rjm
path: scripts/update_memory_index_tokens.py
type: script
bytes: 8126
unit: inv-rjm-265
in_scope_via: docs/workflow-commands.md
aliases: []
memo_inputs:
  - {path: scripts/update_memory_index_tokens.py, sha256: 7fb67cc56917e1fef3076e74f714b60137c1d81223e031fb057cf29820598fea}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# scripts/update_memory_index_tokens.py

## Purpose — required, verbatim
> "Update token counts in memory-index.md." — scripts/update_memory_index_tokens.py:3

## Design intent — required
Maintains accurate token count annotations for memory links recorded in `.serena/memories/memory-index.md`. By extracting markdown links to individual memory documents, computing exact token lengths using `tiktoken`, rewriting inline token count annotations, and collapsing union-merge duplicate rows, it ensures knowledge index metadata remains synchronized with document content. Without it, manual memory additions and git merge commits would cause token estimates to drift, undermining agent prompt budget planning and failing pre-push verification ratchets.

## Phase — required
cross-phase

## Inputs — required
- Memory index file "memory-index.md" resolved relative to repo root — scripts/update_memory_index_tokens.py:216
- Memory files located under "memories" directory — scripts/update_memory_index_tokens.py:215
- CLI option `--check` (validate counts without modifying the file) — scripts/update_memory_index_tokens.py:195

## Outputs — required
- Updated `.serena/memories/memory-index.md` file with synchronized token counts — scripts/update_memory_index_tokens.py:184
- Drift listings and status confirmation reports printed to stdout — scripts/update_memory_index_tokens.py:230, scripts/update_memory_index_tokens.py:236, scripts/update_memory_index_tokens.py:246
- Diagnostic warnings and error messages printed to stderr on missing files, missing `tiktoken`, or merge conflicts — scripts/update_memory_index_tokens.py:209, scripts/update_memory_index_tokens.py:219

## Invokes — required
- script count_memory_tokens — scripts/update_memory_index_tokens.py:26

## Invoked by — required
- script memory_index_token_ratchet — scripts/ci/memory_index_token_ratchet.py:4
- config lefthook.yml — lefthook.yml:350
- doc knowledge-persistence.instructions — src/copilot-cli/instructions/knowledge-persistence.instructions.md:22

## Concepts named — required, verbatim
- `ADR-035` — scripts/update_memory_index_tokens.py:11 — used here
- `get_memory_token_count` — scripts/update_memory_index_tokens.py:26 — used here
- `HAS_TIKTOKEN` — scripts/update_memory_index_tokens.py:27 — defined here
- `LINK_WITH_COUNT` — scripts/update_memory_index_tokens.py:32 — defined here
- `LINK_WITHOUT_COUNT` — scripts/update_memory_index_tokens.py:35 — defined here
- `MEMORY_LINK_TARGET` — scripts/update_memory_index_tokens.py:38 — defined here
- `DuplicateMemoryIndexEntryError` — scripts/update_memory_index_tokens.py:43 — defined here
- `update_line` — scripts/update_memory_index_tokens.py:47 — defined here
- `_memory_link_targets` — scripts/update_memory_index_tokens.py:92 — defined here
- `collapse_duplicate_rows` — scripts/update_memory_index_tokens.py:96 — defined here
- `check_memory_index` — scripts/update_memory_index_tokens.py:127 — defined here
- `update_memory_index` — scripts/update_memory_index_tokens.py:160 — defined here
- `_build_parser` — scripts/update_memory_index_tokens.py:190 — defined here
- `main` — scripts/update_memory_index_tokens.py:205 — defined here

## Structure
- Shebang and module docstring specifying exit codes (lines 1-15)
- Imports and dynamic tiktoken import handling (lines 17-30)
- Link matching regular expression patterns (lines 32-40)
- `DuplicateMemoryIndexEntryError` exception class (lines 43-44)
- `update_line` single-line token annotation updater (lines 47-89)
- `_memory_link_targets` link target extractor (lines 92-93)
- `collapse_duplicate_rows` duplicate row deduplicator (lines 96-124)
- `check_memory_index` read-only drift detector (lines 127-157)
- `update_memory_index` index file updater (lines 160-188)
- `_build_parser` CLI parser builder (lines 190-202)
- `main` CLI execution dispatcher (lines 205-250)
- Entry point execution guard (lines 253-254)

## Scripts — required if type is script or the skill ships scripts
- path: `scripts/update_memory_index_tokens.py`, language: Python, lines: 255
- documented invocation:
  `uv run --frozen python scripts/update_memory_index_tokens.py --check` — lefthook.yml:350
- executed: yes
- actual command run: `uv run --frozen python scripts/update_memory_index_tokens.py --check` (from `sources/rjm`), actual exit code: 0, abridged stdout:
  ```
  memory-index.md token counts are current
  ```
- documented exit codes vs actual exit paths:
  Documented in lines 11-15:
  `0 - Success (counts updated or already current)` — scripts/update_memory_index_tokens.py:12
  `1 - Error (file not found, parse failure)` — scripts/update_memory_index_tokens.py:13
  `2 - Configuration error (tiktoken not installed, counts skipped)` — scripts/update_memory_index_tokens.py:14
  Actual exit paths in code:
  - line 137: `sys.exit(1)` (index_path not found in check mode)
  - line 168: `sys.exit(1)` (index_path not found in update mode)
  - line 211: `return 2` (tiktoken not installed)
  - line 220: `return 1` (memories_dir not found)
  - line 224: `return 1` (index_path not found)
  - line 235: `return 1` (stale token counts detected in check mode)
  - line 237: `return 0` (token counts current in check mode)
  - line 243: `return 1` (DuplicateMemoryIndexEntryError during update)
  - line 250: `return 0` (counts updated or already current)
- for validators/gates: in `--check` mode, functions as a verification gate exiting 1 if any recorded token count differs from computed tokens. Exits 0 on the clean default branch.
- does output match documentation: yes, validates and synchronizes memory token annotations.

## Defects — required
- `missing-path` · scripts/update_memory_index_tokens.py:24: Prepends `.claude/skills/memory/scripts` to `sys.path` to import `count_memory_tokens`, reaching into the excluded memory skill directory hierarchy.
- `other` · scripts/update_memory_index_tokens.py:215: Hardcodes paths to `.serena/memories` and `.serena/memories/memory-index.md` without supporting command-line path configuration.

## Observations
- Performs line processing in two passes: first pass updates existing `(count)` annotations, while second pass appends counts to unannotated memory links.
- Automatically collapses duplicate lines created during git union merges while verifying that conflicting entries raise `DuplicateMemoryIndexEntryError`.
- Degrades gracefully with exit code 2 when `tiktoken` is absent, printing installation instructions.

## Context cost
8126 bytes (~2031 tokens) directly, plus `.claude/skills/memory/scripts/count_memory_tokens.py` (~4KB) for a total execution context of ~12KB (~3000 tokens).
