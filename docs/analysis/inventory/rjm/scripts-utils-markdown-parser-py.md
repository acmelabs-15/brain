---
package: rjm
path: scripts/utils/markdown_parser.py
type: script
bytes: 46123
unit: inv-rjm-267
in_scope_via: scripts/validation/check_skill_md_portability.py
aliases: []
memo_inputs:
  - {path: scripts/utils/markdown_parser.py, sha256: 5aa5af0430c9e30e1cb4683113bce9a0f6e6d8e4fb59322f908efea72dce6f44}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# scripts/utils/markdown_parser.py

## Purpose — required, verbatim
> "AST-based Markdown parsing utilities for session validation." — scripts/utils/markdown_parser.py:1

## Design intent — required
Provides robust, AST-based CommonMark parsing utilities (`markdown-it-py`) for repository validation, CI gates, and lifecycle checking scripts, replacing fragile line- and regex-based markdown parsers that suffer from edge cases such as comments hiding declarations, code blocks containing decoy markup, or deeply nested structures. Specifically, it implements fail-closed AST extraction for tables, checklist items, sections, and lookup links, while providing specialized line-blanking functions (`blank_code_block_lines` and `blank_non_prose_block_lines`). These utilities ensure that validation tools (such as ADR lifecycle checkers, skill portability validators, and shipped route checkers) do not mistake example code, HTML comments, or multiline inline comments for real declarations, preventing security/governance bypasses (e.g. status forgery) and guarding against recursion-based denial of service via explicit nesting depth checks (`_raise_if_nesting_truncated`). Without it, each validation tool would either hand-roll ad-hoc regex scanners prone to precedence defects, catastrophic backtracking, and evasion, or incorrectly parse markdown constructs.

## Phase — required
cross-phase

## Inputs — required
- Raw Markdown text strings (`markdown: str`) passed to extraction and blanking functions — scripts/utils/markdown_parser.py:225, 244, 311, 838, 864, 950, 993, 1055
- Regex pattern strings (`pattern: str`) for table checklist matching — scripts/utils/markdown_parser.py:950
- Heading title strings (`heading: str`) and heading levels (`level: int = 2`) for section extraction — scripts/utils/markdown_parser.py:1055

## Outputs — required
- Masked Markdown strings with code blocks or non-prose/comment blocks replaced by blank lines (preserving source line numbers) — scripts/utils/markdown_parser.py:221, 303
- Parsed table data models (`list[ParsedTable]`) with headers and rows of cells — scripts/utils/markdown_parser.py:311, 318
- Extracted Markdown lookup link reference lists (`list[str]`) — scripts/utils/markdown_parser.py:838, 861
- Iterator yielding `TableCell` objects with inline `CellSegment` runs and 1-based source lines — scripts/utils/markdown_parser.py:864, 905
- `ChecklistMatch` result objects with fields `complete` and `evidence` — scripts/utils/markdown_parser.py:24-25
- Parsed section lists (`list[Section]`) with heading levels, titles, and body content — scripts/utils/markdown_parser.py:993, 1000
- Section body string (`str | None`) matching a requested heading — scripts/utils/markdown_parser.py:1055, 1064
- Exception: raises `MarkdownNestingError` when nesting depth exceeds `maxNesting` limit — scripts/utils/markdown_parser.py:83, 170

## Invokes — required
none

## Invoked by — required
- script check_skill_md_portability.py — scripts/validation/check_skill_md_portability.py:775
- script check_adr_lifecycle.py — scripts/validation/check_adr_lifecycle.py:572
- script check_shipped_skill_routes.py — scripts/validation/check_shipped_skill_routes.py:56
- script markdown_parser — scripts/validate_memory_tier.py:29

## Concepts named — required, verbatim
- `AST-based Markdown parsing` — scripts/utils/markdown_parser.py:1 — defined here
- `session validation` — scripts/utils/markdown_parser.py:1 — used here
- `markdown-it-py` — scripts/utils/markdown_parser.py:4 — used here
- `ADR-035` — scripts/utils/markdown_parser.py:7 — used here
- `ChecklistMatch` — scripts/utils/markdown_parser.py:21 — defined here
- `TableRow` — scripts/utils/markdown_parser.py:29 — defined here
- `ParsedTable` — scripts/utils/markdown_parser.py:36 — defined here
- `CellSegment` — scripts/utils/markdown_parser.py:44 — defined here
- `TableCell` — scripts/utils/markdown_parser.py:59 — defined here
- `Section` — scripts/utils/markdown_parser.py:72 — defined here
- `MarkdownNestingError` — scripts/utils/markdown_parser.py:83 — defined here
- `maxNesting` — scripts/utils/markdown_parser.py:84 — used here
- `vendor-portability` — scripts/utils/markdown_parser.py:90 — used here
- `fail-closed` — scripts/utils/markdown_parser.py:92 — used here
- `CommonMark` — scripts/utils/markdown_parser.py:100 — used here
- `check_skill_md_portability.py` — scripts/utils/markdown_parser.py:122 — used here
- `check_adr_lifecycle.py` — scripts/utils/markdown_parser.py:124 — used here
- `blank_code_block_lines` — scripts/utils/markdown_parser.py:225 — defined here
- `blank_non_prose_block_lines` — scripts/utils/markdown_parser.py:244 — defined here
- `parse_tables` — scripts/utils/markdown_parser.py:311 — defined here
- `CWE-400` — scripts/utils/markdown_parser.py:470 — used here
- `CWE-20` — scripts/utils/markdown_parser.py:697 — used here
- `extract_lookup_references` — scripts/utils/markdown_parser.py:838 — defined here
- `iter_table_cell_text` — scripts/utils/markdown_parser.py:864 — defined here
- `find_checklist_item` — scripts/utils/markdown_parser.py:950 — defined here
- `parse_sections` — scripts/utils/markdown_parser.py:993 — defined here
- `find_section` — scripts/utils/markdown_parser.py:1055 — defined here

## Structure
- module docstring — scripts/utils/markdown_parser.py:1-8
- dataclasses (ChecklistMatch, TableRow, ParsedTable, CellSegment, TableCell, Section) — scripts/utils/markdown_parser.py:20-78
- exception MarkdownNestingError — scripts/utils/markdown_parser.py:83-96
- parser factory and nesting truncation guards — scripts/utils/markdown_parser.py:97-174
- line blanking helpers (blank_code_block_lines, blank_non_prose_block_lines) — scripts/utils/markdown_parser.py:176-303
- table parsing functions — scripts/utils/markdown_parser.py:306-390
- character offset, backtick scanning, and delimiter helpers — scripts/utils/markdown_parser.py:392-835
- lookup reference extraction and cell iteration — scripts/utils/markdown_parser.py:838-908
- table extraction and checklist matching — scripts/utils/markdown_parser.py:910-990
- section parsing and lookup — scripts/utils/markdown_parser.py:993-1071

## Scripts — required if type is script or the skill ships scripts
- path: `scripts/utils/markdown_parser.py`, language: Python, lines: 1072
- documented invocation: none (docstring states "Exit codes follow ADR-035 when used as a standalone script." — scripts/utils/markdown_parser.py:7, but no CLI command or arguments are documented or implemented)
- executed: yes
- actual command: `python3 sources/rjm/scripts/utils/markdown_parser.py` (fails with `ModuleNotFoundError: No module named 'markdown_it'`, exit code 1) and `uv run python scripts/utils/markdown_parser.py` in `sources/rjm` (exits 0 with empty stdout, as the module executes top-level definitions without a CLI entrypoint)
- actual exit code: 1 (bare python3); 0 (uv run)
- documented exit codes: "Exit codes follow ADR-035 when used as a standalone script." — scripts/utils/markdown_parser.py:7 vs. actual exit paths in code: none (`exit`, `sys.exit`, and `if __name__ == "__main__":` are completely absent)
- for validators/gates: not a standalone gate script; utility module consumed by validation gates. Exits 0 under uv run environment.
- does the output match what the documentation claims? no (no standalone CLI execution behavior exists despite the docstring claim)

## Defects — required
- `doc-drift` · scripts/utils/markdown_parser.py:7 · Docstring claims "Exit codes follow ADR-035 when used as a standalone script." — scripts/utils/markdown_parser.py:7, but the file provides no standalone CLI entrypoint, argument parsing, or `__main__` block.
- `doc-drift` · scripts/utils/markdown_parser.py:16 · Requires third-party dependency `markdown-it-py`, which causes bare `python3` invocations to fail with `ModuleNotFoundError` on environments lacking locked virtual environment resolution (as warned in `src/copilot-cli/instructions/ci-scripts.instructions.md:43`).

## Observations
- Extensive documentation and regression testing of CommonMark edge cases across 21 review rounds on PR #5230 and PR #5323 (e.g. distinguishing inline vs block HTML comments, backslash-escaped backticks, quadratic scanning CWE-400, HTML entity decoding CWE-20).
- Robust fail-closed security posture against parser recursion limits: `_raise_if_nesting_truncated` verifies structural changes against a double-limit parse to avoid unblanked code leakage while preventing DoS stack exhaustion.
- Comprehensive unit test suite exists in `tests/test_markdown_parser.py` (83 test cases, all passing).

## Context cost
46123 bytes (~11530 tokens). Invokes: none (0 bytes). Total context cost: 46123 bytes (~11530 tokens).
