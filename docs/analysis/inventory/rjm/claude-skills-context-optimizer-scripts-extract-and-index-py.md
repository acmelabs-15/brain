---
package: rjm
path: .claude/skills/context-optimizer/scripts/extract_and_index.py
type: script
bytes: 10927
unit: inv-rjm-108
in_scope_via: .claude/skills/context-optimizer/SKILL.md
aliases: []
memo_inputs:
  - {path: .claude/skills/context-optimizer/scripts/extract_and_index.py, sha256: 6d3e638453dc07f7586b49315c8539b2d9eaa0aad91b14e53cac345e8a0fcde4}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# .claude/skills/context-optimizer/scripts/extract_and_index.py

## Purpose — required, verbatim
> "Extract markdown sections into separate files and generate a pipe-delimited index." — .claude/skills/context-optimizer/scripts/extract_and_index.py:2

## Design intent — required
Splits large, monolithic markdown documents by heading (H1 and H2) into individual detail files and generates a compact, pipe-delimited summary index. Designed for progressive disclosure architectures where an agent reads an ultra-lightweight index file (e.g. `@AGENTS-INDEX.md`) into context and only fetches specific detail files when required, drastically minimizing always-on token consumption.

## Phase — required
none

## Inputs — required
- Command-line arguments: `-i`/`--input` (input markdown file, required), `-d`/`--detail-dir` (directory for detail files, required), optional `-r`/`--detail-ref` (relative path for references in index), optional `-o`/`--output` (output index path), optional `-v`/`--verbose` flag ("-i" — .claude/skills/context-optimizer/scripts/extract_and_index.py:307; "-d" — .claude/skills/context-optimizer/scripts/extract_and_index.py:314; "-r" — .claude/skills/context-optimizer/scripts/extract_and_index.py:322; "-o" — .claude/skills/context-optimizer/scripts/extract_and_index.py:330; "-v" — .claude/skills/context-optimizer/scripts/extract_and_index.py:337)
- Input markdown document on disk (.claude/skills/context-optimizer/scripts/extract_and_index.py:353)

## Outputs — required
- Individual section markdown files written into `--detail-dir` (.claude/skills/context-optimizer/scripts/extract_and_index.py:248)
- Compact pipe-delimited index file written to `--output` (.claude/skills/context-optimizer/scripts/extract_and_index.py:366) or JSON `ExtractionResult` printed to stdout containing `success`, `index_content`, `metrics` (`original_tokens`, `index_tokens`, `reduction_percent`, `sections_extracted`, `detail_files_written`), and `detail_dir` (.claude/skills/context-optimizer/scripts/extract_and_index.py:68-74, 383)

## Invokes — required
- script path_validation — .claude/skills/context-optimizer/scripts/extract_and_index.py:31

## Invoked by — required
- skill context-optimizer — .claude/skills/context-optimizer/SKILL.md:2

## Concepts named — required, verbatim
- `Vercel extract-and-index pattern` — .claude/skills/context-optimizer/scripts/extract_and_index.py:4 — defined here
- `ADR-035 Exit Code Standardization` — .claude/skills/context-optimizer/scripts/extract_and_index.py:15 — used here
- `Section` — .claude/skills/context-optimizer/scripts/extract_and_index.py:46 — defined here
- `ExtractionMetrics` — .claude/skills/context-optimizer/scripts/extract_and_index.py:56 — defined here
- `ExtractionResult` — .claude/skills/context-optimizer/scripts/extract_and_index.py:67 — defined here
- `count_tokens` — .claude/skills/context-optimizer/scripts/extract_and_index.py:76 — defined here
- `slugify` — .claude/skills/context-optimizer/scripts/extract_and_index.py:82 — defined here
- `parse_sections` — .claude/skills/context-optimizer/scripts/extract_and_index.py:98 — defined here
- `summarize_section` — .claude/skills/context-optimizer/scripts/extract_and_index.py:151 — defined here
- `build_index` — .claude/skills/context-optimizer/scripts/extract_and_index.py:186 — defined here
- `write_detail_files` — .claude/skills/context-optimizer/scripts/extract_and_index.py:214 — defined here
- `validate_path_within_repo` — .claude/skills/context-optimizer/scripts/extract_and_index.py:232 — used here

## Structure
none

## Scripts — required if type is script or the skill ships scripts
- path: `.claude/skills/context-optimizer/scripts/extract_and_index.py`, language: Python, lines: 390
- documented invocation: "python3 scripts/extract_and_index.py -i AGENTS.md -d .agents-details" — .claude/skills/context-optimizer/SKILL.md:259
- executed: yes
- actual command run: `uv run --with tiktoken python3 .claude/skills/context-optimizer/scripts/extract_and_index.py -i AGENTS.md -d .test_details_tmp && rm -rf .test_details_tmp`
  abridged stdout: `{"success": true, "index_content": "[AGENTS]\n|(see detail file) (see: .test_details_tmp/agents.md)...", "metrics": {"original_tokens": 867, "index_tokens": 329, "reduction_percent": 62.1, "sections_extracted": 9, "detail_files_written": 9}, "detail_dir": ".test_details_tmp"}`
  actual exit code: 0
- documented exit codes: "0: Success" — .claude/skills/context-optimizer/scripts/extract_and_index.py:9; "1: Error - Input file not found or read failure" — .claude/skills/context-optimizer/scripts/extract_and_index.py:10; "2: Error - Invalid arguments" — .claude/skills/context-optimizer/scripts/extract_and_index.py:11; "3: Error - Output write failure" — .claude/skills/context-optimizer/scripts/extract_and_index.py:12; "4: Error - tiktoken not installed" — .claude/skills/context-optimizer/scripts/extract_and_index.py:13 vs actual exit paths: `sys.exit(0)` (.claude/skills/context-optimizer/scripts/extract_and_index.py:385), `sys.exit(1)` (.claude/skills/context-optimizer/scripts/extract_and_index.py:347, 356), `sys.exit(3)` (.claude/skills/context-optimizer/scripts/extract_and_index.py:377, 379), `sys.exit(4)` (.claude/skills/context-optimizer/scripts/extract_and_index.py:42); argparse exits with 2 on missing/invalid arguments
- for validators/gates: N/A (extraction utility). Can exit non-zero on file not found (1), bad args (2), write error (3), missing dependency (4).
- does the output match what the documentation claims: yes, achieved 62.1% token reduction on AGENTS.md matching the 60-80% claimed range.

## Defects — required
- `doc-drift` · .claude/skills/context-optimizer/SKILL.md:46 · SKILL.md documents exit codes as `0=success, 1=error, 2=config, 3=external`, whereas the script implements and documents `0: Success`, `1: Error - Input file not found or read failure`, `2: Error - Invalid arguments`, `3: Error - Output write failure`, and `4: Error - tiktoken not installed`.
- `script-bug` · .claude/skills/context-optimizer/scripts/extract_and_index.py:361 · `extract_and_index` is invoked without a `try/except` block in `main()`, causing detail-directory write failures or `PermissionError` traversal violations to crash with an unhandled traceback and Python exit code 1 instead of the documented exit code 3.
- `script-bug` · .claude/skills/context-optimizer/scripts/extract_and_index.py:34 · `tiktoken` is imported at the module level with an immediate `sys.exit(4)` in `except ImportError`, which risks breaking pytest test discovery when tiktoken is not installed (the exact bug fixed in sibling script `compress_markdown_content.py` issue #2524).

## Observations
- Formats index lines with `[Section]` followed by `|summary (see: detail_path)`, designed to integrate directly with Claude Code `@import` syntax.
- Sanitizes headings into filesystem-safe filenames with slug collision avoidance (`seen_slugs` counter).

## Context cost
10,927 bytes (script) + 3,487 bytes (`path_validation.py`) = 14,414 bytes. Approximately 3,600 tokens.
