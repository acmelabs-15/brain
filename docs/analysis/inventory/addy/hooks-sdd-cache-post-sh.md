---
package: addy
path: hooks/sdd-cache-post.sh
type: file
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
verified: 2026-09-05 quote-check+coverage
---

# hooks/sdd-cache-post.sh

## Purpose — required, verbatim
> "PostToolUse hook for WebFetch." — hooks/sdd-cache-post.sh:2

## Design intent — required
Automated caching hook for web documentation fetched during `source-driven-development` sessions. By intercepting `WebFetch` post-tool responses, it captures the result payload and performs an out-of-band HTTP HEAD request to capture the origin server's ETag and Last-Modified validation headers, storing them alongside the prompt and fetched content in a hashed JSON file under `.claude/sdd-cache/`. Without this, repeated queries across or within sessions would redundantly re-fetch documentation pages or risk serving stale unvalidated documentation.

## Phase — required
addy:Build

## Inputs — required
- JSON payload on stdin with tool_input — hooks/sdd-cache-post.sh:32
- Tool response object or string in payload — hooks/sdd-cache-post.sh:42
- Origin HTTP HEAD headers via curl — hooks/sdd-cache-post.sh:82
- Environment variable CLAUDE_PROJECT_DIR — hooks/sdd-cache-post.sh:75
- Debug sentinel file — hooks/sdd-cache-post.sh:23

## Outputs — required
- Cache file `.claude/sdd-cache/<sha>.json` — hooks/sdd-cache-post.sh:4
- Debug log `.debug.log` — hooks/sdd-cache-post.sh:28

## Invokes — required
none

## Invoked by — required
- doc SDD-CACHE.md — hooks/SDD-CACHE.md:36

## Concepts named — required, verbatim
- `WebFetch` — hooks/sdd-cache-post.sh:2 — used here
- `ETag` — hooks/sdd-cache-post.sh:5 — used here
- `Last-Modified` — hooks/sdd-cache-post.sh:5 — used here
- `pre hook` — hooks/sdd-cache-post.sh:6 — used here
- `jq` — hooks/sdd-cache-post.sh:12 — used here
- `curl` — hooks/sdd-cache-post.sh:12 — used here
- `shasum` — hooks/sdd-cache-post.sh:12 — used here
- `sha256sum` — hooks/sdd-cache-post.sh:12 — used here
- `tool_input` — hooks/sdd-cache-post.sh:32 — used here
- `tool_response` — hooks/sdd-cache-post.sh:37 — used here

## Structure
none

## Scripts — required if type is script or the skill ships scripts
- path: `hooks/sdd-cache-post.sh`, language: bash, lines: 136
- documented invocation: `echo '{ "tool_input": { "url": "https://react.dev/reference/react/useActionState", "prompt": "extract the signature" }, "tool_response": "useActionState(action, initialState) returns [state, formAction, isPending]" }' | bash hooks/sdd-cache-post.sh` — hooks/SDD-CACHE.md:87-93
- **executed:** yes
- actual command run: `echo '{"tool_input":{"url":"https://react.dev/reference/react/useActionState","prompt":"extract the signature"},"tool_response":"useActionState(action, initialState) returns [state, formAction, isPending]"}' | bash hooks/sdd-cache-post.sh`, abridged stdout: `(empty)`, **actual exit code**: 0
- documented exit codes: "creates one file under" — hooks/SDD-CACHE.md:111 vs. actual exit paths in code:
  - `exit 0` — hooks/sdd-cache-post.sh:16 (missing jq)
  - `exit 0` — hooks/sdd-cache-post.sh:17 (missing curl)
  - `exit 0` — hooks/sdd-cache-post.sh:18 (missing shasum/sha256sum)
  - `exit 0` — hooks/sdd-cache-post.sh:34 (missing URL in tool_input)
  - `exit 0` — hooks/sdd-cache-post.sh:62 (could not extract content)
  - `exit 0` — hooks/sdd-cache-post.sh:112 (no validator from origin)
  - `exit 0` — hooks/sdd-cache-post.sh:135 (normal completion)
- for validators/gates: not a validation gate (PostToolUse side-effect cache writer)
- does the output match what the documentation claims? yes, creates cache file in `.claude/sdd-cache/` when validators are present and exits 0

## Defects — required
none

## Observations
Executes an out-of-band HEAD request via curl to capture ETag and Last-Modified headers because Claude Code's WebFetch tool response payload does not pass HTTP response headers to hooks. Uses the first 32 hex characters of sha256(URL) as the cache filename. Removes any pre-existing cache file if the origin response provides neither ETag nor Last-Modified.

## Context cost
4567 bytes, approximately 1100 tokens.
