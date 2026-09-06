---
package: rjm
path: .claude/skills/fix-markdown-fences/scripts/fix_fences.py
type: script
bytes: 56770
unit: inv-rjm-119
in_scope_via: .claude/skills/fix-markdown-fences/SKILL.md
aliases: []
memo_inputs:
  - {path: .claude/skills/fix-markdown-fences/scripts/fix_fences.py, sha256: b365578728f64561b2606d9bcd84de0cce752e3ec9f72da977d9895beb4ad2e2}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# .claude/skills/fix-markdown-fences/scripts/fix_fences.py

## Purpose — required, verbatim
> "Detect and repair malformed markdown code fence closings." — .claude/skills/fix-markdown-fences/scripts/fix_fences.py:16

## Design intent — required
Automates detection and repair of broken markdown code block fence closings to prevent prose from inadvertently bleeding into code blocks. Manually scanning or simulating fence parsing in-context is token-expensive and error-prone for LLM agents, particularly when handling complex document constructs such as nested fences of varying backtick or tilde lengths, list container indents, multi-line link reference definitions, and diverse line endings. The script implements a deterministic CommonMark-aligned finite state machine that identifies malformed closing fences (fences carrying unintended info strings) and unclosed blocks without damaging container indentation, line terminators (`\r\n`, `\r`, `\n`), or UTF-8 BOM markers. It provides non-destructive reporting by default and idempotent in-place repairs when invoked with `--write`. Without this script, documentation builds and agents would suffer from corrupt rendered markdown, or rely on naive regex repairs that mangle legitimate nested fence examples inside wider container blocks.

## Phase — required
cross-phase (utility script categorized under Documentation in docs/skill-reference.md:176; used across documentation and validation workflows)

## Inputs — required
- Command-line arguments:
  - `paths`: "Files or directories to scan (default: current directory)" — .claude/skills/fix-markdown-fences/scripts/fix_fences.py:1162
  - `--write`: "Repair the defects in place (default: report only, exit 1 on findings)" — .claude/skills/fix-markdown-fences/scripts/fix_fences.py:1167
  - `--json`: "Emit machine-readable output" — .claude/skills/fix-markdown-fences/scripts/fix_fences.py:1169
  - `--pattern`: "Glob for directory scans" — .claude/skills/fix-markdown-fences/scripts/fix_fences.py:1170
- Target markdown files on disk:
  - Discovered via `iter_markdown_files` (.claude/skills/fix-markdown-fences/scripts/fix_fences.py:1115), read as raw bytes, and decoded as `utf-8-sig` (.claude/skills/fix-markdown-fences/scripts/fix_fences.py:1184)

## Outputs — required
- Diagnostic human-readable report on stdout (.claude/skills/fix-markdown-fences/scripts/fix_fences.py:1146):
  `{name}:{defect.line}: {defect.kind}: {defect.text}`
- Summary counts on stdout:
  - "No fence defects found" (.claude/skills/fix-markdown-fences/scripts/fix_fences.py:1142) when clean
  - "{total} defect(s) in {len(results)} file(s)" (.claude/skills/fix-markdown-fences/scripts/fix_fences.py:1148)
  - "Repaired {len(wrote)} file(s)" (.claude/skills/fix-markdown-fences/scripts/fix_fences.py:1150)
- Machine-readable JSON output on stdout when `--json` is supplied (.claude/skills/fix-markdown-fences/scripts/fix_fences.py:1134-1138) with keys `files`, `defect_count`, and `repaired`
- In-place file repairs when `--write` is specified:
  - "file_path.write_bytes(bom + repair_markdown_fences(content).encode(\"utf-8\"))" — .claude/skills/fix-markdown-fences/scripts/fix_fences.py:1205
- Error messages on stderr:
  - "Error: path does not exist:" (.claude/skills/fix-markdown-fences/scripts/fix_fences.py:1176)
  - "Error: cannot read" (.claude/skills/fix-markdown-fences/scripts/fix_fences.py:1186)
  - "Error: cannot write" (.claude/skills/fix-markdown-fences/scripts/fix_fences.py:1207)

## Invokes — required
none

## Invoked by — required
- skill fix-markdown-fences — .claude/skills/fix-markdown-fences/SKILL.md:59
- skill fix-markdown-fences — .claude/skills/fix-markdown-fences/SKILL.md:74
- skill fix-markdown-fences — .claude/skills/fix-markdown-fences/SKILL.md:88
- skill fix-markdown-fences — .claude/skills/fix-markdown-fences/SKILL.md:89
- skill fix-markdown-fences — .claude/skills/fix-markdown-fences/SKILL.md:90
- skill fix-markdown-fences — .claude/skills/fix-markdown-fences/SKILL.md:218

## Concepts named — required, verbatim
- `ADR-035` — .claude/skills/fix-markdown-fences/scripts/fix_fences.py:56 — used here
- `ADR-047` — .claude/skills/fix-markdown-fences/scripts/fix_fences.py:12 — used here
- `CommonMark` — .claude/skills/fix-markdown-fences/scripts/fix_fences.py:33 — used here
- `prose-self-check` — .claude/skills/fix-markdown-fences/scripts/fix_fences.py:9 — used here
- `SKILL.md` — .claude/skills/fix-markdown-fences/scripts/fix_fences.py:35 — used here
- `malformed_closing` — .claude/skills/fix-markdown-fences/scripts/fix_fences.py:868 — defined here
- `unclosed_block` — .claude/skills/fix-markdown-fences/scripts/fix_fences.py:869 — defined here
- `Defect` — .claude/skills/fix-markdown-fences/scripts/fix_fences.py:873 — defined here
- `_OpenFence` — .claude/skills/fix-markdown-fences/scripts/fix_fences.py:882 — defined here
- `_Line` — .claude/skills/fix-markdown-fences/scripts/fix_fences.py:987 — defined here
- `_ListContainers` — .claude/skills/fix-markdown-fences/scripts/fix_fences.py:338 — defined here
- `_Definition` — .claude/skills/fix-markdown-fences/scripts/fix_fences.py:254 — defined here
- `find_fence_defects` — .claude/skills/fix-markdown-fences/scripts/fix_fences.py:1022 — defined here
- `repair_markdown_fences` — .claude/skills/fix-markdown-fences/scripts/fix_fences.py:1068 — defined here
- `iter_markdown_files` — .claude/skills/fix-markdown-fences/scripts/fix_fences.py:1115 — defined here
- `_FENCE_RE` — .claude/skills/fix-markdown-fences/scripts/fix_fences.py:79 — defined here
- `_MAX_FENCE_INDENT` — .claude/skills/fix-markdown-fences/scripts/fix_fences.py:80 — defined here
- `_LIST_MARKER` — .claude/skills/fix-markdown-fences/scripts/fix_fences.py:83 — defined here
- `_ATX_HEADING` — .claude/skills/fix-markdown-fences/scripts/fix_fences.py:90 — defined here
- `_THEMATIC_BREAK` — .claude/skills/fix-markdown-fences/scripts/fix_fences.py:91 — defined here
- `_BLOCK_QUOTE` — .claude/skills/fix-markdown-fences/scripts/fix_fences.py:92 — defined here
- `_SETEXT_UNDERLINE` — .claude/skills/fix-markdown-fences/scripts/fix_fences.py:96 — defined here
- `_LINK_TITLE` — .claude/skills/fix-markdown-fences/scripts/fix_fences.py:110 — defined here
- `_LINK_LABEL` — .claude/skills/fix-markdown-fences/scripts/fix_fences.py:116 — defined here
- `_MAX_LIST_PAD` — .claude/skills/fix-markdown-fences/scripts/fix_fences.py:305 — defined here
- `_LINE_SPLIT_RE` — .claude/skills/fix-markdown-fences/scripts/fix_fences.py:864 — defined here
- `_SKIP_DIRS` — .claude/skills/fix-markdown-fences/scripts/fix_fences.py:866 — defined here

## Structure
none (python script; functions and definitions: `_FENCE_RE`, `_MAX_FENCE_INDENT`, `_LIST_MARKER`, `_ATX_HEADING`, `_THEMATIC_BREAK`, `_BLOCK_QUOTE`, `_SETEXT_UNDERLINE`, `_LINK_TITLE`, `_LINK_LABEL`, `_LINK_TITLE_ONLY`, `_LINK_LABEL_ONLY`, `_LINK_LABEL_COLON`, `_angle_destination_end`, `_link_destination_end`, `_TITLE_CLOSERS`, `_title_end`, `_label_opens`, `_Definition`, `_link_tail`, `_bare_title`, `_link_reference`, `_MAX_LIST_PAD`, `_indent_width`, `_is_blank`, `_container_closed`, `_ListContainers`, `_LINE_SPLIT_RE`, `_SKIP_DIRS`, `MALFORMED_CLOSING`, `UNCLOSED_BLOCK`, `Defect`, `_OpenFence`, `_fence_match`, `_starts_fence`, `_open_fence`, `_closes`, `_scan_open`, `_open_fence_in_item`, `_Line`, `_split_lines`, `_default_sep`, `_join`, `find_fence_defects`, `repair_markdown_fences`, `iter_markdown_files`, `_report`, `main`)

## Scripts — required if type is script or the skill ships scripts
- path: `.claude/skills/fix-markdown-fences/scripts/fix_fences.py`, language: Python 3, lines: 1218
- documented invocation:
  - "python3 \"${COPILOT_PLUGIN_ROOT:-${CLAUDE_PLUGIN_ROOT:-.claude}}/skills/fix-markdown-fences/scripts/fix_fences.py\" FILE_OR_DIR" — .claude/skills/fix-markdown-fences/SKILL.md:59
  - "python3 \"${COPILOT_PLUGIN_ROOT:-${CLAUDE_PLUGIN_ROOT:-.claude}}/skills/fix-markdown-fences/scripts/fix_fences.py\" FILE_OR_DIR --write" — .claude/skills/fix-markdown-fences/SKILL.md:74
  - "python3 \"${COPILOT_PLUGIN_ROOT:-${CLAUDE_PLUGIN_ROOT:-.claude}}/skills/fix-markdown-fences/scripts/fix_fences.py\" PATH [PATH ...]" — .claude/skills/fix-markdown-fences/SKILL.md:88
  - "python3 \"${COPILOT_PLUGIN_ROOT:-${CLAUDE_PLUGIN_ROOT:-.claude}}/skills/fix-markdown-fences/scripts/fix_fences.py\" PATH --write" — .claude/skills/fix-markdown-fences/SKILL.md:89
  - "python3 \"${COPILOT_PLUGIN_ROOT:-${CLAUDE_PLUGIN_ROOT:-.claude}}/skills/fix-markdown-fences/scripts/fix_fences.py\" PATH --json" — .claude/skills/fix-markdown-fences/SKILL.md:90
  - "python3 \"${COPILOT_PLUGIN_ROOT:-${CLAUDE_PLUGIN_ROOT:-.claude}}/skills/fix-markdown-fences/scripts/fix_fences.py\" PATH" — .claude/skills/fix-markdown-fences/SKILL.md:218
- **executed:** yes
- actual command run:
  - Clean report scan:
    `python3 sources/rjm/.claude/skills/fix-markdown-fences/scripts/fix_fences.py sources/rjm/README.md`
    abridged stdout:
    ```
    No fence defects found
    ```
    **actual exit code**: 0
  - JSON reporting:
    `python3 sources/rjm/.claude/skills/fix-markdown-fences/scripts/fix_fences.py sources/rjm/README.md --json`
    abridged stdout:
    ```json
    {
      "defect_count": 0,
      "files": {},
      "repaired": []
    }
    ```
    **actual exit code**: 0
  - Missing path error:
    `python3 sources/rjm/.claude/skills/fix-markdown-fences/scripts/fix_fences.py /nonexistent/file.md`
    abridged stderr:
    ```
    Error: path does not exist: /nonexistent/file.md
    ```
    **actual exit code**: 2
  - Defect detection (report mode):
    `python3 sources/rjm/.claude/skills/fix-markdown-fences/scripts/fix_fences.py test_defect.md`
    abridged stdout:
    ```
    test_defect.md:6: malformed_closing: ```python
    test_defect.md:8: unclosed_block: ```

    2 defect(s) in 1 file(s)
    ```
    **actual exit code**: 1
  - Defect repair with `--write`:
    `python3 sources/rjm/.claude/skills/fix-markdown-fences/scripts/fix_fences.py test_defect.md --write`
    abridged stdout:
    ```
    test_defect.md:6: malformed_closing: ```python
    test_defect.md:8: unclosed_block: ```

    2 defect(s) in 1 file(s)
    Repaired 1 file(s)
    ```
    **actual exit code**: 0
- documented exit codes vs. actual exit paths:
  Documented in script docstring:
  - "0 - No defects found, or `--write` repaired every defect it found." — .claude/skills/fix-markdown-fences/scripts/fix_fences.py:57
  - "1 - Report mode (the default): at least one defect found. Nothing written." — .claude/skills/fix-markdown-fences/scripts/fix_fences.py:58
  - "2 - Configuration error: a requested path does not exist, or a file could" — .claude/skills/fix-markdown-fences/scripts/fix_fences.py:59
  - "not be read or written." — .claude/skills/fix-markdown-fences/scripts/fix_fences.py:60
  Actual exit paths in code:
  - "sys.exit(main())" at .claude/skills/fix-markdown-fences/scripts/fix_fences.py:1217
  - "return 2" at .claude/skills/fix-markdown-fences/scripts/fix_fences.py:1177 when missing paths are detected
  - "return 2" at .claude/skills/fix-markdown-fences/scripts/fix_fences.py:1194 on (OSError, UnicodeDecodeError) during file read
  - "return 2" at .claude/skills/fix-markdown-fences/scripts/fix_fences.py:1209 on OSError during file write
  - "return 1 if (results and not args.write) else 0" at .claude/skills/fix-markdown-fences/scripts/fix_fences.py:1213 returning 1 when defects are present without `--write`, and 0 otherwise
- for validators/gates: can it exit non-zero?
  Yes: exits 1 in default report mode when fence defects are found, and exits 2 on non-existent paths or file read/write errors.
  does it fail on the source repo's own default branch?
  Yes: running `python3 sources/rjm/.claude/skills/fix-markdown-fences/scripts/fix_fences.py sources/rjm/` reports 251 defect(s) across 62 file(s) and exits 1.
- does the output match what the documentation claims?
  Yes. Formatted report, summary statistics, JSON structure, and exit codes match the specifications in SKILL.md and script documentation.

## Defects — required
- `script-bug` · .claude/skills/fix-markdown-fences/scripts/fix_fences.py:459 · Scanner does not track blockquote containers (`>`), causing fences within blockquotes to be missed and blockquotes interrupting paragraphs to cause false `unclosed_block` defects where `--write` inserts spurious closing fences.
- `script-bug` · .claude/skills/fix-markdown-fences/scripts/fix_fences.py:73 · Scanner does not parse CommonMark raw HTML blocks (types 1-7), causing fences within HTML blocks to be misparsed and `--write` to append destructive closing fences to balanced documents.
- `other` · .claude/skills/fix-markdown-fences/scripts/fix_fences.py:9 · High code duplication: `_ListContainers` class (~400+ lines) is duplicated byte-for-byte in `prose-self-check/scripts/prose_lint.py` due to isolated plugin directory packaging without shared library imports.

## Observations
- Line ending preservation: lines are tokenized via `_LINE_SPLIT_RE = re.compile(r"(\r\n|\r|\n)")` (.claude/skills/fix-markdown-fences/scripts/fix_fences.py:864) and reassembled preserving per-line terminators, UTF-8 BOM (`codecs.BOM_UTF8`, line 1203), and trailing newline presence/absence.
- CommonMark fence length rule: closing fences must match opener character and length (.claude/skills/fix-markdown-fences/scripts/fix_fences.py:934), ensuring embedded markdown examples in documentation remain intact.
- Exhaustive container tracking: `_ListContainers` (.claude/skills/fix-markdown-fences/scripts/fix_fences.py:338) tracks innermost list item content columns, 4-column tab stops, lazy continuations, ordered item paragraph interruptions, and multi-line link reference definitions.
- Performance optimization: lines 561-564 document avoidance of quadratic string copying when consuming multi-line link labels across continuation lines.
- Pure standard library dependencies: relies solely on Python 3 standard library (`argparse`, `codecs`, `json`, `re`, `sys`, `dataclasses`, `pathlib`), requiring no third-party package installations.

## Context cost
56770 bytes (~14193 tokens). Self-contained Python script importing only standard library modules with no additional file dependencies loaded at execution.
