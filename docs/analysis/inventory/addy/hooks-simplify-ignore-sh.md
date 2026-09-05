---
package: addy
path: hooks/simplify-ignore.sh
type: script
bytes: 12173
unit: inv-addy-33
deprecated: false
aliases: []
memo_inputs:
  - {path: hooks/simplify-ignore.sh, sha256: 1256c677adbce33f3c361793d7dae2405fb02a7efc07b19cc8f42134def8a5cd}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-04 quote-check+coverage
---

# hooks/simplify-ignore.sh

## Purpose — required, verbatim
> "Hook for Read (PreToolUse), Edit|Write (PostToolUse), Stop" — hooks/simplify-ignore.sh:2

## Design intent — required
Coordinates transparent block hiding during Claude Code sessions. On `PreToolUse Read`, it backs up the original source file and replaces marked blocks with `BLOCK_<hash>` placeholders in-place. On `PostToolUse Edit` or `Write`, it restores and expands the real code behind the placeholders while incorporating the model's edits, then re-filters the file so it remains hidden on disk. On `Stop` (or when invoked with an empty tool name), it restores all files to their original, expanded states from the cache. Without this hook, automated simplification would modify sensitive code blocks marked by developers.

## Phase — required
none

## Inputs — required
- Standard input parsed for `.tool_name` — hooks/simplify-ignore.sh:26
- Standard input parsed for `.tool_input.file_path` — hooks/simplify-ignore.sh:30
- File cache directory at `.claude/.simplify-ignore-cache` — hooks/simplify-ignore.sh:20

## Outputs — required
- In-place filtered source file containing placeholder token `BLOCK_${h}` — hooks/simplify-ignore.sh:92
- Backup file at `${ID}.bak` — hooks/simplify-ignore.sh:185
- Path reference file at `${ID}.path` — hooks/simplify-ignore.sh:203
- Recovered file at `.recovered` — hooks/simplify-ignore.sh:160

## Invokes — required
none

## Invoked by — required
- doc SIMPLIFY-IGNORE.md — hooks/SIMPLIFY-IGNORE.md:27
- script simplify-ignore-test.sh — hooks/simplify-ignore-test.sh:34

## Concepts named — required, verbatim
- `PreToolUse` — hooks/simplify-ignore.sh:2 — used here
- `PostToolUse` — hooks/simplify-ignore.sh:2 — used here
- `Stop` — hooks/simplify-ignore.sh:2 — used here
- `simplify-ignore` — hooks/simplify-ignore.sh:2 — defined here
- `filter_file` — hooks/simplify-ignore.sh:59 — defined here
- `simplify-ignore-start` — hooks/simplify-ignore.sh:69 — defined here
- `simplify-ignore-end` — hooks/simplify-ignore.sh:79 — defined here

## Structure
Executable bash script without markdown headings:
- Shell setup and dependency checks: `set -euo pipefail` — hooks/simplify-ignore.sh:14
- Input JSON parsing: `TOOL_NAME` — hooks/simplify-ignore.sh:26, `FILE_PATH` — hooks/simplify-ignore.sh:30
- Helper functions: `hash_cmd` — hooks/simplify-ignore.sh:38, `file_id` — hooks/simplify-ignore.sh:43, `block_hash` — hooks/simplify-ignore.sh:44, `escape_glob` — hooks/simplify-ignore.sh:47
- Core filter function: `filter_file` — hooks/simplify-ignore.sh:59
- Stop hook handler — hooks/simplify-ignore.sh:145-172
- PreToolUse Read hook handler — hooks/simplify-ignore.sh:177-216
- PostToolUse Edit|Write hook handler — hooks/simplify-ignore.sh:219-302

## Scripts — required if type is script or the skill ships scripts
For each script:
- path, language, lines: `hooks/simplify-ignore.sh`, bash, 303 lines
- documented invocation: `echo '{}' | bash hooks/simplify-ignore.sh` — hooks/SIMPLIFY-IGNORE.md:76
- **executed:** yes
- actual command run, abridged stdout, **actual exit code**: Ran `echo '{}' | bash hooks/simplify-ignore.sh`; stdout empty; **actual exit code**: 0. Tested in-place Read filtering and Stop restoration; **actual exit code**: 0.
- documented exit codes vs. actual exit paths: Documented: exits 0 normally; 1 on missing dependency. Actual exit paths: `exit 1` at hooks/simplify-ignore.sh:17, 41; `exit 0` at hooks/simplify-ignore.sh:146, 171, 174, 178, 179, 185, 187, 196, 197, 215, 221, 222, 301.
- for validators/gates: Not a gate. Manages file transformation lifecycle.
- does the output match what the documentation claims? Yes, crash recovery / stop restore succeeds cleanly.

## Defects — required
none

## Observations
- Uses atomic directory locks (`mkdir "$CACHE/${ID}.lock"`) with stale lock detection (>60s) to handle concurrent tool executions safely.
- Implements fuzzy fallback expansion if the model modifies the placeholder text or reason comment.
- If an edited file was renamed or deleted during the session, restores it to `${orig}.recovered` upon session stop rather than failing silently.
- Not registered in `hooks/hooks.json`; requires manual setup in `.claude/settings.json` per `hooks/SIMPLIFY-IGNORE.md:19-43`.

## Context cost
12173 bytes (~3043 tokens). Standalone script.
