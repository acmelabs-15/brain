---
unit: inv-rjm-229
phase: 1
package: rjm
session: 007
subagent_returned: complete
---

# Unit inv-rjm-229

## Files assigned
- [x] /Users/peterkloss/Dev/ACMElabs/brain-v2/sources/rjm/scripts/eval/eval-model-panel.py
- [x] /Users/peterkloss/Dev/ACMElabs/brain-v2/sources/rjm/scripts/eval/eval-model-sweep.py
- [x] /Users/peterkloss/Dev/ACMElabs/brain-v2/sources/rjm/scripts/eval/eval-oneshot-vs-shipped.py

## Outputs produced
- docs/analysis/inventory/rjm/scripts-eval-eval-model-panel-py.md (9034 bytes)
- docs/analysis/inventory/rjm/scripts-eval-eval-model-sweep-py.md (11152 bytes)
- docs/analysis/inventory/rjm/scripts-eval-eval-oneshot-vs-shipped-py.md (9864 bytes)
- docs/analysis/inventory/rjm/_units/inv-rjm-229.md (3974 bytes)

## Scripts executed
- scripts/eval/eval-model-panel.py: `python3 sources/rjm/scripts/eval/eval-model-panel.py --agents architect reviewer --dry-run` (exit 0)
- scripts/eval/eval-model-panel.py: `python3 sources/rjm/scripts/eval/eval-model-panel.py --agents architect --n-runs 0` (exit 2)
- scripts/eval/eval-model-sweep.py: `python3 scripts/eval/eval-model-sweep.py --agent security --fixtures tests/evals/skills/security --models claude-sonnet-4-6,claude-opus-4-6 --dry-run` (exit 2)
- scripts/eval/eval-model-sweep.py: `python3 sources/rjm/scripts/eval/eval-model-sweep.py --agent security --fixtures sources/rjm/evals/security-spike/fixtures --models claude-sonnet-4-6,claude-opus-4-6 --dry-run` (exit 0)
- scripts/eval/eval-oneshot-vs-shipped.py: `python3 sources/rjm/scripts/eval/eval-oneshot-vs-shipped.py --hardest-n 2 --dry-run` (exit 0)
- scripts/eval/eval-oneshot-vs-shipped.py: `python3 scripts/eval/eval-oneshot-vs-shipped.py --fixtures non_existent_dir` (exit 2)
- scripts/eval/eval-oneshot-vs-shipped.py: `env -u ANTHROPIC_API_KEY python3 scripts/eval/eval-oneshot-vs-shipped.py` (exit 2)
- Unit test suite: `uv run pytest tests/eval/test_eval_model_panel.py tests/eval/test_eval_model_sweep_cli.py tests/eval/test_eval_oneshot_vs_shipped.py` (exit 0, 89 passed)

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied (package-prefixed before decision; canonical after)

## Cross-unit notes
- All three scripts in this unit are evaluation orchestrators under `scripts/eval/` that wrap or complement core evaluation algorithms:
  - `eval-model-panel.py` wraps `eval-agent-vs-baseline.py` and delegates degradation analysis to `_model_panel_core.py` (inv-rjm-223).
  - `eval-model-sweep.py` wraps `eval-agent-vs-baseline.py` and delegates statistical decision logic (`KEEP_PIN` / `DROP_PIN`) to `_model_sweep_core.py` (inv-rjm-224). It enforces the pricing rate requirement from `_eval_common.py` (`MODEL_PRICING_RATES_USD_PER_1K_TOKENS`, inv-rjm-221).
  - `eval-oneshot-vs-shipped.py` owns the API and CLI boundary for the one-shot-vs-shipped benchmark, delegating fixture grading logic to `_oneshot_bench_core.py` (inv-rjm-225).
- Defect identified in `eval-model-sweep.py:28`: The CLI docstring gives a usage example with `--fixtures tests/evals/skills/security`, which does not exist in the repository; the correct path is `evals/security-spike/fixtures` as documented in `scripts/eval/README.md:397`. Running the docstring's exact example fails with exit 2 (`error: fixtures path not found: tests/evals/skills/security`).
- Defect identified in `test_eval_oneshot_vs_shipped.py:196`: `test_load_api_key_failure_exits_external` is misnamed relative to its assertion `assert code == cli.EXIT_CONFIG` (it tests that missing API keys exit 2 `EXIT_CONFIG`, not exit 3 `EXIT_EXTERNAL`).

## Blocked or uncertain
none

## Time and size
Source read: 42,883 bytes (~10,720 tokens across 3 files). Output written: 34,024 bytes (~8,506 tokens across 4 files).
