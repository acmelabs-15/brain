---
unit: cc-matt-30
phase: 2
package: matt
session: 015
subagent_returned: complete
---

# Unit cc-matt-30

## Files assigned
- [x] sources/matt/skills/engineering/tdd/SKILL.md
- [x] sources/matt/skills/engineering/tdd/mocking.md
- [x] sources/matt/skills/engineering/tdd/tests.md
- [x] sources/matt/skills/engineering/to-spec/SKILL.md
- [x] sources/matt/skills/engineering/to-tickets/SKILL.md
- [x] sources/matt/skills/misc/scaffold-exercises/SKILL.md
- [x] docs/analysis/inventory/matt/skills-engineering-tdd-mocking-md.md
- [x] docs/analysis/inventory/matt/skills-engineering-tdd-skill-md.md
- [x] docs/analysis/inventory/matt/skills-engineering-tdd-tests-md.md
- [x] docs/analysis/inventory/matt/skills-engineering-to-spec-skill-md.md
- [x] docs/analysis/inventory/matt/skills-engineering-to-tickets-skill-md.md
- [x] docs/analysis/inventory/matt/skills-misc-scaffold-exercises-skill-md.md

## Outputs produced
- docs/analysis/concepts/matt/databases.md — 1203 bytes
- docs/analysis/concepts/matt/time-randomness.md — 1141 bytes
- docs/analysis/concepts/matt/file-system.md — 1174 bytes
- docs/analysis/concepts/matt/internal-collaborators.md — 1502 bytes
- docs/analysis/concepts/matt/designing-for-mockability.md — 943 bytes
- docs/analysis/concepts/matt/dependency-injection.md — 1450 bytes
- docs/analysis/concepts/matt/sdk-style-interfaces.md — 1419 bytes
- docs/analysis/concepts/matt/generic-fetchers.md — 1324 bytes
- docs/analysis/concepts/matt/integration-tests.md — 1585 bytes
- docs/analysis/concepts/matt/red-green-loop.md — 1688 bytes
- docs/analysis/concepts/matt/public-interfaces.md — 1418 bytes
- docs/analysis/concepts/matt/vertical-slices.md — 1507 bytes
- docs/analysis/concepts/matt/red-before-green.md — 1413 bytes
- docs/analysis/concepts/matt/one-slice-at-a-time.md — 1362 bytes
- docs/analysis/concepts/matt/good-tests.md — 917 bytes
- docs/analysis/concepts/matt/integration-style.md — 1262 bytes
- docs/analysis/concepts/matt/observable-behavior.md — 1332 bytes
- docs/analysis/concepts/matt/bad-tests.md — 924 bytes
- docs/analysis/concepts/matt/implementation-detail-tests.md — 1320 bytes
- docs/analysis/concepts/matt/private-methods.md — 1110 bytes
- docs/analysis/concepts/matt/call-counts-order.md — 1163 bytes
- docs/analysis/concepts/matt/spec-template.md — 1372 bytes
- docs/analysis/concepts/matt/problem-statement.md — 993 bytes
- docs/analysis/concepts/matt/solution.md — 1202 bytes
- docs/analysis/concepts/matt/further-notes.md — 978 bytes
- docs/analysis/concepts/matt/block.md — 1520 bytes
- docs/analysis/concepts/matt/prefactor.md — 1570 bytes
- docs/analysis/concepts/matt/vertical-slice-rules.md — 1442 bytes
- docs/analysis/concepts/matt/wide-refactors.md — 1920 bytes
- docs/analysis/concepts/matt/local-ticket-template.md — 1531 bytes
- docs/analysis/concepts/matt/_units/cc-matt-30.md — this report

## Scripts executed
- bun scripts/synthesis/quote-check.ts docs/analysis/concepts/matt/databases.md docs/analysis/concepts/matt/time-randomness.md docs/analysis/concepts/matt/file-system.md docs/analysis/concepts/matt/internal-collaborators.md docs/analysis/concepts/matt/designing-for-mockability.md docs/analysis/concepts/matt/dependency-injection.md docs/analysis/concepts/matt/sdk-style-interfaces.md docs/analysis/concepts/matt/generic-fetchers.md docs/analysis/concepts/matt/integration-tests.md docs/analysis/concepts/matt/red-green-loop.md docs/analysis/concepts/matt/public-interfaces.md docs/analysis/concepts/matt/vertical-slices.md docs/analysis/concepts/matt/red-before-green.md docs/analysis/concepts/matt/one-slice-at-a-time.md docs/analysis/concepts/matt/good-tests.md docs/analysis/concepts/matt/integration-style.md docs/analysis/concepts/matt/observable-behavior.md docs/analysis/concepts/matt/bad-tests.md docs/analysis/concepts/matt/implementation-detail-tests.md docs/analysis/concepts/matt/private-methods.md docs/analysis/concepts/matt/call-counts-order.md docs/analysis/concepts/matt/spec-template.md docs/analysis/concepts/matt/problem-statement.md docs/analysis/concepts/matt/solution.md docs/analysis/concepts/matt/further-notes.md docs/analysis/concepts/matt/block.md docs/analysis/concepts/matt/prefactor.md docs/analysis/concepts/matt/vertical-slice-rules.md docs/analysis/concepts/matt/wide-refactors.md docs/analysis/concepts/matt/local-ticket-template.md — exit 0 (36 PASS, 0 FAIL across 30 cards)

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied (package-prefixed before decision; canonical after)

## Cross-unit notes
- Unit cc-matt-30 covers the core lifecycle concepts across three primary engineering workflows in the Matt package: Test-Driven Development (`tdd`), Specification Writing (`to-spec`), and Ticket Decomposition (`to-tickets`), alongside educational exercise scaffolding (`scaffold-exercises`).
- Test-driven design (`tdd`) concepts enforce observable behavior testing via public interfaces (`public-interfaces`, `observable-behavior`, `good-tests`, `integration-style`) while strictly deprecating internal mock coupling (`bad-tests`, `implementation-detail-tests`, `private-methods`, `call-counts-order`). Mocking rules distinguish between permissible external boundaries (`databases`, `time-randomness`, `file-system`) and prohibited internal collaborators (`internal-collaborators`), advocating `designing-for-mockability`, `dependency-injection`, and `sdk-style-interfaces` over `generic-fetchers`. The iterative cycle is governed by `red-green-loop`, `vertical-slices`, `red-before-green`, and `one-slice-at-a-time`.
- Specification synthesis (`to-spec`) defines feature scope via `spec-template`, with sub-headings `problem-statement`, `solution`, and `further-notes` modeled as name-only cards.
- Ticket planning (`to-tickets`) deconstructs specifications into dependency-gated vertical slices governed by `vertical-slice-rules` and `local-ticket-template`. Slices declare gating edges (`block`) and surface preparatory restructuring opportunities (`prefactor`). High blast-radius architectural changes are treated as `wide-refactors` utilizing expand-contract phasing rather than forced tracer bullets.

## Blocked or uncertain
none

## Time and size
Approximate source read: ~20,000 tokens (~19,547 bytes across 6 source files and ~24,000 bytes across 6 inventory cards).
Approximate output written: ~10,000 tokens across 30 concept cards (40,405 bytes) and this unit report.
