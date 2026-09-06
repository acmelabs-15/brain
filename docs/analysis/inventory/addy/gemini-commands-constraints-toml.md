---
package: addy
path: .gemini/commands/constraints.toml
type: command
bytes: 2775
unit: inv-addy-2
aliases: []
memo_inputs:
  - {path: .gemini/commands/constraints.toml, sha256: 149ae460288b1f86487bb842ea5cf3476cdb2766a3f703985d83499cf8f6c817}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# .gemini/commands/constraints.toml

## Purpose — required, verbatim
> "Define and enforce this project's quality bar — interview, sane defaults, CONSTRAINTS.md" — .gemini/commands/constraints.toml:1

## Design intent — required
Establishes and enforces a repository-wide quality bar through the `constraint-driven-development` skill in Gemini CLI. It automates environment detection from manifest and config files, conducts a concise 4-question developer interview with sensible defaults, generates a structured `CONSTRAINTS.md` file, pairs selected dimensions with de facto scanning tools (Semgrep, gitleaks, osv-scanner, axe-core, Lighthouse, size-limit, dependency-cruiser, Stryker), schedules checks by cost into edit loop/task end/CI tiers, instructs agents via `AGENTS.md` and `GEMINI.md` never to weaken constraints, and offers subcommands for verification, diff guarding, and metric ratcheting.

## Phase — required
addy:Define

## Inputs — required
- `$ARGUMENTS` (empty for setup, or sub-commands `check`, `guard`, `ratchet`) — .gemini/commands/constraints.toml:6, 29, 30, 31
- Project manifests and config: `package.json`, `pyproject.toml`, `go.mod` — .gemini/commands/constraints.toml:10
- Developer answers to interview questions — .gemini/commands/constraints.toml:12
- Current git branch diff and tool execution results — .gemini/commands/constraints.toml:26, 29, 30

## Outputs — required
- `CONSTRAINTS.md` at repository root with Floor, enforced numbers, and exceptions table — .gemini/commands/constraints.toml:18
- Updated `package.json` with scripts `check:fast`, `check:task`, `check:full` — .gemini/commands/constraints.toml:20
- Quality bar instructions added to `AGENTS.md` and `GEMINI.md` — .gemini/commands/constraints.toml:24
- Verification and guard inspection reports — .gemini/commands/constraints.toml:29, 30

## Invokes — required
- skill constraint-driven-development — .gemini/commands/constraints.toml:4

## Invoked by — required
orphan

## Concepts named — required, verbatim
- `CONSTRAINTS.md` — .gemini/commands/constraints.toml:1, 18, 20, 24 — defined here
- `constraint-driven-development` — .gemini/commands/constraints.toml:4 — used here
- `Floor section` — .gemini/commands/constraints.toml:18 — defined here
- `exceptions table` — .gemini/commands/constraints.toml:18 — defined here
- `check:fast` — .gemini/commands/constraints.toml:20 — defined here
- `check:task` — .gemini/commands/constraints.toml:20 — defined here
- `check:full` — .gemini/commands/constraints.toml:20 — defined here
- `AGENTS.md` — .gemini/commands/constraints.toml:24 — used here
- `GEMINI.md` — .gemini/commands/constraints.toml:24 — used here
- `/constraints check` — .gemini/commands/constraints.toml:29 — defined here
- `/constraints guard` — .gemini/commands/constraints.toml:30 — defined here
- `/constraints ratchet` — .gemini/commands/constraints.toml:31 — defined here

## Structure
- "Detect first" — .gemini/commands/constraints.toml:10
- "Place each check by cost" — .gemini/commands/constraints.toml:22
- "Sub-commands:" — .gemini/commands/constraints.toml:28

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
Forms variant V1 in the duplication ledger with `commands/constraints.toml` (95% shared lines). The only divergence is line 24 referencing `AGENTS.md and GEMINI.md` instead of `AGENTS.md and CLAUDE.md`. It incorporates a key design rule: "A dimension with a number and no tool behind it is an aspiration" (.gemini/commands/constraints.toml:20) and tiers check placement strictly by time cost.

## Context cost
2,775 bytes (~700 tokens). If invoked skill is loaded: `constraint-driven-development` (14,460 bytes).
