---
package: addy
path: commands/ship.toml
type: command
bytes: 4712
unit: inv-addy-11
---

# commands/ship.toml

## Purpose — required, verbatim
> "Run the pre-launch checklist via parallel fan-out to specialist personas, then synthesize a go/no-go decision" — commands/ship.toml:1

## Design intent — required
Acts as the pre-launch release gate orchestrator for the Antigravity CLI, concurrently fanning out to three specialist subagents (`code-reviewer`, `security-auditor`, `test-engineer`) in a single assistant turn. Merges their reports across six dimensions (Code Quality, Security, Performance, Accessibility, Infrastructure, Documentation) to formulate an authoritative GO/NO-GO Ship Decision complete with launch blockers, acknowledged risks, and an enforced rollback plan.

## Phase — required
`addy:Deliver`

## Inputs — required
- Current change: staged changes or recent commits — commands/ship.toml:14
- Three subagent reports (from `code-reviewer`, `security-auditor`, `test-engineer`) — commands/ship.toml:14-16, 29
- Direct verification checks: test/lint/build output, Core Web Vitals, accessibility, infrastructure (env vars, migrations, monitoring, feature flags), documentation (README, ADRs, changelog) — commands/ship.toml:31-36

## Outputs — required
- Ship Decision report (`GO | NO-GO`, Blockers, Recommended fixes, Acknowledged risks, Rollback plan, Specialist reports) — commands/ship.toml:43-63

## Invokes — required
- skill shipping-and-launch — commands/ship.toml:4
- agent code-reviewer — commands/ship.toml:10, 14, 25, 31, 33, 60
- agent security-auditor — commands/ship.toml:15, 25, 32, 61
- agent test-engineer — commands/ship.toml:16, 25, 62
- reference references/orchestration-patterns.md — commands/ship.toml:23

## Invoked by — required
- config .claude-plugin/plugin.json — .claude-plugin/plugin.json:11
- script scripts/validate-commands.js — scripts/validate-commands.js:33
- script scripts/validate-commands-test.js — scripts/validate-commands-test.js:45

## Concepts named — required, verbatim
- `shipping-and-launch` — commands/ship.toml:4 — used here
- `fan-out orchestrator` — commands/ship.toml:6 — defined here
- `Phase A — Parallel fan-out` — commands/ship.toml:8 — defined here
- `code-reviewer` — commands/ship.toml:10, 14, 25, 31, 33, 60 — used here
- `security-auditor` — commands/ship.toml:15, 25, 32, 61 — used here
- `test-engineer` — commands/ship.toml:16, 25, 62 — used here
- `five-axis review` — commands/ship.toml:14 — used here
- `OWASP Top 10` — commands/ship.toml:15 — used here
- `Persona resolution` — commands/ship.toml:25 — defined here
- `Phase B — Merge in main context` — commands/ship.toml:27 — defined here
- `Core Web Vitals` — commands/ship.toml:33 — used here
- `Phase C — Decision and rollback` — commands/ship.toml:38 — defined here
- `Ship Decision: GO | NO-GO` — commands/ship.toml:43 — defined here
- `Rollback plan` — commands/ship.toml:54 — defined here
- `Recovery time objective` — commands/ship.toml:57 — defined here

## Structure
- TOML key: `description` — commands/ship.toml:1
- TOML key: `prompt` — commands/ship.toml:3-72
  - `## Phase A — Parallel fan-out` — commands/ship.toml:8
  - `## Phase B — Merge in main context` — commands/ship.toml:27
  - `## Phase C — Decision and rollback` — commands/ship.toml:38
  - `## Rules` — commands/ship.toml:65

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
- Parallels `.claude/commands/ship.md` and `.gemini/commands/ship.toml` with description parity verified by `scripts/validate-commands.js`.
- Configured specifically for generic/Antigravity CLI harness: references "The CLI" and `agents/` tool exposure.
- Enforces strict concurrency rule: "Issue all three subagent tool calls in a single assistant turn so they execute in parallel — sequential calls defeat the purpose of this command" (commands/ship.toml:10).
- Explicit rule on skipping fan-out (commands/ship.toml:71): touches <=2 files, diff <50 lines, and zero changes to auth, payments, data access, or config/env.
- Mandatory rollback plan with trigger conditions, procedure, and recovery time objective before any GO verdict (commands/ship.toml:54-57, 69).

## Context cost
4,712 bytes (~1,178 tokens). Transitive cost: loads `references/orchestration-patterns.md` (18,201 bytes) if consulted, and spawns three independent subagent context loops.
