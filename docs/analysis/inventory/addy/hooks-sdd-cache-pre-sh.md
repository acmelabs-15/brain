---
package: addy
path: hooks/sdd-cache-pre.sh
type: script
bytes: 4261
unit: inv-addy-33
deprecated: false
aliases: []
memo_inputs:
  - {path: hooks/sdd-cache-pre.sh, sha256: 853ad36f5e17e977060b92313e34b848ec1d321f2ac4aa657e9f3b9281cc0473}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-04 quote-check+coverage
---

# hooks/sdd-cache-pre.sh

## Purpose — required, verbatim
> "PreToolUse hook for WebFetch." — hooks/sdd-cache-pre.sh:2

## Design intent — required
Provides the read and revalidation path for the cross-session `WebFetch` cache. Before Claude Code executes a `WebFetch` tool call, this hook intercepts the URL, checks for a matching cache entry in `.claude/sdd-cache/<sha>.json`, and executes a conditional HTTP HEAD request with `If-None-Match` and `If-Modified-Since`. If the server responds with `304 Not Modified`, it cancels the remote fetch by exiting with code 2 and outputs the cached body to stderr inside standard boundary markers. Without this hook, agents would re-download identical web pages on every prompt or rely on unverified memory.

## Phase — required
none

## Inputs — required
- Standard input JSON payload containing `.tool_input.url` — hooks/sdd-cache-pre.sh:37
- Cached JSON file in `.claude/sdd-cache` — hooks/sdd-cache-pre.sh:50
- HTTP header `If-None-Match` — hooks/sdd-cache-pre.sh:68
- HTTP header `If-Modified-Since` — hooks/sdd-cache-pre.sh:69
- Environment variable `CLAUDE_PROJECT_DIR` — hooks/sdd-cache-pre.sh:30
- Sentinel file at `.claude/sdd-cache/.debug` — hooks/sdd-cache-pre.sh:28

## Outputs — required
- Stderr cache hit header `[sdd-cache] Cache hit for` — hooks/sdd-cache-pre.sh:95
- Stderr boundary marker `----- BEGIN CACHED CONTENT -----` — hooks/sdd-cache-pre.sh:102
- Stderr boundary marker `----- END CACHED CONTENT -----` — hooks/sdd-cache-pre.sh:104
- Debug log file `.debug.log` when debugging is enabled — hooks/sdd-cache-pre.sh:33

## Invokes — required
none

## Invoked by — required
- doc SDD-CACHE.md — hooks/SDD-CACHE.md:24

## Concepts named — required, verbatim
- `PreToolUse` — hooks/sdd-cache-pre.sh:2 — used here
- `WebFetch` — hooks/sdd-cache-pre.sh:2 — used here
- `sdd-cache` — hooks/sdd-cache-pre.sh:30 — defined here
- `hash_key` — hooks/sdd-cache-pre.sh:42 — defined here
- `If-None-Match` — hooks/sdd-cache-pre.sh:68 — used here
- `If-Modified-Since` — hooks/sdd-cache-pre.sh:69 — used here

## Structure
Executable bash script without markdown headings:
- Dependency checks and graceful degradation (`jq`, `curl`, `shasum`/`sha256sum`) — hooks/sdd-cache-pre.sh:21-23
- Debug logging function `dbg` — hooks/sdd-cache-pre.sh:29-34
- Tool input parsing for URL — hooks/sdd-cache-pre.sh:37-38
- Cache key hashing function `hash_key` — hooks/sdd-cache-pre.sh:42-48
- Cache file existence and validator validation — hooks/sdd-cache-pre.sh:53-64
- Conditional HTTP HEAD request with validators — hooks/sdd-cache-pre.sh:71-74
- 304 Not Modified validation and cache hit stderr emission (exit 2) — hooks/sdd-cache-pre.sh:77-106

## Scripts — required if type is script or the skill ships scripts
For each script:
- path, language, lines: `hooks/sdd-cache-pre.sh`, bash, 107 lines
- documented invocation: `"bash \"${CLAUDE_PROJECT_DIR}/hooks/sdd-cache-pre.sh\""` — hooks/SDD-CACHE.md:24
- **executed:** yes
- actual command run, abridged stdout, **actual exit code**: Ran `echo '{"tool_input": {"url": "https://react.dev/reference/react/useActionState", "prompt": "extract the signature"}}' | bash hooks/sdd-cache-pre.sh`; stderr abridged: `[sdd-cache] Cache hit for https://react.dev/reference/react/useActionState ... exit=2`; **actual exit code**: 2.
- documented exit codes vs. actual exit paths: Documented: exits 2 on cache hit with 304; exits 0 otherwise. Actual exit paths: `exit 0` at hooks/sdd-cache-pre.sh:21 (missing jq), hooks/sdd-cache-pre.sh:22 (missing curl), hooks/sdd-cache-pre.sh:23 (missing shasum/sha256sum), hooks/sdd-cache-pre.sh:38 (missing URL), hooks/sdd-cache-pre.sh:53 (no cache file), hooks/sdd-cache-pre.sh:64 (no validators), hooks/sdd-cache-pre.sh:79 (status not 304), hooks/sdd-cache-pre.sh:84 (empty content); and `exit 2` at hooks/sdd-cache-pre.sh:106 (cache hit).
- for validators/gates: Acts as an interceptor/gate for `WebFetch`. Exits 2 to abort the tool call when cached and revalidated; exits 0 to allow remote fetch to proceed.
- does the output match what the documentation claims? Yes, emits the documented `[sdd-cache]` message and markers on stderr and exits 2 on 304.

## Defects — required
none

## Observations
- Uses Claude Code's convention where exiting code 2 in a PreToolUse hook aborts the tool call and delivers stderr to the model as the result.
- Employs `printf` instead of heredocs to prevent arbitrary shell expansion when echoing cached markdown content containing backticks, variables, or backslashes.
- Not registered in `hooks/hooks.json`; requires manual setup in `.claude/settings.json` per `hooks/SDD-CACHE.md:18-29`.

## Context cost
4261 bytes (~1065 tokens). Standalone script.
