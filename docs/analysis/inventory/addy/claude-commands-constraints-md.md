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
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# .claude/commands/constraints.md

## Purpose — required, verbatim
> "Define and enforce this project's quality bar — interview, sane defaults, CONSTRAINTS.md" — .claude/commands/constraints.md:2

## Design intent — required
Establishes and enforces a repository-wide automated quality bar via `CONSTRAINTS.md`. Through automated project detection and a brief four-question interview, it configures standard tooling (Semgrep, gitleaks, osv-scanner, axe-core, Lighthouse, size-limit, dependency-cruiser, Stryker) into cost-tiered check scripts, points agent instructions in `CLAUDE.md` at the file, and provides sub-commands to prevent agents from ratcheting down or circumventing quality gates.

## Phase — required
addy:Define

## Inputs — required
- Command arguments `$ARGUMENTS` — .claude/commands/constraints.md:7
- Existing project configuration: `package.json`, `pyproject.toml`, `go.mod`, test runner, lint configs, coverage output, CI workflows, and agent harness — .claude/commands/constraints.md:11
- User answers to up to four interview questions — .claude/commands/constraints.md:13
- Git diff against current branch — .claude/commands/constraints.md:23, 31

## Outputs — required
- `CONSTRAINTS.md` at repository root — .claude/commands/constraints.md:19
- Scripts in `package.json`: `check:fast`, `check:task`, `check:full` — .claude/commands/constraints.md:21
- Instruction line added to `CLAUDE.md` — .claude/commands/constraints.md:25
- Constraint check report — .claude/commands/constraints.md:30
- Constraint guard inspection report on diff — .claude/commands/constraints.md:31
- Constraint ratchet report recording measured values — .claude/commands/constraints.md:32

## Invokes — required
- skill agent-skills:constraint-driven-development — .claude/commands/constraints.md:5

## Invoked by — required
none

## Concepts named — required, verbatim
`CONSTRAINTS.md` — .claude/commands/constraints.md:2, 19, 21, 25 — defined here | used here
`package.json` — .claude/commands/constraints.md:11, 21 — used here
`pyproject.toml` — .claude/commands/constraints.md:11 — used here
`go.mod` — .claude/commands/constraints.md:11 — used here
`Floor` — .claude/commands/constraints.md:19 — defined here
`Semgrep` — .claude/commands/constraints.md:21 — used here
`gitleaks` — .claude/commands/constraints.md:21 — used here
`osv-scanner` — .claude/commands/constraints.md:21 — used here
`axe-core` — .claude/commands/constraints.md:21 — used here
`Lighthouse` — .claude/commands/constraints.md:21 — used here
`size-limit` — .claude/commands/constraints.md:21 — used here
`dependency-cruiser` — .claude/commands/constraints.md:21 — used here
`Stryker` — .claude/commands/constraints.md:21 — used here
`check:fast` — .claude/commands/constraints.md:21 — defined here
`check:task` — .claude/commands/constraints.md:21 — defined here
`check:full` — .claude/commands/constraints.md:21 — defined here
`CLAUDE.md` — .claude/commands/constraints.md:25 — used here
`/constraints check` — .claude/commands/constraints.md:30 — defined here
`/constraints guard` — .claude/commands/constraints.md:31 — defined here
`/constraints ratchet` — .claude/commands/constraints.md:32 — defined here

## Structure
- `Sub-commands:` — .claude/commands/constraints.md:29

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
Places checks into three distinct cost tiers: edit loop (types, lint, secrets in seconds), task end (related tests, changed-line coverage under 90s), and review/CI (slower checks). The `/constraints guard` sub-command explicitly defends against agents weakening quality bars by deleting tests or adding suppression comments.

## Context cost
2762 bytes, approximately 650 tokens.
