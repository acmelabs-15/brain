---
package: addy
name: PreToolUse Read
slug: pretooluse-read
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

# PreToolUse Read

## Definition — verbatim
> "PreToolUse Read   → backs up file, replaces blocks with BLOCK_<hash> in-place" — hooks/simplify-ignore.sh:4

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| hooks/simplify-ignore.sh | 4 | used here | Hook event comment describing file backup and in-place placeholder masking before Read tool runs |

## Consumes
Unfiltered source file targeted by Claude Code Read tool

## Produces
Original file backup in cache and placeholder-filtered file on disk

## When applied
Fires before Claude Code executes a Read tool call during code simplification

## Sub-concepts
none

## Part of
simplify-ignore-hook

## Implementation status
clean

## Design notes
Lifecycle interception gate that executes prior to tool file reads, backing up source files and replacing designated ignore blocks with hash-keyed placeholders to hide sensitive code from model visibility.
