---
unit: cc-matt-9
phase: 2
package: matt
session: 015
subagent_returned: complete
---

# Unit cc-matt-9

## Files assigned
- [x] CHANGELOG.md
- [x] CLAUDE.md
- [x] CONTEXT.md
- [x] docs/engineering/code-review.md
- [x] docs/engineering/domain-modeling.md
- [x] docs/engineering/grill-with-docs.md
- [x] docs/engineering/implement.md
- [x] docs/engineering/research.md
- [x] docs/engineering/to-spec.md
- [x] docs/engineering/triage.md
- [x] docs/engineering/wayfinder.md
- [x] docs/productivity/to-questionnaire.md
- [x] docs/productivity/writing-for-agents.md
- [x] external/ask-matt.md
- [x] external/code-review.md
- [x] external/implement.md
- [x] external/prototype.md
- [x] external/research.md
- [x] external/setup-matt-pocock-skills.md
- [x] external/tdd.md
- [x] external/to-questionnaire.md
- [x] external/to-spec.md
- [x] external/triage.md
- [x] external/wayfinder.md
- [x] external/wizard.md
- [x] external/writing-for-agents.md
- [x] skills/deprecated/README.md
- [x] skills/engineering/setup-matt-pocock-skills/SKILL.md
- [x] skills/engineering/setup-matt-pocock-skills/issue-tracker-github.md
- [x] skills/engineering/setup-matt-pocock-skills/issue-tracker-local.md
- [x] skills/engineering/setup-matt-pocock-skills/triage-labels.md
- [x] skills/engineering/tdd/tests.md
- [x] skills/engineering/triage/SKILL.md
- [x] skills/engineering/wayfinder/SKILL.md

## Outputs produced
- docs/analysis/concepts/matt/afk.md (2915 bytes)
- docs/analysis/concepts/matt/tautological-tests.md (1366 bytes)
- docs/analysis/concepts/matt/deep-module-vocabulary.md (1382 bytes)
- docs/analysis/concepts/matt/commands-skills.md (938 bytes)
- docs/analysis/concepts/matt/misc.md (884 bytes)
- docs/analysis/concepts/matt/in-progress.md (1103 bytes)
- docs/analysis/concepts/matt/deprecated.md (909 bytes)
- docs/analysis/concepts/matt/docs-tree.md (1014 bytes)
- docs/analysis/concepts/matt/router.md (1429 bytes)
- docs/analysis/concepts/matt/symlink.md (1024 bytes)
- docs/analysis/concepts/matt/matt-pocock-skills.md (892 bytes)
- docs/analysis/concepts/matt/slash-commands.md (1208 bytes)
- docs/analysis/concepts/matt/buckets.md (1210 bytes)
- docs/analysis/concepts/matt/language.md (794 bytes)
- docs/analysis/concepts/matt/github-issues.md (1538 bytes)
- docs/analysis/concepts/matt/linear.md (1371 bytes)
- docs/analysis/concepts/matt/scratch.md (1740 bytes)
- docs/analysis/concepts/matt/backlog-manager.md (769 bytes)
- docs/analysis/concepts/matt/backlog-backend.md (813 bytes)
- docs/analysis/concepts/matt/issue-host.md (778 bytes)
- docs/analysis/concepts/matt/issue.md (1238 bytes)
- docs/analysis/concepts/matt/bug.md (1453 bytes)
- docs/analysis/concepts/matt/slice.md (1121 bytes)
- docs/analysis/concepts/matt/ticket.md (3235 bytes)
- docs/analysis/concepts/matt/wayfinder-map.md (1818 bytes)
- docs/analysis/concepts/matt/decision.md (1393 bytes)
- docs/analysis/concepts/matt/triage-role.md (1350 bytes)
- docs/analysis/concepts/matt/needs-triage.md (1686 bytes)
- docs/analysis/concepts/matt/ready-for-afk.md (1297 bytes)
- docs/analysis/concepts/matt/triage-labels-md.md (1626 bytes)
- docs/analysis/concepts/matt/_units/cc-matt-9.md (5005 bytes)

## Scripts executed
- scripts/synthesis/quote-check.ts, bun scripts/synthesis/quote-check.ts <30 cards>, exit code 0
- scripts/synthesis/coverage.ts, bun scripts/synthesis/coverage.ts, exit code 0

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied (package-prefixed before decision; canonical after)

## Cross-unit notes
- Disambiguation in CONTEXT.md: A major theme of this unit is ubiquitous language formalization in CONTEXT.md. Terms like `Issue tracker` supersede `backlog manager`, `backlog backend`, and `issue host`. `Issue` is designated the canonical term for units of work, while `ticket` is explicitly discouraged except when quoting external tools or when qualified as `Decision ticket` in `wayfinder`.
- `ready-for-afk` is used in CONTEXT.md as an illustrative example of a triage role, whereas `skills/engineering/triage/SKILL.md` and `triage-labels.md` standardize on `ready-for-agent`.
- Several concepts represent taxonomy labels, headings, or file/directory identifiers rather than operational lifecycle concepts (`Commands / Skills`, `misc/`, `in-progress/`, `deprecated/`, `docs tree`, `symlink`, `Matt Pocock Skills`, `Language`, `backlog manager`, `backlog backend`, `issue host`, and `triage-labels.md`). Per D-023 and the dispatch requirements, these were classified as `kind: name-only`.

## Blocked or uncertain
none

## Time and size
Approximate tokens of source read: ~85,000 tokens across 34 source files and citing inventory cards; approximate tokens of output written: ~13,000 tokens across 30 concept cards and this unit report.
