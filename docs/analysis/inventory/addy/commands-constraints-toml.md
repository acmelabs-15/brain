---
package: addy
path: commands/constraints.toml
type: command
bytes: 2775
unit: inv-addy-3
deprecated: false
aliases: []
memo_inputs:
  - {path: commands/constraints.toml, sha256: bcc519db853a0ebdf0b07f378e2bc87cb112508d28e41f0d39dd1b17aa68def4}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# commands/constraints.toml

## Purpose — required, verbatim
> "Define and enforce this project's quality bar — interview, sane defaults, CONSTRAINTS.md" — commands/constraints.toml:1

## Design intent — required
Slash command prompt configuring /constraints, invoking the constraint-driven-development skill to establish and maintain a repository-specific quality floor codified in CONSTRAINTS.md. Scans project configuration without redundant prompting, conducts a four-question interview with defaults, wires de facto tools (Semgrep, gitleaks, osv-scanner, axe-core, Lighthouse, size-limit, dependency-cruiser, Stryker) into package.json, tiers checks by runtime cost, instructs agents via AGENTS.md and CLAUDE.md to respect constraints, and provides sub-commands for checking, anti-weakening diff inspection (guard), and threshold ratcheting.

## Phase — required
cross-phase

## Inputs — required
Project manifests (package.json, pyproject.toml, go.mod), test runners, lint configs, coverage output, CI workflows, and user answers to a four-question setup interview.

## Outputs — required
CONSTRAINTS.md at repository root, script entries in package.json (check:fast, check:task, check:full), updates to AGENTS.md and CLAUDE.md, and constraint verification reports.

## Invokes — required
- skill constraint-driven-development — commands/constraints.toml:4
- doc AGENTS.md — commands/constraints.toml:24
- doc CLAUDE.md — commands/constraints.toml:24

## Invoked by — required
orphan

## Concepts named — required, verbatim
- `constraint-driven-development` — commands/constraints.toml:4 — used here
- `CONSTRAINTS.md` — commands/constraints.toml:18 — defined here
- `check` — commands/constraints.toml:29 — defined here
- `guard` — commands/constraints.toml:30 — defined here
- `ratchet` — commands/constraints.toml:31 — defined here

## Structure
- Command description — commands/constraints.toml:1
- Skill invocation prompt — commands/constraints.toml:3-6
- Setup workflow (Detect first, Interview, Write CONSTRAINTS.md, Install tooling, Place checks by cost, Point agent at it, Verify) — commands/constraints.toml:8-26
- Sub-commands (/constraints check, /constraints guard, /constraints ratchet) — commands/constraints.toml:28-32

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
- `doc-drift` · CLAUDE.md:13 omits `/constraints` from the enumerated list of slash commands (/spec, /plan, /build, /test, /review, /code-simplify, /ship; plus /webperf).

## Observations
- Variant pairing: Forms VARIANT pair V1 (95% shared lines) with `.gemini/commands/constraints.toml`. In step 6, this Claude Code command directs: "Add a line to AGENTS.md and CLAUDE.md telling agents to read CONSTRAINTS.md and never weaken it to make a change pass." — commands/constraints.toml:24, whereas the Gemini CLI variant references `GEMINI.md`.
- Pragmatic tool backing: "A dimension with a number and no tool behind it is an aspiration." — commands/constraints.toml:20.
- Cost-tiered verification: "Types, lint and secrets in the edit loop (seconds). Related tests and changed-line coverage at task end (under 90s). Everything else at review or in CI." — commands/constraints.toml:22.

## Context cost
2775 bytes, ~650 tokens. Light prompt invoking constraint-driven-development and configuring repository-level checks.
