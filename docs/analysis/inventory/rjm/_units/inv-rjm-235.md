---
unit: inv-rjm-235
phase: 1
package: rjm
session: 007
subagent_returned: complete
---

# Unit inv-rjm-235

## Files assigned
- [x] /Users/peterkloss/Dev/ACMElabs/brain-v2/sources/rjm/scripts/eval/optimize-artifact.py

## Outputs produced
- docs/analysis/inventory/rjm/scripts-eval-optimize-artifact-py.md (15535 bytes)
- docs/analysis/inventory/rjm/_units/inv-rjm-235.md (2463 bytes)

## Scripts executed
- scripts/eval/optimize-artifact.py, python3 sources/rjm/scripts/eval/optimize-artifact.py budget --step 3 --total 12, 0
- scripts/eval/optimize-artifact.py, python3 sources/rjm/scripts/eval/optimize-artifact.py, 2
- scripts/eval/optimize-artifact.py, python3 sources/rjm/scripts/eval/optimize-artifact.py split --results base.json --seed run-7 --out split.json, 2

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied (package-prefixed before decision; canonical after)

## Cross-unit notes
- `scripts/eval/optimize-artifact.py` is the top-level CLI driver for held-out-gated optimization rails across agents, rules, and hooks. It coordinates with `_optimizer_core.py` (which implements core mathematical algorithms: split_tasks, edit_budget, mcnemar_exact, score, apply_patches, buffer_contains) and `_optimizer_adapters.py` (which adapts upstream scorer outputs from agent evals, rule activation evals, and pytest hook runs).
- Integrates with ADR-035 exit code conventions (0: accept, 1: reject/logic, 2: config/error), ADR-087 requirements (withheld test-set reveals and Bonferroni significance corrections), and file durability patterns (`MoveFileExW` / POSIX `fsync`).
- It enforces strict separation of responsibilities to avoid eval laundering: partitioning tasks into `opt`, `sel` (gating), and `test` (single reveal) groups, verifying corpus integrity across splits and scorer runs, redacting held-out task keys via contextvars, serializing ledger and rejection buffer writes using process-level locks, and enforcing step-dependent cosine-decay edit budgets.

## Blocked or uncertain
none

## Time and size
Approximate source tokens read: ~38,371 tokens (153,486 bytes). Approximate output tokens written: ~4,600 tokens (~18,200 bytes across inventory card and unit report).
