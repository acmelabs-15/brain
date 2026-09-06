---
unit: inv-rjm-237
phase: 1
package: rjm
session: 007
subagent_returned: complete
---

# Unit inv-rjm-237

## Files assigned
- [x] sources/rjm/scripts/eval/README.md (81217 bytes, 1396 lines)

## Outputs produced
- docs/analysis/inventory/rjm/scripts-eval-readme-md.md (27434 bytes)
- docs/analysis/inventory/rjm/_units/inv-rjm-237.md (3100 bytes)

## Scripts executed
- scripts/eval/README.md: `sh -c 'test -x sources/rjm/scripts/eval/README.md'` (exit code: 1; non-executable markdown document classified as `type: script` in manifest)
- scripts/eval/eval-suite.py: `python3 scripts/eval/eval-suite.py --dry-run` (exit code: 0)
- scripts/eval/eval-prompt-change.py: `python3 scripts/eval/eval-prompt-change.py --prompt .claude/commands/research.md --scenarios tests/evals/research-scenarios.json --base-ref main --dry-run` (exit code: 2; defect: missing-path `tests/evals/research-scenarios.json`)
- scripts/eval/eval-agents.py: `python3 scripts/eval/eval-agents.py --agent analyst --dry-run` (exit code: 0)
- scripts/eval/eval-knowledge-integration.py: `python3 scripts/eval/eval-knowledge-integration.py --skill cva-analysis --dry-run` (exit code: 1; defect: script-bug where dry-run evaluates placeholder 0.0 scores against kill-gate threshold)
- scripts/eval/eval-rule-activation.py: `python3 scripts/eval/eval-rule-activation.py --scenarios tests/evals/rule-scenarios/working-with-legacy-code.json --dry-run` (exit code: 0)
- scripts/eval/eval-skill-overlap.py: `python3 scripts/eval/eval-skill-overlap.py --pairs scripts/eval/examples/example-overlap-pairs.json --dry-run` (exit code: 0)
- scripts/eval/eval_runtime_parity.py: `python3 scripts/eval/eval_runtime_parity.py --dry-run` (exit code: 3; missing copilot executable on PATH during CLI version probe)
- scripts/eval/eval-model-panel.py: `python3 scripts/eval/eval-model-panel.py --agents orchestrator --panel-config scripts/eval/panels/owner-copilot-cli.json --dry-run` (exit code: 0)
- scripts/eval/eval-e2e-delivery.py: `python3 scripts/eval/eval-e2e-delivery.py --fixtures scripts/eval/examples/e2e-delivery-fixtures.json --dry-run` (exit code: 0)
- scripts/eval/eval-model-sweep.py: `python3 scripts/eval/eval-model-sweep.py --agent security --fixtures evals/security-spike/fixtures --models claude-sonnet-4-6,claude-opus-4-6 --n-runs 3 --dry-run` (exit code: 0)
- scripts/eval/optimize-artifact.py: `python3 scripts/eval/optimize-artifact.py --help` (exit code: 0)
- scripts/validation/instruction_budget.py: `uv run python scripts/validation/instruction_budget.py --file-type .py` (exit code: 2; defect: doc-drift, `--file-type` unrecognized)

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied (package-prefixed before decision; canonical after)

## Cross-unit notes
- `scripts/eval/README.md` is the comprehensive architectural and operational documentation guide for all scripts in `scripts/eval/`, which are inventoried individually across units `inv-rjm-219` to `inv-rjm-236`.
- Identified 8 defects in `scripts/eval/README.md`: missing scenario fixture `tests/evals/research-scenarios.json` (line 14), path mismatch for `examples/example-scenarios.json` (line 1319), broken relative markdown links to ADR-057, ADR-023, and prompt-eval-methodology.md (lines 1393-1395), doc-drift regarding `--file-type` in `instruction_budget.py` (lines 1382, 1385), and kill-gate evaluation failure during dry-run in `eval-knowledge-integration.py` (line 22).

## Blocked or uncertain
none

## Time and size
Approximate tokens of source read: ~20,300 tokens (81,217 bytes across 1,396 lines). Approximate tokens of output written: ~7,500 tokens across 2 deliverable files.
