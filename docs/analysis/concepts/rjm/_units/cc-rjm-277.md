---
unit: cc-rjm-277
phase: 2
package: rjm
session: 018
subagent_returned: complete
---

# Unit cc-rjm-277

## Files assigned
- [x] sources/rjm/scripts/eval/_run_rollup_core.py
- [x] sources/rjm/scripts/eval/_runtime_output.py
- [x] sources/rjm/scripts/eval/eval_run_rollup.py
- [x] sources/rjm/scripts/eval/eval_runtime_parity.py
- [x] sources/rjm/scripts/github_core/api.py
- [x] docs/analysis/inventory/rjm/scripts-eval--run-rollup-core-py.md
- [x] docs/analysis/inventory/rjm/scripts-github-core-api-py.md
- [x] docs/analysis/inventory/rjm/scripts-eval-eval-run-rollup-py.md
- [x] docs/analysis/inventory/rjm/scripts-eval--runtime-output-py.md
- [x] docs/analysis/inventory/rjm/scripts-eval-eval-runtime-parity-py.md

## Outputs produced
- docs/analysis/concepts/rjm/issue-2787.md (812 bytes)
- docs/analysis/concepts/rjm/release-it-md.md (1312 bytes)
- docs/analysis/concepts/rjm/default-glob.md (843 bytes)
- docs/analysis/concepts/rjm/default-sigma.md (814 bytes)
- docs/analysis/concepts/rjm/cost-usd.md (823 bytes)
- docs/analysis/concepts/rjm/runtally.md (894 bytes)
- docs/analysis/concepts/rjm/agentrollup.md (925 bytes)
- docs/analysis/concepts/rjm/driftflag.md (920 bytes)
- docs/analysis/concepts/rjm/rollupresult.md (940 bytes)
- docs/analysis/concepts/rjm/agent-from-path.md (831 bytes)
- docs/analysis/concepts/rjm/run-id-from-path.md (793 bytes)
- docs/analysis/concepts/rjm/coercedrecord.md (812 bytes)
- docs/analysis/concepts/rjm/coerce-record.md (870 bytes)
- docs/analysis/concepts/rjm/iter-tallies.md (854 bytes)
- docs/analysis/concepts/rjm/build-agent-rollups.md (879 bytes)
- docs/analysis/concepts/rjm/drift-flags.md (804 bytes)
- docs/analysis/concepts/rjm/rollup.md (773 bytes)
- docs/analysis/concepts/rjm/runtime-parity.md (1548 bytes)
- docs/analysis/concepts/rjm/runtimeoutputerror.md (851 bytes)
- docs/analysis/concepts/rjm/question-tools.md (879 bytes)
- docs/analysis/concepts/rjm/auth-hints.md (816 bytes)
- docs/analysis/concepts/rjm/claude-result.md (813 bytes)
- docs/analysis/concepts/rjm/copilot-result.md (839 bytes)
- docs/analysis/concepts/rjm/failure-code.md (841 bytes)
- docs/analysis/concepts/rjm/runtime-error.md (785 bytes)
- docs/analysis/concepts/rjm/comparison-verdict.md (853 bytes)
- docs/analysis/concepts/rjm/fail-model-mismatch.md (869 bytes)
- docs/analysis/concepts/rjm/fail-question-mechanism-mismatch.md (955 bytes)
- docs/analysis/concepts/rjm/accumulate-verdict.md (877 bytes)
- docs/analysis/concepts/rjm/redacted-argv.md (862 bytes)
- docs/analysis/concepts/rjm/_units/cc-rjm-277.md (this file)

## Scripts executed
- `bun scripts/synthesis/quote-check.ts docs/analysis/concepts/rjm/issue-2787.md docs/analysis/concepts/rjm/release-it-md.md docs/analysis/concepts/rjm/default-glob.md docs/analysis/concepts/rjm/default-sigma.md docs/analysis/concepts/rjm/cost-usd.md docs/analysis/concepts/rjm/runtally.md docs/analysis/concepts/rjm/agentrollup.md docs/analysis/concepts/rjm/driftflag.md docs/analysis/concepts/rjm/rollupresult.md docs/analysis/concepts/rjm/agent-from-path.md docs/analysis/concepts/rjm/run-id-from-path.md docs/analysis/concepts/rjm/coercedrecord.md docs/analysis/concepts/rjm/coerce-record.md docs/analysis/concepts/rjm/iter-tallies.md docs/analysis/concepts/rjm/build-agent-rollups.md docs/analysis/concepts/rjm/drift-flags.md docs/analysis/concepts/rjm/rollup.md docs/analysis/concepts/rjm/runtime-parity.md docs/analysis/concepts/rjm/runtimeoutputerror.md docs/analysis/concepts/rjm/question-tools.md docs/analysis/concepts/rjm/auth-hints.md docs/analysis/concepts/rjm/claude-result.md docs/analysis/concepts/rjm/copilot-result.md docs/analysis/concepts/rjm/failure-code.md docs/analysis/concepts/rjm/runtime-error.md docs/analysis/concepts/rjm/comparison-verdict.md docs/analysis/concepts/rjm/fail-model-mismatch.md docs/analysis/concepts/rjm/fail-question-mechanism-mismatch.md docs/analysis/concepts/rjm/accumulate-verdict.md docs/analysis/concepts/rjm/redacted-argv.md` (exit code 0: 30 PASS, 0 FAIL, 0 MISSING source across 30 cards)

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied (package-prefixed before decision; canonical after)

## Cross-unit notes
- Unit cc-rjm-277 covers 30 concept cards across 36 occurrences in package rjm:
  1. Eval run rollup data structures, models, and calculation algorithms (`issue-2787`, `default-glob`, `default-sigma`, `cost-usd`, `runtally`, `agentrollup`, `driftflag`, `rollupresult`, `agent-from-path`, `run-id-from-path`, `coercedrecord`, `coerce-record`, `iter-tallies`, `build-agent-rollups`, `drift-flags`, `rollup`) from `scripts/eval/_run_rollup_core.py` and `scripts/eval/eval_run_rollup.py`.
  2. Cross-cutting resilience reference (`release-it-md`) cited across both `scripts/eval/_run_rollup_core.py` (graceful degradation during evaluation log parsing) and `scripts/github_core/api.py` (bounded retry and exponential backoff for external network calls).
  3. Runtime parity evaluation subsystem (`runtime-parity`, `runtimeoutputerror`, `question-tools`, `auth-hints`, `claude-result`, `copilot-result`, `failure-code`, `runtime-error`, `comparison-verdict`, `fail-model-mismatch`, `fail-question-mechanism-mismatch`, `accumulate-verdict`, `redacted-argv`) from `scripts/eval/_runtime_output.py` and `scripts/eval/eval_runtime_parity.py`.
- Concepts are mapped according to D-023: identifiers, constants, function names, types, and references are captured as `kind: name-only`, `kind: reference`, or `kind: technique` (for `runtime-parity`).
- Defect statuses reflect inventory records: `clean` for rollup and output parsing helpers, `defects: exit-code-mismatch, doc-drift` for `release-it-md` via `scripts/github_core/api.py`, and `defects: script-bug` for `runtime-parity` via `eval_runtime_parity.py`.
- All 30 cards pass byte-exact verification with `bun scripts/synthesis/quote-check.ts` (30 PASS, 0 FAIL).

## Blocked or uncertain
none

## Time and size
Approximate tokens of source read: ~23,000 tokens across 5 source files and 5 citing inventory cards.
Approximate tokens of output written: ~12,000 tokens across 30 concept cards and 1 unit report.
