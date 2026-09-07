---
unit: cc-rjm-272
phase: 2
package: rjm
session: 018
subagent_returned: complete
---

# Unit cc-rjm-272

## Files assigned
- [x] sources/rjm/scripts/eval/README.md
- [x] sources/rjm/scripts/eval/_model_sweep_core.py
- [x] sources/rjm/scripts/eval/_oneshot_bench_core.py
- [x] sources/rjm/scripts/eval/_optimizer_adapters.py
- [x] sources/rjm/scripts/eval/eval-model-sweep.py
- [x] sources/rjm/scripts/eval/eval-oneshot-vs-shipped.py
- [x] sources/rjm/scripts/eval/eval-rule-activation.py
- [x] sources/rjm/scripts/eval/eval-skill-overlap.py
- [x] sources/rjm/scripts/eval/eval_skill_router.py

## Outputs produced
- docs/analysis/concepts/rjm/cohen-s-d-z.md (1476 bytes)
- docs/analysis/concepts/rjm/drop-pin.md (1708 bytes)
- docs/analysis/concepts/rjm/default-min-effect.md (1090 bytes)
- docs/analysis/concepts/rjm/default-seed.md (1214 bytes)
- docs/analysis/concepts/rjm/min-shared-fixtures.md (929 bytes)
- docs/analysis/concepts/rjm/decision-keep.md (913 bytes)
- docs/analysis/concepts/rjm/decision-drop.md (911 bytes)
- docs/analysis/concepts/rjm/sweepdecisionerror.md (1124 bytes)
- docs/analysis/concepts/rjm/modelresult.md (1025 bytes)
- docs/analysis/concepts/rjm/sweepdecision.md (879 bytes)
- docs/analysis/concepts/rjm/check-comparable.md (919 bytes)
- docs/analysis/concepts/rjm/refuse-degraded-results.md (944 bytes)
- docs/analysis/concepts/rjm/common-fixture-ids.md (931 bytes)
- docs/analysis/concepts/rjm/mean-recall-on.md (911 bytes)
- docs/analysis/concepts/rjm/cohens-d.md (915 bytes)
- docs/analysis/concepts/rjm/rank.md (887 bytes)
- docs/analysis/concepts/rjm/one-shot-vs-shipped-benchmark.md (1667 bytes)
- docs/analysis/concepts/rjm/llm-judge.md (1574 bytes)
- docs/analysis/concepts/rjm/grades.md (884 bytes)
- docs/analysis/concepts/rjm/required-fixture-fields.md (1064 bytes)
- docs/analysis/concepts/rjm/load-fixture.md (887 bytes)
- docs/analysis/concepts/rjm/select-hardest.md (1092 bytes)
- docs/analysis/concepts/rjm/build-agent-prompt.md (1089 bytes)
- docs/analysis/concepts/rjm/build-judge-prompt.md (1124 bytes)
- docs/analysis/concepts/rjm/judgeverdict.md (1027 bytes)
- docs/analysis/concepts/rjm/fixtureresult.md (1003 bytes)
- docs/analysis/concepts/rjm/benchmarksummary.md (1055 bytes)
- docs/analysis/concepts/rjm/task-id.md (931 bytes)
- docs/analysis/concepts/rjm/held-out-gate.md (1451 bytes)
- docs/analysis/concepts/rjm/optimizer-core-score.md (950 bytes)
- docs/analysis/concepts/rjm/_units/cc-rjm-272.md (3818 bytes)

## Scripts executed
- `bun scripts/synthesis/quote-check.ts docs/analysis/concepts/rjm/cohen-s-d-z.md ...` — exit code 0 (30 PASS, 0 FAIL)

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied (package-prefixed before decision; canonical after)

## Cross-unit notes
- `cohen-s-d-z.md` was already present on disk from earlier execution and verified to pass `quote-check.ts` with 0 FAIL; it was retained unchanged.
- The 29 newly generated concept cards cover evaluation model sweeps (`_model_sweep_core.py`), one-shot bug fix benchmarks (`_oneshot_bench_core.py`), optimizer adapters (`_optimizer_adapters.py`), and associated evaluation CLI drivers.
- Concepts span 4 lifecycle concepts (`drop-pin` [gate], `one-shot-vs-shipped-benchmark` [technique], `llm-judge` [technique], `held-out-gate` [gate]) and 26 name-only concepts (evaluation constants, dataclass schemas, validation functions, and dictionary keys).

## Blocked or uncertain
none

## Time and size
Approx 315,000 bytes (~75,000 tokens) of source read; approx 34,000 bytes (~8,500 tokens) of output written.
