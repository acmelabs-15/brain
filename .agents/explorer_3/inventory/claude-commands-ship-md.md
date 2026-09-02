---
package: addy
path: .claude/commands/ship.md
type: command
bytes: 4601
unit: inv-addy-4
---

# .claude/commands/ship.md

## Purpose — required, verbatim
> "Run the pre-launch checklist via parallel fan-out to specialist personas, then synthesize a go/no-go decision" — .claude/commands/ship.md:2

## Design intent — required
Serves as the pre-launch release gate orchestrator that spawns three specialist personas (`code-reviewer`, `security-auditor`, `test-engineer`) concurrently in a single assistant turn, synthesizes their reports across six dimensions (code quality, security, performance, accessibility, infrastructure, documentation), and generates a GO/NO-GO verdict with blockers, recommended fixes, acknowledged risks, and a mandatory rollback plan.

## Phase — required
`addy:Deliver`

## Inputs — required
- Staged changes or recent commits
- Three subagent execution reports

## Outputs — required
- Ship Decision report (GO | NO-GO, Blockers, Recommended fixes, Acknowledged risks, Rollback plan, Specialist reports) — .claude/commands/ship.md:43-64

## Invokes — required
- skill shipping-and-launch — .claude/commands/ship.md:5 (named `agent-skills:shipping-and-launch`)
- agent code-reviewer — .claude/commands/ship.md:15, 26, 61
- agent security-auditor — .claude/commands/ship.md:16, 26, 62
- agent test-engineer — .claude/commands/ship.md:17, 26, 63
- reference references/orchestration-patterns.md — .claude/commands/ship.md:24

## Invoked by — required
none

## Concepts named — required, verbatim
- `shipping-and-launch` — .claude/commands/ship.md:5 — used here
- `fan-out orchestrator` — .claude/commands/ship.md:7 — defined here
- `Phase A — Parallel fan-out` — .claude/commands/ship.md:9 — defined here
- `code-reviewer` — .claude/commands/ship.md:15, 26, 61 — used here
- `security-auditor` — .claude/commands/ship.md:16, 26, 62 — used here
- `test-engineer` — .claude/commands/ship.md:17, 26, 63 — used here
- `five-axis review` — .claude/commands/ship.md:15 — used here
- `Claude Code Agent Teams` — .claude/commands/ship.md:24 — used here
- `Persona resolution` — .claude/commands/ship.md:26 — defined here
- `Phase B — Merge in main context` — .claude/commands/ship.md:28 — defined here
- `Phase C — Decision and rollback` — .claude/commands/ship.md:39 — defined here
- `Ship Decision` — .claude/commands/ship.md:44 — defined here
- `GO | NO-GO` — .claude/commands/ship.md:44 — defined here
- `Rollback plan` — .claude/commands/ship.md:55 — defined here

## Structure
- `---` (frontmatter: description) — .claude/commands/ship.md:1-3
- `## Phase A — Parallel fan-out` — .claude/commands/ship.md:9
- `## Phase B — Merge in main context` — .claude/commands/ship.md:28
- `## Phase C — Decision and rollback` — .claude/commands/ship.md:39
- `## Rules` — .claude/commands/ship.md:66

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
- Explicit concurrency requirement: "Issue all three Agent tool calls in a single assistant turn so they execute in parallel — sequential calls defeat the purpose of this command" (.claude/commands/ship.md:11).
- Explicit threshold for skipping fan-out: changes touching ≤2 files, <50 lines diff, and zero touch on auth, payments, data access, or config/env (.claude/commands/ship.md:72).
- Explicit persona resolution hierarchy: user-defined agents in `.claude/agents/` or `~/.claude/agents/` override plugin agents by design (.claude/commands/ship.md:26).

## Context cost
- File size: 4,601 bytes (~1,150 tokens).
- Transitive cost when invoked: spawns 3 subagents concurrently, each receiving independent context windows, returning reports merged into the main context (~15,000–30,000 tokens total).
