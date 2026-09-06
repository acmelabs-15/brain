---
package: addy
path: commands/ship.toml
type: command
bytes: 4712
unit: inv-addy-4
aliases: []
memo_inputs:
  - {path: commands/ship.toml, sha256: a067c5c4ea484609ceb530b908c7fb707f184abae839826012ddca653517c1c5}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# commands/ship.toml

## Purpose — required, verbatim
> "Run the pre-launch checklist via parallel fan-out to specialist personas, then synthesize a go/no-go decision" — commands/ship.toml:1

## Design intent — required
Implements the `/ship` command as a parallel fan-out orchestrator for release verification. Spawns three independent specialist subagents (`code-reviewer`, `security-auditor`, and `test-engineer`) concurrently in isolated contexts, synthesizes their findings in the main context alongside accessibility and infrastructure checks, and produces a definitive GO/NO-GO verdict with a mandatory rollback plan.

## Phase — required
addy:Ship

## Inputs — required
- Staged changes or recent commits: "staged changes or recent commits" — commands/ship.toml:14
- Subagent reports: "Specialist reports (full)" — commands/ship.toml:59
- Direct verifications: "Accessibility" — commands/ship.toml:34, "Infrastructure" — commands/ship.toml:35, "Documentation" — commands/ship.toml:36

## Outputs — required
- Launch decision document: "## Ship Decision: GO | NO-GO" — commands/ship.toml:43
- Mandatory rollback plan: "### Rollback plan" — commands/ship.toml:54

## Invokes — required
- skill shipping-and-launch — commands/ship.toml:4
- agent code-reviewer — commands/ship.toml:14
- agent security-auditor — commands/ship.toml:15
- agent test-engineer — commands/ship.toml:16
- reference orchestration-patterns — commands/ship.toml:23
- reference "accessibility checklist" — commands/ship.toml:34

## Invoked by — required
none

## Concepts named — required, verbatim
- `fan-out orchestrator` — commands/ship.toml:6 — defined here
- `code-reviewer` — commands/ship.toml:10, 14, 25, 31, 33 — used here
- `security-auditor` — commands/ship.toml:15, 25, 32 — used here
- `test-engineer` — commands/ship.toml:16, 25 — used here
- `five-axis review` — commands/ship.toml:14 — used here
- `OWASP Top 10` — commands/ship.toml:15 — used here
- `references/orchestration-patterns.md` — commands/ship.toml:23 — used here
- `Persona resolution` — commands/ship.toml:25 — defined here
- `Core Web Vitals` — commands/ship.toml:33 — used here
- `accessibility checklist` — commands/ship.toml:34 — used here
- `Ship Decision: GO | NO-GO` — commands/ship.toml:43 — defined here
- `Rollback plan` — commands/ship.toml:54, 69 — defined here

## Structure
- description — commands/ship.toml:1
- prompt — commands/ship.toml:3
- `## Phase A — Parallel fan-out` — commands/ship.toml:8
- `## Phase B — Merge in main context` — commands/ship.toml:27
- `## Phase C — Decision and rollback` — commands/ship.toml:38
- `## Rules` — commands/ship.toml:65

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
Variant of `.gemini/commands/ship.toml` (VARIANT V3 in duplication ledger, 92% shared lines, analyzed in divergence card `_divergence/gemini-commands-ship-toml--commands-ship-toml.md`). Requires all three subagents to be spawned in a single assistant turn to ensure parallel execution. User-defined personas override default plugin personas. Addresses Phase 1V findings by recording the invocation of the accessibility checklist (line 34) and concepts `accessibility checklist` (line 34), `five-axis review` (line 14), `OWASP Top 10` (line 15), and `Core Web Vitals` (line 33).

## Context cost
4712 bytes, approximately 1180 tokens.
