---
unit: cc-rjm-150
phase: 2
package: rjm
session: 017
subagent_returned: complete
---

# Unit cc-rjm-150

## Files assigned
- [x] sources/rjm/.claude/skills/golden-principles/SKILL.md
- [x] sources/rjm/.claude/skills/merge-resolver/SKILL.md
- [x] sources/rjm/.claude/skills/merge-resolver/references/strategies.md
- [x] sources/rjm/.claude/skills/merge-resolver/scripts/resolve_pr_conflicts.py
- [x] sources/rjm/.claude/skills/review/SKILL.md
- [x] sources/rjm/.claude/skills/review/references/architect.md
- [x] sources/rjm/.claude/skills/taste-lints/SKILL.md
- [x] sources/rjm/scripts/ci/adr015_workflow_retention.py
- [x] sources/rjm/scripts/github_core/api.py
- [x] sources/rjm/scripts/validation/check_build_gates.py

## Outputs produced
- docs/analysis/concepts/rjm/gp-008.md (1201 bytes)
- docs/analysis/concepts/rjm/openai-harness-engineering.md (1128 bytes)
- docs/analysis/concepts/rjm/recurring-cleanup-process.md (1078 bytes)
- docs/analysis/concepts/rjm/garbage-collection.md (1076 bytes)
- docs/analysis/concepts/rjm/taste-lints.md (1418 bytes)
- docs/analysis/concepts/rjm/sergeant-pattern.md (1178 bytes)
- docs/analysis/concepts/rjm/resolution-strategies.md (1056 bytes)
- docs/analysis/concepts/rjm/additive-changes.md (1027 bytes)
- docs/analysis/concepts/rjm/moved-or-renamed-code.md (1059 bytes)
- docs/analysis/concepts/rjm/deleted-code.md (1005 bytes)
- docs/analysis/concepts/rjm/conflicting-logic.md (1035 bytes)
- docs/analysis/concepts/rjm/resolution-priority.md (1049 bytes)
- docs/analysis/concepts/rjm/bugfix.md (1068 bytes)
- docs/analysis/concepts/rjm/feature-refactor.md (1108 bytes)
- docs/analysis/concepts/rjm/style.md (1064 bytes)
- docs/analysis/concepts/rjm/style-formatting-conflicts.md (1089 bytes)
- docs/analysis/concepts/rjm/lock-file-conflicts.md (1047 bytes)
- docs/analysis/concepts/rjm/configuration-file-conflicts.md (1103 bytes)
- docs/analysis/concepts/rjm/database-migration-conflicts.md (1103 bytes)
- docs/analysis/concepts/rjm/numbered-documentation-conflicts-adr-rfc.md (1190 bytes)
- docs/analysis/concepts/rjm/architecture-decision-records.md (1299 bytes)
- docs/analysis/concepts/rjm/rfc.md (882 bytes)
- docs/analysis/concepts/rjm/add-add-conflict.md (1102 bytes)
- docs/analysis/concepts/rjm/template-generated-file-conflicts.md (1133 bytes)
- docs/analysis/concepts/rjm/rebase-add-add-conflicts.md (1079 bytes)
- docs/analysis/concepts/rjm/append-only-evidence-artifacts-add-add.md (1173 bytes)
- docs/analysis/concepts/rjm/invoke-prmaintenance.md (1144 bytes)
- docs/analysis/concepts/rjm/adr-015.md (1411 bytes)
- docs/analysis/concepts/rjm/auto-resolvable-patterns.md (1065 bytes)
- docs/analysis/concepts/rjm/is-safe-branch-name.md (1101 bytes)
- docs/analysis/concepts/rjm/_units/cc-rjm-150.md (this file)

## Scripts executed
- `bun scripts/synthesis/quote-check.ts <30 cards>` (exit code 0, 30 PASS, 0 FAIL across 30 cards)
- `bun scripts/synthesis/memo.ts stamp-unit cc-rjm-150 --model "Gemini 3.8 Flash" --effort high` (exit code 0, 30 cards stamped)

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied (package-prefixed before decision; canonical after)

## Cross-unit notes
- Unit cc-rjm-150 covers 30 concepts and their cited occurrences from package rjm.
- All occurrences from facts/cc-rjm-150.txt are represented in the cards' Where used tables.
- Defect annotations from inventory cards were propagated to Implementation status.
- All 30 cards pass byte-exact verification with quote-check.ts (30 PASS, 0 FAIL) and are stamped with memo.ts stamp-unit.

## Blocked or uncertain
none

## Time and size
Approximate tokens of source read: ~18,000 tokens across assigned files.
Approximate tokens of output written: ~16,000 tokens across 30 concept cards and 1 unit report.
