---
package: addy
path: .claude/commands/ship.md
type: command
bytes: 4601
unit: inv-addy-1
deprecated: false
aliases: []
memo_inputs:
  - {path: .claude/commands/ship.md, sha256: 02d2d0fc10bfb58bb62dcfe22ed396cd2b9f55dced7d5cd92fce6d29f0da4ace}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# .claude/commands/ship.md

## Purpose — required, verbatim
> "Run the pre-launch checklist via parallel fan-out to specialist personas, then synthesize a go/no-go decision" — .claude/commands/ship.md:2

## Design intent — required
Acts as an orchestrator for launch readiness verification by executing a three-phase workflow: parallel fan-out to three specialist subagent personas (`code-reviewer`, `security-auditor`, `test-engineer`), synthesis of findings in the main context alongside accessibility/infrastructure checks, and generation of a formal GO/NO-GO decision with a mandatory rollback plan.

## Phase — required
addy:Ship

## Inputs — required
- Staged changes or recent commits — .claude/commands/ship.md:7, 15
- Specialist subagent reports (`code-reviewer`, `security-auditor`, `test-engineer`) — .claude/commands/ship.md:15, 16, 17
- Direct verifications for accessibility, infrastructure (env vars, migrations, flags), and documentation — .claude/commands/ship.md:35, 36, 37

## Outputs — required
- Consolidated ship decision report containing Blockers, Recommended fixes, Acknowledged risks, Rollback plan, and embedded specialist reports — .claude/commands/ship.md:44, 46, 49, 52, 55, 60

## Invokes — required
- skill agent-skills:shipping-and-launch — .claude/commands/ship.md:5
- agent code-reviewer — .claude/commands/ship.md:15
- agent security-auditor — .claude/commands/ship.md:16
- agent test-engineer — .claude/commands/ship.md:17
- reference references/orchestration-patterns.md — .claude/commands/ship.md:24

## Invoked by — required
none

## Concepts named — required, verbatim
`fan-out orchestrator` — .claude/commands/ship.md:7 — defined here
`code-reviewer` — .claude/commands/ship.md:15, 26, 32, 61 — used here
`security-auditor` — .claude/commands/ship.md:16, 26, 33, 62 — used here
`test-engineer` — .claude/commands/ship.md:17, 26, 63 — used here
`Claude Code Agent Teams` — .claude/commands/ship.md:24 — used here
`references/orchestration-patterns.md` — .claude/commands/ship.md:24 — used here
`Persona resolution` — .claude/commands/ship.md:26 — defined here
`Ship Decision: GO | NO-GO` — .claude/commands/ship.md:44 — defined here
`Rollback plan` — .claude/commands/ship.md:55, 70 — defined here

## Structure
- `## Phase A — Parallel fan-out` — .claude/commands/ship.md:9
- `## Phase B — Merge in main context` — .claude/commands/ship.md:28
- `## Phase C — Decision and rollback` — .claude/commands/ship.md:39
- `## Rules` — .claude/commands/ship.md:66

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
Enforces that all three subagents are spawned in a single assistant turn to ensure concurrent execution in Claude Code. Precedence rules allow project-level agent definitions in `.claude/agents/` to override the plugin's default personas. Mandatory rollback plan required before any GO decision.

## Context cost
4601 bytes, approximately 1100 tokens.
