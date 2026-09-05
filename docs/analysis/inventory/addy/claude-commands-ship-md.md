---
package: addy
path: .claude/commands/ship.md
type: command
bytes: 4601
unit: inv-addy-1
deprecated: false
aliases: []
verified: 2026-09-04 quote-check+coverage
memo_inputs:
  - {path: .claude/commands/ship.md, sha256: 02d2d0fc10bfb58bb62dcfe22ed396cd2b9f55dced7d5cd92fce6d29f0da4ace}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
---

# .claude/commands/ship.md

## Purpose — required, verbatim
> "Run the pre-launch checklist via parallel fan-out to specialist personas, then synthesize a go/no-go decision" — .claude/commands/ship.md:2

## Design intent — required
Acts as a multi-agent fan-out orchestrator for pre-release verification, spawning three independent specialist subagents (`code-reviewer`, `security-auditor`, `test-engineer`) in parallel, synthesizing their reports in the main context, and producing a formal GO/NO-GO decision accompanied by a mandatory rollback plan.

## Phase — required
addy:Ship

## Inputs — required
- Staged git changes or recent commits
- Current test suite, linter, and build verification outputs
- Specialist reports from spawned subagent personas

## Outputs — required
- Structured Ship Decision report (verdict GO or NO-GO) with Blockers, Recommended fixes, Acknowledged risks, and a detailed Rollback plan
- Attached full specialist reports from each reviewer persona

## Invokes — required
- skill agent-skills:shipping-and-launch — .claude/commands/ship.md:5
- agent code-reviewer — .claude/commands/ship.md:15
- agent security-auditor — .claude/commands/ship.md:16
- agent test-engineer — .claude/commands/ship.md:17
- reference references/orchestration-patterns.md — .claude/commands/ship.md:24

## Invoked by — required
none

## Concepts named — required, verbatim
- `shipping-and-launch` — .claude/commands/ship.md:5 — used here
- `code-reviewer` — .claude/commands/ship.md:15 — used here
- `security-auditor` — .claude/commands/ship.md:16 — used here
- `test-engineer` — .claude/commands/ship.md:17 — used here
- `references/orchestration-patterns.md` — .claude/commands/ship.md:24 — used here
- `Ship Decision: GO | NO-GO` — .claude/commands/ship.md:44 — defined here
- `Rollback plan` — .claude/commands/ship.md:55 — defined here

## Structure
- `## Phase A — Parallel fan-out`
- `## Phase B — Merge in main context`
- `## Phase C — Decision and rollback`
- `## Rules`

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
Enforces parallel dispatch by requiring all three Agent tool calls in a single assistant turn. Incorporates persona precedence resolution allowing user agents in `.claude/agents/` to override plugin defaults. Sets explicit bounds for skipping fan-out: changes of 2 files or fewer, under 50 lines diff, touching no auth, payments, data, or config.

## Context cost
4601 bytes (~1150 tokens). Invocations spawn three agent contexts (`code-reviewer`, `security-auditor`, `test-engineer`) and reference `shipping-and-launch` and `orchestration-patterns.md`.
