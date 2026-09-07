---
unit: cc-rjm-310
phase: 2
package: rjm
session: 018
subagent_returned: complete
---

# Unit cc-rjm-310

## Files assigned
- [x] sources/rjm/scripts/README.md
- [x] sources/rjm/scripts/quality_gate/external_signal_gate.py
- [x] sources/rjm/scripts/quality_gate/path_utils.py
- [x] sources/rjm/scripts/quality_gate/resolve_pytest_signal.py
- [x] sources/rjm/scripts/quality_gate/run_pytest.py
- [x] sources/rjm/scripts/quality_gate/spec_external_signal_gate.py

## Outputs produced
- docs/analysis/concepts/rjm/pytest-signal.md (950 bytes)
- docs/analysis/concepts/rjm/agent-signal.md (1130 bytes)
- docs/analysis/concepts/rjm/build-signals.md (1140 bytes)
- docs/analysis/concepts/rjm/repository-root.md (894 bytes)
- docs/analysis/concepts/rjm/resolve-workspace-path.md (943 bytes)
- docs/analysis/concepts/rjm/shadow-pytest-sample.md (951 bytes)
- docs/analysis/concepts/rjm/job.md (855 bytes)
- docs/analysis/concepts/rjm/status-pass.md (888 bytes)
- docs/analysis/concepts/rjm/status-fail.md (884 bytes)
- docs/analysis/concepts/rjm/status-skipped.md (903 bytes)
- docs/analysis/concepts/rjm/status-pending.md (899 bytes)
- docs/analysis/concepts/rjm/status-stale.md (932 bytes)
- docs/analysis/concepts/rjm/status-cancelled.md (922 bytes)
- docs/analysis/concepts/rjm/status-unclassified.md (975 bytes)
- docs/analysis/concepts/rjm/agree.md (885 bytes)
- docs/analysis/concepts/rjm/disagree.md (910 bytes)
- docs/analysis/concepts/rjm/uncompared.md (916 bytes)
- docs/analysis/concepts/rjm/kind-executor.md (889 bytes)
- docs/analysis/concepts/rjm/kind-pass-through.md (954 bytes)
- docs/analysis/concepts/rjm/pytest-status.md (900 bytes)
- docs/analysis/concepts/rjm/pytest-summary.md (850 bytes)
- docs/analysis/concepts/rjm/summary-line.md (891 bytes)
- docs/analysis/concepts/rjm/build-pytest-command.md (919 bytes)
- docs/analysis/concepts/rjm/environment-ready.md (883 bytes)
- docs/analysis/concepts/rjm/run-pytest.md (953 bytes)
- docs/analysis/concepts/rjm/acceptance-verdict.md (969 bytes)
- docs/analysis/concepts/rjm/acceptance-signal.md (964 bytes)
- docs/analysis/concepts/rjm/script-organization.md (874 bytes)
- docs/analysis/concepts/rjm/adr-019.md (915 bytes)
- docs/analysis/concepts/rjm/pr-and-code-quality.md (884 bytes)
- docs/analysis/concepts/rjm/_units/cc-rjm-310.md (this report)

## Scripts executed
- bun scripts/synthesis/quote-check.ts docs/analysis/concepts/rjm/pytest-signal.md (exit code 0)
- bun scripts/synthesis/quote-check.ts docs/analysis/concepts/rjm/agent-signal.md (exit code 0)
- bun scripts/synthesis/quote-check.ts docs/analysis/concepts/rjm/shadow-pytest-sample.md (exit code 0)
- bun scripts/synthesis/quote-check.ts docs/analysis/concepts/rjm/status-*.md docs/analysis/concepts/rjm/agree.md docs/analysis/concepts/rjm/disagree.md docs/analysis/concepts/rjm/uncompared.md docs/analysis/concepts/rjm/kind-*.md (exit code 0)
- bun scripts/synthesis/quote-check.ts docs/analysis/concepts/rjm/pytest-status.md (exit code 0)
- bun scripts/synthesis/quote-check.ts docs/analysis/concepts/rjm/pytest-summary.md (exit code 0)
- bun scripts/synthesis/quote-check.ts <all 30 cards> (exit code 0)

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied (package-prefixed before decision; canonical after)

## Cross-unit notes
- All 30 concepts in this unit are function identifiers, class identifiers, status constant tokens, section headings, or document identifiers extracted from quality gate scripts and scripts/README.md. They have been classified as `kind: name-only` per D-023.
- `scripts/quality_gate/resolve_pytest_signal.py` implements shadow observation for `pytest.yml` CI runs; its status constants and job classification kinds operate as internal state machine symbols.

## Blocked or uncertain
none

## Time and size
Approximate tokens of source read: ~12,000 tokens (48,052 bytes).
Approximate tokens of output written: ~7,500 tokens (30 concept cards totaling 27,822 bytes + report).
