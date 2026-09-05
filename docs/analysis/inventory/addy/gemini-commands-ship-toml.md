---
package: addy
path: .gemini/commands/ship.toml
type: command
bytes: 4780
unit: inv-addy-2
aliases: []
memo_inputs:
  - {path: .gemini/commands/ship.toml, sha256: 7018889ee96cd5e198fee199fdf7bc8a5af6fa5e57d575d74a6d94837dd7a101}
method_sha: 647767d85acc14e391fbbf69d54d8543f31a0497dc52121aaf5997e1c6065f5f
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-04 quote-check+coverage
---

# .gemini/commands/ship.toml

## Purpose — required, verbatim
> "Run the pre-launch checklist via parallel fan-out to specialist personas, then synthesize a go/no-go decision" — .gemini/commands/ship.toml:1

## Design intent — required
Coordinates pre-release verification by executing three specialist review personas concurrently in parallel turns, merging their reports in the main context into an authoritative GO/NO-GO verdict backed by an explicit rollback plan.

## Phase — required
addy:ship

## Inputs — required
Staged git changes or recent commits (.gemini/commands/ship.toml:14), specialist persona reports (.gemini/commands/ship.toml:29), and direct verifications for accessibility, infrastructure, and documentation (.gemini/commands/ship.toml:34-36).

## Outputs — required
Ship Decision report with GO | NO-GO verdict, Blockers, Recommended fixes, Acknowledged risks, Rollback plan, and full specialist reports (.gemini/commands/ship.toml:43-63).

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
- `code-reviewer` — .gemini/commands/ship.toml:14 — used here
- `security-auditor` — .gemini/commands/ship.toml:15 — used here
- `test-engineer` — .gemini/commands/ship.toml:16 — used here
- `GO | NO-GO` — .gemini/commands/ship.toml:43 — used here
- `Rollback plan` — .gemini/commands/ship.toml:54 — used here

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
Forms variant pair V3 (92% shared lines) with `commands/ship.toml` in `docs/analysis/manifest/addy-duplicates.md`. Tailored for Gemini CLI's subagent tooling and scope priority model, allowing local and user-level persona overrides.

## Context cost
4780 bytes, ~1200 tokens.
