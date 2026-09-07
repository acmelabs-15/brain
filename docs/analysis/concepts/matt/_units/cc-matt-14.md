---
unit: cc-matt-14
phase: 2
package: matt
session: 015
subagent_returned: complete
---

# Unit cc-matt-14

## Files assigned
- [x] sources/matt/docs/engineering/research.md
- [x] sources/matt/docs/engineering/resolving-merge-conflicts.md
- [x] sources/matt/docs/engineering/setup-matt-pocock-skills.md
- [x] sources/matt/docs/engineering/tdd.md
- [x] sources/matt/docs/engineering/to-spec.md
- [x] sources/matt/docs/engineering/to-tickets.md
- [x] sources/matt/docs/engineering/triage.md
- [x] sources/matt/docs/engineering/wayfinder.md
- [x] sources/matt/docs/productivity/grill-me.md
- [x] sources/matt/docs/productivity/teach.md
- [x] sources/matt-external/ask-matt.md
- [x] sources/matt-external/grill-me.md
- [x] sources/matt-external/implement.md
- [x] sources/matt-external/research.md
- [x] sources/matt-external/resolving-merge-conflicts.md
- [x] sources/matt-external/setup-matt-pocock-skills.md
- [x] sources/matt-external/tdd.md
- [x] sources/matt-external/teach.md
- [x] sources/matt-external/to-spec.md
- [x] sources/matt-external/to-tickets.md
- [x] sources/matt-external/triage.md
- [x] sources/matt-external/wayfinder.md
- [x] sources/matt/skills/engineering/resolving-merge-conflicts/SKILL.md
- [x] sources/matt/skills/engineering/resolving-merge-conflicts/agents/openai.yaml
- [x] sources/matt/skills/engineering/setup-matt-pocock-skills/SKILL.md
- [x] sources/matt/skills/engineering/setup-matt-pocock-skills/domain.md
- [x] sources/matt/skills/engineering/setup-matt-pocock-skills/issue-tracker-github.md
- [x] sources/matt/skills/engineering/setup-matt-pocock-skills/issue-tracker-gitlab.md
- [x] sources/matt/skills/engineering/setup-matt-pocock-skills/issue-tracker-local.md
- [x] sources/matt/skills/engineering/setup-matt-pocock-skills/triage-labels.md
- [x] sources/matt/skills/engineering/tdd/SKILL.md
- [x] sources/matt/skills/engineering/to-spec/SKILL.md
- [x] sources/matt/skills/engineering/to-tickets/SKILL.md
- [x] sources/matt/skills/engineering/triage/AGENT-BRIEF.md
- [x] sources/matt/skills/engineering/triage/SKILL.md
- [x] sources/matt/skills/in-progress/retro/SKILL.md

## Outputs produced
- docs/analysis/concepts/matt/shelf-life.md — 1774 bytes
- docs/analysis/concepts/matt/resolving-merge-conflicts.md — 2682 bytes
- docs/analysis/concepts/matt/automated-checks.md — 2280 bytes
- docs/analysis/concepts/matt/sessions.md — 2343 bytes
- docs/analysis/concepts/matt/triage-labels.md — 2403 bytes
- docs/analysis/concepts/matt/domain-docs.md — 2390 bytes
- docs/analysis/concepts/matt/other.md — 1157 bytes
- docs/analysis/concepts/matt/mcp.md — 1729 bytes
- docs/analysis/concepts/matt/red-green-refactor.md — 2112 bytes
- docs/analysis/concepts/matt/stateless.md — 1988 bytes
- docs/analysis/concepts/matt/red-green.md — 1836 bytes
- docs/analysis/concepts/matt/horizontal-slicing.md — 1878 bytes
- docs/analysis/concepts/matt/pre-agreed-seam.md — 1813 bytes
- docs/analysis/concepts/matt/implementation-coupled.md — 1887 bytes
- docs/analysis/concepts/matt/tautological.md — 2088 bytes
- docs/analysis/concepts/matt/triage-label.md — 1753 bytes
- docs/analysis/concepts/matt/to-prd.md — 1555 bytes
- docs/analysis/concepts/matt/ready-for-agent.md — 2762 bytes
- docs/analysis/concepts/matt/map.md — 2559 bytes
- docs/analysis/concepts/matt/user-stories.md — 1900 bytes
- docs/analysis/concepts/matt/agent-ready.md — 1725 bytes
- docs/analysis/concepts/matt/horizontal.md — 1749 bytes
- docs/analysis/concepts/matt/vertical.md — 1650 bytes
- docs/analysis/concepts/matt/acceptance-criteria.md — 1764 bytes
- docs/analysis/concepts/matt/prefactoring.md — 1597 bytes
- docs/analysis/concepts/matt/expand.md — 1468 bytes
- docs/analysis/concepts/matt/migrate.md — 1565 bytes
- docs/analysis/concepts/matt/contract.md — 1455 bytes
- docs/analysis/concepts/matt/integration-branch.md — 1715 bytes
- docs/analysis/concepts/matt/tool-calls.md — 1127 bytes
- docs/analysis/concepts/matt/_units/cc-matt-14.md — this report

## Scripts executed
- `bun scripts/synthesis/quote-check.ts docs/analysis/concepts/matt/shelf-life.md docs/analysis/concepts/matt/resolving-merge-conflicts.md docs/analysis/concepts/matt/automated-checks.md docs/analysis/concepts/matt/sessions.md docs/analysis/concepts/matt/triage-labels.md docs/analysis/concepts/matt/domain-docs.md docs/analysis/concepts/matt/other.md docs/analysis/concepts/matt/mcp.md docs/analysis/concepts/matt/red-green-refactor.md docs/analysis/concepts/matt/stateless.md docs/analysis/concepts/matt/red-green.md docs/analysis/concepts/matt/horizontal-slicing.md docs/analysis/concepts/matt/pre-agreed-seam.md docs/analysis/concepts/matt/implementation-coupled.md docs/analysis/concepts/matt/tautological.md docs/analysis/concepts/matt/triage-label.md docs/analysis/concepts/matt/to-prd.md docs/analysis/concepts/matt/ready-for-agent.md docs/analysis/concepts/matt/map.md docs/analysis/concepts/matt/user-stories.md docs/analysis/concepts/matt/agent-ready.md docs/analysis/concepts/matt/horizontal.md docs/analysis/concepts/matt/vertical.md docs/analysis/concepts/matt/acceptance-criteria.md docs/analysis/concepts/matt/prefactoring.md docs/analysis/concepts/matt/expand.md docs/analysis/concepts/matt/migrate.md docs/analysis/concepts/matt/contract.md docs/analysis/concepts/matt/integration-branch.md docs/analysis/concepts/matt/tool-calls.md` — exit 0 (33 PASS, 0 FAIL)

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied (package-prefixed before decision; canonical after)

## Cross-unit notes
- TDD anti-patterns and rules: `tautological` assertions (tests passing by construction), `implementation-coupled` tests (fragile coupling to internal mechanics), and `horizontal-slicing` (bulk tests ahead of implementation) form the trio of suite-ruining anti-patterns guarded against by `tdd`. In contrast, `red-green` vertical slicing with `pre-agreed-seam` boundaries ensures durable tests at public interfaces.
- Triage and Issue Management: `triage-labels`, `triage-label`, and `ready-for-agent` (synonymous with `agent-ready`) govern work routing. `to-tickets` outputs tickets that are `agent-ready` by construction, bypassing manual triage. `ready-for-agent` indicates an issue is completely specified with an agent brief, though AFK pollers can mistakenly ingest parent specs carrying this label.
- Planning and Ticket Breakdown: `to-spec` (renamed from `to-prd` in v1.1) captures decisions from discussion into a destination spec structured around `user-stories`. `to-tickets` breaks this spec into `vertical` tracer-bullet tickets while avoiding `horizontal` layer slicing. It identifies `prefactoring` opportunities to schedule first.
- Wide Refactoring Pattern: For wide refactorings where tracer bullets cannot land green due to cross-codebase blast radius, `to-tickets` transitions to the expand-contract pattern: `expand` (introduce new form beside old), `migrate` (transition call sites in bounded batches), and `contract` (delete legacy form). When batches cannot stand green alone, an `integration-branch` isolates unstable interim commits before final merge.
- High-level Decision Mapping: `wayfinder` plans large foggy initiatives into a shared `map` of decision tickets, resolving ambiguities before work reaches `to-spec` and `to-tickets`.
- Execution and Infrastructure: `tool-calls` and `mcp` represent execution-level AI interaction mechanisms, classified as `name-only` per D-023 as they represent runtime primitives rather than development lifecycle concepts.

## Blocked or uncertain
none

## Time and size
Approximate source read: ~140,000 tokens across 36 assigned source files (including external documentation snapshots).
Approximate output written: ~12,500 tokens across 30 concept cards and this unit report.
