---
unit: cc-rjm-331
phase: 2
package: rjm
session: 018
subagent_returned: complete
---

# Unit cc-rjm-331

## Files assigned
- [x] sources/rjm/scripts/validation/check_adr_uniqueness.py
- [x] sources/rjm/scripts/validation/check_agent_skill_discriminator.py
- [x] sources/rjm/scripts/validation/check_build_gates.py
- [x] sources/rjm/scripts/validation/check_skill_md_exec_portability.py
- [x] sources/rjm/scripts/validation/check_zero_collection_tests.py
- [x] sources/rjm/scripts/validation/portability_baseline.py
- [x] sources/rjm/scripts/validation/portability_common.py
- [x] sources/rjm/scripts/validation/portability_floor.py
- [x] sources/rjm/scripts/validation/skill_md_exec_portability_baseline.json
- [x] sources/rjm/scripts/validation/skill_md_portability_baseline.json
- [x] sources/rjm/scripts/validation/skill_portability_baseline.json
- [x] docs/analysis/inventory/rjm/scripts-validation-check-adr-uniqueness-py.md
- [x] docs/analysis/inventory/rjm/scripts-validation-check-agent-skill-discriminator-py.md
- [x] docs/analysis/inventory/rjm/scripts-validation-check-build-gates-py.md
- [x] docs/analysis/inventory/rjm/scripts-validation-check-skill-md-exec-portability-py.md
- [x] docs/analysis/inventory/rjm/scripts-validation-check-zero-collection-tests-py.md
- [x] docs/analysis/inventory/rjm/scripts-validation-portability-baseline-py.md
- [x] docs/analysis/inventory/rjm/scripts-validation-portability-common-py.md
- [x] docs/analysis/inventory/rjm/scripts-validation-portability-floor-py.md
- [x] docs/analysis/inventory/rjm/scripts-validation-skill-md-exec-portability-baseline-json.md
- [x] docs/analysis/inventory/rjm/scripts-validation-skill-md-portability-baseline-json.md
- [x] docs/analysis/inventory/rjm/scripts-validation-skill-portability-baseline-json.md

## Outputs produced
- docs/analysis/concepts/rjm/next-free-number.md (888 bytes)
- docs/analysis/concepts/rjm/format-dupes.md (880 bytes)
- docs/analysis/concepts/rjm/phase-3-ci-check.md (954 bytes)
- docs/analysis/concepts/rjm/discriminator.md (1272 bytes)
- docs/analysis/concepts/rjm/task-subagent-type-name.md (938 bytes)
- docs/analysis/concepts/rjm/skill-skill-name.md (908 bytes)
- docs/analysis/concepts/rjm/the-3-pipeline-rule.md (1232 bytes)
- docs/analysis/concepts/rjm/isolation-required-true.md (929 bytes)
- docs/analysis/concepts/rjm/skill-discriminator-rationale.md (1019 bytes)
- docs/analysis/concepts/rjm/adr-030.md (898 bytes)
- docs/analysis/concepts/rjm/c2-threshold.md (913 bytes)
- docs/analysis/concepts/rjm/pipeline-rule-limit.md (929 bytes)
- docs/analysis/concepts/rjm/agentscore.md (870 bytes)
- docs/analysis/concepts/rjm/has-isolation-required.md (937 bytes)
- docs/analysis/concepts/rjm/is-reference-line.md (933 bytes)
- docs/analysis/concepts/rjm/content-lines.md (920 bytes)
- docs/analysis/concepts/rjm/score-c2.md (888 bytes)
- docs/analysis/concepts/rjm/pipelineindex.md (868 bytes)
- docs/analysis/concepts/rjm/build-pipeline-index.md (943 bytes)
- docs/analysis/concepts/rjm/agent-name-from-path.md (914 bytes)
- docs/analysis/concepts/rjm/is-agent-path.md (911 bytes)
- docs/analysis/concepts/rjm/score-agent.md (936 bytes)
- docs/analysis/concepts/rjm/filter-agent-paths.md (937 bytes)
- docs/analysis/concepts/rjm/print-report.md (1230 bytes)
- docs/analysis/concepts/rjm/pr-body.md (851 bytes)
- docs/analysis/concepts/rjm/update-baseline.md (1528 bytes)
- docs/analysis/concepts/rjm/allow-baseline-shrink.md (1363 bytes)
- docs/analysis/concepts/rjm/exit-gates.md (1098 bytes)
- docs/analysis/concepts/rjm/exit-path.md (1108 bytes)
- docs/analysis/concepts/rjm/invoke-on-demand.md (1125 bytes)
- docs/analysis/concepts/rjm/_units/cc-rjm-331.md (this file)

## Scripts executed
- `bun scripts/synthesis/quote-check.ts docs/analysis/concepts/rjm/next-free-number.md docs/analysis/concepts/rjm/format-dupes.md docs/analysis/concepts/rjm/phase-3-ci-check.md docs/analysis/concepts/rjm/discriminator.md docs/analysis/concepts/rjm/task-subagent-type-name.md docs/analysis/concepts/rjm/skill-skill-name.md docs/analysis/concepts/rjm/the-3-pipeline-rule.md docs/analysis/concepts/rjm/isolation-required-true.md docs/analysis/concepts/rjm/skill-discriminator-rationale.md docs/analysis/concepts/rjm/adr-030.md docs/analysis/concepts/rjm/c2-threshold.md docs/analysis/concepts/rjm/pipeline-rule-limit.md docs/analysis/concepts/rjm/agentscore.md docs/analysis/concepts/rjm/has-isolation-required.md docs/analysis/concepts/rjm/is-reference-line.md docs/analysis/concepts/rjm/content-lines.md docs/analysis/concepts/rjm/score-c2.md docs/analysis/concepts/rjm/pipelineindex.md docs/analysis/concepts/rjm/build-pipeline-index.md docs/analysis/concepts/rjm/agent-name-from-path.md docs/analysis/concepts/rjm/is-agent-path.md docs/analysis/concepts/rjm/score-agent.md docs/analysis/concepts/rjm/filter-agent-paths.md docs/analysis/concepts/rjm/print-report.md docs/analysis/concepts/rjm/pr-body.md docs/analysis/concepts/rjm/update-baseline.md docs/analysis/concepts/rjm/allow-baseline-shrink.md docs/analysis/concepts/rjm/exit-gates.md docs/analysis/concepts/rjm/exit-path.md docs/analysis/concepts/rjm/invoke-on-demand.md`: exit code 0 (30 PASS, 0 FAIL, 0 MISSING source across 30 cards).

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied (package-prefixed before decision; canonical after)

## Cross-unit notes
- Unit cc-rjm-331 produces 30 concept cards focused primarily on validation mechanisms and debt prevention tooling in rjm:
  1. ADR uniqueness enforcement (`next-free-number`, `format-dupes`).
  2. The agent-skill discriminator validation suite and its internal heuristics (`phase-3-ci-check`, `discriminator`, `task-subagent-type-name`, `skill-skill-name`, `the-3-pipeline-rule`, `isolation-required-true`, `skill-discriminator-rationale`, `adr-030`, `c2-threshold`, `pipeline-rule-limit`, `agentscore`, `has-isolation-required`, `is-reference-line`, `content-lines`, `score-c2`, `pipelineindex`, `build-pipeline-index`, `agent-name-from-path`, `is-agent-path`, `score-agent`, `filter-agent-paths`, `pr-body`).
  3. Shared validation reporting and ratchet CLI options spanning multiple validation tools and baselines (`print-report`, `update-baseline`, `allow-baseline-shrink`).
  4. Build command exit gating architecture (`exit-gates`, `exit-path`, `invoke-on-demand`).
- Non-lifecycle concepts representing identifiers, flags, and function names were authored with `kind: name-only` per D-023.
- All 39 occurrences listed in `facts/cc-rjm-331.txt` are included in the respective `Where used` tables.
- Defect annotations from citing inventory cards were systematically reflected in `Implementation status`.
- All 30 cards pass byte-exact verification via `scripts/synthesis/quote-check.ts` with 0 failures.

## Blocked or uncertain
none

## Time and size
Approximate tokens of source read: ~35,000 tokens across 11 source files and 11 inventory cards.
Approximate tokens of output written: ~12,500 tokens across 30 authored concept cards and 1 unit report.
