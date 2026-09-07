---
unit: cc-matt-22
phase: 2
package: matt
session: 015
subagent_returned: complete
---

# Unit cc-matt-22

## Files assigned
- [x] sources/matt-external/resolving-merge-conflicts.md
- [x] sources/matt-external/setup-matt-pocock-skills.md
- [x] sources/matt-external/tdd.md
- [x] sources/matt-external/teach.md
- [x] sources/matt-external/to-questionnaire.md
- [x] sources/matt-external/to-spec.md
- [x] sources/matt/skills/engineering/domain-modeling/CONTEXT-FORMAT.md
- [x] sources/matt/skills/engineering/resolving-merge-conflicts/SKILL.md
- [x] sources/matt/skills/engineering/setup-matt-pocock-skills/SKILL.md
- [x] sources/matt/skills/engineering/tdd/mocking.md
- [x] sources/matt/skills/misc/README.md
- [x] sources/matt/skills/misc/setup-pre-commit/SKILL.md
- [x] docs/analysis/inventory/matt/external-resolving-merge-conflicts-md.md
- [x] docs/analysis/inventory/matt/skills-engineering-resolving-merge-conflicts-skill-md.md
- [x] docs/analysis/inventory/matt/skills-misc-setup-pre-commit-skill-md.md
- [x] docs/analysis/inventory/matt/skills-misc-readme-md.md
- [x] docs/analysis/inventory/matt/external-setup-matt-pocock-skills-md.md
- [x] docs/analysis/inventory/matt/skills-engineering-domain-modeling-context-format-md.md
- [x] docs/analysis/inventory/matt/skills-engineering-setup-matt-pocock-skills-skill-md.md
- [x] docs/analysis/inventory/matt/external-tdd-md.md
- [x] docs/analysis/inventory/matt/skills-engineering-tdd-mocking-md.md
- [x] docs/analysis/inventory/matt/external-teach-md.md
- [x] docs/analysis/inventory/matt/external-to-questionnaire-md.md
- [x] docs/analysis/inventory/matt/external-to-spec-md.md

## Outputs produced
- docs/analysis/concepts/matt/typecheck.md — 1702 bytes
- docs/analysis/concepts/matt/tests.md — 1647 bytes
- docs/analysis/concepts/matt/format.md — 1509 bytes
- docs/analysis/concepts/matt/multi-commit-rebase.md — 1362 bytes
- docs/analysis/concepts/matt/non-invokable.md — 1339 bytes
- docs/analysis/concepts/matt/domain-md.md — 1298 bytes
- docs/analysis/concepts/matt/single-context.md — 1780 bytes
- docs/analysis/concepts/matt/multi-context.md — 1582 bytes
- docs/analysis/concepts/matt/jira.md — 916 bytes
- docs/analysis/concepts/matt/azure-devops.md — 952 bytes
- docs/analysis/concepts/matt/beads.md — 890 bytes
- docs/analysis/concepts/matt/config-is-death.md — 1349 bytes
- docs/analysis/concepts/matt/precondition.md — 1349 bytes
- docs/analysis/concepts/matt/anti-patterns.md — 1305 bytes
- docs/analysis/concepts/matt/driver.md — 1274 bytes
- docs/analysis/concepts/matt/system-boundaries.md — 1644 bytes
- docs/analysis/concepts/matt/refactor.md — 1469 bytes
- docs/analysis/concepts/matt/issue-graph.md — 1273 bytes
- docs/analysis/concepts/matt/build-step.md — 1253 bytes
- docs/analysis/concepts/matt/working-memory.md — 1352 bytes
- docs/analysis/concepts/matt/gate.md — 1289 bytes
- docs/analysis/concepts/matt/drill.md — 1321 bytes
- docs/analysis/concepts/matt/shared-stylesheet.md — 1419 bytes
- docs/analysis/concepts/matt/grounding-machinery.md — 1606 bytes
- docs/analysis/concepts/matt/knowledge-assessment.md — 1313 bytes
- docs/analysis/concepts/matt/the-to-questionnaire-skill.md — 972 bytes
- docs/analysis/concepts/matt/decision-record.md — 1382 bytes
- docs/analysis/concepts/matt/context-windows.md — 1343 bytes
- docs/analysis/concepts/matt/seams-before-prose.md — 1287 bytes
- docs/analysis/concepts/matt/multi-session.md — 1377 bytes
- docs/analysis/concepts/matt/_units/cc-matt-22.md — this report

## Scripts executed
- `bun scripts/synthesis/quote-check.ts docs/analysis/concepts/matt/typecheck.md docs/analysis/concepts/matt/tests.md docs/analysis/concepts/matt/format.md docs/analysis/concepts/matt/multi-commit-rebase.md docs/analysis/concepts/matt/non-invokable.md docs/analysis/concepts/matt/domain-md.md docs/analysis/concepts/matt/single-context.md docs/analysis/concepts/matt/multi-context.md docs/analysis/concepts/matt/jira.md docs/analysis/concepts/matt/azure-devops.md docs/analysis/concepts/matt/beads.md docs/analysis/concepts/matt/config-is-death.md docs/analysis/concepts/matt/precondition.md docs/analysis/concepts/matt/anti-patterns.md docs/analysis/concepts/matt/driver.md docs/analysis/concepts/matt/system-boundaries.md docs/analysis/concepts/matt/refactor.md docs/analysis/concepts/matt/issue-graph.md docs/analysis/concepts/matt/build-step.md docs/analysis/concepts/matt/working-memory.md docs/analysis/concepts/matt/gate.md docs/analysis/concepts/matt/drill.md docs/analysis/concepts/matt/shared-stylesheet.md docs/analysis/concepts/matt/grounding-machinery.md docs/analysis/concepts/matt/knowledge-assessment.md docs/analysis/concepts/matt/the-to-questionnaire-skill.md docs/analysis/concepts/matt/decision-record.md docs/analysis/concepts/matt/context-windows.md docs/analysis/concepts/matt/seams-before-prose.md docs/analysis/concepts/matt/multi-session.md` — exit 0 (30 PASS, 0 FAIL across 30 cards)

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied (package-prefixed before decision; canonical after)

## Cross-unit notes
- Unit cc-matt-22 bridges several core domains in the Matt package: automated verification gates in git rebasing and merge conflict resolution (`typecheck`, `tests`, `format`, `multi-commit rebase`), project configuration boundaries (`non-invokable`, `domain-md`, `single-context`, `multi-context`, `config-is-death`, `precondition`, alongside external tracker references `jira`, `azure-devops`, `beads`), TDD architectural constraints (`anti-patterns`, `driver`, `system-boundaries`, `refactor`, `issue-graph`, `build-step`), pedagogical workspace architecture in the teach skill (`working-memory`, `gate`, `drill`, `shared-stylesheet`, `grounding-machinery`, `knowledge-assessment`), async knowledge gathering (`the-to-questionnaire-skill`), and specification synthesis in the main build flow (`decision-record`, `context-windows`, `seams-before-prose`, `multi-session`).
- Non-lifecycle concepts: External tool references (`jira`, `azure-devops`, `beads`) and documentation headings (`the-to-questionnaire-skill`) were authored with `kind: name-only` per D-023.
- Unshipped feature requests: `knowledge-assessment` is documented as a standing feature request (issue #725) in `external/teach.md` and correctly recorded with `implementation status: not-implemented`.
- Verification and test seams: `seams-before-prose` enforces locking down architectural test boundaries prior to authoring specification prose, binding directly into downstream `tdd` and `code-review` expectations.

## Blocked or uncertain
none

## Time and size
Approximate source read: ~35,000 tokens across 12 source files and 12 inventory cards.
Approximate output written: ~12,000 tokens across 30 concept cards (40,313 bytes) and this unit report.
