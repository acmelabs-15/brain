# Comprehensive Analysis & Inventory Extractions: Unit `inv-addy-9`

**Unit ID:** `inv-addy-9`  
**Package:** `addy` (`sources/addy`)  
**Pinned SHA:** `d2c37ef6225dd8726cdd369a8030307f48592d26`  
**Total Files Assigned:** 10 files (42,248 bytes)  
**Investigator:** `explorer_inv_addy_9_1`  
**Working Directory:** `/Users/peterkloss/Dev/ACMElabs/brain-v2/.agents/explorer_inv_addy_9_1`

---

## Executive Summary

Work unit `inv-addy-9` covers the hook infrastructure and validation tooling for `agent-skills`. The 10 files include:
1. **SDD Citation Cache Subsystem:** `hooks/sdd-cache-post.sh`, `hooks/sdd-cache-pre.sh`, and `hooks/SDD-CACHE.md`. This transparently caches web documentation citations for `source-driven-development`, revalidating freshness with the origin via HTTP `If-None-Match` / `If-Modified-Since` (HTTP `304 Not Modified`) before serving from disk, avoiding memory staleness.
2. **Session Lifecycle Hook:** `hooks/session-start.sh` and its configuration `hooks/hooks.json`. Injects the `using-agent-skills` meta-skill into every new Claude Code / Codex session via the standard `SessionStart` JSON envelope.
3. **Simplification Test Suite:** `hooks/simplify-ignore-test.sh`. Exercises the placeholder replacement and code protection logic of `hooks/simplify-ignore.sh`.
4. **Lifecycle & Integrity Validation Scripts & Tests:**
   - `scripts/validate-reference-links.js` & `scripts/validate-reference-links-test.js`: Prevents broken relative links from `skills/*/SKILL.md` to root checklists in `references/`.
   - `scripts/validate-artifact-paths.js`: Protects the `spec -> plan -> build` pipeline against artifact path drift across producers and consumers.
   - `scripts/validate-versions-test.js`: Verifies version synchronization across 5 multi-host plugin manifests.

### Key Findings & Defects
- **Critical Cross-File Contradiction (`session-start.sh` vs `session-start-test.sh`):** `session-start.sh` was migrated to the standard Claude Code/Codex CLI envelope (`{"hookSpecificOutput": {"hookEventName": "SessionStart", "additionalContext": "..."}}`), but the test file `hooks/session-start-test.sh` was not updated and still asserts legacy `{priority: 'IMPORTANT', message: '...'}`. Consequently, `bash hooks/session-start-test.sh` **fails with exit code 1** on the repository's default branch.
- **Orphan Test Suite:** `hooks/simplify-ignore-test.sh` is fully functional (21/21 assertions pass), but is omitted from `.github/workflows/test-plugin-installation.yml`.
- **PreToolUse Hook Mechanism (Exit Code 2):** In Claude Code, exiting with code 2 in a `PreToolUse` hook blocks tool execution and transmits the script's stderr output back to the model as the tool response/error, which `sdd-cache-pre.sh` exploits to deliver cached web documentation without network latency or re-fetching tokens.
- **Pipeline Governance Pattern:** `validate-artifact-paths.js` addresses a real-world multi-step contract breakdown (PR #93) where `/spec` and `/plan` updated their output locations while `/build` still expected root artifacts.

---

## Script Execution Log

| # | Script / Test Path | Execution Command | Exit Code | Verified Output / Summary |
|---|---|---|:---:|---|
| 1 | `hooks/sdd-cache-post.sh` | `echo '{"tool_input":{"url":"https://react.dev/reference/react/useActionState","prompt":"extract"},"tool_response":"useActionState signature"}' \| bash hooks/sdd-cache-post.sh` | `0` | Captured ETag `"f7790fa7286c973a240237ba72409b0a"`, created `.claude/sdd-cache/f77331825765034146fe02281d8bd2cb.json`. Cleaned post-test. |
| 2 | `hooks/sdd-cache-pre.sh` | `echo '{"tool_input":{"url":"https://react.dev/reference/react/useActionState","prompt":"extract"}}' \| bash hooks/sdd-cache-pre.sh` | `2` | Emitted cache hit notification and cached body to stderr: `[sdd-cache] Cache hit for https://react.dev/reference/react/useActionState`, HTTP 304 revalidated. |
| 3 | `hooks/session-start.sh` | `bash hooks/session-start.sh` | `0` | Emitted valid JSON envelope `{"hookSpecificOutput":{"hookEventName":"SessionStart","additionalContext":"agent-skills loaded... [full using-agent-skills content]"}}`. |
| 4 | `hooks/simplify-ignore-test.sh` | `bash hooks/simplify-ignore-test.sh` | `0` | 10 test scenarios executed, 21 assertions evaluated: `Results: 21 passed, 0 failed`. |
| 5 | `scripts/validate-reference-links.js` | `bun scripts/validate-reference-links.js` | `0` | Checked 25 skills: `25 skills checked — 0 error(s) — PASSED`. |
| 6 | `scripts/validate-reference-links-test.js` | `bun test ./scripts/validate-reference-links-test.js` | `0` | 7 tests executed across 7 sandbox scenarios: `7 pass, 0 fail`. |
| 7 | `scripts/validate-artifact-paths.js` | `bun scripts/validate-artifact-paths.js` | `0` | Checked 7 guarded pipeline files: `7 files checked — 0 error(s) — PASSED`. |
| 8 | `scripts/validate-versions-test.js` | `bun test ./scripts/validate-versions-test.js` | `0` | Verified 5 plugin manifests against git tag `0.6.8`: `1 pass, 0 fail`. |
| 9 | `hooks/session-start-test.sh` *(cross-check)* | `bash hooks/session-start-test.sh` | `1` | `Error: expected IMPORTANT priority, got undefined`. Confirms defect in `session-start-test.sh`. |

---

## Complete Inventory Entries

### 1. `hooks/sdd-cache-post.sh`

```markdown
---
package: addy
path: hooks/sdd-cache-post.sh
type: script
bytes: 4567
unit: inv-addy-9
deprecated: false
---

# hooks/sdd-cache-post.sh

## Purpose — required, verbatim
> "After WebFetch, stores the response body in .claude/sdd-cache/<sha>.json with the current ETag / Last-Modified captured via a HEAD request so the pre hook can revalidate on the next fetch." — hooks/sdd-cache-post.sh:4-6

## Design intent
Provides the caching back-half for Claude Code's `WebFetch` tool execution within the `source-driven-development` workflow. After a web page is fetched, intercepts the post-tool event, inspects the response payload, extracts the processed markdown/text, and queries the origin server via an HTTP HEAD request (`curl -sI -L`) to capture origin cache validators (`ETag` and `Last-Modified`). Stores the document, original prompt, timestamps, and validators in a local content-addressed JSON file (`.claude/sdd-cache/<sha256(url)>.json`). If no validators exist, skips caching and deletes stale entries to ensure memory is never trusted over live server verification.

## Phase — required
cross-phase

## Inputs — required
- Stdin JSON payload containing `.tool_input.url`, `.tool_input.prompt`, and `.tool_response` (keys `.result`, `.output`, `.text`, `.content`, `.body`, or raw string) — hooks/sdd-cache-post.sh:32-58
- Environment variables: `CLAUDE_PROJECT_DIR`, `SDD_CACHE_DEBUG`, `PWD` — hooks/sdd-cache-post.sh:25-26,75
- Origin HTTP HEAD response via `curl -sI -L --max-time 5 "$URL"` — hooks/sdd-cache-post.sh:82

## Outputs — required
- Content-addressed cache JSON file: `.claude/sdd-cache/<sha256(url)>.json` containing `{url, prompt, etag, last_modified, content, fetched_at}` — hooks/sdd-cache-post.sh:77,125
- Atomic temporary file: `.claude/sdd-cache/<sha256(url)>.json.<pid>.tmp` — hooks/sdd-cache-post.sh:117
- Debug log file: `.claude/sdd-cache/.debug.log` (active when `SDD_CACHE_DEBUG=1` or `.claude/sdd-cache/.debug` exists) — hooks/sdd-cache-post.sh:28

## Invokes — required
- command jq — hooks/sdd-cache-post.sh:16,32,42,45,118
- command curl — hooks/sdd-cache-post.sh:17,82
- command shasum — hooks/sdd-cache-post.sh:18,68
- command sha256sum — hooks/sdd-cache-post.sh:18,71
- command awk — hooks/sdd-cache-post.sh:86,94
- command date — hooks/sdd-cache-post.sh:28,115
- command tr — hooks/sdd-cache-post.sh:82

## Invoked by — required
- hooks/SDD-CACHE.md:36 — configured as command hook in `.claude/settings.json` under `PostToolUse` for `WebFetch`

## Concepts named — required, verbatim
- `PostToolUse` — hooks/sdd-cache-post.sh:2 — used here
- `WebFetch` — hooks/sdd-cache-post.sh:2 — used here
- `sdd-cache` — hooks/sdd-cache-post.sh:4 — defined here
- `ETag` — hooks/sdd-cache-post.sh:5 — used here
- `Last-Modified` — hooks/sdd-cache-post.sh:5 — used here
- `revalidate` — hooks/sdd-cache-post.sh:6 — used here
- `cache hit` — hooks/sdd-cache-post.sh:9 — used here

## Structure
- #!/bin/bash
- # sdd-cache-post.sh — PostToolUse hook for WebFetch.
- dbg()
- hash_key()
- extract_header()

## Scripts — required if type is script or the skill ships scripts
- path: `hooks/sdd-cache-post.sh`, language: bash, lines: 136
- documented invocation: `echo '{"tool_input":{"url":"https://react.dev/reference/react/useActionState","prompt":"extract the signature"},"tool_response":"..."}' | bash hooks/sdd-cache-post.sh` — hooks/SDD-CACHE.md:87-93
- executed: yes
- actual command run: `echo '{"tool_input":{"url":"https://react.dev/reference/react/useActionState","prompt":"extract the signature"},"tool_response":"useActionState(action, initialState) returns [state, formAction, isPending]"}' | bash hooks/sdd-cache-post.sh`
- actual exit code: 0
- documented exit codes: `exit 0` (fail open / complete) — hooks/sdd-cache-post.sh:16,17,18,34,62,112,135
- actual exit paths in code: line 16 (`exit 0`), line 17 (`exit 0`), line 18 (`exit 0`), line 34 (`exit 0`), line 62 (`exit 0`), line 112 (`exit 0`), line 135 (`exit 0`)
- for validators/gates: not a failing gate; always exits 0 to fail open so hook execution never blocks agent progress
- does the output match what the documentation claims? yes; creates valid `.claude/sdd-cache/<hash>.json` caching ETag and response content

## Defects — required
none

## Observations
- Claude Code does not pass HTTP response headers in the `PostToolUse` event payload, necessitating an extra `curl -sI -L` request to capture ETag/Last-Modified validators on every miss (hooks/SDD-CACHE.md:157).
- Strips CR (`tr -d '\r'`) and parses curl output using awk in paragraph mode (`RS = ""`) to extract the final header block on multi-hop redirect chains, avoiding intermediate 301/302 validators.
- Employs atomic rename (`TMP="${CACHE_FILE}.$$.tmp" && mv "$TMP" "$CACHE_FILE"`) to prevent concurrent partial read corruption.

## Context cost
4,567 bytes (~1,142 tokens)
```

---

### 2. `hooks/sdd-cache-pre.sh`

```markdown
---
package: addy
path: hooks/sdd-cache-pre.sh
type: script
bytes: 4261
unit: inv-addy-9
deprecated: false
---

# hooks/sdd-cache-pre.sh

## Purpose — required, verbatim
> "HTTP resource cache keyed by URL. Freshness is delegated to the origin via HTTP validators; 304 Not Modified is the only signal to serve from cache. On hit, exits 2 and writes the cached body to stderr so Claude Code can deliver it to the agent in place of the WebFetch result. Otherwise exits 0." — hooks/sdd-cache-pre.sh:4-7

## Design intent
Intercepts `WebFetch` tool invocations in Claude Code before execution to serve fresh, revalidated web documentation from a local cache. When a cached file exists for the URL, it executes a lightweight conditional HTTP HEAD request with `If-None-Match: <etag>` and `If-Modified-Since: <last_modified>`. If the origin returns HTTP `304 Not Modified`, it halts the tool invocation by exiting with status 2 and writing the cached body to stderr enclosed in `----- BEGIN CACHED CONTENT -----` markers, delivering the content without full re-fetching or token consumption. If the origin returns 200 or validators are missing, it exits 0 to let WebFetch execute normally.

## Phase — required
cross-phase

## Inputs — required
- Stdin JSON payload containing `.tool_input.url` — hooks/sdd-cache-pre.sh:37
- Cached JSON file: `.claude/sdd-cache/<sha256(url)>.json` reading `.fetched_at`, `.prompt`, `.etag`, `.last_modified`, `.content` — hooks/sdd-cache-pre.sh:56-83
- Environment variables: `CLAUDE_PROJECT_DIR`, `SDD_CACHE_DEBUG`, `PWD` — hooks/sdd-cache-pre.sh:30-31,50
- Origin HTTP HEAD response code via `curl -sI -o /dev/null -w "%{http_code}" --max-time 5 -L "${HEADERS[@]}" "$URL"` — hooks/sdd-cache-pre.sh:71-74

## Outputs — required
- Stderr formatted cache hit message with cached content payload (on exit code 2) — hooks/sdd-cache-pre.sh:94-105
- Debug log file: `.claude/sdd-cache/.debug.log` (when debug active) — hooks/sdd-cache-pre.sh:33

## Invokes — required
- command jq — hooks/sdd-cache-pre.sh:21,37,56,57,58,59,83
- command curl — hooks/sdd-cache-pre.sh:22,71
- command shasum — hooks/sdd-cache-pre.sh:23,44
- command sha256sum — hooks/sdd-cache-pre.sh:23,46
- command date — hooks/sdd-cache-pre.sh:33,87,88

## Invoked by — required
- hooks/SDD-CACHE.md:24 — configured as command hook in `.claude/settings.json` under `PreToolUse` for `WebFetch`

## Concepts named — required, verbatim
- `PreToolUse` — hooks/sdd-cache-pre.sh:2 — used here
- `WebFetch` — hooks/sdd-cache-pre.sh:2 — used here
- `sdd-cache` — hooks/sdd-cache-pre.sh:4 — defined here
- `HTTP validators` — hooks/sdd-cache-pre.sh:5 — used here
- `304 Not Modified` — hooks/sdd-cache-pre.sh:5 — used here
- `cache hit` — hooks/sdd-cache-pre.sh:6 — used here
- `ETag` — hooks/sdd-cache-pre.sh:10 — used here
- `Last-Modified` — hooks/sdd-cache-pre.sh:10 — used here

## Structure
- #!/bin/bash
- # sdd-cache-pre.sh — PreToolUse hook for WebFetch.
- dbg()
- hash_key()

## Scripts — required if type is script or the skill ships scripts
- path: `hooks/sdd-cache-pre.sh`, language: bash, lines: 107
- documented invocation: `echo '{"tool_input":{"url":"https://react.dev/reference/react/useActionState","prompt":"extract the signature"}}' | bash hooks/sdd-cache-pre.sh` — hooks/SDD-CACHE.md:100-105
- executed: yes
- actual command run: `echo '{"tool_input":{"url":"https://react.dev/reference/react/useActionState","prompt":"extract the signature"}}' | bash hooks/sdd-cache-pre.sh`
- actual exit code: 2
- documented exit codes: `0` (allow WebFetch to proceed / miss / bypass), `2` (cache hit; block WebFetch and return cached body to stderr) — hooks/sdd-cache-pre.sh:6-7
- actual exit paths in code: lines 21, 22, 23, 38, 53, 64, 79, 84 (`exit 0`), line 106 (`exit 2`)
- for validators/gates: exit 2 is the intended control-flow mechanism in Claude Code PreToolUse hooks to abort tool execution and deliver the stderr stream as the tool result.
- does the output match what the documentation claims? yes; emits formatted cache hit block to stderr and terminates with exit code 2.

## Defects — required
none

## Observations
- Explains the harness interface contract: Claude Code interprets exit code 2 as a tool execution abort that pipes stderr back to the model as the tool result.
- The original user prompt that prompted the fetch is stored and echoed in the hit message (`Original WebFetch prompt: "..."`), allowing downstream agents to judge if the earlier reading satisfies their query.
- Uses `printf` instead of a heredoc to prevent unexpected shell evaluation of backticks, variables, and escape characters embedded in cached markdown.

## Context cost
4,261 bytes (~1,065 tokens)
```

---

### 3. `hooks/session-start.sh`

```markdown
---
package: addy
path: hooks/session-start.sh
type: script
bytes: 1392
unit: inv-addy-9
deprecated: false
---

# hooks/session-start.sh

## Purpose — required, verbatim
> "Injects the using-agent-skills meta-skill into every new session" — hooks/session-start.sh:3

## Design intent
Automates discovery and baseline skill routing upon session startup. When Claude Code or Codex CLI initializes a session (`SessionStart` event), this hook reads the `using-agent-skills/SKILL.md` meta-skill file and wraps it into the canonical `SessionStart` JSON envelope (`hookSpecificOutput: {hookEventName: "SessionStart", additionalContext: ...}`). This guarantees the agent begins with complete knowledge of available skills and the discovery flowchart, preventing hallucinated commands and omitted skills.

## Phase — required
cross-phase

## Inputs — required
- File: `skills/using-agent-skills/SKILL.md` (resolved via `$(dirname "$SCRIPT_DIR")/skills/using-agent-skills/SKILL.md`) — hooks/session-start.sh:10-11

## Outputs — required
- stdout: JSON string formatted as `{"hookSpecificOutput": {"hookEventName": "SessionStart", "additionalContext": "..."}}` — hooks/session-start.sh:6,25,27

## Invokes — required
- file skills/using-agent-skills/SKILL.md — hooks/session-start.sh:11,19
- command jq — hooks/session-start.sh:13,21

## Invoked by — required
- hooks/hooks.json:8 — executed on `SessionStart` event

## Concepts named — required, verbatim
- `SessionStart` — hooks/session-start.sh:2 — used here
- `using-agent-skills` — hooks/session-start.sh:3 — used here
- `meta-skill` — hooks/session-start.sh:3 — used here
- `SessionStart envelope` — hooks/session-start.sh:5 — defined here
- `additionalContext` — hooks/session-start.sh:6 — used here
- `Codex CLI` — hooks/session-start.sh:7 — used here
- `Claude Code` — hooks/session-start.sh:7 — used here
- `skill discovery flowchart` — hooks/session-start.sh:22 — used here

## Structure
- #!/bin/bash
- # agent-skills session start hook

## Scripts — required if type is script or the skill ships scripts
- path: `hooks/session-start.sh`, language: bash, lines: 29
- documented invocation: `bash "$SCRIPT"` — hooks/hooks.json:8
- executed: yes
- actual command run: `bash hooks/session-start.sh`
- actual exit code: 0
- documented exit codes: `exit 0` — hooks/session-start.sh:15
- actual exit paths in code: line 15 (`exit 0`), line 28 (implicit `exit 0`)
- for validators/gates: never exits non-zero; fails open with fallback warning envelope if jq or file is missing
- does the output match what the documentation claims? yes; outputs valid JSON with `hookSpecificOutput.hookEventName = "SessionStart"` containing the full text of `using-agent-skills/SKILL.md`.

## Defects — required
- `cross-file-contradiction` · hooks/session-start.sh:5-7 vs hooks/session-start-test.sh:24-26 · `session-start.sh` was migrated to the standard Claude Code/Codex CLI envelope (`hookSpecificOutput: {hookEventName: "SessionStart", additionalContext: ...}`), but `session-start-test.sh` was not updated and still asserts legacy `{priority: "IMPORTANT", message: "..."}`, causing `session-start-test.sh` to fail.

## Observations
- Graceful degradation: if `jq` is not installed on the system PATH, the script emits a valid JSON envelope warning the user to install `jq` while leaving individual skills available (hooks/session-start.sh:14).
- Injects 10,426 bytes of meta-skill instructions into every agent session start context.

## Context cost
1,392 bytes script (~348 tokens); emits ~2,954 tokens when loading `skills/using-agent-skills/SKILL.md`.
```

---

### 4. `hooks/simplify-ignore-test.sh`

```markdown
---
package: addy
path: hooks/simplify-ignore-test.sh
type: script
bytes: 8709
unit: inv-addy-9
deprecated: false
---

# hooks/simplify-ignore-test.sh

## Purpose — required, verbatim
> "Tests for the simplify-ignore hook. Exercises filter_file by extracting function definitions from the hook. Run: bash hooks/simplify-ignore-test.sh" — hooks/simplify-ignore-test.sh:2-5

## Design intent
Automated unit test suite verifying the behavior of `hooks/simplify-ignore.sh`. Tests placeholder replacement, caching of excluded blocks, reason string preservation, unclosed block handling, newline preservation, HTML comment syntax, and malformed input warning handling across 10 discrete test cases.

## Phase — required
addy:Review

## Inputs — required
- File: `hooks/simplify-ignore.sh` (extracts `filter_file()` via `sed`) — hooks/simplify-ignore-test.sh:34

## Outputs — required
- stdout test results report (`Results: 21 passed, 0 failed`) — hooks/simplify-ignore-test.sh:252
- Temporary test fixtures created under `$TMPDIR` (cleaned via EXIT trap) — hooks/simplify-ignore-test.sh:10-11

## Invokes — required
- script hooks/simplify-ignore.sh — hooks/simplify-ignore-test.sh:34,243
- command shasum — hooks/simplify-ignore-test.sh:18
- command sha1sum — hooks/simplify-ignore-test.sh:19
- command sed — hooks/simplify-ignore-test.sh:34
- command mktemp — hooks/simplify-ignore-test.sh:10
- command grep — hooks/simplify-ignore-test.sh:64,66,67,143,195,196,215,236,245,247
- command wc — hooks/simplify-ignore-test.sh:69,98,125,145,161,162
- command tail — hooks/simplify-ignore-test.sh:161,162

## Invoked by — required
orphan

## Concepts named — required, verbatim
- `simplify-ignore` — hooks/simplify-ignore-test.sh:2 — used here
- `filter_file` — hooks/simplify-ignore-test.sh:4 — used here
- `simplify-ignore-start` — hooks/simplify-ignore-test.sh:57 — used here
- `simplify-ignore-end` — hooks/simplify-ignore-test.sh:57 — used here
- `placeholder` — hooks/simplify-ignore-test.sh:49 — used here
- `HTML comment syntax` — hooks/simplify-ignore-test.sh:218 — used here

## Structure
- #!/bin/bash
- # simplify-ignore-test.sh — Tests for the simplify-ignore hook
- hash_cmd()
- file_id()
- block_hash()
- escape_glob()
- eval "$(sed -n '/^filter_file()/,/^}/p' hooks/simplify-ignore.sh)"
- assert_eq()
- Test 1: Single-line block (start+end on same line)
- Test 2: Multi-line block
- Test 3: Multiple blocks in one file
- Test 4: Reason string in placeholder
- Test 5: Trailing newline preservation
- Test 6: No blocks returns 1
- Test 7: Unclosed block
- Test 8: Single-line block with reason
- Test 9: HTML comment syntax
- Test 10: Malformed JSON input produces warning
- Summary

## Scripts — required if type is script or the skill ships scripts
- path: `hooks/simplify-ignore-test.sh`, language: bash, lines: 254
- documented invocation: `bash hooks/simplify-ignore-test.sh` — hooks/simplify-ignore-test.sh:5
- executed: yes
- actual command run: `bash hooks/simplify-ignore-test.sh`
- actual exit code: 0
- documented exit codes: `0` (all tests pass), `1` (test failure or missing hash tool) — hooks/simplify-ignore-test.sh:20,253
- actual exit paths in code: line 20 (`exit 1`), line 253 (`[ "$FAIL" -eq 0 ] && exit 0 || exit 1`)
- for validators/gates: can exit 1 if any assertion fails. Passes completely on current branch (21 passed, 0 failed).
- does the output match what the documentation claims? yes; 21 tests pass with 0 failures.

## Defects — required
- `orphan` · hooks/simplify-ignore-test.sh:5 · Test script exists in `hooks/` and executes cleanly, but is not run by `.github/workflows/test-plugin-installation.yml` or any CI workflow.

## Observations
- Extracts `filter_file()` via `eval "$(sed -n '/^filter_file()/,/^}/p' hooks/simplify-ignore.sh)"` to unit-test an internal bash routine without sourcing the entire command script.
- Tests multiple comment delimiters: C-style multi-line comments `/* ... */`, double-slash line comments `// ...`, and HTML comments `<!-- ... -->`.

## Context cost
8,709 bytes (~2,177 tokens)
```

---

### 5. `hooks/SDD-CACHE.md`

```markdown
---
package: addy
path: hooks/SDD-CACHE.md
type: doc
bytes: 8398
unit: inv-addy-9
deprecated: false
---

# hooks/SDD-CACHE.md

## Purpose — required, verbatim
> "Cross-session citation cache for [`source-driven-development`](../skills/source-driven-development/SKILL.md). Skips redundant `WebFetch` calls without weakening the skill's "verify against current docs" guarantee." — hooks/SDD-CACHE.md:3

## Design intent
Provides the architectural specification, setup instructions, testing protocol, and operational model for the `sdd-cache` hook subsystem. Articulates the rationale for rejecting traditional TTL-based or memory-based caching (which causes doc-drift and hallucination), and explains how origin HTTP revalidation (`304 Not Modified`) permits performance optimization while upholding the source-driven-development guarantee of verifying against current live documentation.

## Phase — required
addy:Build

## Inputs — required
- References `skills/source-driven-development/SKILL.md` — hooks/SDD-CACHE.md:3
- References `hooks/sdd-cache-pre.sh` — hooks/SDD-CACHE.md:24
- References `hooks/sdd-cache-post.sh` — hooks/SDD-CACHE.md:36
- References `.claude/settings.json` — hooks/SDD-CACHE.md:13
- References `.claude/sdd-cache/<sha>.json` — hooks/SDD-CACHE.md:61

## Outputs — required
none

## Invokes — required
- skill skills/source-driven-development/SKILL.md — hooks/SDD-CACHE.md:3
- script hooks/sdd-cache-pre.sh — hooks/SDD-CACHE.md:24,105,135
- script hooks/sdd-cache-post.sh — hooks/SDD-CACHE.md:36,93

## Invoked by — required
orphan

## Concepts named — required, verbatim
- `sdd-cache` — hooks/SDD-CACHE.md:1 — defined here
- `source-driven-development` — hooks/SDD-CACHE.md:3 — used here
- `WebFetch` — hooks/SDD-CACHE.md:3 — used here
- `PreToolUse` — hooks/SDD-CACHE.md:18 — used here
- `PostToolUse` — hooks/SDD-CACHE.md:30 — used here
- `304 Not Modified` — hooks/SDD-CACHE.md:9 — used here
- `ETag` — hooks/SDD-CACHE.md:9 — used here
- `Last-Modified` — hooks/SDD-CACHE.md:9 — used here
- `revalidation` — hooks/SDD-CACHE.md:9 — used here
- `cache hit` — hooks/SDD-CACHE.md:76 — used here
- `cache miss` — hooks/SDD-CACHE.md:77 — used here
- `DETECT → FETCH → IMPLEMENT → CITE` — hooks/SDD-CACHE.md:79 — used here

## Structure
- # sdd-cache hook
- ## Why
- ## Setup
- ## Mental model
- ## How it works
- ## Local testing
  - ### 1. Smoke test the scripts directly
  - ### 2. End-to-end in a real session
  - ### 3. Freshness verification
  - ### 4. Debugging
- ## Known limitations
- ## Requirements

## Defects — required
- `orphan` · hooks/SDD-CACHE.md:1 · Architectural documentation file is placed inside `hooks/` and is not referenced by `README.md`, `CLAUDE.md`, or `skills/source-driven-development/SKILL.md`.

## Observations
- Outlines five explicit limitations: body is prompt-shaped, every cache write costs an extra origin HEAD request, servers without ETag/Last-Modified are never cached, misbehaving servers could emit incorrect 304s, and caching is strictly local per-project.
- Contains runnable smoke-testing commands that accurately validate both the pre and post hook scripts.

## Context cost
8,398 bytes (~2,100 tokens)
```

---

### 6. `hooks/hooks.json`

```markdown
---
package: addy
path: hooks/hooks.json
type: config
bytes: 364
unit: inv-addy-9
deprecated: false
---

# hooks/hooks.json

## Purpose — required, verbatim
> "{"hooks": {"SessionStart": [{"hooks": [{"type": "command", "command": "SCRIPT=\"${CLAUDE_PLUGIN_ROOT}/hooks/session-start.sh\"; [ -f \"$SCRIPT\" ] || SCRIPT=\"${CLAUDE_PROJECT_DIR}/.claude/hooks/session-start.sh\"; [ -f \"$SCRIPT\" ] && bash \"$SCRIPT\" || true"}]}]}}" (no explicit purpose statement) — hooks/hooks.json:1-15

## Design intent
Declarative configuration file for Claude Code plugin hooks. Registers the `SessionStart` event listener to run `hooks/session-start.sh` (checking both `${CLAUDE_PLUGIN_ROOT}` and `${CLAUDE_PROJECT_DIR}/.claude/hooks/`), ensuring that every agent session automatically executes the session-start hook to inject the meta-skill.

## Phase — required
cross-phase

## Inputs — required
- Environment variables: `CLAUDE_PLUGIN_ROOT`, `CLAUDE_PROJECT_DIR` — hooks/hooks.json:8

## Outputs — required
- Hook registration object for Claude Code harness runtime — hooks/hooks.json:1-14

## Invokes — required
- script hooks/session-start.sh — hooks/hooks.json:8

## Invoked by — required
- Claude Code plugin host runtime

## Concepts named — required, verbatim
- `hooks` — hooks/hooks.json:2 — used here
- `SessionStart` — hooks/hooks.json:3 — used here
- `command` — hooks/hooks.json:7 — used here

## Structure
- JSON configuration object (`hooks.SessionStart`)

## Defects — required
none

## Observations
- Only registers `SessionStart`. It does not register `PreToolUse` or `PostToolUse` for `sdd-cache`, as SDD cache hooks require explicit user opt-in via `.claude/settings.json`.
- Uses shell fallback logic (`|| SCRIPT=...; [ -f "$SCRIPT" ] && bash "$SCRIPT" || true`) to locate `session-start.sh` regardless of whether the package is loaded as a global plugin or project-local repository.

## Context cost
364 bytes (~91 tokens)
```

---

### 7. `scripts/validate-reference-links-test.js`

```markdown
---
package: addy
path: scripts/validate-reference-links-test.js
type: script
bytes: 5666
unit: inv-addy-9
deprecated: false
---

# scripts/validate-reference-links-test.js

## Purpose — required, verbatim
> "passes when a skill reaches the shared checklist two levels up" (no explicit purpose statement; test suite for validate-reference-links.js) — scripts/validate-reference-links-test.js:43

## Design intent
Provides regression and unit tests for `scripts/validate-reference-links.js`. Creates isolated temporary directories mimicking repository file structures, verifies that relative links between skills and shared root checklists (e.g. `../../references/definition-of-done.md`) resolve correctly, and confirms that broken links (`references/definition-of-done.md`), missing files, or bad markdown syntax are caught with actionable error reports and non-zero exit codes.

## Phase — required
cross-phase

## Inputs — required
- Script under test: `scripts/validate-reference-links.js` — scripts/validate-reference-links-test.js:12,19,31

## Outputs — required
- stdout test execution assertions via `node:test` — scripts/validate-reference-links-test.js:10,43

## Invokes — required
- script scripts/validate-reference-links.js — scripts/validate-reference-links-test.js:12,19,31
- package node:assert/strict — scripts/validate-reference-links-test.js:5
- package node:child_process — scripts/validate-reference-links-test.js:9
- package node:fs — scripts/validate-reference-links-test.js:6
- package node:os — scripts/validate-reference-links-test.js:7
- package node:path — scripts/validate-reference-links-test.js:8
- package node:test — scripts/validate-reference-links-test.js:10

## Invoked by — required
- .github/workflows/test-plugin-installation.yml:43 — executed during CI `validate-skills` job (`node --test scripts/validate-reference-links-test.js`)

## Concepts named — required, verbatim
- `node:test` — scripts/validate-reference-links-test.js:10 — used here
- `validate-reference-links` — scripts/validate-reference-links-test.js:12 — used here
- `definition-of-done.md` — scripts/validate-reference-links-test.js:45 — used here
- `references/` — scripts/validate-reference-links-test.js:45 — used here
- `../../references/` — scripts/validate-reference-links-test.js:49 — used here
- `security-checklist.md` — scripts/validate-reference-links-test.js:141 — used here
- `performance-checklist.md` — scripts/validate-reference-links-test.js:142 — used here

## Structure
- #!/usr/bin/env node
- Imports and setup
- makeSandbox()
- writeFile()
- run()
- afterEach()
- test('passes when a skill reaches the shared checklist two levels up')
- test('fails when a skill links the shared checklist as if it were colocated')
- test('checks markdown link syntax, not just backtick mentions')
- test('passes when a skill colocates its own references directory')
- test('fails when a link points at a checklist that no longer exists')
- test('ignores paths that are not references/ links')
- test('reports every unresolvable link, not just the first per skill')

## Scripts — required if type is script or the skill ships scripts
- path: `scripts/validate-reference-links-test.js`, language: JavaScript (Node.js/Bun), lines: 154
- documented invocation: `node --test scripts/validate-reference-links-test.js` — .github/workflows/test-plugin-installation.yml:43
- executed: yes
- actual command run: `bun test ./scripts/validate-reference-links-test.js`
- actual exit code: 0
- documented exit codes: exit 0 on pass, exit 1 on failure
- actual exit paths in code: via `node:test` runner
- for validators/gates: can exit 1 on test failure; passes cleanly on default branch (7 pass, 0 fail)
- does the output match what the documentation claims? yes; 7 pass, 0 fail

## Defects — required
none

## Observations
- Cleans up sandbox directories via `afterEach(() => { for (const root of sandboxes.splice(0)) fs.rmSync(root, ...); })`.
- Specifically includes tests to guard against false-positive path matching on non-reference markdown paths like `tasks/todo.md` and `docs/ideas/[idea-name].md`.

## Context cost
5,666 bytes (~1,416 tokens)
```

---

### 8. `scripts/validate-reference-links.js`

```markdown
---
package: addy
path: scripts/validate-reference-links.js
type: script
bytes: 3832
unit: inv-addy-9
deprecated: false
---

# scripts/validate-reference-links.js

## Purpose — required, verbatim
> "Guards links from skills to the shared `references/` checklists." — scripts/validate-reference-links.js:5

## Design intent
Enforces that markdown links to reference checklists inside `skills/*/SKILL.md` actually resolve on the filesystem. Resolves the regression where skills linked shared checklists as `references/<file>.md` (which broke because skills live two levels below root in `skills/<name>/`). Validates that links either use `../../references/<file>.md` to reach repo-root checklists or point to a valid colocated `skills/<name>/references/<file>.md` directory. Exits with status 1 if any unresolvable reference links are found, blocking CI.

## Phase — required
cross-phase

## Inputs — required
- Directory: `skills/` — scripts/validate-reference-links.js:37
- Files: `skills/*/SKILL.md` — scripts/validate-reference-links.js:74
- Files in repo root `references/` or skill-local `references/` — scripts/validate-reference-links.js:51

## Outputs — required
- stdout status log showing skills checked, passing ticks, or error details — scripts/validate-reference-links.js:61,81,83,86,93
- process exit code (0 or 1) — scripts/validate-reference-links.js:28,99

## Invokes — required
- package fs — scripts/validate-reference-links.js:33
- package path — scripts/validate-reference-links.js:34
- file skills/*/SKILL.md — scripts/validate-reference-links.js:46,74
- directory references/ — scripts/validate-reference-links.js:51

## Invoked by — required
- .github/workflows/test-plugin-installation.yml:40 — executed during CI `validate-skills` job (`node scripts/validate-reference-links.js`)
- scripts/validate-reference-links-test.js:31 — executed in unit test sandbox

## Concepts named — required, verbatim
- `references/` — scripts/validate-reference-links.js:5 — used here
- `SKILL.md` — scripts/validate-reference-links.js:8 — used here
- `validate-artifact-paths.js` — scripts/validate-reference-links.js:15 — used here
- `using-agent-skills` — scripts/validate-reference-links.js:12 — used here
- `Definition of Done` — scripts/validate-reference-links.js:13 — used here
- `CLAUDE.md` — scripts/validate-reference-links.js:20 — used here
- `../../references/` — scripts/validate-reference-links.js:21 — used here

## Structure
- #!/usr/bin/env node
- Header documentation
- Constants: ROOT, SKILLS_DIR, REFERENCE_LINK_RE
- findViolations(skillDir, skillFile)
- main()

## Scripts — required if type is script or the skill ships scripts
- path: `scripts/validate-reference-links.js`, language: JavaScript (Node.js/Bun), lines: 104
- documented invocation: `node scripts/validate-reference-links.js` — .github/workflows/test-plugin-installation.yml:40
- executed: yes
- actual command run: `bun scripts/validate-reference-links.js`
- actual exit code: 0
- documented exit codes: `Exit codes: 0 = all clear, 1 = one or more unresolvable links.` — scripts/validate-reference-links.js:28
- actual exit paths in code: line 65 (return, exit 0), line 99 (`process.exit(1)`), line 103 (exit 0)
- for validators/gates: can exit 1 if broken links found; passes on default branch (25 skills checked — 0 error(s) — PASSED)
- does the output match what the documentation claims? yes; checks all 25 skills and reports PASSED with 0 errors.

## Defects — required
none

## Observations
- Documents historical context: prior to this validator, all 18 checklist links across 11 skills resolved incorrectly to non-existent paths, stalling agents.
- Uses regex lookbehind `(?<![A-Za-z0-9._/-])((?:\.\.\/)*references\/[A-Za-z0-9._-]+\.md)` to ensure exact path matches without false positives.

## Context cost
3,832 bytes (~958 tokens)
```

---

### 9. `scripts/validate-artifact-paths.js`

```markdown
---
package: addy
path: scripts/validate-artifact-paths.js
type: script
bytes: 4102
unit: inv-addy-9
deprecated: false
---

# scripts/validate-artifact-paths.js

## Purpose — required, verbatim
> "Guards the spec -> plan -> build pipeline against silent artifact-path drift." — scripts/validate-artifact-paths.js:5

## Design intent
Prevents contract breakage between lifecycle phases by enforcing that spec, plan, and task-list artifact paths remain strictly synchronized across producer commands (`/spec`, `/plan`), consumer commands (`/build`), and skills. Checks all pipeline-defining files against a strict allowlist (`SPEC.md`, `docs/SPEC.md`, `tasks/plan.md`, `tasks/todo.md`), ensuring that changes to artifact naming conventions cannot be made unilaterally without updating both consumers and producers together.

## Phase — required
cross-phase

## Inputs — required
- Files listed in `GUARDED_FILES`:
  - `.claude/commands/spec.md` — scripts/validate-artifact-paths.js:45
  - `.claude/commands/plan.md` — scripts/validate-artifact-paths.js:46
  - `.claude/commands/build.md` — scripts/validate-artifact-paths.js:47
  - `skills/spec-driven-development/SKILL.md` — scripts/validate-artifact-paths.js:48
  - `skills/planning-and-task-breakdown/SKILL.md` — scripts/validate-artifact-paths.js:49
  - `docs/getting-started.md` — scripts/validate-artifact-paths.js:50
  - `docs/adoption-guide.md` — scripts/validate-artifact-paths.js:51

## Outputs — required
- stdout status log of checked files and violations — scripts/validate-artifact-paths.js:79,90,92,94,101
- process exit code (0 or 1) — scripts/validate-artifact-paths.js:22,107

## Invokes — required
- package fs — scripts/validate-artifact-paths.js:27
- package path — scripts/validate-artifact-paths.js:28
- files in GUARDED_FILES — scripts/validate-artifact-paths.js:44-52,65

## Invoked by — required
- .github/workflows/test-plugin-installation.yml:60 — executed during CI `validate-commands` job (`node scripts/validate-artifact-paths.js`)
- scripts/validate-artifact-paths-test.js:31 — executed in unit test sandbox

## Concepts named — required, verbatim
- `spec -> plan -> build pipeline` — scripts/validate-artifact-paths.js:5 — defined here
- `/spec` — scripts/validate-artifact-paths.js:7 — used here
- `/plan` — scripts/validate-artifact-paths.js:7 — used here
- `/build` — scripts/validate-artifact-paths.js:8 — used here
- `SPEC.md` — scripts/validate-artifact-paths.js:11 — used here
- `docs/SPEC.md` — scripts/validate-artifact-paths.js:37 — used here
- `tasks/plan.md` — scripts/validate-artifact-paths.js:11 — used here
- `tasks/todo.md` — scripts/validate-artifact-paths.js:39 — used here
- `ARTIFACT_ALLOWLIST` — scripts/validate-artifact-paths.js:16 — defined here
- `GUARDED_FILES` — scripts/validate-artifact-paths.js:44 — defined here

## Structure
- #!/usr/bin/env node
- Header documentation with PR #93 background
- Constants: ROOT, ARTIFACT_ALLOWLIST, GUARDED_FILES, ARTIFACT_RE
- findViolations(relPath)
- main()

## Scripts — required if type is script or the skill ships scripts
- path: `scripts/validate-artifact-paths.js`, language: JavaScript (Node.js/Bun), lines: 112
- documented invocation: `node scripts/validate-artifact-paths.js` — .github/workflows/test-plugin-installation.yml:60
- executed: yes
- actual command run: `bun scripts/validate-artifact-paths.js`
- actual exit code: 0
- documented exit codes: `Exit codes: 0 = all clear, 1 = one or more drifted paths.` — scripts/validate-artifact-paths.js:22
- actual exit paths in code: line 107 (`process.exit(1)`), line 111 (exit 0)
- for validators/gates: can exit 1 if unapproved artifact path encountered; passes clean on default branch (7 files checked — 0 error(s) — PASSED)
- does the output match what the documentation claims? yes; 7 files checked, 0 errors, status PASSED.

## Defects — required
none

## Observations
- Guards the lifecycle interface contract against drift: documents that PR #93 pointed `/spec` and `/plan` at `docs/features/[name]/` while `/build` required `SPEC.md` and `tasks/plan.md`, breaking pipeline automation.
- Regex `/(?:[A-Za-z0-9._[\]-]+\/)*(?:spec|plan|todo)\.md/gi` catches bracket placeholders like `docs/features/[feature-name]/spec.md`.

## Context cost
4,102 bytes (~1,025 tokens)
```

---

### 10. `scripts/validate-versions-test.js`

```markdown
---
package: addy
path: scripts/validate-versions-test.js
type: script
bytes: 957
unit: inv-addy-9
deprecated: false
---

# scripts/validate-versions-test.js

## Purpose — required, verbatim
> "all plugin manifests use the latest release tag" (no explicit purpose statement; test case name) — scripts/validate-versions-test.js:21

## Design intent
Test suite verifying that all plugin and marketplace manifest files across Claude Code, Codex, and Antigravity plugin targets maintain version parity with the repository's latest git release tag (`git describe --tags --abbrev=0`). Prevents release drift where one manifest is bumped while others remain on older version numbers.

## Phase — required
addy:Ship

## Inputs — required
- Command: `git describe --tags --abbrev=0` — scripts/validate-versions-test.js:23
- Files listed in `manifestPaths`:
  - `plugin.json` — scripts/validate-versions-test.js:9
  - `.codex-plugin/plugin.json` — scripts/validate-versions-test.js:10
  - `.claude-plugin/plugin.json` — scripts/validate-versions-test.js:11
  - `.claude-plugin/marketplace.json` — scripts/validate-versions-test.js:12
  - `.agents/plugins/marketplace.json` — scripts/validate-versions-test.js:13

## Outputs — required
- stdout test execution assertions via `node:test` — scripts/validate-versions-test.js:21

## Invokes — required
- command git describe --tags --abbrev=0 — scripts/validate-versions-test.js:23
- file plugin.json — scripts/validate-versions-test.js:9
- file .codex-plugin/plugin.json — scripts/validate-versions-test.js:10
- file .claude-plugin/plugin.json — scripts/validate-versions-test.js:11
- file .claude-plugin/marketplace.json — scripts/validate-versions-test.js:12
- file .agents/plugins/marketplace.json — scripts/validate-versions-test.js:13
- package node:assert/strict — scripts/validate-versions-test.js:3
- package node:child_process — scripts/validate-versions-test.js:4
- package node:fs — scripts/validate-versions-test.js:5
- package node:test — scripts/validate-versions-test.js:6

## Invoked by — required
- .github/workflows/test-plugin-installation.yml:29 — executed during CI `validate-skills` job (`node --test scripts/validate-versions-test.js`)

## Concepts named — required, verbatim
- `plugin.json` — scripts/validate-versions-test.js:9 — used here
- `marketplace.json` — scripts/validate-versions-test.js:12 — used here
- `latest release tag` — scripts/validate-versions-test.js:21 — used here
- `manifestPaths` — scripts/validate-versions-test.js:8 — defined here

## Structure
- "use strict";
- Imports
- manifestPaths
- readManifestVersion(manifestPath)
- test("all plugin manifests use the latest release tag", ...)

## Scripts — required if type is script or the skill ships scripts
- path: `scripts/validate-versions-test.js`, language: JavaScript (Node.js/Bun), lines: 36
- documented invocation: `node --test scripts/validate-versions-test.js` — .github/workflows/test-plugin-installation.yml:29
- executed: yes
- actual command run: `bun test ./scripts/validate-versions-test.js`
- actual exit code: 0
- documented exit codes: exit 0 on pass, exit 1 on assertion error
- actual exit paths in code: via `node:test` runner
- for validators/gates: can exit 1 if any manifest version differs from latest git tag. Passes cleanly on default branch (all 5 manifests match tag `0.6.8`).
- does the output match what the documentation claims? yes; 1 pass, 0 fail.

## Defects — required
none

## Observations
- Inspects 5 multi-host manifests: root plugin (`plugin.json`), Codex plugin (`.codex-plugin/plugin.json`), Claude Code plugin (`.claude-plugin/plugin.json`), Claude Code marketplace (`.claude-plugin/marketplace.json`), and Antigravity marketplace (`.agents/plugins/marketplace.json`).
- Demonstrates active multi-host packaging support in Addy's repository.

## Context cost
957 bytes (~239 tokens)
```

---

## Work-Unit Report (`inv-addy-9`)

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
- `docs/analysis/inventory/addy/hooks-sdd-cache-post-sh.md` (4,567 bytes source)
- `docs/analysis/inventory/addy/hooks-sdd-cache-pre-sh.md` (4,261 bytes source)
- `docs/analysis/inventory/addy/hooks-session-start-sh.md` (1,392 bytes source)
- `docs/analysis/inventory/addy/hooks-simplify-ignore-test-sh.md` (8,709 bytes source)
- `docs/analysis/inventory/addy/hooks-sdd-cache-md.md` (8,398 bytes source)
- `docs/analysis/inventory/addy/hooks-hooks-json.md` (364 bytes source)
- `docs/analysis/inventory/addy/scripts-validate-reference-links-test-js.md` (5,666 bytes source)
- `docs/analysis/inventory/addy/scripts-validate-reference-links-js.md` (3,832 bytes source)
- `docs/analysis/inventory/addy/scripts-validate-artifact-paths-js.md` (4,102 bytes source)
- `docs/analysis/inventory/addy/scripts-validate-versions-test-js.md` (957 bytes source)
- `docs/analysis/inventory/addy/_units/inv-addy-9.md` (unit report)

## Scripts executed
- `sources/addy/hooks/sdd-cache-post.sh` — `echo '{"tool_input":{"url":"https://react.dev/reference/react/useActionState","prompt":"extract"},"tool_response":"useActionState signature"}' | bash hooks/sdd-cache-post.sh` — Exit code: `0`
- `sources/addy/hooks/sdd-cache-pre.sh` — `echo '{"tool_input":{"url":"https://react.dev/reference/react/useActionState","prompt":"extract"}}' | bash hooks/sdd-cache-pre.sh` — Exit code: `2` (cache hit; blocked tool and wrote content to stderr)
- `sources/addy/hooks/session-start.sh` — `bash hooks/session-start.sh` — Exit code: `0` (emitted valid SessionStart envelope with `using-agent-skills` content)
- `sources/addy/hooks/simplify-ignore-test.sh` — `bash hooks/simplify-ignore-test.sh` — Exit code: `0` (21 passed, 0 failed)
- `sources/addy/scripts/validate-reference-links.js` — `bun scripts/validate-reference-links.js` — Exit code: `0` (25 skills checked — 0 error(s) — PASSED)
- `sources/addy/scripts/validate-reference-links-test.js` — `bun test ./scripts/validate-reference-links-test.js` — Exit code: `0` (7 pass, 0 fail)
- `sources/addy/scripts/validate-artifact-paths.js` — `bun scripts/validate-artifact-paths.js` — Exit code: `0` (7 files checked — 0 error(s) — PASSED)
- `sources/addy/scripts/validate-versions-test.js` — `bun test ./scripts/validate-versions-test.js` — Exit code: `0` (1 pass, 0 fail; all 5 manifests match tag 0.6.8)
- `sources/addy/hooks/session-start-test.sh` (cross-check) — `bash hooks/session-start-test.sh` — Exit code: `1` (`Error: expected IMPORTANT priority, got undefined`)

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied (package-prefixed before decision; canonical after)

## Cross-unit notes
- **`session-start-test.sh` Regression (`inv-addy-8` / `inv-addy-9` boundary):** `hooks/session-start.sh` was refactored to emit the Claude Code / Codex CLI standard envelope (`{"hookSpecificOutput": {"hookEventName": "SessionStart", "additionalContext": "..."}}`) to satisfy host validators. However, `hooks/session-start-test.sh` (in unit `inv-addy-8`) was left untouched and asserts `{priority: "IMPORTANT", message: "..."}`, causing it to fail unconditionally on the `main` branch.
- **Hook Integration Model in Claude Code:** PreToolUse hooks utilize exit code 2 to abort expensive tool calls (`WebFetch`) and inject stderr directly into the conversation. PostToolUse hooks do not receive HTTP headers, requiring separate origin HEAD requests to capture ETag/Last-Modified.
- **Contract Enforcement via Path Allowlisting:** `scripts/validate-artifact-paths.js` provides a concrete architectural pattern for preventing lifecycle stage drift (the PR #93 regression where producer commands diverged from consumer assumptions).

## Blocked or uncertain
none

## Time and size
- Approximate tokens of source read: ~10,562 tokens (42,248 bytes across 10 files).
- Approximate tokens of output written: ~12,400 tokens across 10 inventory entries, script executions, and unit report.
```
