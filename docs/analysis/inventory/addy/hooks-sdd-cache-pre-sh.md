---
package: addy
path: hooks/sdd-cache-pre.sh
type: script
bytes: 4261
unit: inv-addy-9
---

# hooks/sdd-cache-pre.sh

## Purpose — required, verbatim
> "HTTP resource cache keyed by URL. Freshness is delegated to the origin via HTTP validators; 304 Not Modified is the only signal to serve from cache. On hit, exits 2 and writes the cached body to stderr so Claude Code can deliver it to the agent in place of the WebFetch result. Otherwise exits 0." — hooks/sdd-cache-pre.sh:4-7

## Design intent — required
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
- `#!/bin/bash`
- `# sdd-cache-pre.sh — PreToolUse hook for WebFetch.`
- `dbg()`
- `hash_key()`

## Scripts — required if type is script or the skill ships scripts
- path: `hooks/sdd-cache-pre.sh`, language: bash, lines: 107
- documented invocation: `echo '{"tool_input":{"url":"https://react.dev/reference/react/useActionState","prompt":"extract the signature"}}' | bash hooks/sdd-cache-pre.sh` — hooks/SDD-CACHE.md:100-105
- executed: yes
- actual command run: `echo '{"tool_input":{"url":"https://react.dev/reference/react/useActionState","prompt":"extract"}}' | bash hooks/sdd-cache-pre.sh`
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
