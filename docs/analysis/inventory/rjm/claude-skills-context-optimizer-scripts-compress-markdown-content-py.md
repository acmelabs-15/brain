---
package: rjm
path: .claude/skills/context-optimizer/scripts/compress_markdown_content.py
type: script
bytes: 17625
unit: inv-rjm-108
in_scope_via: .claude/skills/context-optimizer/SKILL.md
aliases: []
memo_inputs:
  - {path: .claude/skills/context-optimizer/scripts/compress_markdown_content.py, sha256: 6ea240babb32b029c81725c73a1f4a7db221c67d87bde2598c7545c563f42de1}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# .claude/skills/context-optimizer/scripts/compress_markdown_content.py

## Purpose — required, verbatim
> "Compress markdown documentation to minimal tokens using pipe-delimited format (Vercel pattern)." — .claude/skills/context-optimizer/scripts/compress_markdown_content.py:3

## Design intent — required
Reduces token overhead of markdown documentation and context files (such as AGENTS.md or reference material) by transforming verbose natural language, headers, tables, and bullet lists into compact, pipe-delimited notation while preserving code blocks and YAML frontmatter. It provides measurable token reduction metrics via tiktoken to verify context optimization gains across light, medium, and aggressive compression levels.

## Phase — required
none

## Inputs — required
- Command-line arguments: `-i`/`--input` (input markdown file path, required), `-l`/`--level` (`light`, `medium`, `aggressive`, default `medium`), optional `-o`/`--output` (destination file path), optional `-v`/`--verbose` flag ("-i" — .claude/skills/context-optimizer/scripts/compress_markdown_content.py:525; "-l" — .claude/skills/context-optimizer/scripts/compress_markdown_content.py:532; "-o" — .claude/skills/context-optimizer/scripts/compress_markdown_content.py:540; "-v" — .claude/skills/context-optimizer/scripts/compress_markdown_content.py:546)
- Input markdown file on disk (.claude/skills/context-optimizer/scripts/compress_markdown_content.py:565)

## Outputs — required
- Compressed text written to the file specified by `-o`/`--output` (.claude/skills/context-optimizer/scripts/compress_markdown_content.py:591) or JSON serialized `CompressionResult` emitted to stdout containing `success`, `compressed_content`, `metrics` (`original_tokens`, `compressed_tokens`, `reduction_percent`, `original_size`, `compressed_size`, `compression_level`), and `index_file` (.claude/skills/context-optimizer/scripts/compress_markdown_content.py:84-89, 602)

## Invokes — required
- script path_validation — .claude/skills/context-optimizer/scripts/compress_markdown_content.py:35

## Invoked by — required
- skill context-optimizer — .claude/skills/context-optimizer/SKILL.md:2

## Concepts named — required, verbatim
- `pipe-delimited format` — .claude/skills/context-optimizer/scripts/compress_markdown_content.py:3 — defined here
- `Vercel pattern` — .claude/skills/context-optimizer/scripts/compress_markdown_content.py:3 — used here
- `ADR-035 Exit Code Standardization` — .claude/skills/context-optimizer/scripts/compress_markdown_content.py:16 — used here
- `CompressionLevel` — .claude/skills/context-optimizer/scripts/compress_markdown_content.py:64 — defined here
- `CompressionMetrics` — .claude/skills/context-optimizer/scripts/compress_markdown_content.py:72 — defined here
- `CompressionResult` — .claude/skills/context-optimizer/scripts/compress_markdown_content.py:83 — defined here
- `ABBREVIATIONS` — .claude/skills/context-optimizer/scripts/compress_markdown_content.py:92 — defined here
- `count_tokens` — .claude/skills/context-optimizer/scripts/compress_markdown_content.py:114 — defined here
- `preserve_code_blocks` — .claude/skills/context-optimizer/scripts/compress_markdown_content.py:130 — defined here
- `CWE-22` — .claude/skills/context-optimizer/scripts/compress_markdown_content.py:563 — used here

## Structure
none

## Scripts — required if type is script or the skill ships scripts
- path: `.claude/skills/context-optimizer/scripts/compress_markdown_content.py`, language: Python, lines: 609
- documented invocation: "python3 scripts/compress_markdown_content.py -i README.md -l medium" — .claude/skills/context-optimizer/SKILL.md:209
- executed: yes
- actual command run: `uv run --with tiktoken python3 .claude/skills/context-optimizer/scripts/compress_markdown_content.py -i README.md -l medium`
  abridged stdout: `{"success": true, "metrics": {"original_tokens": 6788, "compressed_tokens": 6972, "reduction_percent": -2.7, "original_size": 29308, "compressed_size": 29844, "compression_level": "medium"}, "index_file": null}`
  actual exit code: 0
- documented exit codes: "0: Success - Compression completed" — .claude/skills/context-optimizer/scripts/compress_markdown_content.py:10; "1: Error - Input file not found" — .claude/skills/context-optimizer/scripts/compress_markdown_content.py:11; "2: Error - Invalid compression level" — .claude/skills/context-optimizer/scripts/compress_markdown_content.py:12; "3: Error - Output file write failure" — .claude/skills/context-optimizer/scripts/compress_markdown_content.py:13; "4: Error - tiktoken not installed" — .claude/skills/context-optimizer/scripts/compress_markdown_content.py:14 vs actual exit paths: `sys.exit(0)` (.claude/skills/context-optimizer/scripts/compress_markdown_content.py:604), `sys.exit(1)` (.claude/skills/context-optimizer/scripts/compress_markdown_content.py:556, 568), `sys.exit(3)` (.claude/skills/context-optimizer/scripts/compress_markdown_content.py:598), `sys.exit(4)` (.claude/skills/context-optimizer/scripts/compress_markdown_content.py:516); code 2 is returned by argparse on invalid arguments
- for validators/gates: N/A (compression utility). Can exit non-zero on missing file (1), invalid args (2), write failure (3), missing tiktoken (4).
- does the output match what the documentation claims: yes, JSON output format matches documented structure, though table formatting on README.md slightly expanded token count (-2.7%).

## Defects — required
- `doc-drift` · .claude/skills/context-optimizer/SKILL.md:44 · SKILL.md documents exit codes as `0=success, 1=error, 2=config, 3=external`, whereas the script implements and documents `0: Success`, `1: Error - Input file not found`, `2: Error - Invalid compression level`, `3: Error - Output file write failure`, and `4: Error - tiktoken not installed`.

## Observations
- Lazily imports `tiktoken` inside `count_tokens` to avoid breaking test suite discovery/collection when tiktoken is uninstalled (resolving issue #2524).
- Protects code blocks (triple backticks), YAML frontmatter, inline code backticks, and URLs from word removal corruption.

## Context cost
17,625 bytes (script) + 3,487 bytes (`path_validation.py`) = 21,112 bytes. Approximately 5,300 tokens.
