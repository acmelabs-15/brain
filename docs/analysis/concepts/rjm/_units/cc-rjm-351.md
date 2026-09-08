---
unit: cc-rjm-351
phase: 2
package: rjm
session: 018
subagent_returned: complete
---

# Unit cc-rjm-351

## Files assigned
- [x] sources/rjm/scripts/validation/checks_dash.py
- [x] sources/rjm/scripts/validation/checks_mypy.py
- [x] sources/rjm/scripts/validation/checks_plugin.py
- [x] sources/rjm/scripts/validation/checks_ratchet.py
- [x] sources/rjm/scripts/validation/checks_spec.py
- [x] sources/rjm/scripts/validation/traceability.py
- [x] docs/analysis/inventory/rjm/scripts-validation-checks-dash-py.md
- [x] docs/analysis/inventory/rjm/scripts-validation-checks-mypy-py.md
- [x] docs/analysis/inventory/rjm/scripts-validation-checks-plugin-py.md
- [x] docs/analysis/inventory/rjm/scripts-validation-checks-ratchet-py.md
- [x] docs/analysis/inventory/rjm/scripts-validation-checks-spec-py.md
- [x] docs/analysis/inventory/rjm/scripts-validation-traceability-py.md

## Outputs produced
- docs/analysis/concepts/rjm/print-dash-violations.md (906 bytes)
- docs/analysis/concepts/rjm/validate-dash-prohibition.md (917 bytes)
- docs/analysis/concepts/rjm/validate-mypy-changed-files.md (923 bytes)
- docs/analysis/concepts/rjm/run-mypy.md (813 bytes)
- docs/analysis/concepts/rjm/validate-hook-anchoring.md (917 bytes)
- docs/analysis/concepts/rjm/validate-shipped-skill-routes.md (946 bytes)
- docs/analysis/concepts/rjm/validate-install-parity.md (889 bytes)
- docs/analysis/concepts/rjm/validate-agent-content-parity.md (914 bytes)
- docs/analysis/concepts/rjm/validate-plugin-version-bump.md (943 bytes)
- docs/analysis/concepts/rjm/lefthook-check-command.md (898 bytes)
- docs/analysis/concepts/rjm/validate-lefthook-installed.md (918 bytes)
- docs/analysis/concepts/rjm/is-linked-worktree.md (889 bytes)
- docs/analysis/concepts/rjm/add-workflow-paths.md (923 bytes)
- docs/analysis/concepts/rjm/collect-changed-workflows.md (979 bytes)
- docs/analysis/concepts/rjm/validate-workflow-local-run.md (915 bytes)
- docs/analysis/concepts/rjm/validate-colocated-skill-tests.md (949 bytes)
- docs/analysis/concepts/rjm/dataclass.md (807 bytes)
- docs/analysis/concepts/rjm/aggregate-timeout-seconds.md (886 bytes)
- docs/analysis/concepts/rjm/resolve-base-oid.md (874 bytes)
- docs/analysis/concepts/rjm/normalize-remote-head.md (895 bytes)
- docs/analysis/concepts/rjm/prepare-base-oid.md (894 bytes)
- docs/analysis/concepts/rjm/validate-count-ratchets.md (903 bytes)
- docs/analysis/concepts/rjm/validate-build-gates.md (895 bytes)
- docs/analysis/concepts/rjm/validate-spec-id-uniqueness.md (934 bytes)
- docs/analysis/concepts/rjm/validate-traceability.md (1154 bytes)
- docs/analysis/concepts/rjm/validate-vendor-portability.md (944 bytes)
- docs/analysis/concepts/rjm/validate-skill-md-portability.md (960 bytes)
- docs/analysis/concepts/rjm/validate-rule-activation-coverage.md (973 bytes)
- docs/analysis/concepts/rjm/validate-skill-shells.md (921 bytes)
- docs/analysis/concepts/rjm/validate-skill-skip-clauses.md (943 bytes)
- docs/analysis/concepts/rjm/_units/cc-rjm-351.md (this file)

## Scripts executed
- `bun scripts/synthesis/quote-check.ts docs/analysis/concepts/rjm/print-dash-violations.md docs/analysis/concepts/rjm/validate-dash-prohibition.md docs/analysis/concepts/rjm/validate-mypy-changed-files.md docs/analysis/concepts/rjm/run-mypy.md docs/analysis/concepts/rjm/validate-hook-anchoring.md docs/analysis/concepts/rjm/validate-shipped-skill-routes.md docs/analysis/concepts/rjm/validate-install-parity.md docs/analysis/concepts/rjm/validate-agent-content-parity.md docs/analysis/concepts/rjm/validate-plugin-version-bump.md docs/analysis/concepts/rjm/lefthook-check-command.md docs/analysis/concepts/rjm/validate-lefthook-installed.md docs/analysis/concepts/rjm/is-linked-worktree.md docs/analysis/concepts/rjm/add-workflow-paths.md docs/analysis/concepts/rjm/collect-changed-workflows.md docs/analysis/concepts/rjm/validate-workflow-local-run.md docs/analysis/concepts/rjm/validate-colocated-skill-tests.md docs/analysis/concepts/rjm/dataclass.md docs/analysis/concepts/rjm/aggregate-timeout-seconds.md docs/analysis/concepts/rjm/resolve-base-oid.md docs/analysis/concepts/rjm/normalize-remote-head.md docs/analysis/concepts/rjm/prepare-base-oid.md docs/analysis/concepts/rjm/validate-count-ratchets.md docs/analysis/concepts/rjm/validate-build-gates.md docs/analysis/concepts/rjm/validate-spec-id-uniqueness.md docs/analysis/concepts/rjm/validate-traceability.md docs/analysis/concepts/rjm/validate-vendor-portability.md docs/analysis/concepts/rjm/validate-skill-md-portability.md docs/analysis/concepts/rjm/validate-rule-activation-coverage.md docs/analysis/concepts/rjm/validate-skill-shells.md docs/analysis/concepts/rjm/validate-skill-skip-clauses.md` (exit code 0, 30 PASS, 0 FAIL, 0 MISSING source across 30 cards)

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied (package-prefixed before decision; canonical after)

## Cross-unit notes
- Unit cc-rjm-351 completes 30 concept cards spanning pre-PR validation gate runners across Markdown style enforcement, static type checking, plugin/hook integrity, count ratchets, and specification consistency:
  1. Dash prohibition gates (`_print_dash_violations`, `validate_dash_prohibition`) in `checks_dash.py` enforcing universal markdown punctuation rules.
  2. Incremental type checking gates (`validate_mypy_changed_files`, `run_mypy`) in `checks_mypy.py` running ratchet-aware mypy on branch diffs.
  3. Plugin and installation gates (`validate_hook_anchoring`, `validate_shipped_skill_routes`, `validate_install_parity`, `validate_agent_content_parity`, `validate_plugin_version_bump`, `_lefthook_check_command`, `validate_lefthook_installed`, `_is_linked_worktree`, `_add_workflow_paths`, `_collect_changed_workflows`, `validate_workflow_local_run`, `validate_colocated_skill_tests`) in `checks_plugin.py`.
  4. Unified count ratchet registry and helpers (`dataclass`, `_AGGREGATE_TIMEOUT_SECONDS`, `_resolve_base_oid`, `_normalize_remote_head`, `_prepare_base_oid`, `validate_count_ratchets`) in `checks_ratchet.py`.
  5. Specification, portability, and coverage gates (`validate_build_gates`, `validate_spec_id_uniqueness`, `validate_traceability`, `validate_vendor_portability`, `validate_skill_md_portability`, `validate_rule_activation_coverage`, `validate_skill_shells`, `validate_skill_skip_clauses`) across `checks_spec.py` and `traceability.py`.
- Concepts representing functions, constants, or standard library decorators are classified as `kind: name-only` per D-023.
- All 31 occurrences recorded in `facts/cc-rjm-351.txt` are mapped in the Where used tables.
- Defect statuses from citing inventory cards were propagated into `Implementation status` (`defects: script-bug`, `defects: script-bug, exit-code-mismatch`, or `clean`).
- All 30 concept cards pass byte-exact verification via `quote-check.ts` with zero failures.

## Blocked or uncertain
none

## Time and size
Approximate tokens of source read: ~23,000 tokens across 6 source files and 6 inventory cards.
Approximate tokens of output written: ~11,000 tokens across 30 concept cards and 1 unit report.
