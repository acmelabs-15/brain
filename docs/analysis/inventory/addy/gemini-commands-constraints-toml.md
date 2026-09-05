---
package: addy
path: .gemini/commands/constraints.toml
type: command
bytes: 2775
unit: inv-addy-2
deprecated: false
aliases: []
memo_inputs:
  - {path: .gemini/commands/constraints.toml, sha256: 149ae460288b1f86487bb842ea5cf3476cdb2766a3f703985d83499cf8f6c817}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# .gemini/commands/constraints.toml

## Purpose — required, verbatim
> "Define and enforce this project's quality bar — interview, sane defaults, CONSTRAINTS.md" — .gemini/commands/constraints.toml:1

## Design intent — required
Establishes and enforces a verifiable quality floor across multiple engineering dimensions (coverage, security, performance, accessibility, architecture). Defines `/constraints` command for Gemini CLI to detect project configuration, run a focused 4-question interview, author `CONSTRAINTS.md`, install tooling, configure fast/task/full package scripts, and guard against quality regressions.

## Phase — required
addy:Define

## Inputs — required
Command arguments (`$ARGUMENTS`: `check`, `guard`, `ratchet`, or empty for setup, .gemini/commands/constraints.toml:6,28-31); project files: `package.json` / `pyproject.toml` / `go.mod`, test runners, lint configs, CI workflows, git diff (.gemini/commands/constraints.toml:10,30); brief 4-question user interview (.gemini/commands/constraints.toml:12-16).

## Outputs — required
`CONSTRAINTS.md` at repository root (.gemini/commands/constraints.toml:18); package script additions `check:fast`, `check:task`, `check:full` in `package.json` (.gemini/commands/constraints.toml:20); agent instructions in `AGENTS.md` and `GEMINI.md` (.gemini/commands/constraints.toml:24); compliance reports, guard warnings, and ratcheted floor metrics (.gemini/commands/constraints.toml:29-31).

## Invokes — required
- skill constraint-driven-development — .gemini/commands/constraints.toml:4

## Invoked by — required
none

## Concepts named — required, verbatim
- `constraint-driven-development` — .gemini/commands/constraints.toml:4 — used here
- `CONSTRAINTS.md` — .gemini/commands/constraints.toml:18 — used here
- `Floor section` — .gemini/commands/constraints.toml:18 — used here
- `exceptions table` — .gemini/commands/constraints.toml:18 — used here
- `check:fast` — .gemini/commands/constraints.toml:20 — used here
- `check:task` — .gemini/commands/constraints.toml:20 — used here
- `check:full` — .gemini/commands/constraints.toml:20 — used here
- `/constraints check` — .gemini/commands/constraints.toml:29 — defined here
- `/constraints guard` — .gemini/commands/constraints.toml:30 — defined here
- `/constraints ratchet` — .gemini/commands/constraints.toml:31 — defined here

## Structure
- "Sub-commands:" — .gemini/commands/constraints.toml:28

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
Forms VARIANT pair V1 with `commands/constraints.toml`. Line 24 instructs the agent to update `AGENTS.md` and `GEMINI.md` (whereas the variant in `commands/constraints.toml` updates `AGENTS.md` and `CLAUDE.md`).

## Context cost
2775 bytes, ~700 tokens.
