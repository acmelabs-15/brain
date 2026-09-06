---
unit: inv-rjm-221
phase: 1
package: rjm
session: 007
subagent_returned: complete
---

# Unit inv-rjm-221

## Files assigned
- [x] /Users/peterkloss/Dev/ACMElabs/brain-v2/sources/rjm/scripts/eval/_providers.py
- [x] /Users/peterkloss/Dev/ACMElabs/brain-v2/sources/rjm/scripts/eval/_report_aggregator.py

## Outputs produced
- docs/analysis/inventory/rjm/scripts-eval--providers-py.md (8160 bytes)
- docs/analysis/inventory/rjm/scripts-eval--report-aggregator-py.md (8937 bytes)
- docs/analysis/inventory/rjm/_units/inv-rjm-221.md (2621 bytes)

## Scripts executed
- scripts/eval/_providers.py, python3 sources/rjm/scripts/eval/_providers.py, 0
- scripts/eval/_providers.py, python3 -c "import sys; sys.path.insert(0, 'sources/rjm/scripts/eval'); import _providers; print(_providers.known_provider_names())", 0
- scripts/eval/_report_aggregator.py, python3 sources/rjm/scripts/eval/_report_aggregator.py, 0
- scripts/eval/_report_aggregator.py, python3 -c "import sys; sys.path.insert(0, 'sources/rjm/scripts/eval'); import _report_aggregator; print(_report_aggregator._flaky_halt_count(10), _report_aggregator._flaky_halt_count(30))", 0

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied (package-prefixed before decision; canonical after)

## Cross-unit notes
- `scripts/eval/_providers.py` defines the multi-provider transport strategy (`EvalProvider` protocol) and provider registry (`_REGISTRY`), abstracting completions across OpenAI, GitHub Models, Anthropic SDK, and Copilot CLI. It is imported by `scripts/eval/_anthropic_api.py` and `eval-model-panel.py`, and was the origin module from which `scripts/eval/_copilot_cli.py` was extracted.
- `scripts/eval/_report_aggregator.py` implements statistical recall, paired bootstrap confidence intervals (n=10,000), N-aware flakiness detection, and form-factor comparison (`compute_form_factor`). It links directly to `_eval_agent_types.py`, `_eval_common.py`, `_plan_runner.py`, and ADR-058 / ADR-075 / TASK-004.
- Both files are internal evaluation library modules; neither is a standalone CLI script. Direct execution of both modules terminates cleanly with exit code 0.

## Blocked or uncertain
none

## Time and size
Approximate source tokens read: ~10,662 tokens (42,650 bytes). Approximate output tokens written: ~4,500 tokens (~19,000 bytes across two inventory cards and unit report).
