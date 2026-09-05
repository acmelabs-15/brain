---
package: addy
path: .claude/commands/constraints.md
type: command
bytes: 2762
unit: inv-addy-1
deprecated: false
aliases: []
memo_inputs:
  - {path: .claude/commands/constraints.md, sha256: f6d8fdf69be74059db907cf474149eae336b6fbfbcbfb791546e321085612171}
method_sha: 647767d85acc14e391fbbf69d54d8543f31a0497dc52121aaf5997e1c6065f5f
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-04 quote-check+coverage
---

# .claude/commands/constraints.md

## Purpose — required, verbatim
> "Define and enforce this project's quality bar — interview, sane defaults, CONSTRAINTS.md" — .claude/commands/constraints.md:2

## Design intent — required
Establishes and enforces a repository's concrete quality gates through automatic project detection and a brief four-question user interview, producing `CONSTRAINTS.md` with explicit numerical floors, exceptions tracking, tiered verification scripts in `package.json`, and enforcement instructions in `CLAUDE.md`. Subcommands protect against agent regressions and ratchet quality floors.

## Phase — required
cross-phase

## Inputs — required
- Arguments: `$ARGUMENTS` (empty for initial setup, or subcommands `check`, `guard`, `ratchet`)
- Repository configuration files: `package.json`, `pyproject.toml`, or `go.mod`, test runners, lint configs, CI workflows
- User interview responses covering dimensions, enforcement behavior (block vs warn), target numbers, and latency tolerance

## Outputs — required
- `CONSTRAINTS.md` at repository root
- Package script additions in `package.json` (`check:fast`, `check:task`, `check:full`)
- Quality gate instruction line in `CLAUDE.md`
- Verification and audit reports from subcommands

## Invokes — required
- skill agent-skills:constraint-driven-development — .claude/commands/constraints.md:5

## Invoked by — required
none

## Concepts named — required, verbatim
- `constraint-driven-development` — .claude/commands/constraints.md:5 — used here
- `CONSTRAINTS.md` — .claude/commands/constraints.md:19 — defined here
- `Semgrep` — .claude/commands/constraints.md:21 — used here
- `gitleaks` — .claude/commands/constraints.md:21 — used here
- `osv-scanner` — .claude/commands/constraints.md:21 — used here
- `axe-core` — .claude/commands/constraints.md:21 — used here
- `Lighthouse` — .claude/commands/constraints.md:21 — used here
- `size-limit` — .claude/commands/constraints.md:21 — used here
- `dependency-cruiser` — .claude/commands/constraints.md:21 — used here
- `Stryker` — .claude/commands/constraints.md:21 — used here
- `CLAUDE.md` — .claude/commands/constraints.md:25 — used here

## Structure
Numbered lifecycle steps (1–7: Detect first, Interview, Write CONSTRAINTS.md, Install what each picked dimension needs, Place each check by cost, Point the agent at it, Verify) followed by Sub-commands specification (`/constraints check`, `/constraints guard`, `/constraints ratchet`).

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
Organizes constraint enforcement by cost and latency: seconds for edit loop (types, lint, secrets), under 90s for task boundaries (related tests, changed-line coverage), and thorough suites at review/CI. Subcommand `guard` specifically audits git diffs to catch agents weakening thresholds, suppressing lints, or skipping tests.

## Context cost
2762 bytes (~690 tokens). Invocations load `constraint-driven-development`.
