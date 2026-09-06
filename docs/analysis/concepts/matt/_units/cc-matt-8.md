---
unit: cc-matt-8
phase: 2
package: matt
session: 015
subagent_returned: complete
---

# Unit cc-matt-8

## Files assigned
- [x] sources/matt/CHANGELOG.md
- [x] sources/matt/CONTEXT.md
- [x] sources/matt/docs/engineering/ask-matt.md
- [x] sources/matt/docs/engineering/codebase-design.md
- [x] sources/matt/docs/engineering/research.md
- [x] sources/matt/docs/engineering/to-tickets.md
- [x] sources/matt/docs/engineering/wayfinder.md
- [x] sources/matt/docs/productivity/grill-me.md
- [x] sources/matt/docs/productivity/grilling.md
- [x] sources/matt/docs/productivity/teach.md
- [x] sources/matt-external/ask-matt.md
- [x] sources/matt-external/codebase-design.md
- [x] sources/matt-external/grill-me.md
- [x] sources/matt-external/grilling.md
- [x] sources/matt-external/implement.md
- [x] sources/matt-external/research.md
- [x] sources/matt-external/tdd.md
- [x] sources/matt-external/to-tickets.md
- [x] sources/matt-external/wayfinder.md
- [x] sources/matt/skills/engineering/ask-matt/PHASE-BOUNDARIES.md
- [x] sources/matt/skills/engineering/ask-matt/SKILL.md
- [x] sources/matt/skills/engineering/codebase-design/DESIGN-IT-TWICE.md
- [x] sources/matt/skills/engineering/improve-codebase-architecture/SKILL.md
- [x] sources/matt/skills/engineering/research/SKILL.md
- [x] sources/matt/skills/engineering/resolving-merge-conflicts/SKILL.md
- [x] sources/matt/skills/engineering/setup-matt-pocock-skills/issue-tracker-local.md
- [x] sources/matt/skills/engineering/to-tickets/SKILL.md
- [x] sources/matt/skills/engineering/wayfinder/SKILL.md
- [x] sources/matt/skills/in-progress/README.md
- [x] sources/matt/skills/in-progress/claude-handoff/SKILL.md
- [x] sources/matt/skills/in-progress/implement-spec/SKILL.md
- [x] sources/matt/skills/productivity/grilling/SKILL.md
- [x] sources/matt/skills/productivity/writing-for-agents/SKILL.md

## Outputs produced
- docs/analysis/concepts/matt/implementation-ticket.md (1512 bytes)
- docs/analysis/concepts/matt/research-tickets.md (1726 bytes)
- docs/analysis/concepts/matt/single-source-of-truth.md (1564 bytes)
- docs/analysis/concepts/matt/yagni-scoping-filter.md (1254 bytes)
- docs/analysis/concepts/matt/phase-boundaries.md (1577 bytes)
- docs/analysis/concepts/matt/phase.md (1613 bytes)
- docs/analysis/concepts/matt/smart-zone.md (1812 bytes)
- docs/analysis/concepts/matt/wayfinder-routing.md (1271 bytes)
- docs/analysis/concepts/matt/local-markdown-tickets.md (1271 bytes)
- docs/analysis/concepts/matt/frontier.md (3282 bytes)
- docs/analysis/concepts/matt/design-it-twice.md (2026 bytes)
- docs/analysis/concepts/matt/fowler-smell-baseline.md (1285 bytes)
- docs/analysis/concepts/matt/confirmation-gate.md (1433 bytes)
- docs/analysis/concepts/matt/facts-vs-decisions.md (1407 bytes)
- docs/analysis/concepts/matt/negation.md (1461 bytes)
- docs/analysis/concepts/matt/negative-space.md (1476 bytes)
- docs/analysis/concepts/matt/background-agent.md (1920 bytes)
- docs/analysis/concepts/matt/primary-sources.md (1872 bytes)
- docs/analysis/concepts/matt/wide-refactor.md (1582 bytes)
- docs/analysis/concepts/matt/blast-radius.md (1679 bytes)
- docs/analysis/concepts/matt/expand-contract.md (1604 bytes)
- docs/analysis/concepts/matt/tracer-bullet-vertical-slices.md (1195 bytes)
- docs/analysis/concepts/matt/native-blocking-links.md (1386 bytes)
- docs/analysis/concepts/matt/native-sub-issues.md (1412 bytes)
- docs/analysis/concepts/matt/native-blocking-edges.md (1323 bytes)
- docs/analysis/concepts/matt/fog-of-war.md (1735 bytes)
- docs/analysis/concepts/matt/the-map.md (1332 bytes)
- docs/analysis/concepts/matt/decisions-not-deliverables.md (1188 bytes)
- docs/analysis/concepts/matt/task.md (2024 bytes)
- docs/analysis/concepts/matt/hitl.md (1723 bytes)

## Scripts executed
- bun scripts/synthesis/quote-check.ts (exit code 0: 42 PASS, 0 FAIL)
- bun scripts/synthesis/concept-index.ts (exit code 0)
- bun scripts/synthesis/coverage.ts (exit code 0: clean)

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied (package-prefixed before decision; canonical after)

## Cross-unit notes
- Several concepts in unit cc-matt-8 relate tightly to wayfinder architecture: `wayfinder-routing`, `the-map`, `frontier`, `fog-of-war`, `decisions-not-deliverables`, `task`, `HITL`, and `research-tickets`.
- Wide refactor sequencing connects `wide-refactor`, `blast-radius`, `expand–contract`, and `tracer-bullet-vertical-slices`.
- Prompting and steering concepts from `writing-for-agents` (`single-source-of-truth`, `yagni-scoping-filter`, `negation`, `negative-space`) articulate negative failure modes and positive steering principles.
- `frontier` is an overloaded concept appearing in both grilling (advancement of settled decisions) and wayfinder / to-tickets (open unblocked actionable tickets). Both dimensions are documented in the card.

## Blocked or uncertain
none

## Time and size
Approximate tokens of source read: ~130k tokens across 33 source files and 25 citing inventory cards.
Approximate tokens of output written: ~12k tokens across 30 concept cards and this report.
