---
unit: cc-rjm-109
phase: 2
package: rjm
session: 016
subagent_returned: complete
---

# Unit cc-rjm-109

## Files assigned
- [x] sources/rjm/.claude/skills/autoplan/SKILL.md
- [x] sources/rjm/.claude/skills/avoiding-manufactured-work/SKILL.md
- [x] sources/rjm/.claude/skills/buy-vs-build-framework/SKILL.md
- [x] sources/rjm/.claude/skills/buy-vs-build-framework/references/SKILL_SPEC.xml
- [x] sources/rjm/.claude/skills/retrospective/references/diagnosis-and-actions.md
- [x] sources/rjm/.github/scripts/invoke_pr_comment_processing.py
- [x] sources/rjm/scripts/maintenance/gc_worktrees.py
- [x] sources/rjm/scripts/validation/git_hook_policy.py
- [x] docs/analysis/inventory/rjm/claude-skills-autoplan-skill-md.md
- [x] docs/analysis/inventory/rjm/claude-skills-buy-vs-build-framework-references-skill-spec-xml.md
- [x] docs/analysis/inventory/rjm/claude-skills-buy-vs-build-framework-skill-md.md
- [x] docs/analysis/inventory/rjm/github-scripts-invoke-pr-comment-processing-py.md
- [x] docs/analysis/inventory/rjm/scripts-validation-git-hook-policy-py.md
- [x] docs/analysis/inventory/rjm/claude-skills-avoiding-manufactured-work-skill-md.md
- [x] docs/analysis/inventory/rjm/claude-skills-retrospective-references-diagnosis-and-actions-md.md
- [x] docs/analysis/inventory/rjm/scripts-maintenance-gc-worktrees-py.md

## Outputs produced
- docs/analysis/concepts/rjm/intent-family.md (1454 bytes)
- docs/analysis/concepts/rjm/session-protocol-ci-failure.md (1389 bytes)
- docs/analysis/concepts/rjm/pr-ops.md (1284 bytes)
- docs/analysis/concepts/rjm/size.md (1225 bytes)
- docs/analysis/concepts/rjm/trivial.md (1314 bytes)
- docs/analysis/concepts/rjm/standard.md (2175 bytes)
- docs/analysis/concepts/rjm/feature.md (1409 bytes)
- docs/analysis/concepts/rjm/phase-2-route.md (1329 bytes)
- docs/analysis/concepts/rjm/router-boundary-adr-078.md (1468 bytes)
- docs/analysis/concepts/rjm/phase-3-execute-with-defaults.md (1417 bytes)
- docs/analysis/concepts/rjm/run-the-checks.md (1303 bytes)
- docs/analysis/concepts/rjm/bias-to-action.md (1337 bytes)
- docs/analysis/concepts/rjm/mirrors-and-gates.md (1313 bytes)
- docs/analysis/concepts/rjm/mechanical.md (1370 bytes)
- docs/analysis/concepts/rjm/taste.md (1771 bytes)
- docs/analysis/concepts/rjm/sovereignty.md (1529 bytes)
- docs/analysis/concepts/rjm/confusion-protocol.md (1358 bytes)
- docs/analysis/concepts/rjm/phase-4-final-gate.md (1323 bytes)
- docs/analysis/concepts/rjm/routing-everything-to-the-orchestrator.md (1516 bytes)
- docs/analysis/concepts/rjm/asking-mechanical-questions.md (1338 bytes)
- docs/analysis/concepts/rjm/silent-sovereignty.md (1450 bytes)
- docs/analysis/concepts/rjm/narration-instead-of-a-gate.md (1319 bytes)
- docs/analysis/concepts/rjm/manufactured-work.md (1445 bytes)
- docs/analysis/concepts/rjm/reward-seeking-activity.md (1436 bytes)
- docs/analysis/concepts/rjm/reward-bias.md (1496 bytes)
- docs/analysis/concepts/rjm/disposition.md (1454 bytes)
- docs/analysis/concepts/rjm/keep.md (1834 bytes)
- docs/analysis/concepts/rjm/shrink.md (1328 bytes)
- docs/analysis/concepts/rjm/delete.md (1355 bytes)
- docs/analysis/concepts/rjm/consumer.md (1334 bytes)
- docs/analysis/concepts/rjm/_units/cc-rjm-109.md (this file)

## Scripts executed
- `bun scripts/synthesis/quote-check.ts docs/analysis/concepts/rjm/intent-family.md docs/analysis/concepts/rjm/session-protocol-ci-failure.md docs/analysis/concepts/rjm/pr-ops.md docs/analysis/concepts/rjm/size.md docs/analysis/concepts/rjm/trivial.md docs/analysis/concepts/rjm/standard.md docs/analysis/concepts/rjm/feature.md docs/analysis/concepts/rjm/phase-2-route.md docs/analysis/concepts/rjm/router-boundary-adr-078.md docs/analysis/concepts/rjm/phase-3-execute-with-defaults.md docs/analysis/concepts/rjm/run-the-checks.md docs/analysis/concepts/rjm/bias-to-action.md docs/analysis/concepts/rjm/mirrors-and-gates.md docs/analysis/concepts/rjm/mechanical.md docs/analysis/concepts/rjm/taste.md docs/analysis/concepts/rjm/sovereignty.md docs/analysis/concepts/rjm/confusion-protocol.md docs/analysis/concepts/rjm/phase-4-final-gate.md docs/analysis/concepts/rjm/routing-everything-to-the-orchestrator.md docs/analysis/concepts/rjm/asking-mechanical-questions.md docs/analysis/concepts/rjm/silent-sovereignty.md docs/analysis/concepts/rjm/narration-instead-of-a-gate.md docs/analysis/concepts/rjm/manufactured-work.md docs/analysis/concepts/rjm/reward-seeking-activity.md docs/analysis/concepts/rjm/reward-bias.md docs/analysis/concepts/rjm/disposition.md docs/analysis/concepts/rjm/keep.md docs/analysis/concepts/rjm/shrink.md docs/analysis/concepts/rjm/delete.md docs/analysis/concepts/rjm/consumer.md` (exit code 0, 30 PASS, 0 FAIL, 0 MISSING source across 30 cards)

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied (package-prefixed before decision; canonical after)

## Cross-unit notes
- Unit cc-rjm-109 completes 30 concept cards covering request routing, decision governance, execution defaults, anti-patterns, and manufactured work avoidance:
  1. Autoplan request classification and sizing (`intent-family`, `session-protocol-ci-failure`, `pr-ops`, `size`, `trivial`, `standard`, `feature`).
  2. Autoplan routing mechanics and boundaries (`phase-2-route`, `router-boundary-adr-078`).
  3. Execution defaults and decision classification hierarchy (`phase-3-execute-with-defaults`, `run-the-checks`, `bias-to-action`, `mirrors-and-gates`, `mechanical`, `taste`, `sovereignty`, `confusion-protocol`).
  4. Final gate summary structure and execution anti-patterns (`phase-4-final-gate`, `routing-everything-to-the-orchestrator`, `asking-mechanical-questions`, `silent-sovereignty`, `narration-instead-of-a-gate`).
  5. Avoiding manufactured work audit discipline and follow-up work triage (`manufactured-work`, `reward-seeking-activity`, `reward-bias`, `disposition`, `keep`, `shrink`, `delete`, `consumer`).
- All 36 occurrences recorded in `facts/cc-rjm-109.txt` are mapped in the respective Where used tables.
- Defect annotations from citing inventory cards were systematically propagated to `Implementation status` (`clean`, `defects: missing-path`, and `defects: missing-path, exit-code-mismatch, doc-drift, missing-doc, orphan, script-bug` for `standard`).
- All 30 cards pass byte-exact verification with `bun scripts/synthesis/quote-check.ts` (30 PASS, 0 FAIL, 0 MISSING source across 30 cards).

## Blocked or uncertain
none

## Time and size
Approximate tokens of source read: ~20,000 tokens across 8 source files and 8 inventory cards.
Approximate tokens of output written: ~12,500 tokens across 30 authored concept cards and 1 unit report.
