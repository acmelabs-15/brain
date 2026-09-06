---
package: addy
name: PostToolUse Write
slug: posttooluse-write
kind: gate
package_phase: addy:Review
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: hooks/simplify-ignore.sh, sha256: 1256c677adbce33f3c361793d7dae2405fb02a7efc07b19cc8f42134def8a5cd}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# PostToolUse Write

## Definition — verbatim
> "PostToolUse Write → expands placeholders, re-filters so file stays hidden" — hooks/simplify-ignore.sh:6

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| hooks/simplify-ignore.sh | 6 | used here | Hook event comment describing placeholder expansion and re-filtering after Write tool runs |

## Consumes
File written by Claude Code Write tool containing placeholder markers

## Produces
Reconstituted source code with cached blocks restored and re-filtered

## When applied
Fires immediately after Claude Code completes a Write tool invocation

## Sub-concepts
none

## Part of
simplify-ignore-hook

## Implementation status
clean

## Design notes
Post-execution gate that intercepts full file writes from coding assistants, reconstitutes protected blocks from cache, and re-filters the output to maintain block masking.
