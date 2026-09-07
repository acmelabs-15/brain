---
unit: cc-matt-21
phase: 2
package: matt
session: 015
subagent_returned: complete
---

# Unit cc-matt-21

## Files assigned
- [x] sources/matt-external/implement.md
- [x] sources/matt-external/improve-codebase-architecture.md
- [x] sources/matt-external/prototype.md
- [x] sources/matt-external/research.md
- [x] sources/matt-external/resolving-merge-conflicts.md
- [x] sources/matt/scripts/link-skills.sh
- [x] sources/matt/skills/engineering/domain-modeling/ADR-FORMAT.md
- [x] sources/matt/skills/engineering/domain-modeling/SKILL.md
- [x] sources/matt/skills/engineering/prototype/LOGIC.md
- [x] sources/matt/skills/engineering/resolving-merge-conflicts/SKILL.md
- [x] sources/matt/skills/engineering/tdd/SKILL.md
- [x] sources/matt/skills/productivity/README.md
- [x] docs/analysis/inventory/matt/external-implement-md.md
- [x] docs/analysis/inventory/matt/external-improve-codebase-architecture-md.md
- [x] docs/analysis/inventory/matt/external-prototype-md.md
- [x] docs/analysis/inventory/matt/external-research-md.md
- [x] docs/analysis/inventory/matt/external-resolving-merge-conflicts-md.md
- [x] docs/analysis/inventory/matt/scripts-link-skills-sh.md
- [x] docs/analysis/inventory/matt/skills-engineering-domain-modeling-adr-format-md.md
- [x] docs/analysis/inventory/matt/skills-engineering-domain-modeling-skill-md.md
- [x] docs/analysis/inventory/matt/skills-engineering-prototype-logic-md.md
- [x] docs/analysis/inventory/matt/skills-engineering-resolving-merge-conflicts-skill-md.md
- [x] docs/analysis/inventory/matt/skills-engineering-tdd-skill-md.md
- [x] docs/analysis/inventory/matt/skills-productivity-readme-md.md

## Outputs produced
- docs/analysis/concepts/matt/pre-agreed-seams.md (2080 bytes)
- docs/analysis/concepts/matt/its-working-if.md (884 bytes)
- docs/analysis/concepts/matt/routine-upkeep.md (1487 bytes)
- docs/analysis/concepts/matt/before-a-big-build.md (1609 bytes)
- docs/analysis/concepts/matt/brownfield-audit.md (1942 bytes)
- docs/analysis/concepts/matt/legacy-test-work.md (1533 bytes)
- docs/analysis/concepts/matt/subagent-type-explore.md (1559 bytes)
- docs/analysis/concepts/matt/typescript-md.md (1322 bytes)
- docs/analysis/concepts/matt/the-prototype-skill.md (1918 bytes)
- docs/analysis/concepts/matt/two-branches.md (1436 bytes)
- docs/analysis/concepts/matt/free-play-buttons.md (1662 bytes)
- docs/analysis/concepts/matt/pure-module.md (1473 bytes)
- docs/analysis/concepts/matt/variant.md (1459 bytes)
- docs/analysis/concepts/matt/the-prototype-is-a-primary-source.md (2039 bytes)
- docs/analysis/concepts/matt/implementation-issue.md (1595 bytes)
- docs/analysis/concepts/matt/terminal-app.md (1460 bytes)
- docs/analysis/concepts/matt/the-research-skill.md (2067 bytes)
- docs/analysis/concepts/matt/general-purpose.md (1279 bytes)
- docs/analysis/concepts/matt/rebase.md (1202 bytes)
- docs/analysis/concepts/matt/original-issue.md (1856 bytes)
- docs/analysis/concepts/matt/trade-off.md (2027 bytes)
- docs/analysis/concepts/matt/abort.md (1289 bytes)
- docs/analysis/concepts/matt/conflict-markers.md (1155 bytes)
- docs/analysis/concepts/matt/ours.md (1346 bytes)
- docs/analysis/concepts/matt/theirs.md (1357 bytes)
- docs/analysis/concepts/matt/claude-code.md (1387 bytes)
- docs/analysis/concepts/matt/feedback-loops.md (1696 bytes)
- docs/analysis/concepts/matt/parallel-tasks.md (1251 bytes)
- docs/analysis/concepts/matt/parallel-worktrees.md (1895 bytes)
- docs/analysis/concepts/matt/diff-hunks.md (1168 bytes)
- docs/analysis/concepts/matt/_units/cc-matt-21.md (this report)

## Scripts executed
- `bun scripts/synthesis/quote-check.ts docs/analysis/concepts/matt/pre-agreed-seams.md docs/analysis/concepts/matt/its-working-if.md docs/analysis/concepts/matt/routine-upkeep.md docs/analysis/concepts/matt/before-a-big-build.md docs/analysis/concepts/matt/brownfield-audit.md docs/analysis/concepts/matt/legacy-test-work.md docs/analysis/concepts/matt/subagent-type-explore.md docs/analysis/concepts/matt/typescript-md.md docs/analysis/concepts/matt/the-prototype-skill.md docs/analysis/concepts/matt/two-branches.md docs/analysis/concepts/matt/free-play-buttons.md docs/analysis/concepts/matt/pure-module.md docs/analysis/concepts/matt/variant.md docs/analysis/concepts/matt/the-prototype-is-a-primary-source.md docs/analysis/concepts/matt/implementation-issue.md docs/analysis/concepts/matt/terminal-app.md docs/analysis/concepts/matt/the-research-skill.md docs/analysis/concepts/matt/general-purpose.md docs/analysis/concepts/matt/rebase.md docs/analysis/concepts/matt/original-issue.md docs/analysis/concepts/matt/trade-off.md docs/analysis/concepts/matt/abort.md docs/analysis/concepts/matt/conflict-markers.md docs/analysis/concepts/matt/ours.md docs/analysis/concepts/matt/theirs.md docs/analysis/concepts/matt/claude-code.md docs/analysis/concepts/matt/feedback-loops.md docs/analysis/concepts/matt/parallel-tasks.md docs/analysis/concepts/matt/parallel-worktrees.md docs/analysis/concepts/matt/diff-hunks.md` — exit 0 (49 PASS, 0 FAIL across 30 cards)

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied (package-prefixed before decision; canonical after)

## Cross-unit notes
- TDD test boundaries: `pre-agreed-seams` asserts the normative rule in `tdd` that tests must only be written at boundaries explicitly confirmed with the user, directly aligning with seam principles across `implement` and `improve-codebase-architecture`.
- Codebase architecture upkeep modes: `routine-upkeep`, `before-a-big-build`, `brownfield-audit`, and `legacy-test-work` capture the four strategic triggers for invoking `improve-codebase-architecture`.
- Prototyping lifecycle: `the-prototype-skill`, `two-branches`, `free-play-buttons`, `pure-module`, `variant`, `the-prototype-is-a-primary-source`, `implementation-issue`, and `terminal-app` establish the shaping pattern of building throwaway HTML/pure-logic demos to settle open UI or state-machine questions before writing production code.
- Research legwork: `the-research-skill` isolates external reading legwork into background subagents that read primary sources and emit cited Markdown notes into the repo.
- Git conflict resolution discipline: `resolving-merge-conflicts`, `original-issue`, `trade-off`, `abort`, `conflict-markers`, `ours`, `theirs`, `feedback-loops`, `parallel-tasks`, `parallel-worktrees`, and `diff-hunks` form a coherent discipline that rejects mechanical diff-splicing or `--ours`/`--theirs`/`--abort` in favor of tracing original intent to primary sources and verifying passes with automated checks.
- Non-lifecycle concepts: External CLI flags, identifiers, and configuration labels (`its-working-if`, `subagent_type=Explore`, `TYPESCRIPT.md`, `terminal-app`, `general-purpose`, `rebase`, `--abort`, `conflict markers`, `ours`, `theirs`, `Claude Code`, `parallel tasks`, `diff hunks`) were classified with `kind: name-only` per D-023.

## Blocked or uncertain
none

## Time and size
Approximate source read: ~45,000 tokens across 12 source files and 12 inventory cards.
Approximate output written: ~14,000 tokens across 30 concept cards (46,388 bytes) and 1 unit report.
