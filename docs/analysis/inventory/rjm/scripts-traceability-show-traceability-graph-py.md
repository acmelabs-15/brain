---
package: rjm
path: scripts/traceability/show_traceability_graph.py
type: script
bytes: 10271
unit: inv-rjm-265
in_scope_via: docs/workflow-commands.md
aliases: []
memo_inputs:
  - {path: scripts/traceability/show_traceability_graph.py, sha256: e9b88963e496c97a549a3156d97c00b7aed0f63b8317ba49cb10edf1ccc3b3cb}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# scripts/traceability/show_traceability_graph.py

## Purpose — required, verbatim
> "Display the traceability graph in various formats." — scripts/traceability/show_traceability_graph.py:2

## Design intent — required
Visualizes the specification traceability graph connecting requirements (`REQ-*`), design documents (`DESIGN-*`), and implementation tasks (`TASK-*`). By parsing specification frontmatter and constructing forward and backward reference maps, it enables developers and diagnostic agents to audit traceability integrity, detect disconnected or orphaned specifications, and export graph structures in text (ASCII tree), Mermaid diagram, or JSON formats. Without it, verifying requirement-to-task coverage and identifying broken links would require manual inspection across individual specification files in `.agents/specs/`.

## Phase — required
cross-phase

## Inputs — required
- CLI option `--specs-path` (default `".agents/specs"`) — scripts/traceability/show_traceability_graph.py:266
- CLI option `--format` (choices `["text", "mermaid", "json"]`, default `"text"`) — scripts/traceability/show_traceability_graph.py:268
- CLI option `--root-id` (default `None`, start graph from specific spec ID) — scripts/traceability/show_traceability_graph.py:273
- CLI option `--depth` (default `0`, max traversal depth) — scripts/traceability/show_traceability_graph.py:274
- CLI option `--dry-run` (validate parameters only) — scripts/traceability/show_traceability_graph.py:275
- CLI option `--show-orphans` (include orphaned specs) — scripts/traceability/show_traceability_graph.py:276
- CLI option `--no-cache` (bypass cache) — scripts/traceability/show_traceability_graph.py:277
- Specification files in `.agents/specs/` loaded via `load_all_specs`

## Outputs — required
- Formatted graph text (ASCII tree, Mermaid.js diagram, or JSON) printed to stdout — scripts/traceability/show_traceability_graph.py:309
- Error messages to stderr on invalid spec ID or missing spec — scripts/traceability/show_traceability_graph.py:282, scripts/traceability/show_traceability_graph.py:297

## Invokes — required
- script spec_utils — scripts/traceability/show_traceability_graph.py:26

## Invoked by — required
- agent retrospective — .claude/agents/retrospective.md:499
- reference diagnosis-and-actions — .claude/skills/retrospective/references/diagnosis-and-actions.md:31

## Concepts named — required, verbatim
- `ADR-035` — scripts/traceability/show_traceability_graph.py:11 — used here
- `is_valid_spec_id` — scripts/traceability/show_traceability_graph.py:27 — used here
- `load_all_specs` — scripts/traceability/show_traceability_graph.py:28 — used here
- `validate_specs_path` — scripts/traceability/show_traceability_graph.py:29 — used here
- `build_graph` — scripts/traceability/show_traceability_graph.py:33 — defined here
- `get_connected_ids` — scripts/traceability/show_traceability_graph.py:67 — defined here
- `format_text_graph` — scripts/traceability/show_traceability_graph.py:97 — defined here
- `format_mermaid_graph` — scripts/traceability/show_traceability_graph.py:160 — defined here
- `format_json_graph` — scripts/traceability/show_traceability_graph.py:225 — defined here
- `_get_included_nodes` — scripts/traceability/show_traceability_graph.py:251 — defined here
- `main` — scripts/traceability/show_traceability_graph.py:264 — defined here

## Structure
- Module docstring (lines 1-12)
- Imports and path configuration (lines 14-30)
- `build_graph` graph construction function (lines 33-64)
- `get_connected_ids` directional traversal function (lines 67-94)
- `format_text_graph` ASCII tree formatter (lines 97-157)
- `format_mermaid_graph` Mermaid.js diagram generator (lines 160-222)
- `format_json_graph` JSON serialization formatter (lines 225-248)
- `_get_included_nodes` scope filtering helper (lines 251-261)
- `main` CLI parser and format dispatcher (lines 264-310)
- Entry point execution guard (lines 313-314)

## Scripts — required if type is script or the skill ships scripts
- path: `scripts/traceability/show_traceability_graph.py`, language: Python, lines: 315
- documented invocation:
  `python3 scripts/traceability/show_traceability_graph.py --show-orphans` — .claude/skills/retrospective/references/diagnosis-and-actions.md:31
- executed: yes
- actual command run: `python3 scripts/traceability/show_traceability_graph.py --show-orphans` (from `sources/rjm`), actual exit code: 0, abridged stdout:
  ```
  Traceability Graph
  ==================

  Requirements:
    [x] REQ-001 (requirement)
      [x] DESIGN-001 (design)
        [x] REQ-002 (requirement)
        [x] TASK-001 (task)
          [x] TASK-002 (task)
          [x] TASK-003 (task)
  ...
  Orphaned Designs:
    [x] DESIGN-a02 (design)

  Orphaned Tasks:
    [ ] TASK-009 (task)
    [x] TASK-a02 (task)
  ```
- documented exit codes vs actual exit paths:
  Documented in lines 7-10:
  `0 - Success` — scripts/traceability/show_traceability_graph.py:8
  `1 - Error (invalid path, spec not found, etc.)` — scripts/traceability/show_traceability_graph.py:9
  Actual exit paths in code:
  - line 283: `return 1` (invalid root-id format)
  - line 288: `return 1` (validate_specs_path raises SystemExit)
  - line 292: `return 0` (dry-run success)
  - line 298: `return 1` (root-id not found in loaded specs)
  - line 310: `return 0` (successful execution)
- for validators/gates: not a blocking CI gate, but exits non-zero (1) on invalid spec ID or missing spec. Exits 0 on the clean default branch.
- does output match documentation: yes, renders traceability graph and correctly reports orphaned specifications.

## Defects — required
- `other` · scripts/traceability/show_traceability_graph.py:129: `format_text_graph` returns an error string (`Error: Spec '{root_id}' not found`) instead of raising an error or returning a distinct error indicator, although `main` line 296 catches missing root IDs before calling the function.

## Observations
- Integrates with `traceability_cache` via `load_all_specs(..., use_cache=not args.no_cache)` to optimize graph reconstruction speed across repeated runs.
- Mermaid output includes status-based styling classes (`req`, `design`, `task`, `complete`) and different node shapes based on spec type.

## Context cost
10271 bytes (~2568 tokens) directly, plus `spec_utils.py` (6047 bytes) and `traceability_cache.py` (4054 bytes) for a total execution context of ~20372 bytes (~5100 tokens).
