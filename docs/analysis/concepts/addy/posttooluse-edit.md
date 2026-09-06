---
package: addy
name: PostToolUse Edit
slug: posttooluse-edit
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

# PostToolUse Edit

## Definition — verbatim
> "PostToolUse Edit  → expands placeholders, re-filters so file stays hidden" — hooks/simplify-ignore.sh:5

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| hooks/simplify-ignore.sh | 5 | used here | Hook event comment describing placeholder expansion and re-filtering after Edit tool runs |

## Consumes
Modified file on disk containing LLM edits and placeholder tokens

## Produces
Reconstituted source code incorporating model changes while preserving ignored blocks, re-filtered for continued masking

## When applied
Fires immediately after Claude Code completes an Edit tool invocation

## Sub-concepts
none

## Part of
simplify-ignore-hook

## Implementation status
clean

## Design notes
Post-execution gate that intercepts tool edits, restores original protected blocks from cache, merges them with model edits, and immediately re-masks the file so protected code never remains exposed on disk during the session.
