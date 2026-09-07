---
unit: cc-matt-23
phase: 2
package: matt
session: 015
subagent_returned: complete
---

# Unit cc-matt-23

## Files assigned
- [x] sources/matt-external/to-spec.md
- [x] sources/matt-external/to-tickets.md
- [x] sources/matt-external/triage.md
- [x] sources/matt-external/wait-what.md
- [x] sources/matt/skills/engineering/to-spec/SKILL.md
- [x] sources/matt/skills/misc/git-guardrails-claude-code/scripts/block-dangerous-git.sh
- [x] docs/analysis/inventory/matt/external-to-spec-md.md
- [x] docs/analysis/inventory/matt/skills-engineering-to-spec-skill-md.md
- [x] docs/analysis/inventory/matt/external-to-tickets-md.md
- [x] docs/analysis/inventory/matt/external-triage-md.md
- [x] docs/analysis/inventory/matt/skills-misc-git-guardrails-claude-code-scripts-block-dangerous-git-sh.md
- [x] docs/analysis/inventory/matt/external-wait-what-md.md

## Outputs produced
- docs/analysis/concepts/matt/implementation-decisions.md — 1647 bytes
- docs/analysis/concepts/matt/testing-decisions.md — 1529 bytes
- docs/analysis/concepts/matt/context-hygiene.md — 1622 bytes
- docs/analysis/concepts/matt/compaction.md — 1513 bytes
- docs/analysis/concepts/matt/the-to-tickets-skill.md — 892 bytes
- docs/analysis/concepts/matt/demo-path.md — 1263 bytes
- docs/analysis/concepts/matt/sub-issues.md — 1241 bytes
- docs/analysis/concepts/matt/category-role.md — 1177 bytes
- docs/analysis/concepts/matt/state-role.md — 1273 bytes
- docs/analysis/concepts/matt/agent-ready-brief.md — 1406 bytes
- docs/analysis/concepts/matt/recommends-and-waits.md — 1344 bytes
- docs/analysis/concepts/matt/label-vocabulary.md — 1363 bytes
- docs/analysis/concepts/matt/canonical.md — 1302 bytes
- docs/analysis/concepts/matt/request-surface.md — 1213 bytes
- docs/analysis/concepts/matt/deferred.md — 1377 bytes
- docs/analysis/concepts/matt/implemented.md — 1311 bytes
- docs/analysis/concepts/matt/knowledge-base.md — 1656 bytes
- docs/analysis/concepts/matt/design-document.md — 1793 bytes
- docs/analysis/concepts/matt/durable.md — 1684 bytes
- docs/analysis/concepts/matt/behavioural-contracts.md — 1483 bytes
- docs/analysis/concepts/matt/external-pr.md — 1676 bytes
- docs/analysis/concepts/matt/afk-runner.md — 1672 bytes
- docs/analysis/concepts/matt/spec-flow.md — 1495 bytes
- docs/analysis/concepts/matt/inbound-work.md — 1472 bytes
- docs/analysis/concepts/matt/blocked.md — 1844 bytes
- docs/analysis/concepts/matt/paused.md — 1400 bytes
- docs/analysis/concepts/matt/needs-slicing.md — 1521 bytes
- docs/analysis/concepts/matt/tracking.md — 1248 bytes
- docs/analysis/concepts/matt/evidence-base.md — 1516 bytes
- docs/analysis/concepts/matt/the-wait-what-skill.md — 890 bytes
- docs/analysis/concepts/matt/_units/cc-matt-23.md — this report

## Scripts executed
- `bun scripts/synthesis/quote-check.ts docs/analysis/concepts/matt/implementation-decisions.md docs/analysis/concepts/matt/testing-decisions.md docs/analysis/concepts/matt/context-hygiene.md docs/analysis/concepts/matt/compaction.md docs/analysis/concepts/matt/the-to-tickets-skill.md docs/analysis/concepts/matt/demo-path.md docs/analysis/concepts/matt/sub-issues.md docs/analysis/concepts/matt/category-role.md docs/analysis/concepts/matt/state-role.md docs/analysis/concepts/matt/agent-ready-brief.md docs/analysis/concepts/matt/recommends-and-waits.md docs/analysis/concepts/matt/label-vocabulary.md docs/analysis/concepts/matt/canonical.md docs/analysis/concepts/matt/request-surface.md docs/analysis/concepts/matt/deferred.md docs/analysis/concepts/matt/implemented.md docs/analysis/concepts/matt/knowledge-base.md docs/analysis/concepts/matt/design-document.md docs/analysis/concepts/matt/durable.md docs/analysis/concepts/matt/behavioural-contracts.md docs/analysis/concepts/matt/external-pr.md docs/analysis/concepts/matt/afk-runner.md docs/analysis/concepts/matt/spec-flow.md docs/analysis/concepts/matt/inbound-work.md docs/analysis/concepts/matt/blocked.md docs/analysis/concepts/matt/paused.md docs/analysis/concepts/matt/needs-slicing.md docs/analysis/concepts/matt/tracking.md docs/analysis/concepts/matt/evidence-base.md docs/analysis/concepts/matt/the-wait-what-skill.md` — exit 0 (35 PASS, 0 FAIL across 30 cards)

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied (package-prefixed before decision; canonical after)

## Cross-unit notes
- Unit cc-matt-23 synthesizes 30 concept cards bridging the transition between internal specification authoring (`to-spec`, `to-tickets`) and the intake filter for unvetted external contributions (`triage`), with connections to git execution safety gates (`block-dangerous-git.sh`) and conversational prompt repair (`wait-what`).
- Specification and Ticket Mechanics (`implementation-decisions`, `testing-decisions`, `context-hygiene`, `compaction`, `the-to-tickets-skill`, `demo-path`, `sub-issues`): Establishes disciplined decision logging and context management to avoid degradation, ticket splitting best practices, and manual demo paths for verification.
- Triage Role Invariants and Durability (`category-role`, `state-role`, `agent-ready-brief`, `recommends-and-waits`, `label-vocabulary`, `canonical`, `request-surface`, `deferred`, `implemented`, `knowledge-base`, `design-document`, `durable`, `behavioural-contracts`, `external-pr`, `afk-runner`, `spec-flow`, `inbound-work`, `blocked`, `paused`, `needs-slicing`, `tracking`, `evidence-base`): Governs the two-dimensional role invariant (exactly one category role and one state role) for incoming issues. Agent briefs must be durable (mandating types, signatures, and behavioral contracts rather than fragile file paths or line numbers) so autonomous AFK runners can execute tasks even after the codebase drifts. Rejected enhancements are preserved as conceptual design documents in `.out-of-scope/` to enable semantic deduplication.
- Unshipped States and Community Labels: User requests for `deferred`, `implemented`, and `blocked`/`paused` states, as well as community derivative labels (`needs-slicing`, `tracking`), reflect developer demand for dependency management and ticket decomposition that Matt intentionally excluded to preserve query simplicity.
- Multi-occurrence Concepts and Name-Only Classification: `blocked` integrates two distinct operational roles: an automated PreToolUse safety gate intercepting destructive commands in `block-dangerous-git.sh` and an un-shipped dependency state in `triage.md`. Non-lifecycle section headings (`the-to-tickets-skill`, `the-wait-what-skill`) were authored with `kind: name-only` per D-023.

## Blocked or uncertain
none

## Time and size
Approximate tokens of source read: ~120,000 tokens across 6 source files and 6 inventory cards.
Approximate tokens of output written: ~12,500 tokens across 30 concept cards (42,823 bytes) and 1 unit report.
