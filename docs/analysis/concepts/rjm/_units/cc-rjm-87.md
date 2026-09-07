---
unit: cc-rjm-87
phase: 2
package: rjm
session: 016
subagent_returned: complete
---

# Unit cc-rjm-87

## Files assigned
- [x] sources/rjm/.claude/commands/ship.md
- [x] sources/rjm/.claude/commands/spec.md
- [x] sources/rjm/.claude/commands/sync.md
- [x] sources/rjm/.claude/commands/test.md
- [x] sources/rjm/.claude/skills/prompt-engineer/SKILL.md
- [x] sources/rjm/.claude/skills/prompt-engineer/references/workflow.md
- [x] sources/rjm/.claude/skills/review/SKILL.md
- [x] sources/rjm/.claude/skills/review/scripts/validate_review_marker.py
- [x] sources/rjm/.claude/skills/skillforge/TRANSFORMATION_NOTES.md
- [x] sources/rjm/docs/workflow-commands.md
- [x] sources/rjm/scripts/sync/__init__.py
- [x] sources/rjm/scripts/sync/detect_spec_drift.py
- [x] sources/rjm/scripts/validation/validate_review_marker.py
- [x] docs/analysis/inventory/rjm/claude-commands-ship-md.md
- [x] docs/analysis/inventory/rjm/claude-commands-spec-md.md
- [x] docs/analysis/inventory/rjm/claude-commands-sync-md.md
- [x] docs/analysis/inventory/rjm/claude-commands-test-md.md
- [x] docs/analysis/inventory/rjm/claude-skills-prompt-engineer-references-workflow-md.md
- [x] docs/analysis/inventory/rjm/claude-skills-prompt-engineer-skill-md.md
- [x] docs/analysis/inventory/rjm/claude-skills-review-scripts-validate-review-marker-py.md
- [x] docs/analysis/inventory/rjm/claude-skills-review-skill-md.md
- [x] docs/analysis/inventory/rjm/claude-skills-skillforge-transformation-notes-md.md
- [x] docs/analysis/inventory/rjm/docs-workflow-commands-md.md
- [x] docs/analysis/inventory/rjm/scripts-sync---init---py.md
- [x] docs/analysis/inventory/rjm/scripts-sync-detect-spec-drift-py.md
- [x] docs/analysis/inventory/rjm/scripts-validation-validate-review-marker-py.md

## Outputs produced
- docs/analysis/concepts/rjm/mode-contributor.md (1609 bytes)
- docs/analysis/concepts/rjm/mode-owner.md (1450 bytes)
- docs/analysis/concepts/rjm/pre-flight-checks.md (1609 bytes)
- docs/analysis/concepts/rjm/pipeline-health.md (1475 bytes)
- docs/analysis/concepts/rjm/security-posture.md (1411 bytes)
- docs/analysis/concepts/rjm/reviewed-on-this-sha.md (1507 bytes)
- docs/analysis/concepts/rjm/marker-commit.md (1935 bytes)
- docs/analysis/concepts/rjm/reviewed-by.md (1912 bytes)
- docs/analysis/concepts/rjm/tests-passing.md (1294 bytes)
- docs/analysis/concepts/rjm/result-validated.md (1270 bytes)
- docs/analysis/concepts/rjm/provisionaltier.md (1389 bytes)
- docs/analysis/concepts/rjm/topic-extraction.md (1377 bytes)
- docs/analysis/concepts/rjm/entity-adjudication.md (1386 bytes)
- docs/analysis/concepts/rjm/operating-model-drift.md (1381 bytes)
- docs/analysis/concepts/rjm/buy-vs-build-decision.md (1498 bytes)
- docs/analysis/concepts/rjm/spec-to-code-drift.md (1513 bytes)
- docs/analysis/concepts/rjm/reverse-path.md (1430 bytes)
- docs/analysis/concepts/rjm/specification-tier.md (1559 bytes)
- docs/analysis/concepts/rjm/drift-detector.md (1351 bytes)
- docs/analysis/concepts/rjm/triage.md (1674 bytes)
- docs/analysis/concepts/rjm/code-moved.md (1319 bytes)
- docs/analysis/concepts/rjm/code-deleted.md (1432 bytes)
- docs/analysis/concepts/rjm/intentional-forward-reference.md (1468 bytes)
- docs/analysis/concepts/rjm/unsafe-reference.md (1451 bytes)
- docs/analysis/concepts/rjm/spec-patches.md (1358 bytes)
- docs/analysis/concepts/rjm/sync-log.md (1586 bytes)
- docs/analysis/concepts/rjm/classify-pr-type.md (1278 bytes)
- docs/analysis/concepts/rjm/functional-testing.md (1357 bytes)
- docs/analysis/concepts/rjm/unit-coverage.md (1274 bytes)
- docs/analysis/concepts/rjm/integration-coverage.md (1314 bytes)
- docs/analysis/concepts/rjm/_units/cc-rjm-87.md (this file)

## Scripts executed
- `bun scripts/synthesis/quote-check.ts docs/analysis/concepts/rjm/mode-contributor.md docs/analysis/concepts/rjm/mode-owner.md docs/analysis/concepts/rjm/pre-flight-checks.md docs/analysis/concepts/rjm/pipeline-health.md docs/analysis/concepts/rjm/security-posture.md docs/analysis/concepts/rjm/reviewed-on-this-sha.md docs/analysis/concepts/rjm/marker-commit.md docs/analysis/concepts/rjm/reviewed-by.md docs/analysis/concepts/rjm/tests-passing.md docs/analysis/concepts/rjm/result-validated.md docs/analysis/concepts/rjm/provisionaltier.md docs/analysis/concepts/rjm/topic-extraction.md docs/analysis/concepts/rjm/entity-adjudication.md docs/analysis/concepts/rjm/operating-model-drift.md docs/analysis/concepts/rjm/buy-vs-build-decision.md docs/analysis/concepts/rjm/spec-to-code-drift.md docs/analysis/concepts/rjm/reverse-path.md docs/analysis/concepts/rjm/specification-tier.md docs/analysis/concepts/rjm/drift-detector.md docs/analysis/concepts/rjm/triage.md docs/analysis/concepts/rjm/code-moved.md docs/analysis/concepts/rjm/code-deleted.md docs/analysis/concepts/rjm/intentional-forward-reference.md docs/analysis/concepts/rjm/unsafe-reference.md docs/analysis/concepts/rjm/spec-patches.md docs/analysis/concepts/rjm/sync-log.md docs/analysis/concepts/rjm/classify-pr-type.md docs/analysis/concepts/rjm/functional-testing.md docs/analysis/concepts/rjm/unit-coverage.md docs/analysis/concepts/rjm/integration-coverage.md` (exit code 0, 30 PASS, 0 FAIL)

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied (package-prefixed before decision; canonical after)

## Cross-unit notes
- Unit cc-rjm-87 covers 30 concept cards spanning four major lifecycle phases and commands in rjm:
  1. Shipping release gates and protocol (`/ship`): `mode=contributor`, `mode=owner`, `Pre-flight Checks`, `Pipeline health`, `Security posture`, `Reviewed on this SHA`, `marker commit`, `Reviewed-By`, `Tests passing`, `RESULT: VALIDATED`. Enforces pre-flight quality verification, cryptographic review attestation via SHA-bound marker commits, and ownership boundaries between branch authors and external contributors.
  2. Specification discovery and governance (`/spec`): `ProvisionalTier`, `topic extraction`, `entity adjudication`, `Operating-model drift`, `Buy-vs-build decision`. Governs automated tier classification, 5-stage topic normalization, entity blast-radius classification, Tier 5 operating-model alignment (Check 9e), and mandatory build/buy analysis.
  3. Reverse-path drift synchronization (`/sync`): `Spec to Code drift`, `reverse path`, `specification tier`, `drift detector`, `Triage`, `Code moved`, `Code deleted`, `Intentional forward reference`, `Unsafe reference`, `spec patches`, `Sync log`. Solves architectural divergence when hand-editing code by providing automated drift scanning across the specification tier (REQ/DESIGN/TASK) and four-way drift triage.
  4. Test classification and functional coverage (`/test`): `Classify PR Type`, `Functional Testing`, `Unit coverage`, `Integration coverage`. Enforces PR-type selective gate execution, skeptical QA subagent audit, and strict verification across isolated unit methods and cross-module contracts.
- All 41 occurrences recorded across 13 source files and 13 inventory cards in `facts/cc-rjm-87.txt` are mapped as rows in the respective Where used tables.
- All 30 cards pass byte-exact quotation verification with `bun scripts/synthesis/quote-check.ts` (30 PASS, 0 FAIL).

## Blocked or uncertain
none

## Time and size
Approximate tokens of source read: ~30,000 tokens across 13 source files and 13 inventory cards.
Approximate tokens of output written: ~12,000 tokens across 30 concept cards and 1 unit report.
