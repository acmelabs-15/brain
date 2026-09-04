---
package: addy
path: .claude/commands/ship.md
type: command
bytes: 4601
unit: inv-addy-1
aliases: []
memo_inputs:
  - {path: .claude/commands/ship.md, sha256: 02d2d0fc10bfb58bb62dcfe22ed396cd2b9f55dced7d5cd92fce6d29f0da4ace}
method_sha: 363a57b543666244096e150abfb5435c4aa6c3c72e543f90b5600ab3507ac791
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-04 quote-check+coverage
---

# .claude/commands/ship.md

## Purpose — required, verbatim
> "Run the pre-launch checklist via parallel fan-out to specialist personas, then synthesize a go/no-go decision" — .claude/commands/ship.md:2

## Design intent — required
Serves as the pre-launch release gate orchestrator that spawns three specialist personas (`code-reviewer`, `security-auditor`, `test-engineer`) concurrently in a single assistant turn, synthesizes their reports across six dimensions (code quality, security, performance, accessibility, infrastructure, documentation), and generates a GO/NO-GO verdict with blockers, recommended fixes, acknowledged risks, and a mandatory rollback plan.

## Phase — required
addy:SHIP

## Inputs — required
- Staged changes or recent commits
- Three subagent execution reports

## Outputs — required
- Ship Decision report (GO | NO-GO, Blockers, Recommended fixes, Acknowledged risks, Rollback plan, Specialist reports)

## Invokes — required
- skill shipping-and-launch — .claude/commands/ship.md:5
- agent code-reviewer — .claude/commands/ship.md:15,26,61
- agent security-auditor — .claude/commands/ship.md:16,26,62
- agent test-engineer — .claude/commands/ship.md:17,26,63
- reference references/orchestration-patterns.md — .claude/commands/ship.md:24

## Invoked by — required
none

## Concepts named — required, verbatim
- `shipping-and-launch` — .claude/commands/ship.md:5 — used here
- `fan-out orchestrator` — .claude/commands/ship.md:7 — defined here
- `Phase A — Parallel fan-out` — .claude/commands/ship.md:9 — defined here
- `code-reviewer` — .claude/commands/ship.md:15,26,61 — used here
- `security-auditor` — .claude/commands/ship.md:16,26,62 — used here
- `test-engineer` — .claude/commands/ship.md:17,26,63 — used here
- `five-axis review` — .claude/commands/ship.md:15 — used here
- `Claude Code Agent Teams` — .claude/commands/ship.md:24 — used here
- `Persona resolution` — .claude/commands/ship.md:26 — defined here
- `Phase B — Merge in main context` — .claude/commands/ship.md:28 — defined here
- `Phase C — Decision and rollback` — .claude/commands/ship.md:39 — defined here
- `Ship Decision` — .claude/commands/ship.md:44 — defined here
- `GO | NO-GO` — .claude/commands/ship.md:44 — defined here
- `Rollback plan` — .claude/commands/ship.md:55 — defined here

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
- Explicit concurrency requirement: "Issue all three Agent tool calls in a single assistant turn so they execute in parallel — sequential calls defeat the purpose of this command" (.claude/commands/ship.md:11).
- Explicit threshold for skipping fan-out: changes touching ≤2 files, <50 lines diff, and zero touch on auth, payments, data access, or config/env (.claude/commands/ship.md:72).
- Explicit persona resolution hierarchy: user-defined agents in `.claude/agents/` or `~/.claude/agents/` override plugin agents by design (.claude/commands/ship.md:26).

## Context cost
4601 bytes, ~1150 tokens. Transitive cost: spawns 3 subagents concurrently, each receiving independent context windows, returning reports merged into the main context (~15000–30000 tokens total).
