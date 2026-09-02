---
package: addy
path: .gemini/commands/ship.toml
type: command
bytes: 4780
unit: inv-addy-1
---

# .gemini/commands/ship.toml

## Purpose — required, verbatim
> "Run the pre-launch checklist via parallel fan-out to specialist personas, then synthesize a go/no-go decision" — .gemini/commands/ship.toml:1

## Design intent — required
Provides an automated pre-launch gate and parallel fan-out orchestrator that coordinates three specialist personas (`code-reviewer`, `security-auditor`, `test-engineer`) simultaneously to evaluate release readiness across distinct quality axes, merging their findings into an explicit GO/NO-GO verdict with a mandatory rollback plan. Without it, release verification is prone to single-perspective blind spots, serialized review bottlenecks, and unmitigated production risks.

## Phase — required
`addy:Ship`

## Inputs — required
- Staged changes or recent git commits — .gemini/commands/ship.toml:14
- Custom agent definitions in `agents/` or `~/.gemini/agents/` (if present) — .gemini/commands/ship.toml:25

## Outputs — required
- Structured Markdown Ship Decision report (.gemini/commands/ship.toml:42-63) containing:
  - `## Ship Decision: GO | NO-GO`
  - `### Blockers (must fix before ship)`
  - `### Recommended fixes (should fix before ship)`
  - `### Acknowledged risks (shipping anyway)`
  - `### Rollback plan` (Trigger conditions, Rollback procedure, Recovery time objective)
  - `### Specialist reports (full)`

## Invokes — required
- skill shipping-and-launch — .gemini/commands/ship.toml:4
- persona/tool code-reviewer — .gemini/commands/ship.toml:10, 14
- persona/tool security-auditor — .gemini/commands/ship.toml:10, 15
- persona/tool test-engineer — .gemini/commands/ship.toml:10, 16
- reference references/orchestration-patterns.md — .gemini/commands/ship.toml:23

## Invoked by — required
none

## Concepts named — required, verbatim
- `shipping-and-launch` — .gemini/commands/ship.toml:4 — used here
- `fan-out orchestrator` — .gemini/commands/ship.toml:6 — defined here
- `go/no-go decision` — .gemini/commands/ship.toml:1, 6 — defined here
- `rollback plan` — .gemini/commands/ship.toml:6, 54, 69 — defined here
- `code-reviewer` — .gemini/commands/ship.toml:10, 14, 25, 31, 60 — used here
- `security-auditor` — .gemini/commands/ship.toml:10, 15, 25, 32, 61 — used here
- `test-engineer` — .gemini/commands/ship.toml:10, 16, 25, 62 — used here
- `five-axis review` — .gemini/commands/ship.toml:14 — used here
- `vulnerability and threat-model pass` — .gemini/commands/ship.toml:15 — defined here
- `OWASP Top 10` — .gemini/commands/ship.toml:15 — used here
- `test coverage analysis` — .gemini/commands/ship.toml:16 — used here
- `flat fan-out` — .gemini/commands/ship.toml:22 — defined here
- `Core Web Vitals` — .gemini/commands/ship.toml:33 — used here
- `accessibility checklist` — .gemini/commands/ship.toml:34 — used here
- `Recovery time objective` — .gemini/commands/ship.toml:57 — defined here
- `fan-out bypass criteria` — .gemini/commands/ship.toml:71 — defined here

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
- Demonstrates Gemini CLI's multi-agent tool calling convention: custom personas in `agents/*.md` become callable tools (`code-reviewer`, `security-auditor`, `test-engineer`) spawned in parallel in a single assistant turn (.gemini/commands/ship.toml:10).
- Fallback mechanism specified: if subagent spawning is unavailable, invoke system prompts sequentially in the main context and merge outputs (.gemini/commands/ship.toml:18).
- Explicit bypass heuristic (.gemini/commands/ship.toml:71): fan-out may be skipped only if changes touch <= 2 files, < 50 lines diff, and do not touch auth, payments, data access, or config/env.

## Context cost
- File size: 4,780 bytes (~1,200 tokens).
- Transitive context cost when invoked: loads `shipping-and-launch` SKILL.md (10,958 bytes) plus subagent prompts (`code-reviewer.md` 3,995 bytes, `security-auditor.md` 5,124 bytes, `test-engineer.md` 4,312 bytes), totaling ~29,169 bytes (~7,300 tokens) before diff content.
