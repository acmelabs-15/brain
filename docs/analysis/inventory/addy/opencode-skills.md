---
package: addy
path: .opencode/skills
type: config
bytes: 0
unit: inv-addy-1
aliases: []
memo_inputs:
  - {path: .opencode/skills, sha256: MISSING}
method_sha: 363a57b543666244096e150abfb5435c4aa6c3c72e543f90b5600ab3507ac791
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-04 quote-check+coverage
---

# .opencode/skills

## Purpose — required, verbatim
(no explicit purpose statement; symbolic link pointing to ../skills/)

## Design intent — required
Enables OpenCode agent/CLI to auto-discover and load the repository's skills from standard OpenCode directory `.opencode/skills` by symlinking to `../skills/` without duplicating skill files.

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
none

## Structure
none

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
Symbolic link pointing to `../skills/` for OpenCode runtime discovery. Per METHOD.md §1.1, symlink rows require no separate inventory card because their target rows are inventoried.

## Context cost
0 bytes, ~0 tokens.
