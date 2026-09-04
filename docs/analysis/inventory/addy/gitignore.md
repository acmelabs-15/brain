---
package: addy
path: .gitignore
type: config
bytes: 121
unit: inv-addy-1
aliases: []
memo_inputs:
  - {path: .gitignore, sha256: 7a4a912b5a22980953726b287f47eb802c9318c7cea5ccdf3cbbb20908cea7e6}
method_sha: 363a57b543666244096e150abfb5435c4aa6c3c72e543f90b5600ab3507ac791
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-04 quote-check+coverage
---

# .gitignore

## Purpose — required, verbatim
> ".DS_Store" — .gitignore:1
(no explicit purpose statement)

## Design intent — required
Specifies intentionally untracked files and directories for Git, excluding operating system metadata, package dependencies, environment secrets, log files, evaluation outputs, and tool cache artifacts.

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
- `node_modules/` — .gitignore:2 — defined here
- `.claude/.simplify-ignore-cache/` — .gitignore:6 — defined here
- `.claude/sdd-cache/` — .gitignore:7 — defined here
- `evals/results/` — .gitignore:8 — defined here

## Structure
none

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
Excludes plugin-specific cache directories generated during code simplification and spec-driven development (`.claude/.simplify-ignore-cache/`, `.claude/sdd-cache/`).

## Context cost
121 bytes, ~30 tokens.
