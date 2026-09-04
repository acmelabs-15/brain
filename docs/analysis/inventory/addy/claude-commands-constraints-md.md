---
package: addy
path: .claude/commands/constraints.md
type: command
bytes: 2762
unit: inv-addy-1
aliases: []
memo_inputs:
  - {path: .claude/commands/constraints.md, sha256: f6d8fdf69be74059db907cf474149eae336b6fbfbcbfb791546e321085612171}
method_sha: 363a57b543666244096e150abfb5435c4aa6c3c72e543f90b5600ab3507ac791
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-04 quote-check+coverage
---

# .claude/commands/constraints.md

## Purpose — required, verbatim
> "Define and enforce this project's quality bar — interview, sane defaults, CONSTRAINTS.md" — .claude/commands/constraints.md:2

## Design intent — required
Enforces repository quality boundaries by detecting current project tooling, conducting a focused ≤4 question interview with defaults, generating `CONSTRAINTS.md` (Floor, enforced metrics, measured values, exceptions table), installing appropriate verification tools (Semgrep, gitleaks, osv-scanner, axe-core, Lighthouse, size-limit, dependency-cruiser, Stryker), placing checks by cost (`check:fast`, `check:task`, `check:full`), updating `CLAUDE.md`, and verifying the current branch. Supports subcommands `check`, `guard`, and `ratchet`.

## Phase — required
cross-phase

## Inputs — required
- `$ARGUMENTS` (default setup vs subcommands: `check`, `guard`, `ratchet`)
- Project configuration files (`package.json`, `pyproject.toml`, `go.mod`), test runner, lint configs, coverage output, CI workflows
- Git diff

## Outputs — required
- `CONSTRAINTS.md` at repository root
- `package.json` scripts (`check:fast`, `check:task`, `check:full`)
- `CLAUDE.md` instructions

## Invokes — required
- skill constraint-driven-development — .claude/commands/constraints.md:5

## Invoked by — required
none

## Concepts named — required, verbatim
- `constraint-driven-development` — .claude/commands/constraints.md:5 — used here
- `Detect first` — .claude/commands/constraints.md:11 — defined here
- `CONSTRAINTS.md` — .claude/commands/constraints.md:2,19,21,25 — defined here
- `Floor section` — .claude/commands/constraints.md:19 — defined here
- `exceptions table` — .claude/commands/constraints.md:19 — defined here
- `check:fast` — .claude/commands/constraints.md:21 — defined here
- `check:task` — .claude/commands/constraints.md:21 — defined here
- `check:full` — .claude/commands/constraints.md:21 — defined here
- `/constraints check` — .claude/commands/constraints.md:30 — defined here
- `/constraints guard` — .claude/commands/constraints.md:31 — defined here
- `/constraints ratchet` — .claude/commands/constraints.md:32 — defined here

## Structure
- Steps 1–7 numbered list
- `Sub-commands:` list

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
- Explicit principle: "A dimension with a number and no tool behind it is an aspiration" (.claude/commands/constraints.md:21).
- Cost-based check tiering: edit loop (seconds), task end (<90s), review/CI (deep).

## Context cost
2762 bytes, ~690 tokens. Transitive cost: loads `constraint-driven-development` (20880 bytes, ~5220 tokens).
