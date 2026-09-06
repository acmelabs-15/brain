---
package: rjm
path: .claude/skills/skillforge/scripts/check_docs_safety.py
type: script
bytes: 2290
unit: inv-rjm-162
in_scope_via: .claude/skills/skillforge/SKILL.md
aliases: []
memo_inputs:
  - {path: .claude/skills/skillforge/scripts/check_docs_safety.py, sha256: 1853c181c749bc1f147533aab5a23ab12b03170a1a9526d3bf72c5c6055eaea7}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# .claude/skills/skillforge/scripts/check_docs_safety.py

## Purpose — required, verbatim
> "check_docs_safety.py - Guard against unsafe hook command examples in docs." — .claude/skills/skillforge/scripts/check_docs_safety.py:3

## Design intent — required
Security gate for documentation and skill definition files to prevent command injection risks in hook definitions. It scans markdown files for lines specifying hook commands (`command:`) and flags any unquoted interpolation of `$TOOL_INPUT` or `$TOOL_OUTPUT` (and their `${...}` variants). Without it, documentation examples could promote unsafe shell patterns where unsanitized user inputs or tool outputs are evaluated by hook runners without proper shell quote wrapping.

## Phase — required
rjm:Validation and Packaging

## Inputs — required
- Optional command-line arguments: one or more file paths (`sys.argv[1:]`) to scan — .claude/skills/skillforge/scripts/check_docs_safety.py:62
- Default target paths if no arguments provided: `SKILL.md`, `references/script-integration-framework.md`, and `references/synthesis-protocol.md` resolved from the skill repository root — .claude/skills/skillforge/scripts/check_docs_safety.py:24-29

## Outputs — required
- Formatted stdout summary: `No unsafe command interpolation patterns found.` on clean scans, or `Unsafe command interpolation found:` followed by a list of offending `path:line: content` entries — .claude/skills/skillforge/scripts/check_docs_safety.py:73-78
- Error messages printed to stderr on unreadable files — .claude/skills/skillforge/scripts/check_docs_safety.py:69
- Process exit code: 0 if clean, 1 if unsafe patterns found, 2 if file reading fails — .claude/skills/skillforge/scripts/check_docs_safety.py:70,76,79

## Invokes — required
none

## Invoked by — required
- skill .claude/skills/skillforge/SKILL.md — .claude/skills/skillforge/SKILL.md:263
- skill .claude/skills/skillforge/SKILL.md — .claude/skills/skillforge/SKILL.md:285

## Concepts named — required, verbatim
- `TOOL_INPUT` — .claude/skills/skillforge/scripts/check_docs_safety.py:5 — used here
- `TOOL_OUTPUT` — .claude/skills/skillforge/scripts/check_docs_safety.py:5 — used here
- `default_targets` — .claude/skills/skillforge/scripts/check_docs_safety.py:24 — defined here
- `is_unquoted_tool_var` — .claude/skills/skillforge/scripts/check_docs_safety.py:32 — defined here
- `scan_file` — .claude/skills/skillforge/scripts/check_docs_safety.py:45 — defined here

## Structure
none

## Scripts — required if type is script or the skill ships scripts
- path: `.claude/skills/skillforge/scripts/check_docs_safety.py`, language: Python, lines: 84
- documented invocation: `"python scripts/check_docs_safety.py" — .claude/skills/skillforge/scripts/check_docs_safety.py:9`
- **executed:** yes
- actual command run: `python3 scripts/check_docs_safety.py` (executed from directory `sources/rjm/.claude/skills/skillforge`), abridged stdout: `No unsafe command interpolation patterns found.`, **actual exit code:** 0
- documented exit codes:
  - `"0 - no unsafe patterns found" — .claude/skills/skillforge/scripts/check_docs_safety.py:13`
  - `"1 - unsafe patterns found" — .claude/skills/skillforge/scripts/check_docs_safety.py:14`
  - `"2 - bad input / file read error" — .claude/skills/skillforge/scripts/check_docs_safety.py:15`
  vs. actual exit paths in code:
  - `.claude/skills/skillforge/scripts/check_docs_safety.py:70` (`return 2`)
  - `.claude/skills/skillforge/scripts/check_docs_safety.py:76` (`return 1`)
  - `.claude/skills/skillforge/scripts/check_docs_safety.py:79` (`return 0`)
  - `.claude/skills/skillforge/scripts/check_docs_safety.py:83` (`raise SystemExit(main())`)
- for validators/gates: can it exit non-zero? yes (exits 1 on unsafe variable patterns, exits 2 on missing or unreadable target files). does it fail on the source repo's own default branch? no (exits 0 on default documentation targets).
- does the output match what the documentation claims? yes (returns 0 when clean, 1 on unsafe interpolation, 2 on read failure).

## Defects — required
none

## Observations
- Simple filter boundary: Line 53 checks `if "command:" not in line: continue`, restricting the security check strictly to lines with the `command:` key in markdown files; multiline command YAML blocks or standalone shell snippets without `command:` on the same line are not scanned.
- Safe pattern definitions: Lines 38-42 define safe forms as explicitly enclosing variables in double quotes (`"$TOOL_INPUT"` or `"${TOOL_INPUT}"`).

## Context cost
2290 bytes, ~570 tokens.
