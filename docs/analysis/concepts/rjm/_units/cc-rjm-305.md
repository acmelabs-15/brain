---
unit: cc-rjm-305
phase: 2
package: rjm
session: 018
subagent_returned: complete
---

# Unit cc-rjm-305

## Files assigned
- [x] sources/rjm/scripts/maintenance/worktree_report.py
- [x] sources/rjm/scripts/mcp_cli/__init__.py
- [x] sources/rjm/scripts/mcp_cli/wrapper.py
- [x] sources/rjm/scripts/measure_context_retrieval_metrics.py
- [x] sources/rjm/scripts/metrics/check_vendored_install.py
- [x] sources/rjm/scripts/metrics/emit_verdict_mismatch.py
- [x] sources/rjm/scripts/metrics/kill_criteria.py
- [x] sources/rjm/scripts/metrics_writer.py
- [x] sources/rjm/scripts/validation/portability_baseline_write.py
- [x] docs/analysis/inventory/rjm/scripts-maintenance-worktree-report-py.md
- [x] docs/analysis/inventory/rjm/scripts-mcp-cli---init---py.md
- [x] docs/analysis/inventory/rjm/scripts-mcp-cli-wrapper-py.md
- [x] docs/analysis/inventory/rjm/scripts-measure-context-retrieval-metrics-py.md
- [x] docs/analysis/inventory/rjm/scripts-metrics-check-vendored-install-py.md
- [x] docs/analysis/inventory/rjm/scripts-metrics-emit-verdict-mismatch-py.md
- [x] docs/analysis/inventory/rjm/scripts-metrics-kill-criteria-py.md
- [x] docs/analysis/inventory/rjm/scripts-metrics-writer-py.md
- [x] docs/analysis/inventory/rjm/scripts-validation-portability-baseline-write-py.md

## Outputs produced
- docs/analysis/concepts/rjm/keep-admin-only.md (985 bytes)
- docs/analysis/concepts/rjm/append-decision-group.md (954 bytes)
- docs/analysis/concepts/rjm/append-disposition-group.md (1030 bytes)
- docs/analysis/concepts/rjm/append-apply-result.md (969 bytes)
- docs/analysis/concepts/rjm/mcporter.md (1047 bytes)
- docs/analysis/concepts/rjm/mcpclierror.md (966 bytes)
- docs/analysis/concepts/rjm/mcp-call.md (911 bytes)
- docs/analysis/concepts/rjm/mcp-list-tools.md (953 bytes)
- docs/analysis/concepts/rjm/validate-arg-value.md (931 bytes)
- docs/analysis/concepts/rjm/find-mcporter.md (880 bytes)
- docs/analysis/concepts/rjm/invocationrecord.md (944 bytes)
- docs/analysis/concepts/rjm/find-session-logs.md (942 bytes)
- docs/analysis/concepts/rjm/extract-context-retrieval-data.md (1052 bytes)
- docs/analysis/concepts/rjm/cwe-367.md (921 bytes)
- docs/analysis/concepts/rjm/metricswriteerror.md (893 bytes)
- docs/analysis/concepts/rjm/reject-symlink.md (904 bytes)
- docs/analysis/concepts/rjm/resolve-target-parent.md (916 bytes)
- docs/analysis/concepts/rjm/anchor-target.md (861 bytes)
- docs/analysis/concepts/rjm/write-all.md (1121 bytes)
- docs/analysis/concepts/rjm/resolve-under.md (947 bytes)
- docs/analysis/concepts/rjm/safe-append-tally.md (909 bytes)
- docs/analysis/concepts/rjm/k3.md (1417 bytes)
- docs/analysis/concepts/rjm/vendored-test.md (970 bytes)
- docs/analysis/concepts/rjm/run-vendored-suite.md (976 bytes)
- docs/analysis/concepts/rjm/k4.md (1486 bytes)
- docs/analysis/concepts/rjm/verdicts-match.md (968 bytes)
- docs/analysis/concepts/rjm/canonical-verdict.md (945 bytes)
- docs/analysis/concepts/rjm/k1.md (1326 bytes)
- docs/analysis/concepts/rjm/rollover-window.md (1201 bytes)
- docs/analysis/concepts/rjm/secret-redaction.md (971 bytes)
- docs/analysis/concepts/rjm/_units/cc-rjm-305.md (this file)

## Scripts executed
- `bun scripts/synthesis/quote-check.ts docs/analysis/concepts/rjm/keep-admin-only.md docs/analysis/concepts/rjm/append-decision-group.md docs/analysis/concepts/rjm/append-disposition-group.md docs/analysis/concepts/rjm/append-apply-result.md docs/analysis/concepts/rjm/mcporter.md docs/analysis/concepts/rjm/mcpclierror.md docs/analysis/concepts/rjm/mcp-call.md docs/analysis/concepts/rjm/mcp-list-tools.md docs/analysis/concepts/rjm/validate-arg-value.md docs/analysis/concepts/rjm/find-mcporter.md docs/analysis/concepts/rjm/invocationrecord.md docs/analysis/concepts/rjm/find-session-logs.md docs/analysis/concepts/rjm/extract-context-retrieval-data.md docs/analysis/concepts/rjm/cwe-367.md docs/analysis/concepts/rjm/metricswriteerror.md docs/analysis/concepts/rjm/reject-symlink.md docs/analysis/concepts/rjm/resolve-target-parent.md docs/analysis/concepts/rjm/anchor-target.md docs/analysis/concepts/rjm/write-all.md docs/analysis/concepts/rjm/resolve-under.md docs/analysis/concepts/rjm/safe-append-tally.md docs/analysis/concepts/rjm/k3.md docs/analysis/concepts/rjm/vendored-test.md docs/analysis/concepts/rjm/run-vendored-suite.md docs/analysis/concepts/rjm/k4.md docs/analysis/concepts/rjm/verdicts-match.md docs/analysis/concepts/rjm/canonical-verdict.md docs/analysis/concepts/rjm/k1.md docs/analysis/concepts/rjm/rollover-window.md docs/analysis/concepts/rjm/secret-redaction.md` (exit code 0, 30 PASS, 0 FAIL, 0 MISSING source across 30 cards)

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied (package-prefixed before decision; canonical after)

## Cross-unit notes
- Unit cc-rjm-305 completes 30 concept cards across maintenance reporting, MCP CLI wrapping, context retrieval metrics, secure metrics writing, and REQ-008-09 kill-criteria telemetry:
  1. Git worktree garbage collection report helpers (`keep-admin-only`, `append-decision-group`, `append-disposition-group`, `append-apply-result`) from `scripts/maintenance/worktree_report.py`.
  2. Model Context Protocol CLI wrapper helpers and interfaces (`mcporter`, `mcpclierror`, `mcp-call`, `mcp-list-tools`, `validate-arg-value`, `find-mcporter`) from `scripts/mcp_cli/__init__.py` and `scripts/mcp_cli/wrapper.py`.
  3. Session log metrics discovery and parser helpers (`invocationrecord`, `find-session-logs`, `extract-context-retrieval-data`) from `scripts/measure_context_retrieval_metrics.py`.
  4. Hardened metrics append file writer helpers and vulnerability mitigations (`cwe-367`, `metricswriteerror`, `reject-symlink`, `resolve-target-parent`, `anchor-target`, `write-all`, `resolve-under`, `safe-append-tally`) from `scripts/metrics_writer.py` and `scripts/validation/portability_baseline_write.py`.
  5. REQ-008-09 review convergence kill criteria gates, tests, helpers, and telemetry structures (`k3`, `vendored-test`, `run-vendored-suite`, `k4`, `verdicts-match`, `canonical-verdict`, `k1`, `rollover-window`, `secret-redaction`) from `scripts/metrics/check_vendored_install.py`, `scripts/metrics/emit_verdict_mismatch.py`, and `scripts/metrics/kill_criteria.py`.
- Identified identifiers, helper functions, and constants were classified as `kind: name-only` per D-023 with appropriate rationale in Design notes.
- Kill criteria K1, K3, and K4 were classified as `kind: gate` with full lifecycle attributes mapped to REQ-008-09 and `kill-criteria`.
- All 37 occurrences recorded in `facts/cc-rjm-305.txt` were mapped into the respective "Where used" tables.
- Inventory defects were faithfully propagated to `Implementation status` (`defects: orphan` from `scripts/mcp_cli/__init__.py`, `defects: doc-drift` from `scripts/measure_context_retrieval_metrics.py`, `defects: script-bug` from `scripts/metrics/check_vendored_install.py`, and `clean` for defect-free source files).
- All 30 cards pass byte-exact verification via `bun scripts/synthesis/quote-check.ts` (30 PASS, 0 FAIL, 0 MISSING source).

## Blocked or uncertain
none

## Time and size
Approximate tokens of source read: ~28,000 tokens across 9 source files and 9 inventory cards.
Approximate tokens of output written: ~12,500 tokens across 30 concept cards and 1 unit report.
