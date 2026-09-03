---
package: addy
path: hooks/simplify-ignore.sh
type: script
bytes: 12173
unit: inv-addy-8
---

# hooks/simplify-ignore.sh

## Purpose — required, verbatim
> "simplify-ignore.sh — Hook for Read (PreToolUse), Edit|Write (PostToolUse), Stop
>
> PreToolUse Read   → backs up file, replaces blocks with BLOCK_<hash> in-place
> PostToolUse Edit  → expands placeholders, re-filters so file stays hidden
> PostToolUse Write → expands placeholders, re-filters so file stays hidden
> Stop              → restores real file content from backup
>
> The file on disk ALWAYS has placeholders while the session is active.
> The real content (with model's changes applied) lives in the backup." — hooks/simplify-ignore.sh:2-10

## Design intent — required
A defensive bash hook script for Claude Code designed to transparently protect code blocks demarcated by `simplify-ignore-start` and `simplify-ignore-end` from being inspected or modified during LLM refactoring runs. It replaces annotated code blocks in-place on disk with deterministic, syntax-preserving `BLOCK_<hash>` placeholders before `Read` operations, restores and expands the original code when the model performs `Edit` or `Write` operations while immediately re-masking the disk file, and cleanly restores original content across all modified files upon session termination (`Stop`) or crash recovery.

## Phase — required
`addy:Review` (supports the `/code-simplify` command and `code-simplification` review skill during code modification)

## Inputs — required
- Hook payload JSON via stdin containing `.tool_name` (`Read`, `Edit`, `Write`, or empty/omitted for `Stop`) and `.tool_input.file_path` (hooks/simplify-ignore.sh:21-36)
- Environment variable `CLAUDE_PROJECT_DIR` (defaults to `.`) (hooks/simplify-ignore.sh:20)
- Target files on disk containing annotations `simplify-ignore-start` and `simplify-ignore-end` (hooks/simplify-ignore.sh:66-127)
- Cache artifacts in `$CACHE` (`.claude/.simplify-ignore-cache/`): `${ID}.bak`, `${ID}.path`, `${ID}.block.<hash>`, `${ID}.reason.<hash>`, `${ID}.prefix.<hash>`, `${ID}.suffix.<hash>`, `${ID}.lock` (hooks/simplify-ignore.sh:62, 85-88, 112-115, 147-164, 182-212)

## Outputs — required
- Filtered files on disk containing `BLOCK_<hash>` placeholders in place of protected blocks during active session reads (hooks/simplify-ignore.sh:208-210, 296-299)
- Cache directory `${CLAUDE_PROJECT_DIR:-.}/.claude/.simplify-ignore-cache/`
- Cache artifacts:
  - `${ID}.bak`: unmasked backup/working file content
  - `${ID}.path`: verbatim target file path
  - `${ID}.block.${h}`: raw protected code block content
  - `${ID}.reason.${h}`: parsed annotation reason string
  - `${ID}.prefix.${h}`: leading whitespace and comment prefix characters
  - `${ID}.suffix.${h}`: trailing comment closer characters
  - `${ID}.lock`: lock directory for atomic file locking
- Restored original files upon `Stop` (hooks/simplify-ignore.sh:154-156)
- `${orig}.recovered` if target file was moved or deleted while masked (hooks/simplify-ignore.sh:160)
- Diagnostic stderr warnings for JSON parse errors, unclosed blocks, fuzzy-matched placeholders, deleted blocks, and moved/deleted files (hooks/simplify-ignore.sh:35, 131, 163, 253, 282)

## Invokes — required
- tool jq — hooks/simplify-ignore.sh:16, 26, 30
- tool shasum or sha1sum — hooks/simplify-ignore.sh:39-41
- tool cut — hooks/simplify-ignore.sh:43, 44
- tool sed — hooks/simplify-ignore.sh:76-77
- tool perl — hooks/simplify-ignore.sh:137, 269
- tool find — hooks/simplify-ignore.sh:193
- tool cp, mv, rm, rmdir, mkdir, cat, tail, grep, basename, dirname — hooks/simplify-ignore.sh:147-300

## Invoked by — required
- doc hooks/SIMPLIFY-IGNORE.md — hooks/SIMPLIFY-IGNORE.md:27, 33, 38, 76
- script hooks/simplify-ignore-test.sh — hooks/simplify-ignore-test.sh:34, 243

## Concepts named — required, verbatim
- `simplify-ignore.sh` — hooks/simplify-ignore.sh:2 — defined here
- `Read` — hooks/simplify-ignore.sh:2, 4, 177 — used here
- `PreToolUse` — hooks/simplify-ignore.sh:2, 4, 176 — used here
- `Edit` — hooks/simplify-ignore.sh:2, 5, 218, 219 — used here
- `Write` — hooks/simplify-ignore.sh:2, 6, 218, 219 — used here
- `PostToolUse` — hooks/simplify-ignore.sh:2, 5, 6, 218 — used here
- `Stop` — hooks/simplify-ignore.sh:2, 7, 144 — used here
- `BLOCK_<hash>` — hooks/simplify-ignore.sh:4, 56, 90, 117 — defined here
- `simplify-ignore-cache` — hooks/simplify-ignore.sh:20 — defined here
- `file_id` — hooks/simplify-ignore.sh:43, 182, 220 — defined here
- `block_hash` — hooks/simplify-ignore.sh:44, 83, 110 — defined here
- `escape_glob` — hooks/simplify-ignore.sh:47 — defined here
- `filter_file` — hooks/simplify-ignore.sh:56, 59, 208, 296 — defined here
- `simplify-ignore-start` — hooks/simplify-ignore.sh:69, 73, 76, 131, 187, 276 — defined here
- `simplify-ignore-end` — hooks/simplify-ignore.sh:79, 108 — defined here
- `atomic lock` — hooks/simplify-ignore.sh:189 — defined here
- `crash leftover` — hooks/simplify-ignore.sh:193 — defined here
- `fuzzy match` — hooks/simplify-ignore.sh:253 — defined here
- `recovered original` — hooks/simplify-ignore.sh:163 — defined here

## Structure
1. Shebang & header commentary (`#!/bin/bash`) — hooks/simplify-ignore.sh:1-13
2. Shell options & prerequisite checks (`set -euo pipefail`, `jq` check) — hooks/simplify-ignore.sh:14-19
3. Cache path configuration & stdin parsing — hooks/simplify-ignore.sh:20-37
4. Helper functions (`hash_cmd`, `file_id`, `block_hash`, `escape_glob`) — hooks/simplify-ignore.sh:38-54
5. Core parser function `filter_file` — hooks/simplify-ignore.sh:56-142
6. `Stop` hook handler (restoration from backup) — hooks/simplify-ignore.sh:144-172
7. Tool input guard (`[ -z "$FILE_PATH" ] && exit 0`) — hooks/simplify-ignore.sh:174
8. `PreToolUse Read` hook handler (in-place masking) — hooks/simplify-ignore.sh:176-216
9. `PostToolUse Edit|Write` hook handler (unmasking, applying edits, re-masking) — hooks/simplify-ignore.sh:218-302

## Scripts — required if type is script or the skill ships scripts
- path: `hooks/simplify-ignore.sh`
- language: bash (303 lines)
- documented invocation: `echo '{}' | bash hooks/simplify-ignore.sh` — hooks/SIMPLIFY-IGNORE.md:76
- executed: yes
- actual command run: `cd sources/addy && echo '{}' | bash hooks/simplify-ignore.sh`
- abridged stdout / stderr: (empty stdout, empty stderr)
- actual exit code: 0
- documented exit codes vs actual exit paths:
  - Documented: `exit 1` on missing dependencies (hooks/simplify-ignore.sh:17, 41); all other exits are 0.
  - Actual exit paths:
    - Line 17: `exit 1` (missing `jq`)
    - Line 41: `exit 1` (missing `shasum`/`sha1sum`)
    - Line 146: `exit 0` (empty `TOOL_NAME` and cache directory does not exist)
    - Line 171: `exit 0` (empty `TOOL_NAME`, finished restoring all files from cache)
    - Line 174: `exit 0` (empty `FILE_PATH`)
    - Line 178: `exit 0` (`Read` event, file does not exist)
    - Line 179: `exit 0` (`Read` event, file matches `simplify-ignore*|SIMPLIFY-IGNORE*`)
    - Line 185: `exit 0` (`Read` event, backup already exists, already filtered)
    - Line 187: `exit 0` (`Read` event, file has no `simplify-ignore-start` marker)
    - Line 195: `exit 0` (`Read` event, lock directory exists and is active)
    - Line 197: `exit 0` (`Read` event, lock directory could not be acquired)
    - Line 215: `exit 0` (`Read` event, filter complete)
    - Line 221: `exit 0` (`Edit`/`Write` event, no backup file found)
    - Line 222: `exit 0` (`Edit`/`Write` event, no block cache files found)
    - Line 301: `exit 0` (`Edit`/`Write` event, unmasking and re-filtering complete)
- for validators/gates: can it exit non-zero? Yes, if `jq` or `shasum`/`sha1sum` is missing from system PATH (`exit 1`). Does it fail on default branch? No, on default branch with prerequisites installed it exits 0.
- does output match documentation claims? Yes. Clean exit 0 with empty stdout when triggered with `{}`.

## Defects — required
- `orphan` · hooks/simplify-ignore.sh:1: Not registered in `plugin.json` or `hooks/hooks.json`. Only invoked by tests or by manual user setup in `.claude/settings.json`.
- `script-bug` · hooks/simplify-ignore.sh:190-198: Concurrency lock failure exits silently with code 0 (`exit 0` at lines 195, 197) instead of retrying or waiting. If two concurrent read tools race on the same file, the second reader bypasses filtering and can expose unmasked blocks to the model.
- `missing-path` · hooks/simplify-ignore.sh:179: Excludes `simplify-ignore*|SIMPLIFY-IGNORE*` by basename, but does not handle relative paths that contain hooks in other directories if renamed.

## Observations
- Highly sophisticated in-place masking pipeline: uses `cat "$FILTERED" > "$FILE_PATH"` to preserve inode and file permissions on Unix systems.
- Robust multi-pass fallback placeholder expansion algorithm (lines 248-261): exact string replacement -> fuzzy prefix+hash+suffix replacement -> raw hash replacement if model altered comment text.
- Includes Perl post-processing (`perl -pe 'chomp if eof'`) to strictly preserve files that lack trailing newlines.
- Includes automated recovery handling: if a file was moved or deleted while masked, session stop creates `<orig>.recovered` rather than clobbering or losing original code.

## Context cost
12,173 bytes (~3,050 tokens).
