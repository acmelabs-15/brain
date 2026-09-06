---
package: rjm
path: scripts/traceability/traceability_cache.py
type: script
bytes: 4054
unit: inv-rjm-265
in_scope_via: docs/workflow-commands.md
aliases: []
memo_inputs:
  - {path: scripts/traceability/traceability_cache.py, sha256: a39ea339fe938a368bf4adfe6b666ef68e7c110e44bac6e2e71cac74d0dfd19c}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# scripts/traceability/traceability_cache.py

## Purpose — required, verbatim
> "Caching module for traceability graph operations." — scripts/traceability/traceability_cache.py:1

## Design intent — required
Implements a two-tier (in-memory dictionary and persistent disk-based JSON files under `.agents/.cache/traceability/`) caching layer for parsed specification data. By computing a lightweight metadata hash combining file modification timestamp and byte size, it detects file modifications without expensive content hashing or repeated YAML parsing of unchanged files. Without it, traceability graph generation and validation tools would repeatedly re-parse all specification markdown files on every run, introducing significant I/O and CPU latency as specification suites grow.

## Phase — required
cross-phase

## Inputs — required
- Specification markdown files on the local filesystem
- File modification timestamp (`st_mtime`) and file size (`st_size`) checked in `get_file_hash` — scripts/traceability/traceability_cache.py:42
- Cached JSON documents in `.agents/.cache/traceability/`

## Outputs — required
- Cached specification dictionaries returned by `get_cached_spec` — scripts/traceability/traceability_cache.py:54
- JSON cache documents written to disk by `set_cached_spec` — scripts/traceability/traceability_cache.py:86
- Cache metrics dictionary returned by `get_cache_stats` — scripts/traceability/traceability_cache.py:124

## Invokes — required
none

## Invoked by — required
- script traceability_cache — scripts/traceability/spec_utils.py:13
- script traceability_cache — scripts/traceability/update_spec_references.py:35

## Concepts named — required, verbatim
- `_memory_cache` — scripts/traceability/traceability_cache.py:26 — defined here
- `_CACHE_DIR` — scripts/traceability/traceability_cache.py:28 — defined here
- `initialize_cache` — scripts/traceability/traceability_cache.py:31 — defined here
- `get_cache_key` — scripts/traceability/traceability_cache.py:36 — defined here
- `get_file_hash` — scripts/traceability/traceability_cache.py:42 — defined here
- `get_cached_spec` — scripts/traceability/traceability_cache.py:54 — defined here
- `set_cached_spec` — scripts/traceability/traceability_cache.py:86 — defined here
- `clear_cache` — scripts/traceability/traceability_cache.py:112 — defined here
- `get_cache_stats` — scripts/traceability/traceability_cache.py:124 — defined here

## Structure
- Module docstring describing caching strategy and performance targets (lines 1-17)
- Imports and globals (lines 19-29)
- `initialize_cache` directory initialization (lines 31-34)
- `get_cache_key` path sanitization helper (lines 36-40)
- `get_file_hash` fast mtime and size hash function (lines 42-52)
- `get_cached_spec` two-tier cache retrieval function (lines 54-84)
- `set_cached_spec` memory and disk cache writer (lines 86-110)
- `clear_cache` cache cleanup function (lines 112-122)
- `get_cache_stats` cache inspection utility (lines 124-135)

## Scripts — required if type is script or the skill ships scripts
- path: `scripts/traceability/traceability_cache.py`, language: Python, lines: 135
- documented invocation: none
- executed: yes
- actual command run: `python3 scripts/traceability/traceability_cache.py` (from `sources/rjm`), actual exit code: 0, abridged stdout: (empty)
- documented exit codes vs actual exit paths:
  Documented exit codes: none (utility module).
  Actual exit paths in code: none (executes module-level declarations and exits 0).
- for validators/gates: not a validator or gate.
- does output match documentation: yes, functions as a persistent and in-memory caching module.

## Defects — required
- `other` · scripts/traceability/traceability_cache.py:38: `get_cache_key` removes `Path.cwd()` from the file path string, causing cache keys to vary if scripts are executed from different working directories.
- `other` · scripts/traceability/traceability_cache.py:28: `_CACHE_DIR` hardcodes traversal three directories up from the file (`parent.parent.parent`), which assumes a fixed directory hierarchy rather than discovering repository root.

## Observations
- Uses `f"{int(stat.st_mtime * 10_000_000)}_{stat.st_size}"` for fast change detection, avoiding full content hashing while preserving fractional-second mtime changes.
- Disk cache operations silently swallow `OSError` and `json.JSONDecodeError` to prevent caching issues from breaking caller operations.

## Context cost
4054 bytes (~1014 tokens) directly, with no external local dependencies.
