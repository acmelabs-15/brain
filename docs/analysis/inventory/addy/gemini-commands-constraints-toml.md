---
package: addy
path: .gemini/commands/constraints.toml
type: command
bytes: 2775
unit: inv-addy-1
aliases: []
memo_inputs:
  - {path: .gemini/commands/constraints.toml, sha256: 149ae460288b1f86487bb842ea5cf3476cdb2766a3f703985d83499cf8f6c817}
method_sha: 363a57b543666244096e150abfb5435c4aa6c3c72e543f90b5600ab3507ac791
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-04 quote-check+coverage
---

# .gemini/commands/constraints.toml

## Purpose — required, verbatim
> "Define and enforce this project's quality bar — interview, sane defaults, CONSTRAINTS.md" — .gemini/commands/constraints.toml:1

## Design intent — required
Gemini/Antigravity slash command configuring repository quality constraints, executing automated environment detection, conducting a ≤4 question interview, generating `CONSTRAINTS.md` (Floor, enforced thresholds, current measured values, exceptions table), mapping checks by execution cost into `package.json` (`check:fast`, `check:task`, `check:full`), updating `AGENTS.md` and `GEMINI.md`, and verifying the current branch. Supports subcommands `check`, `guard`, and `ratchet`.

## Phase — required
cross-phase

## Inputs — required
- `$ARGUMENTS` (default setup vs subcommands: `check`, `guard`, `ratchet`)
- Project manifest (`package.json`, `pyproject.toml`, `go.mod`), test runner, lint configurations, coverage reports, CI workflows
- Git diff

## Outputs — required
- `CONSTRAINTS.md` at repository root
- `package.json` scripts (`check:fast`, `check:task`, `check:full`)
- Instruction lines in `AGENTS.md` and `GEMINI.md`

## Invokes — required
- skill constraint-driven-development — .gemini/commands/constraints.toml:4

## Invoked by — required
none

## Concepts named — required, verbatim
- `constraint-driven-development` — .gemini/commands/constraints.toml:4 — used here
- `Detect first` — .gemini/commands/constraints.toml:10 — defined here
- `Floor section` — .gemini/commands/constraints.toml:18 — defined here
- `CONSTRAINTS.md` — .gemini/commands/constraints.toml:1,18,20,24 — defined here
- `GEMINI.md` — .gemini/commands/constraints.toml:24 — used here
- `check:fast` — .gemini/commands/constraints.toml:20 — defined here
- `check:task` — .gemini/commands/constraints.toml:20 — defined here
- `check:full` — .gemini/commands/constraints.toml:20 — defined here
- `/constraints check` — .gemini/commands/constraints.toml:29 — defined here
- `/constraints guard` — .gemini/commands/constraints.toml:30 — defined here
- `/constraints ratchet` — .gemini/commands/constraints.toml:31 — defined here

## Structure
- Steps 1–7 numbered list
- `Sub-commands:` list

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
VARIANT pair V1 with `commands/constraints.toml` (divergence documented in `_divergence/divergence-commands-constraints-toml--gemini-commands-constraints-toml.md`).

## Context cost
2775 bytes, ~695 tokens. Transitive cost: loads `constraint-driven-development` (20880 bytes, ~5220 tokens).
