---
package: addy
path: hooks/SIMPLIFY-IGNORE.md
type: doc
bytes: 3863
unit: inv-addy-33
deprecated: false
aliases: []
memo_inputs:
  - {path: hooks/SIMPLIFY-IGNORE.md, sha256: a7121b0505c960a8a7a7f09600c9fa81464fc403ab297b95d23f5109b13ea52a}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# hooks/SIMPLIFY-IGNORE.md

## Purpose — required, verbatim
> "Block-level protection for `/code-simplify`. Mark code that should never be simplified — the model won't see it." — hooks/SIMPLIFY-IGNORE.md:3

## Design intent — required
Documentation guide for the `simplify-ignore.sh` hook. Explains how developers can annotate code blocks using `simplify-ignore-start` and `simplify-ignore-end` comments so that sensitive, performance-critical, or manually optimized code is obscured from AI models during code simplification passes and safely restored afterwards.

## Phase — required
addy:Review

## Inputs — required
- Annotation markers in source files — hooks/SIMPLIFY-IGNORE.md:64, 66
- Hook events registered in `.claude/settings.json` — hooks/SIMPLIFY-IGNORE.md:19

## Outputs — required
- Hook configuration instructions, syntax documentation, and crash recovery procedures — hooks/SIMPLIFY-IGNORE.md:19, 61, 71

## Invokes — required
- command /code-simplify — hooks/SIMPLIFY-IGNORE.md:3
- script hooks/simplify-ignore.sh — hooks/SIMPLIFY-IGNORE.md:27

## Invoked by — required
none

## Concepts named — required, verbatim
- `simplify-ignore hook` — hooks/SIMPLIFY-IGNORE.md:1 — defined here
- `/code-simplify` — hooks/SIMPLIFY-IGNORE.md:3 — used here
- `PreToolUse` — hooks/SIMPLIFY-IGNORE.md:24 — used here
- `PostToolUse` — hooks/SIMPLIFY-IGNORE.md:30 — used here
- `Stop` — hooks/SIMPLIFY-IGNORE.md:36 — used here
- `.claude/.simplify-ignore-cache/` — hooks/SIMPLIFY-IGNORE.md:47 — used here

## Structure
- `## Setup` — hooks/SIMPLIFY-IGNORE.md:5
- `## How it works` — hooks/SIMPLIFY-IGNORE.md:49
- `## Annotation syntax` — hooks/SIMPLIFY-IGNORE.md:61
- `## Crash recovery` — hooks/SIMPLIFY-IGNORE.md:71
- `## Known limitations` — hooks/SIMPLIFY-IGNORE.md:81
- `## Requirements` — hooks/SIMPLIFY-IGNORE.md:88

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
Documents crash recovery via `echo '{}' | bash hooks/simplify-ignore.sh` to restore backed up files if Claude Code aborts before the Stop hook fires. Explicitly documents known limitations regarding single-line block scope and comment closers for templating languages.

## Context cost
3863 bytes, approximately 950 tokens.
