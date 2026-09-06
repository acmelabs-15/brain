---
package: addy
path: hooks/sdd-cache-pre.sh
type: file
bytes: 4261
unit: inv-addy-33
aliases: []
memo_inputs:
  - {path: hooks/sdd-cache-pre.sh, sha256: 853ad36f5e17e977060b92313e34b848ec1d321f2ac4aa657e9f3b9281cc0473}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# hooks/sdd-cache-pre.sh

## Purpose — required, verbatim
> "sdd-cache-pre.sh — PreToolUse hook for WebFetch." — hooks/sdd-cache-pre.sh:2

## Design intent — required
Provides a pre-tool execution hook for Claude Code's `WebFetch` tool that intercepts requests by URL hash, verifies whether a local cached response exists, and issues a lightweight conditional HEAD request with `If-None-Match` and `If-Modified-Since` to the origin server. If the origin returns `304 Not Modified`, it blocks execution by exiting with code 2 and outputs the cached content to stderr formatted for the agent, avoiding redundant payload transfers while maintaining doc-freshness guarantees.

## Phase — required
addy:Build

## Inputs — required
- JSON payload via stdin containing `tool_input` URL — hooks/sdd-cache-pre.sh:37
- Cached JSON entry at `CACHE_FILE` — hooks/sdd-cache-pre.sh:51
- HTTP revalidation status code from origin server via `curl -sI -o /dev/null -w "%{http_code}"` — hooks/sdd-cache-pre.sh:71
- Environment variable `CLAUDE_PROJECT_DIR` — hooks/sdd-cache-pre.sh:30
- Environment variable `SDD_CACHE_DEBUG` — hooks/sdd-cache-pre.sh:31

## Outputs — required
- On cache hit: exit 2 and formatted payload on stderr delimited by `----- BEGIN CACHED CONTENT -----` — hooks/sdd-cache-pre.sh:102
- On cache miss: exit 0 allowing WebFetch execution
- Debug log entries appended to `.claude/sdd-cache/.debug.log` if debugging is active — hooks/sdd-cache-pre.sh:33

## Invokes — required
none

## Invoked by — required
- doc hooks/SDD-CACHE.md — hooks/SDD-CACHE.md:24

## Concepts named — required, verbatim
- `PreToolUse` — hooks/sdd-cache-pre.sh:2 — used here
- `WebFetch` — hooks/sdd-cache-pre.sh:2 — used here
- `HTTP validators` — hooks/sdd-cache-pre.sh:5 — used here
- `304 Not Modified` — hooks/sdd-cache-pre.sh:5 — used here
- `Claude Code` — hooks/sdd-cache-pre.sh:6 — used here
- `ETag` — hooks/sdd-cache-pre.sh:10 — used here
- `Last-Modified` — hooks/sdd-cache-pre.sh:10 — used here
- `jq` — hooks/sdd-cache-pre.sh:16 — used here
- `curl` — hooks/sdd-cache-pre.sh:16 — used here
- `shasum` — hooks/sdd-cache-pre.sh:16 — used here
- `sha256sum` — hooks/sdd-cache-pre.sh:16 — used here
- `Graceful degradation` — hooks/sdd-cache-pre.sh:20 — defined here
- `Debug logging` — hooks/sdd-cache-pre.sh:27 — defined here
- `tool_input` — hooks/sdd-cache-pre.sh:37 — used here
- `hash_key` — hooks/sdd-cache-pre.sh:42 — defined here
- `If-None-Match` — hooks/sdd-cache-pre.sh:68 — used here
- `If-Modified-Since` — hooks/sdd-cache-pre.sh:69 — used here
- `cache HIT` — hooks/sdd-cache-pre.sh:85 — used here

## Structure
- set -euo pipefail — hooks/sdd-cache-pre.sh:18
- Graceful degradation checks (jq, curl, shasum/sha256sum) — hooks/sdd-cache-pre.sh:20-23
- Input ingestion and debug logger definition — hooks/sdd-cache-pre.sh:25-35
- URL extraction from tool_input — hooks/sdd-cache-pre.sh:37-39
- Cache key hashing and file existence check — hooks/sdd-cache-pre.sh:42-55
- Validator presence verification — hooks/sdd-cache-pre.sh:56-65
- Conditional HEAD request to origin — hooks/sdd-cache-pre.sh:67-75
- Revalidation status check (HTTP 304) — hooks/sdd-cache-pre.sh:77-80
- Cache hit stderr payload construction and exit 2 — hooks/sdd-cache-pre.sh:83-106

## Scripts — required if type is script or the skill ships scripts
- path: `hooks/sdd-cache-pre.sh`, language: bash, lines: 107
- documented invocation: `echo '{"tool_input":{"url":"https://react.dev/reference/react/useActionState","prompt":"extract the signature"}}' | bash hooks/sdd-cache-pre.sh` — hooks/SDD-CACHE.md:105
- executed: yes
- actual command run: `echo '{"tool_input":{"url":"https://react.dev/reference/react/useActionState","prompt":"extract the signature"}}' | bash hooks/sdd-cache-pre.sh`, stderr: `[sdd-cache] Cache hit for https://react.dev/reference/react/useActionState\n\nRevalidated via HTTP 304; unchanged since 2026-09-06T10:52:45Z...`, actual exit code: 2
- documented exit codes: `exit 0` on missing dependencies (hooks/sdd-cache-pre.sh:21, 22, 23), missing URL (hooks/sdd-cache-pre.sh:38), cache miss (hooks/sdd-cache-pre.sh:53), unvalidatable entry (hooks/sdd-cache-pre.sh:64), non-304 response (hooks/sdd-cache-pre.sh:79), or empty content (hooks/sdd-cache-pre.sh:84); `exit 2` on cache hit (hooks/sdd-cache-pre.sh:106)
- for validators/gates: exits 2 to abort the tool call and supply cached content via stderr; exits 0 to let the fetch proceed
- does output match documentation: yes, exits 2 on 304 revalidation and outputs cached response between BEGIN and END markers

## Defects — required
none

## Observations
Emits the payload with `printf` rather than an unquoted heredoc to ensure markdown backticks, shell variable expansions, and code snippets inside `$CONTENT` are not evaluated. Relies strictly on origin 304 responses, enforcing zero TTL so documentation changes at the origin invalidate cached entries immediately.

## Context cost
4261 bytes, approximately 980 tokens.
