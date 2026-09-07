---
unit: cc-rjm-288
phase: 2
package: rjm
session: 018
subagent_returned: complete
---

# Unit cc-rjm-288

## Files assigned
- [x] sources/rjm/scripts/eval/README.md
- [x] sources/rjm/scripts/eval/software_engineering_library_activation_ci.py
- [x] sources/rjm/scripts/eval/software_engineering_library_activation_gate.py
- [x] sources/rjm/scripts/llm_classification/cache.py
- [x] docs/analysis/inventory/rjm/scripts-eval-readme-md.md
- [x] docs/analysis/inventory/rjm/scripts-eval-software-engineering-library-activation-ci-py.md
- [x] docs/analysis/inventory/rjm/scripts-eval-software-engineering-library-activation-gate-py.md
- [x] docs/analysis/inventory/rjm/scripts-llm-classification-cache-py.md

## Outputs produced
- docs/analysis/concepts/rjm/opt.md (1154 bytes)
- docs/analysis/concepts/rjm/sel.md (1212 bytes)
- docs/analysis/concepts/rjm/budget.md (1172 bytes)
- docs/analysis/concepts/rjm/buffer-check.md (1161 bytes)
- docs/analysis/concepts/rjm/buffer-add.md (1161 bytes)
- docs/analysis/concepts/rjm/optimizer-results-1.md (857 bytes)
- docs/analysis/concepts/rjm/on-skip.md (932 bytes)
- docs/analysis/concepts/rjm/judge-repeats.md (931 bytes)
- docs/analysis/concepts/rjm/rule-reduce.md (958 bytes)
- docs/analysis/concepts/rjm/fingerprint.md (1436 bytes)
- docs/analysis/concepts/rjm/discordant-gain.md (1191 bytes)
- docs/analysis/concepts/rjm/discordant-loss.md (1199 bytes)
- docs/analysis/concepts/rjm/p-value.md (1175 bytes)
- docs/analysis/concepts/rjm/max-p.md (905 bytes)
- docs/analysis/concepts/rjm/consultations.md (1141 bytes)
- docs/analysis/concepts/rjm/sel-consultations.md (1202 bytes)
- docs/analysis/concepts/rjm/activation-gate.md (1256 bytes)
- docs/analysis/concepts/rjm/philosophy-of-software-design.md (1457 bytes)
- docs/analysis/concepts/rjm/results-path.md (937 bytes)
- docs/analysis/concepts/rjm/state-path.md (942 bytes)
- docs/analysis/concepts/rjm/threshold-report-path.md (950 bytes)
- docs/analysis/concepts/rjm/owner-label.md (878 bytes)
- docs/analysis/concepts/rjm/automated-label.md (898 bytes)
- docs/analysis/concepts/rjm/live-eval.md (1149 bytes)
- docs/analysis/concepts/rjm/alert-issue.md (1200 bytes)
- docs/analysis/concepts/rjm/restoration-pr.md (1412 bytes)
- docs/analysis/concepts/rjm/always-on-rule-surface.md (1324 bytes)
- docs/analysis/concepts/rjm/rollback-trigger.md (1172 bytes)
- docs/analysis/concepts/rjm/moved-reference-ids.md (959 bytes)
- docs/analysis/concepts/rjm/agent-qa.md (1138 bytes)
- docs/analysis/concepts/rjm/_units/cc-rjm-288.md (this file)

## Scripts executed
- `bun scripts/synthesis/quote-check.ts docs/analysis/concepts/rjm/opt.md docs/analysis/concepts/rjm/sel.md docs/analysis/concepts/rjm/budget.md docs/analysis/concepts/rjm/buffer-check.md docs/analysis/concepts/rjm/buffer-add.md docs/analysis/concepts/rjm/optimizer-results-1.md docs/analysis/concepts/rjm/on-skip.md docs/analysis/concepts/rjm/judge-repeats.md docs/analysis/concepts/rjm/rule-reduce.md docs/analysis/concepts/rjm/fingerprint.md docs/analysis/concepts/rjm/discordant-gain.md docs/analysis/concepts/rjm/discordant-loss.md docs/analysis/concepts/rjm/p-value.md docs/analysis/concepts/rjm/max-p.md docs/analysis/concepts/rjm/consultations.md docs/analysis/concepts/rjm/sel-consultations.md docs/analysis/concepts/rjm/activation-gate.md docs/analysis/concepts/rjm/philosophy-of-software-design.md docs/analysis/concepts/rjm/results-path.md docs/analysis/concepts/rjm/state-path.md docs/analysis/concepts/rjm/threshold-report-path.md docs/analysis/concepts/rjm/owner-label.md docs/analysis/concepts/rjm/automated-label.md docs/analysis/concepts/rjm/live-eval.md docs/analysis/concepts/rjm/alert-issue.md docs/analysis/concepts/rjm/restoration-pr.md docs/analysis/concepts/rjm/always-on-rule-surface.md docs/analysis/concepts/rjm/rollback-trigger.md docs/analysis/concepts/rjm/moved-reference-ids.md docs/analysis/concepts/rjm/agent-qa.md` (exit code 0, 30 PASS, 0 FAIL, 0 MISSING source across 30 cards)

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied (package-prefixed before decision; canonical after)

## Cross-unit notes
- Unit cc-rjm-288 authors 30 concept cards spanning behavioral evaluation optimization, held-out statistical gating, software engineering library progressive disclosure CI/gating, and classification caching:
  1. Held-out-gated optimization rails (`opt`, `sel`, `budget`, `buffer-check`, `buffer-add`, `consultations`, `sel_consultations`) implementing ADR-087.
  2. Exact McNemar statistical gating metrics and flags (`discordant_gain`, `discordant_loss`, `p_value`, `--max-p`, `--judge-repeats`, `--rule-reduce`, `--on-skip`, `optimizer-results/1`) preventing overfitting on prompt and rule mutations.
  3. Software engineering library activation monitoring and automated rollback gates (`activation gate`, `philosophy-of-software-design`, `live-eval`, `alert-issue`, `restoration PR`, `always-on rule surface`, `rollback-trigger`, `MOVED_REFERENCE_IDS`, `agent-qa`) implementing ADR-088.
  4. CI configuration constants and labels (`RESULTS_PATH`, `STATE_PATH`, `THRESHOLD_REPORT_PATH`, `OWNER_LABEL`, `AUTOMATED_LABEL`) in `software_engineering_library_activation_ci.py`.
  5. Text normalization and hashing (`fingerprint`) across comment classification caching (`cache.py`) and evaluation split verification (`README.md`).
- Concepts representing CLI flags (`--on-skip`, `--judge-repeats`, `--rule-reduce`, `--max-p`), schema identifiers (`optimizer-results/1`), and code constants (`RESULTS_PATH`, `STATE_PATH`, `THRESHOLD_REPORT_PATH`, `OWNER_LABEL`, `AUTOMATED_LABEL`, `MOVED_REFERENCE_IDS`) were classified as `kind: name-only` per D-023.
- All 34 occurrences recorded in `facts/cc-rjm-288.txt` are mapped in the respective Where used tables.
- Inventory defects from citing inventory cards were systematically reflected in `Implementation status` (`clean` for activation CI/gate scripts and cache.py; `defects: missing-path, doc-drift, script-bug` for scripts/eval/README.md).
- All 30 cards pass byte-exact quotation verification with zero FAIL via `bun scripts/synthesis/quote-check.ts`.

## Blocked or uncertain
none

## Time and size
Approximate tokens of source read: ~25,000 tokens across 4 source files and 4 inventory cards.
Approximate tokens of output written: ~12,000 tokens across 30 concept cards and 1 work-unit report.
