---
package: rjm
path: scripts/eval/eval-model-panel.py
type: script
bytes: 9491
unit: inv-rjm-229
in_scope_via: scripts/eval/README.md
aliases: []
memo_inputs:
  - {path: scripts/eval/eval-model-panel.py, sha256: b545769f2aec9f5be0caec08bce6804bd0466c270e9f726fe42949b4a54cb8bb}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# scripts/eval/eval-model-panel.py

## Purpose — required, verbatim
> "Tiered model-panel sweep CLI (issue #3042)." — scripts/eval/eval-model-panel.py:2

## Design intent — required
Sweeps agents or skills across a tiered panel of candidate models (frontier reference tiers establishing a baseline band, probe tiers observed for degradation) by orchestrating child runs of `eval-agent-vs-baseline.py` per (unit, tier) and aggregating `recall_delta` metrics into a degradation report via `_model_panel_core`. It provides a `--dry-run` capability that validates panel configurations and prints the complete matrix execution plan with zero API spend. Without this script, empirical multi-model evaluation across model tiers would require manual invocation and ad-hoc result gathering across heterogeneous model providers.

## Phase — required
none

## Inputs — required
- CLI argument `--agents` — list of agent unit names to sweep — scripts/eval/eval-model-panel.py:218
- CLI argument `--fixtures-template` — path template for fixtures with `{unit}` placeholder (default `"evals/{unit}-spike/fixtures"`) — scripts/eval/eval-model-panel.py:222-225
- CLI argument `--n-runs` — number of runs per cell (default 3) — scripts/eval/eval-model-panel.py:226
- CLI argument `--panel-config` — path to JSON panel configuration file — scripts/eval/eval-model-panel.py:228-230
- CLI argument `--dry-run` — validation flag to display planned matrix without API spend — scripts/eval/eval-model-panel.py:231-234
- CLI argument `--report` — path to write JSON summary artifact — scripts/eval/eval-model-panel.py:235-238
- CLI argument `--output-format` — output display format (`"human"` or `"json"`, default `"human"`) — scripts/eval/eval-model-panel.py:239-241
- Child evaluator report artifacts `report.json` read from child run directories — scripts/eval/eval-model-panel.py:75,135

## Outputs — required
- Terminal stdout formatted summary in human-readable table or JSON format — scripts/eval/eval-model-panel.py:273,275
- Dry-run execution plan printed to stdout when `--dry-run` is active — scripts/eval/eval-model-panel.py:257
- JSON evaluation summary report written to path specified by `--report` — scripts/eval/eval-model-panel.py:236

## Invokes — required
- script _eval_common — scripts/eval/eval-model-panel.py:34
- script _model_panel_core — scripts/eval/eval-model-panel.py:35
- script eval-agent-vs-baseline.py — scripts/eval/eval-model-panel.py:52
- script _providers — scripts/eval/eval-model-panel.py:185

## Invoked by — required
- doc README.md — scripts/eval/README.md:54
- config owner-copilot-cli.json — scripts/eval/panels/owner-copilot-cli.json:13
- script _model_panel_core.py — scripts/eval/_model_panel_core.py:11

## Concepts named — required, verbatim
- `issue #3042` — scripts/eval/eval-model-panel.py:2 — used here
- `eval-agent-vs-baseline.py` — scripts/eval/eval-model-panel.py:5 — used here
- `recall_delta` — scripts/eval/eval-model-panel.py:6 — used here
- `_model_panel_core` — scripts/eval/eval-model-panel.py:7 — used here
- `reference band` — scripts/eval/eval-model-panel.py:8,199 — used here
- `AGENTS.md` — scripts/eval/eval-model-panel.py:16 — used here
- `MalformedProviderMetadataError` — scripts/eval/eval-model-panel.py:34 — used here
- `CellResult` — scripts/eval/eval-model-panel.py:36 — used here
- `Panel` — scripts/eval/eval-model-panel.py:37 — used here
- `PanelConfigError` — scripts/eval/eval-model-panel.py:38 — used here
- `PanelTier` — scripts/eval/eval-model-panel.py:39 — used here
- `cell_from_report` — scripts/eval/eval-model-panel.py:40 — used here
- `default_panel` — scripts/eval/eval-model-panel.py:41 — used here
- `load_panel_config` — scripts/eval/eval-model-panel.py:42 — used here
- `summarize` — scripts/eval/eval-model-panel.py:43 — used here
- `to_human` — scripts/eval/eval-model-panel.py:44 — used here
- `to_json` — scripts/eval/eval-model-panel.py:45 — used here
- `EXIT_OK` — scripts/eval/eval-model-panel.py:48 — defined here
- `EXIT_CONFIG` — scripts/eval/eval-model-panel.py:49 — defined here
- `EXIT_EXTERNAL` — scripts/eval/eval-model-panel.py:50 — defined here
- `Runner` — scripts/eval/eval-model-panel.py:59 — defined here
- `_make_run_id` — scripts/eval/eval-model-panel.py:62 — defined here
- `_child_report_path` — scripts/eval/eval-model-panel.py:69 — defined here
- `_has_malformed_metadata_event` — scripts/eval/eval-model-panel.py:79 — defined here
- `_default_runner` — scripts/eval/eval-model-panel.py:94 — defined here
- `sweep` — scripts/eval/eval-model-panel.py:145 — defined here
- `_resolve_panel` — scripts/eval/eval-model-panel.py:174 — defined here
- `_known_providers` — scripts/eval/eval-model-panel.py:182 — defined here
- `_dry_run_report` — scripts/eval/eval-model-panel.py:194 — defined here
- `_parse_args` — scripts/eval/eval-model-panel.py:210 — defined here
- `main` — scripts/eval/eval-model-panel.py:245 — defined here

## Structure
- Module docstring documenting tiered sweep CLI, spend boundary, and exit codes (lines 1-18)
- Imports and module path setup (lines 20-46)
- Exit code constants and path templates (lines 48-55)
- `Runner` callable type alias definition (line 59)
- Run ID generator and report path helpers (lines 62-76)
- Malformed provider metadata detector `_has_malformed_metadata_event` (lines 79-91)
- Subprocess execution runner `_default_runner` with timeout and error handling (lines 94-142)
- Matrix sweep driver `sweep` across units and tiers (lines 145-171)
- Panel resolution and provider detection helpers (lines 174-191)
- Dry-run plan formatter `_dry_run_report` (lines 194-207)
- CLI argument specification `_parse_args` (lines 210-242)
- Main CLI coordinator `main` and script entry point (lines 245-281)

## Scripts — required if type is script or the skill ships scripts
- **path:** `scripts/eval/eval-model-panel.py`
- **language:** Python 3
- **lines:** 281
- **documented invocation:**
  > "python3 scripts/eval/eval-model-panel.py" — scripts/eval/README.md:54
  > "Usage: eval-model-panel.py --agents orchestrator --panel-config scripts/eval/panels/owner-copilot-cli.json" — scripts/eval/panels/owner-copilot-cli.json:13
- **executed:** yes
- **command:** `python3 sources/rjm/scripts/eval/eval-model-panel.py --agents architect reviewer --dry-run`
- **stdout:**
  ```text
  DRY RUN: 2 unit(s) x 4 tier(s) = 8 harness invocation(s), n-runs=3, ZERO spend.
    reference band: ['opus', 'sol']
    - architect @ opus (reference): provider=anthropic model=claude-opus-4-8
    - architect @ sol (reference): provider=openai model=openai/gpt-5.6
    - architect @ sonnet (probe): provider=anthropic model=claude-sonnet-4-6
    - architect @ terra (probe): provider=openai model=openai/gpt-5.6-mini
    - reviewer @ opus (reference): provider=anthropic model=claude-opus-4-8
    - reviewer @ sol (reference): provider=openai model=openai/gpt-5.6
    - reviewer @ sonnet (probe): provider=anthropic model=claude-sonnet-4-6
    - reviewer @ terra (probe): provider=openai model=openai/gpt-5.6-mini
  ```
- **actual exit code:** 0
- **documented exit codes:**
  > "Exit codes (AGENTS.md): 0 ok, 2 config (bad panel/args), 3 external (a harness" — scripts/eval/eval-model-panel.py:16
  > "invocation failed during a live run)." — scripts/eval/eval-model-panel.py:17
- **actual exit paths:**
  - `return EXIT_CONFIG` — scripts/eval/eval-model-panel.py:249
  - `return EXIT_CONFIG` — scripts/eval/eval-model-panel.py:254
  - `return EXIT_OK` — scripts/eval/eval-model-panel.py:258
  - `return EXIT_EXTERNAL if any(not c.ok for c in results) else EXIT_OK` — scripts/eval/eval-model-panel.py:276
  - `raise SystemExit(main())` — scripts/eval/eval-model-panel.py:280
- **for validators/gates:** Not a gating validator; exits 2 on argument/configuration errors (e.g. `--n-runs 0` or invalid panel config JSON), and exits 3 if any child cell invocation fails in a live run.
- **output matches documentation:** yes, dry-run prints matrix plan with zero spend, live run summarizes results in human or JSON format.

## Defects — required
none

## Observations
Uses dependency injection via `Runner` callable type (line 59) allowing unit tests to inject mock runners without executing subprocesses or spending API tokens. Binds child subprocess execution to an 1800s timeout to prevent stalled API calls from hanging the sweep indefinitely. Inspects child stderr specifically for `MalformedProviderMetadataError` JSON events (line 79) to fail fast on corrupted metadata.

## Context cost
9491 bytes, ~2370 tokens. Loads `_eval_common.py` (26483 bytes) and `_model_panel_core.py` (12427 bytes). Total context cost: ~48401 bytes (~12100 tokens).
