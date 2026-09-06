---
package: rjm
path: scripts/eval/panels/owner-copilot-cli.json
type: script
bytes: 1102
unit: inv-rjm-236
in_scope_via: docs/workflow-commands.md
aliases: []
memo_inputs:
  - {path: scripts/eval/panels/owner-copilot-cli.json, sha256: 883f252ebff9ef3be47e45e94785d5f1ce172e2a2fa73ac2bfa3ff2b11ab17f2}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# scripts/eval/panels/owner-copilot-cli.json

## Purpose — required, verbatim
> "The confirmed panel for this repository's deployment. default_panel() in" — scripts/eval/panels/owner-copilot-cli.json:3

## Design intent — required
Defines the concrete model evaluation panel configuration used for this repository's production deployment via the GitHub Copilot CLI provider. While `default_panel()` in `_model_panel_core.py` provides placeholder models and an older Opus identifier to keep offline test suites free of provider credentials, this file specifies the actual models operated by the repository owner (`claude-opus-5` and `gpt-5.6-sol`). Both tiers are designated as reference tiers rather than probe tiers because they represent the only two models deployed in production, eliminating probe degradation checks when no cheaper production tier exists. By specifying `copilot-cli` as the provider, evaluation sweeps reuse existing operator authentication without requiring dedicated API keys or incurring token billing. Without this configuration, automated model panel evaluations would be restricted to credential-free test placeholders or require passing full model definitions manually via command-line arguments.

## Phase — required
none

## Inputs — required
- Command-line arguments: consumed via the `--panel-config` argument to `eval-model-panel.py` (scripts/eval/panels/owner-copilot-cli.json:13).
- System environment / Authentication: operator's existing GitHub Copilot CLI authentication session (no API key required; scripts/eval/panels/owner-copilot-cli.json:10-11).
- JSON configuration schema: top-level `tiers` array containing tier dictionaries with `label`, `role`, `provider`, and `model` fields (scripts/eval/panels/owner-copilot-cli.json:15-28).

## Outputs — required
- Instantiated `Panel` object comprising two `PanelTier` objects (`opus5` and `sol56`) when parsed by `_model_panel_core.load_panel_config()`.
- Model sweep configuration consumed by `eval-model-panel.py` to evaluate agents (such as `orchestrator`) across the two reference model tiers.

## Invokes — required
none

## Invoked by — required
- doc README — scripts/eval/README.md:51
- script _model_panel_core — scripts/eval/_model_panel_core.py:91
- script _eval_common — scripts/eval/_eval_common.py:33

## Concepts named — required, verbatim
- `default_panel()` — scripts/eval/panels/owner-copilot-cli.json:3 — used here
- `_model_panel_core.py` — scripts/eval/panels/owner-copilot-cli.json:4 — used here
- `--panel-config` — scripts/eval/panels/owner-copilot-cli.json:5 — used here
- `reference` — scripts/eval/panels/owner-copilot-cli.json:7 — used here
- `probe tiers` — scripts/eval/panels/owner-copilot-cli.json:9 — used here
- `copilot-cli` — scripts/eval/panels/owner-copilot-cli.json:10 — used here
- `eval-model-panel.py` — scripts/eval/panels/owner-copilot-cli.json:13 — used here
- `--agents` — scripts/eval/panels/owner-copilot-cli.json:13 — used here
- `orchestrator` — scripts/eval/panels/owner-copilot-cli.json:13 — used here
- `tiers` — scripts/eval/panels/owner-copilot-cli.json:15 — defined here
- `label` — scripts/eval/panels/owner-copilot-cli.json:17 — defined here
- `opus5` — scripts/eval/panels/owner-copilot-cli.json:17 — defined here
- `role` — scripts/eval/panels/owner-copilot-cli.json:18 — defined here
- `provider` — scripts/eval/panels/owner-copilot-cli.json:19 — defined here
- `model` — scripts/eval/panels/owner-copilot-cli.json:20 — defined here
- `claude-opus-5` — scripts/eval/panels/owner-copilot-cli.json:20 — defined here
- `sol56` — scripts/eval/panels/owner-copilot-cli.json:23 — defined here
- `gpt-5.6-sol` — scripts/eval/panels/owner-copilot-cli.json:26 — defined here

## Structure
none (JSON configuration document defining top-level keys: _comment and tiers)

## Scripts — required if type is script or the skill ships scripts
- path: `scripts/eval/panels/owner-copilot-cli.json`, language: JSON / evaluation panel configuration, lines: 30
- documented invocation:
  "Usage: eval-model-panel.py --agents orchestrator --panel-config scripts/eval/panels/owner-copilot-cli.json" — scripts/eval/panels/owner-copilot-cli.json:13
- **executed:** yes
- actual command run, abridged stdout, **actual exit code**:
  - Direct execution: `python3 sources/rjm/scripts/eval/panels/owner-copilot-cli.json`
    stdout: `(empty)`
    **actual exit code**: 0 (evaluates as a valid Python dictionary expression literal)
  - Documented CLI invocation (dry run):
    `python3 scripts/eval/eval-model-panel.py --agents orchestrator --panel-config scripts/eval/panels/owner-copilot-cli.json --dry-run`
    stdout:
    ```
    DRY RUN: 1 unit(s) x 2 tier(s) = 2 harness invocation(s), n-runs=3, ZERO spend.
      reference band: ['opus5', 'sol56']
      - orchestrator @ opus5 (reference): provider=copilot-cli model=claude-opus-5
      - orchestrator @ sol56 (reference): provider=copilot-cli model=gpt-5.6-sol
    ```
    **actual exit code**: 0
  - Programmatic parsing test:
    `python3 -c 'import sys, pathlib; sys.path.insert(0, "sources/rjm/scripts/eval"); import _model_panel_core as mpc; text = pathlib.Path("sources/rjm/scripts/eval/panels/owner-copilot-cli.json").read_text(); p = mpc.load_panel_config(text); print(p)'`
    stdout:
    ```
    Panel(tiers=(PanelTier(label='opus5', role='reference', provider='copilot-cli', model='claude-opus-5'), PanelTier(label='sol56', role='reference', provider='copilot-cli', model='gpt-5.6-sol')), drop_threshold=0.15)
    ```
    **actual exit code**: 0
- documented exit codes (verbatim) vs. actual exit paths in code:
  - documented: none (this is a static JSON configuration file; consumer `eval-model-panel.py` defines exit codes `EXIT_OK = 0`, `EXIT_CONFIG = 2`, `EXIT_DEGRADED = 1`)
  - actual exit paths in code: none (static JSON configuration file containing no executable exit instructions)
- for validators/gates: can it exit non-zero? does it fail on the source repo's own default branch?
  Not a validator or gate; static configuration data for the model evaluation sweep runner `eval-model-panel.py`. When loaded, it defines two reference tiers with no probe tiers, meaning no degradation check can trigger a non-zero exit (`degraded_tiers` will always be empty).
- does the output match what the documentation claims?
  Yes, parses into two reference tiers (`opus5` with `claude-opus-5` and `sol56` with `gpt-5.6-sol`) under provider `copilot-cli` exactly as documented in the internal comment and `scripts/eval/README.md`.

## Defects — required
none

## Observations
- "Both tiers are references because these are the only two models the owner" — scripts/eval/panels/owner-copilot-cli.json:7
- "actionable. Add probe tiers here if that changes." — scripts/eval/panels/owner-copilot-cli.json:9
- "Provider is copilot-cli, which needs no API key and reaches both ids" — scripts/eval/panels/owner-copilot-cli.json:10
- Token pricing handling: `gpt-5.6-sol` has no per-token rate defined in `scripts/eval/_eval_common.py:40-45` because Copilot CLI meters premium requests rather than raw tokens; `claude-opus-5` has a rate of $0.005 input / $0.025 output per 1K tokens (`scripts/eval/_eval_common.py:38`).
- Execution boundary: `copilot-cli` runs in an isolated temporary directory to prevent instructions like `AGENTS.md` and `CLAUDE.md` from leaking into control cells (`scripts/eval/README.md:61-65`).

## Context cost
1,102 bytes, 30 lines, approximately 250 tokens.
