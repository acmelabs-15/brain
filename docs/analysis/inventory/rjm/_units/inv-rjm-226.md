---
unit: inv-rjm-226
phase: 1
package: rjm
session: 007
subagent_returned: complete
---

# Unit inv-rjm-226

## Files assigned
- [x] /Users/peterkloss/Dev/ACMElabs/brain-v2/sources/rjm/scripts/eval/eval-agent-vs-baseline.py (45289 bytes, 1214 lines)

## Outputs produced
- docs/analysis/inventory/rjm/scripts-eval-eval-agent-vs-baseline-py.md (16376 bytes)

## Scripts executed
- scripts/eval/eval-agent-vs-baseline.py: `python3 scripts/eval/eval-agent-vs-baseline.py --agent analyst --fixtures evals/analyst-spike/fixtures --dry-run` (exit code: 0)
- scripts/eval/eval-agent-vs-baseline.py: `python3 scripts/eval/eval-agent-vs-baseline.py --agent security --fixtures evals/security-spike/fixtures --dry-run` (exit code: 0)
- scripts/eval/eval-agent-vs-baseline.py: `python3 scripts/eval/eval-agent-vs-baseline.py --agent security --fixtures evals/security-spike/fixtures --include-skill --dry-run` (exit code: 0)
- scripts/eval/eval-agent-vs-baseline.py: `env -u ANTHROPIC_API_KEY python3 scripts/eval/eval-agent-vs-baseline.py --agent security --fixtures evals/security-spike/fixtures --run-id test-auth-check` (exit code: 4)
- scripts/eval/eval-agent-vs-baseline.py: `python3 scripts/eval/eval-agent-vs-baseline.py --agent security --fixtures nonexistent --dry-run` (exit code: 2)
- tests/evals/test_eval_agent_vs_baseline.py: `uv run pytest tests/evals/test_eval_agent_vs_baseline.py` (265 passed, exit code: 0)
- tests/evals/test_form_factor_eval.py: `uv run pytest tests/evals/test_form_factor_eval.py` (44 passed, exit code: 0)

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied (package-prefixed before decision; canonical after)

## Cross-unit notes
- `scripts/eval/eval-agent-vs-baseline.py` is the foundational single-model evaluator for the rjm evaluation harness (designed in DESIGN-004, specified in REQ-004, implemented under TASK-004, codified in ADR-058 and ADR-075).
- It is invoked by multiple downstream evaluation orchestrators and diagnostic scripts: `scripts/eval/eval-model-panel.py` (unit `inv-rjm-227`), `scripts/eval/eval-model-sweep.py` (unit `inv-rjm-228`), and `evals/analyst-spike/README.md`.
- It relies directly on internal evaluation library modules in `scripts/eval/`: `_eval_agent_types.py`, `_eval_api_adapter.py`, `_eval_common.py`, `_plan_runner.py`, `_report_aggregator.py`, `_report_writer.py`, `_run_persistence.py`, and `_scoring_engine.py`.
- Form-factor evaluation (`--include-skill` and `--skill-path`) was added in Issue #1875 to compare inline skills against subagent architectures using identical frontmatter-stripped prompt bodies (`_strip_frontmatter`) and the unified verdict vocabulary (`IDENTIFY`, `OK`, `ESCALATE`).

## Blocked or uncertain
none

## Time and size
- Approximate tokens of source read: ~11,500 tokens (45,289 bytes of Python source)
- Approximate tokens of output written: ~3,200 tokens
