---
package: addy
path: hooks/simplify-ignore.sh
type: file
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
verified: 2026-09-05 quote-check+coverage
---

# hooks/simplify-ignore.sh

## Purpose — required, verbatim
> "Hook for Read (PreToolUse), Edit|Write (PostToolUse), Stop" — hooks/simplify-ignore.sh:2

## Design intent — required
Multi-event hook script providing transparent block-level code redaction during AI-assisted code simplification (`/code-simplify`). Intercepts tool execution to replace annotated code blocks between `simplify-ignore-start` and `simplify-ignore-end` with content-hashed `BLOCK_<hash>` placeholders during `Read` operations, restores original block content while integrating model edits during `Edit`/`Write` operations, and restores all files from cache backups on session `Stop` or crash recovery.

## Phase — required
addy:Review

## Inputs — required
- JSON payload on stdin with tool_name — hooks/simplify-ignore.sh:26
- Target file path from tool_input — hooks/simplify-ignore.sh:30
- Cache directory at .claude/.simplify-ignore-cache — hooks/simplify-ignore.sh:20

## Outputs — required
- Filtered source file content on disk — hooks/simplify-ignore.sh:209
- Restored source file content with model edits applied — hooks/simplify-ignore.sh:287
- Backup files in cache directory — hooks/simplify-ignore.sh:202

## Invokes — required
none

## Invoked by — required
- script hooks/simplify-ignore-test.sh — hooks/simplify-ignore-test.sh:34
- doc hooks/SIMPLIFY-IGNORE.md — hooks/SIMPLIFY-IGNORE.md:27

## Concepts named — required, verbatim
- `PreToolUse` — hooks/simplify-ignore.sh:2 — used here
- `PostToolUse` — hooks/simplify-ignore.sh:2 — used here
- `Stop` — hooks/simplify-ignore.sh:2 — used here
- `jq` — hooks/simplify-ignore.sh:12 — used here
- `shasum` — hooks/simplify-ignore.sh:12 — used here
- `sha1sum` — hooks/simplify-ignore.sh:12 — used here
- `filter_file` — hooks/simplify-ignore.sh:56 — defined here
- `simplify-ignore-start` — hooks/simplify-ignore.sh:69 — used here
- `simplify-ignore-end` — hooks/simplify-ignore.sh:79 — used here

## Structure
none

## Scripts — required if type is script or the skill ships scripts
- path: `hooks/simplify-ignore.sh`, language: bash, lines: 303
- documented invocation: `echo '{}' | bash hooks/simplify-ignore.sh` — hooks/SIMPLIFY-IGNORE.md:76
- **executed:** yes
- actual command run: `echo '{}' | bash hooks/simplify-ignore.sh`, abridged stdout: `(empty)`, **actual exit code**: 0
- documented exit codes: `exit 0` — hooks/simplify-ignore.sh:171 vs. actual exit paths in code:
  - `exit 1` — hooks/simplify-ignore.sh:17 (missing jq)
  - `exit 1` — hooks/simplify-ignore.sh:41 (missing shasum or sha1sum)
  - `exit 0` — hooks/simplify-ignore.sh:146 (cache dir missing in Stop event)
  - `exit 0` — hooks/simplify-ignore.sh:171 (normal completion of Stop event)
  - `exit 0` — hooks/simplify-ignore.sh:174 (empty FILE_PATH)
  - `exit 0` — hooks/simplify-ignore.sh:178 (FILE_PATH not found)
  - `exit 0` — hooks/simplify-ignore.sh:179 (self-skipping hook file)
  - `exit 0` — hooks/simplify-ignore.sh:185 (backup exists)
  - `exit 0` — hooks/simplify-ignore.sh:187 (no start marker)
  - `exit 0` — hooks/simplify-ignore.sh:195 (lock failure)
  - `exit 0` — hooks/simplify-ignore.sh:197 (lock active)
  - `exit 0` — hooks/simplify-ignore.sh:215 (PreToolUse Read complete)
  - `exit 0` — hooks/simplify-ignore.sh:221 (PostToolUse missing backup)
  - `exit 0` — hooks/simplify-ignore.sh:222 (PostToolUse missing block cache)
  - `exit 0` — hooks/simplify-ignore.sh:301 (PostToolUse Edit/Write complete)
- for validators/gates: not a validation gate; runtime hook for transparent file redaction and expansion
- does the output match what the documentation claims? yes, runs crash recovery when called with empty JSON and exits 0 cleanly

## Defects — required
none

## Observations
Implements concurrency safety through mkdir lockdirs (`$CACHE/${ID}.lock`) with stale lock expiration. Preserves source file trailing newlines via perl chomp inspection. Employs multi-tier placeholder matching during expansion to handle model reformatting.

## Context cost
12173 bytes, approximately 3000 tokens.
