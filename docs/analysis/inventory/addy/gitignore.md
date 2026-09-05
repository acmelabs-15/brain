---
package: addy
path: .gitignore
type: file
bytes: 121
unit: inv-addy-3
deprecated: false
aliases: []
verified: 2026-09-04 quote-check+coverage
memo_inputs:
  - {path: .gitignore, sha256: 7a4a912b5a22980953726b287f47eb802c9318c7cea5ccdf3cbbb20908cea7e6}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
---

# .gitignore

## Purpose — required, verbatim
> ".DS_Store" (no explicit purpose statement) — .gitignore:1

## Design intent — required
Specifies files and patterns that Git must not track. Excludes OS metadata, package dependencies, environment secret files, debug logs, Python cache directories, evaluation result artifacts, and session caching directories used by skills and hooks.

## Phase — required
none

## Inputs — required
none

## Outputs — required
none

## Invokes — required
none

## Invoked by — required
none

## Concepts named — required, verbatim
- `.simplify-ignore-cache` — .gitignore:6 — used here
- `sdd-cache` — .gitignore:7 — used here

## Structure
- (no headings)

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
Excludes `.claude/.simplify-ignore-cache/` (.gitignore:6) and `.claude/sdd-cache/` (.gitignore:7), confirming that hook scripts and SDD cache mechanisms create state files under `.claude/`.

## Context cost
121 bytes, ~35 tokens.
