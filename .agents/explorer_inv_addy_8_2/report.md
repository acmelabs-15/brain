# Explorer 2 Investigation Report: inv-addy-8 (Files 3, 4, 5)

**Assigned Files**:
3. `sources/addy/hooks/SIMPLIFY-IGNORE.md` (3,863 bytes)
4. `sources/addy/hooks/simplify-ignore.sh` (12,173 bytes)
5. `sources/addy/hooks/session-start-test.sh` (1,224 bytes)

---

# 1. Inventory Entry: `hooks/SIMPLIFY-IGNORE.md`

```markdown
---
package: addy
path: hooks/SIMPLIFY-IGNORE.md
type: doc
bytes: 3863
unit: inv-addy-8
deprecated: false
---

# hooks/SIMPLIFY-IGNORE.md

## Purpose — required, verbatim
> "Block-level protection for `/code-simplify`. Mark code that should never be simplified — the model won't see it." — hooks/SIMPLIFY-IGNORE.md:3

## Design intent — required
Provides documentation and setup guidance for a block-level content masking mechanism designed to shield sensitive, performance-critical, or manually optimized code blocks from automated LLM refactoring during `/code-simplify` invocations, by utilizing Claude Code hooks (`PreToolUse`, `PostToolUse`, `Stop`) to swap protected code blocks with placeholder hashes during read operations and restore them during write operations and session termination.

## Phase — required
`addy:Build`

## Inputs — required
- User-authored source files containing block annotations (`/* simplify-ignore-start */` ... `/* simplify-ignore-end */` with optional reason)
- Configuration snippet for `.claude/settings.json` (defining `PreToolUse`, `PostToolUse`, `Stop` hooks)
- Hook events emitted by Claude Code (`PreToolUse Read`, `PostToolUse Edit|Write`, `Stop`)
- Environment variable `CLAUDE_PROJECT_DIR`

## Outputs — required
- Instructions for modifying `.claude/settings.json` and `.gitignore`
- Cache directory `.claude/.simplify-ignore-cache/` containing temporary backups and block content files
- In-place replacement of protected blocks with `BLOCK_<hash>` placeholders on disk during active sessions
- Automatic restoration of original file content upon session `Stop` or manual crash recovery
- Recovery file `<old-filename>.recovered` if a file is moved or deleted during refactoring

## Invokes — required
- script hooks/simplify-ignore.sh — hooks/SIMPLIFY-IGNORE.md:27, 33, 38, 76
- command /code-simplify — hooks/SIMPLIFY-IGNORE.md:3, 45
- config .claude/settings.json — hooks/SIMPLIFY-IGNORE.md:19
- directory .claude/.simplify-ignore-cache/ — hooks/SIMPLIFY-IGNORE.md:47, 79

## Invoked by — required
orphan

## Concepts named — required, verbatim
- `simplify-ignore hook` — hooks/SIMPLIFY-IGNORE.md:1 — defined here
- `simplify-ignore` — hooks/SIMPLIFY-IGNORE.md:1 — defined here
- `/code-simplify` — hooks/SIMPLIFY-IGNORE.md:3, 45 — used here
- `simplify-ignore-start` — hooks/SIMPLIFY-IGNORE.md:10, 64, 65, 83 — defined here
- `simplify-ignore-end` — hooks/SIMPLIFY-IGNORE.md:16, 66, 83 — defined here
- `PreToolUse` — hooks/SIMPLIFY-IGNORE.md:24, 55 — used here
- `PostToolUse` — hooks/SIMPLIFY-IGNORE.md:30, 56 — used here
- `Stop` — hooks/SIMPLIFY-IGNORE.md:36, 57, 73 — used here
- `Read` — hooks/SIMPLIFY-IGNORE.md:26, 55 — used here
- `Edit` — hooks/SIMPLIFY-IGNORE.md:32, 56 — used here
- `Write` — hooks/SIMPLIFY-IGNORE.md:32, 56 — used here
- `BLOCK_<hash>` — hooks/SIMPLIFY-IGNORE.md:45, 55, 73, 86 — defined here
- `content-hashed` — hooks/SIMPLIFY-IGNORE.md:59 — defined here
- `crash recovery` — hooks/SIMPLIFY-IGNORE.md:71 — defined here
- `fallback expansion` — hooks/SIMPLIFY-IGNORE.md:85 — defined here

## Structure
- `# simplify-ignore hook` — hooks/SIMPLIFY-IGNORE.md:1
- `## Setup` — hooks/SIMPLIFY-IGNORE.md:5
- `## How it works` — hooks/SIMPLIFY-IGNORE.md:49
- `## Annotation syntax` — hooks/SIMPLIFY-IGNORE.md:61
- `## Crash recovery` — hooks/SIMPLIFY-IGNORE.md:71
- `## Known limitations` — hooks/SIMPLIFY-IGNORE.md:81
- `## Requirements` — hooks/SIMPLIFY-IGNORE.md:88

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
- `orphan` — hooks/SIMPLIFY-IGNORE.md:1 — The file is completely unreferenced by README.md, CONTRIBUTING.md, plugin.json, hooks/hooks.json, or any skill/command in sources/addy. It documents an opt-in hook setup that requires manual user configuration.
- `missing-path` — hooks/SIMPLIFY-IGNORE.md:27, 33, 38 — The configuration example uses `"bash \"${CLAUDE_PROJECT_DIR}/hooks/simplify-ignore.sh\""`, which assumes the `hooks/` directory from the plugin was copied directly into `${CLAUDE_PROJECT_DIR}/hooks/`. In contrast, `hooks/hooks.json` uses `${CLAUDE_PLUGIN_ROOT}/hooks/session-start.sh` with fallback to `${CLAUDE_PROJECT_DIR}/.claude/hooks/`.
- `doc-drift` — hooks/SIMPLIFY-IGNORE.md:76 — The crash recovery command `echo '{}' | bash hooks/simplify-ignore.sh` assumes `hooks/simplify-ignore.sh` is in the current working directory, which fails if run from an arbitrary project directory without a local `hooks/` folder.

## Observations
- Ingenious workaround for LLM context filtering: hides sensitive or performance-critical blocks from Claude Code by replacing them with hash placeholders in-place on disk during `Read`, and dynamically reconstructing them during `Edit`/`Write` or restoring upon `Stop`.
- Lists 4 explicit edge-case limitations (single-line blocks hiding full lines, comment suffix limitations for ERB/Blade closers, progressive fallback heuristics on modified placeholder tokens, and file renaming leaving placeholders).

## Context cost
- File size: 3,863 bytes (~966 tokens).
- Transitive cost when invoked: Loads `hooks/simplify-ignore.sh` (12,173 bytes, ~3,043 tokens). Total context cost: 16,036 bytes (~4,009 tokens).
```

---

# 2. Inventory Entry: `hooks/simplify-ignore.sh`

```markdown
---
package: addy
path: hooks/simplify-ignore.sh
type: script
bytes: 12173
unit: inv-addy-8
deprecated: false
---

# hooks/simplify-ignore.sh

## Purpose — required, verbatim
> "# simplify-ignore.sh — Hook for Read (PreToolUse), Edit|Write (PostToolUse), Stop" — hooks/simplify-ignore.sh:2
> "# PreToolUse Read   → backs up file, replaces blocks with BLOCK_<hash> in-place
# PostToolUse Edit  → expands placeholders, re-filters so file stays hidden
# PostToolUse Write → expands placeholders, re-filters so file stays hidden
# Stop              → restores real file content from backup
#
# The file on disk ALWAYS has placeholders while the session is active.
# The real content (with model's changes applied) lives in the backup." — hooks/simplify-ignore.sh:4-10

## Design intent — required
A bash hook script for Claude Code designed to transparently protect code blocks demarcated by `simplify-ignore-start` and `simplify-ignore-end` from being inspected or modified during LLM refactoring runs. It replaces annotated code blocks in-place on disk with deterministic, syntax-preserving `BLOCK_<hash>` placeholders before `Read` operations, restores and expands the original code when the model performs `Edit` or `Write` operations while immediately re-masking the disk file, and cleanly restores original content across all modified files upon session termination (`Stop`) or crash recovery.

## Phase — required
`addy:Build`

## Inputs — required
- Hook payload JSON via stdin (`$INPUT` or pipe) containing `.tool_name` (`Read`, `Edit`, `Write`, or empty/omitted for `Stop`) and `.tool_input.file_path`
- Environment variable `CLAUDE_PROJECT_DIR` (defaults to `.`)
- Target files on disk containing annotations `simplify-ignore-start` and `simplify-ignore-end`
- Cache artifacts in `$CACHE` (`.claude/.simplify-ignore-cache/`): `${ID}.bak`, `${ID}.path`, `${ID}.block.<hash>`, `${ID}.reason.<hash>`, `${ID}.prefix.<hash>`, `${ID}.suffix.<hash>`, `${ID}.lock`

## Outputs — required
- Filtered files on disk containing `BLOCK_<hash>` placeholders in place of protected blocks
- Cache directory `${CLAUDE_PROJECT_DIR:-.}/.claude/.simplify-ignore-cache/`
- Cache artifacts:
  - `${ID}.bak`: unmasked backup/working file content
  - `${ID}.path`: verbatim target file path
  - `${ID}.block.${h}`: raw protected code block content
  - `${ID}.reason.${h}`: parsed annotation reason string
  - `${ID}.prefix.${h}`: leading whitespace and comment prefix characters
  - `${ID}.suffix.${h}`: trailing comment closer characters
  - `${ID}.lock`: lock directory for atomic file locking
- Restored original files upon `Stop`
- `${orig}.recovered` if target file was moved or deleted while masked
- Diagnostic stderr warnings for JSON parse errors, unclosed blocks, fuzzy-matched placeholders, deleted blocks, and moved/deleted files

## Invokes — required
- CLI command jq — hooks/simplify-ignore.sh:16, 26, 30
- CLI command shasum or sha1sum — hooks/simplify-ignore.sh:39-41
- CLI command cut — hooks/simplify-ignore.sh:43, 44
- CLI command sed — hooks/simplify-ignore.sh:76-77
- CLI command perl — hooks/simplify-ignore.sh:137, 269
- CLI command find — hooks/simplify-ignore.sh:193
- CLI command cp, mv, rm, rmdir, mkdir, cat, tail, grep, basename, dirname — hooks/simplify-ignore.sh:147-300

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
- `BLOCK_<hash>` — hooks/simplify-ignore.sh:4, 56 — defined here
- `simplify-ignore-cache` — hooks/simplify-ignore.sh:20 — defined here
- `filter_file` — hooks/simplify-ignore.sh:56, 59, 208, 296 — defined here
- `simplify-ignore-start` — hooks/simplify-ignore.sh:69, 73, 76, 131, 187, 276 — defined here
- `simplify-ignore-end` — hooks/simplify-ignore.sh:79, 108 — defined here
- `file_id` — hooks/simplify-ignore.sh:43, 182, 220 — defined here
- `block_hash` — hooks/simplify-ignore.sh:44, 83, 110 — defined here
- `escape_glob` — hooks/simplify-ignore.sh:47 — defined here
- `atomic lock` — hooks/simplify-ignore.sh:189 — defined here
- `crash leftover` — hooks/simplify-ignore.sh:193 — defined here
- `fuzzy match` — hooks/simplify-ignore.sh:253 — defined here
- `recovered original` — hooks/simplify-ignore.sh:163 — defined here

## Structure
- Shebang & header commentary (`#!/bin/bash`) — hooks/simplify-ignore.sh:1-13
- Shell options & prerequisite checks (`set -euo pipefail`, `jq` check) — hooks/simplify-ignore.sh:14-19
- Cache path configuration & stdin parsing — hooks/simplify-ignore.sh:20-37
- Helper functions (`hash_cmd`, `file_id`, `block_hash`, `escape_glob`) — hooks/simplify-ignore.sh:38-54
- Core parser function `filter_file` — hooks/simplify-ignore.sh:56-142
- `Stop` hook handler (restoration from backup) — hooks/simplify-ignore.sh:144-172
- Tool input guard (`[ -z "$FILE_PATH" ] && exit 0`) — hooks/simplify-ignore.sh:174
- `PreToolUse Read` hook handler (in-place masking) — hooks/simplify-ignore.sh:176-216
- `PostToolUse Edit|Write` hook handler (unmasking, applying edits, re-masking) — hooks/simplify-ignore.sh:218-302

## Scripts — required if type is script or the skill ships scripts
- **path**: `hooks/simplify-ignore.sh`
- **language**: bash
- **lines**: 303
- **documented invocation**:
  `echo '{}' | bash hooks/simplify-ignore.sh` — hooks/SIMPLIFY-IGNORE.md:76
- **executed**: yes
- **actual command run**: `echo '{}' | bash hooks/simplify-ignore.sh`
- **abridged stdout**: (empty stdout, exit code 0)
- **actual exit code**: 0
- **documented exit codes vs actual exit paths**:
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
- **validators/gates evaluation**:
  - Can it exit non-zero? Yes, if `jq` or `shasum`/`sha1sum` is missing from system PATH (`exit 1`).
  - Does it fail on the source repo's default branch? No, on default branch with prerequisites installed it exits 0.
- **does output match documentation claim**: Yes. Clean exit 0 with no stdout when triggered with `{}`.

## Defects — required
- `orphan` — hooks/simplify-ignore.sh:1 — Not registered in `plugin.json` or `hooks/hooks.json`. Only invoked by tests or by manual user setup in `.claude/settings.json`.
- `script-bug` — hooks/simplify-ignore.sh:190-198 — Concurrency lock failure exits silently with code 0 (`exit 0` at lines 195, 197) instead of retrying or waiting. If two concurrent read tools race on the same file, the second reader bypasses filtering and can expose unmasked blocks to the model.
- `missing-path` — hooks/simplify-ignore.sh:179 — Excludes `simplify-ignore*|SIMPLIFY-IGNORE*` by basename, but does not handle relative paths that contain hooks in other directories if renamed.

## Observations
- Highly sophisticated in-place masking pipeline: uses `cat "$FILTERED" > "$FILE_PATH"` to preserve inode and file permissions on Unix systems.
- Robust multi-pass fallback placeholder expansion algorithm (lines 248-261): exact string replacement -> fuzzy prefix+hash+suffix replacement -> raw hash replacement if model altered comment text.
- Includes Perl post-processing (`perl -pe 'chomp if eof'`) to strictly preserve files that lack trailing newlines.
- Includes automated recovery handling: if a file was moved or deleted while masked, session stop creates `<orig>.recovered` rather than clobbering or losing original code.

## Context cost
- File size: 12,173 bytes (~3,043 tokens).
- Transitive cost when executed: operates as standalone bash script. Minimal external footprint.
```

---

# 3. Inventory Entry: `hooks/session-start-test.sh`

```markdown
---
package: addy
path: hooks/session-start-test.sh
type: script
bytes: 1224
unit: inv-addy-8
deprecated: false
---

# hooks/session-start-test.sh

## Purpose — required, verbatim
> "# session-start-test.sh - Tests for the SessionStart hook JSON payload" — hooks/session-start-test.sh:2

## Design intent — required
A test script intended to validate the JSON payload emitted by `hooks/session-start.sh` during Claude Code session startup, ensuring that the hook correctly structures its output and injects the `using-agent-skills` meta-skill when `jq` is installed, or produces appropriate fallback guidance when `jq` is absent.

## Phase — required
`addy:Test`

## Inputs — required
- Output of command `bash hooks/session-start.sh`
- System tool availability (`jq` checked via `command -v jq`)
- Temporary file allocated via `mktemp`
- Node.js runtime (`node`) executing an inline assertion script via heredoc

## Outputs — required
- Stdout message: `session-start JSON payload OK` (hooks/session-start-test.sh:45; currently unreachable)
- Stderr assertion error when payload format fails validation
- Exit code 0 on pass; exit code 1 on failure

## Invokes — required
- script hooks/session-start.sh — hooks/session-start-test.sh:14
- runtime node — hooks/session-start-test.sh:17
- CLI command jq — hooks/session-start-test.sh:10
- CLI command mktemp, trap, rm, printf — hooks/session-start-test.sh:6, 7, 15

## Invoked by — required
- doc CONTRIBUTING.md — CONTRIBUTING.md:79, 87, 99
- doc docs/developer-onboarding.md — docs/developer-onboarding.md:69
- script hooks/simplify-ignore-test.sh — hooks/simplify-ignore-test.sh:242 (referenced in code comment)

## Concepts named — required, verbatim
- `session-start-test.sh` — hooks/session-start-test.sh:2 — defined here
- `SessionStart` — hooks/session-start-test.sh:2 — used here
- `IMPORTANT` — hooks/session-start-test.sh:24, 25 — used here
- `INFO` — hooks/session-start-test.sh:36, 37 — used here
- `using-agent-skills` — hooks/session-start-test.sh:33 — used here
- `agent-skills loaded` — hooks/session-start-test.sh:28 — used here

## Structure
- Shebang & purpose comment (`#!/bin/bash`) — hooks/session-start-test.sh:1-2
- Options (`set -euo pipefail`) — hooks/session-start-test.sh:4
- Temporary payload file setup & trap cleanup — hooks/session-start-test.sh:6-7
- `jq` presence probe (`command -v jq`) — hooks/session-start-test.sh:9-12
- Hook execution & payload capture (`bash hooks/session-start.sh`) — hooks/session-start-test.sh:14-15
- Node.js inline validation script (`HAS_JQ=... node <<'NODE'`) — hooks/session-start-test.sh:17-46

## Scripts — required if type is script or the skill ships scripts
- **path**: `hooks/session-start-test.sh`
- **language**: bash (with inline node / JavaScript)
- **lines**: 47
- **documented invocation**:
  `bash hooks/session-start-test.sh` — CONTRIBUTING.md:87, 99; docs/developer-onboarding.md:69
- **executed**: yes
- **actual command run**: `bash hooks/session-start-test.sh`
- **abridged stdout**: (no stdout; command crashed on stderr)
- **abridged stderr**:
  ```
  [stdin]:8
      throw new Error(`expected IMPORTANT priority, got ${payload.priority}`);
      ^

  Error: expected IMPORTANT priority, got undefined
      at [stdin]:8:11
      at runScriptInThisContext (node:internal/vm:219:10)
  ```
- **actual exit code**: 1
- **documented exit codes vs actual exit paths**:
  - Documented: Expected output is `session-start JSON payload OK` with exit code 0 (CONTRIBUTING.md:90: "Expected output: `session-start JSON payload OK`. The script exits non-zero on any assertion failure.").
  - Actual exit paths:
    - Line 25: `throw new Error(...)` exits 1 (if `payload.priority !== 'IMPORTANT'`)
    - Line 29: `throw new Error(...)` exits 1 (if missing preface)
    - Line 33: `throw new Error(...)` exits 1 (if missing skill content)
    - Line 37: `throw new Error(...)` exits 1 (if `payload.priority !== 'INFO'`)
    - Line 41: `throw new Error(...)` exits 1 (if missing jq guidance)
    - Line 46/47: exits 0 only if Node process finishes without throwing
- **validators/gates evaluation**:
  - Can it exit non-zero? Yes.
  - Does it fail on the source repo's default branch? **YES. IT ALWAYS FAILS.**
  - Exit code is 1 on the pinned source checkout.
- **does output match documentation claim**: NO. CONTRIBUTING.md lines 90 and 104 claim this test passes and outputs `session-start JSON payload OK`. In reality, it throws an uncaught JavaScript Error and exits with code 1.

## Defects — required
- `always-failing-gate` — hooks/session-start-test.sh:24-43 — Test fails unconditionally on every run. `hooks/session-start.sh` was updated to output Claude Code's standard `hookSpecificOutput` envelope (`{"hookSpecificOutput": {"hookEventName": "SessionStart", "additionalContext": ...}}`), but `hooks/session-start-test.sh` was never updated and still asserts against deprecated top-level `.priority` and `.message` fields.
- `script-bug` — hooks/session-start-test.sh:24, 36 — Asserts `payload.priority === 'IMPORTANT'` and `payload.priority === 'INFO'`, both of which are `undefined` on all current outputs of `hooks/session-start.sh`.
- `cross-file-contradiction` — hooks/session-start-test.sh:20-43 vs hooks/session-start.sh:5-7, 21-25 — `session-start.sh` explicitly states: "Every output path must emit the standard SessionStart envelope `{"hookSpecificOutput": {"hookEventName": "SessionStart", "additionalContext": "..."}}`. Hosts that validate hook output (Codex CLI, Claude Code) reject other shapes." In direct contradiction, `session-start-test.sh` requires `{priority: "...", message: "..."}`.
- `doc-drift` — CONTRIBUTING.md:79, 87-90, 94-105 vs hooks/session-start-test.sh:1-47 — CONTRIBUTING.md documents that running `bash hooks/session-start-test.sh` validates the payload and outputs `session-start JSON payload OK`, which is false on this commit.

## Observations
- Demonstrates an explicit break in contract testing where hook implementation was updated for platform compatibility (`hookSpecificOutput`), but test suite was neglected.
- The test can be repaired by changing assertions to validate `payload.hookSpecificOutput.hookEventName === 'SessionStart'` and `payload.hookSpecificOutput.additionalContext.includes(...)`.

## Context cost
- File size: 1,224 bytes (~306 tokens).
- Transitive cost when executed: Executes `hooks/session-start.sh` (1,392 bytes, ~348 tokens), which reads `skills/using-agent-skills/SKILL.md` (10,426 bytes, ~2,606 tokens). Total context cost: 13,042 bytes (~3,260 tokens).
```

---

# 4. Cross-Cutting §4 Checklist Summary

| Verification Item | Target / Path | Result | Notes |
|---|---|---|---|
| Existence | `sources/addy/hooks/SIMPLIFY-IGNORE.md` | Verified | Exists (3,863 bytes) |
| Existence | `sources/addy/hooks/simplify-ignore.sh` | Verified | Exists (12,173 bytes, executable) |
| Existence | `sources/addy/hooks/session-start-test.sh` | Verified | Exists (1,224 bytes, executable) |
| Existence | `sources/addy/hooks/session-start.sh` | Verified | Exists (1,392 bytes) |
| Existence | `sources/addy/hooks/simplify-ignore-test.sh` | Verified | Exists (8,709 bytes) |
| Existence | `sources/addy/skills/using-agent-skills/SKILL.md` | Verified | Exists (10,426 bytes) |
| Execution | `echo '{}' \| bash hooks/simplify-ignore.sh` | Clean exit 0 | Verified; produces empty stdout, exits 0 |
| Execution | `bash hooks/simplify-ignore-test.sh` | Clean exit 0 | 21 passed, 0 failed |
| Execution | `bash hooks/session-start-test.sh` | **FAILED (Exit 1)** | `Error: expected IMPORTANT priority, got undefined` |
| Execution | `echo 'NOT_JSON{{{' \| bash hooks/simplify-ignore.sh` | Clean exit 0 | Emits diagnostic warning to stderr, exits 0 |
| In-Place Filter & Recovery | Full Read -> Edit -> Stop cycle on `simplify-ignore.sh` | Verified | File filtered to placeholder on Read, restored on Stop |

---

# 5. Worker Reproduction Guide & Exact Commands

To reproduce all findings independently, execute the following commands in `/Users/peterkloss/Dev/ACMElabs/brain-v2/sources/addy`:

### Command 1: Verify `simplify-ignore.sh` documented invocation
```bash
cd /Users/peterkloss/Dev/ACMElabs/brain-v2/sources/addy
echo '{}' | bash hooks/simplify-ignore.sh
# Expected: Exit code 0, no output
```

### Command 2: Run `simplify-ignore-test.sh` full test suite
```bash
cd /Users/peterkloss/Dev/ACMElabs/brain-v2/sources/addy
bash hooks/simplify-ignore-test.sh
# Expected: 21 passed, 0 failed, exit code 0
```

### Command 3: Reproduce `session-start-test.sh` failure defect
```bash
cd /Users/peterkloss/Dev/ACMElabs/brain-v2/sources/addy
bash hooks/session-start-test.sh
# Expected: Exit code 1
# Stderr: Error: expected IMPORTANT priority, got undefined
```

### Command 4: Inspect schema divergence between `session-start.sh` and `session-start-test.sh`
```bash
cd /Users/peterkloss/Dev/ACMElabs/brain-v2/sources/addy
bash hooks/session-start.sh | head -n 5
# Outputs: {"hookSpecificOutput":{"hookEventName":"SessionStart","additionalContext":"..."}}
```
Notice that `hookSpecificOutput` is emitted, whereas `session-start-test.sh` line 24 checks `payload.priority === 'IMPORTANT'`.
