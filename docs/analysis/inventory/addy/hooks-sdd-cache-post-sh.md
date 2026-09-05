---
package: addy
path: hooks/sdd-cache-post.sh
type: script
bytes: 4567
unit: inv-addy-33
deprecated: false
aliases: []
memo_inputs:
  - {path: hooks/sdd-cache-post.sh, sha256: cf60a60fd475cceaf8cefdf0462393b1be0d7a4a5a4ea54508172f36ec0883e5}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-04 quote-check+coverage
---

# hooks/sdd-cache-post.sh

## Purpose — required, verbatim
> "PostToolUse hook for WebFetch." — hooks/sdd-cache-post.sh:2

## Design intent — required
Provides the write path for the cross-session `WebFetch` revalidation cache. When a `WebFetch` tool invocation completes, this hook captures the response body from Claude Code's tool output and executes a revalidating HTTP HEAD request against the target origin to record its current `ETag` or `Last-Modified` headers. It then persists the prompt, URL, validators, and content to `.claude/sdd-cache/<sha>.json`. Without this hook, repeated fetches of identical external documentation across development sessions would waste tokens and latency on redundant web requests or fall back to untrusted, unvalidated local memory.

## Phase — required
none

## Inputs — required
- Standard input JSON payload containing `.tool_input.url` and optional `.tool_input.prompt` — hooks/sdd-cache-post.sh:32-33
- Standard input JSON payload containing `.tool_response` content (`.result`, `.output`, `.text`, `.content`, `.body`, or string) — hooks/sdd-cache-post.sh:45-58
- Origin HTTP HEAD response headers via `curl` (`ETag`, `Last-Modified`) — hooks/sdd-cache-post.sh:82
- Environment variable `CLAUDE_PROJECT_DIR` or current working directory `PWD` — hooks/sdd-cache-post.sh:25
- Environment variable `SDD_CACHE_DEBUG` or sentinel file `.claude/sdd-cache/.debug` — hooks/sdd-cache-post.sh:23

## Outputs — required
- JSON cache file at `.claude/sdd-cache/<sha>.json` — hooks/sdd-cache-post.sh:4
- Debug log file `.debug.log` when debugging is enabled — hooks/sdd-cache-post.sh:28

## Invokes — required
none

## Invoked by — required
- doc SDD-CACHE.md — hooks/SDD-CACHE.md:36

## Concepts named — required, verbatim
- `PostToolUse` — hooks/sdd-cache-post.sh:2 — used here
- `WebFetch` — hooks/sdd-cache-post.sh:2 — used here
- `ETag` — hooks/sdd-cache-post.sh:5 — used here
- `Last-Modified` — hooks/sdd-cache-post.sh:5 — used here
- `sdd-cache` — hooks/sdd-cache-post.sh:25 — defined here
- `hash_key` — hooks/sdd-cache-post.sh:67 — defined here
- `extract_header` — hooks/sdd-cache-post.sh:92 — defined here

## Structure
Executable bash script without markdown headings:
- Shell options and dependency check (`set -euo pipefail`, `jq`, `curl`, `shasum`/`sha256sum`) — hooks/sdd-cache-post.sh:14-18
- Debug logging function `dbg` — hooks/sdd-cache-post.sh:24-29
- Tool input parsing for `URL` and `PROMPT` — hooks/sdd-cache-post.sh:32-34
- Tool response extraction and fallback resolution — hooks/sdd-cache-post.sh:42-63
- Cache key hashing function `hash_key` — hooks/sdd-cache-post.sh:67-73
- Origin HEAD request and HTTP validator header extraction (`extract_header`) — hooks/sdd-cache-post.sh:82-106
- Atomic JSON write via temporary file to cache file — hooks/sdd-cache-post.sh:117-128

## Scripts — required if type is script or the skill ships scripts
For each script:
- path, language, lines: `hooks/sdd-cache-post.sh`, bash, 136 lines
- documented invocation: `echo '{"tool_input":{"url":"https://react.dev/reference/react/useActionState","prompt":"extract the signature"},"tool_response":"useActionState(action, initialState) returns [state, formAction, isPending]"}' | bash hooks/sdd-cache-post.sh` — hooks/SDD-CACHE.md:93
- **executed:** yes
- actual command run, abridged stdout, **actual exit code**: Ran `echo '{"tool_input": {"url": "https://react.dev/reference/react/useActionState", "prompt": "extract the signature"}, "tool_response": "useActionState(action, initialState) returns [state, formAction, isPending]"}' | bash hooks/sdd-cache-post.sh`; stdout empty; **actual exit code**: 0.
- documented exit codes vs. actual exit paths: Documented exit code 0 on successful capture or when no validators exist; actual exit paths: `exit 0` at hooks/sdd-cache-post.sh:16 (missing jq), hooks/sdd-cache-post.sh:17 (missing curl), hooks/sdd-cache-post.sh:18 (missing shasum/sha256sum), hooks/sdd-cache-post.sh:34 (missing URL), hooks/sdd-cache-post.sh:62 (empty CONTENT), hooks/sdd-cache-post.sh:112 (no validators from origin), hooks/sdd-cache-post.sh:135 (normal completion).
- for validators/gates: Not a gate. Exits 0 on all clean and missing-dependency paths.
- does the output match what the documentation claims? Yes, created `.claude/sdd-cache/f77331825765034146fe02281d8bd2cb.json` with etag and content.

## Defects — required
none

## Observations
- Defensively handles diverse `tool_response` shapes (`.result`, `.output`, `.text`, `.content`, `.body`, or raw string) to tolerate Claude Code payload schema evolution.
- Strips carriage returns (`tr -d '\r'`) and parses only the final HTTP response headers via awk to correctly ignore intermediate redirect headers (301/302).
- Does not cache pages that lack origin HTTP validators (`ETag` or `Last-Modified`), ensuring only provably revalidatable entries are retained.
- Not registered in `hooks/hooks.json`; requires manual setup in `.claude/settings.json` per `hooks/SDD-CACHE.md:30-42`.

## Context cost
4567 bytes (~1142 tokens). Standalone script.
