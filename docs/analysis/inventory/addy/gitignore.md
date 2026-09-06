---
package: addy
path: .gitignore
type: file
bytes: 121
unit: inv-addy-3
aliases: []
memo_inputs:
  - {path: .gitignore, sha256: 7a4a912b5a22980953726b287f47eb802c9318c7cea5ccdf3cbbb20908cea7e6}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# .gitignore

## Purpose — required, verbatim
> ".DS_Store" — .gitignore:1 (no explicit purpose statement)

## Design intent — required
Standard git exclusion configuration preventing OS temporary files, dependencies, environment secrets, log files, eval result outputs, and tool-specific caches from being tracked or committed into the repository.

## Phase — required
none

## Inputs — required
Git working tree status and file tracking operations.

## Outputs — required
Ignored files and paths excluded from git status and commits.

## Invokes — required
none

## Invoked by — required
none

## Concepts named — required, verbatim
none

## Structure
- Ignore patterns list (.DS_Store through __pycache__/)

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
Explicitly ignores `.claude/.simplify-ignore-cache/` (line 6), `.claude/sdd-cache/` (line 7), and `evals/results/` (line 8), indicating that slash commands and evals maintain internal filesystem caches and artifact outputs.

## Context cost
121 bytes (~30 tokens). Minimal static ignore file.
