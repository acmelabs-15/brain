---
package: addy
path: .gemini/commands/ship.toml
type: command
bytes: 4780
unit: inv-addy-1
aliases: []
memo_inputs:
  - {path: .gemini/commands/ship.toml, sha256: 7018889ee96cd5e198fee199fdf7bc8a5af6fa5e57d575d74a6d94837dd7a101}
method_sha: 363a57b543666244096e150abfb5435c4aa6c3c72e543f90b5600ab3507ac791
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-04 quote-check+coverage
---

# .gemini/commands/ship.toml

## Purpose — required, verbatim
> "Run the pre-launch checklist via parallel fan-out to specialist personas, then synthesize a go/no-go decision" — .gemini/commands/ship.toml:1

## Design intent — required
Gemini/Antigravity pre-launch gate orchestrator executing parallel multi-agent fan-out across three specialist personas (`code-reviewer`, `security-auditor`, `test-engineer`) invoked concurrently via Gemini CLI subagent tool dispatch, followed by single main-context synthesis across code quality, security, performance, accessibility, infrastructure, and documentation, producing a GO/NO-GO Ship Decision report with a mandatory rollback plan.

## Phase — required
addy:SHIP

## Inputs — required
- Staged changes or recent git commits
- Reports from 3 concurrently executed specialist subagents

## Outputs — required
- Ship Decision report (GO | NO-GO, Blockers, Recommended fixes, Acknowledged risks, Rollback plan, Specialist reports)

## Invokes — required
- skill shipping-and-launch — .gemini/commands/ship.toml:4
- agent code-reviewer — .gemini/commands/ship.toml:10,14,25
- agent security-auditor — .gemini/commands/ship.toml:15,25
- agent test-engineer — .gemini/commands/ship.toml:16,25
- reference references/orchestration-patterns.md — .gemini/commands/ship.toml:23

## Invoked by — required
none

## Concepts named — required, verbatim
- `shipping-and-launch` — .gemini/commands/ship.toml:4 — used here
- `fan-out orchestrator` — .gemini/commands/ship.toml:6 — defined here
- `Phase A — Parallel fan-out` — .gemini/commands/ship.toml:8 — defined here
- `code-reviewer` — .gemini/commands/ship.toml:10,14,25,31,60 — used here
- `security-auditor` — .gemini/commands/ship.toml:15,25,32,61 — used here
- `test-engineer` — .gemini/commands/ship.toml:16,25,62 — used here
- `five-axis review` — .gemini/commands/ship.toml:14 — used here
- `Persona resolution` — .gemini/commands/ship.toml:25 — defined here
- `Phase B — Merge in main context` — .gemini/commands/ship.toml:27 — defined here
- `Phase C — Decision and rollback` — .gemini/commands/ship.toml:38 — defined here
- `Ship Decision` — .gemini/commands/ship.toml:43 — defined here
- `GO | NO-GO` — .gemini/commands/ship.toml:43 — defined here
- `Rollback plan` — .gemini/commands/ship.toml:54,69 — defined here

## Structure
- ## Phase A — Parallel fan-out
- ## Phase B — Merge in main context
- ## Phase C — Decision and rollback
- ## Rules

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
VARIANT pair V3 with `commands/ship.toml` (divergence documented in `_divergence/divergence-commands-ship-toml--gemini-commands-ship-toml.md`).

## Context cost
4780 bytes, ~1195 tokens. Transitive cost: spawns 3 subagents concurrently, each running in isolated context loops, merging reports into main session (~15000–30000 tokens).
