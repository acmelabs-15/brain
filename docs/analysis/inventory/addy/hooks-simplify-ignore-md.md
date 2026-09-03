---
package: addy
path: hooks/SIMPLIFY-IGNORE.md
type: doc
bytes: 3863
unit: inv-addy-8
---

# hooks/SIMPLIFY-IGNORE.md

## Purpose — required, verbatim
> "Block-level protection for `/code-simplify`. Mark code that should never be simplified — the model won't see it." — hooks/SIMPLIFY-IGNORE.md:3

## Design intent — required
Provides architectural documentation and operational setup guidance for a block-level content masking mechanism designed to shield sensitive, performance-critical, or manually optimized code blocks from automated LLM refactoring during `/code-simplify` invocations. It demonstrates configuring Claude Code hooks (`PreToolUse Read`, `PostToolUse Edit|Write`, `Stop`) to replace protected code blocks with placeholder hashes during read operations, expand them during write operations, and restore original code on session termination or manual crash recovery. Without it, users would risk LLM refactorings damaging delicate algorithms, breaking assembly/unrolled loops, or leaking sensitive blocks during code simplification.

## Phase — required
`addy:Review` (supports the `/code-simplify` command and `code-simplification` review skill during code modification)

## Inputs — required
- User-authored source files containing block annotations (`/* simplify-ignore-start */` ... `/* simplify-ignore-end */` with optional reason) (hooks/SIMPLIFY-IGNORE.md:9-17, 63-67)
- Configuration snippet for `.claude/settings.json` defining `PreToolUse`, `PostToolUse`, and `Stop` hooks (hooks/SIMPLIFY-IGNORE.md:21-43)
- Claude Code hook events (`PreToolUse Read`, `PostToolUse Edit|Write`, `Stop`) (hooks/SIMPLIFY-IGNORE.md:53-58)
- Environment variable `CLAUDE_PROJECT_DIR` (hooks/SIMPLIFY-IGNORE.md:27, 33, 38)

## Outputs — required
- Configuration instructions for `.claude/settings.json` and `.gitignore` (hooks/SIMPLIFY-IGNORE.md:19-47)
- Cache directory `.claude/.simplify-ignore-cache/` containing temporary backups and block content files (hooks/SIMPLIFY-IGNORE.md:47, 79)
- In-place replacement of protected blocks with `BLOCK_<hash>` placeholders on disk during active sessions (hooks/SIMPLIFY-IGNORE.md:45, 55)
- Automatic restoration of original file content upon session `Stop` or manual crash recovery (hooks/SIMPLIFY-IGNORE.md:57, 73-77)
- Recovery file `<old-filename>.recovered` if a file is moved or deleted during refactoring (hooks/SIMPLIFY-IGNORE.md:86)

## Invokes — required
- script hooks/simplify-ignore.sh — hooks/SIMPLIFY-IGNORE.md:27, 33, 38, 76
- command /code-simplify — hooks/SIMPLIFY-IGNORE.md:3, 45
- config .claude/settings.json — hooks/SIMPLIFY-IGNORE.md:19
- directory .claude/.simplify-ignore-cache/ — hooks/SIMPLIFY-IGNORE.md:47, 79

## Invoked by — required
orphan (The file is completely unreferenced by README.md, CONTRIBUTING.md, plugin.json, hooks/hooks.json, or any skill/command in sources/addy. It documents an opt-in hook setup that requires manual user configuration.)

## Concepts named — required, verbatim
- `simplify-ignore hook` — hooks/SIMPLIFY-IGNORE.md:1 — defined here
- `Block-level protection` — hooks/SIMPLIFY-IGNORE.md:3 — defined here
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
- `Crash recovery` — hooks/SIMPLIFY-IGNORE.md:71 — defined here
- `Single-line blocks` — hooks/SIMPLIFY-IGNORE.md:83 — defined here
- `Fallback expansion` — hooks/SIMPLIFY-IGNORE.md:85 — defined here
- `.recovered` — hooks/SIMPLIFY-IGNORE.md:86 — defined here

## Structure
1. `# simplify-ignore hook` — hooks/SIMPLIFY-IGNORE.md:1
2. `## Setup` — hooks/SIMPLIFY-IGNORE.md:5
3. `## How it works` — hooks/SIMPLIFY-IGNORE.md:49
4. `## Annotation syntax` — hooks/SIMPLIFY-IGNORE.md:61
5. `## Crash recovery` — hooks/SIMPLIFY-IGNORE.md:71
6. `## Known limitations` — hooks/SIMPLIFY-IGNORE.md:81
7. `## Requirements` — hooks/SIMPLIFY-IGNORE.md:88

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
- `orphan` · hooks/SIMPLIFY-IGNORE.md:1: The file is unreferenced by `README.md`, `CONTRIBUTING.md`, `plugin.json`, `hooks/hooks.json`, or any skill/command in `sources/addy/`.
- `missing-path` · hooks/SIMPLIFY-IGNORE.md:27, 33, 38: The hook configuration example specifies `"bash \"${CLAUDE_PROJECT_DIR}/hooks/simplify-ignore.sh\""`, which assumes the `hooks/` directory was manually copied into `${CLAUDE_PROJECT_DIR}/hooks/`, whereas plugin installations reside in `${CLAUDE_PLUGIN_ROOT}/hooks/`.
- `doc-drift` · hooks/SIMPLIFY-IGNORE.md:76: The crash recovery command `echo '{}' | bash hooks/simplify-ignore.sh` assumes `hooks/simplify-ignore.sh` exists in the current working directory, which fails if run from another project directory without copying `hooks/`.

## Observations
- Ingenious workaround for LLM context filtering: hides sensitive or performance-critical blocks from Claude Code by replacing them with hash placeholders in-place on disk during `Read`, and dynamically reconstructing them during `Edit`/`Write` or restoring upon `Stop`.
- Lists 4 explicit edge-case limitations: single-line blocks hiding full lines, comment suffix limitations for ERB/Blade closers, progressive fallback heuristics on modified placeholder tokens, and file renaming leaving placeholders.

## Context cost
3,863 bytes (~960 tokens).
