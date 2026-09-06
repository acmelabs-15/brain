---
package: addy
path: .gemini/commands/ship.toml
type: command
bytes: 4780
unit: inv-addy-2
aliases: []
memo_inputs:
  - {path: .gemini/commands/ship.toml, sha256: 7018889ee96cd5e198fee199fdf7bc8a5af6fa5e57d575d74a6d94837dd7a101}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# .gemini/commands/ship.toml

## Purpose — required, verbatim
> "Run the pre-launch checklist via parallel fan-out to specialist personas, then synthesize a go/no-go decision" — .gemini/commands/ship.toml:1

## Design intent — required
Acts as a parallel fan-out orchestrator for pre-launch release verification in Gemini CLI. It concurrently spawns three specialist subagent personas (`code-reviewer`, `security-auditor`, `test-engineer`) in a single turn to run isolated audits against staged changes or recent commits. Once all reports return, the main agent merges findings across code quality, security, performance (cross-checking Core Web Vitals), accessibility (optionally invoking the accessibility checklist), infrastructure, and documentation to synthesize an authoritative `GO | NO-GO` decision complete with blockers, recommended fixes, acknowledged risks, and a mandatory rollback plan.

## Phase — required
addy:Ship

## Inputs — required
- Staged changes or recent commits — .gemini/commands/ship.toml:14
- Specialist subagent audit reports (`code-reviewer`, `security-auditor`, `test-engineer`) — .gemini/commands/ship.toml:14, 15, 16, 29
- Direct checks for accessibility, infrastructure (env vars, migrations, monitoring, feature flags), and documentation (README, ADRs, changelog) — .gemini/commands/ship.toml:34, 35, 36

## Outputs — required
- Consolidated `Ship Decision: GO | NO-GO` report with Blockers, Recommended fixes, Acknowledged risks, Rollback plan, and embedded specialist reports — .gemini/commands/ship.toml:43, 45, 48, 51, 54, 59

## Invokes — required
- skill shipping-and-launch — .gemini/commands/ship.toml:4
- agent code-reviewer — .gemini/commands/ship.toml:14
- agent security-auditor — .gemini/commands/ship.toml:15
- agent test-engineer — .gemini/commands/ship.toml:16
- reference references/orchestration-patterns.md — .gemini/commands/ship.toml:23
- reference "accessibility checklist" — .gemini/commands/ship.toml:34

## Invoked by — required
orphan

## Concepts named — required, verbatim
- `fan-out orchestrator` — .gemini/commands/ship.toml:6 — defined here
- `code-reviewer` — .gemini/commands/ship.toml:10, 14, 25, 31, 60 — used here
- `five-axis review` — .gemini/commands/ship.toml:14 — used here
- `security-auditor` — .gemini/commands/ship.toml:15, 25, 32, 61 — used here
- `OWASP Top 10` — .gemini/commands/ship.toml:15 — used here
- `test-engineer` — .gemini/commands/ship.toml:16, 25, 62 — used here
- `references/orchestration-patterns.md` — .gemini/commands/ship.toml:23 — used here
- `Persona resolution` — .gemini/commands/ship.toml:25 — defined here
- `Core Web Vitals` — .gemini/commands/ship.toml:33 — used here
- `accessibility checklist` — .gemini/commands/ship.toml:34 — used here
- `Ship Decision: GO | NO-GO` — .gemini/commands/ship.toml:43 — defined here
- `Rollback plan` — .gemini/commands/ship.toml:54, 69 — defined here

## Structure
- `## Phase A — Parallel fan-out` — .gemini/commands/ship.toml:8
- `## Phase B — Merge in main context` — .gemini/commands/ship.toml:27
- `## Phase C — Decision and rollback` — .gemini/commands/ship.toml:38
- `## Rules` — .gemini/commands/ship.toml:65

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
Forms variant V3 in the duplication ledger with `commands/ship.toml` (92% shared lines). In hunk 1 and 2, `.gemini/commands/ship.toml` adapts subagent execution for the Gemini CLI environment (`~/.gemini/agents/`, tool exposure via `@code-reviewer`). It enforces a strict rule: "The rollback plan is mandatory before any GO decision" (.gemini/commands/ship.toml:69) and defaults to `NO-GO` if any persona finds a Critical issue unless the user explicitly accepts the risk.

## Context cost
4,780 bytes (~1,200 tokens). If invoked skills and agents are loaded: `shipping-and-launch` (18,482 bytes), `code-reviewer.md` (2,732 bytes), `security-auditor.md` (3,288 bytes), `test-engineer.md` (3,001 bytes), `references/orchestration-patterns.md` (12,488 bytes), `references/accessibility-checklist.md` (5,206 bytes).
