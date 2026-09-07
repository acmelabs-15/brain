---
unit: cc-rjm-322
phase: 2
package: rjm
session: 018
subagent_returned: complete
---

# Unit cc-rjm-322

## Files assigned
- [x] sources/rjm/scripts/validate_pr_review_config.py
- [x] sources/rjm/scripts/validate_quality_gate_output.py
- [x] sources/rjm/scripts/validate_session_json.py
- [x] sources/rjm/scripts/validation/pr_description.py
- [x] docs/analysis/inventory/rjm/scripts-validate-pr-review-config-py.md
- [x] docs/analysis/inventory/rjm/scripts-validate-quality-gate-output-py.md
- [x] docs/analysis/inventory/rjm/scripts-validate-session-json-py.md
- [x] docs/analysis/inventory/rjm/scripts-validation-pr-description-py.md

## Outputs produced
- docs/analysis/concepts/rjm/output-constraint-fields.md (884 bytes)
- docs/analysis/concepts/rjm/required-script-keys.md (878 bytes)
- docs/analysis/concepts/rjm/claude-code-only-keys.md (910 bytes)
- docs/analysis/concepts/rjm/required-script-sections.md (925 bytes)
- docs/analysis/concepts/rjm/completion-criteria-required-fields.md (1035 bytes)
- docs/analysis/concepts/rjm/completion-criteria-pass-fields.md (982 bytes)
- docs/analysis/concepts/rjm/error-recovery-fields.md (925 bytes)
- docs/analysis/concepts/rjm/check-failure-fields.md (920 bytes)
- docs/analysis/concepts/rjm/failure-handling-fields.md (935 bytes)
- docs/analysis/concepts/rjm/related-memory-fields.md (922 bytes)
- docs/analysis/concepts/rjm/validate-config.md (863 bytes)
- docs/analysis/concepts/rjm/validate-invocation-limits.md (918 bytes)
- docs/analysis/concepts/rjm/validate-output-constraints.md (924 bytes)
- docs/analysis/concepts/rjm/pr-quality-gate-output-schema-json.md (926 bytes)
- docs/analysis/concepts/rjm/valid-agents.md (859 bytes)
- docs/analysis/concepts/rjm/valid-severities.md (1151 bytes)
- docs/analysis/concepts/rjm/required-finding-fields.md (967 bytes)
- docs/analysis/concepts/rjm/validate-output.md (870 bytes)
- docs/analysis/concepts/rjm/agents-schemas-session-log-schema-json.md (930 bytes)
- docs/analysis/concepts/rjm/branch-pattern.md (833 bytes)
- docs/analysis/concepts/rjm/commit-sha-pattern.md (847 bytes)
- docs/analysis/concepts/rjm/session-start-required-items.md (938 bytes)
- docs/analysis/concepts/rjm/serenaactivated.md (829 bytes)
- docs/analysis/concepts/rjm/serenainstructions.md (853 bytes)
- docs/analysis/concepts/rjm/handoffread.md (813 bytes)
- docs/analysis/concepts/rjm/sessionlogcreated.md (845 bytes)
- docs/analysis/concepts/rjm/skillscriptslisted.md (851 bytes)
- docs/analysis/concepts/rjm/usagemandatoryread.md (859 bytes)
- docs/analysis/concepts/rjm/constraintsread.md (842 bytes)
- docs/analysis/concepts/rjm/memoriesloaded.md (834 bytes)
- docs/analysis/concepts/rjm/_units/cc-rjm-322.md (this file)

## Scripts executed
- `bun scripts/synthesis/quote-check.ts docs/analysis/concepts/rjm/output-constraint-fields.md docs/analysis/concepts/rjm/required-script-keys.md docs/analysis/concepts/rjm/claude-code-only-keys.md docs/analysis/concepts/rjm/required-script-sections.md docs/analysis/concepts/rjm/completion-criteria-required-fields.md docs/analysis/concepts/rjm/completion-criteria-pass-fields.md docs/analysis/concepts/rjm/error-recovery-fields.md docs/analysis/concepts/rjm/check-failure-fields.md docs/analysis/concepts/rjm/failure-handling-fields.md docs/analysis/concepts/rjm/related-memory-fields.md docs/analysis/concepts/rjm/validate-config.md docs/analysis/concepts/rjm/validate-invocation-limits.md docs/analysis/concepts/rjm/validate-output-constraints.md docs/analysis/concepts/rjm/pr-quality-gate-output-schema-json.md docs/analysis/concepts/rjm/valid-agents.md docs/analysis/concepts/rjm/valid-severities.md docs/analysis/concepts/rjm/required-finding-fields.md docs/analysis/concepts/rjm/validate-output.md docs/analysis/concepts/rjm/agents-schemas-session-log-schema-json.md docs/analysis/concepts/rjm/branch-pattern.md docs/analysis/concepts/rjm/commit-sha-pattern.md docs/analysis/concepts/rjm/session-start-required-items.md docs/analysis/concepts/rjm/serenaactivated.md docs/analysis/concepts/rjm/serenainstructions.md docs/analysis/concepts/rjm/handoffread.md docs/analysis/concepts/rjm/sessionlogcreated.md docs/analysis/concepts/rjm/skillscriptslisted.md docs/analysis/concepts/rjm/usagemandatoryread.md docs/analysis/concepts/rjm/constraintsread.md docs/analysis/concepts/rjm/memoriesloaded.md` (exit code 0, 31 PASS, 0 FAIL, 0 MISSING source across 30 cards)

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied (package-prefixed before decision; canonical after)

## Cross-unit notes
- Unit cc-rjm-322 covers 30 concepts extracted from 4 validation scripts:
  1. `scripts/validate_pr_review_config.py`: constants and validation functions for PR review configuration schema (`OUTPUT_CONSTRAINT_FIELDS`, `REQUIRED_SCRIPT_KEYS`, `CLAUDE_CODE_ONLY_KEYS`, `REQUIRED_SCRIPT_SECTIONS`, `COMPLETION_CRITERIA_REQUIRED_FIELDS`, `COMPLETION_CRITERIA_PASS_FIELDS`, `ERROR_RECOVERY_FIELDS`, `CHECK_FAILURE_FIELDS`, `FAILURE_HANDLING_FIELDS`, `RELATED_MEMORY_FIELDS`, `validate_config`, `_validate_invocation_limits`, `_validate_output_constraints`).
  2. `scripts/validate_quality_gate_output.py`: schema constants and functions validating agent quality gate outputs (`pr-quality-gate-output.schema.json`, `VALID_AGENTS`, `VALID_SEVERITIES`, `REQUIRED_FINDING_FIELDS`, `validate_output`).
  3. `scripts/validation/pr_description.py`: defines `_VALID_SEVERITIES`, which maps to the existing multi-occurrence concept `VALID_SEVERITIES`.
  4. `scripts/validate_session_json.py`: schema references, regex patterns, and session start checklist item keys (`.agents/schemas/session-log.schema.json`, `BRANCH_PATTERN`, `COMMIT_SHA_PATTERN`, `SESSION_START_REQUIRED_ITEMS`, `serenaActivated`, `serenaInstructions`, `handoffRead`, `sessionLogCreated`, `skillScriptsListed`, `usageMandatoryRead`, `constraintsRead`, `memoriesLoaded`).
- All 30 concepts represent script constants, function identifiers, checklist keys, or schema filenames rather than SDLC lifecycle stages or phases; per D-023 and METHOD.md, each card is authored with `kind: name-only`, `package_phase: none`, and `(used, not defined)` in Definition with verbatim usage citations.
- All 31 occurrence rows from `facts/cc-rjm-322.txt` are represented in the respective `Where used` tables.
- Defect annotations from inventory cards (`orphan`, `orphan, script-bug`, `missing-path, doc-drift`, `doc-drift`) are propagated to `Implementation status`.
- Verification with `quote-check.ts` yielded 31 PASS, 0 FAIL across all 30 concept cards.

## Blocked or uncertain
none

## Time and size
Approximate tokens of source read: ~35,000 tokens across 4 source files and 4 inventory cards.
Approximate tokens of output written: ~12,000 tokens across 30 concept cards and 1 unit report.
