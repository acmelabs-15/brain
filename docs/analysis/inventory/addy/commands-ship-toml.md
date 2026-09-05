---
package: addy
path: commands/ship.toml
type: command
bytes: 4712
unit: inv-addy-4
aliases: []
memo_inputs:
  - {path: commands/ship.toml, sha256: a067c5c4ea484609ceb530b908c7fb707f184abae839826012ddca653517c1c5}
method_sha: 647767d85acc14e391fbbf69d54d8543f31a0497dc52121aaf5997e1c6065f5f
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-04 quote-check+coverage
---

# commands/ship.toml

## Purpose — required, verbatim
> "Run the pre-launch checklist via parallel fan-out to specialist personas, then synthesize a go/no-go decision" — commands/ship.toml:1

## Design intent — required
Orchestrates a parallel fan-out pre-launch review of a proposed change using three specialist subagent personas (`code-reviewer`, `security-auditor`, `test-engineer`), followed by a synthesis merge pass in the main agent context to produce a structured go/no-go verdict and mandatory rollback plan. Without this command, release reviews would either be conducted sequentially with high context contamination or would skip critical dimensions like threat modeling and test gap analysis.

## Phase — required
addy:Ship

## Inputs — required
- Staged changes or recent commits — commands/ship.toml:14
- Custom agent definitions in `agents/` or global configuration if defined — commands/ship.toml:25

## Outputs — required
- Decision and rollback document: `Ship Decision: GO | NO-GO` — commands/ship.toml:43

## Invokes — required
- skill shipping-and-launch — commands/ship.toml:4
- agent code-reviewer — commands/ship.toml:14
- agent security-auditor — commands/ship.toml:15
- agent test-engineer — commands/ship.toml:16
- reference references/orchestration-patterns.md — commands/ship.toml:23

## Invoked by — required
- entry point — invoked by the user or harness as a slash command (`/ship`)

## Concepts named — required, verbatim
- `fan-out orchestrator` — commands/ship.toml:6 — defined here
- `go/no-go decision` — commands/ship.toml:1, 6 — used here
- `rollback plan` — commands/ship.toml:6, 54, 69 — used here
- `Parallel fan-out` — commands/ship.toml:8 — defined here
- `Merge in main context` — commands/ship.toml:27 — defined here
- `Decision and rollback` — commands/ship.toml:38 — defined here
- `Blockers` — commands/ship.toml:45 — used here
- `Recommended fixes` — commands/ship.toml:48 — used here
- `Acknowledged risks` — commands/ship.toml:51 — used here

## Structure
- description — commands/ship.toml:1
- prompt — commands/ship.toml:3
- Phase A — Parallel fan-out — commands/ship.toml:8
- Phase B — Merge in main context — commands/ship.toml:27
- Phase C — Decision and rollback — commands/ship.toml:38
- Rules — commands/ship.toml:65

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
Part of VARIANT pair V3 in `docs/analysis/manifest/addy-duplicates.md` with `.gemini/commands/ship.toml` (92% shared lines; variance stems from harness phrasing such as `The CLI exposes` vs `Gemini CLI exposes`). Enforces isolated context loops, flat fan-out without persona-to-persona delegation, and mandatory rollback planning before any GO decision.

## Context cost
4,712 bytes (approx. 1,150 tokens) for this command file. Invokes `skills/shipping-and-launch/SKILL.md` (10,137 bytes), `agents/code-reviewer.md` (6,303 bytes), `agents/security-auditor.md` (4,402 bytes), `agents/test-engineer.md` (4,869 bytes), and `references/orchestration-patterns.md` (8,822 bytes).
