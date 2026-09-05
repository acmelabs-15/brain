---
package: addy
path: hooks/sdd-cache-pre.sh
type: file
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
verified: 2026-09-05 quote-check+coverage
---

# hooks/sdd-cache-pre.sh

## Purpose — required, verbatim
> "PreToolUse hook for WebFetch." — hooks/sdd-cache-pre.sh:2

## Design intent — required
Conditional HTTP revalidation hook for Claude Code's WebFetch tool. Before a fetch executes, it inspects whether a cached response exists for the requested URL, retrieves stored ETag and Last-Modified headers, and executes an HTTP HEAD request with If-None-Match and If-Modified-Since. When the origin returns 304 Not Modified, the hook terminates tool execution by exiting with code 2 and emitting the cached document payload to stderr with cache metadata and demarcated content markers. If modified, missing, or unvalidated, it exits 0 to allow the live WebFetch call to proceed.

## Phase — required
addy:Build

## Inputs — required
- JSON payload on stdin with tool_input — hooks/sdd-cache-pre.sh:37
- Cached JSON file in cache directory — hooks/sdd-cache-pre.sh:51
- Environment variable CLAUDE_PROJECT_DIR — hooks/sdd-cache-pre.sh:50
- Debug sentinel file — hooks/sdd-cache-pre.sh:28

## Outputs — required
- On HTTP 304 hit, stderr block with cached payload between delimiters — hooks/sdd-cache-pre.sh:102, 104
- Debug log `.debug.log` — hooks/sdd-cache-pre.sh:33

## Invokes — required
none

## Invoked by — required
- doc SDD-CACHE.md — hooks/SDD-CACHE.md:24

## Concepts named — required, verbatim
- `WebFetch` — hooks/sdd-cache-pre.sh:2 — used here
- `304 Not Modified` — hooks/sdd-cache-pre.sh:5 — used here
- `ETag` — hooks/sdd-cache-pre.sh:10 — used here
- `Last-Modified` — hooks/sdd-cache-pre.sh:10 — used here
- `jq` — hooks/sdd-cache-pre.sh:16 — used here
- `curl` — hooks/sdd-cache-pre.sh:16 — used here
- `shasum` — hooks/sdd-cache-pre.sh:16 — used here
- `sha256sum` — hooks/sdd-cache-pre.sh:16 — used here
- `tool_input` — hooks/sdd-cache-pre.sh:37 — used here

## Structure
none

## Scripts — required if type is script or the skill ships scripts
- path: `hooks/sdd-cache-pre.sh`, language: bash, lines: 107
- documented invocation: `echo '{ "tool_input": { "url": "https://react.dev/reference/react/useActionState", "prompt": "extract the signature" } }' | bash hooks/sdd-cache-pre.sh` — hooks/SDD-CACHE.md:100-105
- **executed:** yes
- actual command run: `echo '{"tool_input":{"url":"https://react.dev/reference/react/useActionState","prompt":"extract the signature"}}' | bash hooks/sdd-cache-pre.sh`, abridged stdout: `[sdd-cache] Cache hit for https://react.dev/reference/react/useActionState\n\nRevalidated via HTTP 304...`, **actual exit code**: 2
- documented exit codes: "with the cached content on stderr" — hooks/SDD-CACHE.md:112 vs. actual exit paths in code:
  - `exit 0` — hooks/sdd-cache-pre.sh:21 (missing jq)
  - `exit 0` — hooks/sdd-cache-pre.sh:22 (missing curl)
  - `exit 0` — hooks/sdd-cache-pre.sh:23 (missing shasum/sha256sum)
  - `exit 0` — hooks/sdd-cache-pre.sh:38 (missing URL in tool_input)
  - `exit 0` — hooks/sdd-cache-pre.sh:53 (no cache file)
  - `exit 0` — hooks/sdd-cache-pre.sh:64 (no validator in cache)
  - `exit 0` — hooks/sdd-cache-pre.sh:79 (server status not 304)
  - `exit 0` — hooks/sdd-cache-pre.sh:84 (empty content field)
  - `exit 2` — hooks/sdd-cache-pre.sh:106 (cache hit, serving cached body to agent)
- for validators/gates: not a validation gate; PreToolUse interceptor where exit code 2 tells Claude Code to short-circuit WebFetch and deliver stderr to the agent
- does the output match what the documentation claims? yes, exits 2 on 304 with cached content block printed to stderr

## Defects — required
none

## Observations
Uses Claude Code's PreToolUse exit code 2 convention to short-circuit WebFetch calls cleanly. Surfaces the original fetch prompt in stderr so the current agent can determine whether an earlier reading with a different prompt context remains applicable. Emits output via printf rather than heredocs to prevent shell evaluation of backticks or dollar signs in cached code examples.

## Context cost
4261 bytes, approximately 1000 tokens.
