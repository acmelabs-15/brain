---
package: addy
path: commands/constraints.toml
type: command
bytes: 2775
unit: inv-addy-3
deprecated: false
aliases: []
verified: 2026-09-04 quote-check+coverage
memo_inputs:
  - {path: commands/constraints.toml, sha256: bcc519db853a0ebdf0b07f378e2bc87cb112508d28e41f0d39dd1b17aa68def4}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
---

# commands/constraints.toml

## Purpose — required, verbatim
> "Define and enforce this project's quality bar — interview, sane defaults, CONSTRAINTS.md" — commands/constraints.toml:1

## Design intent — required
Slash command for establishing and enforcing project-level quality constraints. Automatically detects existing tooling (package configs, test runners, linting, coverage, CI workflows), conducts a brief 4-question interview to establish floor requirements, generates a root `CONSTRAINTS.md` with rationales and exceptions, provisions three tiers of quality checks (`check:fast`, `check:task`, `check:full`), updates agent instructions in `AGENTS.md` and `CLAUDE.md`, and supports sub-commands for verification (`check`), anti-tampering diff inspection (`guard`), and baseline ratchet (`ratchet`).

## Phase — required
cross-phase

## Inputs — required
Command sub-command argument (`check`, `guard`, or `ratchet`; commands/constraints.toml:29-31), existing repo configuration files (`package.json`, `pyproject.toml`, `go.mod`, CI workflows; commands/constraints.toml:10), interview responses (commands/constraints.toml:12-17), and current git branch diff.

## Outputs — required
Generated `CONSTRAINTS.md` file at repository root (commands/constraints.toml:18), scripts added to `package.json` (`check:fast`, `check:task`, `check:full`; commands/constraints.toml:20), and updated configuration lines in `AGENTS.md` and `CLAUDE.md` (commands/constraints.toml:24).

## Invokes — required
- skill constraint-driven-development — commands/constraints.toml:4
- doc AGENTS.md — commands/constraints.toml:24
- doc CLAUDE.md — commands/constraints.toml:24

## Invoked by — required
none

## Concepts named — required, verbatim
- `CONSTRAINTS.md` — commands/constraints.toml:1 — defined here
- `Floor` — commands/constraints.toml:18 — defined here
- `check:fast` — commands/constraints.toml:20 — defined here
- `check:task` — commands/constraints.toml:20 — defined here
- `check:full` — commands/constraints.toml:20 — defined here
- `guard` — commands/constraints.toml:30 — defined here
- `ratchet` — commands/constraints.toml:31 — defined here

## Structure
- description
- prompt
- Sub-commands:

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
Part of VARIANT pair V1 in `docs/analysis/manifest/addy-duplicates.md` (`.gemini/commands/constraints.toml` ↔ `commands/constraints.toml`, 95% shared). The sole substantive difference is line 24: `commands/constraints.toml` instructs agents to update `AGENTS.md and CLAUDE.md`, whereas `.gemini/commands/constraints.toml` instructs agents to update `AGENTS.md and GEMINI.md`. Organizes checks by execution cost: seconds in the edit loop, under 90s at task end, and comprehensive checks at PR/CI (commands/constraints.toml:22).

## Context cost
2775 bytes, ~650 tokens.
