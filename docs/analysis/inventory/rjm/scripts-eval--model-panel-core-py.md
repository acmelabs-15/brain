---
package: rjm
path: scripts/eval/_model_panel_core.py
type: script
bytes: 12427
unit: inv-rjm-218
in_scope_via: docs/workflow-commands.md
aliases: []
memo_inputs:
  - {path: scripts/eval/_model_panel_core.py, sha256: df08d8058819785d7a4bd1419acf63539221c9c0a3b27274e5f75f5d231dccef}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# scripts/eval/_model_panel_core.py

## Purpose — required, verbatim
> "Pure model and aggregation for the tiered model-panel sweep (issue #3042)." — scripts/eval/_model_panel_core.py:1

## Design intent — required
Provides pure data models, configuration parsing, degradation classification, and report serialization for sweeping agent/skill evaluations across a multi-tier model panel. Isolates the evaluation logic (effect size delta calculation, reference band aggregation, and probe degradation thresholds) behind a testable boundary free from live provider API I/O and credentials. Without this module, assessing whether agent prompt efficacy degrades when deployed to lower-tier models would require ad-hoc scripts or coupling statistical aggregation directly to expensive, non-deterministic provider network calls.

## Phase — required
none

## Inputs — required
- Model panel configuration mapping with `tiers` list (`label`, `role`, `provider`, `model`) and optional `drop_threshold` (scripts/eval/_model_panel_core.py:103-146) or JSON configuration string (scripts/eval/_model_panel_core.py:312-320).
- Single-model evaluation report mapping (`report.json`) from the evaluation harness containing `error_count`, `recall_delta`, and `bootstrap_ci_95` (scripts/eval/_model_panel_core.py:177-212).
- Optional set of `known_providers` for configuration validation (scripts/eval/_model_panel_core.py:106, 131-135).

## Outputs — required
- Instantiated dataclass objects: `PanelTier` (scripts/eval/_model_panel_core.py:45), `Panel` (scripts/eval/_model_panel_core.py:64), `CellResult` (scripts/eval/_model_panel_core.py:150), and `UnitVerdict` (scripts/eval/_model_panel_core.py:166).
- Serialized JSON dictionary summary containing `drop_threshold`, `reference_tiers`, `probe_tiers`, and per-unit metrics via `to_json()` (scripts/eval/_model_panel_core.py:268-289).
- Formatted human-readable summary string detailing per-unit reference and probe deltas with degradation classification tags via `to_human()` (scripts/eval/_model_panel_core.py:291-310).

## Invokes — required
none

## Invoked by — required
- script _model_panel_core — scripts/eval/eval-model-panel.py:35

## Concepts named — required, verbatim
- `reference band` — scripts/eval/_model_panel_core.py:5 — used here
- `degradation classification` — scripts/eval/_model_panel_core.py:10 — defined here
- `recall_delta` — scripts/eval/_model_panel_core.py:14 — used here
- `drop_threshold` — scripts/eval/_model_panel_core.py:17 — defined here
- `ROLE_REFERENCE` — scripts/eval/_model_panel_core.py:31 — defined here
- `ROLE_PROBE` — scripts/eval/_model_panel_core.py:32 — defined here
- `DEFAULT_DROP_THRESHOLD` — scripts/eval/_model_panel_core.py:37 — defined here
- `PanelConfigError` — scripts/eval/_model_panel_core.py:40 — defined here
- `PanelTier` — scripts/eval/_model_panel_core.py:45 — defined here
- `Panel` — scripts/eval/_model_panel_core.py:64 — defined here
- `default_panel` — scripts/eval/_model_panel_core.py:79 — defined here
- `parse_panel` — scripts/eval/_model_panel_core.py:103 — defined here
- `CellResult` — scripts/eval/_model_panel_core.py:150 — defined here
- `UnitVerdict` — scripts/eval/_model_panel_core.py:166 — defined here
- `cell_from_report` — scripts/eval/_model_panel_core.py:177 — defined here
- `summarize_unit` — scripts/eval/_model_panel_core.py:215 — defined here
- `summarize` — scripts/eval/_model_panel_core.py:257 — defined here
- `to_json` — scripts/eval/_model_panel_core.py:268 — defined here
- `to_human` — scripts/eval/_model_panel_core.py:291 — defined here
- `load_panel_config` — scripts/eval/_model_panel_core.py:312 — defined here

## Structure
none (python module; top-level functions and classes: PanelConfigError, PanelTier, Panel, default_panel, parse_panel, CellResult, UnitVerdict, cell_from_report, summarize_unit, summarize, to_json, to_human, load_panel_config)

## Scripts — required if type is script or the skill ships scripts
- path: `scripts/eval/_model_panel_core.py`, language: Python 3, lines: 321
- documented invocation:
  "All eval execution (running the harness through a provider) lives in `eval-model-panel.py` behind a single runner seam, so this logic is unit-testable with no API spend." — scripts/eval/_model_panel_core.py:10-12
- **executed:** yes
- actual command run, abridged stdout, **actual exit code**:
  - Direct execution: `python3 sources/rjm/scripts/eval/_model_panel_core.py`
    stdout: `(empty)`
    **actual exit code**: 0
  - Functional execution:
    `python3 -c 'import sys; sys.path.insert(0, "sources/rjm/scripts/eval"); import _model_panel_core as mpc; p = mpc.default_panel(); print(p.drop_threshold); print(mpc.to_human(p, []))'`
    stdout:
    ```
    0.15
    Model-panel sweep: 0 unit(s), reference band ['opus', 'sol'], drop threshold 0.15
    ```
    **actual exit code**: 0
- documented exit codes (verbatim) vs. actual exit paths in code:
  No exit codes documented; the module contains no `sys.exit()` or `exit()` calls. It raises `PanelConfigError` (scripts/eval/_model_panel_core.py:40, lines 117, 122, 124, 127, 132, 138, 143, 145, 317, 319) on malformed configurations or returns `CellResult(..., error=...)` on malformed evaluation report payloads.
- for validators/gates: can it exit non-zero? does it fail on the source repo's own default branch?
  Not a standalone CLI validator/gate script. Raises `PanelConfigError` on invalid configurations and classifies units as `degraded_tiers` or `incomplete` in `summarize_unit()`.
- does the output match what the documentation claims?
  Yes, pure module faithfully models the multi-tier reference band, probe degradation threshold, and reporting shapes.

## Defects — required
none

## Observations
- The separation of pure statistical logic (`_model_panel_core.py`) from execution and provider networking (`eval-model-panel.py`) is an exemplary implementation of testability and deterministic evaluation without API spend.
- The two frontier reference tiers (`ROLE_REFERENCE`) define the pass/fail reference band, while lower probe tiers (`ROLE_PROBE`) observe degradation without gating deployment.
- Default drop threshold is 0.15 (`DEFAULT_DROP_THRESHOLD = 0.15`), flagging probe tier performance drops exceeding 15% recall delta below the frontier reference band.

## Context cost
12,427 bytes, approximately 3,100 tokens. Isolated module (imports standard library modules `json`, `math`, `dataclasses`, `typing` only).
