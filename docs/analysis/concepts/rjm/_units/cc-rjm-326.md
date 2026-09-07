---
unit: cc-rjm-326
phase: 2
package: rjm
session: 018
subagent_returned: complete
---

# Unit cc-rjm-326

## Files assigned
- [x] sources/rjm/scripts/validation/active_plan_closeout.py
- [x] sources/rjm/scripts/validation/adr_lifecycle_baseline.json
- [x] sources/rjm/scripts/validation/agent_registry.py
- [x] sources/rjm/scripts/validation/agent_skill_discriminator_baseline.py
- [x] sources/rjm/scripts/validation/assert_smoke_ran.py
- [x] sources/rjm/scripts/validation/assert_trusted_smoke_context.py
- [x] sources/rjm/scripts/validation/check_adr_lifecycle.py
- [x] sources/rjm/scripts/validation/check_rule_activation_coverage.py
- [x] sources/rjm/scripts/validation/check_skill_md_exec_portability.py
- [x] sources/rjm/scripts/validation/check_skill_portability.py
- [x] docs/analysis/inventory/rjm/scripts-validation-active-plan-closeout-py.md
- [x] docs/analysis/inventory/rjm/scripts-validation-adr-lifecycle-baseline-json.md
- [x] docs/analysis/inventory/rjm/scripts-validation-agent-registry-py.md
- [x] docs/analysis/inventory/rjm/scripts-validation-agent-skill-discriminator-baseline-py.md
- [x] docs/analysis/inventory/rjm/scripts-validation-assert-smoke-ran-py.md
- [x] docs/analysis/inventory/rjm/scripts-validation-assert-trusted-smoke-context-py.md
- [x] docs/analysis/inventory/rjm/scripts-validation-check-adr-lifecycle-py.md
- [x] docs/analysis/inventory/rjm/scripts-validation-check-rule-activation-coverage-py.md
- [x] docs/analysis/inventory/rjm/scripts-validation-check-skill-md-exec-portability-py.md
- [x] docs/analysis/inventory/rjm/scripts-validation-check-skill-portability-py.md

## Outputs produced
- docs/analysis/concepts/rjm/normalize-state.md (918 bytes)
- docs/analysis/concepts/rjm/print-lookup-advisory.md (987 bytes)
- docs/analysis/concepts/rjm/gh-issue-state.md (875 bytes)
- docs/analysis/concepts/rjm/validate-active-plan-closeout.md (1045 bytes)
- docs/analysis/concepts/rjm/counts.md (875 bytes)
- docs/analysis/concepts/rjm/frontmatter-parses.md (1085 bytes)
- docs/analysis/concepts/rjm/id-matches-filename.md (1092 bytes)
- docs/analysis/concepts/rjm/status-enum.md (1068 bytes)
- docs/analysis/concepts/rjm/supersession-reciprocal.md (1143 bytes)
- docs/analysis/concepts/rjm/supersession-target-exists.md (1145 bytes)
- docs/analysis/concepts/rjm/proposed-cannot-supersede.md (1131 bytes)
- docs/analysis/concepts/rjm/prose-frontmatter-agree.md (1138 bytes)
- docs/analysis/concepts/rjm/status-edge-consistency.md (1158 bytes)
- docs/analysis/concepts/rjm/read-yaml-frontmatter.md (953 bytes)
- docs/analysis/concepts/rjm/excluded-files.md (980 bytes)
- docs/analysis/concepts/rjm/valid-models.md (957 bytes)
- docs/analysis/concepts/rjm/malformedagentfileerror.md (971 bytes)
- docs/analysis/concepts/rjm/agent-skill-discriminator.md (1361 bytes)
- docs/analysis/concepts/rjm/default-baseline-name.md (2057 bytes)
- docs/analysis/concepts/rjm/agent-corpus-roots.md (1069 bytes)
- docs/analysis/concepts/rjm/command-roots.md (1037 bytes)
- docs/analysis/concepts/rjm/scoring-roots.md (1018 bytes)
- docs/analysis/concepts/rjm/min-baseline-score.md (955 bytes)
- docs/analysis/concepts/rjm/max-baseline-score.md (955 bytes)
- docs/analysis/concepts/rjm/must-9.md (1367 bytes)
- docs/analysis/concepts/rjm/real-cli-smoke.md (1371 bytes)
- docs/analysis/concepts/rjm/exit-not-run.md (895 bytes)
- docs/analysis/concepts/rjm/smokereporterror.md (902 bytes)
- docs/analysis/concepts/rjm/trusted-execution-context.md (1340 bytes)
- docs/analysis/concepts/rjm/trusted-events.md (1055 bytes)
- docs/analysis/concepts/rjm/_units/cc-rjm-326.md (7935 bytes)

## Scripts executed
- `bun scripts/synthesis/quote-check.ts docs/analysis/concepts/rjm/normalize-state.md docs/analysis/concepts/rjm/print-lookup-advisory.md docs/analysis/concepts/rjm/gh-issue-state.md docs/analysis/concepts/rjm/validate-active-plan-closeout.md docs/analysis/concepts/rjm/counts.md docs/analysis/concepts/rjm/frontmatter-parses.md docs/analysis/concepts/rjm/id-matches-filename.md docs/analysis/concepts/rjm/status-enum.md docs/analysis/concepts/rjm/supersession-reciprocal.md docs/analysis/concepts/rjm/supersession-target-exists.md docs/analysis/concepts/rjm/proposed-cannot-supersede.md docs/analysis/concepts/rjm/prose-frontmatter-agree.md docs/analysis/concepts/rjm/status-edge-consistency.md docs/analysis/concepts/rjm/read-yaml-frontmatter.md docs/analysis/concepts/rjm/excluded-files.md docs/analysis/concepts/rjm/valid-models.md docs/analysis/concepts/rjm/malformedagentfileerror.md docs/analysis/concepts/rjm/agent-skill-discriminator.md docs/analysis/concepts/rjm/default-baseline-name.md docs/analysis/concepts/rjm/agent-corpus-roots.md docs/analysis/concepts/rjm/command-roots.md docs/analysis/concepts/rjm/scoring-roots.md docs/analysis/concepts/rjm/min-baseline-score.md docs/analysis/concepts/rjm/max-baseline-score.md docs/analysis/concepts/rjm/must-9.md docs/analysis/concepts/rjm/real-cli-smoke.md docs/analysis/concepts/rjm/exit-not-run.md docs/analysis/concepts/rjm/smokereporterror.md docs/analysis/concepts/rjm/trusted-execution-context.md docs/analysis/concepts/rjm/trusted-events.md` (exit code 0, 32 PASS, 0 FAIL, 0 MISSING source across 30 cards)

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied (package-prefixed before decision; canonical after)

## Cross-unit notes
- Unit cc-rjm-326 completes 30 concept cards derived from 10 validation scripts and JSON baselines:
  1. Active execution plan validation (`_normalize_state`, `_print_lookup_advisory`, `gh_issue_state`, `validate_active_plan_closeout`) in `scripts/validation/active_plan_closeout.py`.
  2. ADR lifecycle governance and per-check ratchet baseline keys (`counts`, `frontmatter-parses`, `id-matches-filename`, `status-enum`, `supersession-reciprocal`, `supersession-target-exists`, `proposed-cannot-supersede`, `prose-frontmatter-agree`, `status-edge-consistency`) in `adr_lifecycle_baseline.json` and `check_adr_lifecycle.py`.
  3. Agent registry validation and models (`read_yaml_frontmatter`, `_EXCLUDED_FILES`, `_VALID_MODELS`, `MalformedAgentFileError`) in `scripts/validation/agent_registry.py`.
  4. Agent-skill discriminator and ratchet mechanics (`agent-skill discriminator`, `DEFAULT_BASELINE_NAME`, `AGENT_CORPUS_ROOTS`, `COMMAND_ROOTS`, `SCORING_ROOTS`, `MIN_BASELINE_SCORE`, `MAX_BASELINE_SCORE`, `MUST-9`) across `agent_skill_discriminator_baseline.py` and sibling portability checkers.
  5. Real-CLI smoke assertion and error handling (`real-CLI smoke`, `EXIT_NOT_RUN`, `SmokeReportError`) in `scripts/validation/assert_smoke_ran.py`.
  6. Trusted execution context security gating (`trusted execution context`, `_TRUSTED_EVENTS`) in `scripts/validation/assert_trusted_smoke_context.py`.
- Lifecycle concepts were categorized according to their design function: gates (`agent-skill discriminator`, `MUST-9`, `trusted execution context`), techniques (`real-CLI smoke`), and identifiers/constants/functions (`kind: name-only` per D-023).
- All 41 occurrences recorded in `facts/cc-rjm-326.txt` are faithfully mapped to rows in the respective `Where used` tables.
- Defect statuses from citing inventory entries were propagated to each card's `Implementation status`: `clean`, `defects: orphan`, `defects: missing-path`, or multi-file defect mappings where appropriate.
- All 30 cards pass byte-exact verification with `bun scripts/synthesis/quote-check.ts` (32 PASS, 0 FAIL, 0 MISSING source).

## Blocked or uncertain
none

## Time and size
Approximate tokens of source read: ~38,000 tokens across 10 source files and 10 inventory cards.
Approximate tokens of output written: ~12,000 tokens across 30 concept cards and 1 unit report.
