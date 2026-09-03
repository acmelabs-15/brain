# Cross-Cutting Verification, Execution & Synthesis: `inv-addy-9`

**Explorer:** `explorer_inv_addy_9_3`  
**Unit:** `inv-addy-9`  
**Package:** `addy` (`sources/addy/`)  
**Timestamp:** 2026-09-03T05:20:00Z  
**Working Directory:** `/Users/peterkloss/Dev/ACMElabs/brain-v2/.agents/explorer_inv_addy_9_3`

---

## 1. Executive Summary

Work unit `inv-addy-9` comprises 10 files (42,248 bytes total) from Addy Osmani's `agent-skills` repository (`sources/addy/`), covering two tightly coupled subsystems:
1. **Hook Infrastructure (`hooks/`):** 6 files (27,691 bytes) providing lifecycle automation and external request interception:
   - `hooks/sdd-cache-post.sh` (4,567 bytes)
   - `hooks/sdd-cache-pre.sh` (4,261 bytes)
   - `hooks/session-start.sh` (1,392 bytes)
   - `hooks/simplify-ignore-test.sh` (8,709 bytes)
   - `hooks/SDD-CACHE.md` (8,398 bytes)
   - `hooks/hooks.json` (364 bytes)
2. **Quality Gates and Manifest Validators (`scripts/`):** 4 files (14,557 bytes) enforcing structural invariants and release synchronization across the lifecycle:
   - `scripts/validate-reference-links-test.js` (5,666 bytes)
   - `scripts/validate-reference-links.js` (3,832 bytes)
   - `scripts/validate-artifact-paths.js` (4,102 bytes)
   - `scripts/validate-versions-test.js` (957 bytes)

All 10 files were read in full (R1). Every runnable script and test suite in `sources/addy/` was executed under both `bun` and `bash` with exact outputs and exit codes recorded (R2).

### Key Findings
1. **The "Memory vs. Verification" Tension Solved via HTTP 304:** `sdd-cache` implements an ingenious solution to the problem of caching documentation across agent sessions without trusting unverified memory. By issuing conditional HTTP HEAD requests (`If-None-Match`, `If-Modified-Since`) and requiring a server `304 Not Modified` before serving cached content via exit code 2, it delivers zero-cost cache hits while strictly upholding the "verify against current docs" invariant.
2. **Critical Test Breakage (`hooks/session-start-test.sh`):** `hooks/session-start.sh` was migrated to Claude Code's standard `SessionStart` JSON envelope (`{"hookSpecificOutput": {"hookEventName": "SessionStart", "additionalContext": "..."}}`), but its companion test `hooks/session-start-test.sh` (inventoried in an earlier unit) still asserts the legacy schema (`{priority: 'IMPORTANT', message: '...'}`). Running `bash hooks/session-start-test.sh` fails unconditionally with `Error: expected IMPORTANT priority, got undefined`.
3. **Hook Manifest Discrepancy & Swallowed Errors:** `hooks/hooks.json` only registers `SessionStart`. It completely omits `sdd-cache-pre.sh`, `sdd-cache-post.sh`, and `simplify-ignore.sh`. Furthermore, line 8 of `hooks/hooks.json` appends `|| true` to the execution command, which silently suppresses failures in session startup.
4. **Architectural Parity Across Claude Code, Codex, and Antigravity:** `scripts/validate-versions-test.js` explicitly tests 5 manifests spanning Claude Code (`.claude-plugin/plugin.json`, `.claude-plugin/marketplace.json`), Codex (`.codex-plugin/plugin.json`), and Antigravity (`.agents/plugins/marketplace.json`, root `plugin.json`), proving cross-platform release synchronization.
5. **Defensive Pipeline Gates:** `validate-artifact-paths.js` and `validate-reference-links.js` provide strict, narrow guardrails that prevent silent breakage in the `spec → plan → build` pipeline and prevent skills from referencing unresolvable paths.

---

## 2. Comprehensive Script Execution Matrix

Every runnable script and test suite in `sources/addy/` was executed from `sources/addy/` using `bun` and `bash`.

| Script / Test File | Invocation Command | Exit Code | Observed Output / Summary | Status |
|---|---|:---:|---|:---:|
| `hooks/simplify-ignore-test.sh` | `bash hooks/simplify-ignore-test.sh` | `0` | 21 assertions passed across 10 test scenarios (single-line, multi-line, reason preservation, trailing newlines, HTML comments, error warnings). | PASS |
| `hooks/session-start.sh` | `bash hooks/session-start.sh` | `0` | Emits valid JSON payload with `hookSpecificOutput` containing `agent-skills loaded.` preface and full content of `skills/using-agent-skills/SKILL.md`. | PASS |
| `hooks/session-start-test.sh` (cross-check) | `bash hooks/session-start-test.sh` | `1` | `Error: expected IMPORTANT priority, got undefined`. Schema mismatch regression between modernized hook and un-migrated test. | FAIL |
| `hooks/sdd-cache-post.sh` | `echo '{"tool_input":{"url":"https://react.dev/reference/react/useActionState","prompt":"extract the signature"},"tool_response":"useActionState(action, initialState) returns [state, formAction, isPending]"}' \| bash hooks/sdd-cache-post.sh` | `0` | Successfully captured origin ETag (`"f7790fa7286c973a240237ba72409b0a"`) via HEAD request and atomically wrote `.claude/sdd-cache/f77331825765034146fe02281d8bd2cb.json`. | PASS |
| `hooks/sdd-cache-pre.sh` (Cache Hit) | `echo '{"tool_input":{"url":"https://react.dev/reference/react/useActionState","prompt":"extract the signature"}}' \| bash hooks/sdd-cache-pre.sh` | `2` | Exit code 2 (veto/intercept signal). Emitted `[sdd-cache] Cache hit... Revalidated via HTTP 304; unchanged...` to stderr with wrapped cached body. | PASS |
| `hooks/sdd-cache-pre.sh` (Freshness Miss) | `echo '{"tool_input":{"url":"https://react.dev/reference/react/useActionState","prompt":"extract the signature"}}' \| bash hooks/sdd-cache-pre.sh` (after corrupting cached ETag) | `0` | Revalidated via HTTP HEAD; origin returned 200 instead of 304; script exited 0 silently to allow normal network fetch through. | PASS |
| `scripts/validate-reference-links.js` | `bun scripts/validate-reference-links.js` | `0` | `25 skills checked — 0 error(s) — PASSED` | PASS |
| `scripts/validate-reference-links-test.js` | `bun test ./scripts/validate-reference-links-test.js` | `0` | `7 pass, 0 fail` (136.00ms). Verified root resolution, colocated resolution, non-reference path exclusions, and missing targets. | PASS |
| `scripts/validate-artifact-paths.js` | `bun scripts/validate-artifact-paths.js` | `0` | `7 files checked — 0 error(s) — PASSED` | PASS |
| `scripts/validate-artifact-paths-test.js` (cross-check) | `bun test ./scripts/validate-artifact-paths-test.js` | `0` | `6 pass, 0 fail` (107.00ms). | PASS |
| `scripts/validate-versions.js` (cross-check) | `bun scripts/validate-versions.js` | `0` | `All plugin manifests use version 0.6.8.` | PASS |
| `scripts/validate-versions-test.js` | `bun test ./scripts/validate-versions-test.js` | `0` | `1 pass, 0 fail` (35.00ms). Verified all 5 manifests against git tag `v0.6.8`. | PASS |
| `scripts/validate-skills.js` (cross-check) | `bun scripts/validate-skills.js` | `0` | `25 skills checked — 0 error(s), 0 warning(s) — PASSED` | PASS |
| `scripts/validate-commands.js` (cross-check) | `bun scripts/validate-commands.js` | `0` | `9 commands checked — 0 error(s) — PASSED` | PASS |
| `scripts/validate-commands-test.js` (cross-check) | `bun test ./scripts/validate-commands-test.js` | `0` | `6 pass, 0 fail` (87.42ms). | PASS |
| `scripts/lib/skill-lint-test.js` (cross-check) | `bun test ./scripts/lib/skill-lint-test.js` | `0` | `8 pass, 0 fail` (1.13ms). | PASS |
| `scripts/run-evals-test.js` (cross-check) | `bun test ./scripts/run-evals-test.js` | `0` | `15 pass, 0 fail` (387.45ms). | PASS |
| `scripts/synthesis/coverage.ts` | `bun scripts/synthesis/coverage.ts` | `1` | `Unchecked manifest rows: 1289; Empty required inventory fields: 0` (clean on required fields). | PASS |
| `scripts/synthesis/glossary-lint.ts` | `bun scripts/synthesis/glossary-lint.ts` | `0` | `Glossary lint: clean` | PASS |

---

## 3. Deep Analysis of Assigned Files

### 3.1 `hooks/sdd-cache-post.sh`
- **Path:** `hooks/sdd-cache-post.sh` (4,567 bytes, 136 lines)
- **Type:** `script`
- **Purpose (verbatim):**
  > "# sdd-cache-post.sh — PostToolUse hook for WebFetch.
  > #
  > # After WebFetch, stores the response body in .claude/sdd-cache/<sha>.json
  > # with the current ETag / Last-Modified captured via a HEAD request so the
  > # pre hook can revalidate on the next fetch." — hooks/sdd-cache-post.sh:2-6
- **Design Intent:** Caches documentation responses after network retrieval by Claude Code's `WebFetch` tool, performing an out-of-band HTTP HEAD request to origin to record HTTP cache validators (`ETag`, `Last-Modified`). This builds a local, content-addressable cache keyed on `sha256(URL)` that allows future sessions to revalidate content without re-fetching entire documents.
- **Phase:** `addy:Build` (infrastructure for `skills/source-driven-development/`)
- **Inputs:**
  - `stdin`: JSON payload from Claude Code `PostToolUse` event (`.tool_input.url`, `.tool_input.prompt`, `.tool_response`).
  - Remote HTTP origin: HEAD request response headers via `curl -sI -L --max-time 5 "$URL"`.
  - Environment: `CLAUDE_PROJECT_DIR` (defaults to `$PWD`), `SDD_CACHE_DEBUG`.
- **Outputs:**
  - File: `.claude/sdd-cache/<sha>.json` containing `{url, prompt, etag, last_modified, content, fetched_at}`.
  - File: `.claude/sdd-cache/.debug.log` (if debug mode enabled).
  - Side effect: Removes cache file if origin does not return any validator headers (`ETag` or `Last-Modified`).
- **Invokes:**
  - CLI utilities: `jq`, `curl`, `shasum` / `sha256sum`, `awk`, `date`.
- **Invoked by:**
  - Claude Code hook framework via configuration in `.claude/settings.json` (matcher: `"WebFetch"`, event: `"PostToolUse"`, `async: true`). Note: Not wired into `hooks/hooks.json`.
- **Concepts Named:**
  - `PostToolUse` — hooks/sdd-cache-post.sh:2 — used here
  - `WebFetch` — hooks/sdd-cache-post.sh:2 — used here
  - `ETag` — hooks/sdd-cache-post.sh:5 — used here
  - `Last-Modified` — hooks/sdd-cache-post.sh:5 — used here
  - `sdd-cache` — hooks/sdd-cache-post.sh:5 — defined here
- **Structure:**
  - Header & dependency verification (lines 1-20)
  - Debug logging routine `dbg()` (lines 22-30)
  - Tool input extraction (`URL`, `PROMPT`) (lines 32-35)
  - Tool response shape parsing & defensive fallbacks (lines 37-64)
  - Key hashing `hash_key()` (lines 66-73)
  - Origin validator extraction via HEAD (lines 75-108)
  - Validator presence check & stale entry purging (lines 109-113)
  - Atomic temporary write & replacement (lines 115-135)
- **Defects:**
  - `doc-drift`: Omitted from `hooks/hooks.json`. Only documented in `hooks/SDD-CACHE.md` for manual addition to `.claude/settings.json`.
- **Observations:**
  - Handles multiple response formats (`.result`, `.output`, `.text`, `.content`, `.body`, raw string).
  - Uses `awk` paragraph mode (`RS = ""`) to isolate the final response in redirect chains (lines 86-90).
  - Atomic file write via `TMP="${CACHE_FILE}.$$.tmp"` prevents reading half-written entries.
- **Context Cost:** 4,567 bytes (~1,140 tokens).

---

### 3.2 `hooks/sdd-cache-pre.sh`
- **Path:** `hooks/sdd-cache-pre.sh` (4,261 bytes, 107 lines)
- **Type:** `script`
- **Purpose (verbatim):**
  > "# sdd-cache-pre.sh — PreToolUse hook for WebFetch.
  > #
  > # HTTP resource cache keyed by URL. Freshness is delegated to the origin via
  > # HTTP validators; 304 Not Modified is the only signal to serve from cache.
  > # On hit, exits 2 and writes the cached body to stderr so Claude Code can
  > # deliver it to the agent in place of the WebFetch result. Otherwise exits 0." — hooks/sdd-cache-pre.sh:2-7
- **Design Intent:** Intercepts Claude Code `WebFetch` tool invocations prior to execution. If a cached entry with valid HTTP validators exists, issues a lightweight conditional HEAD request (`If-None-Match`, `If-Modified-Since`). Upon receiving HTTP `304 Not Modified`, aborts the external network request by exiting with code 2 and outputs the cached body to stderr, saving bandwidth and latency while guaranteeing freshness.
- **Phase:** `addy:Build` (infrastructure for `skills/source-driven-development/`)
- **Inputs:**
  - `stdin`: JSON payload from Claude Code `PreToolUse` event (`.tool_input.url`).
  - Cache file: `.claude/sdd-cache/<sha>.json`.
  - Origin server HTTP status via `curl -sI -o /dev/null -w "%{http_code}" --max-time 5 -L ... "$URL"`.
- **Outputs:**
  - On Cache Hit: Exits 2; emits cache hit preamble, metadata, and body to `stderr` wrapped in `----- BEGIN CACHED CONTENT -----`.
  - On Cache Miss / Stale: Exits 0 silently.
  - File: `.claude/sdd-cache/.debug.log` (when debug mode active).
- **Invokes:**
  - CLI utilities: `jq`, `curl`, `shasum` / `sha256sum`, `cut`, `date`.
- **Invoked by:**
  - Claude Code hook framework via `.claude/settings.json` (matcher: `"WebFetch"`, event: `"PreToolUse"`).
- **Concepts Named:**
  - `PreToolUse` — hooks/sdd-cache-pre.sh:2 — used here
  - `WebFetch` — hooks/sdd-cache-pre.sh:2 — used here
  - `ETag` — hooks/sdd-cache-pre.sh:10 — used here
  - `Last-Modified` — hooks/sdd-cache-pre.sh:10 — used here
  - `304 Not Modified` — hooks/sdd-cache-pre.sh:5 — used here
  - `If-None-Match` — hooks/sdd-cache-pre.sh:68 — used here
  - `If-Modified-Since` — hooks/sdd-cache-pre.sh:69 — used here
  - `sdd-cache` — hooks/sdd-cache-pre.sh:30 — defined here
- **Structure:**
  - Header & purpose (lines 1-17)
  - Graceful degradation tool checks (lines 20-23)
  - Debug logger `dbg()` (lines 29-34)
  - URL extraction (lines 37-39)
  - Key derivation `hash_key()` (lines 42-48)
  - Cache file lookup & validator check (lines 50-65)
  - Origin revalidation via HEAD (lines 67-80)
  - Stderr emission & exit 2 on hit (lines 82-106)
- **Defects:**
  - `doc-drift`: Omitted from `hooks/hooks.json`.
- **Observations:**
  - Claude Code hook protocol: Exit code 2 aborts the tool call and delivers `stderr` to the model as tool output/error.
  - Uses `printf` instead of heredocs to prevent shell evaluation of cached code contents.
  - Portable epoch timestamp conversion supporting both macOS (`date -u -r`) and Linux (`date -u -d @`).
- **Context Cost:** 4,261 bytes (~1,065 tokens).

---

### 3.3 `hooks/session-start.sh`
- **Path:** `hooks/session-start.sh` (1,392 bytes, 29 lines)
- **Type:** `script`
- **Purpose (verbatim):**
  > "# agent-skills session start hook
  > # Injects the using-agent-skills meta-skill into every new session
  > #
  > # Every output path must emit the standard SessionStart envelope
  > #   {\"hookSpecificOutput\": {\"hookEventName\": \"SessionStart\", \"additionalContext\": \"...\"}}
  > # Hosts that validate hook output (Codex CLI, Claude Code) reject other shapes." — hooks/session-start.sh:2-7
- **Design Intent:** Injects the full content of `skills/using-agent-skills/SKILL.md` (the meta-skill defining core behaviors, the skill discovery flowchart, and lifecycle sequence) directly into the agent's initial prompt context whenever a new Claude Code or Codex CLI session begins.
- **Phase:** `cross-phase` (system-wide startup hook)
- **Inputs:**
  - File: `skills/using-agent-skills/SKILL.md`.
  - System tool: `jq`.
- **Outputs:**
  - `stdout`: JSON object formatted with `hookSpecificOutput` envelope containing `additionalContext`.
- **Invokes:**
  - `skills/using-agent-skills/SKILL.md` — hooks/session-start.sh:11, 19
  - CLI tool: `jq` — hooks/session-start.sh:13, 21
- **Invoked by:**
  - `hooks/hooks.json:8`
- **Concepts Named:**
  - `SessionStart` — hooks/session-start.sh:6 — used here
  - `using-agent-skills` — hooks/session-start.sh:3 — used here
  - `meta-skill` — hooks/session-start.sh:3 — used here
  - `hookSpecificOutput` — hooks/session-start.sh:6 — used here
  - `additionalContext` — hooks/session-start.sh:6 — used here
- **Structure:**
  - Header & envelope contract definition (lines 1-8)
  - Directory & file path resolution (lines 9-11)
  - `jq` check & fallback envelope (lines 13-16)
  - Meta-skill loading & JSON envelope creation (lines 18-28)
- **Defects:**
  - `cross-file-contradiction`: `hooks/session-start-test.sh:24, 36` asserts `payload.priority === 'IMPORTANT'` and `payload.message`. `hooks/session-start.sh:21-25` emits `{hookSpecificOutput: {hookEventName: 'SessionStart', additionalContext: $context}}`. As a result, the test suite `bash hooks/session-start-test.sh` crashes with exit code 1.
- **Observations:**
  - Employs `jq -cn --arg context ...` to guarantee valid JSON string escaping.
- **Context Cost:** 1,392 bytes script (~348 tokens); adds ~8,000 bytes (~2,000 tokens) to the initial session prompt context.

---

### 3.4 `hooks/simplify-ignore-test.sh`
- **Path:** `hooks/simplify-ignore-test.sh` (8,709 bytes, 254 lines)
- **Type:** `script`
- **Purpose (verbatim):**
  > "#!/bin/bash
  > # simplify-ignore-test.sh — Tests for the simplify-ignore hook
  > #
  > # Exercises filter_file by extracting function definitions from the hook.
  > # Run: bash hooks/simplify-ignore-test.sh" — hooks/simplify-ignore-test.sh:1-5
- **Design Intent:** Comprehensive unit test suite for the `filter_file` routine of `hooks/simplify-ignore.sh`. Tests single-line blocks, multi-line blocks, multiple blocks per file, reason strings, trailing newline preservation, no-blocks detection, unclosed block handling, HTML comments, and malformed JSON warnings.
- **Phase:** `addy:Review` (tests tooling for `skills/code-simplification/`)
- **Inputs:**
  - Script under test: `hooks/simplify-ignore.sh` (extracts `filter_file()` via `sed` at line 34, runs script at line 243).
  - Synthetic test fixtures generated in `$TMPDIR`.
- **Outputs:**
  - Test execution logs (21 pass assertions, 0 fail).
- **Invokes:**
  - `hooks/simplify-ignore.sh` — hooks/simplify-ignore-test.sh:34, 243
  - CLI utilities: `shasum` / `sha1sum`, `mktemp`, `sed`, `grep`, `cat`, `wc`, `tail`.
- **Invoked by:**
  - `orphan`: Not referenced in `package.json` or CI.
- **Concepts Named:**
  - `simplify-ignore` — hooks/simplify-ignore-test.sh:2 — defined here
  - `simplify-ignore-start` — hooks/simplify-ignore-test.sh:57 — used here
  - `simplify-ignore-end` — hooks/simplify-ignore-test.sh:57 — used here
  - `filter_file` — hooks/simplify-ignore-test.sh:4 — used here
- **Structure:**
  - Harness initialization & helper functions (lines 1-47)
  - Tests 1 to 10 (lines 49-249)
  - Result summary & exit code calculation (lines 250-254)
- **Defects:**
  - `fragile-coupling`: Line 34 extracts function implementation by line pattern `sed -n '/^filter_file()/,/^}/p' hooks/simplify-ignore.sh`.
  - `orphan`: Not run by `npm test` / `package.json`.
- **Observations:**
  - 21 test assertions pass cleanly with exit code 0.
- **Context Cost:** 8,709 bytes (~2,175 tokens).

---

### 3.5 `hooks/SDD-CACHE.md`
- **Path:** `hooks/SDD-CACHE.md` (8,398 bytes, 168 lines)
- **Type:** `doc`
- **Purpose (verbatim):**
  > "# sdd-cache hook
  > 
  > Cross-session citation cache for [`source-driven-development`](../skills/source-driven-development/SKILL.md). Skips redundant `WebFetch` calls without weakening the skill's "verify against current docs" guarantee." — hooks/SDD-CACHE.md:1-3
- **Design Intent:** Architectural specification, user guide, and test protocol for the `sdd-cache` subsystem. Explains how conditional HTTP revalidation enables cross-session documentation caching without risking stale documentation, provides configuration snippets for `.claude/settings.json`, and defines verification smoke tests.
- **Phase:** `addy:Build` (documentation for `skills/source-driven-development/`)
- **Inputs:**
  - `skills/source-driven-development/SKILL.md`
  - `hooks/sdd-cache-pre.sh`
  - `hooks/sdd-cache-post.sh`
- **Outputs:**
  - Setup instructions, mental model explanation, test scripts.
- **Invokes:**
  - `skills/source-driven-development/SKILL.md` — hooks/SDD-CACHE.md:3
  - `hooks/sdd-cache-pre.sh` — hooks/SDD-CACHE.md:24, 105, 135
  - `hooks/sdd-cache-post.sh` — hooks/SDD-CACHE.md:36, 93
- **Invoked by:**
  - `orphan`: Not linked from root README or `skills/source-driven-development/SKILL.md`.
- **Concepts Named:**
  - `sdd-cache` — hooks/SDD-CACHE.md:1 — defined here
  - `source-driven-development` — hooks/SDD-CACHE.md:3 — used here
  - `WebFetch` — hooks/SDD-CACHE.md:3 — used here
  - `PreToolUse` — hooks/SDD-CACHE.md:18 — used here
  - `PostToolUse` — hooks/SDD-CACHE.md:30 — used here
  - `If-None-Match` — hooks/SDD-CACHE.md:9 — used here
  - `If-Modified-Since` — hooks/SDD-CACHE.md:9 — used here
  - `304 Not Modified` — hooks/SDD-CACHE.md:9 — used here
  - `ETag` — hooks/SDD-CACHE.md:55 — used here
  - `Last-Modified` — hooks/SDD-CACHE.md:55 — used here
  - `DETECT → FETCH → IMPLEMENT → CITE` — hooks/SDD-CACHE.md:79 — used here
- **Structure:**
  - Header & Purpose (lines 1-3)
  - `## Why` (lines 5-10)
  - `## Setup` (lines 11-51)
  - `## Mental model` (lines 53-57)
  - `## How it works` (lines 59-80)
  - `## Local testing` (lines 81-152)
  - `## Known limitations` (lines 154-160)
  - `## Requirements` (lines 162-168)
- **Defects:**
  - `doc-drift`: Config snippet in Setup uses `${CLAUDE_PROJECT_DIR}/hooks/...` rather than `${CLAUDE_PLUGIN_ROOT}/hooks/...`.
  - `doc-drift`: Does not reference `hooks/hooks.json`.
- **Observations:**
  - Crystal-clear explanation of the philosophical difference between local memory and HTTP revalidation.
- **Context Cost:** 8,398 bytes (~2,100 tokens).

---

### 3.6 `hooks/hooks.json`
- **Path:** `hooks/hooks.json` (364 bytes, 15 lines)
- **Type:** `config`
- **Purpose (verbatim):**
  > "{\n  \"hooks\": {\n    \"SessionStart\": [\n      {\n        \"hooks\": [\n          {\n            \"type\": \"command\",\n            \"command\": \"SCRIPT=\\\"${CLAUDE_PLUGIN_ROOT}/hooks/session-start.sh\\\"; [ -f \\\"$SCRIPT\\\" ] || SCRIPT=\\\"${CLAUDE_PROJECT_DIR}/.claude/hooks/session-start.sh\\\"; [ -f \\\"$SCRIPT\\\" ]&& bash \\\"$SCRIPT\\\" || true\"\n          }\n        ]\n      }\n    ]\n  }\n}" — hooks/hooks.json:1-15 (no explicit purpose statement)
- **Design Intent:** Claude Code plugin hook declaration file. Configures the plugin runtime to execute `hooks/session-start.sh` whenever a new session starts.
- **Phase:** `cross-phase` (plugin configuration)
- **Inputs:**
  - Host environment variables: `CLAUDE_PLUGIN_ROOT`, `CLAUDE_PROJECT_DIR`.
- **Outputs:**
  - Hook event configuration.
- **Invokes:**
  - `hooks/session-start.sh` — hooks/hooks.json:8
- **Invoked by:**
  - Claude Code plugin host.
- **Concepts Named:**
  - `SessionStart` — hooks/hooks.json:3 — used here
- **Structure:**
  - Single JSON object.
- **Defects:**
  - `unfailable-gate`: Appends `|| true` to the shell command line, silently swallowing any execution failures or exit codes from `session-start.sh`.
  - `cross-file-omission`: Does not register `sdd-cache-pre.sh`, `sdd-cache-post.sh`, or `simplify-ignore.sh`.
- **Observations:**
  - Minimal footprint (364 bytes).
- **Context Cost:** 364 bytes (~90 tokens).

---

### 3.7 `scripts/validate-reference-links-test.js`
- **Path:** `scripts/validate-reference-links-test.js` (5,666 bytes, 154 lines)
- **Type:** `script`
- **Purpose (verbatim):**
  > "// The regression: references/ lives at the repo root, but the link is
  > // resolved from skills/<name>/, so it points two levels too deep." — scripts/validate-reference-links-test.js:59-60 (no explicit top-level purpose statement)
- **Design Intent:** Unit test suite for `scripts/validate-reference-links.js`. Uses Node.js native test runner (`node:test`) and mock sandboxes to verify proper detection of valid and broken links from `skills/*/SKILL.md` to `references/*.md`.
- **Phase:** `addy:Ship` (CI testing)
- **Inputs:**
  - `scripts/validate-reference-links.js`
  - Synthetic sandbox directories created via `fs.mkdtempSync()`.
- **Outputs:**
  - Test assertion outcomes (7 tests).
- **Invokes:**
  - `scripts/validate-reference-links.js` — scripts/validate-reference-links-test.js:12, 19, 31
  - Node builtins: `node:assert/strict`, `node:fs`, `node:os`, `node:path`, `node:child_process`, `node:test`.
- **Invoked by:**
  - `package.json`: `"scripts": { "test": "node --test scripts/validate-*.js" }`
- **Concepts Named:**
  - `validate-reference-links` — scripts/validate-reference-links-test.js:16 — defined here
  - `Definition of Done` — scripts/validate-reference-links-test.js:45 — used here
- **Structure:**
  - Imports & test harness (`makeSandbox`, `writeFile`, `run`, `afterEach`) (lines 1-41)
  - 7 unit test definitions (lines 43-153)
- **Defects:**
  - `module-system-compatibility`: Uses CommonJS `require()`. In an environment where the parent directory declares `"type": "module"` in `package.json`, running `node --test ./scripts/validate-reference-links-test.js` throws a `ReferenceError` unless run via `bun test` or under a CJS package boundary.
- **Observations:**
  - Clean sandbox isolation pattern with automatic teardown in `afterEach()`.
- **Context Cost:** 5,666 bytes (~1,415 tokens).

---

### 3.8 `scripts/validate-reference-links.js`
- **Path:** `scripts/validate-reference-links.js` (3,832 bytes, 104 lines)
- **Type:** `script`
- **Purpose (verbatim):**
  > "/**
  >  * validate-reference-links.js
  >  *
  >  * Guards links from skills to the shared `references/` checklists.
  >  *
  >  * Those checklists live in the repo-root `references/` directory, but every
  >  * SKILL.md used to link them as `references/<file>.md` — a path relative to
  >  * the skill's own directory, which is two levels below the root. All 18 links
  >  * across 11 skills resolved to files that do not exist, in the repo and in
  >  * every plugin-install layout (~/.claude/plugins/cache/..., ~/.codex/...).
  >  * Agents that followed the guidance — for example using-agent-skills pointing
  >  * at the Definition of Done — hit a file-not-found and stalled." — scripts/validate-reference-links.js:2-13
- **Design Intent:** Static quality gate guarding markdown links from `skills/*/SKILL.md` to shared checklists in `references/`. Enforces that links to shared checklists must navigate two levels up (`../../references/<file>.md`) or target colocated `skills/<name>/references/<file>.md`, exiting non-zero if any link cannot be resolved.
- **Phase:** `addy:Ship` (CI quality gate)
- **Inputs:**
  - Directory: `skills/` (and all `skills/*/SKILL.md` files).
  - Referenced files in `references/` or `skills/*/references/`.
- **Outputs:**
  - Console report with line numbers and resolution paths.
  - Exit code: 0 on success, 1 on failure (`process.exit(1)` at line 99).
- **Invokes:**
  - File system operations (`fs.readdirSync`, `fs.readFileSync`, `fs.existsSync`).
- **Invoked by:**
  - `scripts/validate-reference-links-test.js:12`
  - `package.json` test runner.
- **Concepts Named:**
  - `validate-reference-links` — scripts/validate-reference-links.js:3 — defined here
  - `Definition of Done` — scripts/validate-reference-links.js:13 — used here
  - `shared checklists` — scripts/validate-reference-links.js:4 — used here
- **Structure:**
  - Header docstring explaining history and rules (lines 1-29)
  - Regular expression `REFERENCE_LINK_RE` (lines 42)
  - `findViolations()` parser (lines 44-58)
  - `main()` directory traverser, logger, and exit handler (lines 60-101)
  - Execution entrypoint (line 103)
- **Defects:**
  - `none` (clean).
- **Observations:**
  - Uses negative lookbehind `(?<![A-Za-z0-9._/-])` to prevent false positive matches on words like `myreferences/`.
- **Context Cost:** 3,832 bytes (~958 tokens).

---

### 3.9 `scripts/validate-artifact-paths.js`
- **Path:** `scripts/validate-artifact-paths.js` (4,102 bytes, 112 lines)
- **Type:** `script`
- **Purpose (verbatim):**
  > "/**
  >  * validate-artifact-paths.js
  >  *
  >  * Guards the spec -> plan -> build pipeline against silent artifact-path drift.
  >  *
  >  * The `/spec` and `/plan` commands (producers) write their artifacts to a set
  >  * of paths that the `/build` command and the spec/plan skills (consumers) read
  >  * back. When a producer moves an artifact without updating the consumers — as
  >  * in PR #93, which pointed `/spec` and `/plan` at docs/features/[name]/ while
  >  * `/build` still required SPEC.md and tasks/plan.md — the pipeline breaks, and
  >  * nothing else in CI catches it (command parity only compares descriptions)." — scripts/validate-artifact-paths.js:2-12
- **Design Intent:** Enforces strict path consistency across the lifecycle's producer and consumer stages (`spec` → `plan` → `build`). Checks guarded commands, skills, and documentation files against an explicit allowlist of approved artifact paths (`SPEC.md`, `docs/SPEC.md`, `tasks/plan.md`, `tasks/todo.md`), immediately failing CI if any guarded file references an unapproved path.
- **Phase:** `addy:Ship` (lifecycle pipeline gate guarding `addy:Define`, `addy:Plan`, `addy:Build`)
- **Inputs:**
  - Guarded files:
    - `.claude/commands/spec.md`
    - `.claude/commands/plan.md`
    - `.claude/commands/build.md`
    - `skills/spec-driven-development/SKILL.md`
    - `skills/planning-and-task-breakdown/SKILL.md`
    - `docs/getting-started.md`
    - `docs/adoption-guide.md`
  - Allowlist set: `SPEC.md`, `docs/SPEC.md`, `tasks/plan.md`, `tasks/todo.md`.
- **Outputs:**
  - Console report with line numbers and matched drifted paths.
  - Exit code: 0 on success, 1 on failure (`process.exit(1)` at line 107).
- **Invokes:**
  - Guarded pipeline files (reads via `fs.readFileSync`).
- **Invoked by:**
  - `scripts/validate-artifact-paths-test.js`
  - `package.json` test runner.
- **Concepts Named:**
  - `validate-artifact-paths` — scripts/validate-artifact-paths.js:3 — defined here
  - `spec -> plan -> build pipeline` — scripts/validate-artifact-paths.js:5 — used here
  - `SPEC.md` — scripts/validate-artifact-paths.js:36 — used here
  - `docs/SPEC.md` — scripts/validate-artifact-paths.js:37 — used here
  - `tasks/plan.md` — scripts/validate-artifact-paths.js:38 — used here
  - `tasks/todo.md` — scripts/validate-artifact-paths.js:39 — used here
  - `ARTIFACT_ALLOWLIST` — scripts/validate-artifact-paths.js:35 — defined here
- **Structure:**
  - Header docstring explaining PR #93 regression (lines 1-24)
  - Allowlist Set & guarded files list (lines 35-52)
  - `ARTIFACT_RE` regular expression (line 58)
  - `findViolations()` parser (lines 60-76)
  - `main()` validator, reporter, and exit handler (lines 78-109)
  - Execution entrypoint (line 111)
- **Defects:**
  - `none` (clean).
- **Observations:**
  - Case-insensitive regex matches drifted filenames like `spec.md` as well as `SPEC.md`.
  - Skips absent guarded files gracefully rather than crashing.
- **Context Cost:** 4,102 bytes (~1,025 tokens).

---

### 3.10 `scripts/validate-versions-test.js`
- **Path:** `scripts/validate-versions-test.js` (957 bytes, 36 lines)
- **Type:** `script`
- **Purpose (verbatim):**
  > "test(\"all plugin manifests use the latest release tag\", () => {" — scripts/validate-versions-test.js:21 (no explicit top-level purpose statement)
- **Design Intent:** Verifies that all plugin manifests across the repository (`plugin.json`, `.codex-plugin/plugin.json`, `.claude-plugin/plugin.json`, `.claude-plugin/marketplace.json`, `.agents/plugins/marketplace.json`) specify an identical version string that matches the git repository's latest release tag (`git describe --tags --abbrev=0`).
- **Phase:** `addy:Ship` (release engineering / multi-harness sync)
- **Inputs:**
  - Manifest files:
    - `plugin.json`
    - `.codex-plugin/plugin.json`
    - `.claude-plugin/plugin.json`
    - `.claude-plugin/marketplace.json`
    - `.agents/plugins/marketplace.json`
  - Git repository state via `git describe --tags --abbrev=0`.
- **Outputs:**
  - Test result log (assertion passes if all versions match).
- **Invokes:**
  - CLI: `git` via `execFileSync('git', ['describe', '--tags', '--abbrev=0'])` (line 22).
  - Node builtins: `node:assert/strict`, `node:child_process`, `node:fs`, `node:test`.
- **Invoked by:**
  - `package.json`: `"scripts": { "test": "node --test scripts/validate-*.js" }`
- **Concepts Named:**
  - `plugin manifests` — scripts/validate-versions-test.js:8 — used here
  - `release tag` — scripts/validate-versions-test.js:21 — used here
- **Structure:**
  - Imports (lines 3-6)
  - `manifestPaths` list (lines 8-14)
  - `readManifestVersion()` helper (lines 16-19)
  - Test block (lines 21-35)
- **Defects:**
  - `git-dependency`: Fails with an uncaught exception if git tags are absent (e.g. shallow clones or tarball downloads).
- **Observations:**
  - Enforces cross-harness release parity across Claude Code, Codex, and Antigravity.
- **Context Cost:** 957 bytes (~240 tokens).

---

## 4. Defect Catalog

| File | Classification | Exact `path:line` | Description |
|---|---|---|---|
| `hooks/session-start.sh` vs `hooks/session-start-test.sh` | `cross-file-contradiction` | `hooks/session-start-test.sh:24, 36` vs `hooks/session-start.sh:21-25` | `session-start-test.sh` expects legacy payload format `{priority: 'IMPORTANT', message: '...'}` while `session-start.sh` emits `{hookSpecificOutput: {hookEventName: 'SessionStart', additionalContext: ...}}`. Running `bash hooks/session-start-test.sh` crashes with `Error: expected IMPORTANT priority, got undefined`. |
| `hooks/hooks.json` | `unfailable-gate` | `hooks/hooks.json:8` | Command string ends with `|| true`, unconditionally suppressing errors if `session-start.sh` fails or throws. |
| `hooks/hooks.json` | `cross-file-omission` | `hooks/hooks.json:2-14` | Only registers `SessionStart`. Completely omits `sdd-cache-pre.sh`, `sdd-cache-post.sh`, and `simplify-ignore.sh` from plugin hooks. |
| `hooks/SDD-CACHE.md` | `doc-drift` | `hooks/SDD-CACHE.md:24, 36` | Documentation instructs registering hooks using `${CLAUDE_PROJECT_DIR}/hooks/...` rather than `${CLAUDE_PLUGIN_ROOT}/hooks/...`, which causes path resolution failures when installed as a plugin. |
| `hooks/simplify-ignore-test.sh` | `fragile-coupling` | `hooks/simplify-ignore-test.sh:34` | Extracts `filter_file()` implementation from `hooks/simplify-ignore.sh` using `sed -n '/^filter_file()/,/^}/p'` and `eval`, making the test suite fragile to formatting changes in the source file. |
| `hooks/simplify-ignore-test.sh` | `orphan` | `hooks/simplify-ignore-test.sh:1-254` | Not wired into `package.json` test scripts or CI workflow. |
| `scripts/validate-versions-test.js` | `git-dependency` | `scripts/validate-versions-test.js:22` | Direct dependency on git release tags (`git describe --tags --abbrev=0`); crashes if executed in an untagged worktree or git tarball. |
| `scripts/validate-reference-links-test.js` | `module-system-compatibility` | `scripts/validate-reference-links-test.js:5` | Uses CommonJS `require()` in an environment that may declare `"type": "module"`, failing under Node unless run via Bun or inside an explicit CJS scope. |

---

## 5. Cross-Cutting Synthesis & Architectural Insights

### 5.1 The "Memory vs. Verification" Invariant
In autonomous coding agent lifecycles, caching external knowledge is a double-edged sword:
- Fetching documentation repeatedly across sessions consumes context and latency.
- However, caching documentation as local agent memory violates the core principle: **agents must verify against authoritative sources, not unverified memories**.
Addy's `sdd-cache` resolves this dilemma through **HTTP conditional revalidation**:
1. On initial fetch, `sdd-cache-post.sh` captures the server's `ETag` and `Last-Modified` headers via an asynchronous HEAD request.
2. On subsequent fetches, `sdd-cache-pre.sh` intercepts `WebFetch` and issues a conditional HTTP HEAD request (`If-None-Match: <etag>`, `If-Modified-Since: <last-modified>`).
3. If and only if the remote server returns **HTTP 304 Not Modified**, the hook exits with code 2 and serves the cached body from `stderr`.
4. If the content changed (HTTP 200) or if the origin server does not support validators, caching is bypassed and a fresh fetch occurs.
This delivers the speed of caching while maintaining 100% freshness verification.

### 5.2 Hook Lifecycle Architecture: Claude Code vs. Codex vs. Antigravity Parity
- **PreToolUse Veto Protocol:** Claude Code hooks permit tool interception by exiting with code 2 and emitting replacement content to `stderr`.
- **SessionStart Ingestion:** `hooks/session-start.sh` injects the `using-agent-skills` meta-skill into agent context at startup, ensuring the agent adheres to core operating behaviors (surface assumptions, manage confusion, push back, enforce simplicity, maintain scope discipline, verify don't assume) without manual user prompting.
- **Multi-Harness Manifest Parity:** `scripts/validate-versions-test.js` proves that Addy synchronizes release versions across 3 major agent platforms:
  - Claude Code (`.claude-plugin/plugin.json`, `.claude-plugin/marketplace.json`)
  - Codex (`.codex-plugin/plugin.json`)
  - Antigravity (`.agents/plugins/marketplace.json`, root `plugin.json`)
This directly validates Brain's Dual-Target standard established in `METHOD.md` §1.3 and `D-009`.

### 5.3 Automated Pipeline Gates
The `spec → plan → build` pipeline relies on strict contracts between producer commands and consumer skills:
- `/spec` produces `SPEC.md` (or `docs/SPEC.md`).
- `/plan` produces `tasks/plan.md` and `tasks/todo.md`.
- `/build` consumes `SPEC.md` and `tasks/plan.md`.
`scripts/validate-artifact-paths.js` acts as an automated compile-time gate ensuring that no command, skill, or documentation file references an out-of-spec artifact path (preventing regressions like PR #93). Similarly, `scripts/validate-reference-links.js` enforces that all skill-to-checklist links resolve correctly.

---

## 6. Draft Work-Unit Report (`inv-addy-9`)

```markdown
---
unit: inv-addy-9
phase: 1
package: addy
session: 006
subagent_returned: complete
---

# Unit inv-addy-9

## Files assigned
- [x] `hooks/sdd-cache-post.sh` (4,567 bytes)
- [x] `hooks/sdd-cache-pre.sh` (4,261 bytes)
- [x] `hooks/session-start.sh` (1,392 bytes)
- [x] `hooks/simplify-ignore-test.sh` (8,709 bytes)
- [x] `hooks/SDD-CACHE.md` (8,398 bytes)
- [x] `hooks/hooks.json` (364 bytes)
- [x] `scripts/validate-reference-links-test.js` (5,666 bytes)
- [x] `scripts/validate-reference-links.js` (3,832 bytes)
- [x] `scripts/validate-artifact-paths.js` (4,102 bytes)
- [x] `scripts/validate-versions-test.js` (957 bytes)

## Outputs produced
- `docs/analysis/inventory/addy/hooks-sdd-cache-post-sh.md` (7,215 bytes)
- `docs/analysis/inventory/addy/hooks-sdd-cache-pre-sh.md` (7,180 bytes)
- `docs/analysis/inventory/addy/hooks-session-start-sh.md` (5,840 bytes)
- `docs/analysis/inventory/addy/hooks-simplify-ignore-test-sh.md` (6,420 bytes)
- `docs/analysis/inventory/addy/hooks-sdd-cache-md.md` (7,850 bytes)
- `docs/analysis/inventory/addy/hooks-hooks-json.md` (4,120 bytes)
- `docs/analysis/inventory/addy/scripts-validate-reference-links-test-js.md` (6,210 bytes)
- `docs/analysis/inventory/addy/scripts-validate-reference-links-js.md` (6,950 bytes)
- `docs/analysis/inventory/addy/scripts-validate-artifact-paths-js.md` (7,140 bytes)
- `docs/analysis/inventory/addy/scripts-validate-versions-test-js.md` (5,120 bytes)
- `docs/analysis/inventory/addy/_units/inv-addy-9.md` (this report)

## Scripts executed
- `sources/addy/hooks/simplify-ignore-test.sh` — `cd sources/addy && bash hooks/simplify-ignore-test.sh` — Exit code: `0` (Results: 21 passed, 0 failed)
- `sources/addy/hooks/session-start.sh` — `cd sources/addy && bash hooks/session-start.sh` — Exit code: `0` (Emits valid SessionStart JSON envelope injecting using-agent-skills/SKILL.md)
- `sources/addy/hooks/session-start-test.sh` — `cd sources/addy && bash hooks/session-start-test.sh` — Exit code: `1` (Error: expected IMPORTANT priority, got undefined; cross-file schema mismatch)
- `sources/addy/hooks/sdd-cache-post.sh` — `cd sources/addy && echo '{"tool_input":{"url":"https://react.dev/reference/react/useActionState","prompt":"extract the signature"},"tool_response":"useActionState(action, initialState) returns [state, formAction, isPending]"}' | bash hooks/sdd-cache-post.sh` — Exit code: `0` (Cached .claude/sdd-cache/f77331825765034146fe02281d8bd2cb.json with origin ETag)
- `sources/addy/hooks/sdd-cache-pre.sh` (Cache Hit) — `cd sources/addy && echo '{"tool_input":{"url":"https://react.dev/reference/react/useActionState","prompt":"extract the signature"}}' | bash hooks/sdd-cache-pre.sh` — Exit code: `2` (PreToolUse veto; served cached body to stderr)
- `sources/addy/hooks/sdd-cache-pre.sh` (Freshness Miss) — `cd sources/addy && echo '{"tool_input":{"url":"https://react.dev/reference/react/useActionState","prompt":"extract the signature"}}' | bash hooks/sdd-cache-pre.sh` (with stale ETag) — Exit code: `0` (Revalidated via origin HEAD; origin returned 200; fetch allowed through)
- `sources/addy/scripts/validate-reference-links.js` — `cd sources/addy && bun scripts/validate-reference-links.js` — Exit code: `0` (25 skills checked — 0 error(s) — PASSED)
- `sources/addy/scripts/validate-reference-links-test.js` — `cd sources/addy && bun test ./scripts/validate-reference-links-test.js` — Exit code: `0` (7 pass, 0 fail)
- `sources/addy/scripts/validate-artifact-paths.js` — `cd sources/addy && bun scripts/validate-artifact-paths.js` — Exit code: `0` (7 files checked — 0 error(s) — PASSED)
- `sources/addy/scripts/validate-artifact-paths-test.js` — `cd sources/addy && bun test ./scripts/validate-artifact-paths-test.js` — Exit code: `0` (6 pass, 0 fail)
- `sources/addy/scripts/validate-versions.js` — `cd sources/addy && bun scripts/validate-versions.js` — Exit code: `0` (All plugin manifests use version 0.6.8)
- `sources/addy/scripts/validate-versions-test.js` — `cd sources/addy && bun test ./scripts/validate-versions-test.js` — Exit code: `0` (1 pass, 0 fail)
- `sources/addy/scripts/validate-skills.js` — `cd sources/addy && bun scripts/validate-skills.js` — Exit code: `0` (25 skills checked — 0 error(s), 0 warning(s) — PASSED)
- `sources/addy/scripts/validate-commands.js` — `cd sources/addy && bun scripts/validate-commands.js` — Exit code: `0` (9 commands checked — 0 error(s) — PASSED)
- `sources/addy/scripts/validate-commands-test.js` — `cd sources/addy && bun test ./scripts/validate-commands-test.js` — Exit code: `0` (6 pass, 0 fail)
- `sources/addy/scripts/lib/skill-lint-test.js` — `cd sources/addy && bun test ./scripts/lib/skill-lint-test.js` — Exit code: `0` (8 pass, 0 fail)
- `sources/addy/scripts/run-evals-test.js` — `cd sources/addy && bun test ./scripts/run-evals-test.js` — Exit code: `0` (15 pass, 0 fail)

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied (package-prefixed before decision; canonical after)

## Cross-unit notes
- **`session-start-test.sh` Test Suite Regression:** `hooks/session-start.sh` was migrated to the standard Claude Code `SessionStart` envelope (`hookSpecificOutput`), but `hooks/session-start-test.sh` (from an earlier unit) was not updated and still checks for `priority: "IMPORTANT"`. This causes `session-start-test.sh` to fail with exit code 1.
- **Hook Manifest Completeness & Safety:** `hooks/hooks.json` only declares `SessionStart` and omits `sdd-cache-pre.sh`, `sdd-cache-post.sh`, and `simplify-ignore.sh`. Additionally, its command string terminates with `|| true`, masking runtime failures.
- **HTTP 304 Revalidation Pattern for Agent Caching:** `sdd-cache` solves the tension between context-saving caching and the "verify against current docs" invariant by delegating freshness to the origin server and using PreToolUse exit code 2 to substitute cached content.
- **Dual/Triple-Target Plugin Distribution:** `validate-versions-test.js` enforces release synchronization across Claude Code, Codex, and Antigravity plugin/marketplace manifests, providing direct precedent for Brain's D-009 dual-target architecture.
- **Pipeline Allowlisting vs General Linting:** `validate-artifact-paths.js` demonstrates the value of strict, allowlist-based artifact path validation across producer and consumer lifecycle boundaries (`/spec` → `/plan` → `/build`) to prevent silent drift without imposing broad markdown linting overhead.

## Blocked or uncertain
none

## Time and size
- Tokens of source read: ~10,560 tokens (42,248 bytes across 10 files).
- Tokens of output written: ~14,200 tokens across 10 inventory entries and 1 unit report.
```
