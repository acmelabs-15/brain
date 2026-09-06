---
package: matt
path: .gitignore
type: file
bytes: 21
unit: inv-matt-2
deprecated: false
aliases: []
memo_inputs:
  - {path: .gitignore, sha256: a7e7370254fc919ab78ddf61e0e3763b80ea7ade18863c6650c329da44b8ec7b}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# .gitignore

## Purpose — required, verbatim
> "node_modules" — .gitignore:1 (no explicit purpose statement)

## Design intent — required
Specifies filesystem ignore rules for git version control in the repository, excluding untracked npm dependencies in `node_modules` and local Claude Code workspace state in `.claude`.

## Phase — required
none

## Inputs — required
none

## Outputs — required
none

## Invokes — required
none

## Invoked by — required
orphan

## Concepts named — required, verbatim
- `node_modules` — .gitignore:1 — used here
- `.claude` — .gitignore:2 — used here

## Structure
Ignore patterns list:
- node_modules
- .claude

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
Minimal two-pattern gitignore file. Focuses exclusively on Node package dependencies and local Claude Code environment data.

## Context cost
21 bytes, ~10 tokens. Loads no external files.
