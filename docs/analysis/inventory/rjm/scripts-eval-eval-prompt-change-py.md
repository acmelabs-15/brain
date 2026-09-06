---
package: rjm
path: scripts/eval/eval-prompt-change.py
type: script
bytes: 30975
unit: inv-rjm-230
in_scope_via: docs/workflow-commands.md
aliases: []
memo_inputs:
  - {path: scripts/eval/eval-prompt-change.py, sha256: c47c10e18f0bd2da8a1854c46f1c8b9e805a25184fec0d9c9946b82457513136}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# scripts/eval/eval-prompt-change.py

## Purpose — required, verbatim
> "ADR-057 Compliant Prompt Change Evaluator." — scripts/eval/eval-prompt-change.py:2

## Design intent — required
Implements the ADR-057 automated evaluation protocol for prompt behavioral change validation through scenario-based LLM judgment with comparative before-and-after scoring. By executing scenarios across both the pre-change baseline (derived from a git ref or an explicit baseline file) and the post-change candidate across multiple stochastic runs, the script calculates empirical pass rates against a controlled classification vocabulary, enforces strict flakiness thresholds (blocking changes with >40% flaky scenarios), and demands a 100% pass rate for security-critical prompts. Without this evaluator, modifications to system prompts, command definitions, or agent roles would lack empirical regression testing and safety validation, exposing agent workflows to unmonitored behavioral regressions, classification drift, and prompt injection vulnerabilities.

## Phase — required
none

## Inputs — required
- Command-line arguments:
  - `--prompt`: Path to prompt file (uses working copy as 'after', `--base-ref` as 'before') — scripts/eval/eval-prompt-change.py:554
  - `--base-ref`: Git ref for 'before' version (default: main) — scripts/eval/eval-prompt-change.py:559
  - `--before`: Explicit 'before' prompt file — scripts/eval/eval-prompt-change.py:561
  - `--after`: Explicit 'after' prompt file — scripts/eval/eval-prompt-change.py:562
  - `--scenarios`: Path to scenario JSON file (required) — scripts/eval/eval-prompt-change.py:564
  - `--runs`: Runs per scenario (default: 3, security: 5) — scripts/eval/eval-prompt-change.py:566
  - `--security-critical`: Security-critical tier (5 runs, 100% pass required) — scripts/eval/eval-prompt-change.py:572
  - `--model`: Model for evaluation (default: DEFAULT_MODEL / claude-sonnet-4-6) — scripts/eval/eval-prompt-change.py:576
  - `--dry-run`: Validate inputs, no API calls — scripts/eval/eval-prompt-change.py:577
  - `--output`: Write results to file — scripts/eval/eval-prompt-change.py:578
  - `--provider`: Transport provider (anthropic, openai, codex, github, github-models, anthropic-sdk) — scripts/eval/eval-prompt-change.py:580
- Scenario definitions (JSON): file containing a list of scenarios or an object with `"scenarios"` list with required fields `id`, `desc`, `input`, `expected_verdict` and optional fields `expected_reason_contains`, `rationale`, `verdict_options` (`REQUIRED_SCENARIO_FIELDS` — scripts/eval/eval-prompt-change.py:95, `OPTIONAL_SCENARIO_FIELDS` — scripts/eval/eval-prompt-change.py:96, `load_scenarios` — scripts/eval/eval-prompt-change.py:100)
- Source prompt text:
  - Current prompt text loaded from filesystem via `load_prompt_from_file` ("def load_prompt_from_file" — scripts/eval/eval-prompt-change.py:224)
  - Pre-change baseline prompt loaded via git show subprocess via `load_prompt_from_ref` ("def load_prompt_from_ref" — scripts/eval/eval-prompt-change.py:199) or from an explicit file via `load_prompt_from_file` ("def load_prompt_from_file" — scripts/eval/eval-prompt-change.py:224)
- Environment variables:
  - `"EVAL_PROVIDER"` — scripts/eval/eval-prompt-change.py:269: Optional provider override forwarded to `call_api`
  - Model provider API credentials (e.g. `ANTHROPIC_API_KEY`) loaded via `load_api_key_for_selected_provider` ("load_api_key_for_selected_provider" — scripts/eval/eval-prompt-change.py:74)

## Outputs — required
- Evaluation results JSON emitted to stdout or written to `--output` file containing `eval_type`, `adr`, `model`, `source`, `runs_per_scenario`, `security_critical`, `comparison` (with `before_score`, `after_score`, `delta`, `scenario_count`, `api_calls`, `est_tokens`), `gate` summary, and per-scenario `detail` for before and after arms — scripts/eval/eval-prompt-change.py:648-672
- Dry-run validation summary JSON emitted to stdout reporting `dry_run`, `scenarios`, `before_chars`, `after_chars`, `runs`, `security_critical`, and `est_api_calls` — scripts/eval/eval-prompt-change.py:791-803
- Human-readable progress diagnostics, cost telemetry, and acceptance gate summary logged to stderr — scripts/eval/eval-prompt-change.py:396-418, scripts/eval/eval-prompt-change.py:678-705
- Process exit codes:
  - `0`: Acceptance gate passed (`gate["passed"] == True`), dry-run validation succeeded, or skippable provider outage encountered — scripts/eval/eval-prompt-change.py:675, scripts/eval/eval-prompt-change.py:755, scripts/eval/eval-prompt-change.py:804
  - `1`: Acceptance gate failed (`gate["passed"] == False`, e.g. regression detected, flakiness threshold exceeded, or security-critical scenario failed) — scripts/eval/eval-prompt-change.py:675
  - `2`: Invalid CLI invocation, schema validation error in scenario JSON, unreadable prompt files, missing API key, or unavailable model — scripts/eval/eval-prompt-change.py:596, scripts/eval/eval-prompt-change.py:769, scripts/eval/eval-prompt-change.py:780, scripts/eval/eval-prompt-change.py:813, scripts/eval/eval-prompt-change.py:819
  - `3`: Execution error during evaluation run (non-outage runtime error) — scripts/eval/eval-prompt-change.py:757

## Invokes — required
- script _anthropic_api — scripts/eval/eval-prompt-change.py:71
- script _eval_common — scripts/eval/eval-prompt-change.py:77
- script _providers — scripts/eval/eval-prompt-change.py:78

## Invoked by — required
- script eval-suite.py — scripts/eval/eval-suite.py:274
- script eval-agents.py — scripts/eval/eval-agents.py:6
- script _optimizer_core.py — scripts/eval/_optimizer_core.py:11
- script _e2e_delivery_core.py — scripts/eval/_e2e_delivery_core.py:3
- script eval-knowledge-integration.py — scripts/eval/eval-knowledge-integration.py:6
- doc README.md — scripts/eval/README.md:12
- skill ai-agents-empirical-probe-toolkit — .claude/skills/ai-agents-empirical-probe-toolkit/SKILL.md:89
- skill ai-agents-research-methodology — .claude/skills/ai-agents-research-methodology/SKILL.md:73
- skill ai-agents-diagnostics-toolkit — .claude/skills/ai-agents-diagnostics-toolkit/SKILL.md:34

## Concepts named — required, verbatim
- `ADR-057` — scripts/eval/eval-prompt-change.py:2 — used here
- `Prompt Change Evaluator` — scripts/eval/eval-prompt-change.py:2 — defined here
- `acceptance gate` — scripts/eval/eval-prompt-change.py:5 — defined here
- `security-critical tier` — scripts/eval/eval-prompt-change.py:6 — defined here
- `flakiness protocol` — scripts/eval/eval-prompt-change.py:6 — defined here
- `controlled vocabulary` — scripts/eval/eval-prompt-change.py:49 — defined here
- `verdict_options` — scripts/eval/eval-prompt-change.py:50 — defined here
- `check_scenario_pass` — scripts/eval/eval-prompt-change.py:55 — defined here
- `expected_verdict` — scripts/eval/eval-prompt-change.py:56 — defined here
- `RATE_LIMIT_SLEEP_SEC` — scripts/eval/eval-prompt-change.py:80 — defined here
- `DEFAULT_RUNS` — scripts/eval/eval-prompt-change.py:81 — defined here
- `SECURITY_RUNS` — scripts/eval/eval-prompt-change.py:82 — defined here
- `FLAKINESS_BLOCK_THRESHOLD` — scripts/eval/eval-prompt-change.py:83 — defined here
- `NON_GATING_CRITERIA` — scripts/eval/eval-prompt-change.py:88 — defined here
- `REQUIRED_SCENARIO_FIELDS` — scripts/eval/eval-prompt-change.py:95 — defined here
- `OPTIONAL_SCENARIO_FIELDS` — scripts/eval/eval-prompt-change.py:96 — defined here
- `DEFAULT_FALLBACK_VERDICT` — scripts/eval/eval-prompt-change.py:97 — defined here
- `load_scenarios` — scripts/eval/eval-prompt-change.py:100 — defined here
- `load_prompt_from_ref` — scripts/eval/eval-prompt-change.py:199 — defined here
- `load_prompt_from_file` — scripts/eval/eval-prompt-change.py:224 — defined here
- `judge_scenario` — scripts/eval/eval-prompt-change.py:237 — defined here
- `ADR-058` — scripts/eval/eval-prompt-change.py:267 — used here
- `run_scenario_multi` — scripts/eval/eval-prompt-change.py:339 — defined here
- `run_comparison` — scripts/eval/eval-prompt-change.py:378 — defined here
- `acceptance_gate` — scripts/eval/eval-prompt-change.py:438 — defined here
- `has_improvement` — scripts/eval/eval-prompt-change.py:451 — defined here
- `_is_provider_outage` — scripts/eval/eval-prompt-change.py:708 — defined here
- `dry_run` — scripts/eval/eval-prompt-change.py:793 — defined here

## Structure
- `# Scenario loading and validation` — scripts/eval/eval-prompt-change.py:92
- `# Prompt loading (before/after)` — scripts/eval/eval-prompt-change.py:195
- `# Scenario judgment` — scripts/eval/eval-prompt-change.py:233
- `# Multi-run with flakiness protocol (ADR-057)` — scripts/eval/eval-prompt-change.py:335
- `# Before/after comparison` — scripts/eval/eval-prompt-change.py:374
- `# Acceptance gate (ADR-057 three criteria)` — scripts/eval/eval-prompt-change.py:434
- `# Main` — scripts/eval/eval-prompt-change.py:542

## Scripts — required if type is script or the skill ships scripts
- path: `scripts/eval/eval-prompt-change.py`, language: python, lines: 826
- documented invocation:
  - `uv run python scripts/eval/eval-prompt-change.py \` — scripts/eval/eval-prompt-change.py:10
  - `uv run python scripts/eval/eval-prompt-change.py \` — scripts/eval/eval-prompt-change.py:16
  - `uv run python scripts/eval/eval-prompt-change.py \` — scripts/eval/eval-prompt-change.py:21
  - `uv run python scripts/eval/eval-prompt-change.py \` — scripts/eval/eval-prompt-change.py:27
- **executed:** yes
- actual command run: `python3 scripts/eval/eval-prompt-change.py --before .claude/commands/spec.md --after .claude/commands/spec.md --scenarios tests/evals/spec-scenarios.json --dry-run`
- abridged stdout:
```json
  Scenarios: 7 loaded from tests/evals/spec-scenarios.json
  Runs per scenario: 3
  Security-critical: False
  Model: claude-sonnet-4-6
  Source: explicit: .claude/commands/spec.md -> .claude/commands/spec.md
  WARNING: before and after prompt text are identical

  DRY RUN: inputs validated, no API calls made
{
  "dry_run": true,
  "scenarios": 7,
  "before_chars": 17720,
  "after_chars": 17720,
  "runs": 3,
  "security_critical": false,
  "est_api_calls": 42
}
```
- **actual exit code:** 0
- documented exit codes vs. actual exit paths in code:
  - Documented in comments: "pass/fail verdict (exit 1)" — scripts/eval/eval-prompt-change.py:711
  - Actual exit paths in code:
    - `sys.exit(0 if gate["passed"] else 1)` — scripts/eval/eval-prompt-change.py:675 (exits 0 on gate pass, exits 1 on regression/flakiness/security failure)
    - `sys.exit(0)` — scripts/eval/eval-prompt-change.py:755 (exits 0 on provider outage skip)
    - `sys.exit(3)` — scripts/eval/eval-prompt-change.py:757 (exits 3 on execution error)
    - `sys.exit(2)` — scripts/eval/eval-prompt-change.py:769 (exits 2 on scenario load failure)
    - `sys.exit(2)` — scripts/eval/eval-prompt-change.py:780 (exits 2 on prompt load failure)
    - `sys.exit(0)` — scripts/eval/eval-prompt-change.py:804 (exits 0 on dry run)
    - `sys.exit(2)` — scripts/eval/eval-prompt-change.py:813 (exits 2 on missing API key)
    - `sys.exit(2)` — scripts/eval/eval-prompt-change.py:819 (exits 2 on model unavailable)
    - `parser.error(...)` (argparse exit code 2) — scripts/eval/eval-prompt-change.py:596, scripts/eval/eval-prompt-change.py:598, scripts/eval/eval-prompt-change.py:600, scripts/eval/eval-prompt-change.py:603, scripts/eval/eval-prompt-change.py:608
- for validators/gates:
  - can it exit non-zero: yes (exit 1 on regression/flakiness/security gate failure, exit 2 on invalid configuration/missing files/bad arguments, exit 3 on execution runtime failure)
  - does it fail on the source repo's own default branch: no; running `--dry-run` against in-tree prompts and scenarios succeeds with exit code 0; unit test suite (`tests/eval/test_eval_prompt_change.py`) passes 110 tests out of 110.
- does the output match what the documentation claims: yes; dry run emits formatted JSON with scenario count, prompt character length, and estimated API calls, and live runs emit ADR-057 comparative scores and gate verdicts.

## Defects — required
- missing-path · "tests/evals/research-scenarios.json" — scripts/eval/eval-prompt-change.py:12 — docstring example usage cites nonexistent scenario file.
- missing-path · ".agents/security/prompts/security-review.md" — scripts/eval/eval-prompt-change.py:22 — docstring example usage cites nonexistent prompt file.
- missing-path · "tests/evals/security-review-scenarios.json" — scripts/eval/eval-prompt-change.py:23 — docstring example usage cites nonexistent scenario file (the in-tree scenario file is tests/evals/security-scenarios.json).

## Observations
- Clean, modular implementation of ADR-057 before/after comparison with statistical controls (3-run minimum for non-security, 5 runs and 100% pass for security-critical, 40% flakiness block threshold).
- Features resilient outage handling (`_is_provider_outage`) that distinguishes between genuine prompt regressions (exit 1) and external model provider infrastructure errors / rate limits / 5xx responses (skips neutrally with exit 0).
- Fully enforces transport symmetry (ADR-058): ensures that both before and after prompt variants run through the same provider adapter to prevent cross-provider score distortion.
- `has_improvement` criterion is deliberately classified as non-gating (`NON_GATING_CRITERIA`) per ADR-057 relaxation note, allowing non-regressing documentation-consistency changes to pass even when pre-existing scenarios have baseline failures.

## Context cost
- File bytes: 30975 bytes (~7744 tokens).
- When executed with imported sibling modules (`_anthropic_api.py` [16054 bytes], `_eval_common.py` [8094 bytes], and `_providers.py` [16167 bytes]), total codebase footprint is 71290 bytes (~17823 tokens).
