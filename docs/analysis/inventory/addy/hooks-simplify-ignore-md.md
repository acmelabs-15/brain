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
verified: 2026-09-04 quote-check+coverage
---

# hooks/SIMPLIFY-IGNORE.md

## Purpose — required, verbatim
> "Block-level protection for `/code-simplify`. Mark code that should never be simplified — the model won't see it." — hooks/SIMPLIFY-IGNORE.md:3

## Design intent — required
User and agent documentation for the `simplify-ignore.sh` hook. It documents how to annotate code with `simplify-ignore-start` and `simplify-ignore-end` markers (with optional reason annotations) to prevent the `/code-simplify` command from rewriting performance-critical, security-sensitive, or unrolled code blocks. It specifies `.claude/settings.json` hook registration across `PreToolUse Read`, `PostToolUse Edit|Write`, and `Stop` events, describes placeholder replacement mechanics, and explains crash recovery. Without it, users would not know how to protect code blocks during automated simplification.

## Phase — required
none

## Inputs — required
none

## Outputs — required
none

## Invokes — required
- command code-simplify — hooks/SIMPLIFY-IGNORE.md:3
- script simplify-ignore.sh — hooks/SIMPLIFY-IGNORE.md:27

## Invoked by — required
orphan

## Concepts named — required, verbatim
- `simplify-ignore` — hooks/SIMPLIFY-IGNORE.md:1 — defined here
- `code-simplify` — hooks/SIMPLIFY-IGNORE.md:3 — used here
- `PreToolUse` — hooks/SIMPLIFY-IGNORE.md:24 — used here
- `PostToolUse` — hooks/SIMPLIFY-IGNORE.md:30 — used here
- `Stop` — hooks/SIMPLIFY-IGNORE.md:36 — used here
- `simplify-ignore-start` — hooks/SIMPLIFY-IGNORE.md:10 — defined here
- `simplify-ignore-end` — hooks/SIMPLIFY-IGNORE.md:16 — defined here

## Structure
Section headings in order (verbatim):
- `# simplify-ignore hook` — hooks/SIMPLIFY-IGNORE.md:1
- `## Setup` — hooks/SIMPLIFY-IGNORE.md:5
- `## How it works` — hooks/SIMPLIFY-IGNORE.md:49
- `## Annotation syntax` — hooks/SIMPLIFY-IGNORE.md:61
- `## Crash recovery` — hooks/SIMPLIFY-IGNORE.md:71
- `## Known limitations` — hooks/SIMPLIFY-IGNORE.md:81
- `## Requirements` — hooks/SIMPLIFY-IGNORE.md:88

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
- orphan · hooks/SIMPLIFY-IGNORE.md:1 · Hook documentation file is not linked or referenced from README.md or hooks/hooks.json.

## Observations
- Documents the three-phase lifecycle (`PreToolUse Read`, `PostToolUse Edit|Write`, `Stop`) that ensures code is hidden when read by the model, re-expanded when edited, and permanently restored upon session stop.
- Details crash recovery: running `echo '{}' | bash hooks/simplify-ignore.sh` restores backups from `.claude/.simplify-ignore-cache/`.

## Context cost
3863 bytes (~965 tokens). Markdown documentation.
