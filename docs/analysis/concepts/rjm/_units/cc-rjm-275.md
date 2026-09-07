---
unit: cc-rjm-275
phase: 2
package: rjm
session: 018
subagent_returned: complete
---

# Unit cc-rjm-275

## Files assigned
[x] sources/rjm/scripts/eval/_pr_churn.py
[x] sources/rjm/scripts/eval/_providers.py
[x] sources/rjm/scripts/eval/_report_aggregator.py
[x] sources/rjm/scripts/eval/_report_writer.py
[x] sources/rjm/scripts/eval/analyze-pr-churn.py
[x] sources/rjm/scripts/eval/eval-agent-vs-baseline.py
[x] docs/analysis/inventory/rjm/scripts-eval--pr-churn-py.md
[x] docs/analysis/inventory/rjm/scripts-eval-analyze-pr-churn-py.md
[x] docs/analysis/inventory/rjm/scripts-eval--providers-py.md
[x] docs/analysis/inventory/rjm/scripts-eval--report-aggregator-py.md
[x] docs/analysis/inventory/rjm/scripts-eval--report-writer-py.md
[x] docs/analysis/inventory/rjm/scripts-eval-eval-agent-vs-baseline-py.md

## Outputs produced
docs/analysis/concepts/rjm/churn-buckets.md — 901 bytes
docs/analysis/concepts/rjm/thrash-fraction.md — 1053 bytes
docs/analysis/concepts/rjm/evalprovider.md — 828 bytes
docs/analysis/concepts/rjm/cwe-22-defense.md — 947 bytes
docs/analysis/concepts/rjm/reasoning-model-re.md — 956 bytes
docs/analysis/concepts/rjm/openaicompatibleprovider.md — 922 bytes
docs/analysis/concepts/rjm/anthropicsdkprovider.md — 893 bytes
docs/analysis/concepts/rjm/registry.md — 848 bytes
docs/analysis/concepts/rjm/default-anthropic-names.md — 954 bytes
docs/analysis/concepts/rjm/resolve-provider.md — 901 bytes
docs/analysis/concepts/rjm/paired-bootstrap.md — 1245 bytes
docs/analysis/concepts/rjm/bootstrap-iterations.md — 927 bytes
docs/analysis/concepts/rjm/flaky-fixture-halt-fraction.md — 974 bytes
docs/analysis/concepts/rjm/flaky-halt-small-n-floor.md — 945 bytes
docs/analysis/concepts/rjm/contingency-persistent-threshold.md — 984 bytes
docs/analysis/concepts/rjm/headline-variants.md — 944 bytes
docs/analysis/concepts/rjm/emptyrunerror.md — 1059 bytes
docs/analysis/concepts/rjm/aggregateresult.md — 1398 bytes
docs/analysis/concepts/rjm/pairwise-bootstrap-ci.md — 927 bytes
docs/analysis/concepts/rjm/formfactorverdict.md — 927 bytes
docs/analysis/concepts/rjm/form-factor-equivalence-ci-half-width-limit.md — 1067 bytes
docs/analysis/concepts/rjm/formfactorcomparison.md — 1385 bytes
docs/analysis/concepts/rjm/compute-form-factor.md — 1091 bytes
docs/analysis/concepts/rjm/atomic-write.md — 892 bytes
docs/analysis/concepts/rjm/format-pct.md — 841 bytes
docs/analysis/concepts/rjm/format-pp.md — 858 bytes
docs/analysis/concepts/rjm/build-report-json.md — 894 bytes
docs/analysis/concepts/rjm/report-fixture-ids.md — 878 bytes
docs/analysis/concepts/rjm/form-factor-payload.md — 944 bytes
docs/analysis/concepts/rjm/render-summary-table.md — 906 bytes

## Scripts executed
scripts/synthesis/quote-check.ts, `bun scripts/synthesis/quote-check.ts <30 cards>`, 0
scripts/synthesis/coverage.ts, `bun scripts/synthesis/coverage.ts --quiet`, 1 (expected in multi-worker Phase 2)

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied (package-prefixed before decision; canonical after)

## Cross-unit notes
Concepts like EmptyRunError and compute_form_factor are imported and consumed by scripts/eval/eval-agent-vs-baseline.py (inv-rjm-226), which was analyzed under unit inv-rjm-226. Defect classes `exit-code-mismatch` and `script-bug` noted in inv-rjm-226 were propagated into the implementation status of those concepts.

## Blocked or uncertain
none

## Time and size
Approximate tokens of source read: ~28,000 tokens across 6 source files and 6 inventory cards; approximate tokens of output written: ~7,500 tokens across 30 concept cards and this report.
