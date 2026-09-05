---
package: addy
path: .gemini/commands/constraints.toml
type: command
bytes: 2775
unit: inv-addy-2
aliases: []
verified: 2026-09-04 quote-check+coverage
memo_inputs:
  - {path: .gemini/commands/constraints.toml, sha256: 149ae460288b1f86487bb842ea5cf3476cdb2766a3f703985d83499cf8f6c817}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
---

# .gemini/commands/constraints.toml

## Purpose — required, verbatim
> "Define and enforce this project's quality bar — interview, sane defaults, CONSTRAINTS.md" — .gemini/commands/constraints.toml:1

## Design intent — required
Establishes and audits project quality standards through automated config detection, a focused four-question interview with defaults, tiered script placement by cost, and persistent governance in `CONSTRAINTS.md`.

## Phase — required
cross-phase

## Inputs — required
Project configuration files (`package.json`, `pyproject.toml`, `go.mod`, CI workflows, lint/coverage configs) (.gemini/commands/constraints.toml:10), interview answers (.gemini/commands/constraints.toml:12-16), and sub-command arguments (`check`, `guard`, `ratchet`) (.gemini/commands/constraints.toml:28-31).

## Outputs — required
`CONSTRAINTS.md` (.gemini/commands/constraints.toml:18), tool configurations and script targets (`check:fast`, `check:task`, `check:full`) in `package.json` (.gemini/commands/constraints.toml:20), and instruction lines in `AGENTS.md` and `GEMINI.md` (.gemini/commands/constraints.toml:24).

## Invokes — required
- skill constraint-driven-development — .gemini/commands/constraints.toml:4

## Invoked by — required
none

## Concepts named — required, verbatim
- `CONSTRAINTS.md` — .gemini/commands/constraints.toml:18 — used here
- `Floor section` — .gemini/commands/constraints.toml:18 — defined here
- `check:fast` — .gemini/commands/constraints.toml:20 — defined here
- `check:task` — .gemini/commands/constraints.toml:20 — defined here
- `check:full` — .gemini/commands/constraints.toml:20 — defined here
- `GEMINI.md` — .gemini/commands/constraints.toml:24 — used here
- `guard` — .gemini/commands/constraints.toml:30 — used here
- `ratchet` — .gemini/commands/constraints.toml:31 — used here

## Structure
none

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
- missing-path · sources/addy/GEMINI.md — .gemini/commands/constraints.toml:24: Mentions adding a line to `GEMINI.md`, but `GEMINI.md` does not exist in `sources/addy/` (variant `commands/constraints.toml:34` references `CLAUDE.md` alongside `AGENTS.md`).

## Observations
Forms variant pair V1 (95% shared lines) with `commands/constraints.toml` in `docs/analysis/manifest/addy-duplicates.md`. Differs at line 24 where this file specifies `GEMINI.md` instead of `CLAUDE.md`. Categorizes test/check runs into tiered cost boundaries (edit loop, task end, review/CI).

## Context cost
2775 bytes, ~690 tokens.
