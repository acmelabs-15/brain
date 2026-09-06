---
package: rjm
path: scripts/traceability/spec_utils.py
type: script
bytes: 6047
unit: inv-rjm-265
in_scope_via: docs/workflow-commands.md
aliases: []
memo_inputs:
  - {path: scripts/traceability/spec_utils.py, sha256: 4df2d5c43d281d37e689de849420f8003706ec909aceb87fc3a594595908db70}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# scripts/traceability/spec_utils.py

## Purpose — required, verbatim
> "Shared utilities for traceability spec operations." — scripts/traceability/spec_utils.py:1

## Design intent — required
Centralizes core data parsing and filesystem discovery routines for specification documents across the repository. It enforces specification ID naming conventions via regular expressions, resolves spec types (`REQ`, `DESIGN`, `TASK`) to their standard directory locations, extracts and parses YAML frontmatter with caching integration, and protects against path traversal when resolving specification directories. Without it, multiple traceability scripts would duplicate brittle regex patterns, frontmatter parsing routines, and path resolution logic, leading to maintenance divergence and increased risk of directory traversal bugs.

## Phase — required
cross-phase

## Inputs — required
- Specification markdown files in `.agents/specs/` directories (`requirements/`, `design/`, `tasks/`)
- Specification IDs conforming to `SPEC_ID_PATTERN` — scripts/traceability/spec_utils.py:19
- Specification directory paths passed to `validate_specs_path` — scripts/traceability/spec_utils.py:195

## Outputs — required
- Parsed YAML frontmatter dictionary structures (`type`, `id`, `status`, `related`, `filePath`) returned by `parse_yaml_frontmatter` — scripts/traceability/spec_utils.py:54
- Frontmatter/body dictionaries returned by `parse_frontmatter_with_content` — scripts/traceability/spec_utils.py:117
- Grouped specification dictionaries returned by `load_all_specs` — scripts/traceability/spec_utils.py:158
- Resolved and validated Path objects returned by `validate_specs_path` — scripts/traceability/spec_utils.py:195

## Invokes — required
- script traceability_cache — scripts/traceability/spec_utils.py:13
- script repo — scripts/traceability/spec_utils.py:190

## Invoked by — required
- script spec_utils — scripts/traceability/show_traceability_graph.py:26
- script spec_utils — scripts/traceability/update_spec_references.py:29
- script spec_utils — scripts/traceability/resolve_orphaned_specs.py:31
- script spec_utils — scripts/traceability/rename_spec_id.py:28

## Concepts named — required, verbatim
- `get_cached_spec` — scripts/traceability/spec_utils.py:14 — used here
- `get_file_hash` — scripts/traceability/spec_utils.py:15 — used here
- `set_cached_spec` — scripts/traceability/spec_utils.py:16 — used here
- `SPEC_ID_PATTERN` — scripts/traceability/spec_utils.py:19 — defined here
- `TYPE_TO_SUBDIR` — scripts/traceability/spec_utils.py:21 — defined here
- `is_valid_spec_id` — scripts/traceability/spec_utils.py:28 — defined here
- `get_spec_type` — scripts/traceability/spec_utils.py:33 — defined here
- `get_spec_subdir` — scripts/traceability/spec_utils.py:38 — defined here
- `find_spec_file` — scripts/traceability/spec_utils.py:43 — defined here
- `parse_yaml_frontmatter` — scripts/traceability/spec_utils.py:54 — defined here
- `parse_frontmatter_with_content` — scripts/traceability/spec_utils.py:117 — defined here
- `load_all_specs` — scripts/traceability/spec_utils.py:158 — defined here
- `get_repo_root` — scripts/traceability/spec_utils.py:188 — defined here
- `validate_specs_path` — scripts/traceability/spec_utils.py:195 — defined here

## Structure
- Module docstring (lines 1-5)
- Imports (lines 7-17)
- Format pattern and subdirectory mappings (lines 19-25)
- `is_valid_spec_id` validation helper (lines 28-30)
- `get_spec_type` prefix extractor (lines 33-35)
- `get_spec_subdir` directory resolver (lines 38-40)
- `find_spec_file` path resolver (lines 43-51)
- `parse_yaml_frontmatter` caching frontmatter parser (lines 54-114)
- `parse_frontmatter_with_content` split content parser (lines 117-155)
- `load_all_specs` collection loader (lines 158-185)
- `get_repo_root` repository root finder (lines 188-192)
- `validate_specs_path` path traversal protection and resolver (lines 195-212)

## Scripts — required if type is script or the skill ships scripts
- path: `scripts/traceability/spec_utils.py`, language: Python, lines: 213
- documented invocation: none
- executed: yes
- actual command run: `PYTHONPATH=. python3 scripts/traceability/spec_utils.py` (from `sources/rjm`), actual exit code: 0, abridged stdout: (empty)
- documented exit codes vs actual exit paths:
  Documented exit codes: none (utility module).
  Actual exit paths in code:
  - line 202: `raise SystemExit(f"Specs path not found: {specs_path}")`
  - line 208: `raise SystemExit(f"Path traversal attempt detected: '{specs_path}' is outside the repository root.")`
- for validators/gates: `validate_specs_path` acts as a path security guard raising SystemExit when a target path is missing or traverses outside the repository root.
- does output match documentation: yes, functions as a shared library module for specification utilities.

## Defects — required
- `script-bug` · scripts/traceability/spec_utils.py:48: `find_spec_file` constructs paths as `base_path / subdir / f"{spec_id}.md"`, failing to locate specifications in `.agents/specs/` where filenames contain slugs (e.g. `DESIGN-001-pr-comment-processing.md`), returning `None` on all existing repository specifications.
- `missing-path` · scripts/traceability/spec_utils.py:13: Direct execution via `python3 scripts/traceability/spec_utils.py` fails with `ModuleNotFoundError: No module named 'scripts'` due to missing `sys.path` configuration.

## Observations
- Integrates transparently with `traceability_cache` by hashing file modification time and size before reading, caching parsed dictionaries in memory and on disk.
- YAML parsing is implemented with regular expressions rather than an external YAML parser dependency, restricting frontmatter to simple key-value and list structures.

## Context cost
6047 bytes (~1512 tokens) directly, plus `traceability_cache.py` (4054 bytes) and dynamically imported `repo.py` (~4KB) for a total execution context of ~14KB (~3500 tokens).
