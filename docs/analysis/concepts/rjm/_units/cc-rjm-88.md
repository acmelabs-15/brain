---
unit: cc-rjm-88
phase: 2
package: rjm
session: 016
subagent_returned: complete
---

# Unit cc-rjm-88

## Files assigned
- [x] sources/rjm/.claude/commands/test.md
- [x] sources/rjm/.claude/commands/validate-pr-description.md
- [x] sources/rjm/.claude/rules/session-logs.md
- [x] sources/rjm/.claude/skills/adr-generator/SKILL.md
- [x] sources/rjm/.claude/skills/adr-generator/references/ad-quality-frameworks.md
- [x] sources/rjm/.claude/skills/review/references/qa.md
- [x] docs/analysis/inventory/rjm/claude-commands-test-md.md
- [x] docs/analysis/inventory/rjm/claude-skills-review-references-qa-md.md
- [x] docs/analysis/inventory/rjm/claude-commands-validate-pr-description-md.md
- [x] docs/analysis/inventory/rjm/claude-rules-session-logs-md.md
- [x] docs/analysis/inventory/rjm/claude-skills-adr-generator-references-ad-quality-frameworks-md.md
- [x] docs/analysis/inventory/rjm/claude-skills-adr-generator-skill-md.md

## Outputs produced
- docs/analysis/concepts/rjm/acceptance-coverage.md (1519 bytes)
- docs/analysis/concepts/rjm/edge-cases.md (1577 bytes)
- docs/analysis/concepts/rjm/error-paths.md (1466 bytes)
- docs/analysis/concepts/rjm/regression-risk.md (1648 bytes)
- docs/analysis/concepts/rjm/non-functional-testing.md (1508 bytes)
- docs/analysis/concepts/rjm/security-testing.md (1493 bytes)
- docs/analysis/concepts/rjm/devops-testing.md (1497 bytes)
- docs/analysis/concepts/rjm/developer-experience.md (1619 bytes)
- docs/analysis/concepts/rjm/observability-and-monitoring.md (1560 bytes)
- docs/analysis/concepts/rjm/testability-is-design-feedback.md (1549 bytes)
- docs/analysis/concepts/rjm/tests-are-proof.md (1353 bytes)
- docs/analysis/concepts/rjm/hypothesis-driven-debugging.md (1447 bytes)
- docs/analysis/concepts/rjm/overall-verdict.md (1446 bytes)
- docs/analysis/concepts/rjm/conventional-commit-title.md (1442 bytes)
- docs/analysis/concepts/rjm/issue-linking-keywords.md (1602 bytes)
- docs/analysis/concepts/rjm/pr-template-compliance.md (1392 bytes)
- docs/analysis/concepts/rjm/validation-script.md (1466 bytes)
- docs/analysis/concepts/rjm/session-log-mechanics.md (1659 bytes)
- docs/analysis/concepts/rjm/do-not-create-a-new-session-log.md (1450 bytes)
- docs/analysis/concepts/rjm/validate-if-present-gate.md (1540 bytes)
- docs/analysis/concepts/rjm/endingcommit.md (1396 bytes)
- docs/analysis/concepts/rjm/episode-extractor.md (1367 bytes)
- docs/analysis/concepts/rjm/episode-store.md (1342 bytes)
- docs/analysis/concepts/rjm/asr-test.md (1964 bytes)
- docs/analysis/concepts/rjm/business-value-risk.md (1433 bytes)
- docs/analysis/concepts/rjm/key-stakeholder-concern.md (1489 bytes)
- docs/analysis/concepts/rjm/runtime-qos.md (1471 bytes)
- docs/analysis/concepts/rjm/external-dependencies.md (1609 bytes)
- docs/analysis/concepts/rjm/cross-cutting.md (1500 bytes)
- docs/analysis/concepts/rjm/foak.md (1466 bytes)
- docs/analysis/concepts/rjm/_units/cc-rjm-88.md (this file)

## Scripts executed
- `bun scripts/synthesis/quote-check.ts docs/analysis/concepts/rjm/acceptance-coverage.md docs/analysis/concepts/rjm/edge-cases.md docs/analysis/concepts/rjm/error-paths.md docs/analysis/concepts/rjm/regression-risk.md docs/analysis/concepts/rjm/non-functional-testing.md docs/analysis/concepts/rjm/security-testing.md docs/analysis/concepts/rjm/devops-testing.md docs/analysis/concepts/rjm/developer-experience.md docs/analysis/concepts/rjm/observability-and-monitoring.md docs/analysis/concepts/rjm/testability-is-design-feedback.md docs/analysis/concepts/rjm/tests-are-proof.md docs/analysis/concepts/rjm/hypothesis-driven-debugging.md docs/analysis/concepts/rjm/overall-verdict.md docs/analysis/concepts/rjm/conventional-commit-title.md docs/analysis/concepts/rjm/issue-linking-keywords.md docs/analysis/concepts/rjm/pr-template-compliance.md docs/analysis/concepts/rjm/validation-script.md docs/analysis/concepts/rjm/session-log-mechanics.md docs/analysis/concepts/rjm/do-not-create-a-new-session-log.md docs/analysis/concepts/rjm/validate-if-present-gate.md docs/analysis/concepts/rjm/endingcommit.md docs/analysis/concepts/rjm/episode-extractor.md docs/analysis/concepts/rjm/episode-store.md docs/analysis/concepts/rjm/asr-test.md docs/analysis/concepts/rjm/business-value-risk.md docs/analysis/concepts/rjm/key-stakeholder-concern.md docs/analysis/concepts/rjm/runtime-qos.md docs/analysis/concepts/rjm/external-dependencies.md docs/analysis/concepts/rjm/cross-cutting.md docs/analysis/concepts/rjm/foak.md` (exit code 0, 32 PASS, 0 FAIL across 30 cards)

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied (package-prefixed before decision; canonical after)

## Cross-unit notes
- Unit cc-rjm-88 authors 30 concept cards across four major architectural themes in rjm:
  1. Multi-dimensional quality validation and testing principles from `.claude/commands/test.md` and `.claude/skills/review/references/qa.md`:
     - Verification criteria under Gate 1 Functional Testing: `acceptance-coverage`, `edge-cases`, `error-paths`, `regression-risk`.
     - Quality gates dispatched to specialized personas: `non-functional-testing` (analyst), `security-testing` (security), `devops-testing` (devops), `developer-experience` (critic), `observability-and-monitoring` (architect).
     - Epistemological testing principles and synthesis rules: `testability-is-design-feedback`, `tests-are-proof`, `hypothesis-driven-debugging`, and `overall-verdict`.
  2. Pre-submission pull request validation standards from `.claude/commands/validate-pr-description.md`:
     - Standards for semantic commits and issue traceability: `conventional-commit-title`, `issue-linking-keywords`, `pr-template-compliance`, and `validation-script`.
  3. Deprecated session log operational guardrails and memory pipeline architecture from `.claude/rules/session-logs.md`:
     - Procedural and git graph invariants: `session-log-mechanics`, `do-not-create-a-new-session-log`, `validate-if-present-gate`, `endingcommit`.
     - Episodic memory ingestion components: `episode-extractor` and `episode-store`.
  4. Architectural decision quality framework and significance filtering from `.claude/skills/adr-generator/`:
     - The overarching significance screening technique: `asr-test`.
     - Six specific criteria evaluating architectural weight: `business-value-risk`, `key-stakeholder-concern`, `runtime-qos`, `external-dependencies`, `cross-cutting`, and `foak`.
- All 33 occurrence locations recorded in `facts/cc-rjm-88.txt` are faithfully mapped to `Where used` rows.
- Every citation was confirmed byte-exactly against the corresponding source file and verified using `bun scripts/synthesis/quote-check.ts` resulting in 32 PASS, 0 FAIL across all 30 cards.
- Defect metadata from inventory cards (`defects: doc-drift`, `defects: missing-path`, `defects: other`, `clean`) was mapped to the `Implementation status` section of each concept card.

## Blocked or uncertain
none

## Time and size
Approximate tokens of source read: ~14,000 tokens across 6 source files and 6 inventory cards.
Approximate tokens of output written: ~16,500 tokens across 30 concept cards and this unit report.
