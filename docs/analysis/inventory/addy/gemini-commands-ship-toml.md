---
package: addy
path: .gemini/commands/ship.toml
type: command
bytes: 4780
unit: inv-addy-2
deprecated: false
aliases: []
memo_inputs:
  - {path: .gemini/commands/ship.toml, sha256: 7018889ee96cd5e198fee199fdf7bc8a5af6fa5e57d575d74a6d94837dd7a101}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# .gemini/commands/ship.toml

## Purpose — required, verbatim
> "Run the pre-launch checklist via parallel fan-out to specialist personas, then synthesize a go/no-go decision" — .gemini/commands/ship.toml:1

## Design intent — required
Acts as a multi-agent fan-out orchestrator for pre-launch release governance. Concurrently executes three specialist subagent personas (`code-reviewer`, `security-auditor`, and `test-engineer`) against pending changes in a single turn, merges their findings in the main session context, and outputs an actionable GO/NO-GO decision accompanied by a mandatory rollback plan.

## Phase — required
addy:Ship

## Inputs — required
Staged changes, recent commits, diff (.gemini/commands/ship.toml:14,71); reports returned by the three concurrent specialist personas (.gemini/commands/ship.toml:29,59-63); direct checks on accessibility, infrastructure, and documentation (.gemini/commands/ship.toml:34-36).

## Outputs — required
Synthesized launch evaluation report with `Ship Decision: GO | NO-GO`, categorized findings (`Blockers`, `Recommended fixes`, `Acknowledged risks`), explicit rollback plan (trigger conditions, rollback procedure, recovery time objective), and attached specialist reports (.gemini/commands/ship.toml:43-63).

## Invokes — required
- skill shipping-and-launch — .gemini/commands/ship.toml:4
- agent code-reviewer — .gemini/commands/ship.toml:14
- agent security-auditor — .gemini/commands/ship.toml:15
- agent test-engineer — .gemini/commands/ship.toml:16
- reference references/orchestration-patterns.md — .gemini/commands/ship.toml:23

## Invoked by — required
none

## Concepts named — required, verbatim
- `fan-out orchestrator` — .gemini/commands/ship.toml:6 — defined here
- `go/no-go decision` — .gemini/commands/ship.toml:6 — used here
- `rollback plan` — .gemini/commands/ship.toml:6 — used here
- `Phase A — Parallel fan-out` — .gemini/commands/ship.toml:8 — defined here
- `code-reviewer` — .gemini/commands/ship.toml:14 — used here
- `security-auditor` — .gemini/commands/ship.toml:15 — used here
- `test-engineer` — .gemini/commands/ship.toml:16 — used here
- `Persona resolution` — .gemini/commands/ship.toml:25 — defined here
- `Phase B — Merge in main context` — .gemini/commands/ship.toml:27 — defined here
- `Phase C — Decision and rollback` — .gemini/commands/ship.toml:38 — defined here
- `Blockers` — .gemini/commands/ship.toml:45 — defined here
- `Recommended fixes` — .gemini/commands/ship.toml:48 — defined here
- `Acknowledged risks` — .gemini/commands/ship.toml:51 — defined here

## Structure
- "## Phase A — Parallel fan-out" — .gemini/commands/ship.toml:8
- "## Phase B — Merge in main context" — .gemini/commands/ship.toml:27
- "## Phase C — Decision and rollback" — .gemini/commands/ship.toml:38
- "## Rules" — .gemini/commands/ship.toml:65

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
Forms VARIANT pair V3 with `commands/ship.toml`. This variant explicitly adapts to Gemini CLI's subagent execution model (`agents/` tool exposure, single-turn concurrent tool dispatch, fallback to sequential main-context execution, and scope priority resolution including `~/.gemini/agents/`).

## Context cost
4780 bytes, ~1200 tokens.
