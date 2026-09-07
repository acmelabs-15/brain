---
unit: cc-rjm-283
phase: 2
package: rjm
session: 018
subagent_returned: complete
---

# Unit cc-rjm-283

## Files assigned
- [x] sources/rjm/scripts/eval/README.md
- [x] sources/rjm/scripts/eval/eval-prompt-change.py
- [x] sources/rjm/scripts/eval/eval-reviewer-asymmetry.py
- [x] sources/rjm/scripts/eval/eval-rule-activation.py
- [x] sources/rjm/scripts/eval/examples/example-scenarios.json

## Outputs produced
- docs/analysis/concepts/rjm/prompt-change-evaluator.md (894 bytes)
- docs/analysis/concepts/rjm/security-critical-tier.md (1261 bytes)
- docs/analysis/concepts/rjm/controlled-vocabulary.md (1214 bytes)
- docs/analysis/concepts/rjm/verdict-options.md (1077 bytes)
- docs/analysis/concepts/rjm/check-scenario-pass.md (960 bytes)
- docs/analysis/concepts/rjm/expected-verdict.md (1209 bytes)
- docs/analysis/concepts/rjm/security-runs.md (860 bytes)
- docs/analysis/concepts/rjm/non-gating-criteria.md (924 bytes)
- docs/analysis/concepts/rjm/required-scenario-fields.md (919 bytes)
- docs/analysis/concepts/rjm/optional-scenario-fields.md (918 bytes)
- docs/analysis/concepts/rjm/default-fallback-verdict.md (901 bytes)
- docs/analysis/concepts/rjm/load-scenarios.md (864 bytes)
- docs/analysis/concepts/rjm/load-prompt-from-ref.md (899 bytes)
- docs/analysis/concepts/rjm/load-prompt-from-file.md (849 bytes)
- docs/analysis/concepts/rjm/judge-scenario.md (857 bytes)
- docs/analysis/concepts/rjm/run-scenario-multi.md (875 bytes)
- docs/analysis/concepts/rjm/run-comparison.md (861 bytes)
- docs/analysis/concepts/rjm/is-provider-outage.md (922 bytes)
- docs/analysis/concepts/rjm/expected-reason-contains.md (1091 bytes)
- docs/analysis/concepts/rjm/fisher-s-exact-test.md (1411 bytes)
- docs/analysis/concepts/rjm/two-proportion-z-test.md (1256 bytes)
- docs/analysis/concepts/rjm/default-trials.md (846 bytes)
- docs/analysis/concepts/rjm/alpha.md (816 bytes)
- docs/analysis/concepts/rjm/base-ref.md (846 bytes)
- docs/analysis/concepts/rjm/min-findings-count.md (1092 bytes)
- docs/analysis/concepts/rjm/fishers-exact-one-sided.md (934 bytes)
- docs/analysis/concepts/rjm/two-proportion-z.md (924 bytes)
- docs/analysis/concepts/rjm/cohen-h.md (846 bytes)
- docs/analysis/concepts/rjm/mann-whitney-u.md (919 bytes)
- docs/analysis/concepts/rjm/rule-activation-eval.md (955 bytes)
- docs/analysis/concepts/rjm/_units/cc-rjm-283.md (this report)

## Scripts executed
- scripts/synthesis/quote-check.ts: `bun scripts/synthesis/quote-check.ts <cards 1-30>`, exit code 0 (32 PASS, 0 FAIL)

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied (package-prefixed before decision; canonical after)

## Cross-unit notes
- Several concepts connect directly to ADR-057 prompt behavioral evaluation (`prompt-change-evaluator`, `security-critical-tier`, `non-gating-criteria`, `security-runs`, `expected-verdict`, `verdict-options`) and ADR-058 transport symmetry.
- `eval-reviewer-asymmetry.py` statistical testing methods (`fisher-s-exact-test`, `two-proportion-z-test`, `cohen-h`, `mann-whitney-u`) provide self-contained implementations using standard library `math` routines, paralleling `mcnemar-s-exact-test` from unit `cc-rjm-257`.
- Schema fields `expected_verdict`, `verdict_options`, `expected_reason_contains`, and `min_findings_count` bridge multiple evaluation scripts and fixture formats across units.

## Blocked or uncertain
none

## Time and size
Approximate tokens of source read: ~62,200 tokens (248,774 bytes across 5 assigned files).
Approximate tokens of output written: ~7,400 tokens (30 concept cards + unit report).
