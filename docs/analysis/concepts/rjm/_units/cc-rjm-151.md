---
unit: cc-rjm-151
phase: 2
package: rjm
session: 017
subagent_returned: complete
---

# Unit cc-rjm-151

## Files assigned
- [x] sources/rjm/.claude/skills/merge-resolver/SKILL.md
- [x] sources/rjm/.claude/skills/merge-resolver/scripts/resolve_pr_conflicts.py
- [x] sources/rjm/.claude/skills/merge-resolver/scripts/verify_no_conflict_markers.py
- [x] sources/rjm/.claude/skills/reflect/references/integration-and-design.md
- [x] sources/rjm/README.md
- [x] sources/rjm/templates/agents/merge-resolver.shared.md

## Outputs produced
- docs/analysis/concepts/rjm/get-safe-worktree-path.md (1132 bytes)
- docs/analysis/concepts/rjm/is-github-runner.md (1067 bytes)
- docs/analysis/concepts/rjm/is-auto-resolvable.md (1093 bytes)
- docs/analysis/concepts/rjm/is-plugin-manifest.md (1093 bytes)
- docs/analysis/concepts/rjm/resolve-plugin-manifest-conflict.md (1201 bytes)
- docs/analysis/concepts/rjm/resolve-conflicts-runner.md (1105 bytes)
- docs/analysis/concepts/rjm/resolve-conflicts-worktree.md (1117 bytes)
- docs/analysis/concepts/rjm/resolve-pr-conflicts.md (1081 bytes)
- docs/analysis/concepts/rjm/merge-head.md (908 bytes)
- docs/analysis/concepts/rjm/list-unmerged-files.md (1115 bytes)
- docs/analysis/concepts/rjm/find-leftover-markers.md (1129 bytes)
- docs/analysis/concepts/rjm/verify.md (1172 bytes)
- docs/analysis/concepts/rjm/git-advanced-workflows.md (1482 bytes)
- docs/analysis/concepts/rjm/phase-0-execution-capability-precondition.md (1159 bytes)
- docs/analysis/concepts/rjm/completion-rule.md (1239 bytes)
- docs/analysis/concepts/rjm/phase-1-context-gathering.md (1204 bytes)
- docs/analysis/concepts/rjm/phase-2-analysis-and-resolution.md (1088 bytes)
- docs/analysis/concepts/rjm/phase-3-validation.md (1021 bytes)
- docs/analysis/concepts/rjm/intent-classification.md (1022 bytes)
- docs/analysis/concepts/rjm/strict-priority-hierarchy.md (1496 bytes)
- docs/analysis/concepts/rjm/primary-sort-key.md (1451 bytes)
- docs/analysis/concepts/rjm/session-file-rules.md (1006 bytes)
- docs/analysis/concepts/rjm/append-only-evidence-artifact.md (1882 bytes)
- docs/analysis/concepts/rjm/add-add-caveat.md (1370 bytes)
- docs/analysis/concepts/rjm/plugin-manifests.md (1010 bytes)
- docs/analysis/concepts/rjm/version-field-gate.md (1074 bytes)
- docs/analysis/concepts/rjm/completion-checklist.md (1019 bytes)
- docs/analysis/concepts/rjm/session-protocol-validation-details.md (1141 bytes)
- docs/analysis/concepts/rjm/session-end-checklist.md (1207 bytes)
- docs/analysis/concepts/rjm/common-failures.md (989 bytes)
- docs/analysis/concepts/rjm/_units/cc-rjm-151.md (this file)

## Scripts executed
- `bun scripts/synthesis/quote-check.ts <30 cards>` (exit code 0, 30 PASS, 0 FAIL across 30 cards)
- `bun scripts/synthesis/memo.ts stamp-unit cc-rjm-151 --model "Gemini 3.8 Flash" --effort high` (exit code 0, 30 cards stamped)

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied (package-prefixed before decision; canonical after)

## Cross-unit notes
- Unit cc-rjm-151 covers 30 concepts and their cited occurrences from package rjm.
- All occurrences from facts/cc-rjm-151.txt are represented in the cards' Where used tables.
- Defect annotations from inventory cards were propagated to Implementation status.
- All 30 cards pass byte-exact verification with quote-check.ts (30 PASS, 0 FAIL) and are stamped with memo.ts stamp-unit.

## Blocked or uncertain
none

## Time and size
Approximate tokens of source read: ~18,000 tokens across assigned files.
Approximate tokens of output written: ~16,000 tokens across 30 concept cards and 1 unit report.
