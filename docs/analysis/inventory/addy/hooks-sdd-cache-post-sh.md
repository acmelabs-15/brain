---
package: addy
path: hooks/sdd-cache-post.sh
type: script
bytes: 4567
unit: inv-addy-9
---

# hooks/sdd-cache-post.sh

## Purpose — required, verbatim
> "After WebFetch, stores the response body in .claude/sdd-cache/<sha>.json with the current ETag / Last-Modified captured via a HEAD request so the pre hook can revalidate on the next fetch." — hooks/sdd-cache-post.sh:4-6

## Design intent — required
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
- `#!/bin/bash`
- `# sdd-cache-post.sh — PostToolUse hook for WebFetch.`
- `dbg()`
- `hash_key()`
- `extract_header()`

## Scripts — required if type is script or the skill ships scripts
- path: `hooks/sdd-cache-post.sh`, language: bash, lines: 136
- documented invocation: `echo '{"tool_input":{"url":"https://react.dev/reference/react/useActionState","prompt":"extract the signature"},"tool_response":"..."}' | bash hooks/sdd-cache-post.sh` — hooks/SDD-CACHE.md:87-93
- executed: yes
- actual command run: `echo '{"tool_input":{"url":"https://react.dev/reference/react/useActionState","prompt":"extract"},"tool_response":"useActionState signature"}' | bash hooks/sdd-cache-post.sh`
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
