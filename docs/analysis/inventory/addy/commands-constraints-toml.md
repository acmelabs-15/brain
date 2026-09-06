---
package: addy
path: commands/constraints.toml
type: command
bytes: 2775
unit: inv-addy-3
aliases: []
memo_inputs:
  - {path: commands/constraints.toml, sha256: bcc519db853a0ebdf0b07f378e2bc87cb112508d28e41f0d39dd1b17aa68def4}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# commands/constraints.toml

## Purpose — required, verbatim
> "Define and enforce this project's quality bar — interview, sane defaults, CONSTRAINTS.md" — commands/constraints.toml:1

## Design intent — required
Slash command configuration for `/constraints` providing automated definition, configuration, and enforcement of a repository's engineering quality bar. Detects existing project toolchains, conducts a 4-question interview, writes `CONSTRAINTS.md` with explicit floors, installs required verification tools, tiers checks by cost, instructs agents via `AGENTS.md` and `CLAUDE.md`, and provides sub-commands `/constraints check`, `/constraints guard`, and `/constraints ratchet`.

## Phase — required
addy:Define

## Inputs — required
Command arguments (`$ARGUMENTS` — commands/constraints.toml:6, `check`, `guard`, `ratchet`), project configuration files (`package.json`, `pyproject.toml`, `go.mod`, test runners, lint configs, CI workflows), and interview answers.

## Outputs — required
`CONSTRAINTS.md` at repository root with a Floor section and exceptions table (commands/constraints.toml:18), command additions to `package.json` (`check:fast`, `check:task`, `check:full`), updates to `AGENTS.md` and `CLAUDE.md`, and constraint verification reports.

## Invokes — required
- skill constraint-driven-development — commands/constraints.toml:4
- doc AGENTS.md — commands/constraints.toml:24
- doc CLAUDE.md — commands/constraints.toml:24

## Invoked by — required
none

## Concepts named — required, verbatim
- `CONSTRAINTS.md` — commands/constraints.toml:1 — defined here
- `Floor` — commands/constraints.toml:18 — defined here
- `Place each check by cost` — commands/constraints.toml:22 — defined here
- `/constraints check` — commands/constraints.toml:29 — defined here
- `/constraints guard` — commands/constraints.toml:30 — defined here
- `/constraints ratchet` — commands/constraints.toml:31 — defined here

## Structure
- description
- prompt (steps 1 through 7)
- Sub-commands (/constraints check, /constraints guard, /constraints ratchet)

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
Part of duplication ledger VARIANT V1 (95% shared lines with `.gemini/commands/constraints.toml`), with divergence card at `docs/analysis/inventory/addy/_divergence/gemini-commands-constraints-toml--commands-constraints-toml.md`. Step 6 references `AGENTS.md and CLAUDE.md` in this file versus `AGENTS.md and GEMINI.md` in the `.gemini` variant.

## Context cost
2775 bytes (~694 tokens).
