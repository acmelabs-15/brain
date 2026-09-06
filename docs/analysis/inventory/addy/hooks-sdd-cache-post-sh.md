---
package: addy
path: hooks/sdd-cache-post.sh
type: file
bytes: 4567
unit: inv-addy-33
aliases: []
memo_inputs:
  - {path: hooks/sdd-cache-post.sh, sha256: cf60a60fd475cceaf8cefdf0462393b1be0d7a4a5a4ea54508172f36ec0883e5}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# hooks/sdd-cache-post.sh

## Purpose — required, verbatim
> "sdd-cache-post.sh — PostToolUse hook for WebFetch." — hooks/sdd-cache-post.sh:2

## Design intent — required
Provides a post-tool execution hook for Claude Code's `WebFetch` tool that asynchronously captures HTTP response bodies and issues a HEAD request to the origin server to record current HTTP validators (`ETag` and `Last-Modified`). It persists this metadata alongside caller prompts and response payloads to disk under `.claude/sdd-cache/` to enable downstream conditional revalidation by `sdd-cache-pre.sh`.

## Phase — required
addy:Build

## Inputs — required
- JSON payload via stdin from Claude Code's `PostToolUse` hook (`tool_input` and `tool_response`) — hooks/sdd-cache-post.sh:20
- HTTP response headers from origin server via `curl -sI -L` — hooks/sdd-cache-post.sh:82
- Environment variable `CLAUDE_PROJECT_DIR` — hooks/sdd-cache-post.sh:25
- Environment variable `SDD_CACHE_DEBUG` — hooks/sdd-cache-post.sh:26

## Outputs — required
- JSON cache file at `.claude/sdd-cache/<sha>.json` — hooks/sdd-cache-post.sh:4
- Debug log entries appended to `.claude/sdd-cache/.debug.log` if debugging is active — hooks/sdd-cache-post.sh:28

## Invokes — required
none

## Invoked by — required
- doc hooks/SDD-CACHE.md — hooks/SDD-CACHE.md:36

## Concepts named — required, verbatim
- `PostToolUse` — hooks/sdd-cache-post.sh:2 — used here
- `WebFetch` — hooks/sdd-cache-post.sh:2 — used here
- `ETag` — hooks/sdd-cache-post.sh:5 — used here
- `Last-Modified` — hooks/sdd-cache-post.sh:5 — used here
- `pre hook` — hooks/sdd-cache-post.sh:6 — used here
- `revalidate` — hooks/sdd-cache-post.sh:6 — used here
- `jq` — hooks/sdd-cache-post.sh:12 — used here
- `curl` — hooks/sdd-cache-post.sh:12 — used here
- `shasum` — hooks/sdd-cache-post.sh:12 — used here
- `sha256sum` — hooks/sdd-cache-post.sh:12 — used here
- `Debug logging` — hooks/sdd-cache-post.sh:22 — defined here
- `tool_input` — hooks/sdd-cache-post.sh:32 — used here
- `tool_response` — hooks/sdd-cache-post.sh:37 — used here
- `Claude Code` — hooks/sdd-cache-post.sh:37 — used here
- `hash_key` — hooks/sdd-cache-post.sh:67 — defined here
- `extract_header` — hooks/sdd-cache-post.sh:92 — defined here

## Structure
- set -euo pipefail — hooks/sdd-cache-post.sh:14
- Dependency checks (jq, curl, shasum/sha256sum) — hooks/sdd-cache-post.sh:16-18
- Input ingestion and debug logger definition — hooks/sdd-cache-post.sh:20-30
- Tool input parsing for URL and prompt — hooks/sdd-cache-post.sh:32-35
- Content extraction from tool_response variants — hooks/sdd-cache-post.sh:37-64
- Hash key calculation — hooks/sdd-cache-post.sh:67-77
- Origin HEAD request and header extraction — hooks/sdd-cache-post.sh:79-107
- Atomic cache file writing — hooks/sdd-cache-post.sh:109-133
- Script completion with exit 0 — hooks/sdd-cache-post.sh:135

## Scripts — required if type is script or the skill ships scripts
- path: `hooks/sdd-cache-post.sh`, language: bash, lines: 136
- documented invocation: `"tool_response": "useActionState(action, initialState) returns [state, formAction, isPending]"` — hooks/SDD-CACHE.md:92
- executed: yes
- actual command run: `echo '{"tool_input":{"url":"https://react.dev/reference/react/useActionState","prompt":"extract the signature"},"tool_response":"useActionState(action, initialState) returns [state, formAction, isPending]"}' | bash hooks/sdd-cache-post.sh`, stdout: (empty), actual exit code: 0
- documented exit codes: `exit 0` on missing dependencies (hooks/sdd-cache-post.sh:16, 17, 18), missing url (hooks/sdd-cache-post.sh:34), missing content (hooks/sdd-cache-post.sh:62), missing validators (hooks/sdd-cache-post.sh:112), and successful completion (hooks/sdd-cache-post.sh:135)
- for validators/gates: not a validation gate; always exits 0 to ensure post-tool execution never blocks host runner
- does output match documentation: yes, creates `.claude/sdd-cache/<sha>.json` when server provides HTTP validators

## Defects — required
none

## Observations
Employs defensive shell coding: strips carriage returns and uses awk paragraph parsing to extract the final HTTP response headers from redirect chains. Only stores entries when either `ETag` or `Last-Modified` is present, enforcing the project principle that unvalidatable memory is not trusted.

## Context cost
4567 bytes, approximately 1050 tokens.
