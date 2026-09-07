---
unit: cc-rjm-226
phase: 2
package: rjm
session: 017
subagent_returned: complete
---

# Unit cc-rjm-226

## Files assigned
- [x] sources/rjm/.claude/skills/work-operating-model/SKILL.md
- [x] sources/rjm/.claude/skills/work-operating-model/scripts/validate_operating_model.py
- [x] sources/rjm/.claude/skills/world-model-diagnostic/SKILL.md
- [x] sources/rjm/.codeql/scripts/get_codeql_diagnostics.py
- [x] sources/rjm/.codeql/scripts/install_codeql_integration.py
- [x] sources/rjm/scripts/analyze_pr_failure.py
- [x] sources/rjm/scripts/eval/eval-knowledge-integration.py
- [x] sources/rjm/scripts/skill_registry.py
- [x] sources/rjm/scripts/validation/hook_contracts.py
- [x] sources/rjm/scripts/validation/sha_pinning.py
- [x] sources/rjm/scripts/validation/traceability.py
- [x] docs/analysis/inventory/rjm/claude-skills-work-operating-model-scripts-validate-operating-model-py.md
- [x] docs/analysis/inventory/rjm/claude-skills-work-operating-model-skill-md.md
- [x] docs/analysis/inventory/rjm/claude-skills-world-model-diagnostic-skill-md.md
- [x] docs/analysis/inventory/rjm/codeql-scripts-get-codeql-diagnostics-py.md
- [x] docs/analysis/inventory/rjm/codeql-scripts-install-codeql-integration-py.md
- [x] docs/analysis/inventory/rjm/scripts-analyze-pr-failure-py.md
- [x] docs/analysis/inventory/rjm/scripts-eval-eval-knowledge-integration-py.md
- [x] docs/analysis/inventory/rjm/scripts-skill-registry-py.md
- [x] docs/analysis/inventory/rjm/scripts-validation-hook-contracts-py.md
- [x] docs/analysis/inventory/rjm/scripts-validation-sha-pinning-py.md
- [x] docs/analysis/inventory/rjm/scripts-validation-traceability-py.md

## Outputs produced
- docs/analysis/concepts/rjm/date-pattern.md (920 bytes)
- docs/analysis/concepts/rjm/operating-model-json.md (948 bytes)
- docs/analysis/concepts/rjm/validate-operating-model-py.md (1022 bytes)
- docs/analysis/concepts/rjm/world-model-diagnostic.md (2214 bytes)
- docs/analysis/concepts/rjm/vector-db.md (1663 bytes)
- docs/analysis/concepts/rjm/structured-ontology.md (1615 bytes)
- docs/analysis/concepts/rjm/signal-fidelity.md (1756 bytes)
- docs/analysis/concepts/rjm/editorial-judgment.md (1718 bytes)
- docs/analysis/concepts/rjm/boundary-layer.md (1531 bytes)
- docs/analysis/concepts/rjm/simulated-judgment.md (1508 bytes)
- docs/analysis/concepts/rjm/firm-finding.md (1421 bytes)
- docs/analysis/concepts/rjm/inference.md (1382 bytes)
- docs/analysis/concepts/rjm/open-question.md (1450 bytes)
- docs/analysis/concepts/rjm/vector-database.md (1674 bytes)
- docs/analysis/concepts/rjm/earned-structure.md (1529 bytes)
- docs/analysis/concepts/rjm/outcome-encoding.md (1612 bytes)
- docs/analysis/concepts/rjm/organizational-resistance.md (1551 bytes)
- docs/analysis/concepts/rjm/time-in-system.md (1518 bytes)
- docs/analysis/concepts/rjm/boundary-audit.md (1616 bytes)
- docs/analysis/concepts/rjm/check-cli.md (905 bytes)
- docs/analysis/concepts/rjm/check-config.md (973 bytes)
- docs/analysis/concepts/rjm/compute-file-hash.md (939 bytes)
- docs/analysis/concepts/rjm/compute-directory-hash.md (978 bytes)
- docs/analysis/concepts/rjm/check-database-cache.md (964 bytes)
- docs/analysis/concepts/rjm/check-database.md (902 bytes)
- docs/analysis/concepts/rjm/check-results.md (933 bytes)
- docs/analysis/concepts/rjm/format-console.md (1466 bytes)
- docs/analysis/concepts/rjm/format-markdown.md (1728 bytes)
- docs/analysis/concepts/rjm/write-status.md (959 bytes)
- docs/analysis/concepts/rjm/step-install-cli.md (942 bytes)
- docs/analysis/concepts/rjm/_units/cc-rjm-226.md (this file)

## Scripts executed
- `bun scripts/synthesis/quote-check.ts docs/analysis/concepts/rjm/date-pattern.md docs/analysis/concepts/rjm/operating-model-json.md docs/analysis/concepts/rjm/validate-operating-model-py.md docs/analysis/concepts/rjm/world-model-diagnostic.md docs/analysis/concepts/rjm/vector-db.md docs/analysis/concepts/rjm/structured-ontology.md docs/analysis/concepts/rjm/signal-fidelity.md docs/analysis/concepts/rjm/editorial-judgment.md docs/analysis/concepts/rjm/boundary-layer.md docs/analysis/concepts/rjm/simulated-judgment.md docs/analysis/concepts/rjm/firm-finding.md docs/analysis/concepts/rjm/inference.md docs/analysis/concepts/rjm/open-question.md docs/analysis/concepts/rjm/vector-database.md docs/analysis/concepts/rjm/earned-structure.md docs/analysis/concepts/rjm/outcome-encoding.md docs/analysis/concepts/rjm/organizational-resistance.md docs/analysis/concepts/rjm/time-in-system.md docs/analysis/concepts/rjm/boundary-audit.md docs/analysis/concepts/rjm/check-cli.md docs/analysis/concepts/rjm/check-config.md docs/analysis/concepts/rjm/compute-file-hash.md docs/analysis/concepts/rjm/compute-directory-hash.md docs/analysis/concepts/rjm/check-database-cache.md docs/analysis/concepts/rjm/check-database.md docs/analysis/concepts/rjm/check-results.md docs/analysis/concepts/rjm/format-console.md docs/analysis/concepts/rjm/format-markdown.md docs/analysis/concepts/rjm/write-status.md docs/analysis/concepts/rjm/step-install-cli.md` (exit code 0, 36 PASS, 0 FAIL across 30 cards)

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied (package-prefixed before decision; canonical after)

## Cross-unit notes
- Unit cc-rjm-226 covers 30 concept cards spanning three distinct domains:
  1. `work-operating-model` schema artifacts and validators (`DATE_PATTERN`, `operating-model.json`, `validate_operating_model.py`).
  2. `world-model-diagnostic` assessment principles, paradigms, and reporting disciplines (`world-model-diagnostic`, `vector DB`, `structured ontology`, `signal-fidelity`, `editorial judgment`, `boundary layer`, `simulated judgment`, `Firm finding`, `Inference`, `Open question`, `vector database`, `earned structure`, `outcome encoding`, `organizational resistance`, `time in system`, `Boundary Audit`).
  3. CodeQL diagnostic utilities and validation script helper functions (`check_cli`, `check_config`, `compute_file_hash`, `compute_directory_hash`, `check_database_cache`, `check_database`, `check_results`, `format_console`, `format_markdown`, `write_status`, `step_install_cli`).
- Helper functions and identifiers (`check_cli`, `check_config`, `compute_file_hash`, `compute_directory_hash`, `check_database_cache`, `check_database`, `check_results`, `format_console`, `format_markdown`, `write_status`, `step_install_cli`, `DATE_PATTERN`, `validate_operating_model.py`, `operating-model.json`) were classified with `kind: name-only` per D-023.
- `format_console` aggregates 4 occurrences across `.codeql/scripts/get_codeql_diagnostics.py:327`, `scripts/validation/hook_contracts.py:892`, `scripts/validation/sha_pinning.py:118`, and `scripts/validation/traceability.py:360`.
- `format_markdown` aggregates 5 occurrences across `.codeql/scripts/get_codeql_diagnostics.py:396`, `scripts/analyze_pr_failure.py:310`, `scripts/skill_registry.py:257`, `scripts/validation/sha_pinning.py:168`, and `scripts/validation/traceability.py:394`.
- All 39 occurrences across 11 source files specified in `facts/cc-rjm-226.txt` are accounted for in the respective `Where used` tables.
- Inventory card defect annotations were propagated to `Implementation status` on all cards.
- All 30 cards pass `bun scripts/synthesis/quote-check.ts` with zero failures (36 PASS, 0 FAIL).

## Blocked or uncertain
none

## Time and size
Approximate tokens of source read: ~42,000 tokens across 11 source files and 11 inventory cards.
Approximate tokens of output written: ~11,000 tokens across 30 concept cards and 1 unit report.
