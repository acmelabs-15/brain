---
package: addy
path: hooks/simplify-ignore.sh
type: file
bytes: 12173
unit: inv-addy-33
aliases: []
memo_inputs:
  - {path: hooks/simplify-ignore.sh, sha256: 1256c677adbce33f3c361793d7dae2405fb02a7efc07b19cc8f42134def8a5cd}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# hooks/simplify-ignore.sh

## Purpose — required, verbatim
> "simplify-ignore.sh — Hook for Read (PreToolUse), Edit|Write (PostToolUse), Stop" — hooks/simplify-ignore.sh:2

## Design intent — required
Provides an automated file masking and restoration hook for Claude Code sessions running code simplification. Intercepts file reads to substitute annotated sensitive blocks with hash-keyed placeholders in-place on disk, expands placeholders when the model writes modifications to merge user code with model edits, and restores the original file state upon session stop or crash recovery.

## Phase — required
addy:Review

## Inputs — required
- Hook invocation payload via stdin containing `tool_name` — hooks/simplify-ignore.sh:26
- Hook invocation payload via stdin containing `tool_input` file path — hooks/simplify-ignore.sh:30
- Cache directory at `CACHE` — hooks/simplify-ignore.sh:20

## Outputs — required
- Filtered files on disk containing placeholder markers — hooks/simplify-ignore.sh:209
- Restored original files upon Stop hook event — hooks/simplify-ignore.sh:154
- Recovered original files saved with `.recovered` suffix if deleted by model — hooks/simplify-ignore.sh:160

## Invokes — required
none

## Invoked by — required
- script hooks/simplify-ignore-test.sh — hooks/simplify-ignore-test.sh:34

## Concepts named — required, verbatim
- `PreToolUse Read` — hooks/simplify-ignore.sh:4 — used here
- `PostToolUse Edit` — hooks/simplify-ignore.sh:5 — used here
- `PostToolUse Write` — hooks/simplify-ignore.sh:6 — used here
- `Stop` — hooks/simplify-ignore.sh:7 — used here
- `jq` — hooks/simplify-ignore.sh:12 — used here
- `shasum` — hooks/simplify-ignore.sh:12 — used here
- `sha1sum` — hooks/simplify-ignore.sh:12 — used here
- `parse_error` — hooks/simplify-ignore.sh:25 — defined here
- `TOOL_NAME` — hooks/simplify-ignore.sh:26 — defined here
- `FILE_PATH` — hooks/simplify-ignore.sh:30 — defined here
- `hash_cmd` — hooks/simplify-ignore.sh:38 — defined here
- `file_id` — hooks/simplify-ignore.sh:43 — defined here
- `block_hash` — hooks/simplify-ignore.sh:44 — defined here
- `escape_glob` — hooks/simplify-ignore.sh:47 — defined here
- `filter_file` — hooks/simplify-ignore.sh:59 — defined here
- `simplify-ignore-start` — hooks/simplify-ignore.sh:69 — used here
- `simplify-ignore-end` — hooks/simplify-ignore.sh:79 — used here

## Structure
- set -euo pipefail and jq dependency validation — hooks/simplify-ignore.sh:14-18
- Cache directory initialization and input parsing — hooks/simplify-ignore.sh:20-36
- Helper utilities (hash_cmd, file_id, block_hash, escape_glob) — hooks/simplify-ignore.sh:38-54
- Function filter_file implementation — hooks/simplify-ignore.sh:56-142
- Stop event handler: file restoration from backup and cache cleanup — hooks/simplify-ignore.sh:144-172
- PreToolUse Read event handler: file backup and in-place placeholder filtering — hooks/simplify-ignore.sh:176-216
- PostToolUse Edit/Write event handler: placeholder expansion, model edit merge, re-filtering — hooks/simplify-ignore.sh:218-302

## Scripts — required if type is script or the skill ships scripts
- path: `hooks/simplify-ignore.sh`, language: bash, lines: 303
- documented invocation: `echo '{}' | bash hooks/simplify-ignore.sh` — hooks/SIMPLIFY-IGNORE.md:76
- executed: yes
- actual command run: `echo '{}' | bash hooks/simplify-ignore.sh`, stdout: (empty), actual exit code: 0
- documented exit codes: `exit 1` on missing dependencies (`hooks/simplify-ignore.sh:17, 41`); `exit 0` on successful execution or bypass (`hooks/simplify-ignore.sh:146, 171, 174, 178, 184, 187, 215, 221, 301`)
- for validators/gates: not a validation gate; performs file substitution and recovery in response to Claude Code tool events
- does output match documentation: yes, restores cached files and clears temporary lock files upon Stop event

## Defects — required
none

## Observations
Uses atomic locking via `mkdir "$CACHE/${ID}.lock"` with a 60-second timeout to prevent race conditions during parallel hook calls. Employs `perl -pe 'chomp if eof'` to strictly preserve source trailing newline semantics. Implements multi-tier fallback expansion (exact placeholder, fuzzy match without reason, hash-only match) to recover if the LLM alters surrounding comment syntax.

## Context cost
12173 bytes, approximately 2900 tokens.
